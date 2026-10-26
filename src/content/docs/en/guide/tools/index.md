---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This tools index was cross-checked against the site chapters on terminal, search, browser, Computer Use, images, and voice. The body explains how tools affect execution scope and risk; it does not claim a fixed support matrix.
  checkedAt: '2026-07-26'
title: Tools
description: Choosing Codex Agent tools, including terminal, search, browser, and Computer Use.
sidebar:
  order: 20
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: '5939a9d'
reviewed_at: 2026-10-25
---

An agent uses **tools** to read files, run commands, search the web, and open a browser. Choosing the right tool and stating its boundaries helps avoid unplanned network access and excessive changes.

Here, “tools” means capabilities Codex actually calls while carrying out a task. Conversation alone cannot complete every task. Some require files, commands, web research, or inspection of a real page.

![Illustration: a set of tools laid out on a table—terminal, browser, search magnifier, image, microphone, and pointer—while a small assistant picks the right one](/illustrations/tools-overview.webp)

## Why understand tools first

When starting out, it is easy to treat Codex as a chat assistant only. Once you allow it, however, it may:

- Read project files.
- Edit documentation or code.
- Run terminal commands.
- Search public webpages.
- Open a local page to check the result.

Tools are not extra trivia; they shape both safety and efficiency.

## Chapter navigation

| Tool | Page |
|---|---|
| Selection overview | [Tool Selection](/en/guide/tools/tool-selection/) |
| Terminal | [Shell and Terminal](/en/guide/tools/shell-and-terminal/) |
| Search | [Web Search](/en/guide/tools/web-search/) |
| Webpage | [Browser Tools](/en/guide/tools/browser/) |
| GUI | [Computer Use](/en/guide/tools/computer-use/) |
| Images | [Image Generation](/en/guide/tools/image-generation/) |
| Voice | [Voice Input and Output](/en/guide/tools/voice/) |

For reading, writing, and accepting files, see [Files and Artifacts](/en/guide/files-and-artifacts/). Additional tools can be connected through [MCP](/en/skills/mcp/mcp-overview/).

## Suggested reading order

On your first visit, read:

1. [Tool Selection](/en/guide/tools/tool-selection/) for which capability to choose by task.
2. [Shell and Terminal](/en/guide/tools/shell-and-terminal/) for the risks of running commands.
3. Search, browser, or another tool page according to the task at hand.

Tools determine how Codex can act; you need to explain which it may and may not use.
