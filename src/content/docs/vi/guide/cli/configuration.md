---
title: CLI Configuration
description: Models, sandbox, approvals, and MCP—unify Codex behavior in the terminal.
locale: vi
source_locale: en
translation_status: fallback
translated_at: '2026-07-28'
source_revision: cfd37ab
---

CLI configuration sets **default model, working directory, approval strictness, MCP servers**, and more. Same concepts as [Configuration basics](/guide/customization/configuration/config-basics/); this page focuses on what terminal users change often.

## Where config lives

| Layer | Purpose |
|---|---|
| User | Personal defaults across projects |
| Project | Shared team policy (review before commit) |
| Environment variables | CI secrets and toggles |

**Paths and filenames** change with CLI versions—see [official docs](https://developers.openai.com/codex). Often a `config.toml` under the user config directory.

## Common settings

### Default model and reasoning

Affects speed, cost, and success on hard tasks. Scripting should **pin a model** for comparable logs.

### Sandbox and network

| Intent | Notes |
|---|---|
| Strict | Untrusted repos |
| Standard | Daily development |
| Relaxed | Trusted personal machines only, per company policy |

Concepts: [Sandbox and network](/guide/foundations/sandbox-and-network/)

### Approval policy

The CLI may ask before shell, disk writes, or network. Teams should document expected auto-approvals in `AGENTS.md`—only effective when aligned with product behavior.

### MCP server list

Shared with [Connect an MCP server](/skills/mcp/connect-an-mcp-server/); restart sessions after changes.

## Align project and CLI

Avoid “works in App, fails in CI”:

1. Document minimum CLI version in README
2. Keep only **team-agreed** keys in project config
3. Never commit secrets

## Troubleshooting

| Symptom | Check |
|---|---|
| Config ignored | Wrong layer; restart session |
| MCP not loaded | JSON/TOML syntax, paths |
| Too many approvals | Sandbox mode and allowlists |

More: [CLI troubleshooting](/guide/cli/troubleshooting/)

---

**Status:** review  
**Applies to:** CLI  
**Last verified:** 2026-07-25
