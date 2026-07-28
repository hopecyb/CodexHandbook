---
title: Allow and Deny Rules
description: Constrain what the Agent can run with command and path rules—personal habits and team bottom lines.
locale: pt
source_locale: en
source_revision: 0a6b562
translation_status: fallback
translated_at: '2026-07-28'
---

**Rules** declare in configuration or project files which shell commands, paths, and tool calls are **allowed or denied**, reducing manual approval each time while preventing dangerous automation.

## Contents

- How Allow / Deny rules work
- Relationship with sandbox, approval dialogs, and `AGENTS.md`
- Team rule examples

## What Rules Actually Do

If “rules” feels abstract, start here: agree in advance what Codex may and may not do, instead of judging and clicking approve every time.

Their value is mainly twofold:

- Reduce low-risk operations you confirm daily anyway
- Block high-risk operations that should not run automatically

## Rule Types (Conceptual)

| Type | Example |
|---|---|
| Command allowlist | Allow `npm test`, `git status` |
| Command denylist | Deny `rm -rf`, `curl \| bash` |
| Paths | Deny writing `../`, deny reading `~/.ssh` |
| Network | Deny outbound or allow only registry domains |

Compare with [Permission Matrix](/guide/reference/permission-matrix/): rules are **configurable** enforcement; the matrix describes **typical defaults**.

## Recommended Layering

```text
Organization managed policy (cannot override)
    ↓
Project rules + AGENTS.md (Git review)
    ↓
Personal allowlist supplement (local only)
    ↓
Single-task prompt constraints
```

## Common Misconceptions

### Rules are not only for fewer dialogs

Many people first hear “allowlist” and think the goal is fewer popups.

Fewer popups is only part of it; more important is allowing low-risk actions and blocking high-risk ones.

### Rules are not the sandbox

Sandbox limits “how far you can reach”; rules agree “which actions should not happen in principle.”

Use both; do not pick one to replace the other.

### Team bottom lines cannot live on one person’s machine

If only your local rules know “no push” or “do not touch `.env`,” others can still step in.

Team bottom lines should live where they can be reviewed.

## Team Example (Illustrative—not copy-paste ready)

**Allow:**

- Package manager install of **in-project** dependencies
- Test scripts from documentation

**Deny:**

- `git push`, `git reset --hard`
- Read/write `.env*` (unless explicit task)
- POST requests to the public internet containing repo content

Rules should live in team-reviewable files, not verbal agreement alone.

## Common Mistakes

- Allowlist too broad (allowing `bash` is like allowing everything)
- Only deny, no allow—still too many approvals
- Rules contradict `AGENTS.md`

## Getting Started

When organizing rules, you do not need a full policy on day one. These two steps are enough:

1. List 3–5 daily, low-risk commands explicitly
2. List a few high-risk actions you never want automated

Run the minimum boundary first; refine later.

## Security Boundaries

- Rules **cannot** replace code review and branch protection
- Malicious prompts may try to bypass rules—keep sandbox defaults strict
- Rule changes go through PR; treat like CI changes

Good allow/deny rules state in advance which actions are reasonable and which should not happen.

## References

- stormzhang `15-permissions.md`, `18-config.md`
- KimYx0207 permission configuration chapter

---

**Status:** verified  
**Applicable products:** CLI / App  
**Verification basis:** OpenAI’s current Codex/plugin permission documentation continues to emphasize layering among read/write actions, approval, source boundaries, and role-based access control; this page does not declare specific rule file syntax and explains allow/deny as an execution-boundary pattern, distinct from sandbox, approval, and team review flows.  
**Last verified:** 2026-07-26
