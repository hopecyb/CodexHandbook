---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only maps capability modules to their authoritative chapters; its internal links, diagram, and module mapping have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Capability map
description: An overview of prompts, tools, extensions, multiple agents, and governance.
locale: en
source_locale: zh-CN
source_revision: "1a4cd98"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 7
---

The handbook has many modules. When you first arrive, it is easy to lose sight of how they fit together. This page puts the main capabilities in one map.

Two common stumbling blocks are:

- Jumping from page to page without knowing which area to learn first
- Diving into MCP, automation, and extensions before sorting out the basics

Understanding the overall structure first makes specific topics easier to find later.

Codex is more than a chat box. Its capabilities form several layers:

```text
Goals and prompts
  → Context (project / file / conversation)
    → Tools (files, terminal, search, browser…)
      → Agent work (planning, execution, guidance, handoff)
        → Quality verification and human approval
      → Extensions and automation (Skills / MCP / Hooks…; advanced)
            → Team governance (later milestone)
```

## Overall structure

Think of Codex in three layers:

- First: how you describe what you want it to do
- Second: the context and tools it uses to do the work
- Third: how you record and reuse this way of working

The first two layers matter most when starting. State the task clearly and learn to review the result before exploring advanced extensions.

## Common misconceptions

### More advanced does not mean learn it first

Skills, MCP, Hooks, and automation are powerful, but they mainly improve efficiency and reuse at scale. They do not address the most common obstacles for a beginner.

If prompts, context, and tool choice are not clear yet, extensions can also be misused.

### The map can guide your reading order

You do not need to read the site directory from top to bottom. Try this order:

1. Understand how Codex works
2. Learn to assign tasks, provide context, and check results
3. Once those steps work, consider configuration, extensions, and automation

## A starting order

1. Read [What is Codex?](/en/guide/start-here/what-is-codex/)
2. Then [Choose your path](/en/guide/start-here/choose-your-path/)
3. Continue to [Getting started](/en/guide/getting-started/)
4. When stuck, return to [Foundations](/en/guide/foundations/) and [Learning paths](/en/guide/learning-paths/)

## Modules and authoritative chapters

| Capability | Authoritative location |
|---|---|
| Models, agents, permissions, sandbox | [Foundations](/en/guide/foundations/) |
| How to operate each product | [Product guides](/en/guide/) |
| Prompts, context, tools, quality | [Core skills](/en/guide/) |
| AGENTS.md and configuration | [Customization](/en/guide/customization/) |
| Skills, MCP, plugins, automation | [Extensions and automation](/en/skills/) |
| Repeatable collaboration methods | [Workflow methods](/en/cases/workflows/) |
| End-to-end examples | [Use cases](/en/cases/use-cases/) |
| Reading order | [Learning paths](/en/guide/learning-paths/) |

For an extension overview, see the [extension capability map](/en/skills/capability-map/). For differences between products, see the [feature comparison](/en/guide/reference/feature-comparison/).
