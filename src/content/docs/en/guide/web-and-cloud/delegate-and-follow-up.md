---
title: Delegate and follow up
description: Start an independently runnable Cloud task and use the same chat to correct direction and acceptance results.
locale: en
source_locale: zh-CN
source_revision: 681ea7d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Delegation does not mean throwing a problem over the wall. It means giving an independent Cloud chat the goal, constraints, environment, and completion standard. The task can run in the background while you inspect logs, add context, request changes, and finally review the diff.

## When delegation fits

- Builds or tests take a long time.
- Inputs are already in a remote repository.
- Scripts can recreate the environment.
- Work can progress independently of your current task.
- You will review the result instead of merging it directly.

Keep tasks local when they depend on uncommitted local state, a local service, or continuous human interaction.

## Complete delegation prompt

```text
Goal: Fix issue #42, where a sign-in request still holds a connection after 30 seconds.
Starting point: branch fix/42-timeout in acme/api.
Scope: packages/auth/** and the corresponding tests.
Do not: upgrade dependencies, change the public API, or push to main.
Verification: pnpm test --filter auth; pnpm typecheck.
Completion: show the root cause, diff, commands, and exit results. Do not merge.
```

After starting, confirm the environment and branch. Follow up only when a premise is missing or the run is drifting:

```text
Additional constraint: Do not change the global HTTP client. Keep the fix in the
auth adapter. Explain how this changes the current approach before continuing.
```

Use the same chat to correct the same goal because it retains context. Start a new chat for an independent goal. Parallel tasks must not write the same branch or file set.

## After the result arrives

1. Read the summary and complete diff.
2. Compare changed paths with the allowed scope.
3. Inspect actual output for each verification command.
4. Ask for explanations of failures or skipped checks.
5. Give a specific follow-up in the same chat when needed.
6. Once criteria pass, create a PR and hand control to CI and human review.

Cloud work can start from Web, IDE, GitHub, GitLab (Beta), Linear, or Slack. The official Cloud page also describes starting and reviewing work from Codex CLI. The repository, environment, network, and review boundaries remain the same across entry points.

## Follow up on failures

Do not say only “try again.” Include evidence and the next decision:

```text
The test fails at retry.test.ts:48. Explain whether this change caused it.
If so, fix only that regression and rerun the auth tests. Otherwise, preserve
the failure and record it explicitly.
```

## Official sources

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Long-running work](https://learn.chatgpt.com/docs/long-running-work)

---

**Status:** verified

**Applies to:** Cloud, App, IDE, CLI

**Last verified:** 2026-08-26
