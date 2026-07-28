---
title: What is Codex
description: Explain in plain language what Codex can do, what it cannot, and the main entry points.
locale: pt
source_locale: en
source_revision: dd9b615
translation_status: fallback
translated_at: '2026-07-28'
sidebar:
  order: 2
---

Codex is OpenAI's **AI coding and work Agent**: you give it a goal, and it combines project files, tools, and your approvals to read, edit, run commands, generate artifacts, and let you inspect the results.

Official product documentation is at [OpenAI Codex](https://developers.openai.com/codex). This handbook is a community open-source guide for systematic learning and practice—it is **not** a substitute for OpenAI's official documentation.

## What it can do

- **Understand**: Summarize information in repositories, documents, spreadsheets, and screenshots
- **Create and edit**: Write drafts, change code, generate pages and configuration
- **Execute**: Run terminal commands, search, and browse—with your authorization
- **Collaborate**: Continue tasks across App, CLI, IDE, Cloud, and other entry points
- **Extend**: Connect repeatable workflows and external systems via Skills, Plugins, MCP, Hooks, and more (advanced chapters to follow)

## What it cannot do (important)

- It cannot replace your final responsibility for facts, security, and business decisions
- It cannot guarantee a single generation is fully correct; results must be verifiable
- It cannot bypass sandbox, network, or organization policies without authorization
- It should not be treated as a "no-review automatic release pipeline"

## Main entry points

| Entry | Best for |
|---|---|
| Desktop App | Default for beginners; visual projects, tasks, and diff review |
| CLI | Terminal users, scripts, and automation |
| IDE extension | Work with open files and selections inside the editor |
| Web / Cloud | Connect repositories, cloud environments, and long-running tasks |
| Mobile and remote | Monitoring, approvals, and lightweight follow-up |

See the [feature comparison](/guide/reference/feature-comparison/) for a side-by-side table. For how concepts relate, see the [capability map](/guide/start-here/codex-capability-map/).


---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
