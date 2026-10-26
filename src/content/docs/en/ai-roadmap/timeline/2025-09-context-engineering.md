---
title: "Context Engineering"
description: "Context includes the task, instructions, files, retrieved results, and tool outputs. You need to decide what belongs in the current task, what to read on demand, and what to retain after compaction."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "The events and project descriptions below were checked against primary sources. Learning advice is the author’s judgment; source checking does not mean the product was tested here."
  evidence:
    - label: "Article on context engineering"
      href: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
locale: en
source_locale: zh-CN
source_revision: 'd668433'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
---
## Verifiable event and scope

**Date: 2025-09-29 · Type: engineering article.** Anthropic published *Effective context engineering for AI agents*, discussing how to organize the context an agent needs. The article’s date is not the date the concept was invented.

Source: [article on context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). Checked on 2026-09-18; the source publication date and this page’s checking date have different meanings.

## What problem it addresses

Context includes the task, instructions, files, retrieved results, and tool outputs. You need to decide what belongs in the current task, what to read on demand, and what to retain after compaction.

## Learning advice and limits

The following is this site’s teaching judgment, not a measure of industry adoption or effectiveness:

Prioritize facts and paths to evidence that matter to the current decision. More content can add noise; a compacted summary cannot replace key files. If the goal drifts, check the existing work and constraints before adding another prompt.

## Hands-on exercise

[Keep context focused](/en/guide/context/keep-context-focused/): list the files essential to the current task, references to consult as needed, and irrelevant material. Save the goal, completed work, open questions, and evidence paths as a handoff record.

[Return to the roadmap and its date conventions](/en/ai-roadmap/)
