---
title: When to use Skills
description: Decide whether a task fits a Skill, and how Skills divide work with slash commands and MCP.
locale: vi
source_locale: en
source_revision: f4b5554
translation_status: fallback
translated_at: '2026-07-28'
---

When you first encounter Skills, a common question is: is this worth packaging as a Skill?

If everything becomes a Skill, things get heavy; if you never capture repeatable flows, you keep re-explaining the same steps by hand. This page helps you decide when to solidify a workflow.

# When to use Skills

## Good candidates for a Skill

- The same flow has been repeated manually a third time
- You need a detailed checklist but do not want it in context every time
- You want the model to auto-enable based on `description`
- The team needs a shared, versioned workflow

## Conditions that make a Skill worthwhile

If a task meets both of these, a Skill is worth considering:

- You will do it again
- You want the next run to be as consistent as possible

Many Skills end up in scenarios like:

- Reviewing diffs
- Generating changelogs
- Pre-release checks
- Documentation publish flows

These tasks are not complex, but they reuse well.

## Poor fits

- One-off tasks that never repeat
- Very short commands you remember (consider a slash command)
- Needs live external state that changes very fast (consider MCP)

## Common misconceptions

### 1. Important tasks should always become Skills

Important does not mean reusable.  
A one-off special task may only add maintenance burden as a Skill.

### 2. More Skills is better

Too many Skills with fuzzy boundaries make the model misuse them and the team harder to maintain.

### 3. If it connects to external systems, start with a Skill

External access is often an MCP problem; the Skill owns the **process**—how to connect still depends on MCP.

## How to try before committing

If you are unsure a workflow is worth capturing:

1. Do it manually two or three times
2. Notice whether you repeat the same check order each time
3. If yes, turn it into a Skill

Skills built this way are sturdier because they come from real repetition, not upfront design.

## Compared to other extension methods

| Method | Best for |
|---|---|
| Skill | Reusable flows, progressive disclosure |
| MCP | External APIs and data sources |
| Hooks | Auto-run at specific events |
| `AGENTS.md` | Project-wide standing conventions |

Skills are best for flows that repeat, need consistency, and you do not want to re-explain every time.

For extension choice, see [Choosing an extension method](/skills/choosing-an-extension-method/). For workflow capture, see [Turn a workflow into a Skill](/cases/workflows/turn-a-workflow-into-a-skill/).
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** OpenAI Help "Skills in ChatGPT" confirms Skills are reusable, shareable workflows; current Codex runtime also matches skills by name and description. This page is selection guidance, not volatile UI.  
**Last verified:** 2026-07-26
