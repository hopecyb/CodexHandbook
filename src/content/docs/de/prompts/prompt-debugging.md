---
title: Prompt debugging
description: How to locate prompt problems when results drift.
locale: de
source_locale: en
source_revision: 6b34687
translation_status: fallback
translated_at: '2026-07-28'
---

When results are wrong, common causes include:

- goal not written as a checkable outcome
- constraints unclear
- context incomplete or stale
- task too large without asking for a plan first

Prompt debugging finds which layer of information was lost.

## Locate the problem first

When output drifts, you don't always need to start over. Find which layer failed:

1. unclear goal?
2. scope out of control?
3. insufficient context?
4. task too big?
5. wrong tool path chosen?

## When results are wrong, ask in order:

1. Is the goal checkable?
2. Are constraints clear? Did the Agent see them?
3. Is context stale or conflicting? (compaction / old thread)
4. Should you have asked for a plan first?
5. Wrong tools? (network when it shouldn't, etc.)

## What each question checks

### 1. Is the goal checkable?

Vague goals like "optimize a bit" commonly produce drift.

### 2. Are constraints clear?

Much "overdoing" comes from not stating where to stop—not from inability.

### 3. Is context stale or conflicting?

Especially in long threads:

- you said A earlier
- later you added B
- the Agent holds a mixed state

### 4. Should you have asked for a plan first?

Large tasks executed directly often deviate more than planned work.

### 5. Wrong tools?

Local code focus but it searched the web; or you wanted cited research but it answered from memory.

## Common misconceptions

### 1. Bad results mean the whole prompt is trash

Often you only need a small addition:

- explicit acceptance
- narrower scope
- plan before execution

### 2. Debugging means making the prompt longer

Sometimes delete noise and keep only the critical boundaries.

### 3. Longer threads are better because more context

Very long threads: old constraints, stale facts, compaction residue can interfere.

## A usable recovery sequence

To pull work back on track:

1. Rewrite goal to be checkable
2. Add "only change here, don't change there"
3. If the task is large, require a plan first
4. If still messy, shrink to single file or single repro
5. If still stuck, new thread with key boundaries restated

Core idea: find which critical information wasn't conveyed—not keep complicating the wording.

If it still fails, shrink to a single-file repro or open a new thread and restate constraints.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains prompt debugging only; in-site links and recovery sequence were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
