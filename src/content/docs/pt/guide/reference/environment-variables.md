---
title: Environment Variables
description: Purpose, layering, and security of Codex-related environment variables—supplement to configuration reference.
locale: pt
source_locale: en
source_revision: 041e8dd
translation_status: fallback
translated_at: '2026-07-28'
---

Environment variables sit at two extremes: “too low level” or “dump everything here.” Simply: they pass values into programs at runtime—especially secrets and switches.

Use them to **inject keys, override switches, adapt CI** without writing secrets into config files or Git. Conceptual index; exact names per [official docs](https://developers.openai.com/codex) and `codex --help`.

## What this page covers

- What belongs in env vars vs config files
- User, project, Cloud Secrets, CI division
- Common naming and leakage risks

## Decision rule

Prefer environment variables if any apply:

- Must not go in Git
- Varies by machine, user, or environment
- Only needed for this run

Hence tokens, temporary switches, and CI injection often use env—not hardcoded files.

Config concepts: [Configuration reference](/guide/reference/configuration-reference/); Cloud: [Secrets and variables](/guide/web-and-cloud/secrets-and-variables/).

## Good fits for environment variables

| Type | Example intent | Do not |
|---|---|---|
| Auth token | API key, GitHub PAT | Commit to repo |
| Temporary switch | Debug log level | Long-term business config |
| CI injection | Read-only review mode | Production write token |
| MCP child process | Third-party service key | Plaintext in `AGENTS.md` |

## Not a universal drawer

Avoid “if it fits, env it.”

- **Sensitive, runtime-specific**: environment variables
- **Long-term team agreement**: config or docs
- **Workflow rules**: `AGENTS.md` or Skill

Easier troubleshooting later.

## What `.env` is

`.env` is not another config center—it is a common way tools **batch-load environment variables** for local dev.

- Environment variable = the value
- `.env` = a local container for those values

So:

- Convenient ≠ secure
- `.env.example` shows names—not real secrets
- Production/CI usually uses platform Secret managers

## Poor fits for env-only

- Coding standards, directory layout → `AGENTS.md`
- Team default model → project config (non-secret parts)
- Complex allowlists → [Rules](/guide/customization/rules/allow-and-deny-patterns/)

## Common misconceptions

### 1. Env vars are not for all configuration

Good for values—not full team rules and long prose.

### 2. `.env` on disk ≠ safe

Committed, screenshared, or logged `.env` still leaks.

### 3. `unset` ≠ risk gone

May remain in shell history, child processes, logs, files, screenshots.

### 4. Local `.env` pattern ≠ production pattern

CI/Cloud/managed platforms usually:

- Configure Secrets in console
- Inject at runtime
- Keep real values out of repo files

## Layering and priority (conceptual)

```text
Org mandatory policy (if any)
    ↓ overrides
Shell / CI injected environment variables
    ↓ merges with config files (per official rules)
User / project config files
```

When the same key is set in multiple places, follow **official priority**; for troubleshooting print effective config or check logs.

## Practical decision order

1. Is it sensitive?
2. Local only or CI/Cloud?
3. Long-lived or this run only?
4. Local env, CI Secret, or Cloud Secret?

Reduces “right value, wrong place.”

## Common scenarios

| Scenario | Safer approach |
|---|---|
| Local third-party API debug | Local env or `.env`, gitignored |
| Team shared example | Commit `.env.example`, not real values |
| GitHub Actions / CI | Platform Secrets |
| Cloud task calls private service | Cloud Secret |
| MCP server needs key | Parent env or Secret injection |

Rule of thumb: real keys should not live as plain repo file content long term.

## Typical uses

### Local development

Export personal token in `~/.zshrc` or direnv `.envrc`—**do not commit** `.env`.

### CLI non-interactive

CI injects via secret store then runs `codex exec`. See [Non-interactive mode](/guide/cli/non-interactive-mode/).

### MCP servers

MCP processes often inherit parent env; reference `$VAR` in config instead of hardcoding. See [Connect MCP](/skills/mcp/connect-an-mcp-server/).

### Cloud

Repo-level Secrets in Cloud console; names match task references.

Environment variables fit values that change, are sensitive, or are needed only at runtime—not long-term rules or documentation.

## Security checklist

- [ ] `.env` in `.gitignore`
- [ ] Redact tokens before logging
- [ ] Rotate leaked keys
- [ ] Least-privilege scopes (read-only CI token, etc.)

## Common mistakes

- Real keys in committed `.env.example`
- Visible `export` during screen share
- Assume `unset` makes child processes safe—check process tree

## Reference sources

- OpenAI Codex configuration / environment documentation
- stormzhang `18-config.md`
- KimYx0207 CX-04

---

**Status:** verified  
**Products:** CLI / App / IDE / Cloud  
**Verification basis:** OpenAI Help Center still documents `~/.codex/.env`, CI/runtime injection, and platform Secrets; page focuses on stable principles—which values belong in env, what does not, `.env` as local container—without fixing a variable name list.  
**Last verified:** 2026-07-26
