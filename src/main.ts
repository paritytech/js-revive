import { readFileSync } from 'node:fs'
import { compile } from '.'

const contract = 'fixtures/token.sol'
const sources = {
    [contract]: {
        content: readFileSync(contract, 'utf8'),
    },
}

async function main() {
    const outputs = await compile(sources, { wasm: true })
    console.log(outputs)
}

main().catch(console.error)
