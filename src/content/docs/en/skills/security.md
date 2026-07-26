---
title: Skill security and versioning
description: Install sources, permission boundaries, upgrades and rollbacks—govern team Skills.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

A Skill is not just another prompt template.

It changes how Codex works and may include scripts or extra resources.

Untrusted sources, unreviewed content, and version drift make Skill risk comparable to MCP. This page covers how teams **select, install, upgrade, and audit** Skills.

## Contents

- Which Skills not to install
- Pinning versions and change review
- Relationship to Plugin distribution

## Why regular users should care

If you:

- Install Skills others share
- Reference team Skills in a project
- Upgrade existing Skills
- Recommend Skills to colleagues

—you are already in the risk propagation chain.

Skill security cannot rely only on "someone centrally manages it"; every user needs basic judgment.

Basics: [Skills overview](/skills/overview/) · [Create your first Skill](/skills/create-your-first-skill/)

## Threat model (simplified)

| Risk | Manifestation |
|---|---|
| Malicious Skill | Induce secret leak, run destructive shell |
| Excessive permissions | Read/write paths that should be off limits |
| Supply chain | Tampered third-party Skill repo |
| Stale Skill | Incompatible with new CLI; odd behavior |

## What to check before install

For any Skill, ask:

1. Where did it come from?
2. What extra actions will it make Codex take?
3. Can I understand its `SKILL.md` and bundled scripts?

If you cannot answer two of three, do not drop it into a production project.

## Install principles

1. **Source**: Prefer official marketplace and company Git; be careful with anonymous gists
2. **Read**: Open `SKILL.md` and scripts before install; watch for odd permission requests
3. **Isolate**: Separate client projects from personal experiment Skills
4. **Minimal use**: One Skill that solves the problem beats stacking ten

## Common misconceptions

### 1. Skills are only text, so no real risk

They affect workflow, tool choice, and script execution—risk is not just "tone changed."

### 2. Popular Skills are safe for production

Others' context does not match your repo, permission boundaries, or team rules.

### 3. Upgrading a Skill is like updating a doc

For teams, upgrading a Skill upgrades automated behavior—treat it like a dependency upgrade.

## Versioning and upgrades

| Practice | Notes |
|---|---|
| Pin version | Record Skill name + commit/tag in team docs |
| Change review | Skill updates go through PR like dependency bumps |
| Changelog | Maintain release notes for the team Skill set |
| Rollback | Keep previous copy; switch quickly on failure |

Plugins can bundle Skills for unified distribution: [Plugins overview](/skills/plugins/plugins-overview/)

## Team habits

If a Skill will be reused long-term by many people, do not leave it as "someone DM'd a path."  
Better:

- Fixed source
- Version history
- Upgrade notes
- Rollback path

## And `$skill` invocation

Explicit `$name` calls are clear; for **model auto-selection**, limit available Skills and scenarios in `AGENTS.md`.

## Team governance checklist

- [ ] Allowlist of permitted Skill sources
- [ ] New hire onboarding installs only a "base pack"
- [ ] Quarterly review of Skills still needed
- [ ] Aligned with [allow and deny patterns](/guide/customization/rules/allow-and-deny-patterns/)

## Common mistakes

- Installing "one-click universal Skill" from chat links
- Production `AGENTS.md` referencing personal-path Skills
- No smoke task after upgrade
- Trusting behavior without reading `SKILL.md`

## References

- OpenAI Codex Skills security guidance
- KimYx0207 CX-05～CX-06
- stormzhang `20-skills.md`
- freestylefly/CodexGuide Skill playbook

---

**Status:** verified  
**Applicable products:** App / CLI / IDE  
**Verification basis:** OpenAI Help "Skills in ChatGPT" confirms Skills can include instructions, supporting files, and code; users must review sources and risks before and after upload; this page's governance advice aligns with that principle.  
**Last verified:** 2026-07-26
