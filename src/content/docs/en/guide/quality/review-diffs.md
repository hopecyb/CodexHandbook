---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains the scope and risks to examine when reviewing a diff. Its internal link and review sequence have been checked; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Review diffs
description: How to read changes and ask questions.
locale: en
source_locale: zh-CN
source_revision: f7f953f
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 10
---

A “diff” shows exactly what Codex changed this time.

On a first review, many people read only its summary rather than the actual changes. The diff is where you are most likely to find problems; a statement that the work is complete is only a reference.

## What to look for in a diff

A diff directly answers several important questions:

- Which files did Codex change?
- Were the changes confined to the scope you allowed?
- Did it accidentally delete or break something else?
- Did it include debug output, secrets, or temporary code?

When reading a diff, focus on:

1. Were only allowed paths changed?
2. Were there unexpected deletions?
3. Are naming and style consistent?
4. Are there secrets or debug leftovers?

For the product view, see [Diffs, comments, and review](/en/guide/desktop-app/diffs-comments-and-review/).

## Quality checks for AI-generated code

Beyond which files changed, check whether the changes look like they belong in this project:

| Check | What to look for |
|---|---|
| Naming | Do variable, function, and file names communicate intent, rather than relying everywhere on `data`, `temp`, or `helper`? |
| Function boundaries | Has one large function taken on several responsibilities? |
| Error handling | Do failures provide useful context, and are exceptions being swallowed? |
| Tests | Were tests added that demonstrate behavior, rather than changing only the implementation? |
| Comments | Do comments explain *why* rather than repeat the code? |
| Simplicity | Were unnecessary abstractions introduced just to make the change look complete? |

For a quick review, ask Codex to review its own diff against this table, list only risks, and make no further file changes.

## Common misunderstandings

### 1. You can perform a basic review without knowing how to read every line of code

At first, you need not read logic like a senior developer. Checking these three things already helps:

- Which files changed
- Whether anything outside the intended scope changed
- Whether clearly unrelated material appeared

### 2. Changing only one file does not guarantee safety

Fewer files do not mean the change is correct. A small scope does make it easier to inspect and undo.

### 3. Even a “small change” deserves a look

Problems often hide in changes that appear minor.

## Review order

On your first diff review, use this order:

1. Count the changed files.
2. Check whether any are outside the paths you allowed.
3. Look for obvious accidental deletions, temporary logs, and debug leftovers.
4. Check whether style and naming fit the project.

First establish what actually changed, then decide whether to accept the result.
