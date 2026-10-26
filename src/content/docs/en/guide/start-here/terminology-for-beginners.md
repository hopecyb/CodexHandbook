---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only introduces terms for beginners; its internal links and definitions have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Terminology for beginners
description: Short definitions of common terms such as task, context, sandbox, and Skill.
locale: en
source_locale: zh-CN
source_revision: 'a18bacf'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 6
reviewed_at: 2026-10-25
---

For more complete entries, see the [glossary](/en/guide/reference/glossary/). Here are the most common terms that can interrupt your reading.

When first reading the Codex handbook, the dense terminology can be the biggest obstacle. Each word may look familiar, but together they can be confusing.

Two common situations:

- You understand the words but not what they mean in practice
- You do not know which terms you need now and which can wait

Treat this as a reading aid, not a vocabulary exam. A rough understanding is enough to keep going.

## Terms to learn first

If you just want to complete a first task, begin with these six:

| Term | Why learn it now? |
|---|---|
| **Prompt** | How to explain the task clearly |
| **Context** | What information Codex can currently see |
| **Agent** | Why it does more than reply with text |
| **Approval** | Why it sometimes stops and asks you |
| **Diff** | How to inspect what it changed |
| **Task** | The basic unit of complete work |

| Term | Simple explanation |
|---|---|
| **Prompt** | The goal, background, and requirements you give Codex |
| **Context** | Project, file, and conversation information visible to the model now |
| **Agent** | A way of working that uses tools and iterates toward a goal |
| **Tool** | A callable capability such as reading files, running commands, or searching |
| **Sandbox** | An execution environment that limits filesystem and network effects |
| **Approval** | Your explicit consent before certain actions can continue |
| **Diff** | A comparison of content before and after a change, for review |
| **Thread / session** | A continuous conversation and its accumulated context |
| **Task** | A goal-directed unit of work that may involve many tool calls |
| **Skill** | Reusable instructions and resources for specialized work (advanced) |
| **MCP** | A protocol for connecting external tools and data sources (advanced) |
| **Cloud task** | A task running in a cloud environment rather than a local sandbox |

## In plainer language

- **Prompt:** what you say when assigning a task
- **Context:** the materials Codex has at hand right now
- **Agent:** it actually advances the task instead of just replying
- **Approval:** for some actions it needs your go-ahead
- **Diff:** a before-and-after comparison
- **Skill:** a reusable package of established steps

## How to use this page

When you encounter these terms elsewhere, you need not stop for every definition:

- If you roughly understand it, keep reading
- If it remains unclear after repeated encounters, return here
- If it affects your understanding of a workflow, read its dedicated page

## Group the terms

If you do not want to memorize them all, group them like this:

- What you say: prompt
- What it sees: context
- How it works: agent, tools
- What it may do: approvals, sandbox
- How you inspect it: diff, task result

## Terms that can wait

These are mostly advanced topics that need not be mastered before your first task:

- Skill
- MCP
- Hook
- Plugin
- Details of cloud environments

Complete your [first task](/en/guide/getting-started/run-your-first-task/) before returning to them; they will usually be easier to understand then.

Come back when you find an unfamiliar term, then keep reading.

On a first pass, treat these terms as signposts. Knowing roughly what they mean is more useful than memorizing them all at once.
