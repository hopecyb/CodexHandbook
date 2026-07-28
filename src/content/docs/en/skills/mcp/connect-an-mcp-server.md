---
title: Connect an MCP server
description: Configure, authenticate, verify, and troubleshoot—safely connect your first MCP tool.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

This page focuses on connection and verification; protocol details and server development are in official MCP docs.

## Before you start

- [ ] Understand security boundaries in [MCP overview](/skills/mcp/mcp-overview/)
- [ ] Have a read-only or sandbox test account
- [ ] Confirm current Codex client version supports MCP (official docs)

## Recommended flow

### 1. Choose server type

| Type | Notes | Risk |
|---|---|---|
| Local stdio server | Process on your machine | Medium: process permissions = your user |
| Remote HTTP/SSE | Hosted service | Medium–high: needs TLS, token rotation |

For first connection, start with an **official example or read-only local server**.

### 2. Add configuration

Config location varies by CLI/App; commonly user- or project-level `mcp` block. Illustrative structure (**field names per official docs**):

```json
{
  "mcpServers": {
    "example-readonly": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_TOKEN": "Read from environment variable—do not hard-code in repo"
      }
    }
  }
}
```

Principles:

- Inject secrets via environment variables or a secrets manager
- Config changes go through Git review (except secrets)

### 3. Restart or reload client

After MCP config changes, usually restart the Codex session so the server list refreshes.

### 4. Verify tools are visible

In a task, explicitly ask:

```text
List currently available MCP tools (names and one-line descriptions only).
Then call one test tool read-only and show the result.
Do not perform write operations.
```

### 5. Try in small steps

Pick a real but low-risk task, e.g.: "Use MCP to fetch ticket #123 title only; do not change status."

## Auth modes

| Mode | Fit |
|---|---|
| API Key / PAT | Personal dev; rotate regularly |
| OAuth | User-level auth; good for SaaS |
| No-auth local | Local mock only; do not expose to network |

On failure check: expired token, env var not passed into process, corporate proxy blocking.

## Debugging checklist

| Symptom | Possible cause |
|---|---|
| Empty tool list | Wrong config path, process failed to start |
| Call timeout | Network, VPN, server down |
| Permission denied | Insufficient token scope |
| Model never calls tools | Task did not ask; or tool description unclear |

## Working with approval

First call to an unfamiliar tool may prompt confirmation—that is expected. Do not encourage "always allow all MCP writes" in team policy.

## References
- OpenAI Codex MCP configuration documentation
- modelcontextprotocol.io server examples
---

**Status:** outdated  
**Applicable products:** App / CLI / IDE  
**Verification basis:** Directly describes current MCP server configuration, reload, and verification steps—highly version- and client-sensitive; not suitable for `verified` yet.  
**Last verified:** 2026-07-26
