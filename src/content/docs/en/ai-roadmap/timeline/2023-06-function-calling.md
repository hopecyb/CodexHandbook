---
title: "Function Calling"
description: "A model can output a proposed function name and structured arguments; the application validates them and decides whether to execute. Generating arguments, obtaining authorization, and executing are three separate steps."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "The event and project details below were checked against the primary source; learning advice is the author's judgment and was not marked as a live product test."
  evidence:
    - label: "Function calling launch announcement"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: en
source_locale: zh-CN
source_revision: 'c362c48'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
---

## Verifiable event and scope

**Date: 2023-06-13 · Type: product launch.** OpenAI announced function calling for the Chat Completions API available at the time. This date marks one vendor's API release, not the beginning of all tool calling.

Source: [Function calling launch announcement](https://openai.com/index/function-calling-and-other-api-updates/). Checked on 2026-09-18; the source publication date and this page's verification date mean different things.

## What problem it addresses

A model can output a proposed function name and structured arguments; the application validates them and decides whether to execute. Generating arguments, obtaining authorization, and executing are three separate steps.

## Learning advice and scope

The following is this site's teaching judgment, not a measurement of industry adoption or effectiveness:

Prioritize inputs that can be validated, explicit permission scopes, and failure responses. Valid JSON does not mean the arguments are semantically correct, nor does it grant permission to write to an external system. Model names and API examples in the historical launch post are not current configuration guidance.

## Hands-on exercise

[Dry-run Issue triage suggestions](/en/cases/use-cases/team-automation/issue-triage-suggestions/): check that structured suggestions for synthetic Issues are tied to their inputs; keep a human review queue. This exercise tests data boundaries without calling the historical API or applying labels.

[Return to the roadmap and date conventions](/en/ai-roadmap/)
