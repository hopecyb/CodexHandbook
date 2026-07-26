---
title: Threat Model
description: Main risk surfaces for Codex in team environments—data, tools, extensions, and supply chain.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

A threat model means thinking about risk before it happens:

> **If Codex really connects to our code, commands, and external tools, what is most likely to go wrong?**

**Threat modeling** breaks that down. Codex is not “just another chat window”—it can **read code, run commands, call external tools**. This chapter maps main risk surfaces; controls live in [Permission matrix](/guide/reference/permission-matrix/) and [Sandbox](/guide/foundations/sandbox-and-network/).

## What this page covers

- Assets and trust boundaries
- Typical threats and mitigation directions
- How rules, Hooks, and CI divide responsibility

## Not only “security team” work

If you build, run platform, write docs, or lead projects, you care when teams:

- Give over-permissioned tokens to automation
- Run high-risk actions on untrusted input
- Do not know what data may leave the org
- Add extensions for features without permissions and provenance

Threat modeling helps set boundaries before incidents.

## Assets and boundaries

| Asset | Examples |
|---|---|
| Source and IP | Private repos, unreleased designs |
| Credentials | API keys, `.env`, cloud IAM |
| User data | PII, customer ticket content |
| Infrastructure | CI, production deploy pipelines |

**Trust boundary:** model and extensions default on the **not fully trusted** side; human review and policy enforce at the boundary.

## Two core questions

Before team-wide rollout, ask:

1. What must we not lose?
2. What must Codex not do by mistake?

First identifies important assets; second identifies dangerous actions. Most controls wrap those two.

## Scenario

- Codex reads your private repo
- Accesses a permissioned ticket system
- Runs shell commands
- Posts results back to comments

Then watch for:

- Seeing what it should not
- Doing what it should not
- Taking internal information outside

That framing turns threat modeling into a pre-launch risk checklist.

## Threat overview

| Threat | Description | Mitigation direction |
|---|---|---|
| Prompt injection | Malicious issue/web steers overreach | Input hygiene, read-only CI, [injection topic](/guide/team-enterprise/security/prompt-injection/) |
| Over-permission | Token, sandbox too broad | Least privilege, branch protection |
| Data exfiltration | Commands/MCP leak repo | Network policy, DLP, audit Hooks |
| Malicious extension | Unreviewed Plugin/MCP | [Extension risk](/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Supply chain | Dependency/script tampering | Existing SCA, code review |
| Misoperation | Agent drops DB, wrong push | Command deny, no-push CI |

## When to prioritize in threat model

If a capability both:

- Touches important assets
- Performs real actions

Examples: read private repos, call production APIs, write-capable MCP, auto-push code.

## Do not boil the ocean on day one

Many teams try to write every policy at once and ship nothing.

First rollout often needs only:

1. Top 3 asset classes
2. Top 3 actions you fear most
3. One direct control per item

Examples:

- Fear prod DB leak → limit prod creds and export paths
- Fear wrong push to main → branch protection and approval
- Fear issue/web steering → tighten external input and read-only review

Not complete—but more useful than an unread mega-doc.

## Recommended layered controls

```text
L1 Identity and tenant (SSO, groups)
L2 Org-managed config and model policy
L3 Repo rules + AGENTS.md
L4 Sandbox / approval / Hooks
L5 Human review and branch protection
```

## Common mistakes

- Training only, no technical controls
- Assume “model is smart enough”
- Production secrets on Agent-writable paths
- Collapse all risk to “human review will catch it”

## Minimum viable version

Establish:

- High-risk actions need approval
- Sensitive data denied by default
- Automation read-only by default

That already suppresses much team risk; refine governance later.

## Acceptance checklist

- [ ] Can list org Top 3 assets of concern
- [ ] Each threat has control or accepted-risk record
- [ ] Incident response contacts aligned

## Related

- [Sensitive context](/guide/context/sensitive-context/)
- [Human approval patterns](/cases/workflows/human-approval-patterns/)

## Reference sources

- KimYx0207 enterprise security
- OpenAI enterprise security whitepaper (official)
- CodexGuide compliance practice

---

**Status:** verified  
**Products:** Team / enterprise  
**Verification basis:** OpenAI plugin, app, and integration docs still distinguish external data access, action permissions, approval requirements, and source-system boundaries; this page organizes team risk as assets, trust boundaries, typical threats, and layered controls—without depending on a specific product toggle.  
**Last verified:** 2026-07-26
