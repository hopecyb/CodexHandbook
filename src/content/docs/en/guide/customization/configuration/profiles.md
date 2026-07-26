---
title: Configuration Profiles
description: Named configuration sets to switch model, sandbox, and approval combinations—one each for development, review, and CI.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

**Profile** lets you save a named set of configuration (model + sandbox + approval, etc.) and switch scenarios in one step instead of changing settings manually each time.

## What This Page Covers

- Profile versus “changing default configuration”
- Common ways to split Profiles
- How teams share Profile definitions

## What Profiles Control

If “configuration” is default working habits, **Profile** is “a preset bundle for a scenario.”

Think of it as:

- One set for daily development
- One for untrusted repos
- One for read-only review
- One for CI automated tasks

So you do not retune a pile of switches every time.

## Typical Profile Examples

| Profile name | Intent | Traits (conceptual) |
|---|---|---|
| `daily` | Daily development | Balanced model, standard sandbox |
| `strict` | Untrusted repo | Strong approval, limited network |
| `review-only` | Read-only review | No disk write or read-only |
| `ci` | Pipeline | Fixed model, non-interactive, no push |

Specific fields: [Configuration Reference](/guide/reference/configuration-reference/).

## Usage (Conceptual)

1. Confirm Profile syntax in official docs (may relate to `[profiles.name]` in `config.toml` or equivalent)
2. Create and name a Profile
3. Specify at launch: `codex --profile strict` (command per `--help`)
4. Note in README: “contributors recommended `daily`; CI uses `ci`”

CLI detail: [CLI Configuration](/guide/cli/configuration/)

## Common Misconceptions

### More Profiles is not more flexible

Many people want a Profile for every tiny scenario and end up with a dozen names they cannot tell apart.

Usually keep 2–4 most-used ones:

- Daily development
- Strict mode
- Read-only review
- CI

Enough to separate risk boundaries clearly.

### Profile is not a substitute for thinking

Switching to a Profile does not make every task absolutely safe or appropriate.

It only moves you to a common starting state; each task still needs the current repo and risk judgment.

## Division of Labor with AGENTS.md

| | Profile | AGENTS.md |
|---|---|---|
| Controls | Capability switches, model, sandbox | How to write this project |
| Commit to Git | Optional (project-level profile snippet) | Yes |
| Personal/team | Personal profile local; team profile should be PR | Team |

## Common Mistakes

- Ten Profiles per repo that nobody maintains
- `ci` Profile still allows `git push`
- Profile names disagree with docs; newcomers use the wrong one

## Getting Started

When starting with Profiles:

1. Keep one `daily` as default
2. Add `strict` for unfamiliar or high-risk repos
3. If the team automates, add `ci` separately

That already covers most common cases.

Profiles help you quickly switch to a default combination you have already thought through for different risk scenarios.

## References

- stormzhang `18-config.md`
- OpenAI Codex profiles documentation

---

**Status:** outdated  
**Applicable products:** CLI / App  
**Review note:** This page states `Profile`, `codex --profile`, and shared profile structure too concretely; currently verifiable official material is insufficient to show these usages are broadly valid in present versions. It should not be marked `verified` until formal documentation support is added.  
**Last verified:** 2026-07-26
