---
title: Computer Use
description: Advanced GUI control via screen and input devices—use cases, risks, and approvals.
locale: pt
source_locale: en
source_revision: 9d8ea0c
translation_status: fallback
translated_at: '2026-07-28'
---

**Computer Use** lets the Agent view the screen, move the pointer, and type—beyond browser or terminal alone. Most powerful capability; **highest risk and approval requirements**.

Computer Use operates at screen, mouse, and keyboard layer—different from browser and terminal tools—so enable it carefully.

## What's covered

- How Computer Use differs from browser and terminal
- Tasks worth enabling it for
- Safeguards for individuals and teams

## Capability boundaries

| Layer | Typical ability |
|---|---|
| Terminal | Shell, scripts, CLI programs |
| Browser | Web DOM, limited interaction |
| Computer Use | Desktop apps, system dialogs, multi-window workflows |

## How it differs

Think of it as:

- Acting across the whole desktop
- Switching between multiple windows
- Clicking real buttons and system dialogs

So the surface area of UI and information it can touch is usually larger.

Good for:

- Repetitive click flows in demo software without APIs (under supervision)
- Copying data across apps (when compliant)
- Verifying desktop App behavior itself

Poor fit for:

- Everyday coding (IDE + terminal is faster)
- Unattended production operations
- Bypassing security software or DRM

## Common misconceptions

### 1. Stronger capability = default choice?

Worth it mainly when:

- The task truly involves desktop GUI
- No lighter, safer tool can do the job

### 2. Watching means low risk?

Human presence helps, but you can still:

- Mis-click confirm dialogs
- Open windows that should stay closed
- Pull sensitive on-screen info into the workflow

### 3. Replaces all GUI automation?

Better for ad hoc help, flow verification, and API-less GUI steps—not stable long-running unattended production automation.

## Risk model

Computer Use is close to **handing keyboard and mouse to the Agent**:

- Can open mail, chat, file manager
- May mis-click confirmation dialogs
- Screen may show sensitive notifications

Required reading: [permissions and approvals](/guide/foundations/permissions-and-approvals/), [sandbox and network](/guide/foundations/sandbox-and-network/)

## When to consider it

Usually unnecessary for:

- Editing code
- Running tests
- Viewing web pages
- Research

Consider when you must:

- Operate desktop applications
- Span multiple GUI windows
- Reach UI neither browser nor terminal can

## Recommended usage

1. **Dedicated environment**: VM or secondary user; no private windows on screen
2. **Minimize task**: "Verify formula in Calculator" not "handle all my email"
3. **Human in the loop**: stay visible; ready to interrupt
4. **Recording/logs**: team retrospectives (recordings may contain sensitive data)
5. **Post-task check**: filesystem, clipboard, open applications

Enterprise may disable by default—follow managed policy.

## vs browser tool

```text
Only need a web page?        → browser tool
Need apps outside IDE?       → Computer Use (more caution)
Only code and tests?         → terminal + file tools
```

See [tool selection](/guide/tools/tool-selection/)

## Example prompt

```text
Only operate Calculator and the local test app. Do not open mail, chat, file manager, or any production admin UI.
If a system confirmation appears, stop and explain before continuing.
```

## Common mistakes

- Computer Use on main desktop with untrusted projects
- Continuing while 2FA, banking, or customer data is on screen
- Treating GUI automation as full test strategy

## Acceptance checklist

- [ ] Enabled only in isolated environment
- [ ] Prompt lists allowed apps and prohibitions
- [ ] Post-task check: no unexpected files/network
- [ ] Org policy allows the capability

---

**Status:** verified  
**Applicable products:** App / Codex (version, region, and permission dependent)  
**Verification basis:** OpenAI Help Center materials on Codex plans and desktop capabilities still list Computer Use; Business release notes confirm Codex Computer Use on Windows from 2026-05-29. This page summarizes risk model, use cases, and approval boundaries—not claiming universal default availability.  
**Last verified:** 2026-07-26
