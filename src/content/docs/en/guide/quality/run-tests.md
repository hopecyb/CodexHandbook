---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains why verification belongs in task acceptance. Its example prompts and check sequence have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Run tests
description: Make verification steps part of the task.
locale: en
source_locale: zh-CN
source_revision: 8b1e5c7
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 20
---

After a change, you need some way to confirm that it has not obviously broken anything.

That evidence might be automated tests, a successful build, or a clear set of manual checks.

## What tests should answer

Tests answer a practical question:

> **How do you know this change did not also break something else?**

Without a verification step, the result may only “look about right.”

Include test commands in the prompt's acceptance criteria. If the repository has no tests, require at least a successful start or build command, or a set of manual verification steps.

Calling something “done” without checking it is often just a subjective judgment.

## Common misunderstandings

### 1. Verification matters beyond programming

Documents, pages, configuration, and content need appropriate checks too.

### 2. A repository without tests still needs acceptance checks

If there are no automated tests, require at least one of:

- A successful build
- A successful start
- Clear manual checks

### 3. A “small change” does not automatically justify skipping verification

Small changes can have side effects, especially when you do not yet know the project well.

## Verification order

If you are unsure where to start, follow this order:

1. Run relevant tests when they exist.
2. Otherwise, build or start the project.
3. If that is insufficient, add minimal manual checks.

The aim is to avoid delivering without any verification, not to achieve complete coverage in one pass.

## A line you can put directly in your prompt

For a first task, add:

```text
After finishing, run the relevant checks. If there are no automated tests, tell me the minimum manual steps to verify the result.
```

Even when the repository's tests are incomplete, this keeps verification in the task.

## Add this when needed

You can also add:

```text
Tell me which checks you actually ran. If you could not run them, explain why rather than treating them as passed.
```

Verification can be light, but it cannot be absent if “done” is to mean anything.
