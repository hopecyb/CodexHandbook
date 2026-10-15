---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains only the basic concepts of tokens, context windows, and compaction. Its internal links and examples have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Tokens, context, and compaction
description: Understand context windows, information volume, and compaction.
locale: en
source_locale: zh-CN
source_revision: cd44efe
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 100
---

This may feel abstract at first, and you do not need to understand the underlying mechanism yet. A model's memory is not unlimited. As material grows longer and more scattered, it may lose track of what matters, and earlier constraints may fade.

Three common terms behind this are tokens, context, and compaction.

A **token** is a unit used to measure text the model processes. The **context window** is the limit on information it can use effectively at one time.

When a conversation or its files become too large, the system may perform **compaction**: retain a summary and drop details. Afterward, the agent may “forget” earlier constraints.

![Illustration: a long scroll of conversation goes into a press and comes out as a short summary card that fits inside a limited window](/illustrations/tokens-compaction.webp)

## Look at the three terms separately

Think of them this way:

- **Token**: a unit of information volume for the model
- **Context window**: how much information it can carry at once
- **Compaction**: when material grows too large, earlier conversation is condensed into a summary to make room for more work

The problem is that **a summary cannot preserve every detail**.

So as a conversation grows, requirements you mentioned only once long ago are more likely to become less prominent.

## Common misunderstandings

### 1. If I said it once, shouldn't Codex remember forever?

If that sentence is buried far back in the conversation and absent from current key information, compaction may remove it.

### 2. Is more context always safer?

Relevant context helps, but too much irrelevant information creates two problems:

- The main point becomes less clear.
- Important constraints are easier to bury.

### 3. Does compaction mean the model is broken?

Compaction is a way to manage limited resources. When there is too much information, the system continues with a more condensed version.

## What to do when this happens

If you worry that important requirements may be forgotten:

- Repeat key constraints in your current message.
- Put durable rules in project instructions or a stable document.
- Start a new task or thread when the topic clearly changes.
- Do not state important boundaries only once.

## Practice

- Put key constraints in the current message or project instructions, not only deep in an old conversation.
- Start a new thread when the topic changes.
- For more explanation and methods, see [Context compaction](/en/guide/context/compaction/) and [Keep context focused](/en/guide/context/keep-context-focused/).

This page introduces the concepts. Continue to `05` for practical controls.
