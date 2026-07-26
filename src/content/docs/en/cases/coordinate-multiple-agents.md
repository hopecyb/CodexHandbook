---
title: Coordinate multiple agents
description: A collaboration case for parallel exploration, divided execution, and merging results.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

# Coordinate multiple agents

## Meta information

| Field | Content |
|---|---|
| Audience | Developers / teams |
| Client | Desktop App |
| Estimated time | Depends on task |

## 1. Goal and background

**Goal:** Split parallelizable sub-problems across multiple agents; humans merge conclusions.

**Success criteria:** Each sub-agent has a clear completion definition; no two agents edit the same files.

## 2. Recommended patterns

### Parallel exploration, human selects approach

```text
Agent 1: Pros, cons, and effort for plan A
Agent 2: Pros, cons, and effort for plan B
(You choose; single agent executes)
```

### Worktree isolation

Different agents work in different [git worktrees](/guide/desktop-app/worktrees/) on different branches; humans merge at the end.

## 3. Coordination rules (recommended in AGENTS.md)

- Each agent has explicit directory boundaries
- No parallel `git push`
- Run CI before merging

## 4. Related

- [Multi-agent coordination](/cases/workflows/multi-agent-coordination/)
- [Subagents](/guide/agent-work/subagents/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Help Center's current Codex plan materials still describe parallel Codex agents in the Desktop App, built-in worktree support, and cloud delegation; this page summarizes collaboration patterns—parallel exploration, directory-boundary isolation, avoiding parallel push, human merge of conclusions—not dependent on any single UI flow.
