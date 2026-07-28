---
title: Team Rules Policy
description: Layer governance of command and path rules across organization, repo, and individual—reviewable and rollback-friendly.
locale: es
source_locale: en
source_revision: e90f23a
translation_status: fallback
translated_at: '2026-07-28'
---

When teams use Codex, **rules policy** answers: which constraints are company-wide, which the repo maintains, and whether individuals may relax anything. This chapter is the governance view of [Command Rules](/guide/customization/rules/command-rules/) and [Allow and Deny Patterns](/guide/customization/rules/allow-and-deny-patterns/).

## Contents

- Organization managed policy vs project rules vs personal preferences
- How rule changes go through review and release
- Coordination with `AGENTS.md`, Hooks, and CI

## What Team Rules Policy Does

Team rules policy answers: which boundaries the company sets, which the project sets, and which are personal habit.

If this layering is unclear, you often get:

- Rules that should be team-wide living on one person’s machine
- Temporary personal convenience mistaken for team standard

## Who This Is For

| Role | Focus |
|---|---|
| Engineering lead | Baseline deny, audit requirements |
| Repo maintainer | Project allowlist, test commands |
| Individual developer | Local supplement within policy |

## Common Misconceptions

### Team rules do not need maximum uniformity

Some boundaries should be organization-wide, such as high-risk deny.

Forcing every repo into identical rules causes another problem: rules too loose or too tight—eventually nobody trusts them.

The point is separating organization, project, and personal layers—not making all rules look the same.

### Personal supplements must not weaken team bottom lines

You may add convenience on your machine, but not bypass organization or team bottom lines.

Otherwise it looks like “faster locally” while planting mines for collaboration.

## Recommended Layering Model

```text
L1 Organization managed (Managed)     → cannot be overridden by project/individual
L2 Team template repo                 → rules snippets new repos inherit
L3 Project rules + AGENTS.md          → Git PR review
L4 Personal configuration             → local only; must not weaken L1
L5 Single-task prompt                 → temporary tightening OK; temporary relaxation limited by L1
```

Compare with [AGENTS.md Scope](/guide/customization/agents-md/scope-and-precedence/): **rules lean toward execution enforcement; AGENTS.md leans toward behavior description**; they should agree—do not write contradictory requirements in two places.

## Basic Practice

1. **Write the “never allowed” list first** (deny): `git push --force`, read `~/.ssh`, POST repo content to the public internet
2. **Then the “daily allowed” list** (allow): tests, lint, read-only git
3. **Deploy L1 via management** (if the organization enables Managed configuration)
4. **Each service/monorepo subpackage** may add L3 but must not conflict with L1
5. **Quarterly review**: “false block” and “false allow” from approval logs flow back into rules PRs

## Recommended Workflow: Rule Changes

```text
Proposal (issue or RFC) → security/platform review → PR changing rule files
    → trial typical tasks in staging repo → merge → announcement + handbook update
```

Large changes (e.g. allowing outbound network) should update [Hooks audit](/skills/hooks/hooks-overview/) and [acceptable use](/guide/team-enterprise/governance/acceptable-use/) together.

## Alignment with Hooks and CI

| Mechanism | Role |
|---|---|
| Rules | Allow/deny before execution |
| Hooks | Complex validation, logging, compliance format |
| CI | Merge gate; scripts aligned with local rules |

Avoid three separate logics: prefer a **single source of truth** (e.g. `tools/codex-rules.json`) referenced by both CLI and CI.

## Common Mistakes

- Verbal “do not push” only; rule files not updated
- Personal machine relaxes sandbox; screenshot treated as “team standard”
- Monorepo subprojects differ but share one overly broad global allowlist
- Rule change without announcement; teammates suddenly hit many approval failures

## Which Layer a Rule Belongs On

Ask:

1. Is this a bottom line every repo must follow?
2. Does this hold only for the current project?
3. Is this only my personal convenience?

Usually:

- Organization layer
- Project layer
- Personal layer

## Security Boundaries

- Rules cannot replace [threat model](/guide/team-enterprise/security/threat-model/) and incident response
- For regulated data, rules need joint review with data classification and retention policy
- Emergency bypass needs **audit record** and post-incident review

## Acceptance Checklist

- [ ] You can diagram your organization’s L1–L3 division of labor
- [ ] Repo rule files have clear owner and review requirements
- [ ] No contradiction with `AGENTS.md`, Hooks, and CI
- [ ] Channel for “false block” feedback (issue template or internal form)

The most important part of team rules policy is knowing who sets boundaries at which layer—then how to write the rules.

## References

- freestylefly/CodexGuide team governance and playbook
- KimYx0207 enterprise security chapter
- codex.bozhouai.com team configuration cases (task-type reference)

---

**Status:** verified  
**Applicable products:** CLI / App / Cloud (depending on organization features)  
**Verification basis:** OpenAI’s current organization-level plugin, app, and permission materials still emphasize role access, action approval, managed configuration, and team-level control layering; this page abstracts rules policy into organization, project, and personal governance and requires rule changes to go through review and announcement—a stable governance practice summary.  
**Last verified:** 2026-07-26
