---
title:  Permisos y Sandbox
description:  Entiende Aprobaciones, aislamiento de ejecución y límites de red para usar Codex con seguridad.
locale: es
source_locale: zh-CN
source_revision: 6b29dc6
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 14
---

Using Codex safely requires two control layers: **the sandbox determines the maximum technical reach, while the approval policy determines whether Codex asks before crossing the current boundary.**

![Codex sandbox and approval flow: an action meets the sandbox boundary, requests human approval when crossing it, and ultimately leaves verification evidence](/diagrams/sandbox-approval-flow-es.svg)

## Remember this distinction

| Control | Question it answers | Typical objects |
|---|---|---|
| Sandbox | What can this action reach at most? | Project files, outside paths, system capabilities, network |
| Approval policy | Must a person be asked before crossing the current boundary? | Installing dependencies, network access, external writes, launching apps |
| Task constraint | What should and should not happen in this task? | Allowed directories, forbidden actions, acceptance commands |
| Human review | Is the executed result acceptable? | Diff, logs, tests, external side effects |

Task constraints do not replace a sandbox, and a sandbox does not replace final review. They respectively control intent, execution boundaries, and acceptance.

## How an action passes through the boundary

When Codex is about to run a command or call a tool:

1. Determine whether the action is inside the current sandbox.
2. If it is, execute it and record output; no prompt is necessarily shown.
3. If it is outside, request permission according to policy or deny it.
4. You may deny it, request a narrower action, or approve only this explicit operation.
5. After execution, inspect the diff, tests, and external-system state to verify the task result.

The sandbox also constrains child processes and commands started by Codex. An action inside a script does not bypass the boundary.

## Local and Cloud boundaries differ

| Environment | Primary isolation | Network | What to inspect |
|---|---|---|---|
| Local App / CLI / IDE task | Operating-system sandbox and current approval policy | Local tasks should not assume internet access; approve or configure it explicitly | Workspace scope, command, outside path, network purpose |
| Cloud task | OpenAI-managed isolated container | Setup can use configured internet; Agent access is off by default unless enabled | Repository, environment, allowed domains, returned diff, verification evidence |

Cloud Secrets are for setup and are removed before the Agent phase. Keep least privilege and do not add unrelated production credentials to a task environment.

## Four checks for an approval request

### 1. Compare with the task

Does this action directly serve the current goal? “It may be useful” is not enough.

### 2. Compare with scope

Does it reach the project, an outside directory, the network, or a system application? Specific paths, domains, and commands are easier to judge.

### 3. Compare side effects

Is it read-only, or will it write files, install software, send data, or change remote state? External side effects deserve more caution than reversible local edits.

### 4. Compare verification and recovery

How will success be verified? Can failure be rolled back? If neither is clear, ask Codex to explain or propose a smaller alternative.

## Example: dependency installation

Suppose Codex requests:

```bash
pnpm install
```

Do not judge only by familiarity. Confirm that:

- the task actually requires missing dependencies;
- the command runs in the correct repository;
- you know which package registry it will contact;
- you know whether it will change the lockfile;
- a test or build will verify the installation.

If the task only verifies existing code and dependencies are already installed, deny the request and ask it to use the current environment first.

## Declare boundaries in the prompt

```text
Modify only src/auth and tests/auth.
Use installed dependencies first; do not access the internet or upgrade versions.
If an outside path or network is necessary, explain the purpose, target, and
smallest operation before requesting it.
Run pnpm test --filter auth and report output and remaining risks.
```

This makes intent explicit, but the actual execution boundary still comes from the sandbox, approval policy, and managed team configuration.

## Common misconceptions

- **An approval prompt always means danger:** normal installation, networking, or outside writes may require approval; necessity and scope are what matter.
- **No prompt means complete safety:** the action may already be within the sandbox, but its result still needs review.
- **One approval grants permanent access:** duration and scope depend on the product and policy; read the request.
- **Subagents have separate permissions:** they inherit the main task's sandbox and permission mode.
- **Hooks replace the sandbox:** Hooks add guardrails and auditing; they do not replace operating-system enforcement.

See [CLI approvals and sandboxing](/es/guide/cli/approvals-and-sandbox/) and [Desktop App settings](/es/guide/desktop-app/settings/) for product settings, and [Constraints and boundaries](/es/prompts/constraints-and-boundaries/) for task wording.

---

**Status:** verified

**Applies to:** App / CLI / IDE / Cloud

**Verification basis:** Compared with current Codex sandbox, approval, and security guidance. This page separates operating-system boundaries, approval policy, task constraints, and human review, and explains the different local and Cloud network models.

**Last verified:** 2026-08-26
