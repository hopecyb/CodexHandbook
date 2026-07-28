---
title: Fix a bug
description: From failing test to minimal fix and regression—the most common developer loop.
locale: de
source_locale: en
source_revision: d9001be
translation_status: fallback
translated_at: '2026-07-28'
---

## Meta information

| Field | Content |
|---|---|
| Audience | Developers |
| Client | CLI or IDE (local repo) |
| Estimated time | 30–60 minutes |
| Verified date | 2026-07-25 |

## 1. Goal and background

**Goal:** Fix a regression bug already caught by unit tests, and add tests to prevent recurrence.

**Success criteria:**

- Original failing test passes
- Full test suite still green
- Diff only touches necessary files

**Out of scope:** Large refactors, major dependency upgrades.

## 2. Preparation

- Clone repo, `pnpm install` (or per `AGENTS.md`)
- Confirm local reproduction: `pnpm test -- path/to/failing.test.ts`
- Branch: `fix/issue-123-short-desc`

## 3. Workflow

### Explore

```text
Do not change code yet. Read failing test @tests/auth/login.test.ts and implementation @src/auth/login.ts;
explain the failure in 5 bullets or fewer, citing assertions and stack line numbers.
```

### Plan

```text
Give a fix plan: which files to change, whether new tests are needed, how to verify.
Wait for my reply "execute" before changing code.
```

### Execute

```text
Execute plan steps 1–2. After each step, run only related tests.
```

### Verify

```text
Run the full test suite; summarize diff for my review; do not git push.
```

Human: Read the diff, confirm no unrelated changes, check per [Review diffs](/guide/quality/review-diffs/).

## 4. Failure and recovery

| Issue | Action |
|---|---|
| New failures after fix | `git stash` or revert commit; narrow the change |
| Wrong root cause | Return to explore; request new hypothesis |
| Flaky test | Stabilize test before fixing business logic |

## 5. Capture for reuse

- If this bug type recurs, add a convention in `AGENTS.md`
- Extract `$regression-guard` Skill: run critical test list before merge

## 6. Related chapters

- [Understand a codebase](/cases/understand-a-codebase/)
- [Review diffs](/guide/quality/review-diffs/)
- [Run tests](/guide/quality/run-tests/)

---

**Status:** verified  
**Applicable products:** CLI / IDE  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' homepage currently still describes Codex as usable for fixing defects, running tests, and reviewing changes; this page focuses on the stable engineering loop—reproduce failure first, minimal fix, add tests, regression verification—not dependent on any specific framework or product UI.
