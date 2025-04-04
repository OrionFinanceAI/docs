# What is Orion? 

Orion Finance is a **permissionless portfolio management protocol** designed to optimize onchain capital efficiency while minimizing costs and duplication of efforts for users. It enables anyone to create, manage, and invest in structured portfolios through **modular, yield-bearing vaults**.

At its core, Orion is building a next-generation permissionless infrastructure that democratizes access to advanced portfolio strategies and lowers the barrier to entry for managers to participate in a marketplace of indexes and actively managed DeFi products.

We are building [Millennium](https://www.efinancialcareers.it/news/2019/01/what-is-it-like-to-work-for-millennium-management). On-chain.

## Why Does Orion Exist?

DeFi is powerful, yet fragmented and riddled with inefficiencies. Traditional vaults are gas-intensive and the barrier to entry for new managers is steep, requiring expertise in both DeFi and Asset Management.

Orion aims to **bridge this gap** by providing an on-chain and off-chain infrastructure that allows for:
- **Efficiency** – Transactions bundling[^1], batching[^2] and peer-to-peer netting[^3] to reduce costs.  
- **Permissionlessness** – Anyone can create and manage portfolios, without gatekeepers.
- **Customization** – Vaults can be tailored with different risk/reward profiles.

Orion is not just another DeFi vault protocol. It’s **infrastructure** — a foundational layer for asset managers, treasury managers, and users seeking better onchain portfolio management.

## Key Features

### [Financial Machine Learning](../key_features/financial_machine_learning.md)

Orion defines and integrates [Financial Machine Learning](https://skfolio.org/) primitives into the protocol, enabling data-driven decision-making for both active and passive strategies. By providing institutional-grade quant infrastructure for on-chain asset management, we lower entry barriers for portfolio managers.

### [Confidential EVM Smart Contracts](../key_features/fhEVM.md)

Orion leverages [fully homomorphic encryption (fhEVM)](https://www.zama.ai/post/onboard-the-next-trillions-in-defi-with-confidential-lending) to enhance privacy of on-chain track records while maintaining transparency over the tokenized strategy performance.

### [Bundling, Batching and Netting](../protocol_design/tokenomics#bundling-batching-and-netting.md)

Orion **bundles** multidimensional rebalancing orders into a single transaction to reduce costs, **batches transactions** across multiple vaults to **democratize gas fees**. Finally, **peer-to-peer bartering** further optimizes execution, minimizing unnecessary gas fees.

This leads to a **scalable tokenomics**, not only with respect to Total Value Locked, but also with respect to the number of users and active products.

### [Permissionless Vaults](../key_features/vaults.md)

Vaults are [ERC-4626-compliant](https://docs.yearn.fi/getting-started/products/yvaults/v3) and extend beyond single-asset yield strategies, supporting **multi-asset rebalancing** with automated execution.

[^1]: [Morpho - Introducing Bundler3](https://morpho.mirror.xyz/iq_YeOw05eUeWgxZf1CYxWvU5aQO_tCPQFtlsv8ogeo)
[^2]: [Cow Protocol - Coincidence of Wants](https://docs.cow.fi/cow-protocol/concepts/how-it-works/coincidence-of-wants)
[^3]: [A Netting Protocol for Liquidity-saving Automated Market Makers.](https://ceur-ws.org/Vol-3791/paper18.pdf)