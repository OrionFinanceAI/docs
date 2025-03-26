# Overview

Orion Finance is designed as a modular, permissionless protocol for onchain portfolio management. At its core, it enables the creation and execution of customizable, yield-generating vaults that support multivariate strategies, batch rebalancing, and seamless composability.

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

## Machine Learning-Enabled Strategy Abstraction [TODO: should we provide optimisation and risk management for custom strategies?]

A core differentiator for Orion is its ability to **abstract away financial complexity** using machine learning, allowing vault creators to:
- Optimize allocation across multiple assets
- Minimize drawdowns
- Adapt dynamically to market regimes

This abstraction allows everyday users to access intelligent portfolios without needing to manage or understand the strategy mechanics themselves.

## Composability and Integrations

Vaults can be used as:
- Inputs to other vaults (recursive portfolios);
- Collateral in lending protocols;
- Building blocks in structured products.

This makes Orion an ideal substrate for DeFi-native fund managers, structured product designers, or protocols seeking capital-efficient yield routing.

### On the Relation with Marketplaces [TODO: ??]

Prediction marketplaces: https://olas.network/agent-economies/predict

Data marketplaces: https://oceanprotocol.com/build/data-marketplaces/

## Foundation for the Future

While Orion aims to become the **infrastructure layer** for permissionless portfolio creation.

Its modular and extensible design allows for:
- Ecosystem vault templates
- Permissionless strategy marketplaces
- Incentive-driven discovery and reputation

Together, these building blocks will form a **robust, standard for onchain portfolio management**.
