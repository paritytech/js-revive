type SolcInput = {
  [contractName: string]: {
    content: string;
  };
};

type SolcOutput = {
  contracts: {
    [contractName: string]: {
      Storage: {
        abi: Array<{
          name: string;
          inputs: Array<{ name: string; type: string }>;
          outputs: Array<{ name: string; type: string }>;
          stateMutability: string;
          type: string;
        }>;
        evm: {
          bytecode: { object: string };
        };
      };
    };
  };
  errors?: Array<{
    component: string;
    errorCode: string;
    formattedMessage: string;
    message: string;
    severity: string;
    sourceLocation?: {
      file: string;
      start: number;
      end: number;
    };
    type: string;
  }>;
};

export async function compile(sources: SolcInput): Promise<SolcOutput> {
  const body = {
    cmd: "--standard-json",
    input: JSON.stringify({
      language: "Solidity",
      sources,
      settings: {
        optimizer: { enabled: false, runs: 200 },
        outputSelection: {
          "*": {
            "*": ["abi"],
          },
        },
      },
    }),
  };

  const response = await fetch("https://remix-backend.polkadot.io/resolc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`${response.statusText}: ${text}`);
  }

  return (await response.json()) as SolcOutput;
}
