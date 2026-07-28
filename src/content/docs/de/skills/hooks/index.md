---
title: Hooks
description: Add checks, logs, and blocks at fixed execution points—when to block vs log.
locale: de
source_locale: en
source_revision: 38cc806
translation_status: fallback
translated_at: '2026-07-28'
---

A Hook automatically inserts a check or log at a fixed moment.

It handles checks, logging, and interception at process nodes—not defining how the task itself should run.

## Contents

This section mainly answers three questions:

- When should I trigger a Hook?
- Am I trying to prevent problems or only record them?
- How do I start Hook configuration in a low-risk way?

## Reading order

1. [Hooks overview](/skills/hooks/hooks-overview/): Separate Hook from Skill and MCP first
2. [Hook event types](/skills/hooks/hook-event-types/): Know whether to attach before, after, or at session start/end
3. [Hook configuration examples](/skills/hooks/hooks-examples/): Three common patterns—log only / block first / light input check

## Configuration order

Do not start with the strictest block policy. A better order:

1. `log` first
2. Then `warn`
3. Then `block`

That makes it easier to verify:

- Events are wired correctly
- False positives are acceptable
- Performance does not slow daily use

Think of a Hook as a small gate on a process node—for check, log, or block.

---

**Status:** outdated  
**Applicable products:** CLI / App (version-dependent)  
**Verification basis:** Hook support surface, event model, and configuration entry points depend heavily on client version; as of 2026-07-26 official public material is insufficient to stabilize this section—marked `outdated`.  
**Last verified:** 2026-07-26
