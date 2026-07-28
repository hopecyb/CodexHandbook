---
title: Error Reference
description: Learning index of common errors, exit codes, and failure modes—points to troubleshooting, not official support.
locale: vi
source_locale: en
source_revision: 489737c
translation_status: fallback
translated_at: '2026-07-28'
---

Many people stare at one English line and guess. Classifying the problem first usually works better.

Decide if it looks like **auth, permissions, environment, network, or task logic**. This page summarizes frequent messages and next steps—not a complete error dictionary; latest behavior is official docs and client output.

## How to read an error

1. Keyword class: auth, permissions, environment, network, context
2. Stage: startup, install, execution, push, output
3. Jump to the matching topic page

Often faster than guessing.

Global index: [Troubleshooting](/guide/reference/troubleshooting/)

## Authentication and account

| Message or symptom | Likely cause | Next step |
|---|---|---|
| Authentication failed / 401 | Expired token, not signed in | [Sign-in and authentication](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | Org disabled feature or model | Contact admin; [Account and access](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Too frequent or quota | Retry later; check plan usage |

## Common misconceptions

### 1. Long error ≠ harder problem

Useful signal is often one short keyword in a long stack.

### 2. Non-zero exit ≠ model cannot do the task

May be permissions, network, output format, or task failure conditions.

### 3. 401 / 403 / 429 differ

- `401`: authentication problem
- `403`: authenticated but not allowed
- `429`: too fast—retry later

### 4. Last line is not always the root cause

Earlier lines may show step, file, command, or underlying reason.

## CLI and commands

| Message or symptom | Likely cause | Next step |
|---|---|---|
| command not found: codex | Not installed or PATH | [Install CLI](/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML syntax | [CLI configuration](/guide/cli/configuration/) |
| Permission denied (write) | Sandbox or approval denial | [Approvals and sandbox](/guide/cli/approvals-and-sandbox/) |
| Non-zero exit (exec) | Task failed or completion criteria unmet | Check stderr; tighten prompt |

## Five categories

| Category | Check |
|---|---|
| Auth | Account, token, sign-in |
| Permissions | Approval, sandbox, repo access |
| Environment | Install, PATH, config, dependencies |
| Network | Egress, proxy, remote reachability |
| Task logic | Prompt, input files, output requirements |

Classify first—direction stays clearer.

## How to use this page

Treat it as a triage table—not a full dictionary:

- Spot keyword
- Find category
- Open detailed troubleshooting page

Or translate to plain questions:

- Not signed in?
- No permission?
- Command not installed?
- Network unreachable?
- Unclear instructions to Codex?

Use this page to land in the right category when unsure.

## Permissions and sandbox

| Message or symptom | Likely cause | Next step |
|---|---|---|
| User rejected tool call | You or policy rejected action | Confirm if approval was right; or change task |
| Sandbox violation | Path or command out of bounds | [Sandbox and network](/guide/foundations/sandbox-and-network/) |
| Network access denied | Egress blocked | Cloud: [Internet access](/guide/web-and-cloud/internet-access/) |

## Cloud and GitHub

| Message or symptom | Likely cause | Next step |
|---|---|---|
| Repository access denied | Insufficient OAuth scope | [Connect GitHub](/guide/web-and-cloud/connect-github/) |
| Clone failed | Repo name, permissions, network | [Cloud troubleshooting](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Wrong name or scope | [Secrets and variables](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Branch protection | [Create pull requests](/guide/web-and-cloud/create-pull-requests/) |

## MCP and extensions

| Message or symptom | Likely cause | Next step |
|---|---|---|
| MCP server failed to start | Command path, missing dependency | [Connect MCP](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | Slow or down external API | Retry; check MCP logs |
| Unknown tool | Config/server version mismatch | Restart session; update config |

## Context and model

| Message or symptom | Likely cause | Next step |
|---|---|---|
| Context length exceeded | Conversation or @ files too large | [Compaction](/guide/context/compaction/) · narrow scope |
| Model not available | Region or plan limitation | [Models and reasoning](/guide/foundations/models-and-reasoning/) |

## Using this page

1. **Copy key phrase** into client or handbook search
2. Follow table to topic checklist
3. Still stuck: keep full log; see [Official resources](/guide/reference/official-resources/)

## Help others help you

Include:

- Client type and version (App / CLI / IDE / Cloud)
- Operating system
- Full error text (redacted)
- Non-interactive? CI?

## Troubleshooting order

1. Screenshot or copy full error—not only last line
2. Classify before guessing technical detail
3. Recall what changed recently
4. Change one variable and retry once
5. Then ask with full context

Avoid mixing multiple changes.

## Reference sources

- OpenAI Codex support documentation
- stormzhang FAQ and troubleshooting chapters
- KimYx0207 failure compendium (verify against official)

---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Positioned as error triage index, not full dictionary; five categories cross-checked with current CLI, Cloud, permissions, and configuration chapters—no fixed error code table required.  
**Last verified:** 2026-07-26
