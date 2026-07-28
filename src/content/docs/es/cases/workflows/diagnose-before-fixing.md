---
title: Diagnose before fixing
description: Production issues and stubborn bugs—build an evidence chain before changing code.
locale: es
source_locale: en
source_revision: 35b00c6
translation_status: fallback
translated_at: '2026-07-28'
---

Asking Codex to fix a bug immediately usually means high rework. The diagnose workflow emphasizes: **symptoms → hypotheses → evidence → minimal fix**.

## When to use

- Test failure cause unclear
- Production alerts, user reports "intermittent" issues
- Problem persists after last fix

## Steps

### 1. Freeze changes

```text
Do not change business code yet. List: reproduction steps, relevant logs, recent related commits.
```

### 2. Narrow scope

- Bisect: which commit introduced it?
- Isolate: minimal repro repo or test case

### 3. Form hypotheses

Ask Codex to output:

```text
Hypothesis A: … Verification: …
Hypothesis B: … Verification: …
```

### 4. Verify hypotheses (read-only first)

Run targeted tests, add temporary logs (discardable branch), read monitoring.

### 5. Minimal fix

Fix one root cause at a time; avoid "while I'm here" refactors.

### 6. Regression verification

Original failing case + adjacent scenarios + test preventing recurrence.

## Prompt template

```text
Follow "diagnose before fixing":
1. Read @path/to/failing-test and implementation; explain failure (cite stack line numbers)
2. Give 2 hypotheses and how to verify read-only
3. After I confirm a hypothesis, write the fix; after fix run only related tests
```

## Relation to EPXV

Diagnosis is a deeper **Explore** phase; at Plan, also document "how to roll back if hypothesis is wrong."

## Common mistakes

- Changing code without reproduction
- One patch fixing three issues—hard to review
- Removing temporary logs without adding permanent tests

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified planning, quality, and failure recovery chapters in this handbook; this page only confirms the stable diagnose method—evidence chain first, then minimal fix—not dependent on specific product client implementation.
