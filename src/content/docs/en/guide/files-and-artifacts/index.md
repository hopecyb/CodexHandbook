---
title: Files and Artifacts
description: How Codex reads and writes file types, manages generated outputs, and what to verify.
sidebar:
  order: 30
locale: en
source_locale: zh-CN
source_revision: 3a5cc3b
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

Codex often produces **file changes in the repo** or **new artifacts** (docs, images, config). This section covers best practices by file type so you do not end up with “generated but unusable.”

“Files” are not all the same—different types need different instructions and verification.

“Edit code,” “handle spreadsheets,” “generate screenshots,” and “export slides” all look like file tasks, but failure modes differ.

## Section navigation

| Topic | Page |
|---|---|
| Code and text | [Text and code files](/en/guide/files-and-artifacts/text-and-code-files/) |
| Screenshots and design input | [Images and screenshots](/en/guide/files-and-artifacts/images-and-screenshots/) |
| PDF and long documents | [PDF and documents](/en/guide/files-and-artifacts/pdf-and-documents/) |
| Tabular data | [Tables and spreadsheets](/en/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Slides | [Presentations](/en/guide/files-and-artifacts/presentations/) |
| Agent outputs | [Generated artifacts](/en/guide/files-and-artifacts/generated-artifacts/) |

General method: [Verify artifacts](/en/guide/quality/verify-artifacts/).

## What this chapter covers

Three themes:

- How to describe the task clearly
- Where things silently go wrong
- How to verify at the end

It is operational guidance by file type—not a feature list.

## Unified principles

1. **Explicit paths**: output path and naming in the prompt
2. **Format conventions**: extension, encoding (UTF-8), line endings match the project
3. **Size awareness**: large binaries stay out of Git, or use LFS/CDN
4. **Human verification**: generated ≠ done; see [Definition of done](/en/guide/quality/definition-of-done/)
5. **Sensitive data**: see [Sensitive context](/en/guide/context/sensitive-context/)

## Common misconceptions

### 1. File exists ≠ task complete

Problems are often not “was it generated?” but:

- Correct format?
- Accurate content?
- Right path?
- Usable downstream?

### 2. All file types need the same instructions?

No.

- Code: scope, logic, tests
- Spreadsheets: columns, types, aggregation rules
- Images: visual content and dimensions
- Docs: structure, tone, facts

### 3. “Opens fine” means good enough?

Opening is the minimum—not necessarily ready to commit, publish, or deliver.

## Suggested reading order

First time using Codex on files:

1. Pick the file type closest to your task
2. Read common failure modes for that type
3. Read the matching verification approach

Easier than reading the whole chapter at once.

## Relationship to tools

- Read/write files: file tools + terminal
- View images: [Prompting with images](/en/prompts/prompting-with-images/)
- View pages: [Browser tool](/en/guide/tools/browser/)
- Generate images: [Image generation](/en/guide/tools/image-generation/)

File tasks often fail quietly—format, rules, or content drift while the file “exists.”

---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against current files-and-artifacts subsection structure and verified verify-artifacts, definition-of-done, sensitive-context, and image-related pages; stable principle: choose instructions and verification by file type.  
**Last verified:** 2026-07-26
