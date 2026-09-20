---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Cross-checked against this handbook's verified beginner safety checklist, result review, and undo and recovery chapters. This page is limited to the stable first step of learning in a disposable practice directory.
  checkedAt: '2026-07-26'
title: Create your first practice project
description: Set up a safe, disposable practice directory.
locale: en
source_locale: zh-CN
source_revision: 43dcbdb
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 70
---

When setting up a first practice project, it is tempting to use a real project you already have. That may seem convenient, but it also raises the risk.

## Recommended approach

1. Create a new folder, such as `codex-practice/`.
2. Add one or two text files without sensitive information, such as `hello.md`.
3. Open or add that folder as a project in Codex.
4. **Do not** use a repository containing production secrets, customer data, or history you cannot discard.

## Why start with a practice project?

The goal of the first task is to learn the workflow, not to deliver business work. Isolation makes mistakes much less costly.

For your first exercise, focus on learning:

- How Codex interprets a task
- When it requests permission
- How you check the result
- How to undo a mistake

If you start in a real project, those low-risk learning steps can have real consequences.

## Common misunderstandings

### 1. The practice project should resemble production as closely as possible

For your first attempt, safety, disposability, and ease of review matter more than perfect realism.

### 2. A real repository is fine as long as I am careful

The more common first-time problems are:

- An unclear task boundary
- Missing something in the diff
- Approving an action you did not understand

### 3. A simple practice project teaches nothing

The smaller the first task, the easier it is to focus on the workflow rather than the complexity of the business problem.

## How to choose a practice project

If you are creating one now, make sure it meets at least these four conditions:

1. You can discard it.
2. It contains no sensitive data.
3. It has few files and a simple structure.
4. You can understand each change at a glance.

Your first practice project does not need to look like production. It only needs to be safe, simple, and easy to restore after a mistake.
