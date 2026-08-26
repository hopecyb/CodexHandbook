---
title: Files, tools, and commands
description: How Codex reads and writes files, runs commands, and uses tools.
locale: en
source_locale: zh-CN
reviewed_at: 2026-07-26
source_revision: 8c0e875
translation_status: reviewed
translated_at: 2026-07-26
sidebar:
  order: 40
---

Codex acts on the real world through **tools**:

- Read/write project files
- Run terminal commands (when permissions and sandbox policy allow)
- Search the web, open a browser, etc. (depending on product capabilities and policy)

## Principles

1. **Minimum necessary scope**: name directories and files—avoid "change the whole repo"
2. **Dangerous commands need approval**: delete, push, change system config, and similar
3. **Tool choice has method**: see [Tool selection](/en/guide/tools/tool-selection/)

Entry points differ in tool panels and confirmation UX; see each product guide for details.

---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
