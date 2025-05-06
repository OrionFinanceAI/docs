# Permissionless Vaults

Orion Finance is **fully permissionless**, meaning anyone can create, manage, and invest in vaults without requiring approval or whitelisting. 

This open design ensures that **portfolio management is decentralized and composable**, enabling broader innovation and capital efficiency in DeFi.

## Why Permissionless Matters

Traditional asset management platforms allow only approved teams and entities to deploy investment strategies and build auditable, out-of-sample track records. This:
- Limits innovation to pre-approved participants;
- Reduces accessibility for non-institutional users;
- Creates inefficiencies in strategy discovery and execution.

Orion takes a **radically different approach**, where **anyone can create and customize vaults**.

This model:
- **Encourages competition** – The best vaults attract deposits based on performance, not exclusivity;
- **Removes barriers to entry** – No need for approval to launch a portfolio strategy;
- **Expands composability** – Vaults can integrate freely with other protocols.

| Feature                | Traditional Asset Management | Orion Permissionless Vaults |
|------------------------|----------------------------|-----------------------------|
| **Access**            | Restricted (only approved managers) | Open to anyone |
| **Transparency**      | Limited (offchain reporting) | Fully onchain and verifiable |
| **Execution Costs**   | High fees and centralized costs | Gas-efficient orchestration and automation |

## How Permissionless Vaults Work

Orion vaults follow the **ERC-4626 standard**, making them **interoperable, composable, and extendable**.

1. **Anyone Can Deploy a Vault**  
   - No whitelisting or permission required.
   - Vault creators define **strategy parameters, risk levels, and assets**.

2. **Open Strategy Execution**
   - Strategies can be **hardcoded, algorithmic, or dynamically managed**.  
   - Performance data is **transparent and verifiable onchain**.

3. **Composability and Integration**
   - Vaults can be **used as collateral**, **stacked together**, or **wrapped into structured products**.

## Quantitative Vault Assessment

Vaults on Orion are evaluated only by their performance and its **statistical reliability**: being a truly permissionless environment, no gatekeepers can discretionarly whitelist strategies. All Orion vaults are evaluated and ranked by the same metrics, ensuring a level playing field in which the best strategies can thrive.

We note that live strategies may have:
- Very short track records,
- High return volatility,
- Non-Gaussian return distributions,

To this end, Orion introduces a robust evaluation framework based on the **Probabilistic Sharpe Ratio (PSR)**[^1]. In the context of Orion vaults, PSR can be used to:

- Score and rank vaults not just by raw performance, but by the **confidence level** in their outperformance.
- Provide a **robust and statistically valid filter** against noisy or overfit strategies.
- Help investors differentiate **luck from skill**, especially in early-stage vaults.

[^1]: **Bailey, D. H., & López de Prado, M. (2012).**   [*The Sharpe Ratio Efficient Frontier*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1821643). Journal of Risk, Vol. 15, No. 2, Winter 2012.