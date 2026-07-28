---
title: Sandbox and network
description: Execution isolation, network access, and risk boundaries.
locale: es
source_locale: en
source_revision: 3a3a68a
translation_status: fallback
translated_at: '2026-07-28'
---

The **sandbox** limits which parts of the filesystem and system an Agent can touch, reducing the blast radius of mistakes. **Network access** is a separate risk layer: it may leak sensitive information from prompts or pull untrusted data.

## Default stance for beginners

1. For first practice, turn off unnecessary network access, or allow only what you clearly need
2. Don't put production secrets in a practice project
3. When you see requests to "go online" or "write to sensitive paths," pause, read, then approve

Product settings: desktop App [Settings](/guide/desktop-app/settings/); official details: [https://developers.openai.com/codex](https://developers.openai.com/codex).


---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
