---
title: Plugins 概要
description: Skill、MCP、アプリコネクタをパッケージ化し、チームが統一配布・管理しやすくする。
locale: ja
source_locale: zh-CN
source_revision: b2c5dae
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

ChatGPT and Codex use one public Plugin directory. A Plugin composes related capabilities into a discoverable, installable workflow; it is not a new tool-call protocol.

## Plugin contents

| Component | Role | Installer review |
|---|---|---|
| Skills | Reusable steps, references, scripts | Instruction fit and script trust |
| Connectors | GitHub, Slack, Drive, and other services | OAuth scopes, writes, external data |
| MCP servers | Tools, authentication, structured data | Server source, tools, logs, permissions |
| Browser extensions | Browser capability for a workflow | Browser access and necessity |
| Hooks | Commands or MCP tools at lifecycle events | Review and trust exact definition |
| Scheduled task templates | Reusable scheduling starting points | Frequency, access, exit, human review |

## Difference from Skill and MCP

| Mechanism | Main question | PR review example |
|---|---|---|
| Skill | Which steps? | Read diff, verify evidence, rank risk |
| MCP / Connector | Which external tools? | Read GitHub PR and comments |
| Hook | Which lifecycle check? | Scan secrets after a write |
| Plugin | How is the bundle installed and distributed? | Team PR-review package |

A Plugin is a distribution layer, not the final execution step. See [Capability map](/ja/skills/capability-map/).

## Install and verify

### ChatGPT Web / desktop App

1. Open Plugins.
2. Inspect publisher, description, and contents.
3. Install; review each external authorization separately.
4. Verify at low risk in a new Chat, Work, or Codex task.

### Codex CLI

1. Enter `/plugins`.
2. Install from a configured marketplace.
3. **Start a new session**, then verify the installed Skill or tool.

The IDE integration does not support Plugins. Manage them in the desktop App or CLI.

## Low-risk prompt

```text
Inspect only newly installed <plugin-name>; do not write:
1. List related Skills and tools.
2. Mark each tool read-only or externally mutating.
3. Use test data or one read-only query.
4. Name the component used and authorizations still requiring human review.
```

Do not send messages, change states, delete data, or bulk-write during first verification.

## Team adoption

1. **Inventory:** Skills, connectors, MCP, browser extensions, Hooks, templates.
2. **Provenance:** marketplace, repository, publisher, update policy.
3. **Least privilege:** test account and read-only scopes.
4. **Pilot:** non-production project or small team.
5. **Hook review:** inspect bundled Hook hash and behavior in `/hooks`.
6. **Exit record:** disable, uninstall, rollback, revoke OAuth.

## Boundaries

- Successful installation does not prove safety or data fit.
- External authorization is a separate high-risk step.
- Plugin Hooks run alongside matching Hooks from other sources.
- Workspace administrators can restrict Plugins and tools.
- Mobile uses installed Plugins but should not be assumed to have full management.

## When not to build a Plugin

- One simple `SKILL.md` with no distribution problem.
- One personal experimental script.
- Unstable permission and update policy.
- Users work only in the IDE integration.

Stabilize one Skill or MCP workflow before bundling it.

## Acceptance checklist

- [ ] Target surface supports Plugins.
- [ ] Publisher and source are traceable.
- [ ] External connections and OAuth scopes reviewed.
- [ ] Plugin Hooks reviewed and trusted.
- [ ] Read-only minimal task succeeds.
- [ ] New session discovers expected Skill/tool.
- [ ] Team has disable, rollback, revocation steps.

## Official sources

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Applies to:** ChatGPT Web / desktop App / Mobile; Codex desktop and CLI; IDE integration does not support Plugins

**Last verified:** 2026-08-26
