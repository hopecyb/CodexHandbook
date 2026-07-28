---
title: Editor context
description: How the IDE extension passes open files, workspace, and project rules to Codex.
locale: pt
source_locale: en
source_revision: 9ef52a0
translation_status: fallback
translated_at: '2026-07-28'
---

In the IDE, Codex gets more than your prompt—it automatically receives **editor state**. That is the IDE's core advantage over CLI. Understanding where context comes from avoids "the file is open but it ignored it" frustration.

IDE Codex does not only read what you type—it also references what you are looking at in the editor.

## What's covered

- What context the IDE attaches automatically
- How that stacks with @ files, selection, and AGENTS.md
- Reducing noise and improving hit rate

## Context sources (conceptual layers)

| Source | Who controls | Typical content |
|---|---|---|
| Workspace root | Folder you opened | Project layout, `AGENTS.md`, config files |
| Open files | Editor tabs | Source you are editing |
| Selection | Highlighted code | Function, error snippet |
| Explicit @ | Paths you @ in chat | Cross-directory files, docs |
| Project rules | `AGENTS.md` etc. in repo | Coding standards, test commands |

Priority and conflicts: [context priority](/guide/context/context-priority/).

## Recommended workflow

1. **Open the repo root as workspace**, not a subfolder only (monorepo exceptions per team docs)
2. For local edits, **select relevant code** then describe the task → [selection and open files](/guide/ide/selected-code-and-open-files/)
3. For cross-module work, @ key files—do not assume "it will search on its own"
4. In long sessions, [compact context](/guide/context/compaction/) or start a new thread periodically

## Difference from CLI

| | IDE extension | CLI |
|---|---|---|
| File awareness | Strong (open files in context) | Needs `--cwd` and tool reads |
| Selection | Native | Paste or specify paths |
| Best for | Line-level edits, explaining code | Scripts, CI, headless environments |

## Common questions

### 1. The file is open—why didn't it change what I expected?

"Open" does not mean "focus is obvious."

If the task scope is still vague, it may read other material or miss the snippet you care about.

### 2. More open files = better?

Too many unrelated open files add noise and dilute focus.

### 3. Automatic context means I can skip a clear task description?

Context helps; it does not replace stating goal, constraints, and done criteria.

IDE context assists—it does not guess for you. Tighter file scope usually means steadier results.

## Sensitive information

Do not leave `.env` with secrets pinned open; see [sensitive context](/guide/context/sensitive-context/).

Redact logs and customer data before pasting; the IDE does not judge compliance for you.

## Common mistakes

- Expecting `AGENTS.md` in single-file mode without a workspace
- Opening many large unrelated files, filling the context window
- Saying "this function" without selecting or @-mentioning the file

## Acceptance checklist

- [ ] Workspace root is correct
- [ ] 1–3 task-relevant files opened or @-mentioned
- [ ] Test commands in `AGENTS.md` match IDE terminal usage

## References

- [File and folder context](/guide/context/file-and-folder-context/)
- stormzhang `09-ide.md`

---

**Status:** verified  
**Applicable products:** IDE  
**Verification basis:** OpenAI Help Center still positions the IDE extension as a primary entry paired with local tools; this page does not assume specific editor buttons—it summarizes workspace, open files, selection, @ files, and project rules as stable IDE context methodology.  
**Last verified:** 2026-07-26
