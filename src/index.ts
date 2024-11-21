import solc from 'solc'
import path from 'path'
import createRevive = require("./resolc.js")
import { existsSync, readFileSync } from 'fs'

type SolcInput = {
    [contractName: string]: {
        content: string
    }
}

type SolcError = {
    component: string
    errorCode: string
    formattedMessage: string
    message: string
    severity: string
    sourceLocation?: {
        file: string
        start: number
        end: number
    }
    type: string
}

type SolcOutput = {
    contracts: {
        [contractPath: string]: {
            [contractName: string]: {
                abi: Array<{
                    name: string
                    inputs: Array<{ name: string; type: string }>
                    outputs: Array<{ name: string; type: string }>
                    stateMutability: string
                    type: string
                }>
                evm: {
                    bytecode: { object: string }
                }
            }
        }
    }
    errors?: Array<SolcError>
}

export function resolveInputs(sources: SolcInput): SolcInput {
    const input = {
        language: 'Solidity',
        sources,
        settings: {
            outputSelection: {
                '*': {
                    '*': ['evm.bytecode.object'],
                },
            },
        },
    }

    const out = solc.compile(JSON.stringify(input), {
        import: (path: string) => {
            return {
                contents: readFileSync(tryResolveImport(path), 'utf8'),
            }
        },
    })

    const output = JSON.parse(out) as {
        sources: { [fileName: string]: { id: number } }
        errors: Array<SolcError>
    }

    if (output.errors && Object.keys(output.sources).length === 0) {
        throw new Error(output.errors[0].formattedMessage)
    }

    return Object.fromEntries(
        Object.keys(output.sources).map((fileName) => {
            return [
                fileName,
                sources[fileName] ?? {
                    content: readFileSync(tryResolveImport(fileName), 'utf8'),
                },
            ]
        })
    )
}

export async function compile(sources: SolcInput): Promise<SolcOutput> {
    // compile with solc to resolve all the imports
    sources = resolveInputs(sources)

    const input = JSON.stringify({
            language: 'Solidity',
            sources,
            settings: {
                optimizer: { enabled: false, runs: 200 },
                outputSelection: {
                    '*': {
                        '*': ['abi'],
                    },
                },
            },
        });

    const revive = await createRevive();
    revive.solc = solc;
    revive.setStdinData(input);

    var stdout = "";
    revive.setStdoutCallback(function(char: string) {
        stdout += char;
    });

    var stderr = "";
    revive.setStderrCallback(function(char: string) {
        stderr += char;
    });

    // Compile the Solidity source code
    let result = revive.callMain(['--standard-json']);

    if (result) {
        throw new Error(stderr)
    }

    return JSON.parse(stdout) as SolcOutput
}

/**
 * Resolve an import path to a file path.
 * @param importPath - The import path to resolve.
 */
export function tryResolveImport(importPath: string) {
    // resolve local path
    if (existsSync(importPath)) {
        return path.resolve(importPath)
    }

    const importRegex = /^(@?[^@/]+(?:\/[^@/]+)?)(?:@([^/]+))?(\/.+)$/
    const match = importPath.match(importRegex)

    if (!match) {
        throw new Error('Invalid import path format.')
    }

    const basePackage = match[1] // "foo", "@scope/foo"
    const specifiedVersion = match[2] // "1.2.3" (optional)
    const relativePath = match[3] // "/path/to/file.sol"

    let packageJsonPath
    try {
        packageJsonPath = require.resolve(
            path.join(basePackage, 'package.json')
        )
    } catch {
        throw new Error(`Could not resolve package ${basePackage}`)
    }

    // Check if a version was specified and compare with the installed version
    if (specifiedVersion) {
        const installedVersion = JSON.parse(
            readFileSync(packageJsonPath, 'utf-8')
        ).version

        if (installedVersion !== specifiedVersion) {
            throw new Error(
                `Version mismatch: Specified ${basePackage}@${specifiedVersion}, but installed version is ${installedVersion}`
            )
        }
    }

    const packageRoot = path.dirname(packageJsonPath)

    // Construct full path to the requested file
    const resolvedPath = path.join(packageRoot, relativePath)
    if (existsSync(resolvedPath)) {
        return resolvedPath
    } else {
        throw new Error(`Resolved path ${resolvedPath} does not exist.`)
    }
}
