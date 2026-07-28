---
title: Local vs cloud
description: Compare local tasks and Cloud tasks and when to use each.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-07-26
---

“Local” and “cloud” can sound technical. Simply: local means work on your own computer; cloud means work on a remote machine.

If you just want to start using Codex, **local** is usually the easier first choice.

| | Local task | Cloud task |
|---|---|---|
| Where it runs | Your machine / local environment | Cloud environment |
| Best for | Fast iteration, local files, debugging with local secrets | Remote repos, long tasks, standardized environments |
| Watch for | Local permissions and accidental edits | Environment setup, secret injection, network policy |

## How they feel

Roughly:

- **Local task**: you sit at your computer and Codex helps edit the current project
- **Cloud task**: you hand the work to a remote workstation and let it keep running there

The difference is not only location. It also includes:

- Which files are reachable
- Whether it can use software and environments already on your machine
- How long a task can run
- Whether the team needs a shared environment

## Why many beginners start local

Local is easier to understand and easier to inspect.

- You know the files are on your computer
- It is easier to open the project, check results, and fix by hand
- Undo paths are clearer when something goes wrong

For a first run, completing the task loop matters more than going to the cloud immediately.

## Common misconceptions

### 1. Cloud is not automatically more advanced or more “formal”

If the job is editing a local project, looking at local files, and iterating quickly, local is more direct.

### 2. Is local somehow less “professional”?

A lot of real development happens locally. Whether to use cloud depends on the task type, not on how advanced it feels.

### 3. How should I choose?

Use this rule of thumb:

- **Editing an existing project on your computer**: choose local
- **Long-running work, leave-it-running jobs, or remote repo environments**: then consider cloud

## If you are unsure

If you still cannot tell them apart: if it can be done locally, do not rush to the cloud.

Switch to Cloud when you actually need:

- Very long task time
- A shared standardized environment
- Remote repos or remote resources
- Not to occupy your local machine

Many beginners start with **local + desktop App**. Cloud details: [Web and Cloud overview](/guide/web-and-cloud/). Switching in the App: [Local and cloud tasks](/guide/desktop-app/local-and-cloud-tasks/).

Local is better for understanding the flow and making small changes. Cloud is better for longer, more standardized, more remote-collaborative work.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26
