---
title: Workflow methods
description: Repeatable collaboration methods—not tied to a single product UI, emphasizing checkpoints and acceptance.
locale: en
source_locale: zh-CN
source_revision: 2306981
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

[Prompts](/en/prompts/) teach you how to **say** things; workflows teach you how to **organize a whole task**. Methods in this chapter apply to App, CLI, IDE, and Cloud.

## Why workflows matter

External tutorials often tell a "one conversation solves it" story; real projects more often look like:

```text
Explore → Plan → Execute → Verify → (possibly) handoff or automation
```

Without checkpoints, you risk: editing the wrong directory, skipping tests, mistaken merges, losing conclusions when context runs out.

## Core workflows

| Workflow | What it solves |
|---|---|
| [Explore—plan—execute—verify](/en/cases/workflows/explore-plan-execute-verify/) | General main path; fits most tasks |
| [Brainstorm before building](/en/cases/workflows/brainstorm-before-building/) | Diverge and converge when approach is unclear |
| [Specification-driven work](/en/cases/workflows/specification-driven-work/) | Write acceptance spec before implementation |
| [Test-driven work](/en/cases/workflows/test-driven-work/) | Tests first drive implementation |
| [Human approval patterns](/en/cases/workflows/human-approval-patterns/) | When to stop, approve, or reject |
| [Diagnose before fixing](/en/cases/workflows/diagnose-before-fixing/) | Avoid "guess and patch" |
| [Review before merge](/en/cases/workflows/review-before-merge/) | Structured review before PR merge |
| [Research with sources](/en/cases/workflows/research-with-sources/) | Search, compare, and source verification |
| [Artifact-first work](/en/cases/workflows/artifact-first-work/) | Agree on deliverables first, then derive steps |
| [Multi-agent coordination](/en/cases/workflows/multi-agent-coordination/) | Parallel work and division of labor |
| [Long-running task management](/en/cases/workflows/long-running-task-management/) | Cross-session checkpoints and exit conditions |
| [Failure recovery](/en/cases/workflows/failure-recovery/) | Roll back when off track or tests go red |
| [Turn a workflow into a Skill](/en/cases/workflows/turn-a-workflow-into-a-skill/) | Write repeated flows as Skills |

## Other chapters related to workflows

- Quality: [Core capabilities · Quality and verification](/en/guide/quality/)
- Agent: [Planning](/en/guide/agent-work/planning/), [Subagents](/en/guide/agent-work/subagents/)
- Capture: [Skills](/en/skills/overview/), [AGENTS.md](/en/guide/customization/agents-md/what-is-agents-md/)
- Cases: [Use cases library](/en/cases/use-cases/)

## Design principles

1. **Each phase has an artifact**: plan, diff, test report, decision record
2. **Default to small steps**: reviewable increments beat one huge change
3. **Failures recoverable**: know how to undo and fork a thread to continue
4. **Capture when possible**: third repetition of a flow → Skill or template

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified prompts, quality, agent work, and Skills chapters in this handbook; this page only provides method navigation and phase checkpoint guidance—not treating specific client flows as long-term contracts.
