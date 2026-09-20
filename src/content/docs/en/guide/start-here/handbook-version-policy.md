---
title: Handbook version policy
description: How content status, verification dates, and ongoing updates work.
locale: en
source_locale: zh-CN
source_revision: a608dc3
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 8
---

## Ongoing updates

This handbook is not frozen indefinitely to a single Codex version. The product changes, so each page uses its status, verification date, and specific evidence to explain what has been checked. The date alone is not a reliability score.

## Contents

- Why this handbook cannot assume that nothing will ever change
- How to read the status and verification date at the top of a page
- Which source to trust when the handbook conflicts with official documentation

## Page status

| Status | Meaning |
|---|---|
| planned | Planned, not yet written |
| draft | Being written |
| review | Content complete, awaiting review |
| verified | Checked against the stated evidence |
| outdated | Needs updating after product changes |
| archived | Kept for historical reference, outside the main navigation |

## How to read page status

- `planned`: not yet written
- `draft`: in progress, but not yet stable
- `review`: the main content is in place, but still needs review
- `verified`: checked against the stated evidence
- `outdated`: may once have been correct; watch for obsolete information
- `archived`: retained as a reference, not part of the current main path

## Verification records and content updates

The top of each page separately shows its editorial status, verification method, verification date, and applicable evidence. `editorial` means editorial review, `source-checked` means sources were checked, and `run-tested` means an example was run in the recorded environment. None of these methods substitutes for another. Historical notes are retained separately and are not automatically promoted to current run-test evidence.

[Content updates and corrections](/en/guide/updates/) explains specific changes and their effects. At the bottom of a Chinese body page, readers can open a GitHub correction draft containing the current page's information. They must check it and remove sensitive information before submitting it.

## Official source

For product behavior, rely on [OpenAI's Codex documentation](https://developers.openai.com/codex). This repository is a community guide. If it conflicts with the official documentation, follow the official documentation and consider opening an issue.

## Common misconceptions

### 1. If it is in the handbook, it will never change

The following topics are particularly likely to change:

- Installation methods
- Sign-in and account flows
- Permissions, models, and configuration options
- Cloud behavior and product entry points

### 2. `review` does not mean the page is unusable

`review` means the main content exists but has not reached the strongest confirmation level. It can still serve as a reference.

### 3. Do not split the difference when the community guide and official documentation conflict

Use the handbook for explanations and navigation. Use the official documentation for current behavior and exact parameter syntax.

## How to judge whether a page is reliable

If a page might be outdated, check three things:

1. Whether the editorial status at the top is `review`, `verified`, or `outdated`
2. How long ago it was last verified
3. Whether it covers a concept or a fast-changing topic such as installation, configuration, or permissions

For current behavior, parameters, and rules, the current official documentation is the final authority.
