---
title: GitHub integration
description: Repo connection, PRs, review, and CI—where Codex sits in GitHub workflows.
locale: en
source_locale: zh-CN
source_revision: 5585550
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

GitHub is Codex's most common collaboration surface: Cloud tasks, PR review, Actions, and local push all share branches and permissions.

This page explains how Codex plugs into repos, branches, PRs, and review.

Even if you are not a senior developer, start with what it handles:

- Where code lives
- How changes are proposed for others to see
- How review and merge happen

## Capability map

| Capability | Typical entry | Handbook location |
|---|---|---|
| Connect remote repo | Cloud settings | [Connect GitHub](/en/guide/web-and-cloud/connect-github/) |
| Cloud code changes → PR | Cloud task | [Create Pull Request](/en/guide/web-and-cloud/create-pull-requests/) |
| Local diff review | Desktop App / IDE | [Diffs and comments](/en/guide/desktop-app/diffs-comments-and-review/) |
| Run Codex in CI | GitHub Actions | Roadmap `08-developer-platform/ci-cd/` |
| Auto PR review comments | Actions + exec | [Non-interactive mode](/en/guide/cli/non-interactive-mode/) |

## Recommended team norms

```md
## GitHub × Codex (can go in AGENTS.md)

- Protect main by default; Codex pushes feature branches only
- PR must link issue; description includes test notes
- Codex must not merge PRs unless release bot is explicitly authorized
- Secrets in GitHub Secrets / environment secrets—not in prompts
```

## Cloud vs local Git

| | Local clone | Cloud |
|---|---|---|
| Code source | Your machine's workspace | Remote clone |
| Unpushed commits | Visible | Not visible—push first |
| Environment | Your Node/system versions | Configured environment image |
| Best for | Daily development | Async long tasks, standardized builds |

## Review workflow

1. Codex or human opens PR
2. Human reads diff (or `$pr-review` Skill)
3. CI runs tests
4. Comment-driven revisions—new Codex task "address review comments only"
5. Human merges

## Common misconceptions

### 1. GitHub integration ≠ "Codex develops for me automatically"

More common uses:

- Read repo context
- Help organize diffs or review
- Assist opening PRs and fixing comments

### 2. Unfamiliar with PR and Review?

Roughly:

- **PR**: formally propose your changes for others to see
- **Review**: others inspect those changes

That level is enough for most of this page.

### 3. On first contact, separate three things

Not tokens or Actions first—but:

> **Local changes, cloud repo, and PR review are not the same thing.**

GitHub integration is about fitting Codex into existing code collaboration.

## Security

- Minimize GitHub Token scope
- Stay cautious with sensitive Actions patterns like `pull_request_target` (injection surface)
- Extra isolation for automation on fork PRs

## Common mistakes

- Cloud task assumes unpushed local changes exist
- Letting Codex execute unsanitized instructions in PR descriptions (prompt injection)
- Mixing formatting and feature changes in one PR

## References
- OpenAI Codex GitHub integration documentation
---

**Status:** verified  
**Applicable products:** Cloud / App / CLI  
**Verification basis:** OpenAI Developers Codex use cases still include "Review GitHub pull requests"; Help Center plugin/integration guidance emphasizes external repo access depends on underlying app permissions, role access, and action boundaries. This page summarizes collaboration placement and local vs Cloud code visibility differences—not a fixed capability matrix.  
**Last verified:** 2026-07-26
