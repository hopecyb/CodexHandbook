---
title: Approvals and sandbox
description: CLI approval policy for shell, disk, and network—and how sandbox limits Agent behavior.
locale: pt
source_locale: en
source_revision: 4f30cb0
translation_status: fallback
translated_at: '2026-07-28'
---

In CLI, Agents can **read files, write files, run shell, and possibly use the network**—approvals and sandbox are the safety valve between you and automation. Misconfiguration means constant prompts in interactive use—or runaway risk in unattended CI.

## What's covered

- What approval prompts are asking and how to choose
- How sandbox tiers affect files and network
- Aligning team policy across CLI and `AGENTS.md`

## What approvals and sandbox control

Remember:

- **Approval** asks: "Should this step continue?"
- **Sandbox** limits: "Even if it continues, what can it touch?"

Together they shape whether CLI feels conservative or overly permissive.

Concept basics: [permissions and approvals](/guide/foundations/permissions-and-approvals/) · [sandbox and network](/guide/foundations/sandbox-and-network/)

## When approvals fire

Typical triggers (product-dependent):

| Operation | Risk | Default tendency |
|---|---|---|
| Write inside project | Medium | Often needs confirmation |
| Write outside project | High | Reject or strict confirm |
| Run shell | High | Confirm command contents |
| Network / curl | High | Confirm target and data |
| MCP tool call | Depends on server | Per-tool granularity |

In interactive mode you may get **once / session / deny** (names vary by version). **Do not choose "always allow" for commands you do not understand.**

## Sandbox tiers (conceptual)

| Intent | Good for |
|---|---|
| Strict / read-only | Untrusted code review, read-only CI |
| Standard | Daily dev repos |
| Relaxed | Personal trusted environments per company policy |

Sandbox may limit:

- Writable directory scope
- Access to other projects under `$HOME`
- Subprocess and network capability

Configuration: [CLI configuration](/guide/cli/configuration/) · matrix: [permission matrix](/guide/reference/permission-matrix/)

## Interactive vs non-interactive

| Mode | Approval behavior |
|---|---|
| Interactive `codex` | Human present; judge each request |
| Non-interactive `exec` | No human; tighten sandbox + fixed prompt upfront |

CI must read: [non-interactive mode](/guide/cli/non-interactive-mode/) · [human approval patterns](/cases/workflows/human-approval-patterns/)

Recommended CI principles:

- Read-only or limited write paths
- Forbid arbitrary `curl` uploading repo contents
- Non-zero exit on failure; retain logs

## Allow/deny rules

Projects can declare expected commands in [allow and deny patterns](/guide/customization/rules/allow-and-deny-patterns/). **Rules must match real product behavior** or Agents stay blocked—or become too open.

## Common mistakes

- Global "auto-approve all shell" then working on customer repos
- Approving `sudo`, repo deletion, or `~/.ssh` changes by mistake
- CI using the same relaxed config as your dev machine
- Assuming sandbox replaces code review—it blocks mistakes, not malicious prompt injection

## Common misconceptions

### Many prompts does not always mean misconfiguration

While learning CLI, more approvals can be safer—they force you to read each step.

The real danger is approving without reading—not being asked too often.

### Relaxing once does not make future runs safe

Do not carry a wide-open profile from one convenient task into other repos and tasks.

Security boundaries should follow task risk—not last time's convenience.

## Acceptance checklist

- [ ] Can explain what the latest approval request would do
- [ ] Know where to change sandbox tier and restart session
- [ ] Team docs state forbidden commands and what may auto-pass

Starting conservative on CLI approvals and sandbox is usually steadier. Widen only when you know what you are opening.

## References

- OpenAI Codex CLI security and sandbox docs
- stormzhang `17-permissions.md`, `19-security.md`
- KimYx0207 CX-04, CX-13
- freestylefly/CodexGuide sandbox approval topics

---

**Status:** verified  
**Applicable products:** CLI  
**Verification basis:** OpenAI Help Center CLI getting-started material still distinguishes approval modes for read/write, command execution, and sandbox/network boundaries; this page stays conceptual about interactive vs unattended risk without fixing button labels or mode names as facts.  
**Last verified:** 2026-07-26
