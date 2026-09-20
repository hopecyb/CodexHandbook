---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page explains how context accumulates and is refocused within one thread; its concepts, examples, and internal links have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Conversation context
description: How information accumulates and becomes outdated in one thread.
locale: en
source_locale: zh-CN
source_revision: "3968049"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 30
---

“Conversation context” means what you and Codex said earlier in the same task continues to influence what follows. That can help, but it can also cause problems.

## Why it helps

A thread accumulates:

- Your goals and constraints
- Conclusions reached along the way
- Steps already taken
- Important information from tool output

For example, if you already said “only change the homepage; leave the backend alone,” you usually do not need to repeat it in every message.

## Why it can cause problems

The common issue is that **old information does not necessarily expire on its own**.

For example:

- You forget to update a constraint you stated earlier
- The task changes direction, but the conversation keeps following the old context
- A tentative conclusion turns out to be wrong but still affects later decisions

The goal is not to make the conversation as long as possible. The longer it gets, the more actively you need to refocus it.

## When to restate key constraints

Even if you said something earlier, repeat it at important points:

- Before files are actually changed
- After the task changes direction
- After a long conversation
- When Codex starts overlooking a boundary

The most useful things to restate are:

- Which files may be changed
- What must not be done
- What counts as complete
- Which constraints still apply

## Common misconceptions

### 1. Is a longer thread always easier?

Not necessarily.

A long thread is convenient when the topic stays the same.
When the task has changed direction, carrying on in the old thread can steer the new task off course.

### 2. I already said it. Why did Codex still get it wrong?

Earlier information may have been diluted by later messages or may no longer fit the current task closely.

Rather than saying “You already knew that,” restate the constraints that still matter.

### 3. When should I start a new thread?

Use these signs:

- The goal has changed
- The original problem is finished
- The conversation feels muddled even to you

Starting a new thread is usually cleaner than forcing the old one to continue.

## How to handle a topic change

When changing topics:

1. Start a new thread.
2. Paste only a summary of constraints that still apply.
3. Leave outdated background behind.

If you stay in the same thread, first send a short reset message such as:

```text
From here on, let's discuss only the homepage redesign. Do not carry over the earlier discussion of backend APIs. In this round, change only copy and styles, not the data structure.
```

A thread helps preserve context, but it also carries old baggage. When the topic changes, deliberately refocus it.
