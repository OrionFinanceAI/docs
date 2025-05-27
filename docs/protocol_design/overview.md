# Overview

Orion Finance is designed as a modular, permissionless protocol for onchain portfolio management. At its core, it enables the creation and execution of customizable, yield-generating vaults that support multivariate strategies and seamless composability.

## Modular Vault Architecture

Orion vaults are built around the [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626) standard but extend its design to support:
- **Multi-asset portfolios**;
- **Dynamic allocation strategies**;
- **Custom vault templates** for different risk profiles.

Each vault consists of:
- **A controller**, strategy execution logic;
- **A set of whitelisted assets**;
- **Performance-tracking and reporting modules**;
- **Optional privacy-preserving layers (via fhEVM)**.

This modularity allows asset managers to deploy vaults tailored to specific risk/reward profiles.

## Machine Learning-Enabled Strategy Abstraction

A core differentiator for Orion is its ability to **abstract away complexity** using financial machine learning, allowing vault managers to:
- Optimize allocation across multiple assets;
- Minimize drawdowns;
- Adapt dynamically to market regimes;
- Provide optimization and risk management for custom strategies.

This abstraction allows everyday users to access intelligent portfolios without needing to manage or understand the strategy mechanics themselves.

![heatmap](../../static/img/heatmap.png)

## Composability and Integrations

Vaults can be used as:
- **DeFi fund of funds**: Orion vaults will be used as building blocks of more structured products.

- **Lending and borrowing**: Orion will connect with leading lending protocols, enabling users to use [LP shares as collateral](https://evc.wtf/).

- **Liquidity provisioning**: Orion incentivizes users to provide liquidity to Automatic Market Making pools.

- **Principal and Yield (PT/YT) token**: given their yield-bearing nature, Orion vaults will be integrated into yield-trading protocols[^1].

This makes Orion an ideal substrate for DeFi-native fund managers, structured product designers, or protocols seeking capital-efficient yield routing.

### On the Relation with Marketplaces

Orion integrates with existing prediction and data marketplaces to enhance strategy development and market intelligence. Some potential integrations include:

- Prediction marketplaces[^2] [^3] can inform vault strategies by incorporating predictive models and agent-based forecasts;

- Data marketplaces[^4] [^5] enable vaults to leverage external data feeds for better-informed allocations and real-time market adaptation.

[^1]: [Yield Tokenization](https://docs.pendle.finance/ProtocolMechanics/YieldTokenization/SY)
[^2]: [Olas Predict](https://olas.network/agent-economies/predict)
[^3]: [31 Use Cases for the Allora Network](https://medium.com/allora-network/31-use-cases-for-the-allora-network-69034608b1e8)
[^4]: [Ocean Protocol - Data Marketplaces](https://oceanprotocol.com/build/data-marketplaces/)
[^5]: [Cambrian](https://www.cambrian.org/)