---
reviewed_at: 2026-08-26
title: Team & Enterprise
description: Adoption, standards, governance, and security for scaling Codex without losing control.
sidebar:
  order: 70
locale: en
source_locale: zh-CN
source_revision: 3a4af60
translation_status: reviewed
translated_at: 2026-08-26
---

The **Team & Enterprise** chapter is for engineering leads, platform, and security teams—moving Codex from individual productivity to something teams can manage, audit, and learn from. Pair with [Learning path · Team](/en/guide/learning-paths/team/); this chapter leans governance and rollout.

If you are still solo or learning basics, you can read this later. It focuses on boundaries, process, and accountability when many people use Codex together.

Key questions:

- Who can use it
- What scope is allowed
- How to trace incidents
- How high-risk extensions are approved

## What this chapter covers

- Path from small-team pilot to org rollout
- Security, compliance, and extension (Plugin/MCP) risk
- Cross-links to other handbook sections

## Who should read

| Role | Start with |
|---|---|
| EM / lead | [Threat model](/en/guide/team-enterprise/security/threat-model/) · [Acceptable use](/en/guide/team-enterprise/governance/acceptable-use/) |
| Platform engineering | [Team rules](/en/guide/customization/rules/team-rules/) · [Hooks](/en/skills/hooks/hooks-overview/) |
| Security | [Plugin and MCP risk](/en/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt injection](/en/guide/team-enterprise/security/prompt-injection/) |

## Governance model (conceptual)

```text
Policy (org-managed, AUP)
    ↓
Standards (AGENTS.md, approved extension list)
    ↓
Enforcement (rules, sandbox, Hooks, CI)
    ↓
Observation (audit, metrics, retrospectives)
```

## Chapter navigation (starter)

| Topic | Pages |
|---|---|
| Security | [Threat model](/en/guide/team-enterprise/security/threat-model/) · [Plugin/MCP risk](/en/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt injection](/en/guide/team-enterprise/security/prompt-injection/) |
| Governance | [Acceptable use policy](/en/guide/team-enterprise/governance/acceptable-use/) |

The roadmap will add adoption, administration, deployment patterns, and related topics; see the [chapter outline](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md) (repository planning document).

## Relationship to customization

- Org-managed layer in [AGENTS.md precedence](/en/guide/customization/agents-md/scope-and-precedence/)
- [Team rules policy](/en/guide/customization/rules/team-rules/)

## Common mistakes

- Buy seats without training and standards
- Personal relaxed sandbox becomes org default
- Approve all community Plugins without a list

## Acceptance checklist

- [ ] Written AUP or equivalent policy
- [ ] Approval process for high-risk extensions
- [ ] Clear incident contacts (security/platform)

## Common misconceptions

### 1. Solo user—need this chapter now?

Not necessarily deep reading yet.
But know: once Codex is a team system, problems are not only “how to prompt.”

### 2. Why so much audit, governance, policy?

At team scale, boundaries blur over time—that is the risk.

### 3. First conceptual pass—read what?

Start with:

- [Plugin and MCP risk](/en/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Acceptable use policy](/en/guide/team-enterprise/governance/acceptable-use/)

If you care about personal onboarding first, defer this chapter until team rollout, permissions, or risk control.

---

**Status:** verified
**Products:** Organization / team features (plan-dependent)
**Verification basis:** OpenAI Help Center and plugin/app docs still emphasize role access, plugin enablement, action approval, data boundaries, and audit responsibility for team Codex/ChatGPT rollout. This page is chapter navigation focused on governance model and reading order—not specific admin UI paths.
**Last verified:** 2026-07-26
