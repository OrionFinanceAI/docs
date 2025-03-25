# Tokenomics [TODO Review]

The Orion token is designed to align incentives across vault creators, users, and the protocol itself — while capturing value from activity across the ecosystem.

It acts as the primary mechanism through which Orion accrues fees, rewards performance, and facilitates long-term protocol sustainability.


## Vault Fees

Vaults in Orion can be created either by the protocol or by third-party managers. Regardless of origin, they generate fees through:

### 1. **Performance & Management Fees**
- Protocol-native vaults direct **a portion of their fees** to the Orion token treasury.
- These fees can be structured as:
  - **Performance-based fees** (e.g., % of yield generated)
  - **Flat management fees** (e.g., annualized % of AUM)

### 2. **Third-Party Vaults**
- Vault creators are free to set their own fee structures.
- To ensure aligned incentives and protocol participation, **Orion takes a 5% share of whatever fee the third-party sets.**

> For example:  
> If a third-party sets a 10% performance fee, 0.5% (5% of 10%) is routed to Orion.

This system encourages **market-driven fee competition** — where managers can experiment with strategies and pricing while the protocol benefits from all vault activity.


## Netting & Internal Transactions

Orion introduces **netting layers** to reduce gas costs by offsetting transactions between users when possible. This feature plays a key role in the protocol’s fee dynamics:

### External Netting
- If a user nets their transaction **outside** the Orion ecosystem, they pay **full gas fees** as usual.
- No Orion token revenue is generated.

### Internal Netting (Orion-native)
- When transactions are netted **within Orion**, users pay **only half** the typical gas fees.
- The **other half** is redirected to the **Orion protocol treasury**, accruing value to the token.

This creates a strong incentive to use Orion-native infrastructure for capital efficiency and cost savings — while benefiting the protocol.


## Batching Layer

Similar to netting, Orion's **batching mechanism** groups transactions to reduce onchain execution overhead.

- Users benefit from **lower gas fees**
- A portion of the saved cost is redirected to the **Orion token**, distributed proportionally depending on the source vault

By facilitating transaction efficiency at scale, the batching layer becomes a **recurring source of protocol revenue**.


## Orion’s Own Treasury Strategy

Rather than relying on static or manually rebalanced multisigs, Orion will manage its **own protocol treasury** using **its native vault infrastructure**.

Inspired by protocols like [Aera](https://docs.aera.finance/), this approach allows Orion to:

- Actively optimize its treasury allocations through **dynamic, rules-based vaults**
- Showcase **how customizable vault strategies** can be used for real-world treasury management
- Generate yield and preserve protocol runway in a transparent, programmatic way

Over time, this self-use sets a precedent for **best practices in onchain treasury design**, and demonstrates the protocol’s conviction in its own tooling.


## Summary - Value Accrual to the Orion Token

| Source                        | Mechanism                                     | Value to Orion Token        |
|-------------------------------|-----------------------------------------------|-----------------------------|
| Native Vault Fees             | Performance/management fees                   | Direct allocation           |
| Third-Party Vault Fees        | 5% of third-party fee models                  | Indirect protocol revenue   |
| Netting (Internal)            | 50% of gas savings redistributed              | Sent to treasury            |
| Batching Layer                | Shared gas savings from execution bundling    | Protocol receives portion   |
| Orion Treasury Management     | Protocol uses its own vaults to manage assets | Yield flows to protocol     |
| Vault Strategy Competition    | Better strategies attract more capital        | Drives usage and fee growth |


The Orion token is more than just a governance asset — it is the **economic backbone of a permissionless, performance-driven ecosystem**, capturing value from every layer of interaction within the protocol.
