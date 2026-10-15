---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only explains how working with an agent differs from ordinary chat; its internal links, concepts, and analogies have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Agent basics
description: How an agent uses tools and iterates toward a goal.
locale: en
source_locale: zh-CN
source_revision: 14ab120
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

An **agent** keeps working toward a goal: understand the goal → choose a tool → observe the result → adjust the next step, until the work is done or it needs your input.

An ordinary AI is more like someone who answers questions. An agent is more like someone who takes on a task and works through it step by step.

![Illustration: on the left, a plain question-and-answer chat; on the right, an agent loop that reads files, uses tools, checks results, and revises output](/illustrations/agent-basics.webp)

## Agent versus ordinary chat

| | Ordinary chat | Agent |
|---|---|---|
| Output | Mainly written advice | Can read and write files, run commands, and change a repository |
| Process | One response | Multiple tool calls |
| Risk | Misleading advice | Can also damage files or run dangerous commands |
| Your role | Read the answer | Set boundaries, approve actions, and review results |

## A simple analogy

Compare them this way:

- **Ordinary chat:** asking a friend “How do I solve this?”
- **Agent:** asking a colleague to make a first pass and then reviewing it together

In agent mode, pay closer attention to:

- What it can access
- Whether it should propose a plan first
- How you will review its work

## Why the distinction matters

Many mistakes begin with one assumption:

> Thinking it is “only talking”

Once it starts reading or changing files and running commands, it is participating in real work rather than merely offering advice in a chat window.

If you are new to agents, also read:

1. [Permissions and approvals](/en/guide/foundations/permissions-and-approvals/)
2. [Run your first task](/en/guide/getting-started/run-your-first-task/)
3. [Review the result](/en/guide/getting-started/review-the-result/)

## Related concepts

- Skills, plugins, and MCP extend “what it can do” and “what it can connect to”: see [Extensions and automation](/en/skills/) and the [capability map](/en/guide/start-here/codex-capability-map/)
- Human approval: see [Permissions and approvals](/en/guide/foundations/permissions-and-approvals/)

An agent can take several steps toward a goal; it does more than return a paragraph of text.
