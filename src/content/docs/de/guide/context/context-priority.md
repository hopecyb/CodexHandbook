---
title: Context priority
description: Who wins when instructions conflict.
locale: de
source_locale: en
source_revision: 5bba277
translation_status: fallback
translated_at: '2026-07-28'
---


Common conflicts: project instructions vs. current prompt vs. old conversation. Practical principles:

1. **Current task prompt** takes priority for this session's scope
2. Project-level security bans (e.g., "no push", "no production secrets") should always be followed
3. When you find a conflict, state explicitly: "This message overrides previous instructions about X"

Team-enforced policies may override personal preferences (covered in later governance chapters).


---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
