---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Current OpenAI API model documentation still lists Web search as an available tool capability. This page covers the stable method of using search to supplement facts, preferring primary sources, and checking conclusions against original text; it does not depend on a particular product interface.
  checkedAt: '2026-07-26'
title: Web Search
description: Use search to add facts and cite the sources.
sidebar:
  order: 30
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: '7adcb92'
reviewed_at: 2026-10-25
---

Web search helps fill factual gaps. It should not make the final judgment for you.

Use it to find public documentation, error codes, and release notes. Do not treat search results as final legal or medical conclusions.

Ask for sources, open them, and check them yourself. Pair this with [validating sources](/en/guide/quality/validate-sources/).

## What search is useful for

Search primarily helps locate:

- Where to look.
- Which pieces of information merit a closer check.
- Whether a more authoritative source exists.

Its job is to find possible sources first; you then return to the original text to verify them.

## Common misconceptions

### 1. If it finds an answer, is the answer reliable?

No. A result being searchable does not make it trustworthy; a fluent summary does not make it accurate.

### 2. When should I search?

Common cases include official documentation, error messages, version changes, and facts on public webpages.

### 3. Can I quote the search-result summary directly?

Check the source first:

1. Look at the sources in the results.
2. Open the original page.
3. Summarize in your own words.

### 4. When is search alone insufficient?

Use other tools or human verification for high-stakes legal, medical, or financial judgments; behavior of an actual page; or facts held in local project files instead of public web sources.

## A search sequence

1. Search terms close to the question.
2. Prefer official documentation or primary sources.
3. Open the original and check the details.
4. Decide whether the conclusion belongs in your result.

## A prompt you can reuse

```text
Search first and prefer official sources. Give clickable source links with
your conclusions; do not rely on search-result summaries alone.
```

Search provides leads and sources. Check the original material before drawing a final conclusion.
