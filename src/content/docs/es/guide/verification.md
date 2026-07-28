---
title: Verification
description: Review diffs, run tests, validate sources, and define done.
sidebar:
  order: 17
locale: es
source_locale: en
source_revision: 705b1f4
translation_status: fallback
translated_at: '2026-07-28'
---

# Verification

A common beginner mistake: **treating "Codex said it is done" as actually done.**

Verification means judging results against your requirements—not against the model's claim.

Codex output must be checkable. Verification is not optional—it closes every task loop.

## What verification asks

Whether you are changing code, writing docs, or researching, the same question remains:

> **Is this "close enough" or actually ready to deliver?**

Much rework happens because:

- Wrong places were changed
- Work was half-finished
- Sources were claimed but not reliable
- A page loads but the flow does not work
- Docs exist but a newcomer cannot follow them

Verification **keeps risk before delivery**.

## Common pitfalls

### 1. "It runs" equals done

Running only means no immediate crash—not:

- Correct logic
- Correct scope
- No regressions
- Match to your intended outcome

### 2. "I verified" in the model's reply is enough

Check **what** was verified:

- Tests actually run?
- Diff actually read?
- Artifacts actually opened?
- Sources traceable?

### 3. Verification is only for programmers

Writing, spreadsheets, config, docs, and PR descriptions all need verification—methods differ.

## If you lack a process, try this order

1. Is the result on-topic?
2. Is change scope too large?
3. Run whatever checks can be automated
4. Human pass: would you ship this?

Think of it as:

- **Direction**
- **Scope**
- **Machine checks**
- **Human willingness to accept**

## Core topics

- [Review diffs](/guide/quality/review-diffs/) — read diffs; confirm scope and risk
- [Run tests](/guide/quality/run-tests/) — automated regression
- [Verify artifacts](/guide/quality/verify-artifacts/) — docs, config, generated output
- [Validate sources](/guide/quality/validate-sources/) — traceable research conclusions
- [Handle uncertainty](/guide/quality/handle-uncertainty/) — when the model is unsure
- [Definition of done](/guide/quality/definition-of-done/) — what "finished" means

## Verification emphasis by task type

- **Code changes**: diff, tests, manual critical path
- **Documentation**: right audience, working links, steps you can follow
- **Research**: real, current sources; conclusions within evidence
- **Config or scripts**: environment assumptions, permission scope, recovery if it fails

Unsure where to start: default to [definition of done](/guide/quality/definition-of-done/).

Verification confirms the result is usable, trustworthy, and shippable.

How to write acceptance in prompts: [define done](/prompts/define-done/). End-to-end examples: [cases](/cases/).

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** OpenAI Developers homepage still emphasizes building, testing, reviewing, and delivering changes with Codex; this page splits verification into review diffs, run tests, validate sources, and definition of done—cross-checked with in-site quality chapters.  
**Last verified:** 2026-07-26
