---
title: Workflow methods
description: Repeatable collaboration methods—not tied to a single product UI, emphasizing checkpoints and acceptance.
locale: pt
source_locale: en
source_revision: 89115b8
translation_status: fallback
translated_at: '2026-07-28'
---

[Prompts](/prompts/) teach you how to **say** things; workflows teach you how to **organize a whole task**. Methods in this chapter apply to App, CLI, IDE, and Cloud.

## Why workflows matter

External tutorials often tell a "one conversation solves it" story; real projects more often look like:

```text
Explore → Plan → Execute → Verify → (possibly) handoff or automation
```

Without checkpoints, you risk: editing the wrong directory, skipping tests, mistaken merges, losing conclusions when context runs out.

## Core workflows

| Workflow | What it solves |
|---|---|
| [Explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/) | General main path; fits most tasks |
| [Brainstorm before building](/cases/workflows/brainstorm-before-building/) | Diverge and converge when approach is unclear |
| [Specification-driven work](/cases/workflows/specification-driven-work/) | Write acceptance spec before implementation |
| [Test-driven work](/cases/workflows/test-driven-work/) | Tests first drive implementation |
| [Human approval patterns](/cases/workflows/human-approval-patterns/) | When to stop, approve, or reject |
| [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/) | Avoid "guess and patch" |
| [Review before merge](/cases/workflows/review-before-merge/) | Structured review before PR merge |
| [Research with sources](/cases/workflows/research-with-sources/) | Search, compare, and source verification |
| [Artifact-first work](/cases/workflows/artifact-first-work/) | Agree on deliverables first, then derive steps |
| [Multi-agent coordination](/cases/workflows/multi-agent-coordination/) | Parallel work and division of labor |
| [Long-running task management](/cases/workflows/long-running-task-management/) | Cross-session checkpoints and exit conditions |
| [Failure recovery](/cases/workflows/failure-recovery/) | Roll back when off track or tests go red |
| [Turn a workflow into a Skill](/cases/workflows/turn-a-workflow-into-a-skill/) | Write repeated flows as Skills |

## Other chapters related to workflows

- Quality: [Core capabilities · Quality and verification](/guide/quality/)
- Agent: [Planning](/guide/agent-work/planning/), [Subagents](/guide/agent-work/subagents/)
- Capture: [Skills](/skills/overview/), [AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- Cases: [Use cases library](/cases/use-cases/)

## Design principles

1. **Each phase has an artifact**: plan, diff, test report, decision record
2. **Default to small steps**: reviewable increments beat one huge change
3. **Failures recoverable**: know how to undo and fork a thread to continue
4. **Capture when possible**: third repetition of a flow → Skill or template

## Reference sources

- freestylefly/CodexGuide workflows and playbook
- stormzhang `14-workflows.md`
- codex.bozhouai.com fourth article standard workflows

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified prompts, quality, agent work, and Skills chapters in this handbook; this page only provides method navigation and phase checkpoint guidance—not treating specific client flows as long-term contracts.
