---
title: Multi-agent collaboration
description: Multiple agents can handle independent retrieval, analysis, or review and combine their results through an agreed handoff format. Coordination, duplicate work, and shared state add costs.
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: The event or project description in the primary source below was checked; learning advice is the author’s judgment, and source checking is not presented as a product test.
  evidence:
  - label: Engineering article on a multi-agent research system
    href: https://www.anthropic.com/engineering/multi-agent-research-system
locale: en
source_locale: zh-CN
source_revision: 'f24f2f5'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: '2026-09-20'
---

## Verifiable event and scope

**Date: 2025-06-13 · Type: engineering article.** Anthropic published its engineering experience with a multi-agent research system. This date establishes when the article was published; it does not establish that the entire industry entered a mainstream phase that day.

Source: [Engineering article on a multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system). Checked on 2026-09-18; the source publication date and this page’s check date mean different things.

## What problem it addresses

Multiple agents can handle independent retrieval, analysis, or review and combine their results through an agreed handoff format. Coordination, duplicate work, and shared state add costs.

## Learning advice and limits of applicability

The following is this site’s teaching judgment, not a measure of industry adoption or effectiveness:

Consider parallel work only when subtasks can be carried out independently. If tasks depend closely on one another, modify the same file, or cannot be accepted separately, start with a single agent. Gains reported by a vendor on its own evaluations cannot be treated directly as the success rate of this site’s exercise.

## Hands-on exercise

[Multi-agent coordination workflow](/en/cases/coordinate-multiple-agents/): first write a task breakdown table that names each role’s input, output, and dependencies; then decide whether parallel work is worthwhile. This is a workflow example, not a multi-agent experiment with measured gains from this site.

[Back to the roadmap and its dating convention](/en/ai-roadmap/).
