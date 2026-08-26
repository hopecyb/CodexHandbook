---
title: Profiles de configuração
description: Alternar combinações de modelo, Sandbox e Aprovação com Profiles com nome — um para desenvolvimento, revisão e CI.
locale: pt
source_locale: zh-CN
source_revision: 7043ada
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---


Current Codex CLI `--profile <name>` layers `$CODEX_HOME/<name>.config.toml` over the base user configuration. It is primarily a CLI mechanism and should not be presented as a universal one-click desktop mode.

## Minimal example

Keep shared defaults in the base configuration:

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Create a read-only review profile:

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

Start it:

```bash
codex --profile review
# Short form
codex -p review
```

Confirm local semantics:

```bash
codex --help
```

Current help should describe the profile path and layering. If your version differs, trust its output and the current official configuration reference.

## Appropriate uses

| Profile | Purpose | Example boundary |
|---|---|---|
| `review` | Read-only inspection | read-only, no writes |
| `workspace` | Everyday project changes | workspace writes, approvals as needed |
| `ci` | Non-interactive checks | fixed output, no push |

A profile only saves a configuration starting point. It cannot override organization requirements or make a prompt inherently safe. In particular, do not make `danger-full-access` an easy default profile.

## Do not confuse Permission Profiles

- **Configuration profile:** `--profile name` selects `<name>.config.toml` and may layer many Codex settings.
- **Permission Profile (Beta):** `default_permissions` and `[permissions.<name>]` define filesystem and network boundaries.

They share a name but not purpose or schema. Current Permission Profiles also do not compose with legacy `sandbox_mode`; choose one permission system.

## Team boundary

Configuration profiles live in a user's Codex home and are not automatically project configuration in the current version. A team can publish reviewed examples for members to install and inspect explicitly. Do not assume cloning a repository activates a personal profile.

## Acceptance

1. Run `codex --help` and confirm current `-p/--profile` support.
2. Test `review` on a read-only task.
3. Attempt an outside-workspace read or a write and confirm that the boundary blocks it.
4. Inspect effective configuration; do not trust only the filename.

## Official sources

- [Codex configuration schema](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Configuration layers in Codex CLI source](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)

---

**Status:** verified

**Applies to:** CLI

**Last verified:** 2026-08-26 (local `codex-cli 0.148.0`)
