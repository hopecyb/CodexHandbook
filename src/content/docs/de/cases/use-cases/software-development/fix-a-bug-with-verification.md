---
title: 'Case study: Fix a bug with verification'
description: From failing test to minimal fix and regression—the most common developer loop.
locale: de
source_locale: en
source_revision: bb1102f
translation_status: fallback
translated_at: '2026-07-28'
---

## Metadata

| Field | Content |
|---|---|
| Audience | Developers |
| Client | CLI or IDE (local repo) |
| Estimated time | 30–60 minutes |
| Verification date | 2026-07-25 |

## 1. Goal and context

**Goal:** Fix a regression bug already caught by unit tests, and add tests to prevent recurrence.

**Success criteria:**

- Originally failing test passes
- Full test suite still green
- Diff touches only necessary files

**Out of scope:** Large refactors, major dependency upgrades.

## 2. Preparation

- Clone repo, `pnpm install` (or per `AGENTS.md`)
- Confirm local repro: `pnpm test -- path/to/failing.test.ts`
- Branch: `fix/issue-123-short-desc`

## 3. Workflow

### Explore

```text
Do not change code yet. Read failing test @tests/auth/login.test.ts and implementation @src/auth/login.ts;
explain failure in 5 bullets or fewer, citing assertions and stack line numbers.
```

### Plan

```text
Give a fix plan: which files change, whether new tests are needed, how to verify.
Wait for my "execute" before changing code.
```

### Execute

```text
Execute plan steps 1–2. After each step run only related tests.
```

### Verify

```text
Run full test suite; summarize diff for my review; do not git push.
```

Human: read diff, confirm no unrelated changes, check per [Review diffs](/guide/quality/review-diffs/).

## 4. Failure and recovery

| Issue | Action |
|---|---|
| New failures after fix | `git stash` or revert commit; narrow change |
| Wrong root cause | Return to explore; request new hypothesis |
| Flaky test | Stabilize test before fixing business logic |

## 5. Capture

- If this bug class repeats, add a convention in `AGENTS.md`
- Optional `$regression-guard` Skill: run critical test list before merge

## 6. Related chapters

- [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/)
- [Developer learning path](/guide/learning-paths/developer/)
- [Run tests](/guide/quality/run-tests/)

---

**Status:** verified  
**Applicable products:** CLI / IDE  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified diagnose, run tests, review diffs, and developer path chapters; content is limited to the stable development loop from failing test to minimal fix and regression verification.
