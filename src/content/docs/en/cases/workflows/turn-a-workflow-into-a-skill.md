---
title: Turn a workflow into a Skill
description: The third repeat of the same flow deserves a Skill—trigger, instructions, and acceptance in one place.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

When the same class of task (release checks, doc sync, security scans) is done **a third time** by copy-pasting prompts, consider a [Skill](/skills/overview/). This chapter bridges [workflow methods](/cases/workflows/) and the extension system.

## What this page solves

- When to upgrade from a prompt template to a Skill
- What a Skill should include (instructions, resources, scripts)
- How to share and version with the team

## Signals worth capturing

- Fixed steps + fixed acceptance checklist
- Needs repo templates or scripts
- Multiple people need consistent behavior
- You want the model to **automatically recall** the flow on relevant tasks

Skip capture for: one-off exploration, small fixes tightly bound to that day's context.

## Minimum viable approach

1. **Write SKILL.md clearly**: when to trigger, inputs/outputs, prohibitions
2. **Attach `references/`**: checklists, sample diffs
3. **Optional `scripts/`**: repeatable verification commands (aligned with [command rules](/guide/customization/rules/command-rules/))
4. **Mention the Skill name** in repo README or AGENTS.md
5. **Trial 2–3 runs**, then mark `verified`

Getting started: [Create your first Skill](/skills/create-your-first-skill/)

## Recommended workflow

```text
Extract prompt and acceptance from a successful case
    → trim to Skill body (drop casual wording, keep constraints)
    → add trigger description ("before merge", "before release")
    → team PR review
    → place in repo examples/, team plugin, or internal skill library
```

Compare with [Turn a flow into automation](/skills/automations/scheduled-tasks/): Skills are **interactive guidance**; Automations are **scheduled/unattended**.

## Common mistakes

- Skill longer than reading `AGENTS.md`
- No acceptance checklist—execution quality drifts
- Scripts need local secrets with no SECURITY note
- Duplicates and contradicts Hooks rules

## Security boundaries

- See [Skill security and versioning](/skills/security/)
- Team Skills belong on the extension approval list (see [Plugin and MCP risk](/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Acceptance checklist

- [ ] New teammate can complete the task using only the Skill
- [ ] Trigger conditions clear; low false-trigger rate
- [ ] Version or CHANGELOG for team-level Skills
- [ ] Cross-links to source workflow docs

## References

- KimYx0207 Skills chapters
- stormzhang `20-skills.md`
- In-repo [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) and [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current public "Save workflows as skills" use cases, plus this handbook's verified Skills, automation, command rules, and extension risk chapters; content is limited to stable guidance on when to capture repeated flows as Skills and how to organize instructions and acceptance.
