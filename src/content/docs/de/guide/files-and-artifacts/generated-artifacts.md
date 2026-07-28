---
title: Verifying Generated Artifacts
description: Systematically accept files, reports, and build outputs that Codex creates or exports.
locale: de
source_locale: en
source_revision: af56e40
translation_status: fallback
translated_at: '2026-07-28'
---

When an Agent finishes, it may create reports, scripts, static sites, test data, and other **generated artifacts**. They may not go through your usual code review path—so they need their own verification habit.

New files from Codex are not automatically ready to use.

## What this page covers

- How verifying generated artifacts differs from “editing existing code”
- Checklists
- When to reject or redo

## Artifact types

| Type | Verification focus |
|---|---|
| Scripts `.sh` `.py` | Executable, safe, idempotent |
| Reports `.md` `.html` | Factual accuracy, valid links |
| Build output `dist/` | Should it be gitignored? |
| Test fixtures | No real PII |
| Config templates | No default weak passwords |

## What “generated artifact” means here

- Files Codex newly wrote
- Reports it exported
- Pages, directories, or packages it built

Unlike “changed a few lines of existing code,” these are easy to overlook.

## Verification flow

```text
1. Open the artifact (do not rely on Agent summary alone)
2. Compare to “definition of done” in the task
3. Run related tests or preview commands
4. Check path, permissions, size
5. Decide: accept / partial edit / discard and redo
```

Methods: [Verify artifacts](/guide/quality/verify-artifacts/), [Definition of done](/guide/quality/definition-of-done/)

## Common misconceptions

### 1. “Done” in chat still requires opening files

Summaries say what the Agent *thought* it did—not what actually landed on disk.

### 2. New files are not automatically safer than edits

They can still have wrong content, extra dependencies, leaked info, or huge files that should not be committed.

### 3. “Runs locally” ≠ worth committing

Some outputs are for local temp use only—not Git.

## Relationship to Git

- Clarify what **should be committed** vs `.gitignore`
- Avoid megabytes of build cache in one PR
- Large artifacts: CI artifact or external storage

## Practical verification order

1. Confirm what was generated
2. Open the most important artifact
3. Check it is in allowed directories
4. Decide if it belongs in the repo
5. Accept, edit, or redo

## Untrusted artifacts

For untrusted repos or externally driven tasks:

- Read scripts before executing
- Watch for `curl | bash`, obfuscated payloads
- Preview in sandbox or container

Generated does not mean verified—open, validate, and know whether it should be committed.

## Common mistakes

- Bullet summary only; never open files
- Commit one-off debug output to main
- HTML reports with tracking pixels or unreviewed external scripts

## Acceptance checklist

- [ ] Every new file path is within allowed scope
- [ ] Main content opened and skimmed
- [ ] Automated checks (lint/test/link check) run
- [ ] No secrets, no stray generated directories

## Reference sources

- [Handle uncertainty](/guide/quality/handle-uncertainty/)
- external-source-integration case acceptance requirements

---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against verified verify-artifacts, definition-of-done, handle-uncertainty, and file-artifact pages; focuses on stable method: generated ≠ deliverable, must open and verify, clarify commit policy.  
**Last verified:** 2026-07-26
