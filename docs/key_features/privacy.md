# Privacy

## Why Privacy Matters for Portfolio Managers

DeFi today is *transparent by default* — which is [powerful, but often limiting](https://www.zama.ai/post/stablecoin-next-chapter-built-in-confidentiality-with-fully-homomorphic-encryption).

In particular, **vault curation** of public, blockchain-based DeFi products is one of the most promising business models for the next generation of finance. However, its scalability and long-term sustainability are limited by a fundamental issue: the need for portfolio managers to protect their alpha.

In today's DeFi environment, **vault tokenization standards** expose real-time portfolio compositions and trading behaviors: **copycats and freeloaders** can easily monitor, reverse-engineer, and replicate strategies without bearing the associated research and execution costs.

Without privacy, managers interested in avoiding liquidity fragmentation are forced into an impossible trade-off between:
- Sharing all their moves and risk losing their edge,
- Operating off-chain, undermining the auditability and composability of DeFi.

If DeFi is to scale professional asset management, **confidentiality must become a first-class primitive** — just like composability, security, and permissionlessness already are.

## Our Commitment to Onchain Privacy

Through innovations like **confidential smart contracts**, Orion enables:
- **Protection of proprietary strategies** without sacrificing onchain composability;
- **Private portfolio management** with verifiable, encrypted performance;
- **Auditability for users and LPs** without revealing sensitive manager behavior: vault strategies remain private where holdings and trades are encrypted, yet performance remains auditable.
- **MEV protection**, safeguarding trade execution against frontrunning and sandwich attacks;
- **Users to deposit into vaults** without revealing their positions or allocations.

By integrating confidential computing natively into our architecture, Orion brings **institutional-grade privacy** to the **permissionless world of DeFi** — unlocking a new era of scalable, professionalized, and competitive onchain asset management.

## Confidential Smart Contracts: A Key Enabler

Orion integrates advancements in cryptography to power private vault strategies and encrypted performance tracking. One of the most promising technologies in this space is **fhEVM**.

### What is fhEVM?

fhEVM[^1] [^2] is an innovative technology that integrates **Fully Homomorphic Encryption (FHE)** into the **Ethereum Virtual Machine (EVM)**. This integration enables the execution of confidential smart contracts on encrypted data — ensuring both **data privacy** and **composability** within blockchain environments.

1. **Data Encryption**  
    Transaction inputs and on-chain states are encrypted, ensuring that sensitive information remains confidential, even from validators.

2. **Encrypted Computation**  
    Smart contracts operate directly on encrypted data using FHE, allowing computations without decryption. This preserves data privacy while enabling complex operations.

3. **Decentralized Decryption**  
    Access to decrypted data is managed on-chain through programmable privacy settings. The decryption process is decentralized via a **threshold multiparty computation (MPC) protocol**, enhancing security and trustlessness.

All of this runs **fully onchain**, remaining **non-custodial** and **verifiable** by anyone.

---

[^1]: [Zama - Welcome to fhEVM](https://docs.zama.ai/fhevm)
[^2]: [INCO - Confidential ERC20 Framework](https://www.inco.org/#research)