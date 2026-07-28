---
title: Skills overview
description: Teach Codex reusable workflows with SKILL.md—write once, invoke on demand.
locale: es
source_locale: en
source_revision: 9d68601
translation_status: fallback
translated_at: '2026-07-28'
---


A **Skill** is a directory containing `SKILL.md` (plus optional scripts and reference material) that packages a fixed workflow into a capability Codex can **invoke automatically or explicitly**.

It fits workflows that have already repeated and will likely repeat again.

## Core concepts

### How it differs from slash commands

| | Slash command | Skill |
|---|---|---|
| Trigger | You type `/xxx` | You can call with `$name`, or the model matches by description |
| Context | Usually expands immediately | **Progressive disclosure**: only name + description by default; full text loads when selected |
| Best for | Fixed, high-frequency entries you remember | Long flows, documentation-heavy work, letting the model decide when to use it |

### Progressive disclosure

At startup, Codex only sees each Skill's **name, description, and path**; it loads the full `SKILL.md` only when it decides to use the Skill. So the body can include detailed checklists without filling the context window.

Note: the Skill list has an **initial character budget** (a small fraction of context). Put core trigger scenarios at the **front** of `description` so truncation does not break matching.

## Skill directory structure

```text
my-skill/
├── SKILL.md          # Required
├── scripts/          # Optional: deterministic steps
└── references/       # Optional: long reference docs
```

Minimal `SKILL.md` example:

```md
---
name: pr-review
description: Review the diff of the current branch against main; flag risks and test gaps. Use when the user asks for review, PR review, or pre-merge checks.
---

## Steps
1. Get the diff against main
2. Classify by file: logic errors, security, performance, tests
3. Output a tiered list: blocking / suggestion / nit
4. Do not auto push or merge
```

## Where to store Skills

| Type | Typical location | Notes |
|---|---|---|
| Project Skill | `.agents/skills/<name>/` | Lives in the repo; shared by the team |
| User Skill | User skills directory (see official docs) | Personal, cross-project |
| Official curated | Installed via installer | Path managed by installer; do not mix with hand-written dirs |

**Do not** copy outdated tutorial paths or fictional `trigger:` fields; follow the [official Skills documentation](https://developers.openai.com/codex/skills).

## How Skills are triggered

1. **Explicit**: In supported environments, call with `$skill-name` (name matches frontmatter `name`)
2. **Implicit**: The model judges whether the task fits `description` semantically

Tips for writing `description`:

- State clearly when to use and when not to use
- Include keywords users might say (review, release, changelog)
- Avoid vague phrases like "help the user write code"

## Recommended workflow

1. Notice a workflow has repeated several times
2. Draft `SKILL.md` with plain-text steps first
3. Try `$name` and implicit matching on a small task
4. Add `scripts/` when you need determinism
5. Commit to `.agents/skills/` and open a PR for the team

Hands-on practice: [Create your first Skill](/skills/create-your-first-skill/)

## Common questions

### 1. How is a Skill different from a prompt?

- **Prompt**: What you say for this task only
- **Skill**: A reusable workflow for similar tasks later

### 2. Do I need to learn to write Skills from day one?

No. Get ordinary tasks right first; when a flow repeats many times, consider turning it into a Skill.

### 3. Is it the same as a slash command?

Not exactly. Slash commands are more like shortcuts; Skills are workflow packages with full instructions and steps.

Skills are not required to get started—they shine when you organize flows that keep coming back.

## Security boundaries

- Scripts and MCP calls inside a Skill inherit the current approval policy
- Do not hard-code secrets in Skills; use environment variables or MCP auth
- Teams should review third-party Skills like dependencies

## Common mistakes

- `description` too long or too broad—never triggers or triggers wrongly
- One Skill cramming ten unrelated flows
- Replacing clear steps with scripts that are hard to maintain

## References

- OpenAI Codex Skills documentation
- KimYx0207 CX-06; stormzhang `22-skills.md`

---

**Status:** verified  
**Applicable products:** App / CLI / IDE  
**Verification basis:** Consistent with current Codex runtime Skill loading (`SKILL.md`, on-demand full skill file) and OpenAI Help "Skills in ChatGPT" defining Skills as reusable workflows; this page focuses on concepts and directory layout, not volatile UI.  
**Last verified:** 2026-07-26
