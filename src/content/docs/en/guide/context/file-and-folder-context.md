---
title: File and folder context
description: Specify relevant files and avoid irrelevant noise.
locale: en
source_locale: zh-CN
reviewed_at: 2026-07-26
source_revision: 9bd2e62
translation_status: reviewed
translated_at: 2026-07-26
sidebar:
  order: 20
---

Be explicit about relevant paths:

```text
Please read only src/components/Button.tsx and its test file. Do not scan the entire repository.
```

Opening too many irrelevant files wastes context and introduces false associations. In the IDE, verify the current workspace root is correct.

---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
