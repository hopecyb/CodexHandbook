---
title: Developer Platform
description: Embed Codex into your engineering stack with SDK, non-interactive CLI, and CI/CD—for integration developers.
sidebar:
  order: 50
locale: en
source_locale: zh-CN
source_revision: 2e1e79b
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

The **Developer Platform** is for people who want to **productize** Codex into pipelines: custom apps, batch review, release gates, internal developer portals. For everyday “write a prompt to fix a bug,” start with [Getting started](/en/guide/getting-started/).

This chapter is not about day-to-day Codex usage—it is about wiring Codex into your own systems.

It is aimed at scenarios like:

- Running tasks automatically in CI
- Integrating Codex into your backend or internal tools
- Making Codex part of team workflows

## What this chapter covers

- The boundary between the developer platform and end-user product docs
- Typical integration architecture
- Chapter navigation and roadmap

## How this relates to product docs

| Reader question | Where to go |
|---|---|
| How to run `codex` in the terminal | [CLI product guide](/en/guide/cli/) |
| How to exec review in CI | [Non-interactive mode](/en/guide/cli/non-interactive-mode/) + CI in this chapter |
| How to embed an Agent in your app | [SDK overview](/en/guide/developer-platform/sdk-overview/) |
| Permissions and security model | [Human approval patterns](/en/cases/workflows/human-approval-patterns/) |

## Typical architecture (conceptual)

```text
Your system (CI / internal platform / SaaS)
        ↓ API or CLI
Codex (model + tools + policy)
        ↓
Git provider / tickets / artifact store
```

## Design principles

1. **Idempotent and retryable**: repeated review of the same PR should yield comparable results
2. **Least privilege**: CI tokens read-only or scoped to specific repos
3. **Observable**: retain prompt version, model, diff artifacts
4. **Human-in-the-loop**: auto comments ≠ auto merge

## Chapter navigation

| Topic | Pages |
|---|---|
| SDK | [SDK overview](/en/guide/developer-platform/sdk-overview/) |
| Non-interactive | [codex exec](/en/guide/developer-platform/non-interactive/codex-exec/) · [Scripts and pipelines](/en/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [Structured output](/en/guide/developer-platform/non-interactive/structured-output/) · [Exit codes and retries](/en/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [Overview](/en/guide/developer-platform/webhooks/overview/) |
| CI/CD | [Code review automation](/en/guide/developer-platform/ci-cd/code-review-automation/) |

For more on `codex-sdk/`, `app-server/`, and `architecture-patterns/`, see the [chapter outline](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md).

## Common misconceptions

### 1. Do I have to learn this chapter to really use Codex?

If you mainly want to get started with Codex first, you can read this chapter later.

### 2. How does this relate to CLI / App / IDE?

Think of it this way:

- **App / CLI / IDE**: entry points where you or your team use Codex directly
- **Developer platform**: embedding Codex into other systems and workflows

### 3. What is most valuable to read first in this chapter?

If you only want a conceptual overview, start with [SDK overview](/en/guide/developer-platform/sdk-overview/) and how it relates to [non-interactive mode](/en/guide/cli/non-interactive-mode/).

The developer platform chapter is about wiring Codex into systems. For your first hands-on use of Codex, read the getting-started content first.

## Reference sources
- OpenAI Codex API / SDK official documentation
---

**Status:** verified  
**Products:** API / CLI / Cloud  
**Verification basis:** Cross-checked against the current developer-platform chapter structure, navigation entries, and related CLI/CI/SDK pages in this repo; this page only describes the stable split that the developer platform targets engineering integration, without claiming specific parameters or runtime behavior.  
**Last verified:** 2026-07-26
