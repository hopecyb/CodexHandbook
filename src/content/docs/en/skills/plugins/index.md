---
title: Plugins
description: Browse, install, and govern reusable bundles of Skills, connectors, MCP, Hooks, and task templates.
locale: en
source_locale: zh-CN
source_revision: 33c9fe2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

A Plugin is a unit of capability composition and distribution. It may contain Skills, connectors, MCP servers, browser extensions, Hooks, and Scheduled task templates; those components still perform the actual work.

## Who it is for

- Users installing a ready-made capability bundle from a public directory.
- Maintainers distributing team workflows, tools, and guardrails as one versioned unit.
- Administrators reviewing source, external-service permissions, and Plugin Hooks.

## Current support surfaces

| Surface | Browse/install | Use |
|---|---|---|
| ChatGPT Web and desktop App | Plugins tab | Chat and Work |
| ChatGPT Mobile | Not a primary management surface | Use Plugins already installed on the account |
| Codex in the ChatGPT desktop App | Plugins tab | Codex tasks |
| Codex CLI | `/plugins` browser; start a new session after installation | Codex environment |
| IDE integration | **Plugins not supported** | Use MCP, Skills, and other IDE-supported capabilities separately |

## Reading entry points

- [Plugins overview](/en/skills/plugins/plugins-overview/): components, support boundaries, installation verification, and security review
- [Capability map](/en/skills/capability-map/): compare Plugins, Skills, MCP, Hooks, and Scheduled tasks

## Before installation

1. Who is the source and maintainer?
2. Which Skills, connectors, MCP servers, browser capabilities, and Hooks are included?
3. Which external accounts and scopes does it request?
4. Were its Hooks reviewed and trusted in `/hooks`?
5. How will the team disable, upgrade, roll back, and revoke it?

## Official source

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)

---

**Status:** verified

**Applies to:** ChatGPT Web / desktop App / Mobile; Codex desktop and CLI; Plugins are not supported in the IDE integration

**Last verified:** 2026-08-26
