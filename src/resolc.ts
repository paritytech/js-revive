import soljson from 'solc/soljson'
import Resolc from './resolc/resolc'
import type { SolcOutput } from '.'

export function resolc(input: string): SolcOutput {
    const m = Resolc() as any
    m.soljson = soljson

    // Set input data for stdin
    m.writeToStdin(input)

    // Compile the Solidity source code
    m.callMain(['--standard-json'])
    return JSON.parse(m.readFromStdout()) as SolcOutput
}
