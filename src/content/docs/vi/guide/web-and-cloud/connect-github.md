---
title: Kết nối GitHub
description: "Nối Codex Cloud với repo GitHub — quyền, nhánh và môi trường."
locale: vi
source_locale: zh-CN
source_revision: b811894
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---

Codex Cloud connects to GitHub or GitLab (Beta) before creating an environment for a repository. The GitHub authorization scope determines which repositories it can see. A local clone and unpushed changes are outside that scope.

## Connect

1. Open Codex Cloud and sign in with a ChatGPT account.
2. Connect GitHub when prompted.
3. In GitHub authorization, select the organization and **only the required repositories**.
4. Return to Codex, select the repository, and create a Cloud environment.
5. Verify checkout, branch, and diff with a read-only or small-change task.
6. To use PR review, enable Code review for the repository in Codex Settings.

Authorize only repositories needed for the work. For team repositories, confirm that the organization permits the integration, your account has the required access, and branch protection remains enabled.

## Before and after connecting

- [ ] The target is not an unintended fork with the same name.
- [ ] The default branch and task starting point are known.
- [ ] Required local changes are pushed or explicitly excluded.
- [ ] Direct, unreviewed writes to the main branch are blocked.
- [ ] The environment has no unrestricted production credentials.
- [ ] The first task changes only a low-risk file.

## Two GitHub workflows

### Let Cloud implement a task

Select the repository environment and starting branch in Codex Cloud, then describe the goal. Review the diff before creating a PR.

### Let Codex review a PR

After enabling Code review, comment on the PR:

```text
@codex review
```

Codex posts a standard GitHub review. Automatic review must be enabled separately in Codex Settings. Teams can add repository-specific rules under `## Code Review Rules` in `AGENTS.md`.

## Diagnose permission errors

- Repository missing: inspect the GitHub repository scope.
- Organization repository returns 403: inspect organization policy, SSO, and integration installation.
- Automatic review cannot be enabled: confirm the required GitHub push or admin permission.
- Cloud cannot see a local commit: Cloud checks out the remote repository; push it to an explicit branch.

Do not grant access to every private repository to resolve one 403. Identify the exact target and missing permission first.

## Official sources

- [Codex Cloud quickstart](https://learn.chatgpt.com/docs/cloud)
- [GitHub pull-request review](https://learn.chatgpt.com/docs/third-party/github)

---

**Trạng thái:** verified

**Áp dụng cho:** Cloud, GitHub

**Kiểm chứng gần nhất:** 2026-08-26
