---
title: Automations
description: Hẹn giờ, sự kiện và chạy nền — nói gì phù hợp tự động hóa, gì phải đối chiếu lại thủ công.
locale: vi
source_locale: zh-CN
source_revision: f32c13f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

A Scheduled task lets ChatGPT repeat work in the background on a schedule. It fits periodic reports, ongoing follow-up, and recurring maintenance. It is not a general webhook, repository event, or CI system.

## Decide whether it fits

| Suitable | Unsuitable |
|---|---|
| Stable input sources and reviewable output | The problem must be redefined on every run |
| Driven by time or interval | Must trigger exactly on Git push or PR creation |
| Read-only checks, summaries, and drafts | Unattended main-branch merges or bulk deletion |
| Explicit no-change and stop conditions | Infinite retry after failure |

## Current management surfaces

- Create and manage Scheduled tasks in ChatGPT Web or the desktop App.
- Codex CLI and IDE have no Scheduled management UI; use them to test prompts, Skills, or scripts first.
- The desktop App can run a task against a local project or isolated worktree, but the computer must be awake, the App running, and the project still on disk.
- A Web task can use uploaded context, connected tools, Skills, and Plugins, but cannot read a local folder directly.

## In this section

- [Complete Scheduled tasks guide](/vi/skills/automations/scheduled-tasks/): choose an execution mode, write a durable prompt, and define permissions and acceptance

## Official source

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**Trạng thái:** verified

**Áp dụng cho:** ChatGPT Web / desktop App; CLI and IDE prepare and test tasks but have no management UI

**Kiểm chứng gần nhất:** 2026-08-26
