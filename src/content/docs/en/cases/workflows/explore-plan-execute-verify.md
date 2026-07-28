---
title: Explore—plan—execute—verify
description: Codex's default main workflow—four phase checkpoints, steadier than "one shot."
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

This is the handbook's recommended default workflow—from "not sure how yet" to "ready to merge."

## Four phases overview

```text
① Explore   → Understand current state, scope, risks
② Plan      → Steps, files, acceptance criteria (large tasks need your confirmation)
③ Execute   → Change code/docs/config in small steps
④ Verify    → Tests, diff review, check against definition of done
```

Do not skip ①② and jump to ③—that often becomes "guess and patch." See [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/).

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

Large or high-risk changes need confirmation first. Small tasks can agree "plan under 3 steps can auto-execute"—write that in [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/).

## ③ Execute

**Goal:** Keep changes small and reversible.

- Focus on one sub-goal at a time
- Prefer paths covered by tests
- If plan diverges, **return to ②** instead of forcing ahead

Guide phrase: "Execute step 2; if the plan must change, stop and explain first."

## ④ Verify

**Goal:** Prove definition of done is met.

| Verification type | Approach |
|---|---|
| Automated | Unit tests, lint, type check |
| Manual | Read diff, hand-test critical paths |
| Artifacts | Screenshots, log snippets, API responses |

See [Definition of done](/prompts/define-done/) and [Run tests](/guide/quality/run-tests/) for checklists.

## Trim by task size

| Size | Explore | Plan | Execute | Verify |
|---|---|---|---|---|
| Typo fix | Can skip | 1 verbal step | Short | lint |
| Single-file bug | Light | 3–5 steps | Medium | tests + diff |
| Cross-module feature | Required | Written plan + confirm | Phased | Full tests + hand-test |
| Production incident | Diagnose first | Rollback plan first | Tiny steps | Monitoring + postmortem |

## EPXV case template

Teams can embed the four phases in [case study template](/cases/use-cases/case-study-template/) and PR descriptions for shared language.

## Common mistakes

- Plan stays in your head—execution drifts
- Verification is only "looks like it runs"
- Insufficient explore—wrong module changed

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified planning, diagnose, definition of done, run tests, and `AGENTS.md` pages in this handbook; content limited to four-phase collaboration main path and checkpoints—no volatile product parameters or entry details.
