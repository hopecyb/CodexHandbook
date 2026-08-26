---
title: Chế độ không tương tác
description: Tích hợp bằng codex exec và pipeline script — phù hợp CI, tác vụ định kỳ và pipeline tự động.
locale: vi
source_locale: zh-CN
source_revision: a1cefbe
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 30
reviewed_at: 2026-08-26
---

Non-interactive mode lets Codex complete a task **without a TTY conversation**. It is the developer entry point for scripts and CI.

Instead of a back-and-forth chat, you submit the entire task for one command-style run.

## What this page covers

- When to use non-interactive execution instead of an interactive `codex` session.
- Additional safety and approval requirements for unattended work.
- Its relationship to [configuration](/vi/guide/cli/configuration/).

## Suitable tasks

| Suitable | Unsuitable |
|---|---|
| Fixed review prompt in CI | Requirements need multiple clarification rounds |
| Nightly documentation link check | Exploratory refactoring |
| Code generation from a predefined template | Ambiguous product decisions |

## Core model

A non-interactive run normally:

1. receives a **complete task description** from arguments or stdin;
2. runs in a specified working directory;
3. reports process success or failure through an exit code;
4. emits logs or structured output for downstream consumers.

The current entry point is `codex exec`. After an upgrade, rerun `codex exec --help` to verify every flag used by scripts.

## Minimal working example

```bash
# Run one read-only review at the repository root
codex exec --cd . "List security risks in the diff against main; do not modify files"
```

`codex exec` uses a read-only sandbox by default. Progress is written to `stderr`, while the final Agent response goes to `stdout`, so you can redirect only the final result:

```bash
codex exec --cd . "Write release notes for the last 10 commits" > release-notes.md
```

Practical guidance:

- In a shell script, `cd` to a clean worktree first.
- Put the task in a heredoc or versioned `prompts/` file.
- Capture the exit code and fail CI when the process fails.

## Safety design

Unattended means **you are not present to deny an action**:

| Principle | Implementation |
|---|---|
| Least privilege | Read-only token and constrained sandbox |
| No push | CI opens a PR or uploads an artifact |
| Fixed prompt | Do not concatenate unsanitized PR text directly into the prompt |
| Audit | Preserve logs and diff artifacts |

See [Human approval patterns](/vi/cases/workflows/human-approval-patterns/) and the `08-developer-platform/non-interactive/` roadmap section.

## Interactive comparison

| | Interactive | Non-interactive |
|---|---|---|
| Entry | `codex` TUI | `exec` / pipeline |
| Human in the loop | Strong | Weak; design beforehand |
| Good for learning | Yes | No |
| Good for CI | No | Yes |

See [CLI interactive mode](/vi/guide/cli/interactive-mode/).

## Convert an interactive task

Do not paste a whole chat history into a script. Compress it into a small specification:

| Element | What to state |
|---|---|
| Goal | The single outcome |
| Input | Files, diff, logs, or stdin to read |
| Prohibitions | No edits, internet, push, or CI interruption |
| Output | Text summary, JSON, report file, or exit result |
| Acceptance | Commands that must pass and strings that must not appear |

A non-interactive prompt should read like a work order: clear boundary, complete input, explicit failure conditions. Keep tasks that still require product judgment, design tradeoffs, or permission decisions interactive.

## Common misconceptions

### 1. It is more efficient, so should beginners learn it first?

No. It runs quickly with little room for clarification.

### 2. What is the main difference?

- **Interactive:** ask, adjust, and approve during the run.
- **Non-interactive:** execute once from a predefined specification.

### 3. When should I avoid it?

Wait if you:

- are still learning to write a task;
- do not know how to accept the result;
- lack a basic model of approvals, sandboxing, and permissions.

Use non-interactive mode for automation after interactive workflows are familiar.

## Common mistakes

- Pasting an interactive session's full history into one exec call.
- Giving CI production credentials and write access.
- Leaving the CLI version unpinned so pipeline behavior changes unexpectedly.

## Reference

- OpenAI Codex CLI documentation

---

**Trạng thái:** verified

**Áp dụng cho:** CLI

**Căn cứ kiểm chứng:** Compared with current Non-interactive mode documentation for `codex exec`, `--cd`, the default read-only sandbox, `stderr` progress, and `stdout` final response.

**Kiểm chứng gần nhất:** 2026-08-26
