---
title: Connect GitHub
description: Connecting Codex Cloud to GitHub repos—permissions, branches, and environments.
locale: pt
source_locale: en
source_revision: 610e94e
translation_status: fallback
translated_at: '2026-07-28'
---

After you connect GitHub, Codex can clone repos, create branches, push, and open PRs in a **remote environment**—the prerequisite for Cloud workflows.

## What's covered

- Why connection is needed and which permissions to grant
- Pre- and post-connection checklists
- How this differs from local desktop tasks

## Relationship diagram

```text
Your GitHub repository
    ↕ (OAuth / GitHub App—product-dependent)
Codex Cloud environment
    ↕
Cloud tasks you start in Web/App
```

The local [desktop App](/guide/desktop-app/) can still edit your machine's clone directly; Cloud fits **standardized environments, running while away from your desk, and mobile approvals**. See [local vs cloud](/guide/foundations/local-vs-cloud/).

## Common misconceptions

### 1. I already have the repo locally—why connect GitHub again?

Cloud tasks see the remote repository, not your local copy.

### 2. Once connected, can Codex see all my local changes?

Unpushed local changes are usually invisible to Cloud.  
That is a frequent point of confusion.

### 3. What matters most when connecting?

Confirm first:

- Whether repo scope is too broad
- How branch protection is set
- Whether secrets are stored in Cloud's secure configuration, not in the repo

After connection, Cloud sees the remote repo—not unpushed state on your laptop.

## Pre-connection checklist

- [ ] You have push access to the target repo (or use a fork strategy if you only need PRs)
- [ ] Branch protection is understood: is direct push to main blocked?
- [ ] Secrets are not in the repo; Cloud uses [Secrets configuration](/guide/web-and-cloud/secrets-and-variables/)
- [ ] Your organization allows third-party GitHub integrations

## Recommended steps (conceptual)

1. Open **GitHub connection** in Codex Web/Cloud settings
2. Choose organization and repo scope (**minimize the repo list**)
3. Read OAuth permission text: usually read code and open PRs; write access depends on the task
4. Run a small Cloud task on a test repo to validate
5. After success, set default branch and environment variables if needed

Exact UI and buttons depend on the current product.

## Permissions and security

| Practice | Why |
|---|---|
| Use a dedicated machine user or bot account (teams) | Audit trail and offboarding |
| Do not authorize all private repos | Smaller blast radius |
| Enable branch protection + required review | Cloud output still passes human review |
| Periodically audit connected repos | Disconnect retired projects |

## Common tasks after connection

- Implement an issue remotely → [Create Pull Request](/guide/web-and-cloud/create-pull-requests/)
- PR review and follow-up → [GitHub](/guide/integrations/github/) integration
- Combine with [Automations](/skills/automations/scheduled-tasks/)

## Common mistakes

- Connecting a personal GitHub account to production org repos with personal policies
- Assuming Cloud can access unpushed commits on your machine
- Running unbounded tasks on a large monorepo on the first try

## References

- OpenAI Codex Cloud / GitHub integration docs
- KimYx0207 CX-10, CX-11
- stormzhang `26-git-github.md`, `10-cloud.md`

---

**Status:** outdated  
**Applicable products:** Cloud / Web  
**Review note:** This page depends on current GitHub connection flows, authorization models, repo scope settings, and Cloud UI entry points—high-churn integration details that need current official connection docs before returning to `verified`.  
**Last verified:** 2026-07-26
