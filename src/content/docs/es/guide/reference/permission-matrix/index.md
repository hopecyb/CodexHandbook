---
title:  Matriz de Permisos
description:  Tabla conceptual de tipos de operación de Codex, puntos de Aprobación y diferencias entre productos.
locale: es
source_locale: zh-CN
source_revision: a161c0c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Do not predict permissions from a fixed “will App/CLI/IDE/Cloud prompt?” table. Actual behavior depends on execution location, effective configuration, organization requirements, the operating system, and the requested action.

![Decision flow between sandbox enforcement, human approval, and the executed result](/diagrams/sandbox-approval-flow-es.svg)

## Three mechanisms to separate

| Mechanism | Scope | Primary control |
|---|---|---|
| Local Permission Profiles (Beta) | Local commands on macOS, Linux, WSL, and native Windows | Filesystem read/write/deny and network destinations |
| Legacy sandbox settings | Local Codex | `read-only`, `workspace-write`, `danger-full-access`, and approval policy |
| Cloud environment policy | Codex Cloud | Isolated container, setup internet, Agent network allowlist/HTTP methods |

Permission Profiles do not compose with legacy `sandbox_mode`. If loaded configuration contains `sandbox_mode`, the command line passes `--sandbox`, or a configuration profile sets sandboxing, Codex uses the legacy sandbox rather than `default_permissions`.

## Built-in local Permission Profiles

| Name | Boundary | Suitable for |
|---|---|---|
| `:read-only` | Local commands are read-only | Code understanding, review, first contact with a repository |
| `:workspace` | Writes to workspace roots and system temporary directories | Normal development work |
| `:danger-full-access` | Removes local sandbox restrictions | Only when externally isolated and explicitly required |

A custom profile can set paths to `read`, `write`, or `deny`, and exclude sensitive files such as `.env` from a broader scope. For a conflicting path, `deny` takes precedence over `write`, which takes precedence over `read`.

## Least-privilege example

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` permits command networking. `features.network_proxy` must also be enabled for domain rules to be enforced through the proxy.

## Evaluate by action

| Action | Primary risk | Minimum boundary |
|---|---|---|
| Read source | Sensitive files enter context | Workspace read with explicit credential denies |
| Modify files | Out-of-scope overwrite or deletion | Write only target workspace; inspect diff |
| Run tests | Script side effects | Review scripts; use controlled environment |
| Install dependencies | Supply chain and network | Pin versions and domains |
| Git push / PR | External state change | Separate branch, protection, human review |
| MCP/Plugin tool | Third-party data and writes | Minimum scope, per-action approval, logs |

`AGENTS.md` can say “do not push,” but is not a technical enforcement boundary. Combine rules with sandbox/permissions, GitHub access, and human review.

## Team verification

1. Record client and Codex versions.
2. List every loaded configuration layer.
3. Confirm whether Permission Profiles or legacy sandboxing is active.
4. In a non-sensitive test directory, verify read, write, deny, and network behavior separately.
5. Only then connect a real repository, retaining Git and organization gates.

Permission Profiles remain Beta. Rerun this verification after upgrades.

## Official sources

- [Permissions (Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)

---

**Status:** verified

**Applies to:** App, CLI, IDE, Cloud

**Last verified:** 2026-08-26
