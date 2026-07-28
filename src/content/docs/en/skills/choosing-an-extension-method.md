---
title: Choosing an extension method
description: Decision tree from prompts to Automations—avoid using extensions for their own sake.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

More extension mechanisms mean higher cost when you pick the wrong one. This page helps you decide whether you need a Plugin or MCP before you install.

These names get mixed up most often:

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

All extend Codex—but sometimes a prompt is enough; sometimes you need something heavier.

## Decision tree

```text
Will the task repeat ≥3 times?
├─ No → Use prompts + @ references
└─ Yes → Need persistent rules?
    ├─ Yes → Put in AGENTS.md
    └─ No → Fixed, describable flow?
        ├─ Yes → Build a Skill
        └─ No → Need external systems?
            ├─ Yes → Evaluate MCP (read-only first)
            └─ No → Need unattended runs?
                ├─ Yes → Automations + human gate
                └─ No → Keep Skill + manual trigger
```

Team needs to distribute multiple Skills + MCP? Consider **Plugin** at the end of the paths above.

## Scenario mapping

| Scenario | Suggested combo |
|---|---|
| Unify test and commit standards | AGENTS.md |
| Pre-merge review checklist every time | Skill `pr-review` |
| Pull ticket context from Linear | MCP + task prompt |
| Weekly dependency report | Automation → open issue |
| Secret scan before commit | Hooks (enterprise) or CI |
| One-click tooling for new hires | Plugin (after security review) |

## Cost dimensions

| Mechanism | Authoring cost | Maintenance cost | Security risk |
|---|---|---|---|
| Prompt | Low | Low | Low |
| AGENTS.md | Medium | Medium | Low |
| Skill | Medium | Medium | Low–medium |
| MCP | High | High | Medium–high |
| Plugin | Low (off-the-shelf) / high (custom) | Medium | Medium–high |
| Automations | High | High | High |

## Anti-patterns

- **Skill sprawl**: dozens of Skills with descriptions competing for matches
- **MCP as hammer**: API where `git` would do
- **Automation without acceptance**: scheduled code changes with nobody reviewing diffs
- **Reinventing wheels**: custom MCP when an official Connector exists

## FAQ

### 1. Should I install Plugins and MCP from day one?

Many problems are solved with prompts, scope control, and `AGENTS.md` first.

### 2. How do I read this tree?

One principle: start light; add weight only when needed.

### 3. Where do most people start?

Usually one of:

- Prompt
- `AGENTS.md`
- Skill

You often do not need MCP or unattended automation on day one.

What matters is fit with the problem—not how advanced the mechanism looks.

## Further reading

- [Capability map](/skills/capability-map/)
- [Human approval patterns](/cases/workflows/human-approval-patterns/)
- [Turn a workflow into a Skill](/cases/workflows/turn-a-workflow-into-a-skill/) (roadmap page)

---

**Status:** outdated  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** This decision tree touches current Automations, Plugins, MCP, and official Connector boundaries; those product surfaces change quickly and public material as of 2026-07-26 is not enough to stabilize the whole page.  
**Last verified:** 2026-07-26
