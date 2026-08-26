---
title: Code review in Cloud and GitHub
description: Review a Cloud diff and use Codex on GitHub as a high-signal supplementary reviewer.
locale: en
source_locale: zh-CN
source_revision: a74296a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

A completed Cloud task provides a summary and diff. You can follow up, request changes, or create a PR. Completion is not merge approval; project CI, branch protection, and human judgment still apply.

## Two review types

| Type | What it examines | Outcome |
|---|---|---|
| Cloud result review | Task summary, logs, and diff | Decide whether to follow up or create a PR |
| GitHub Codex review | PR diff and connected-repository `AGENTS.md` rules | Publish a GitHub code review |

Comment on a GitHub PR:

```text
@codex review
```

Codex posts findings as a normal GitHub review. The current official guidance says GitHub comments focus on high-priority P0/P1 issues; when no issue is found, Codex may leave only a reaction. Few comments are not a reason to skip human review.

## Review order

1. **Scope:** do files, directories, dependencies, and generated artifacts match the task?
2. **Behavior:** do success, failure, and boundary paths satisfy the requirement?
3. **Security:** inspect authentication, authorization, input handling, credentials, and outbound network access.
4. **Evidence:** which tests actually ran, and were failures disclosed?
5. **Rollback:** can the change be reverted narrowly, or does it mix unrelated refactoring?

Example prompt:

```text
Review this PR. Report only findings that could cause wrong behavior, data loss,
a security issue, or a compatibility regression. Each finding must include
severity, exact location, trigger condition, and impact. Do not report style
preferences as defects.
```

## Repository-specific rules

Add this to the applicable `AGENTS.md`:

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

Root rules apply across the repository; a nested `AGENTS.md` can add service-specific checks. Begin with two or three stable rules that describe a safe path rather than a long list of volatile function names.

## Automatic-review boundary

Users with the required GitHub push or admin permission can enable automatic reviews for a repository in Codex Settings. Automatic review is a supplementary gate and should not have automatic merge authority. High-risk repositories still need required reviewers, CI, and branch protection.

## Acceptance checklist

- [ ] A person reviewed the main logic diff.
- [ ] P0/P1 findings are fixed or the risk is accepted in writing.
- [ ] CI passes and any rerun is explained.
- [ ] No Secrets, unintended generated files, or unrelated lockfile changes.
- [ ] Task, PR description, and actual diff agree.

## Official sources

- [GitHub pull-request review](https://learn.chatgpt.com/docs/third-party/github)
- [Cross-client code review](https://learn.chatgpt.com/docs/code-review)

---

**Status:** verified

**Applies to:** Cloud, GitHub

**Last verified:** 2026-08-26
