---
title: Create your first Skill
description: Build a committable pr-review Skill from scratch, with testing and team sharing.
locale: de
source_locale: en
source_revision: a3c057a
translation_status: fallback
translated_at: '2026-07-28'
---


If you can assign tasks but have not built a Skill yet, this page covers the basics of your first one.

Spend 15–30 minutes on a **repo-reusable** Skill—often more direct than reading theory first. A small, well-bounded Skill is a good start.

## Who this is for

You can complete [your first task](/cases/first-task/) and are willing to experiment in a test repo.

## Why start with `pr-review`

It has several advantages:

- Input is relatively clear
- Lower risk than "change code directly"
- Easy to judge whether it works
- Helps you learn triggers and boundary writing

It is a strong practice piece for turning a routine into something reusable.

## Target outcome

A Skill under `.agents/skills/pr-review/` that produces structured review feedback on current changes.

## Minimum bar

For a first Skill, aim for three things:

1. It can be recognized
2. It reliably runs one clear process
3. It does not do dangerous actions on the side

Once those are clear, iteration gets easier.

## Steps

### 1. Create the directory

```bash
mkdir -p .agents/skills/pr-review
```

### 2. Write SKILL.md

```md
---
name: pr-review
description: Review git diff; list blocking issues, test gaps, and style suggestions. Use when the user mentions review, audit, or pre-merge checks. Not for writing new features.
---

# PR review

## Input
- Default compare branch: main (or default branch if main does not exist)

## Process
1. List changed files and change type (feature/fix/refactor/docs)
2. For each logic change: missing tests? API break?
3. Check for secrets, debug logs, oversized unrelated diff
4. Output:
   - 🔴 Blocking: must fix
   - 🟡 Suggestion: should fix
   - 🟢 Pass: meets AGENTS.md requirements

## Do not
- Do not git push
- Do not change public API without discussion
```

### 3. Try locally

Open the repo in Codex and try:

```text
$pr-review Please review my current uncommitted changes
```

Or in natural language: "Review the diff the team way, focus on tests."

### 4. Test explicit first, then implicit

Do not jump straight to auto-trigger.

Suggested order:

1. Explicit `$pr-review`
2. Confirm process and output
3. Try natural-language trigger

That separates Skill content issues from weak `description` triggers.

### 5. Iterate description

If the model **never** auto-selects it, tighten or add trigger words in `description`. If it **over-triggers**, add "when not to use."

### 6. Commit for the team

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

Add one line to team README or `AGENTS.md`: "Before merge, you can use `$pr-review`."

## Common misconceptions

### 1. The first Skill should be as complete as possible

Often the opposite. Smaller and more focused makes value easier to judge.

### 2. The point is not to sound "smart"

Clear **boundaries** matter more.

What it should and should not do beats sounding impressive.

### 3. "It runs" equals success

A useful Skill should also:

- Be obvious to others when to use
- Have stable output structure
- Avoid dangerous side actions

## Acceptance checklist

- [ ] `$pr-review` runs without dangerous git operations
- [ ] Output has tiered conclusions, not vague prose
- [ ] `description` states trigger scenario in one sentence
- [ ] Checked script needs against [permissions and sandbox](/guide/permissions-and-sandbox/) (this example has no scripts)

Starting with a small, steady Skill makes it easier to reuse a clear workflow reliably.

## Next steps

- Turn [explore–plan–execute–verify](/prompts/templates/understand/) into a Skill
- When you need GitHub API access, add [MCP](/skills/mcp/mcp-overview/)

## References

- OpenAI Codex Skills official examples and `skill-creator` (if provided in your environment)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE  
**Verification basis:** Current Codex runtime still supports project skill directories, `SKILL.md` definitions, and explicit invocation for trial runs; this page is a stable first-Skill exercise.  
**Last verified:** 2026-07-26
