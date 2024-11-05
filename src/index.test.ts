import { test } from "node:test";
import { readFileSync } from "node:fs";
import assert from "node:assert";
import { compile } from ".";

test("check Ok output", async () => {
  const contract = "contracts/1_Storage.sol";
  const sources = {
    [contract]: {
      content: readFileSync("fixtures/storage.sol", "utf8"),
    },
  };

  const out = await compile(sources);
  assert(out.contracts[contract].Storage.abi != null);
  assert(out.contracts[contract].Storage.evm.bytecode != null);
});

test("check Err output", async () => {
  const contract = "contracts/1_Storage.sol";
  const sources = {
    [contract]: {
      content: readFileSync("fixtures/storage_bad.sol", "utf8"),
    },
  };

  const out = await compile(sources);
  assert(
    out?.errors?.[0].message.includes(
      "SPDX license identifier not provided in source file",
    ),
  );
  assert(
    out?.errors?.[1].message.includes(
      "Source file does not specify required compiler version",
    ),
  );
});
