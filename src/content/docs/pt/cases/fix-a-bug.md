---
title: Corrigir um bug
description: Do teste em falha à correção mínima e regressão — o ciclo mais comum para programadores.
locale: pt
source_locale: zh-CN
source_revision: 27c707b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---


This is a short entry page. The complete steps, runnable code, red/green test evidence, and phase-specific prompts are maintained in [Verified bug fixing](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/) so the two pages do not drift.

## Identify the missing step

| Current situation | Start here |
|---|---|
| You only know the result is wrong; there is no stable reproduction | [Diagnose before fixing](/pt/cases/workflows/diagnose-before-fixing/) |
| A test fails reliably | [Verified bug fixing](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| You do not know the module | [Understand a codebase](/pt/cases/understand-a-codebase/) |
| The fix is complete and ready to merge | [Review a PR](/pt/cases/review-a-pr/) |
| The test itself is unstable | Read [Run tests](/pt/guide/quality/run-tests/) first; a flaky test is not repair evidence |

## Minimal evidence loop

Keep this evidence chain in any language or framework:

1. Reproduce the original failure reliably with an explicit command.
2. Save the failing assertion, error output, and input conditions.
3. Explain the root cause before making the smallest repair.
4. Make the original failing test and new boundary tests pass.
5. Run broader regression checks.
6. Read the diff manually and reject unrelated changes.

Step 4 without step 1 does not prove that the test covers the original issue. A green full suite without diff review also does not prove that the change scope is correct.

## Practice directly

The repository includes a JavaScript shopping-cart discount example with no third-party dependencies:

```bash
# Starter: one test is expected to fail
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# Reference solution: all three tests are expected to pass
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

The complete materials are in [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix).

---

**Status:** verified
**Applies to:** CLI / IDE
**Verification basis:** This entry page maintains only path selection and a stable engineering loop. The expected failing and passing commands were run in the current repository.
**Last verified:** 2026-08-25
