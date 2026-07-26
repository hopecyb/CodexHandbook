---
title: Permission Matrix
description: Conceptual map of Codex action types, approval points, and product differences.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

The permission matrix helps everyday users too: why the same sentence gets different reactions in different Codex entry points.

Different **actions** trigger different approval and sandbox behavior per **product entry**. This matrix aligns teams on “what must a human explicitly allow.” It is a **risk and behavior reference**, not legal compliance text. Defaults per [official documentation](https://developers.openai.com/codex) and org-managed policy.

## What the table is for

When approval, limits, or rejection appear, people often think:

- Model is broken
- I phrased it wrong
- It worked yesterday

Much of that is entry, policy, and risk level—not your wording alone.

## Core idea

Not every “do this for me” carries the same risk.

Examples:

- Read a file
- Edit a file
- Run a command
- Reach the network
- Push code

Same sentence shape—different risk—so products add different approval, limits, and blocks.

Conceptual base: [Permissions and approvals](/guide/foundations/permissions-and-approvals/)

## Action risk tiers

| Tier | Example actions | Default expectation |
|---|---|---|
| L0 read | Read in-repo text, search code | Usually automatic |
| L1 write | Edit project files, format | Often confirm or auto in sandbox |
| L2 execute | shell, package manager, tests | Often confirm |
| L3 network | curl, npm registry, API | Strict confirm or deny |
| L4 out of bounds | Write outside project, git push, drop DB | Block or strong confirm |
| L5 GUI | Computer Use, system dialogs | Highest sensitivity; often off |

## How to read it

1. What class of action is this task?
2. Will that class usually be blocked in this entry?
3. Add detail, wait for approval, or pick a lighter entry?

Use it to preview before you start.

## Matrix (conceptual — typical defaults)

**Y** = usually needs explicit consent or policy limit · **A** = may auto under trusted config · **—** = version/policy dependent · **N** = usually not allowed

| Action | Desktop App | CLI interactive | IDE | Cloud |
|---|---|---|---|---|
| Read repo files | A | A | A | A |
| Write in-repo files | Y/A | Y | Y/A | Y/A |
| Run test commands | Y/A | Y | Y/A | Y/A |
| Install global dependencies | Y | Y | Y | Y |
| Access public internet | Y | Y | Y | Y |
| Read sensitive files like `.env` | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| Write outside project | N/Y | N/Y | N/Y | N |
| MCP third-party tools | Y | Y | Y | Y |
| Browser open URL | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

Notes:

- **Cloud** runs in remote sandbox—no access to your laptop filesystem
- **IDE** similar to App; approval UI differs
- **Managed policy** can force all Y or N

## Common misconceptions

### 1. Feasibility is not only “will the model try”

Often: entry allowance, policy, permissions.

### 2. Cloud is not automatically freer or safer

Safety depends on sandbox, network, Secrets, branch protection, approval together.

### 3. Written rules do not remove risk alone

Docs, approval policy, technical limits, and human review often combine.

### 4. Blocked ≠ you did something wrong

Often: higher risk step, wrong entry for the job, or needs explicit approval / lighter approach.

## How config and docs land

| Mechanism | Role |
|---|---|
| Sandbox mode | Limits L3/L4 even if Agent “wants” to |
| Approval policy | Whether L1–L3 prompts |
| `AGENTS.md` | Project prohibitions (e.g. no push) |
| Branch protection | GitHub blocks unreviewed merge |
| Hooks | Pre-commit checks (see Hooks roadmap) |

[Human approval patterns](/cases/workflows/human-approval-patterns/) · [Configuration reference](/guide/reference/configuration-reference/)

## When to raise caution

If an action:

- Modifies files
- Runs commands
- Reaches the network
- Touches sensitive data
- Sends results outside the repo

You may not need the L-number—know it is past casual-read risk.

The matrix is a preview tool: why this step might block, whether to be more careful, or choose a lighter path.

## Team policy examples

| Scenario | Suggestion |
|---|---|
| Open-source practice repo | Standard sandbox + allow test commands |
| Company monorepo | Strict + no push + human PR review |
| CI `codex exec` | Read-only or scoped dir + no push |
| Cloud production-related | Minimal Secrets + branch protection |

## Common myths

| Myth | Fact |
|---|---|
| “Cloud is safer” | Depends on secrets, review, network policy |
| “IDE won’t run shell” | May run via Agent tools |
| “Doc says no push so never push” | Need sandbox + Git permissions + human review |

---

**Status:** outdated  
**Products:** App / CLI / IDE / Cloud  
**Review note:** Risk tier framing still useful, but matrix assumes many per-entry defaults and approval points without current official per-entry permission matrix documentation—do not mark `review` or `verified`.  
**Last verified:** 2026-07-26
