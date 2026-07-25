---
title: AI and language models
description: Understand how language models generate responses from context.
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-07-25
---

Language models **predict plausible next output** from the text, files, and tool results you provide. They're strong at patterns, drafts, and retrieval-style reasoning, but they don't inherently "know" secrets not on your machine, and they don't guarantee facts are always correct.

## What this means for you

- **Input quality sets the ceiling**: vague goals lead to drift
- **Context is limited**: long histories get compacted or truncated—see [Tokens, context, and compaction](/01-foundations/tokens-context-and-compaction/)
- **You must verify**: especially numbers, legal text, security, and anything published externally

## How this differs from a search engine

Search engines mainly return existing web pages; Codex is closer to **calling tools and generating executable changes** under your goal. Both require you to judge trustworthiness.


---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
