---
title: "Anatomie d'une tâche"
description: Objectif, contexte, entrées, contraintes, acceptation et limites de permission.
locale: fr
source_locale: zh-CN
source_revision: 4df3d01
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

A requirement with too much unstructured information mixes outcomes, boundaries, and acceptance. Codex must then fill the gaps.

This page provides a reusable work order and shows how it enters an explore, plan, execute, verify loop.

## Who it is for

- Readers who can open Codex but often see over-editing, incomplete work, or unverifiable results.
- Developers, creators, and teams converting verbal requirements into Agent work.
- Anyone defining scope, access, and stop conditions for a long task.

## Task structure

Organize around:

- desired outcome;
- reason;
- required material;
- boundaries;
- completion evidence.

The order can vary, but explicit answers make execution more stable.

## Recommended template

```text
Goal: ... (final deliverable)
Background: ... (why it matters and current state)
Inputs: ... (files, links, pasted material)
Constraints: ... (editable scope, style, prohibited actions)
Acceptance criteria: ... (observable completion conditions)
Permission boundary: ... (internet, dependencies, configuration)
If information is missing: ask first; do not guess.
```

![Loop from a task specification to a verifiable result](/diagrams/task-execution-loop-fr.svg)

The six fields do not exist to make a prompt long. They remove critical gaps. Verification decides the next step: deliver only on success; otherwise return with evidence to the task or plan instead of editing blindly.

## Purpose of each section

- **Goal:** define an outcome, not only an action.
- **Background:** explain why this approach matters.
- **Inputs:** place required files, links, and material nearby.
- **Constraints:** prevent scope expansion.
- **Acceptance:** make completion observable.
- **Permissions:** state internet, install, and configuration boundaries.

## Common misconceptions

### 1. Every section must be long

This is a checklist, not a form. Omitting context can be appropriate, but removes evidence for decisions.

### 2. Goal and acceptance are different

- **Goal:** what result you want.
- **Acceptance:** how you know it was achieved.

### 3. Inputs means pasting everything

Relevance matters more than volume. Explicitly provide material that must be read.

## Minimal task template

```text
Goal: turn what into which result
Input: relevant files or pages
Constraints: where edits are allowed and prohibited
Acceptance: how I can verify completion
When uncertain: ask first
```

## From vague request to executable task

### Original

```text
Improve the documentation homepage.
```

It lacks audience, scope, and success criteria.

### Executable version

```text
Goal: Rewrite the homepage first screen so a reader new to Codex knows within
30 seconds what it is and where to start.
Background: The current page assumes Agent, context, and Skill knowledge.
Input: src/content/docs/guide/index.md
Constraints: Modify only this file; do not change navigation, styles, or
components. Explain Agent plainly on first use.
Acceptance:
- First screen states purpose, audience, and first reading entry.
- Preserve frontmatter and heading levels.
- Add no unexplained jargon.
- pnpm build passes.
Permissions: May read related site pages; no internet, installs, config changes,
or Git commit.
If information is missing: list it and the proposed scope, then wait.
```

### Expected execution

1. Read the homepage and adjacent entries; explain current issues.
2. Give a short one-file plan.
3. Edit and summarize the diff.
4. Run `pnpm build`.
5. Report evidence against all four criteria.

## Self-review before sending

- Does the goal describe an outcome rather than “improve,” “handle,” or “look”?
- Are inputs limited to relevant material?
- Do constraints name prohibited areas?
- Can another person judge each criterion pass/fail?
- Do internet, installation, external writes, or commits need authorization?
- Should the Agent ask, investigate, or stop when information is missing?

Scale the template to the task. A typo needs little background; a cross-module migration needs more than one goal sentence.

## Next steps

- [Define done](/fr/prompts/define-done/)
- [Constraints and boundaries](/fr/prompts/constraints-and-boundaries/)
- [Ask for a plan](/fr/prompts/ask-for-a-plan/)
- [Explore, plan, execute, verify](/fr/cases/workflows/explore-plan-execute-verify/)

---

**Status:** verified
**Applies to:** App / CLI / IDE / Cloud
**Verification basis:** This page documents a stable task-design method. Examples and internal links were reviewed and do not depend on volatile UI, pricing, or version facts.
**Last verified:** 2026-08-25
