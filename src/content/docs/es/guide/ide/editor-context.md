---
title:  Contexto del editor
description:  Cómo la extensión IDE pasa a Codex los archivos abiertos, el workspace y las reglas del proyecto.
locale: es
source_locale: zh-CN
source_revision: b6d208f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

In an IDE, Codex receives more than the prompt. It also receives **editor state**. This is the main advantage over a bare terminal: understanding where context comes from prevents the frustration of “the file is open, but Codex did not see it.”

## What this page covers

- which context the IDE attaches automatically;
- how it combines with `@` files, selections, and `AGENTS.md`;
- how to reduce noise and improve targeting.

## Recommended workflow

1. **Open the repository root as the workspace**, rather than only a subfolder (see team guidance for monorepos).
2. For local logic, **select the relevant code** before describing the task. See [Selected code and open files](/es/guide/ide/selected-code-and-open-files/).
3. For cross-module work, name important files with `@` instead of assuming that Codex will discover them.
4. Compact a long session with [context compaction](/es/guide/context/compaction/) or start a new thread.

## IDE and CLI

| | IDE integration | CLI |
|---|---|---|
| File awareness | Strong: open files are available as context | Use `--cd` / `-C` and tools to read from disk |
| Selection | Native support | Paste it or specify a path |
| Best for | Line-level edits and code explanation | Scripts, CI, and GUI-free environments |

## Common questions

### Why did Codex ignore an open file?

Opening a file does not make the task focus explicit. If the scope remains vague, Codex may inspect other related content or miss the selected fragment.

### Is opening more files always better?

Too many unrelated large files make the context noisy and dilute the important material.

### Does automatic IDE context replace a clear prompt?

No. Automatic context helps, but it cannot replace a stated goal, scope, constraints, and acceptance criteria.

IDE context helps Codex, but does not make it guess. Precise file boundaries generally produce more stable results.

## Sensitive information

Do not keep a secrets-containing `.env` file open in the foreground. See [Sensitive context](/es/guide/context/sensitive-context/).

Redact logs and customer data before attaching them; the IDE cannot decide compliance for you.

## Common mistakes

- Expecting `AGENTS.md` discovery in a single-file window with no workspace.
- Opening many unrelated large files and crowding out the context window.
- Saying “this function” without selecting it or naming its file with `@`.

## Acceptance checklist

- [ ] The workspace root is correct.
- [ ] One to three task-relevant files are open or attached with `@`.
- [ ] Test commands in `AGENTS.md` match the IDE terminal.

## Reference

- [File and folder context](/es/guide/context/file-and-folder-context/)

---

**Status:** verified

**Applies to:** IDE

**Last verified:** 2026-08-26
