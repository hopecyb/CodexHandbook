---
title: Tạo Pull Request
description: "Từ Tác vụ Cloud tới PR có thể review — mô tả, phạm vi và cổng merge của người."
locale: vi
source_locale: zh-CN
source_revision: 70996a7
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 40
reviewed_at: 2026-08-26
---

Inspect the summary and diff after a Cloud task. Create a pull request only when the result satisfies scope and verification criteria; otherwise, continue correcting it in the same chat.

## From task to PR

```text
Select environment and starting branch
  → run the Cloud task
  → review summary, logs, and diff
  → follow up if needed
  → Create Pull Request
  → CI + supplementary Codex review + human review
  → a person decides whether to merge
```

Tell Codex to “create a PR, do not merge,” but do not rely on a natural-language constraint alone. Enable branch protection and required checks in the repository.

## Reusable task template

```text
Goal: Fix the sign-in timeout regression in issue #42.
Starting point: main.
Scope: packages/auth/** and the corresponding tests only.
Do not: upgrade dependencies, change the public API, or write directly to main.
Verification: pnpm test --filter auth; pnpm typecheck.
Deliverable: Create a PR to main, but do not merge it.
The PR description must include the root cause, change summary, test commands
and results, risks, and rollback approach.
```

## Before creation

- [ ] Starting commit is correct and no required local input remains unpushed.
- [ ] Diff contains only the task scope.
- [ ] The new branch name is recognizable and does not overwrite another person's work.
- [ ] Tests actually ran and failures are not hidden by the summary.
- [ ] No credentials, temporary logs, caches, or unrelated formatting.
- [ ] A large change is split into independently reviewable PRs.

## Minimum PR description

1. Why the change is required.
2. What actually changed.
3. How it was verified, including commands and results.
4. Risks, limitations, and rollback.
5. What was explicitly not done.

Add real screenshots for UI changes, reproduction steps for behavior changes, and compatibility and rollback details for migrations.

## After creation

Wait for required checks, request supplementary review with `@codex review`, and have a person with context inspect the main diff. Return specific comments to the same PR branch; do not create an unrelated duplicate branch.

Opening and merging a PR are separate permission boundaries. Cloud being able to create a PR does not justify bypassing the team's merge policy.

## Official sources

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub pull-request review](https://learn.chatgpt.com/docs/third-party/github)

---

**Trạng thái:** verified

**Áp dụng cho:** Cloud, GitHub

**Kiểm chứng gần nhất:** 2026-08-26
