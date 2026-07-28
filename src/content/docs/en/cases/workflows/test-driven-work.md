---
title: Test-driven work
description: Define or add failing tests first, then drive implementation—objective acceptance for Codex changes.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

**Test-driven work** (TDD or "tests first") means making tests fail first, then minimal implementation to pass. It fits repos with test infrastructure and links directly to cases like [Fix a bug with verification](/cases/use-cases/software-development/fix-a-bug-with-verification/).

## What's covered

- When to require "write/run tests first"
- How to prompt Codex not to skip test steps
- Rollback strategy when tests fail

## Who it's for

- Repos with unit/integration tests
- Regression bugs, API behavior changes, refactors

Poor fits: prototypes without tests, one-off copy on marketing sites. Use [EPXV](/cases/workflows/explore-plan-execute-verify/) with manual verification instead.

## Minimum viable approach

```text
1. Write a failing test for expected behavior (or point to an existing failure)
2. Implement only the minimum code to pass that test
3. Run the related test suite, then the full suite
4. Do not delete assertions or mock away real logic just to pass
```

Prompt:

```text
TDD: first write a failing test for "empty input returns []" in @src/foo.ts;
run tests to confirm failure, then change implementation; run only the related test file each step.
```

## Recommended workflow

| Phase | Output |
|---|---|
| Red | Failing test + explanation of failure |
| Green | Minimal implementation + passing tests |
| Refactor | Clean up under test protection (optional separate step) |

Combine with [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/): read failing assertions and stack first, then change implementation.

## Common mistakes

- Claiming done without running tests
- Changing tests to match wrong implementation
- Running one test but claiming full green
- Full slow E2E on every iteration—use `-t` or file-level filters

## Security boundaries

- Test commands must stay within [command rules](/guide/customization/rules/command-rules/)
- Integration tests hitting production APIs must be forbidden in spec or use mocks

## Acceptance checklist

- [ ] Evidence of fail→pass tests (logs or CI)
- [ ] Full or agreed-scope test suite passes
- [ ] Diff has no unrelated test deletions
- [ ] Aligned with [Define done](/prompts/define-done/)

## Related chapters

- [Run tests](/guide/quality/run-tests/)
- [Case: Fix a bug with verification](/cases/use-cases/software-development/fix-a-bug-with-verification/)

---

**Status:** verified  
**Applicable products:** CLI / IDE  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified run tests, define done, fix-a-bug-with-verification, and command rules chapters; this page focuses on the stable test pattern of fail first, minimal implementation to pass.
