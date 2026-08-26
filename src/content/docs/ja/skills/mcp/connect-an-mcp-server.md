---
title: MCP サーバー接続
description: 設定、認証、検証、トラブルシュート。最初の MCP ツールを安全に接続する。
locale: ja
source_locale: zh-CN
source_revision: 972ccc3
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

This chapter completes the current official loop: **add server -> inspect configuration -> confirm tools in a session -> make one read-only call**.

## Before starting

- Read the [MCP overview](/ja/skills/mcp/mcp-overview/).
- Confirm `codex mcp --help` runs.
- Use a trusted source and read-only scenario first.
- Never put a real token in history, prompts, or the repository.

## Path A: add a STDIO server with the CLI

The official example uses the Context7 documentation server:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

This writes the server to Codex configuration. Everything after `--` is the STDIO startup command. The first run may download an npm package, so verify its name and source first.

## Path B: edit config.toml

User configuration defaults to `~/.codex/config.toml`. A trusted project may also use `.codex/config.toml`.

STDIO:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

Remote Streamable HTTP:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

Replace the illustrative name, URL, and tools with actual server documentation. `bearer_token_env_var` stores an environment-variable name, not the token.

## OAuth servers

After configuring an OAuth-capable server, run:

```bash
codex mcp login <server-name>
```

The desktop App and IDE MCP lists also mark OAuth servers and offer Authenticate.

## Inspect from each client

| Surface | Configuration or inspection |
|---|---|
| ChatGPT desktop App | Settings -> MCP servers; Restart after saving; use `/mcp` |
| Codex CLI | `codex mcp add/list/login`; use `/mcp` in TUI |
| IDE integration | Gear -> MCP servers; Restart extension after saving |

They share configuration on one Codex host. ChatGPT Web does not read local configuration.

## Verification prompt

```text
Use only the currently connected MCP server:
1. List tool names related to development-documentation search.
2. Use one read-only tool to find basic Node.js test-runner usage.
3. Name the tool actually called.
4. Do not write or connect another service.
```

Evidence: the server appears in `codex mcp list` or `/mcp`, a read-only tool returns structured data, and no unrelated permission is requested.

## Least-privilege options

- `enabled_tools`: allow only listed tools.
- `disabled_tools`: exclude more tools after the allowlist.
- `enabled = false`: keep configuration but disable temporarily.
- `required = true`: fail startup if an essential server cannot initialize.

## On failure

Record the exact error and diagnose configuration, process/network, authentication, and individual tools in [Debug MCP](/ja/skills/mcp/debugging-mcp/). Change one field at a time.

## Official source

- [OpenAI: Connect Codex to an MCP server](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)

---

**Status:** verified

**Applies to:** ChatGPT desktop App / Codex CLI / IDE

**Last verified:** 2026-08-25
