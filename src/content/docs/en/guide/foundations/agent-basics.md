---
title: Agent basics
description: How an Agent works toward a goal by calling tools and iterating.
locale: en
source_locale: zh-CN
reviewed_at: 2026-07-26
source_revision: 1013ae4
translation_status: reviewed
translated_at: 2026-07-26
sidebar:
  order: 20
---

An **Agent** doesn't end with one Q&A turn. It: understands the goal → chooses tools → observes results → adjusts the next step—until done or until it needs you.

## Agent vs ordinary chat

| | Ordinary chat | Agent |
|---|---|---|
| Output | Mostly text suggestions | Can read/write files, run commands, change the repo |
| Process | One reply | Multiple tool calls |
| Risk | Misleading advice | Can also break files or run dangerous commands |
| Your role | Read | Set boundaries, approve, accept |

## Related concepts

- Skill / Plugin / MCP: extend **what it can do** and **what it connects to**—advanced chapters to follow; see the [capability map](/guide/start-here/codex-capability-map/) for how they differ
- Human approval: see [Permissions and approvals](/guide/foundations/permissions-and-approvals/)

---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
