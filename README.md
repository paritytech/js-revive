> The code moved to https://github.com/paritytech/revive. The package is now published under the name `@parity/resolc` on npm.

# @parity/revive

Node.js module to compile Solidity contracts to Polkavm bytecode, using [Revive](https://github.com/paritytech/revive)

# Usage

```typescript
const sources = {
["contracts/1_Storage.sol"]: {
    content: readFileSync("fixtures/storage.sol", "utf8"),
}

const out = await compile(sources);
```
