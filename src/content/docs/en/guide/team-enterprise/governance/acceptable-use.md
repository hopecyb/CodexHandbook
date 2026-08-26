---
title: Acceptable Use Policy
description: Team-level agreement on what Codex may and may not do—aligned with technical controls and training.
locale: en
source_locale: zh-CN
source_revision: 1ce50b9
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

An **Acceptable Use Policy (AUP)** turns “can we use Codex for this?” into org consensus instead of individual judgment. It complements the [threat model](/en/guide/team-enterprise/security/threat-model/): threat model covers risk; AUP covers **behavior boundaries**.

## What this page covers

- Topics an AUP should cover
- Linking HR/compliance and technical controls
- Starter clause outline (requires legal localization)

## What an AUP governs

Even if technically possible, is it allowed on our team?

It does not replace technical policy—it states boundaries people can read and follow.

:::caution
The following is an **educational outline**, not legal advice. Legal and compliance review required before publication.
:::

## Common misconceptions

### AUP matters to practitioners

Not only “paperwork.” Daily questions include:

- What data must not go to Codex
- When human review is required
- Which extensions and external connections are off-limits

### Policy without enforcement decays

If policy says “production changes need approval” but tools allow bypass, the AUP stops working.

AUP must align with training, permissions, config, and audit—not length alone.

## Recommended topics

| Topic | Points |
|---|---|
| Permitted use | Development, docs, research, internal automation |
| Prohibited use | Unauthorized access, harassment, bypassing security |
| Data classification | Which repos/data allowed; customer PII rules |
| Output responsibility | Human review before merge; no legal/medical advice externally |
| Extensions | Approved Plugin/MCP list only |
| Accounts | No shared personal seats; revoke on offboarding |
| Incidents | How to report suspicious behavior |

## Basic structure

1. **Purpose and scope**
2. **Permitted scenarios** (link [Capability map](/en/guide/start-here/codex-capability-map/))
3. **Prohibited scenarios**
4. **Data and confidentiality**
5. **Human oversight** (merge, production changes)
6. **Consequences** (reference employee handbook)
7. **Contacts and revision date**

## Aligning with technical controls

| AUP clause | Technical implementation |
|---|---|
| No source exfiltration | Network policy, MCP approval |
| Production changes need approval | Branch protection, deny `git push` |
| Approved models only | Org-managed configuration |

## Common mistakes

- AUP published, no training
- Policy contradicts tool reality (forbidden but allowed)
- Years without update as features evolve (Computer Use, etc.)

## Is an AUP effective?

Ask:

1. Does it answer real team boundaries?
2. Can it map to training, config, or approval flows?
3. On violation, can the team detect and respond?

More “yes” → more likely effective.

## Acceptance checklist

- [ ] Onboarding includes AUP acknowledgment
- [ ] No conflict with [Team rules](/en/guide/customization/rules/team-rules/)
- [ ] Review yearly or on major feature releases

An AUP’s value is clear team boundaries for Codex use—and alignment with actual controls.

---

**Status:** verified  
**Products:** Organization / team  
**Verification basis:** OpenAI enterprise docs still emphasize role access, action permissions, and source-system boundaries for plugins and apps; this page defines AUP as organizational behavior boundary with “educational outline, legal localization required”—not an official policy template.  
**Last verified:** 2026-07-26
