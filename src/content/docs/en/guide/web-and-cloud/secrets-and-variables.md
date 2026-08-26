---
title: Secrets and environment variables
description: Choose correctly between Cloud setup Secrets and ordinary variables available throughout a chat.
locale: en
source_locale: zh-CN
source_revision: 08f8d64
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Cloud environment variables and Secrets have different lifecycles. That distinction determines what they can support safely; masking in the UI is not the only difference.

| Type | Available phase | Suitable content |
|---|---|---|
| Environment variable | Setup and Agent | Non-sensitive configuration such as run mode or a public API base URL |
| Secret | Setup script only | Private-package tokens and credentials needed to install dependencies |

A Secret is stored with additional encryption, decrypted only while the task runs, and removed before the Agent phase begins. It is not a general credential channel for letting an Agent call a production API at runtime.

## Correct example: install a private package

Create an `NPM_TOKEN` Secret in environment settings. The setup script uses it to create temporary authentication configuration and install dependencies:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

The Agent no longer needs the token and uses the installed dependencies. Never `echo` a Secret into setup logs.

## Incorrect example

```text
Configure a production API_KEY as an ordinary environment variable, then ask
the Agent to curl the external service and verify a real order.
```

This exposes a sensitive value throughout the Agent phase and creates exfiltration and accidental-operation risk when network access is open. Use fixtures, mocks, narrowly scoped temporary test credentials, or keep authenticated preparation in setup.

## Configuration review

1. List the values actually needed in setup and Agent phases.
2. Use a Secret for sensitive values used only during installation.
3. Use environment variables for non-sensitive settings the Agent must access.
4. Never place values in prompts, issues, PRs, the repository, or `AGENTS.md`.
5. Run a secret scanner and inspect setup logs.
6. Rotate credentials and delete those no longer required.

Setup runs in a separate Bash session. A normal `export` does not persist automatically into the Agent phase. Configure non-sensitive values that must span the chat as environment variables instead of relying on temporary shell state.

## Relationship to CI

GitHub Actions Secrets and Codex Cloud Secrets are separate stores and do not synchronize automatically. Reusing variable **names** can simplify documentation, but do not copy one over-privileged production token into both systems.

## After exposure

Revoke or rotate the credential immediately, then remove it from logs, chats, issues, and Git history. Deleting the current file alone cannot retract a Secret that has already propagated.

## Official source

- [Cloud environments: variables and Secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Status:** verified

**Applies to:** Cloud

**Last verified:** 2026-08-26
