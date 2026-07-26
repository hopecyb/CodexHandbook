---
title: Context and files
description: Managing projects, files, conversation context, and common input types.
sidebar:
  order: 15
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

# Context and files

**Context** is what Codex can see, reference, and act on at this moment.

You may know exactly what you want, but if key material is missing, work drifts—same as a new teammate without the right background. Poor context management drowns even good prompts in noise.

## What context includes

Think of what a new colleague would need in a group chat:

- Your task instructions—the current question
- Files you open for it—background material
- Repo rule docs—team agreements
- Conversation history—memory of this task

Together, that is the context Codex is using.

## Common failure modes

Many "it misunderstood again" cases are context problems:

- Too little information—it guesses
- Too much information—focus is lost
- You assumed it knew a file but never pointed to it
- Long old threads—early detail no longer relevant

One simple standard for this page:

> **Show what truly matters; keep irrelevant material out of the way.**

## Context management

- [Project context](/guide/context/project-context/) — `AGENTS.md`, repo conventions
- [File and folder context](/guide/context/file-and-folder-context/) — @ references and scope
- [Conversation context](/guide/context/conversation-context/) — threads and compaction
- [Keep context focused](/guide/context/keep-context-focused/) — avoid unrelated noise
- [Sensitive context](/guide/context/sensitive-context/) — secrets and privacy

How to organize background in prompts: [goals and context](/prompts/goals-and-context/).

## Files and artifacts

Besides telling Codex what to do, you often need to **show it things**:

- Code or documents
- Screenshots
- PDFs
- Spreadsheets
- Presentations

Different file types imply different read patterns, prompting, and acceptance checks.

## Files and artifacts

- [Text and code files](/guide/files-and-artifacts/text-and-code-files/)
- [Images and screenshots](/guide/files-and-artifacts/images-and-screenshots/)
- [PDFs and documents](/guide/files-and-artifacts/pdf-and-documents/)
- [Tables and spreadsheets](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [Presentations](/guide/files-and-artifacts/presentations/)

## Suggested reading order

No need to read everything at once:

1. [File and folder context](/guide/context/file-and-folder-context/) — what files to show
2. [Keep context focused](/guide/context/keep-context-focused/) — avoid scattering the task
3. Read file-type chapters matching what you are working with

Context is the pile of information Codex judges from—get it right and results are easier to get right.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Navigation and methodology page; framework that task requirements, file material, project rules, and conversation history form context cross-checked with current context and file-handling chapters—not dependent on volatile UI details.  
**Last verified:** 2026-07-26
