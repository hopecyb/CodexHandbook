---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only explains the basics of how language models generate output from context; its internal links and concepts have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: AI and language models
description: Understand how language models generate responses from context.
locale: en
source_locale: zh-CN
source_revision: 'ccdac83'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: 2026-10-25
---

A language model uses the text, files, and tool results you provide to **predict the most plausible next output**. It is good at completing, organizing, drafting, and continuing work from context. It does not inherently know information you have not provided, and it cannot guarantee that every result is correct.

A language model cannot read your mind or automatically understand your project. It can only use what you give it to produce a result that “looks plausible.”

That explains why:

- Missing key context makes it more likely to guess
- Conflicting information makes it more likely to drift
- It can help draft, organize, and analyze, but you cannot delegate all responsibility for correctness to it

## What it does

Think of a language model as a system especially good at continuing a conversation, organizing information, and filling gaps.

It sees:

- Your task description
- The files you provide
- Results returned by tools

It then uses that information to produce what it considers the most appropriate next step.

It works from the current context; it does not independently know the answer.

## What this means for you

- **Input quality sets the ceiling:** an unclear goal can lead the result astray
- **Context is limited:** a long history may be compressed or truncated; see [Tokens, context, and compaction](/en/guide/foundations/tokens-context-and-compaction/)
- **Verification is necessary:** especially for numbers, legal matters, security, and content published externally

## Common misconceptions

### 1. It is so smart that it should know the background I did not mention

Usually, no.

It may guess, but you cannot assume its guess will be right.
Information you know but have not explicitly supplied is often where mistakes begin.

### 2. If it can write code or documentation, it must understand the task

Not necessarily.

Often it generates something that looks convincing. Looking right does not mean fitting your project, environment, or goal.

### 3. A language model removes the need for my judgment

You need to judge:

- Whether it understood the task
- Whether it is guessing
- Whether its conclusions need checking

## How it differs from a search engine

A search engine mainly returns existing web pages. Codex is more like a system that **uses tools and produces actionable changes** toward your goal. You must assess the trustworthiness of both.

Language models are most useful when they have enough context to continue working quickly toward your goal.
