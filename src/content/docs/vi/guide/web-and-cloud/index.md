---
title: Web and Cloud (overview)
description: Entry navigation for Cloud tasks, environments, Secrets, and PR review.
sidebar:
  order: 13
locale: vi
source_locale: en
source_revision: 73d5ce7
translation_status: fallback
translated_at: '2026-07-28'
---

Cloud fits running tasks in a **standardized remote environment**, connecting GitHub, and producing PRs. Start with [local vs cloud](/guide/foundations/local-vs-cloud/) and read [official Cloud documentation](https://developers.openai.com/codex).

Tasks do not run on your laptop—they continue in a remote environment.

Typical scenarios:

- Long-running tasks
- You do not want to babysit your machine
- You need remote repo and PR workflows directly

Cloud is not always the first thing you touch, but once you work with remote repos, PRs, and async long tasks, you will likely use it.

## Section navigation

| Phase | Page |
|---|---|
| Connect | [Connect GitHub](/guide/web-and-cloud/connect-github/) |
| Environment | [Cloud environments](/guide/web-and-cloud/cloud-environments/) |
| Credentials | [Secrets and environment variables](/guide/web-and-cloud/secrets-and-variables/) |
| Output | [Create Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Quality | [Cloud code review](/guide/web-and-cloud/code-review/) |
| Collaboration | [Delegate and follow up](/guide/web-and-cloud/delegate-and-follow-up/) |
| Network | [Internet access](/guide/web-and-cloud/internet-access/) |
| Troubleshooting | [Cloud troubleshooting](/guide/web-and-cloud/troubleshooting/) |
| Integration | [GitHub integration](/guide/integrations/github/) |

Start Cloud tasks from the desktop App: [Local and Cloud tasks](/guide/desktop-app/local-and-cloud-tasks/). Delegate from IDE: [IDE Cloud tasks](/guide/ide/cloud-task-workflow/).

## Suggested reading order

On first contact with Cloud:

1. [Connect GitHub](/guide/web-and-cloud/connect-github/)
2. [Secrets and environment variables](/guide/web-and-cloud/secrets-and-variables/)
3. PR, code review, and collaboration flows

Understanding how it connects to repos, permissions, and secrets saves effort before diving into automation.

Cloud is for remote repo work that continues after you leave your machine—not simply "local workflow in a browser."

---

**Status:** outdated  
**Applicable products:** Cloud  
**Review note:** This navigation page still has structural value, but it depends on high-churn capabilities—GitHub connection, Secrets, PRs, mobile follow-up, network access; mark `outdated` until each subpage is aligned with current official Cloud docs.  
**Last verified:** 2026-07-26
