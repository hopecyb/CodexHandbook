---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Cross-checked against this handbook's verified chapters on reviewing diffs, defining done, and undo and recovery. This page focuses on the stable sequence of checking scope, result, and side effects before accepting a change.
  checkedAt: '2026-07-26'
title: Review the result
description: Read changes, verify the artifact, and decide whether to accept or revise.
locale: en
source_locale: zh-CN
source_revision: 'a215910'
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 90
reviewed_at: 2026-10-25
---

Many beginners skip this step after Codex completes a task.

Using Codex reliably depends on whether you can **review the result**.

Do not stop at its statement that the task is done. Check what it actually changed and whether the result is what you wanted.

## Review checklist

1. **Read the diff**: Did it change only the files you allowed?
2. **Open the artifact**: Does the content meet your acceptance criteria?
3. **Ask for a correction**: If the result is close, give precise follow-up feedback.
4. **Decide**: Accept it, edit it manually, or [undo it](/en/guide/getting-started/undo-and-recover/).

For more methods, see [Review diffs](/en/guide/quality/review-diffs/).

## Common things people miss

### 1. Reading the summary but not the actual changes

Codex may write a convincing summary, but what matters is:

- Whether it changed the wrong files
- Whether it also changed anything you did not authorize
- Whether the result really meets the acceptance criteria

### 2. Accepting a result that is “close enough”

“Close enough” can leave small problems for later. If it misses by a little, give one precise correction instead of quietly settling for it.

### 3. Seeing a problem but not knowing how to describe it

You can continue with a sentence like this:

```text
The result is close, but two issues remain: 1) … 2) … Please fix only these two points and leave everything else unchanged.
```

## Review order

For your first exercise, check in this order:

1. **Scope**: Which files changed?
2. **Result**: Does the page, document, or code output meet the requirements?
3. **Side effects**: Were unnecessary changes or new errors introduced?

Acceptance means deciding whether you can confidently keep this result.
