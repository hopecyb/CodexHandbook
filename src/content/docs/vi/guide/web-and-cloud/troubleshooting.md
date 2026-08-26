---
title: Xử lý sự cố Cloud
description: "Chỉ mục triệu chứng cho kết nối GitHub, môi trường, Secrets, truy cập đi ra và vấn đề PR."
locale: vi
source_locale: zh-CN
source_revision: 4ba9a4d
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 80
reviewed_at: 2026-08-26
---

A Cloud retry consumes more time but does not add missing permissions, dependencies, or network configuration. Identify the failing stage first.

## Five-layer triage

| Stage | Common symptom | First check |
|---|---|---|
| Repository connection | Repository missing, 403, branch missing | GitHub authorization scope, organization policy, starting branch |
| Container/setup | `command not found`, dependency installation failure | Pinned runtime, setup script, Secret |
| Agent network | Setup downloads successfully, Agent `curl` fails | Agent access defaults to Off, allowlist, HTTP methods |
| Agent execution | Wrong-scope edits, test command missing | Prompt scope, `AGENTS.md`, work log |
| Delivery | Incomplete diff, unable to open a PR | Branch state, write access, protection rules |

## Preserve evidence first

Record repository, starting commit, environment name, failure stage, first meaningful error, and complete command. Do not keep only “exit 1.”

```text
Environment: api-node22
Starting point: main@abc123
Stage: setup
Command: pnpm install --frozen-lockfile
First error: ERR_PNPM_FETCH_401 ...
Local difference: local uses ~/.npmrc; Cloud has no NPM_TOKEN configured
```

This record points to a repair instead of forcing the next run to guess again.

## Frequent failures

### Setup sees a Secret but the Agent does not

This is intentional: Secrets are removed before the Agent phase. Put credential-dependent installation in setup. Do not convert the value to an ordinary environment variable to bypass the protection.

### Setup has internet but the Agent does not

This is also the default. If the task truly requires Agent internet access, enable it for the environment, constrain domains and methods, and inspect the logs.

### Cached dependencies are stale

Changing setup, maintenance, variables, or Secrets invalidates the cache automatically. When repository changes make a cache incompatible, use **Reset cache** on the environment page. For a shared team environment, assess the impact on other users first.

### Local is green but Cloud is red

Compare Node/Python versions, lockfiles, system dependencies, hidden local configuration, VPN or localhost services, and case-sensitive paths. Turn differences into explicit setup and repository rules.

### PR review did not run

Confirm Cloud configuration for the repository, enabled Code review, the exact `@codex review` comment, and GitHub integration permissions. Automatic reviews must also be enabled separately.

## When to return local

If a problem depends on a local service, or two consecutive runs are repairing the environment rather than business code, reproduce it locally first. Add the successful commands, versions, and tests to `AGENTS.md` or setup before delegating again.

## Acceptance after repair

- [ ] The same environment runs repeatedly from a clean starting point.
- [ ] The fix did not hide the problem with broader repository access or unrestricted network access.
- [ ] Logs do not expose a Secret.
- [ ] A person still reviews the result diff and tests.

## Official sources

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**Trạng thái:** verified

**Áp dụng cho:** Cloud

**Kiểm chứng gần nhất:** 2026-08-26
