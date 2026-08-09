---
title: Capability map
description: How Skill, MCP, Plugin, Hooks, slash commands, and AGENTS.md relate.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

There are many extension mechanisms, and they are easy to confuse. This page explains how they relate—not installation steps.

## Relationship diagram

![From one prompt to a team capability pack](/diagrams/codex-capability-ladder-en.svg)

```text
                    ┌─────────────────┐
                    │  Your task goal  │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌───────────┐      ┌─────────────┐     ┌──────────────┐
   │ AGENTS.md │      │ Prompt/template│     │ Slash command │
   │ Persistent │      │ This task only │     │ You trigger   │
   │ rules      │      │                │     │               │
   └───────────┘      └─────────────┘     └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                    ┌─────────────────┐
                    │      Skill       │
                    │ Reusable workflow │
                    │ package          │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌─────────────┐
        │   MCP    │  │  Hooks   │  │  Scripts    │
        │ External │  │ Audit/   │  │ Scripts in  │
        │ tools    │  │ validate │  │ Skill       │
        └──────────┘  └──────────┘  └─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Plugin       │
                    │ Distribute &     │
                    │ bundle           │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Automations     │
                    │ Unattended/      │
                    │ scheduled        │
                    └─────────────────┘
```

## Comparison table

| | Who triggers | Persistence | External systems | Team distribution |
|---|---|---|---|---|
| AGENTS.md | Auto-loaded | High (Git) | Easy |
| Prompt | You | Low | Hard |
| Slash command | You | Medium | Product-dependent |
| Skill | You or model match | High | Easy (directory/Git) |
| MCP | Model calls tools | Config-level | Needs governance |
| Plugin | Effective after install | High | Official/team channels |
| Hooks | System events | Config-level | Common in enterprise |
| Automations | Time/events | Config-level | Needs approval flow |

## Common mappings

| Need | Suggested choice |
|---|---|
| Unify code style and test commands | AGENTS.md |
| Standardize "review PR" workflow | Skill |
| Read Jira/Linear tickets | MCP |
| Ship one integration pack to the whole team | Plugin |
| Scan for secrets before every commit | Hooks |
| Auto-draft weekly report every Monday | Automations (+ human publish) |

## From one task to a team capability pack

Use this progression to decide whether a workflow is worth hardening:

| Stage | Form | Best fit |
|---|---|---|
| One-off prompt | Task instructions in the current conversation | Used once, or still exploratory |
| Template | Fixed goal/context/constraints/acceptance structure | Similar tasks repeat, but steps still change |
| Skill | `SKILL.md` plus templates, references, or scripts | Stable process with clear success criteria |
| Subagent | Specialized role in separate context | Bounded review, testing, debugging, or research |
| MCP | Callable external-system tools | Needs tickets, repos, or internal systems |
| Hook | Event-triggered check or block | Secret scanning, formatting, risky command checks |
| Plugin | Team install package | Skills, MCP, Hooks, templates, and docs ship together |
| Automation | Scheduled or event-driven task | Reports, monitoring, recurring review |

Do not start by designing a Plugin. First run the task once, then observe which steps repeat, which checks must be automatic, and which external permissions are truly needed.

For detailed branching logic, see [Choosing an extension method](/skills/choosing-an-extension-method/).

## Not tied to one product surface

These mechanisms are **not** bound to a single UI: CLI, desktop App, and IDE may differ in Skill/MCP support—see [feature comparison](/guide/reference/feature-comparison/) and official docs.

---

**Status:** outdated  
**Applicable products:** App / CLI / IDE  
**Verification basis:** This page draws Skill, MCP, Plugin, Hooks, and Automations as a fixed relationship diagram and implies current support tiers; those boundaries and entry points are not fully covered in official public material as of 2026-07-26 and need a rewrite for current products.  
**Last verified:** 2026-07-26
