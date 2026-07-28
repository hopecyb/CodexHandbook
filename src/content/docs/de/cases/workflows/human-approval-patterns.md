---
title: Human approval patterns
description: When to approve, reject, or pause Codex—and how to write those rules clearly.
locale: de
source_locale: en
source_revision: f8c7a3b
translation_status: fallback
translated_at: '2026-07-28'
---

Approval keeps irreversible actions for humans. This page summarizes common patterns.

## Approval tiers

```text
Auto-safe zone (read, analyze, plan)
    ↓
Prompt-confirm zone (write files, run commands, network)
    ↓
Mandatory human zone (push, delete data, send externally, change production config)
```

Specific dialog behavior varies by [product entry](/guide/); principles are the same.

## Pattern 1: Plan first, execute later

```text
Rule: Do not modify repo files until I say "approve plan."
```

Good for: unfamiliar codebase, production-related, large diff.

## Pattern 2: Command whitelist

In [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/) write:

```md
Allowed without asking again: pnpm test, pnpm lint, git status, git diff
Must confirm each time: git push, npm publish, database migrate
```

When conflicting with hosted policy, **stricter** wins.

## Pattern 3: Two-phase merge

1. Codex opens draft PR or local branch
2. Human CI + review, then merge

Cloud: see [Create pull requests](/guide/web-and-cloud/create-pull-requests/).

## Pattern 4: Read-only recon

```text
This round read-only: may read files, run tests, curl local API;
no disk writes or git commit.
```

For audit, learning unfamiliar projects, production diagnosis.

## When to reject and restart

| Signal | Suggestion |
|---|---|
| Plan doesn't match goal | Reject execution; request revised plan |
| Scope creep | Stop; split task |
| Tests skipped | Reject merge; require verification |
| Cannot explain a command | Reject; require explanation |

## Relation to Automations

Unattended tasks should still design human confirmation points—see [Scheduled and background tasks](/skills/automations/scheduled-tasks/).

## Common mistakes

- Long-term "always allow" without remembering risk
- Approval theater—don't read diff
- Verbal "don't mess up" instead of explicit mode

## Acceptance checklist

- [ ] Approval mode declared before task starts
- [ ] High-risk ops have second-person review or CI gate
- [ ] Team has unified policy for `git push` and similar commands

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current official guidance on autonomy / approval boundaries, and verified approval, command rules, PR, and automation chapters in this handbook; this page only confirms stable collaboration principles—which actions auto-continue vs pause for human approval.
