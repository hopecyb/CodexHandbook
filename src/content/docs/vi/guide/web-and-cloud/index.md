---
title: Web và Cloud (tổng quan)
description: "Điều hướng lối vào cho Tác vụ Cloud, môi trường, Secrets và review PR."
sidebar:
  order: 13
locale: vi
source_locale: zh-CN
source_revision: 5861c62
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Codex Cloud runs coding tasks in isolated cloud environments. It is useful for long background tasks, parallel attempts, and work started from GitHub, GitLab (Beta), Linear, or Slack. It does not remotely control your computer or automatically see local unpushed files.

## Cloud task lifecycle

```text
Sign in with ChatGPT
  → connect GitHub / GitLab
  → create a repository environment
  → check out the selected branch or commit
  → run the setup script to install dependencies
  → let the Agent modify and verify within the network policy
  → inspect the summary, logs, and diff
  → follow up or create a PR
  → merge after human review and CI
```

Cloud provides isolation, reproducibility, and parallelism. It does not remove review.

## Local or Cloud

| Choose local | Choose Cloud |
|---|---|
| Work depends on uncommitted files or local services | Inputs are in a remote repository |
| You must interact with a process in real time | The task can run independently in the background |
| The change is small and fast | Work requires multiple build/test steps or parallel attempts |
| A required tool exists only on this computer | Scripts can recreate the environment |

Read [Local and cloud execution](/vi/guide/foundations/local-vs-cloud/) before choosing.

## Recommended learning order

1. [Connect GitHub](/vi/guide/web-and-cloud/connect-github/): authorize only required repositories.
2. [Cloud environments](/vi/guide/web-and-cloud/cloud-environments/): pin tools, versions, and setup.
3. [Secrets and environment variables](/vi/guide/web-and-cloud/secrets-and-variables/): separate setup-only Secrets from ordinary variables.
4. [Internet access](/vi/guide/web-and-cloud/internet-access/): Agent access is off by default; open only required domains and methods.
5. [Delegate and follow up](/vi/guide/web-and-cloud/delegate-and-follow-up/): send goals, constraints, and acceptance criteria.
6. [Create pull requests](/vi/guide/web-and-cloud/create-pull-requests/) and [Code review](/vi/guide/web-and-cloud/code-review/): turn a result into a mergeable deliverable.
7. [Cloud troubleshooting](/vi/guide/web-and-cloud/troubleshooting/): diagnose repository, setup, network, and task layers.

When starting from the desktop App or IDE, also read [Local and cloud tasks](/vi/guide/desktop-app/local-and-cloud-tasks/) or [Cloud tasks from the IDE](/vi/guide/ide/cloud-task-workflow/).

## First exercise

Use a test repository with no production credentials. Ask Codex only to fix documentation links and run the link checker. Success means the environment starts, the diff contains only expected files, command output is visible, and the result can become a PR. A page showing “complete” is not sufficient acceptance evidence.

## Official sources

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Trạng thái:** verified

**Áp dụng cho:** Cloud

**Kiểm chứng gần nhất:** 2026-08-26
