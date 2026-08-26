---
title: Tarefas Cloud no IDE
description: Delegar Tarefas Cloud a partir do IDE, acompanhar o estado e rever o resultado remoto.
locale: pt
source_locale: zh-CN
source_revision: ea8a618
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 60
reviewed_at: 2026-08-26
---


The IDE can keep quick iteration local or connect to Codex web to delegate longer work to Cloud. The entry point remains the editor, but execution environment, repository state, and network boundaries move to the cloud.

## When to delegate

| Keep local | Delegate to Cloud |
|---|---|
| You need rapid back-and-forth with the current selection | The task has many steps or runs for a long time |
| It depends on uncommitted local state | Inputs already exist in a remote repository or can be uploaded |
| It requires a local-only tool | The cloud environment can recreate dependencies and verification |
| You need to control a live local process | You want to continue other work locally |

Cloud does not automatically have your uncommitted local files, credentials, or running processes. State explicitly which repository, branch, and commit the task starts from.

## Delegation checklist

- [ ] Signed in with a ChatGPT account; Codex Cloud does not accept API-key sign-in.
- [ ] GitHub is connected, or the currently supported GitLab Beta integration is in use.
- [ ] The cloud environment can run setup and verification scripts.
- [ ] Required variables and Secrets are configured in the environment, not pasted into the prompt.
- [ ] Uncommitted local changes are handled or explicitly excluded.
- [ ] Goal, allowed paths, exclusions, and acceptance commands are explicit.

## End-to-end example

```text
Goal: Fix the retry module waiting one extra time after reaching its limit.
Starting point: acme/retry-service, branch fix/retry-limit.
Scope: Modify only src/retry.ts and its tests.
Constraints: Do not upgrade dependencies, change the public API, or push to main.
Acceptance: Run pnpm test -- retry and pnpm typecheck; show the diff and command results.
```

Recommended flow:

1. Attach relevant files or selections in the IDE to confirm the boundary.
2. Choose Cloud to continue the longer task.
3. Inspect the plan, progress, and verification results in Cloud.
4. Return to the IDE or web and inspect the reviewable result.
5. Fetch the branch or use a pull request to obtain the change.
6. Rerun tests in a trusted local environment and review manually before merging.

“Complete” in the cloud means remote execution ended. It does not mean the code is ready to merge. Remote dependencies, operating-system behavior, or credentials can differ from local and CI environments.

## Conflicts and security

- Do not let local and cloud runs modify the same file simultaneously.
- Do not paste production credentials into prompts; use environment Secrets.
- Do not treat Cloud internet access as a default capability; configure allowed domains per environment.
- Pushing, opening a PR, and merging are separate actions. Keep a human or CI gate before merging.

Next, read [Cloud environments](/pt/guide/web-and-cloud/cloud-environments/) and [Create pull requests](/pt/guide/web-and-cloud/create-pull-requests/).

## Official sources

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**Status:** verified

**Applies to:** IDE, Cloud

**Last verified:** 2026-08-26
