---
title: Reviewing changes in the IDE
description: Reading diffs, commenting, and accepting or rejecting Codex suggestions in the editor.
locale: de
source_locale: en
source_revision: c5f9bb9
translation_status: fallback
translated_at: '2026-07-28'
---

IDE review sits between inline completion and full PR review: changes often appear directly in the editor or a side diff view. This page explains how to accept results safely.

In the IDE, do not treat "one-click accept" as the default even when a change looks ready.

## What's covered

- Common IDE review UI patterns
- Accept, reject, and partial-accept strategy
- Connecting to Git, tests, and PR workflow

## Review flow

1. **Scope**: which files changed? unexpected deletes or formatting storms?
2. **Logic**: branches, error handling, edge cases
3. **Security**: secrets, injection, privilege escalation, dependency tampering
4. **Verification**: project tests / lint (IDE terminal or task scripts)
5. **Decision**: accept, request changes, or undo and resend task

Methodology: [review diffs](/guide/quality/review-diffs/)

## IDE-specific actions (conceptual)

| Action | Suggestion |
|---|---|
| Inline diff / ghost text | Read block by block; avoid accept-all |
| Accept single file | Start with lowest-risk file (e.g. tests) |
| Reject and retry | Follow up: "change only X, do not touch Y" |
| Git integration | After accept, still `git diff` before commit |

[Desktop App diffs, comments, and review](/guide/desktop-app/diffs-comments-and-review/) is fuller; IDE review is **lightweight and high-frequency**.

## Recommended prompt habits

State up front:

- Allowed path globs
- Forbidden: `git push`, changing lockfile (unless explicitly requested)
- On completion: list change summary; **do not auto-commit**

See [human approval patterns](/cases/workflows/human-approval-patterns/)

## Common mistakes

- Trusting a green test icon without running tests yourself
- Hiding logic changes inside a large auto-format diff
- Push immediately after accept, skipping PR / branch protection

## Acceptance checklist

- [ ] `git status` matches expected files
- [ ] Tests pass (local or CI)
- [ ] No `.env`, tokens, or debug `console.log` left behind
- [ ] Commit message written or confirmed by you

## Common questions

### 1. Inline suggestions look small—safe to accept?

Do not make that a habit.

Many issues are not about size—they are about "small enough that nobody looked closely."

### 2. Not confident reviewing logic—what helps most?

These three checks already add value:

- Correct files changed?
- Anything deleted that should stay?
- Obvious debug residue or style drift?

### 3. Does accept mean done?

Not yet.

Accept only puts changes in your working tree—you still verify and decide whether to commit.

"Accept" in the IDE is a mid-step, not final acceptance.

## References

- [Verification and human review](/guide/foundations/verification-and-human-review/)
- stormzhang `09-ide.md`

---

**Status:** outdated  
**Applicable products:** IDE  
**Review note:** This page depends on whether the IDE extension currently offers inline diff, side diff, accept/reject per block, etc.; current official public material cannot verify each UI capability—do not mark `verified` until newer extension docs are available.  
**Last verified:** 2026-07-26
