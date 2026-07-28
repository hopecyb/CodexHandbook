---
title: Multi-agent coordination
description: Parallel exploration, divided execution, and merging results—when to split and how to verify.
locale: de
source_locale: en
source_revision: 55224d7
translation_status: fallback
translated_at: '2026-07-28'
---

Multi-agent setups fit parallel, loosely coupled sub-problems. They do not fit two agents editing the same file with no coordinator.

## When to split

| Good fit | Poor fit |
|---|---|
| Frontend styling + backend API contract researched in parallel | Two people changing the same function |
| One runs tests while another writes docs | Shared mutable state with no locking |
| Explore multiple implementation options | Strong sequential dependency not yet mapped |

Product capabilities: [Parallel agents](/guide/desktop-app/parallel-agents/), [Subagents](/guide/agent-work/subagents/).

## Coordination patterns

### Pattern A: Parallel exploration, human picks

```text
Agent 1: pros/cons and effort for option A
Agent 2: pros/cons and effort for option B
You: pick one, then open a single Agent to execute
```

### Pattern B: Pipeline

```text
Explore Agent → output plan → Execute Agent (new thread with plan summary)
```

Use [handoff and resume](/guide/agent-work/handoff-and-resume/) to pass structured summaries—don't paste entire chats.

### Pattern C: Worktree isolation

Different Agents edit different branches in separate [git worktrees](/guide/desktop-app/worktrees/); humans merge at the end.

## Coordination rules (recommended in AGENTS.md)

- Each Agent has explicit directory boundaries
- No parallel `git push`
- Run CI once before merge
- Conflicts resolved by humans—don't let Agents guess

## Acceptance

- [ ] Each sub-Agent has its own definition of done
- [ ] Full test suite passes after merge
- [ ] Diffs trace back to the corresponding sub-task description

## Common mistakes

- Three parallel Agents editing `package.json`
- No rollup step—unclear whose conclusion to follow

---

**Status:** verified  
**Applicable products:** App / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current public multi-agent / subagent material, plus this handbook's verified subagent, handoff/resume, and parallel-work chapters; content is limited to stable methods for when to split, how to isolate boundaries, and how humans roll up and verify—not fixed contracts for current beta or UI entry points.
