---
title: Terminal tích hợp
description: Dùng terminal trong App để phối hợp tác vụ.
locale: vi
source_locale: zh-CN
source_revision: 918b2bf
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 60
reviewed_at: 2026-08-26
---

Every chat in the ChatGPT desktop App has a terminal scoped to the current project or worktree. It is not just a place to view logs. It is also the evidence window you use to verify Codex's conclusions.

Open it from the terminal icon in the upper-right corner of the App, or press `Ctrl` and the backtick key together. ChatGPT can read the current terminal output, so you can ask it to analyze a failed build or a running development server.

## Minimal verification flow

In a JavaScript project, you might run:

```bash
git status --short
pnpm test
pnpm run lint
```

Commands differ between projects. Check `README.md`, `package.json`, or the project rules first. Put the confirmed commands in the prompt:

```text
After the change, run pnpm test and pnpm run lint.
Report the exit status of each command. If either fails, do not claim that
the task is complete.
```

Record at least what ran, whether it exited successfully, the first meaningful error for each failure, and which checks did not run.

## Handling long-running processes

A development server keeps running; that does not mean the command is stuck. After starting it, check:

- whether the output includes a local URL;
- whether the page opens in a browser;
- whether runtime errors subsequently appear in the terminal.

Send an interrupt signal when you need to stop it. Do not start duplicate servers only because no new output has appeared for a while.

## Reusable Actions

If you frequently run the same command, define an Action in the local environment. It becomes a shortcut in the desktop App and runs in the integrated terminal. Actions are suitable for low-risk verification such as `test`, `lint`, and `build`. Do not use them to hide production deployment or database deletion operations.

## Security boundary

- Do not paste production secrets into a chat or terminal history.
- For an unfamiliar command, first ask for its purpose, impact, and rollback approach.
- Do not blindly rerun deletion, migration, or deployment commands in production.
- A command being executable in the terminal does not mean it has business authorization.

The official documentation lists common commands such as `git status`, `git pull --rebase`, tests, and linting. Your project's own documentation remains the final authority for its commands.

## Official sources

- [Integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal)
- [Local environments](https://learn.chatgpt.com/docs/environments/local)

---

**Trạng thái:** verified

**Áp dụng cho:** App

**Kiểm chứng gần nhất:** 2026-08-26
