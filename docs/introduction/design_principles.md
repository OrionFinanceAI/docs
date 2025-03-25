# Design Principles [TODO review]

Orion Finance is built on a core belief: permissionless, modular financial infrastructure can enable powerful new forms of collaboration and value creation — while reducing systemic complexity.

This page outlines the key design principles that guide how we build Orion.

## Simplicity Through Modularity

Complexity is the enemy of composability. Our protocol is modular by design, separating concerns across vault logic, strategy execution, and value flow. This modularity allows each piece of the system to evolve independently while remaining easy to reason about.

Rather than building a monolith, Orion enables asset managers, protocols, and individuals to plug into a customizable vault infrastructure — with just the pieces they need.

## Permissionless by Default

Anyone should be able to:
- Launch a vault,
- Deploy a strategy,
- Provide or manage capital,

Orion is not a gatekeeper. We believe financial infrastructure should be open and community-driven — not permissioned by a centralized entity.

This also means building in safeguards that support responsible use while preserving openness.

## Onchain by Nature

Orion is built onchain from the ground up. Vault logic, incentives, and reporting are all verifiable and transparent — not offchain or hidden behind APIs.

This transparency is essential for trust, composability, and long-term resilience.

---

## Abstracting Complexity, Not Obscuring It

Our goal is to **abstract** financial complexity, not hide it.

By leveraging financial machine learning and thoughtful UX design, we aim to surface the most relevant decisions — while giving power users full visibility and control when needed.

The protocol should serve both quants and casual depositors — with different layers of abstraction.

---

## Built for Collaboration

Orion isn’t a black box — it’s infrastructure others can build on.

We prioritize clean APIs, visibility into vault performance, and extensibility across vault types and strategy logic. Whether you’re a DAO, an asset manager, or a DeFi builder, Orion is designed to support your workflows.

---

## Security Is a First-Class Citizen

From rebalancing mechanisms to cryptographic protections (e.g. via **fhEVM**), Orion takes a proactive stance on protocol integrity.

Security is not an afterthought — it's baked into every layer of the protocol.

---

These principles help us build something lasting — infrastructure that outlives trends, adapts to innovation, and supports a permissionless, collaborative future of onchain asset management.
