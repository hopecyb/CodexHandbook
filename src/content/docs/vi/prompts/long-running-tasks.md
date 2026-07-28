---
title: Long-running tasks
description: Phases, checkpoints, and handoff information.
locale: vi
source_locale: en
source_revision: 672cd09
translation_status: fallback
translated_at: '2026-07-28'
---

Long tasks often fail like this:

- too much in one go
- no checkpoints midway
- constraints fighting each other in a long thread

The point isn't a longer prompt—it's splitting into phased substeps with checkpoints.

Break long work into phases, each with acceptance:

```text
Phase 1: Research and list options only (no code changes)
Phase 2: Minimal implementation
Phase 3: Add tests and run …
Stop after each phase for my confirmation.
```

## Why long tasks drift

They usually mix:

- understanding the problem
- designing a solution
- implementing changes
- running verification
- writing handoff notes

Doing it all in one shot raises risk noticeably.

## Common misconceptions

### 1. Long tasks are just short tasks with more detail

Long tasks need **phased management**, not only more background.

### 2. Listing phases isn't enough

Each phase needs a clear exit, e.g.:

- options only, no code
- minimal implementation only
- tests and verification only

### 3. One thread to the end is always better

Handoff, summary, and a fresh thread often clarify more.

## A usable phased split

For long work, try four phases:

1. Research: understand, don't touch code
2. Plan: steps, risks, verification
3. Execute: minimal changes
4. Verify: run checks, write conclusions, prepare handoff

## A practical phrasing

```text
Phase 1: Research and list options; no code changes; wait for my confirmation
Phase 2: Minimal changes only; report impact after each batch
Phase 3: Add verification and run relevant checks
Phase 4: Summarize changes, risks, and follow-up recommendations
```

Better to stop and check each segment than finish everything in one breath.

See also: [Progress and steering](/guide/agent-work/progress-and-steering/) · [Handoff and resume](/guide/agent-work/handoff-and-resume/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains long-task splitting and handoff only; in-site links and phase examples were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
