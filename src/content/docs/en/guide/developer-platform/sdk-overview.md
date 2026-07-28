---
title: SDK Overview
description: Start Codex tasks from your application via the official SDK—authentication, sessions, and error-handling concepts.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

The SDK (name and language per [official docs](https://developers.openai.com/codex)) lets you create tasks, poll status, and fetch results from **your own service**, not only via the terminal TUI.

If “SDK” is new to you, think of it as a development toolkit for programs to call Codex—not a UI you click through.

In other words, it fits when **your system calls Codex**. For one-off tasks, you usually do not need the SDK yet.

## What this page covers

- When to use the SDK vs CLI `exec`
- Authentication and tenant isolation
- How to pair with webhooks and queues

Platform overview: [Developer platform](/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| Integration point | Backend services, internal tools | Shell, GitHub Actions |
| State management | Your code owns it | Process exit code |
| Best for | Multi-tenant products, custom UI | Simple pipelines |

Many teams use **CLI in CI, SDK in product**.

## Common misconceptions

### 1. What is the difference between SDK and CLI?

Roughly:

- **CLI**: humans or scripts call from the terminal
- **SDK**: you write code to embed Codex in your service

### 2. Should I learn the SDK first?

Usually not.

If you mainly want to learn Codex, local entry points and interactive CLI are usually a better first step.

### 3. When is the SDK worth it?

When you start hitting needs like:

- Triggering Codex tasks from your product
- Managing task state and results yourself
- Building custom UI, permissions, and workflows

The SDK fits “connecting systems programmatically,” not as the main entry for first-time Codex users.

## Core concepts (language-agnostic)

1. **Authentication**: org API key or OAuth delegation—follow least scope
2. **Task / thread**: one user request maps to a traceable ID
3. **Tool policy**: server-side sandbox and approval aligned with clients
4. **Results**: message history, file diffs, artifact URLs (per API)
5. **Errors**: distinguish retryable (429) from non-retryable (400)

Error index: [Error reference](/guide/reference/error-reference/)

## Minimal integration checklist

- [ ] Trial on staging with a read-only repo
- [ ] Log redaction; do not log full user prompts if they contain PII
- [ ] Timeout and cancel: abort when the user leaves the page
- [ ] Pin SDK and model IDs

## Connecting to CI/CD

The SDK can trigger Cloud or remote runners, or CI can callback your service to update PR status. Example patterns: [Code review automation](/guide/developer-platform/ci-cd/code-review-automation/).

## Common mistakes

- Using browser session cookies as API keys
- No concurrency limits, spiking quota under load
- Auto-merging PRs produced by the SDK

## Reference sources
- OpenAI Codex SDK reference
---

**Status:** verified  
**Products:** API  
**Verification basis:** Cross-checked against OpenAI Developers’ current public Codex API/model and developer-platform use cases, plus verified developer-platform overview, CI/CD, and non-interactive chapters in this handbook; this page only confirms the stable split that the SDK fits programmatic integration, state management, and custom UI.  
**Last verified:** 2026-07-26
