---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only explains how to limit file and folder scope; its examples and concepts have been checked, and it does not rely on volatile facts about product versions, pricing, or interfaces."
  checkedAt: "2026-07-26"
title: File and folder context
description: Identify relevant files and avoid unrelated noise.
locale: en
source_locale: zh-CN
source_revision: 'e9148a3'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
sidebar:
  order: 20
---

Do not just say “please change this.” Tell Codex which files to inspect and which to leave alone.

You may know the problem is in a particular directory. If you do not set a clear scope, Codex may bring unrelated files into the task.

## Why scope matters

When scope is too broad, several problems tend to appear:

- It reads many irrelevant files
- Unrelated information occupies the context
- It mistakes a similar file for the target
- Changes extend beyond what you expected

File and folder context gives Codex a boundary.

## Why set file boundaries

Think of guiding someone to find a document in an office:

- “Go look for it” may send them searching half the floor
- “Look only in the blue folder in the third cabinet” is much more efficient

The same applies to Codex. The clearer the scope, the less it needs to guess.

## A simple example

Name the relevant paths:

```text
Read only src/components/Button.tsx and its test file. Do not scan the entire repository.
```

This says:

- Where to look
- Where not to look
- Not to expand the scope on its own

## Common misconceptions

### 1. Should I name as many related files as possible?

Too few files leave it guessing; too many dilute the focus.
A better approach is to provide **only what the current task truly needs**.

### 2. What if I do not know where the relevant files are?

Ask Codex to narrow the scope first, and make the purpose explicit:

```text
First find the files related to the login button's styling. Do not modify anything yet.
```

Locating the files before making changes is usually more reliable than searching the whole repository and editing along the way.

### 3. Can I skip defining scope and let Codex find everything?

It can search, but the likely costs are:

- More files read
- More time
- More chance of pulling in similar files
- More risk of unexpected edits

### 4. Must I name both directories and files?

Not necessarily, but be as specific as you can.

- Know the file: name it directly
- Know only the general area: name the directory
- Completely unsure: first ask only for locating and explaining

## Three useful additions to a prompt

If you are concerned that Codex might change too much, state:

1. Which files or directories to inspect
2. Which areas not to scan
3. Which files the change will affect, before editing

In an IDE, also check that the current workspace root is correct.

## A prompt you can use

For example:

```text
First look only at `src/pages/home/` and `src/components/Hero.tsx`.
Do not scan `backend/` or `scripts/`.
If you need other files, explain why before continuing.
```

Giving Codex a file scope reduces guessing, noise, and unintended changes.
