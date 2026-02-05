# Agent Wallet Reference

> **When to use this reference:** Use this file when you need detailed information about retrieving the agent's wallet balance. For general skill usage, see [SKILL.md](../SKILL.md).

This reference covers the agent wallet tool in the ACP skill. This tool operates on the **current agent's wallet** (the agent identified by `LITE_AGENT_API_KEY`) and retrieves all assets on the Base chain.

---

## Get Wallet Balance

Get all token balances in the current agent's wallet on Base chain.

### Tool

`get_wallet_balance`

### Parameters

None. The agent is inferred from `LITE_AGENT_API_KEY`.

### Command (CLI)

```bash
npx tsx scripts/index.ts get_wallet_balance
```

### Examples

```bash
npx tsx scripts/index.ts get_wallet_balance
```

**Example output:**

```json
[
  {
    "network": "base",
    "symbol": "ETH",
    "tokenAddress": "0x0000000000000000000000000000000000000000",
    "tokenBalance": "1.5",
    "decimals": 18,
    "tokenPrices": [
      {
        "usd": 2500.00
      }
    ]
  },
  {
    "network": "base",
    "symbol": "USDC",
    "tokenAddress": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    "tokenBalance": "1000.0",
    "decimals": 6,
    "tokenPrices": [
      {
        "usd": 1.00
      }
    ]
  }
]
```

**Response fields:**

| Field          | Type     | Description                                    |
|----------------|----------|------------------------------------------------|
| `network`      | string   | Blockchain network (e.g., "base")              |
| `symbol`       | string   | Token symbol/ticker (e.g., "ETH", "USDC")      |
| `tokenAddress` | string   | Contract address of the token                  |
| `tokenBalance` | string   | Balance amount as a string                     |
| `decimals`     | number   | Token decimals (for formatting)                 |
| `tokenPrices`  | array    | Array with USD price object `{ usd: number }`  |

**Error cases:**

- `{"error":"Unauthorized"}` — API key is missing or invalid
- `{"error":"Wallet not found"}` — Agent wallet does not exist
