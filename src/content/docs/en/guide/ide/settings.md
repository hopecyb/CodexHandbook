---
title: IDE extension settings
description: Model, approvals, context, and extension behavior configuration in the IDE.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

IDE extension settings connect **personal preferences** and **project rules**: which model, how strict approvals are, whether open files attach automatically, etc. Aligned with global [configuration basics](/guide/customization/configuration/config-basics/); this page focuses on common editor options.

## What's covered

- IDE settings vs user config vs `AGENTS.md`
- Settings developers adjust most often
- How teams align defaults

## What these settings control

IDE settings are closer to: **default habits when Codex works with you in the editor**.

They answer questions like:

- Default model
- Default approval strictness
- Whether to auto-attach current file and selection

They do not define project rules—they shape whether the editor feels smooth and predictable.

## Configuration layers (review)

| Layer | Examples | Priority |
|---|---|---|
| Org managed policy | Forbid relaxing sandbox | Highest |
| Project `AGENTS.md` / project config | Test commands, directory conventions | High |
| IDE extension settings UI | Default model, panel layout | Medium |
| Single-task prompt | "No network this time" | Task-level |

See [scope and precedence](/guide/customization/agents-md/scope-and-precedence/)

## Common misconceptions

### IDE settings are not project standards

Do not confuse "how I like my editor configured" with "how this project should work."

- Editor settings → personal UX
- `AGENTS.md` and project config → team agreement

Related but not the same.

### More automatic context is not always better

Auto-attaching current file, selection, and tabs helps until it dilutes the task focus.

"Enough" beats "open everything."

## Commonly adjusted settings (conceptual)

### Model and reasoning

Affects speed vs quality on hard tasks. Teams can note recommended model tier in README so everyone does not debug different defaults.

### Approvals and sandbox

Maps to [permissions and approvals](/guide/foundations/permissions-and-approvals/):

- Beginners: keep default or stricter
- Trusted repos: relax carefully; do not mix with production secrets directories

CLI and IDE should share the **same security baseline**; CLI: [CLI configuration](/guide/cli/configuration/).

### Context behavior

Some extensions configure:

- Auto-include current file / selection
- Read `AGENTS.md`
- Context window options (version-dependent)

Too much auto-context adds noise; see [keep context focused](/guide/context/keep-context-focused/).

### Login and account

Shared with [sign-in and authentication](/guide/getting-started/sign-in-and-authentication/); restart extension session after switching accounts.

## Team alignment

1. Put **must-match** items in the repo (`AGENTS.md` + optional project config)
2. Keep **personal habits** in IDE settings—not in Git
3. New member onboarding: check extension version per [IDE installation](/guide/ide/installation/)

## First-time focus

On first setup, check three categories:

1. Model and reasoning tier
2. Approval / security
3. Automatic context

Tuning these covers most real-world friction.

## Troubleshooting

| Symptom | Check |
|---|---|
| Settings not applying | Org policy override? Reload window? |
| Differs from CLI | Compare [configuration reference](/guide/reference/configuration-reference/) |
| Extension unresponsive | [IDE troubleshooting](/guide/ide/troubleshooting/) |

IDE settings are how you and Codex cooperate in the editor; project rules are a separate layer—do not mix them up.

## References
- OpenAI Codex IDE settings
---

**Status:** outdated  
**Applicable products:** IDE  
**Review note:** This page covers IDE setting entries, auto-context, approval preferences, and org overrides—names and UI change frequently; lacks strong official settings documentation to support the full page.  
**Last verified:** 2026-07-26
