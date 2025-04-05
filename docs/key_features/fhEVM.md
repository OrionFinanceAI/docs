# Confidential EVM Smart Contracts

## What is fhEVM?

fhEVM[^1] [^2] is an innovative technology that integrates **Fully Homomorphic Encryption (FHE)** into the **Ethereum Virtual Machine (EVM)**. This integration enables the execution of confidential smart contracts on encrypted data — ensuring both **data privacy** and **composability** within blockchain environments.


## How fhEVM Works

1. **Data Encryption**  
    Transaction inputs and on-chain states are encrypted, ensuring that sensitive information remains confidential, even from validators.

2. **Encrypted Computation**  
    Smart contracts operate directly on encrypted data using FHE, allowing computations without decryption. This preserves data privacy while enabling complex operations.

3. **Decentralized Decryption**  
    Access to decrypted data is managed on-chain through programmable privacy settings. The decryption process is decentralized via a **threshold multiparty computation (MPC) protocol**, enhancing security and trustlessness.

All of this runs **onchain**, verifiable by anyone, and remains **non-custodial**.


## Why Does This Matter for DeFi?

DeFi today is *transparent by default* — which is [powerful, but often limiting](https://www.zama.ai/post/stablecoin-next-chapter-built-in-confidentiality-with-fully-homomorphic-encryption
).

Some use cases demand **confidentiality**, such as:
- **Private portfolio allocations:** Transaction values and balances are encrypted, preserving privacy while maintaining auditability.
- **Lending without exposing positions:** Lenders and borrowers interact without exposing position sizes or strategies, enabling a more fair and efficient market.
- **Sealed-bid auctions:** Encrypted bids are submitted and finally revealed in a verifiable, trustless way.
- **Token swaps without frontrunning:** MEV protection due to hidden amounts.

With fhEVM, these use cases become **natively private**, yet still **decentralized, trustless, and composable**.

## How Orion Leverages fhEVM

Orion’s mission is to build **permissionless, customizable vaults**. In many cases, vault managers want to:
- Protect proprietary IP and strategies;
- Prevent copycats from real time on-chain monitoring;
- Preserve strategic or user privacy.

With fhEVM, Orion can:
- Ensure competitive strategies remain **confidential**, while remaining provably fair and performant.
- Enable **private vault management**, where strategies are encrypted, while their performance is transparent to LPs and auditors.
- Allow users to deposit into vaults without revealing balances or allocations.

This brings institutional-grade **confidentiality** in a fully **permissionless** and DeFi-native environment.

[^1]: [Zama - Welcome to fhEVM](https://docs.zama.ai/fhevm)
[^2]: [INCO - Confidential ERC20 Framework](https://www.inco.org/#research)