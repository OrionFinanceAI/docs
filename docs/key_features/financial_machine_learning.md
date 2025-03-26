# Financial Machine Learning

Orion is built on the principle that **financial machine learning can make portfolio management radically more accessible**.

We see financial machine learning as a tool to:
- **Simplify decision-making** for everyday users;
- **Enhance performance** for advanced managers;
- **Automate allocation** in dynamic market conditions.

To support a diverse range of user needs and intents, Orion enables two core approaches:
- **Passive portfolio construction**, powered by DeFi-native indexing and onchain metrics;
- **Active, ML-driven management**, where adaptive models optimize allocation and rebalancing.

This dual system lets vaults range from **hands-off, rules-based strategies** to **fully adaptive, performance-seeking allocations** — all within a unified, permissionless framework.

## Passive Management: DeFi-Native Indexing

Orion enables a permissionless marketplace for **onchain indexes** — passive portfolios based on predefined rulesets, rebalanced automatically, and tokenized as ERC-20s.

We envision a system where:
- Users define index weights based on asset classes, themes, or rulesets;
- Orion integrates APIs from [skfolio](https://skfolio.org/) to define **quantitative finance metrics** (e.g., covariance, tail risk, train-test split) that **inform onchain vault behavior.**
- Index logic is encoded onchain via **IPFS CIDs** pointing to [dockerized](https://www.docker.com/) portfolio management logic, ensuring **deterministic and verifiable index construction.**

**Example**
```python
from skfolio import RiskMeasure
from skfolio.optimization import MeanRisk, ObjectiveFunction

X = get_universe_returns()
model = MeanRisk(
    risk_measure=RiskMeasure.STANDARD_DEVIATION,
    objective_function=ObjectiveFunction.MAXIMIZE_RATIO,
    portfolio_params=dict(name="Max Sharpe"),
)

model.fit(X)
model.weights_
```

This enables a whole new layer of user-defined indexes, based on advanced financial machine learning rulesets.

### Trust Guarantees

Every step of this process is **verifiable and reproducible**:

- **Provenance**: Methodology + data pinned on IPFS and CID pinned onchain;
- **Reproducibility**: Anyone can rerun the pipeline and validate the output;
- **Audit Trail**: All updates and rebalances are logged transparently onchain.

## Active Management: ML-Optimized Vaults

For users seeking more sophisticated exposure, Orion supports **financial machine learning (FML)** pipelines that inform allocation, rebalancing, and dynamic optimization.

Our approach draws inspiration from academic and institutional-grade tools such as:
- Hierarchical risk parity;
- Adaptive expected return models;
- Online learning for portfolio allocation.

These models are either:
- **Hardcoded into the vault strategy**, based on parameterized ML outputs, or
- **Queried dynamically** via oracles or offchain computation layers (e.g., zkML, verifiable compute).

Orion abstracts this complexity for users while allowing vault managers to go deeper — tuning model parameters, overriding logic, or composing hybrid strategies.