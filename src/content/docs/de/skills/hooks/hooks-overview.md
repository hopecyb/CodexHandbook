---
title: Hooks overview
description: Insert validation, logging, and audit at Agent key points—supplement team security and compliance.
locale: de
source_locale: en
source_revision: 720b503
translation_status: fallback
translated_at: '2026-07-28'
---

Simply put, a Hook automatically inserts a check or log at a key point.

**Hooks** let you run custom logic at fixed nodes in the Codex execution chain—for example pre-commit secret scans, MCP call logging, or blocking dangerous commands. They supplement policy and observability from [approvals and sandbox](/guide/cli/approvals-and-sandbox/).

## Contents

- How Hooks differ from Skills and MCP
- Typical team use cases
- Security principles when designing Hooks

## Why teams use Hooks

Even if you will not write Hooks yourself, know what teams use them for:

- Why some actions get an extra gate at a key point
- Why people say "this check is a Hook, not a Skill"
- Why some rules live on system nodes instead of in prompts

Many "why is there an extra check here?" moments in teams are Hooks.

Compare options: [Choosing an extension method](/skills/choosing-an-extension-method/)

## What Hooks do

| Phase (conceptual) | What a Hook can do |
|---|---|
| Before tool call | Reject commands with `rm -rf`, leaking `.env`, etc. |
| After tool call | Write audit logs to SIEM |
| Session end | Summarize changed files |
| Before PR create | Check issue number format |

## How to tell Hook from Skill

- **Skill**: Tell Codex "for this kind of task, follow this workflow"
- **Hook**: Tell the system "at this node, run an automatic check first"

They solve different problems:

- Skill = workflow instructions
- Hook = gate or observation point on the process

Exact event names and config format: [official Hooks documentation](https://developers.openai.com/codex).

## Compared to Skill / MCP

| | Hooks | Skill | MCP |
|---|---|---|---|
| Trigger | System events | User or model invocation | Tool requests |
| Purpose | Policy, audit | Workflow instructions | External systems |
| Maintainer | Platform/team infra | Product or engineering | Integration developers |

## Common misconceptions

### 1. Hooks replace approval and sandbox

Hooks are a supplemental check layer—not the only security boundary.

### 2. More Hooks means safer

Too many slow, heavy, opaque Hooks slow the flow and make debugging painful.

### 3. Hooks are not for complex logic

Hooks fit work that is:

- Fast
- Deterministic
- Easy to test

Do not add another layer of heavy reasoning here.

## Recommended team use cases

1. **Secret leak detection**: Block when diff matches AWS key patterns
2. **License header check**: Warn when new files lack company copyright notice
3. **Compliance logging**: Who, when, write actions on which repo (redacted)
4. **Align with CI**: Local Hook rules share source with GitHub Action when possible

## When Hooks fit

A check belongs in a Hook if:

- It always happens at the same node
- People should not have to remember it manually every time

Examples: sensitive data scan, naming validation, audit records.

## Design principles

- **Fast**: Hook timeouts slow every tool call
- **Deterministic**: Avoid calling an LLM inside a Hook
- **Testable**: Unit-test Hook scripts with fixed input
- **Disableable**: Team can bypass in emergencies (with audit)

Security angle: roadmap `11-team-enterprise`; personal users often start with read-only log Hooks.

Hooks fit automatic checks at system key points. They are not workflow instructions and do not replace approval.

## Common mistakes

- Hook scripts with network write access become a new attack surface
- Rules duplicate and contradict `AGENTS.md`
- Hook config not versioned—teammates' environments diverge

## Acceptance checklist

- [ ] Can name the one Hook scenario your team needs most
- [ ] Clear error message to developers when Hook fails
- [ ] Config included in code review

## References

- OpenAI Codex Hooks documentation
- stormzhang `22-hooks.md`
- KimYx0207 CX-08
- freestylefly/CodexGuide audit and compliance

---

**Status:** outdated  
**Applicable products:** CLI / App (version-dependent)  
**Verification basis:** This page depends on current Hook capability, typical nodes, and team governance; official public docs lack enough detail—needs rewrite for current clients.  
**Last verified:** 2026-07-26
