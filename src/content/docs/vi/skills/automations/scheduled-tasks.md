---
title: Tác vụ hẹn giờ và nền
description: Automations — chạy Codex không người trực dưới điều kiện kích hoạt; phải thiết kế Phê duyệt và điều kiện thoát.
locale: vi
source_locale: zh-CN
source_revision: 7b79596
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

The hard part is not choosing a time. It is making every unattended run use stable inputs, narrow permissions, reviewable output, and stop conditions.

![Safety loop from manual verification to scheduling, human review, and adjustment](/diagrams/scheduled-task-safety-loop-vi.svg)

## Who it is for

- Individuals producing daily or weekly reports, checking docs, or following PRs.
- Developers running maintenance against a local project or isolated worktree.
- Maintainers reviewing permissions, failure handling, and shared Skills.

## Support boundaries

| Surface | Capability | Constraint |
|---|---|---|
| ChatGPT Web | Create, manage, inspect runs; use uploads, connected tools, Skills, Plugins | Cannot directly access local folders |
| ChatGPT desktop App | Create and manage; select local project or Git worktree | Computer awake, App running, project present |
| Codex CLI | Prepare and manually test prompts, Skills, scripts | No Scheduled management UI |
| IDE integration | Verify commands and edits in workspace | No Scheduled management UI |

## 1. Standalone or in-chat

### Standalone Scheduled task

Each run starts from the saved prompt and appears separately in Scheduled. Use for independent reports and health checks; one task may cover several projects.

### In-chat Scheduled task

Return to one chat on schedule and retain context. Use for polling long work, following a PR, or continuing research.

Choose standalone when each run should restart; choose in-chat when one question needs continuity.

## 2. Choose material

### Web

Put durable instructions in the prompt or Skill and provide uploads, a Project, or connected services. “Read latest.csv from my desktop” cannot work on Web.

### Local project in the desktop App

For a Git repository:

- **Local project:** work in the primary checkout, potentially touching open edits.
- **Dedicated worktree:** isolate background edits from unfinished work.

Non-Git projects run directly in their directory. Archive unneeded high-frequency runs so worktrees do not accumulate.

## 3. Verify manually first

Run the identical prompt, model, reasoning effort, and tools in a normal chat. Confirm:

- inputs remain clear without live explanation;
- no-change exits quietly;
- output is quickly reviewable;
- commands, Skills, and connected tools work;
- missing access or material causes an explicit stop, not guessing.

Inspect the first scheduled runs before changing prompt or frequency.

## 4. Reusable task prompt

```text
Create a standalone Scheduled task:

Name: Weekly documentation broken-link check
Time: Monday 09:00 in the current timezone
Location: dedicated worktree for the current Git project

Every run:
1. Read only docs/, src/content/docs/, examples/, and public/diagrams/.
2. Run pnpm check:links.
3. If it passes, report file and link counts; do not edit.
4. If it fails, list source file, broken target, and suggested fix; do not fix.
5. No internet, installs, commit, push, or PR.
6. If command/dependency is missing or result uncertain, stop and name the
   exact item requiring human attention.

Completion: end after one reviewable report; do not retry.
```

This defines time, project, read scope, command, branches, prohibitions, and stop condition. Scheduling only retriggers the task; it does not replace its specification.

## 5. Permissions and review

Scheduled tasks run unattended with default sandbox settings.

| Sandbox | Common result |
|---|---|
| read-only | File edits, network, and local App control fail |
| workspace-write | Workspace writes work; outside writes, network, and App control fail by default |

Start with the narrowest mode that works. Add explicit allowlists rather than granting broad access after one failure.

Keep human review for:

- sending or publishing externally;
- production-state changes;
- merging PRs or pushing main;
- bulk deletion, migration, or permission changes;
- unexpected diffs or failed tests.

## 6. No-change, failure, and stop

A durable task defines:

1. **Finding:** evidence, severity, next step.
2. **No change:** concise scope report without invented issues.
3. **Unable:** missing material or access, then stop for a person.

For in-chat polling, add termination such as PR merged/closed, three identical failures, or approval required.

## Scheduled is not event-driven CI

Use GitHub Actions, CI, webhooks, or Codex SDK when execution must follow a push, PR, or release event immediately. Minute-by-minute polling is not precise event triggering.

## Acceptance checklist

- [ ] Prompt passed completely in a normal chat.
- [ ] Standalone or in-chat mode selected.
- [ ] Web material or local project is available at runtime.
- [ ] Default sandbox suffices, or extra access has a reason.
- [ ] Finding, no-change, failure, and stop paths are explicit.
- [ ] First three runs received human sampling.
- [ ] Frequent worktrees have archive and cleanup policy.
- [ ] Critical writes retain human confirmation.

## Official sources

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI: Sandboxing](https://learn.chatgpt.com/docs/permissions/sandboxing)

---

**Trạng thái:** verified

**Áp dụng cho:** ChatGPT Web / desktop App; CLI and IDE prepare and test

**Kiểm chứng gần nhất:** 2026-08-26
