---
title: "Case: sửa Bug kèm kiểm chứng"
description: Từ test thất bại đến sửa tối thiểu và hồi quy — vòng lặp phổ biến nhất của nhà phát triển.
locale: vi
source_locale: zh-CN
source_revision: 91d8575
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

This is not a prompt template that merely swaps filenames. You will run real starter code, observe a failing test, and inspect how the reference repair makes the same suite pass.

## Metadata

| Field | Value |
|---|---|
| Audience | Developers |
| Client | CLI or IDE with a local repository |
| Estimated time | 25–45 minutes |
| Prerequisite | Run one Node.js command and read simple JavaScript |
| Dependency | Built-in `node:test`; no third-party package |
| Verified | 2026-08-25 |

## 1. Goal and background

**Business context:** `calculateTotal` receives a percentage discount. A zero discount works, but `10`, intended to mean 10%, is multiplied as a ratio and produces a negative total.

**Goal:** locate the calculation error, make the smallest repair, and prove that the same tests move from red to green.

**Success criteria:**

- Starter suite reliably has one failure: expected 36, actual -360.
- All three tests pass after repair.
- Only percentage conversion changes; the cart API is not rewritten.
- You can explain why post-fix green must be stored with pre-fix red.

**Out of scope:** monetary precision libraries, tax, currency conversion, upgrades, UI.

![Verified bug-fix workflow](/diagrams/verified-bug-fix-workflow-vi.svg)

The two return paths matter: a related-test failure returns to the minimal repair; regression or diff failure returns to root-cause analysis. Never delete assertions or broaden changes only to reach green.

## 2. Prepare material

```text
examples/complete-workflows/developer/verified-bug-fix/
├── brief.md
├── starter/
│   ├── cart.js
│   └── cart.test.js
├── prompts/
│   ├── 01-explore.md
│   ├── 02-fix-and-verify.md
│   └── 03-review.md
├── solution/
│   ├── cart.js
│   └── cart.test.js
└── validation.md
```

`starter/` intentionally contains the bug; `solution/` is an independently runnable reference. Do not practice on the solution.

## 3. Reproduce red

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

Expected: non-zero exit, one failure out of three. Key evidence resembles:

```text
Expected values to be strictly equal:

-360 !== 36
```

If it does not fail, stop. Confirm the `starter/` path, Node.js version, and whether files were already modified. Without stable red, there is no baseline.

## 4. Read-only exploration

### Explore

```text
Do not edit. Read:
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.js
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

In at most six points state:
1. triggering input;
2. expected and actual values;
3. percentage versus ratio in the formula;
4. exact minimal repair location;
5. public behavior that must remain;
6. post-fix verification commands.
```

A valid explanation says callers pass `10` for 10%, but the implementation computes `subtotal * 10` without dividing by `100`.

## 5. Plan and make the smallest repair

```text
Modify only percentage conversion in starter/cart.js.
Do not change the function name, parameters, assertions, file structure, or dependencies.

Then:
1. run starter/cart.test.js;
2. show the actual test summary;
3. explain the changed line;
4. do not commit or push.
```

The core repair is:

```js
const discount = subtotal * (discountPercent / 100);
```

Changing expected `36` to `-360` only rewrites the expectation; it does not repair the rule.

## 6. Verify green

To preserve the starter, run the reference:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Expected: all three pass and exit status is zero.

Keep at least:

| Evidence | Question |
|---|---|
| Pre-fix failing command | Is the original issue reproducible? |
| Failing assertion | Does the test cover the bug? |
| Code diff | Does the edit touch only the cause? |
| Post-fix related test | Is the same behavior now correct? |
| Broader tests | Did adjacent behavior regress? |

This exercise has one suite. A real repository also runs lint, types, and full tests from `AGENTS.md`.

## 7. Review

```text
Review this repair without editing. List findings first:
- Does it convert the percentage rather than weaken tests?
- Did it change the signature or unrelated logic?
- Are empty cart, no discount, and 10% covered?
- Which monetary precision risks remain out of scope?
```

Also confirm no dependency, debug log, whole-file format, or Git operation appeared.

## 8. Failure and recovery

| Problem | Response |
|---|---|
| Starter does not fail | Run `starter/cart.test.js` and restore the starter |
| Green after test change | Restore assertion; edit only percentage conversion |
| Related test still fails | Compare values and placement of `/ 100` |
| Full suite gains failures | Return to root cause, public behavior, and scope |
| Flaky test | Stabilize the environment; one green run is not evidence |

## 9. Transfer to a real repository

```text
Goal: fix [observable wrong behavior].
Reproduction: [exact command]; stable failure: [assertion].
Scope: only [implementation] and required tests; no refactor or upgrade.
Acceptance: original and boundary tests pass; [full command] passes; clean diff.
Permissions: no push, release, or production data; stop before extra access.
Locate root cause and risk read-only; wait for plan approval before editing.
```

## 10. Preserve the process

- Add an `AGENTS.md` rule if this bug class repeats.
- Extract a `regression-guard` Skill requiring red, green, and regression evidence.
- Put frequent boundary tests in CI rather than only in chats.

## 11. Related chapters

- [Diagnose before fixing](/vi/cases/workflows/diagnose-before-fixing/)
- [Developer learning path](/vi/guide/learning-paths/developer/)
- [Run tests](/vi/guide/quality/run-tests/)
- [Review diffs](/vi/guide/quality/review-diffs/)
- [Define done](/vi/prompts/define-done/)

---

**Trạng thái:** verified
**Áp dụng cho:** CLI / IDE
**Căn cứ kiểm chứng:** The starter was verified with one expected failure out of three; the reference solution passes all three. The evidence chain is organized as red, root cause, minimal repair, green, regression, and human review.
**Kiểm chứng gần nhất:** 2026-08-25
