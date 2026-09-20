---
legacyVerification:
  status: verified
  products: CLI
  basis: Current OpenAI Help Center configuration material still uses ~/.codex/config.toml and ~/.codex/.env as verifiable examples. This page avoids depending on specific field names and instead summarizes common CLI configuration goals, levels, and risk boundaries.
  checkedAt: '2026-07-26'
title: CLI Configuration
description: Set consistent terminal behavior for models, sandboxing, approvals, and MCP.
sidebar:
  order: 40
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 0a9b2ad
---

CLI configuration shapes the **default model, working directory, strictness of approvals, MCP servers**, and more. It shares the concepts in [Configuration Basics](/en/guide/customization/configuration/config-basics/) but focuses on settings terminal users commonly change.

## What this page covers

On first meeting CLI configuration, people may imagine a single “advanced settings panel.” That leads to two errors: leaving everything unset and repeating the same choices on every launch, or placing personal preferences, team rules, and temporary experiments together until troubleshooting becomes hard.

The key question is which defaults deserve to be fixed for the long term and which should change only temporarily.

## What CLI configuration controls

Think of it as Codex's default way of working in a terminal:

- **Model:** Which model it uses by default.
- **Sandbox and approval:** What it can generally do and when it asks you.
- **Working directory:** Which project it works in.
- **MCP and extensions:** Which external capabilities are available.

Codex can work without much configuration, but you may repeat the same choices more often.

## Where settings belong

| Level | Purpose |
|---|---|
| User | Personal defaults across projects |
| Project | Shared team policy, reviewed before committing |
| Environment variables | Secrets and switches injected into CI |

**Paths and filenames** may change with CLI versions; check the [official documentation](https://developers.openai.com/codex). A common example is `config.toml` or an equivalent file under the user directory.

## Common misconceptions

### Not every setting belongs in the project

Do not mix a personal default model, a path on your computer, and an approval policy the whole team must follow. Put enduring personal preferences at user level, repository-wide agreements at project level, and values injected for CI, scripts, or a single run in environment variables.

### Configuration does not grant immediate unrestricted access

Writing a policy in a configuration file does not guarantee every future action will be allowed. Actual behavior also depends on the client, runtime, hosted policy, and task. Configuration sets defaults; it is not a permanent privilege.

## Frequently changed settings

### Default model and reasoning effort

They affect speed, cost, and success on complex tasks. For scripted work, fixing the model helps compare logs.

### Sandbox and network

| Intent | Description |
|---|---|
| Strict | Suitable for an untrusted repository |
| Standard | Everyday development |
| Relaxed | Only in a trusted personal environment and within company policy |

See [Sandbox and Network](/en/guide/foundations/sandbox-and-network/).

### Approval policy

The CLI may ask before running shell commands, writing to disk, or using the network. A team can describe expected command permissions in `AGENTS.md`, but that text works only within actual product policies.

### MCP server list

This shares settings with [Connecting an MCP Server](/en/skills/mcp/connect-an-mcp-server/). Restart the session after changing it.

## A sufficient configuration order

You need not learn every field at once:

1. Fix the model you use most often.
2. Confirm the default working directory is your project.
3. Decide how conservative approval and sandboxing should be.
4. Add MCP, automation, or more advanced extensions afterward.

The first two mostly affect daily use; the latter two require closer attention to risk.

## Keep the project and CLI aligned

To avoid “it works in the app but fails in CI”:

1. Document the recommended minimum CLI version in the README.
2. Put only team-agreed items in project configuration.
3. Never commit secrets.

## Troubleshooting

| Symptom | Check |
|---|---|
| Settings have no effect | Was the wrong level changed? Is a restart needed? |
| MCP did not load | JSON/TOML syntax and paths |
| Too many approval prompts | Sandbox mode and allowlist |

See [CLI Troubleshooting](/en/guide/cli/troubleshooting/) for more.

Treat CLI configuration as your default working habits. Fix the choices you repeat almost every time; advanced capabilities can wait.

## Reference source

- OpenAI Codex CLI configuration.
