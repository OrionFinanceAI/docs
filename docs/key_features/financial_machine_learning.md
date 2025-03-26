# Financial Machine Learning [TODO Review] [Option 1]

Orion is built on the principle that **machine learning can make portfolio management radically more accessible** — by abstracting complexity without sacrificing transparency, control, or composability.

We see financial machine learning not as a black box, but as a tool to:
- **Simplify decision-making** for everyday users
- **Enhance performance** for advanced managers
- **Automate allocation** in dynamic market conditions

To support a diverse range of user needs and intents, Orion enables two core approaches:
- **Passive portfolio construction**, powered by DeFi-native indexing and onchain metrics
- **Active, ML-driven management**, where adaptive models optimize allocation and rebalancing

This dual system lets vaults range from **hands-off, rules-based strategies** to **fully adaptive, performance-seeking allocations** — all within a unified, permissionless framework.


## Passive Management: DeFi-Native Indexing [Option 1]

Inspired by the ETF market and protocols like Set Protocol, Orion enables anyone to **deploy passive portfolios** as onchain indexes.

We envision a system where:
- Users define index weights based on asset classes, themes, or rulesets.
- Orion integrates APIs like [skfolio](https://skfolio.io/) to provide **offchain financial metrics** (e.g., volatility, correlation, momentum) that **inform onchain vault behavior.**
- Index logic is encoded onchain via **pickled Python models** embedded in Solidity, ensuring **deterministic and verifiable index construction.**

This enables a whole new layer of user-created portfolios:
- Thematic indexes (e.g., LSDs, stablecoin tranches)
- Risk-based allocation models
- Rebalancing based on passive, rules-driven heuristics

Over time, Orion can host a permissionless marketplace of user-defined indexes — each with transparent logic, performance history, and customizable parameters.


## Passive Management: DeFi-Native Indexing [Option 2]

Inspired by the ETF market, Orion enables permissionless creation of **onchain indexes** — portfolios based on predefined rulesets, rebalanced automatically, and tokenized as ERC-20s.

This indexing flow is powered by offchain compute and onchain publishing logic, integrating APIs like [skfolio](https://skfolio.io/) for financial metrics and Python-based portfolio models.

### Methodology & Workflow

The passive index creation pipeline follows a deterministic, reproducible process:

1. **Methodology Definition** *(Published by the vault creator)*
   - Define rules: asset universe, filters, weighting logic, rebalance schedule
   - Commit methodology with a version hash (e.g., Git SHA) and pin it to IPFS

2. **Offchain Computation**
   - Fetch price & metadata from Chainlink, DEXs, oracles
   - Run Python/ML logic to compute weights
   - Output a JSON payload of target weights
   - Freeze both input + output data, pin to IPFS, and ECDSA-sign the result

3. **Onchain Publishing** *(via an oracle contract)*
   - Submit `updateIndex(payloadCid, sig)`
   - Store IPFS CIDs, version hashes, and timestamps
   - Emit events for clients/index token contracts to consume

4. **Mint & Redeem** *(via IndexToken contract)*
   - Mint: User deposits the required basket → receives index token
   - Redeem: User burns index token → receives underlying assets

5. **Automated Rebalancing** *(via a keeper or oracle)*
   - Triggered on schedule or by threshold drift
   - Trades executed through DEX aggregator
   - Fees collected into protocol treasury


### Trust Guarantees

Every step of this process is **verifiable and reproducible**:

- **Provenance**: Methodology + data pinned on IPFS
- **Reproducibility**: Anyone can rerun the pipeline and validate the output
- **Audit Trail**: All updates and rebalances are logged transparently onchain


### Economic Model

| Fee Type        | Rate                | Recipient           |
|------------------|---------------------|----------------------|
| Management Fee   | 0.30–0.50% APR       | Protocol treasury    |
| Performance Fee  | 5–10% of gains       | Protocol treasury    |
| Mint/Redeem Fee  | 0.02–0.05%           | Liquidity providers  |

This methodology allows Orion to support **high-integrity passive strategies**, where:
- Indexes are transparent and auditable
- Logic is open-source, yet verifiable
- Users can access **low-maintenance exposure** with full control over index creation, execution, and ownership


---

## Active Management: ML-Optimized Vaults

For users seeking more sophisticated exposure, Orion supports **financial machine learning (FML)** pipelines that inform allocation, rebalancing, and dynamic optimization.

Our approach draws inspiration from academic and institutional-grade tools such as:
- Hierarchical risk parity
- Adaptive expected return models
- Online learning for portfolio allocation

These models are either:
- **Hardcoded into the vault strategy**, based on parameterized ML outputs, or
- **Queried dynamically** via oracles or offchain computation layers (e.g., zkML, verifiable compute)

### Key Use Cases:
- Dynamic reallocation based on **market regime shifts**
- Real-time drawdown protection and volatility targeting
- Multi-asset portfolio optimization using covariance and correlation tracking

Orion abstracts this complexity for users while allowing power users and vault creators to go deeper — tuning model parameters, overriding logic, or composing hybrid strategies.


## Hybrid Philosophy: Abstraction Without Obfuscation

We believe in abstraction, **not** obfuscation.

Orion's financial ML layer aims to:
- **Empower casual users** with low-friction, intelligent default strategies
- **Enable power users and quants** to deploy advanced, data-driven vaults
- Preserve **transparency** by exposing all logic and parameters onchain or through open interfaces



