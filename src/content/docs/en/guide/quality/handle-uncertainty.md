---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains how to ask questions and correct course when information is missing. Its concepts, suggested prompt wording, and sequence of steps have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Handle uncertainty
description: Ask questions instead of making things up when information is missing.
locale: en
source_locale: zh-CN
source_revision: 839ce22
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 50
---

When information is missing, clarify it before continuing.

One of the most troublesome situations when using Codex is having it fill a gap with an answer that only sounds plausible. Once the premise is wrong, the later steps drift off course too.

## What “uncertainty” means

Here, uncertainty mainly means:

- There is not enough evidence to confirm something now.
- Relevant information is absent from the current context.
- Continuing to guess would increase the risk.

It is better to state in advance when Codex should pause and ask.

Include this in your prompt:

```text
If information is insufficient, ask first. Do not invent file paths, APIs, or business rules.
```

If you spot an invented detail, stop, correct the facts, and start a new thread if necessary.

## How to decide

Do not proceed by guessing if any of these applies to a conclusion:

- The current files contain no evidence for it.
- You have not explicitly supplied the business rule.
- It depends on an external fact whose source has not been checked.
- A wrong guess would affect several later steps.

## Common misunderstandings

### 1. A complete answer does not mean Codex really knows

An answer may read smoothly because the gaps were filled in, not because those details exist in your project.

### 2. Missing information is not a request to fill every blank

Providing complete information helps, but incomplete information is common in real collaboration.

Two things matter more:

- Codex pauses to clarify missing information.
- You allow it to ask rather than force it to guess.

### 3. Questions do not necessarily slow the work down

An extra step up front often prevents rework.

Many problems grow out of “just guess and get started.”

### 4. If you catch a guess, stop before continuing

Stop the error first, then proceed in this order:

1. Identify precisely what was wrong.
2. Supply the correct information.
3. If necessary, ask Codex to restart from the corrected facts.

## Wording you can add directly

To reduce unsupported guesses, write:

```text
If you cannot confirm something from the existing files or the information I provided, ask me first instead of filling in the gaps yourself.
```

## One more line to add

You can also add:

```text
If there are multiple possible interpretations, list what you are unsure about before continuing.
```

The greater problem is treating a guess as a fact and building the rest of the work on it.
