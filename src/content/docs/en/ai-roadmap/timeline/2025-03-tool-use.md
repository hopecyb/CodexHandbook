---
title: "Tool Use"
description: "Tool use involves selecting a tool, constructing arguments, executing it, reading its result, and deciding what to do next. One successful call does not mean the whole task is complete; execution errors and issues found by business checks must also be distinguished."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "The event and project details below were checked against the primary source; learning advice is the author's judgment and was not marked as a live product test."
  evidence:
    - label: "Announcement of new tools for agents"
      href: "https://openai.com/index/new-tools-for-building-agents/"
locale: en
source_locale: zh-CN
source_revision: 'efd508a'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
---

## Verifiable event and scope

**Date: 2025-03-11 · Type: product launch.** OpenAI released new tools for agents, including the Responses API, built-in tools, and Agents SDK. This announcement marks one vendor's product release, not the invention of model tool use.

Source: [announcement of new tools for agents](https://openai.com/index/new-tools-for-building-agents/). Checked on 2026-09-18; the source publication date and this page's verification date mean different things.

## What problem it addresses

Tool use involves selecting a tool, constructing arguments, executing it, reading its result, and deciding what to do next. One successful call does not mean the whole task is complete; execution errors and issues found by business checks must also be distinguished.

## Learning advice and scope

The following is this site's teaching judgment, not a measurement of industry adoption or effectiveness:

Give repeatable checks to explicit tools, and retain exit codes, output, and recovery procedures. First demonstrate that the manual steps work; then consider scheduling and notifications.

## Hands-on exercise

[Five failure-recovery walkthroughs](/en/guide/reference/troubleshooting/failure-recovery-lab/): reproduce a set of failures, read the before logs, change only one variable, and compare the after results. The exercise uses local scripts and does not require calling the APIs in the announcement.

[Return to the roadmap and date conventions](/en/ai-roadmap/)
