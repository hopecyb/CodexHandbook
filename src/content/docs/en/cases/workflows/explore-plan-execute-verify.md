---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cross-checked against the handbook's verified planning, diagnosis, definition-of-done, testing, and AGENTS.md pages; this page covers the four-phase collaboration workflow and checkpoints without volatile product options."
  checkedAt: "2026-07-26"
title: Explore—plan—execute—verify
description: Scale exploration, planning, execution, and verification to the task's scope and uncertainty, and identify decisions that require a pause.
locale: en
source_locale: zh-CN
source_revision: 4a95760
translation_status: draft
translated_at: 2026-09-20
---

This is the handbook's recommended way to organize a task, from “not sure how yet” to “ready for acceptance.” Four phases do not mean four approvals. A small, well-scoped task can proceed continuously; pause for a decision when the approach is unresolved or required authorization is missing. Start with [task levels](/en/prompts/ask-for-a-plan/).

## Four phases overview

```text
① Explore   → Understand current state, scope, risks
② Plan      → Steps, files, acceptance criteria, and necessary tradeoffs
③ Execute   → Change code/docs/config within the authorized scope
④ Verify    → Tests, diff review, check against definition of done
```

When the current state is unclear, explore and plan first to avoid guessing. A clearly scoped typo fix need not be split into four interactions. See [Diagnose before fixing](/en/cases/workflows/diagnose-before-fixing/).

## ① Explore

**Goal:** Describe current state before deciding what to change.

Prompt example:

```text
Do not change code yet. Read @src/auth/ and related tests; list:
1. Current login flow
2. Files possibly related to Safari layout bug
3. One point you're unsure about and need me to confirm
```

Output: problem statement, impact scope, items to confirm.

## ② Plan

**Goal:** A reviewable step checklist.

```text
Based on the exploration above, give a plan: numbered steps, involved files, how to verify each step.
Do not write code until I reply "execute per plan."
```

The prompt above explicitly asks for a plan only, so execution must wait. If implementation is already authorized, ask instead for a brief plan followed by continuous execution and verification within the agreed scope. Whether to pause depends on authorization, necessary tradeoffs, and actual permissions—not the number of plan steps.

## ③ Execute

**Goal:** Keep changes small and reversible.

- Focus on one sub-goal at a time
- Prefer paths covered by tests
- For routine implementation details, update the plan and continue; if the premise or scope changes, return to ② and decide whether a new decision is needed

Guide phrase: “Complete the authorized scope; if you need to expand it, explain the specific impact and choices.”

## ④ Verify

**Goal:** Prove definition of done is met.

| Verification type | Approach |
|---|---|
| Automated | Unit tests, lint, type check |
| Manual | Read diff, hand-test critical paths |
| Artifacts | Screenshots, log snippets, API responses |

See [Definition of done](/en/prompts/define-done/) and [Run tests](/en/guide/quality/run-tests/) for checklists.

## Trim by task size

| Size | Explore | Plan | Execute | Verify |
|---|---|---|---|---|
| Typo fix | Check the target text | Can be implicit | Short | Review the diff and verify according to project rules |
| Single-file bug | Light | 3–5 steps | Medium | tests + diff |
| Cross-module feature | Identify dependencies | Written plan; pause for necessary tradeoffs | Complete in phases within the authorized scope | Test according to impact + hand-test |
| Production incident | Diagnose first | Rollback plan first | Tiny steps | Monitoring + postmortem |

## EPXV case template

Teams can embed the four phases in [case study template](/en/cases/use-cases/case-study-template/) and PR descriptions for shared language.

## Common mistakes

- Plan stays in your head—execution drifts
- Verification is only "looks like it runs"
- Insufficient explore—wrong module changed
