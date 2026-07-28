---
title: Cloud environments
description: What Codex Cloud remote run environments include, their lifecycle, and team configuration essentials.
locale: vi
source_locale: en
source_revision: a893a77
translation_status: fallback
translated_at: '2026-07-28'
---

A **Cloud environment** is the worker machine Codex uses when running tasks remotely.

It directly affects outcomes—including the OS, language versions, toolchain, network policy, and which repository branch is checked out. This page mainly answers a common question:

> **Why does it work locally but fail in Cloud?**

## What's covered

- How Cloud environments differ from your local dev machine
- How environments bind to GitHub repos and branches
- How teams maintain reproducible Cloud configuration

## Start with these three points

Keep these in mind first:

- Cloud does not "read everything on your current computer"—it only sees what exists in the remote environment
- Cloud tasks still face real-world constraints: dependencies, version mismatches, and whether the network can reach what they need
- Anything you have not committed or pushed locally is invisible to Cloud by default

Think of Cloud as switching to a different machine to do the work.

## Core concepts

```text
GitHub repo (a branch)
        ↓ clone / checkout
Cloud environment instance (container or VM—product-dependent)
        ↓
Agent runs the task: install deps, change code, test, push
```

Use together with [Connect GitHub](/guide/web-and-cloud/connect-github/); the environment **cannot** access unpushed commits on your laptop.

## Local vs Cloud

- **Local tasks**: Codex works around your current machine, in front of you
- **Cloud tasks**: Codex runs on a remote machine you delegate to

That gap is a common source of confusion when you first use Cloud:

- "Why can't it see the file I just changed locally?"
- "Why doesn't it have that globally installed tool on my machine?"
- "Why can't it reach the database I run locally?"

Most of the time, **that remote machine simply does not have those things**—the issue is the environment itself.

## What an environment includes (conceptual)

| Component | Description |
|---|---|
| Base image | OS, common build tools |
| Runtime | Node, Python, Go, etc. (depends on image and task) |
| Working directory | Path to the cloned repo |
| Network policy | Whether outbound access is allowed and which domains |
| Credential injection | [Secrets and variables](/guide/web-and-cloud/secrets-and-variables/) |

For concrete image lists and customization, see [official Cloud documentation](https://developers.openai.com/codex).

## Common misconceptions

### 1. Assuming Cloud automatically inherits your local environment

It does not.

Node, Python, Homebrew, Chrome, or database clients on your machine do not appear in Cloud just because they exist locally.

### 2. Assuming pushing the repo means everything is ready

Repository code is only the starting point. Whether a task succeeds also depends on:

- How dependencies are installed
- What commands start or test the project
- Which Secrets are required
- Whether network policy allows access to external resources

### 3. Assuming Cloud failure means Codex cannot do the task

Many Cloud failures are misconfigured environments, not inability to complete the work.

A sensible troubleshooting order:

1. Is the repo and branch correct?
2. Are dependencies and runtime versions correct?
3. Are Secrets and network access available?
4. Is the task prompt clear enough?

## Recommended setup flow

1. Complete your first Cloud task in a **test repo** and record dependency install commands
2. Put repeatable steps in repo docs (`README`, `AGENTS.md`, or official environment config files)
3. Configure [Secrets](/guide/web-and-cloud/secrets-and-variables/) (private registry, API keys)
4. Confirm [internet access](/guide/web-and-cloud/internet-access/) policy meets security requirements
5. Validate the issue → PR loop with the same environment template

## When Cloud is a good fit

Use this framing:

- Changing a project on your machine and wanting immediate feedback: start local
- Long-running tasks, a shared team environment, or remote GitHub workflows: use Cloud

If your local workflow is not smooth yet, do not rush to turn every problem into a "Cloud configuration problem."

## Aligning with local

Avoid "green locally, red in Cloud":

| Practice | Why |
|---|---|
| Pin dependency versions (lockfile) | Reproducible installs |
| Document install and test commands in `AGENTS.md` | Agent does not guess |
| Keep Node/Python versions close between CI and Cloud | Less version drift |
| Use Git LFS or build-time downloads for large files | Controlled clone size |

## Lifecycle

A typical Cloud task:

1. **Create or reuse** an environment instance
2. **Prepare**: clone, checkout branch, install dependencies
3. **Execute**: Agent changes code, runs commands
4. **Output**: branch push, PR, log artifacts
5. **Destroy or recycle** (policy varies by product)

For long tasks, follow up via [desktop App notifications](/guide/desktop-app/notifications/) or mobile.

## Common mistakes

- Assuming Cloud pre-installs your entire private monorepo toolchain
- Depending on `localhost` services (database, mock API) without providing them in the environment
- Running unbounded tasks on a production repo on the first try
- Misreading an environment problem as a model capability problem

## Security boundaries

- Treat the environment as **semi-trusted**: still require code review and branch protection
- Inject production database connection strings only via Secrets, never in prompts
- Periodically clean up unused environment templates and Secrets

## References

- OpenAI Codex Cloud environments
- stormzhang `10-cloud.md`
- KimYx0207 CX-10, CX-11

---

**Status:** outdated  
**Applicable products:** Cloud  
**Review note:** This page covers environment instance shape, lifecycle, templates, and GitHub branch binding—details we cannot fully confirm against strong current official documentation; it should not be marked `verified` until formal Cloud environment docs are available.  
**Last verified:** 2026-07-26
