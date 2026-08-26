---
title:  Instalar la App de escritorio
description:  Instala y abre la aplicación de escritorio de Codex.
locale: es
source_locale: zh-CN
source_revision: 89d6303
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

In this handbook, “desktop App” means the **Codex workspace in the current ChatGPT desktop App**. Official versions are available for macOS, Windows, and Linux.

## Installation

1. Open the [official ChatGPT desktop App documentation](https://learn.chatgpt.com/docs/app).
2. Download the installer for your operating system from the official entry point.
3. Install and open ChatGPT, then sign in with your ChatGPT account or another available method.
4. Start a chat, create a project, or open a practice folder.
5. Open Codex, create a task, and describe the result you need.

Do not download installers from third-party sites in search results. On managed devices, follow your organization's software distribution and update policy.

## Minimal post-installation check

Prepare a practice directory with no secrets and confirm that:

- the App opens and shows the current account or workspace;
- you can open the directory or add files to a project;
- you can create a Codex task and receive a response;
- file access covers only what the task needs;
- you can locate task results, file changes, and approval controls.

Use this read-only smoke test:

```text
Read this directory without modifying files. Tell me which files it contains,
what kind of project it may be, and which filenames support your conclusion.
```

## Common issues

### The App opens but Codex is missing

Check the current account, workspace, and plan access, then whether the organization disabled the capability. Reinstallation does not bypass account or administrator policy.

### The operating system requests file, accessibility, or app-control access

Decide whether the current task actually requires it. Opening a practice directory does not justify unrelated disk or system access. See [Permissions and sandboxing](/es/guide/permissions-and-sandbox/).

### The interface differs from a screenshot

The App evolves quickly. Define success as being able to sign in, select a work location, start a task, and review its result—not finding a button at a fixed coordinate.

See [Installation and first use](/es/guide/desktop-app/installation-and-interface/) for the interface and [Desktop App troubleshooting](/es/guide/desktop-app/troubleshooting/) for failures.

---

**Status:** verified

**Applies to:** App

**Verification basis:** The current official App quickstart provides macOS, Windows, and Linux downloads and directs signed-in users to choose a chat, project, or folder. This page deliberately avoids volatile button positions and package names.

**Last verified:** 2026-08-26
