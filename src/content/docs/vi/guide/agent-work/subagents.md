---
title: Subagents
description: Delegating subtasks to isolated context—when to split, how to hand off, how to accept.
locale: vi
source_locale: en
source_revision: 85bd361
translation_status: fallback
translated_at: '2026-07-28'
---

A **Subagent** is an **independent work unit** the main Agent starts for a specific subproblem—relatively isolated context, results summarized back to the main thread.

Think of it as handing a clearly bounded small task to an assistant who only focuses on that piece. Value is not "cooler"—it is cleaner focus, easier parallelism.

## Core concept

| Main Agent | Subagent |
|---|---|
| Holds global goal and user conversation | Focuses on one subtask |
| Context includes full history | Cleaner context for deep dive |
| Coordinates and merges results | Executes exploration, retrieval, specialized implementation |

vs [parallel Agents](/guide/desktop-app/parallel-agents/): subagents are usually **delegated by the main Agent**, not multiple windows you open manually (product implementations may overlap—follow current UI).

## When splitting pays off

Not every large task needs a split—consider it when:

- A subproblem needs its own deep dive
- That subproblem is a different kind of work than the main line
- You want an independent conclusion before continuing

Then a subagent usually beats the main thread juggling global and local detail at once.

## Use cases

| Good fit | Poor fit |
|---|---|
| Targeted search: "how does auth module validate token" in a large repo | Needs ongoing back-and-forth clarification with you |
| Parallel research on two technical options | Subtasks need mutually exclusive edits to the same file |
| Long read-only analysis without polluting main context | No clear deliverable—"just look around" |

## Common misconceptions

### 1. More subagents is not always better

Too many adds cost:

- More results to read
- Conflicting conclusions
- Coordination overhead may exceed benefit

### 2. Complex task → always subagents?

Not if tightly coupled and needs frequent confirmation—main thread may be cheaper.

### 3. Can subagents also make all the edits?

Depends on delegation—but safer default:

- Subagent does read-only analysis, comparison, localization
- Main thread decides whether to modify after reading conclusions

## Recommended workflow

### 1. Main Agent writes subtask contract

```text
Subtask: read-only analysis of session refresh logic in packages/auth.
Deliverable: summary within 1 page + key file paths + risks.
Forbidden: change any file; do not push.
```

What matters is clarifying four things:

- Exactly what it owns
- What output looks like
- Disallowed actions
- Who decides after return

### 2. Subagent executes and returns structured result

Expected format:

```text
## Conclusion
## Evidence (file:line)
## Suggested next steps
## Open questions
```

### 3. Main Agent merges and decides

Main thread (or you) picks a path, then enters execution per [explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/).

### 4. Acceptance

- Can subagent output be verified independently (open files and check)?
- Did it modify repo without permission?
- If multiple subagents conflict, is that called out?

## When to consider splitting

If a subtask meets two of three:

1. Can be described independently
2. Has clear deliverable
3. Does not need constant sharing of fine-grained context with main thread

## With Skills and MCP

- **Skill**: standard deliverable format for subtasks (e.g. security review checklist)
- **MCP**: subagent read-only queries external tickets; main Agent synthesizes

## Common mistakes

- Subagent scope too large—becomes second main Agent
- No structured return—main thread re-reads long logs
- Multiple subagents editing same directory concurrently

Subagents fit subproblems with clear boundaries, clear deliverables, and independent completion—not duplicating the entire main task.

## Further reading

- [Multi-agent coordination](/cases/workflows/multi-agent-coordination/)
- [Handoff and resume](/guide/agent-work/handoff-and-resume/)
- KimYx0207 CX-08; stormzhang `21-subagents.md`

---

**Status:** verified  
**Applicable products:** App / CLI / Cloud  
**Verification basis:** Cross-checked with OpenAI Developers public material on multi-agent, long-running, and parallel workflows; this page confirms stable principles—isolated subtasks, clear boundaries, explicit deliverables—while UI and scheduling details remain non-contractual "per current product."  
**Last verified:** 2026-07-26
