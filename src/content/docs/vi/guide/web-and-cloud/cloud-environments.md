---
title: Môi trường Cloud
description: "Thành phần, vòng đời và điểm cấu hình đội của môi trường chạy từ xa Codex Cloud."
locale: vi
source_locale: zh-CN
source_revision: f7c7188
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

A Cloud environment defines what Codex installs and runs for a repository. It does not inherit your laptop configuration. When work passes locally but fails in Cloud, compare runtimes, dependencies, variables, and network access first.

## Execution order for each chat

1. Create a container and check out the selected branch or commit SHA.
2. Run the setup script; when restoring a cache, optionally run the maintenance script.
3. Apply the internet policy.
4. Run the Agent loop to execute commands, edit, and verify while loading applicable `AGENTS.md` files.
5. Return the answer and diff for follow-up or PR creation.

The default `universal` image includes common languages, packages, and tools. Pin Python, Node.js, and other versions in environment settings, and install additional dependencies in the setup script.

## Minimal reproducible configuration

For a pnpm project, pin the same Node.js version as CI and configure:

```bash
corepack enable
pnpm install --frozen-lockfile
```

At the repository root, put validation rules in `AGENTS.md`:

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

Setup and Agent run in separate Bash sessions. A temporary `export` in setup does not automatically persist. Configure non-sensitive values as environment variables or persist them through shell configuration as the official guidance recommends.

## Cache and maintenance

Cloud may cache container state for up to 12 hours to accelerate new and follow-up chats. After restoring a cache, it checks out the chat's selected branch and can run a maintenance script to refresh dependencies.

Changing setup, maintenance, environment variables, or Secrets invalidates the cache automatically. Use **Reset cache** when repository changes make a cache incompatible. In Business and Enterprise, users with access to an environment may share its cache; resetting it can affect others in the workspace.

## Environment variables and Secrets

- Environment variables are available during setup and the Agent phase.
- Secrets are decrypted only for setup and removed before the Agent starts.
- Setup has internet access.
- Agent internet access is off by default and can be enabled per environment.

These boundaries are easy to confuse. See [Secrets and environment variables](/vi/guide/web-and-cloud/secrets-and-variables/).

## Alignment checklist

| Check | Target |
|---|---|
| Starting branch/commit | Matches the task |
| Runtime versions | Match CI or production constraints |
| Lockfile | Frozen installation |
| Setup | Repeatable, non-interactive, fail fast |
| Verification commands | Recorded in `AGENTS.md` |
| Network | Only required domains and methods for the Agent |

## Official sources

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [codex-universal image](https://github.com/openai/codex-universal)

---

**Trạng thái:** verified

**Áp dụng cho:** Cloud

**Kiểm chứng gần nhất:** 2026-08-26
