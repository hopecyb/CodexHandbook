---
title: Configuration Reference
description: Conceptual index of Codex user- and project-level configuration keys—paths and fields per official docs.
locale: en
source_locale: zh-CN
source_revision: ebf25a6
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

Configuration reference pages can overwhelm with keys, layers, and overrides. Start with one question:

> **What should be configuration—and what should not?**

Config files often unify **model, sandbox, approval, MCP** behavior. This page is a **conceptual index**; file paths and TOML/YAML keys must follow [OpenAI Codex documentation](https://developers.openai.com/codex) and your installed version.

## A decision principle

Config holds things that **should affect behavior long term**. Usually not:

- Secrets
- Full team rule prose
- One-off task instructions

Three buckets:

- **Long-term behavior preferences** → config
- **Specific task requirements** → prompt / `AGENTS.md` / Skill
- **Secrets** → environment variables or Secret store

Unsure? Are you changing Codex’s long-term habits or describing this task?

- Long-term habits → config
- This task → prompt, `AGENTS.md`, or task description

## Configuration layers

| Layer | Location (conceptual) | Typical content |
|---|---|---|
| User | `~/.codex/` etc. | Default model, personal approval habits |
| Project | Config in repo | Team sandbox, MCP list |
| Environment variables | Shell / CI injection | Keys, temporary switches |
| Managed | Org-provisioned | Non-overridable mandatory policy |

## What each layer manages

- **User**: your personal defaults
- **Project**: shared defaults for this repo
- **Environment variables**: runtime-injected values
- **Managed policy**: org-fixed boundaries you cannot override locally

You do not need precedence memorized on day one—know what each layer is for:

- User: “how I personally like to work”
- Project: “how this repo wants everyone to work”
- Environment: “values for this run”
- Managed: “org already decided”

Intro: [Config basics](/en/guide/customization/configuration/config-basics/) · CLI focus: [CLI configuration](/en/guide/cli/configuration/)

## Configuration domains (conceptual)

### Model and reasoning

| Intent | Notes |
|---|---|
| Default model | Model ID for new sessions |
| Reasoning strength | Complexity tier if supported |
| Sampling (temperature, etc.) | Usually default; pin for scripts |

Background: [Models and reasoning](/en/guide/foundations/models-and-reasoning/)

### Sandbox and network

| Intent | Notes |
|---|---|
| Filesystem scope | Writable paths, write outside project |
| Network access | Deny / restricted / allow |
| Egress domains | Allowlist if supported |

Background: [Sandbox and network](/en/guide/foundations/sandbox-and-network/)

### Approval policy

| Intent | Notes |
|---|---|
| Before shell | Always ask / trust list / auto (high risk) |
| Before file write | Same |
| MCP tool calls | Per server or tool granularity |

Background: [Permissions and approvals](/en/guide/foundations/permissions-and-approvals/) · Matrix: [Permission matrix](/en/guide/reference/permission-matrix/)

### Workspace and CLI

| Intent | Notes |
|---|---|
| Default `cwd` | Startup directory |
| Non-interactive defaults | exec approval and sandbox |
| Log level | Raise for troubleshooting |

### MCP servers

| Intent | Notes |
|---|---|
| Server list | Command, URL, transport |
| Env injection | Bound to MCP process—not in Git |

[Connect MCP](/en/skills/mcp/connect-an-mcp-server/)

### IDE / App extension

Some settings live only in extension UI; may share user config backend with CLI—per product docs.

[IDE settings](/en/guide/ide/settings/) · [Desktop App settings](/en/guide/desktop-app/settings/)

## Common misconceptions

### 1. Not everything belongs in config

Often better in:

- `AGENTS.md`
- Environment variables
- Skill
- Current task description

Config is not a junk drawer.

### 2. You do not need every key on day one

Most people start with:

- Model
- Sandbox
- Approval
- MCP

Those four cover most early questions.

### 3. Project config replaces team docs?

Config expresses system defaults—not “why and when not to.”

### 4. Official keys are many—learn four first

- Default model
- Sandbox scope
- Approval policy
- MCP connections

## vs environment variables

| Type | Where |
|---|---|
| API key, token | Environment variable or secret manager |
| Non-sensitive switches | Environment variable or config |
| Coding conventions | `AGENTS.md`, not config |

## Should this go in config?

Four questions:

1. Should it apply long term by default?
2. Is it sensitive?
3. Personal habit or shared project rule?
4. Adjusting system behavior or describing this task?

## When adjusting behavior

1. Long-term default or one-off task?
2. Sensitive or ordinary?
3. Personal or shared?

Then place in config, env, `AGENTS.md`, Skill, or current prompt.

## Common scenarios

| Goal | Usually |
|---|---|
| Pin a model long term | User or project config |
| Team wants tests before edits | `AGENTS.md` |
| This task: only `docs/` | Current prompt |
| API key / token | Environment or Secret |
| Connect an MCP | Project config + env |

Easier than staring at key lists.

Cloud Secrets: [Secrets and environment variables](/en/guide/web-and-cloud/secrets-and-variables/)

## Change discipline

1. Change one config class at a time; observe a week
2. Project-level changes via PR review
3. After CLI upgrade, read official migration notes
4. Never commit secrets in config files

Config is for long-term defaults—not secrets, task prose, or team rule essays.

## Common mistakes

- Doc key names mismatch old CLI
- Personal relaxed sandbox used on customer repos
- Config contradicts `AGENTS.md` (config allows, doc forbids)

## Reference sources
- OpenAI Codex configuration reference
---

**Status:** verified  
**Products:** CLI / App / IDE  
**Verification basis:** OpenAI Help Center still documents user-level carriers like `~/.codex/config.toml` and `~/.codex/.env`; this page is explicitly a conceptual index—does not fix specific key names, path precedence, or legacy fields—so `verified` is appropriate.  
**Last verified:** 2026-07-26
