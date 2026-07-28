---
title: Permissions and sandbox
description: Understanding approvals, execution isolation, and network boundaries for safe Codex use.
sidebar:
  order: 14
locale: es
source_locale: en
source_revision: '8321753'
translation_status: fallback
translated_at: '2026-07-28'
---

# Permissions and sandbox

Codex should not perform high-risk actions without consent. **Approvals** are the key gate in human–agent collaboration; **sandbox** limits what filesystem and system capabilities the Agent can reach.

## What's covered

Many people treat permissions, approvals, sandbox, and network access as the same "security settings."

The risky confusion: you think you only allowed it to continue—but you may have opened file writes, shell, or outbound network at once.

This page separates the concepts so you know what each confirmation actually releases.

## Separate the concepts

Think of them as:

- **Approval**: whether it must ask you first
- **Sandbox**: even if allowed, what it can touch at most
- **Network access**: whether information can leave or be pulled from outside

They interact—but they are not the same thing.

## What you usually need to care about

- Read/write outside the current project path
- Whether network is allowed
- Whether specific shell commands are allowed
- Whether the team enforces mandatory policy (managed config)

## Sandbox and network

**Sandbox** reduces accidental blast radius. **Network access** is another risk layer: exfiltrating sensitive prompt content or pulling untrusted data.

When starting out:

1. For first practice, disable unnecessary network or allow only what you clearly need
2. Do not put production secrets in practice projects
3. When you see "needs network / write sensitive path," pause, read, then approve

## Common misconceptions

### A prompt does not always mean danger

Many normal operations trigger approval:

- Installing dependencies
- Writing outside project directory
- Opening browser or system apps
- Accessing external sites or APIs

Judge whether the step is **required for the current task**—not only whether a dialog appeared.

### No prompt does not mean zero risk

If sandbox already allows an action—or you previously relaxed rules—Codex may not ask again.

Do not rely only on "was there a dialog"; check how the environment is configured.

## When you see a permission request

Ask three questions:

1. Is this step necessary to finish the current task?
2. Does the data or path exceed what I expected?
3. If it goes wrong, do I know how to undo or recover?

If you cannot answer two of three, do not approve—ask Codex why the step is needed.

## Layered guide

| Layer | What it covers | Where to read |
|---|---|---|
| Concepts (this page) | Why approvals and isolation matter | — |
| Product differences | How each client prompts | [CLI approvals and sandbox](/guide/cli/approvals-and-sandbox/) · [Desktop App settings](/guide/desktop-app/settings/) |
| Prompt strategy | Declaring boundaries in tasks | [Constraints and boundaries](/prompts/constraints-and-boundaries/) |

Official policy and defaults may change—verify at [OpenAI Codex](https://developers.openai.com/codex).

Approval asks whether to continue; sandbox limits how far continuing can go. Read both together for clearer boundaries.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** OpenAI Developers still provides official Codex entry; this page explains approvals, sandbox, and network as distinct boundaries and points to product chapters without claiming current defaults or exact permission matrices.  
**Last verified:** 2026-07-26
