---
title: Team & Enterprise
description: Adoption, standards, governance, and security for scaling Codex without losing control.
sidebar:
  order: 70
locale: pt
source_locale: en
source_revision: fe1265c
translation_status: fallback
translated_at: '2026-07-28'
---

The **Team & Enterprise** chapter is for engineering leads, platform, and security teams—moving Codex from individual productivity to something teams can manage, audit, and learn from. Pair with [Learning path · Team](/guide/learning-paths/team/); this chapter leans governance and rollout.

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
| EM / lead | [Threat model](/guide/team-enterprise/security/threat-model/) · [Acceptable use](/guide/team-enterprise/governance/acceptable-use/) |
| Platform engineering | [Team rules](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| Security | [Plugin and MCP risk](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt injection](/guide/team-enterprise/security/prompt-injection/) |

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
| Security | [Threat model](/guide/team-enterprise/security/threat-model/) · [Plugin/MCP risk](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt injection](/guide/team-enterprise/security/prompt-injection/) |
| Governance | [Acceptable use policy](/guide/team-enterprise/governance/acceptable-use/) |

Roadmap will add adoption, administration, deployment-patterns, etc.—see [chapter outline](/docs/planning/chapter-outline.md) (repo planning doc).

## Relationship to customization

- Org-managed layer in [AGENTS.md precedence](/guide/customization/agents-md/scope-and-precedence/)
- [Team rules policy](/guide/customization/rules/team-rules/)

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

- [Plugin and MCP risk](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Acceptable use policy](/guide/team-enterprise/governance/acceptable-use/)

If you care about personal onboarding first, defer this chapter until team rollout, permissions, or risk control.

## Reference sources

- KimYx0207 security and enterprise chapters
- freestylefly/CodexGuide team playbook
- stormzhang security tutorials

---

**Status:** verified  
**Products:** Organization / team features (plan-dependent)  
**Verification basis:** OpenAI Help Center and plugin/app docs still emphasize role access, plugin enablement, action approval, data boundaries, and audit responsibility for team Codex/ChatGPT rollout. This page is chapter navigation focused on governance model and reading order—not specific admin UI paths.  
**Last verified:** 2026-07-26
