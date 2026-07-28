---
title: Non-Interactive Mode
description: Run Codex without a TTY—suited for CI, cron jobs, and automation pipelines.
locale: pt
source_locale: en
translation_status: fallback
translated_at: '2026-07-28'
source_revision: d619904
---

Non-interactive mode lets Codex complete tasks **without a TTY conversation**—the entry point for embedding the agent in scripts and CI.

## What this page covers

- When to use non-interactive vs an interactive `codex` session
- Extra safety and approval requirements when unattended
- Relationship to [CLI configuration](/guide/cli/configuration/)

## Good fits

| Good fit | Poor fit |
|---|---|
| Fixed review prompts in CI | Needs multi-turn clarification |
| Nightly doc link checks | Exploratory refactors |
| Template-based codegen | High-ambiguity product decisions |

## Core idea

Non-interactive runs typically:

1. Take a **complete task** from args or stdin
2. Run in a specified working directory
3. Exit with a status code for success/failure
4. Emit logs or structured output for downstream steps

**Command names and flags follow official CLI docs** (often `codex exec` or equivalent); re-check `--help` after upgrades.

## Minimal example (illustrative)

```bash
# Repo root, read-only review (flags per official docs)
codex exec --cwd . "List security risks in diff vs main; do not modify files"
```

Tips:

- `cd` to a clean worktree in shell scripts
- Store prompts in versioned `prompts/` files or heredocs
- Fail CI on non-zero exit codes

## Safety

Unattended = **no one to click reject**:

| Principle | Practice |
|---|---|
| Least privilege | Read-only tokens, tight sandbox |
| No push | CI opens PRs or uploads artifacts only |
| Fixed prompts | Never concatenate unsanitized PR text (injection risk) |
| Audit | Keep logs and diff artifacts |

See [Human approval patterns](/cases/workflows/human-approval-patterns/).

## Interactive vs non-interactive

| | Interactive | Non-interactive |
|---|---|---|
| Entry | `codex` TUI | `exec` / pipes |
| Human in the loop | Strong | Weak—design upfront |
| Learning | Yes | No |
| CI | No | Yes |

Interactive usage: [CLI interactive mode](/guide/cli/interactive-mode/)

## Common mistakes

- Pasting a long chat history into a single exec
- Production credentials and write access in CI
- Unpinned CLI version causing sudden pipeline drift

---

**Status:** review  
**Applies to:** CLI  
**Last verified:** 2026-07-25
