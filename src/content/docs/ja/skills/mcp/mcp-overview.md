---
title: MCP 概要
description: Model Context Protocol。Codex が外部ツールとデータソースに安全に接続する。
locale: ja
source_locale: zh-CN
source_revision: 7b8726f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP turns “the model wants an external capability” into a structured tool call. It connects third-party documentation, browsers, Figma, issue trackers, and internal services.

## Call chain

```text
Codex in a task
  -> MCP client provided by the Codex host
  -> MCP server: local process or remote service
  -> external system: docs, design, tickets, internal API
  -> structured result returned to the task
```

| Component | Responsible for | Not responsible for |
|---|---|---|
| Codex host | Read configuration, connect servers, expose tools to the Agent | Defining the server's business permissions |
| MCP server | Define tools, authentication, arguments, and structured results | Automatically making every tool safe |
| Skill | Define when and how to use tools | Establishing network connections |
| Plugin | Compose and distribute Skills, connectors, MCP, and related capabilities | Acting as another tool protocol |

## Supported server transports

### STDIO

Codex starts a local process and communicates over standard input/output. This fits local development tools and services that run only on the current computer.

Review the command, dependency source, and forwarded environment variables because the process inherits the local execution environment.

### Streamable HTTP

Codex connects to a remote URL. Current documentation supports Bearer tokens, OAuth, and ChatGPT session authentication for trusted first-party servers.

The service receives tool arguments. Verify TLS, identity, logging, retention, and tool permissions.

## Combining MCP, Skills, and Plugins

For a weekly high-priority issue check:

| Layer | Content |
|---|---|
| MCP | Expose `search_issues`, `get_issue`, and related tools |
| Skill | Define filters, evidence, and report format |
| Plugin | Distribute the Skill, connector, and MCP definition |
| Scheduled task | Run the verified task at a fixed time |

These are orthogonal responsibilities, not an upgrade ladder. See the [capability map](/ja/skills/capability-map/).

## When MCP is worthwhile

| Worthwhile | Not yet |
|---|---|
| Repeated access to one external system | One public web lookup |
| Structured arguments and results are required | Repository file tools are enough |
| OAuth or granular tool control is required | Only privileged writes exist, with no test environment |
| A team needs one reusable connection | Server provenance cannot be reviewed |

## Security stages

1. **Read-only trial:** public docs or test tenant, query tools only.
2. **Team validation:** restricted project, role, and tool allowlist; record failures and latency.
3. **Limited writes:** reversible small writes with human approval.
4. **Governed operation:** revocable authorization, reviewable config, redacted logs, environment isolation.

Never put tokens in prompts, Git, or static HTTP headers. Prefer OAuth, `bearer_token_env_var`, or forwarded environment variables.

## Pre-connection checklist

- [ ] Server source, version, and startup command are reviewable.
- [ ] Read and write tools are identified.
- [ ] A test tenant or least-privilege identity is used.
- [ ] Remote logging of arguments and results is understood.
- [ ] Writes have approval, rollback, and audit paths.
- [ ] The team can disable the server and revoke access.

## Next step

[Connect an MCP server](/ja/skills/mcp/connect-an-mcp-server/), beginning read-only, then verify with `codex mcp list` and `/mcp`.

## Official sources

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)

---

**Status:** verified

**Applies to:** ChatGPT desktop App / Codex CLI / IDE; ChatGPT Web uses remote MCP through Plugins

**Last verified:** 2026-08-25
