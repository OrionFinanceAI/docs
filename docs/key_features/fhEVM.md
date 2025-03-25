---
sidebar_position: 8
---

# Confidential EVM Smart Contracts

## What is fhEVM?

**fhEVM** is an innovative technology developed by [Zama](https://www.zama.ai/) that integrates **Fully Homomorphic Encryption (FHE)** into the **Ethereum Virtual Machine (EVM)**. This integration enables the execution of confidential smart contracts on encrypted data — ensuring both **data privacy** and **composability** within blockchain environments.


## How fhEVM Works

1. **Data Encryption**  
    Transaction inputs and on-chain states are encrypted, ensuring that sensitive information remains confidential, even from validators.

2. **Encrypted Computation**  
    Smart contracts operate directly on encrypted data using FHE, allowing computations without decryption. This preserves data privacy while enabling complex operations.

3. **Decentralized Decryption**  
    Access to decrypted data is managed on-chain through programmable privacy settings. The decryption process is decentralized via a **threshold multiparty computation (MPC) protocol**, enhancing security and trustlessness.

All of this runs **onchain**, verifiable by anyone, and remains **non-custodial**.


## Why Does This Matter for DeFi?

DeFi today is *transparent by default* — which is powerful, but often limiting.

Some use cases demand **confidentiality**, such as:
- **Private portfolio allocations**
- **Sealed-bid auctions**
- **Lending without exposing positions**
- **Token swaps without frontrunning**
- **Onchain identity or credit scoring**

Without FHE, these use cases are difficult — or impossible — to implement without introducing centralized trust.

With fhEVM, they become **natively private**, yet still **decentralized, trustless, and composable**.


## Use Cases

Zama’s fhEVM has already enabled early prototypes of:

- **Confidential Lending Protocols**  
  Lenders and borrowers interact without exposing position sizes or strategies, enabling a more fair and efficient market.

- **Sealed-Bid Auctions**  
  Encrypted bids are submitted and revealed in a verifiable, trustless way — all onchain.

- **Confidential Stablecoins**  
  Transaction values and balances are encrypted, preserving privacy while maintaining auditability.


## How Orion (wants to) Leverage(s) fhEVM

Orion’s mission is to build **permissionless, customizable vaults**. In many cases, vault creators may want to:
- Protect proprietary strategies
- Prevent copycats
- Preserve strategic or user privacy

With fhEVM, Orion can:
- Enable **private vault curation**, where strategies are encrypted.
- Allow **users to deposit into vaults without revealing balances or allocations.**
- Ensure **competitive strategies remain confidential**, while remaining provably fair and performant

This brings **institutional-grade confidentiality** in a **fully permissionless** and **DeFi-native** environment.


## The Future of Private Smart Contracts

The fhEVM isn’t just a new privacy tool — it’s a **new paradigm** for building onchain systems:
- Privacy-first design
- Composability intact
- Trustless and censorship-resistant

For Orion Protocol, fhEVM enables the best of both worlds:
- **Openness and flexibility** of DeFi  
- **Privacy and strategy protection** once exclusive to TradFi

<!-- ## Developer Experience

The fhEVM is **fully compatible with Solidity**, and integrates into existing Ethereum infrastructure with minimal friction. Developers simply:
1. Declare encrypted variables (e.g. `euint8`, `euint256`)
2. Write code as usual
3. Compile and deploy using Zama’s toolchain

Encrypted inputs and outputs can be handled seamlessly from the frontend using standard SDKs. -->
