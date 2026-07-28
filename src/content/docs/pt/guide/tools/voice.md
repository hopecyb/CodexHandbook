---
title: Voice input and output
description: When to use voice with Codex, limitations, and privacy considerations.
locale: pt
source_locale: en
source_revision: d38b775
translation_status: fallback
translated_at: '2026-07-28'
---

Some Codex clients support **voice**: speak a task or hear a reply summary. Good when your hands are busy or you want to dictate ideas quickly—**not** for reading secrets aloud or replacing written acceptance records.

Voice fits direction, background, and quick follow-up; precise, searchable, reviewable details still belong in text.

## What's covered

- Task shapes that suit voice
- How voice pairs with written prompts
- Privacy and accuracy notes

## Use cases

| Good fit | Poor fit |
|---|---|
| High-level goals, brainstorming | Instructions precise to variable names |
| Short mobile follow-ups | Reading API keys or passwords aloud |
| Accessibility needs | Specs that must be searchable and diffable |

After speaking, ask Codex to **repeat its understanding** or produce a written plan for your confirmation. See [ask for a plan](/prompts/ask-for-a-plan/).

## What voice is good for

Strengths:

- Fast
- Hands-free
- Dumping ideas from your head

Weak spots:

- Dropped words
- Misheard terms
- Poor fit for exact paths, variable names, CLI flags

Common pattern: speak direction, then confirm in writing.

## Usage tips

1. Quiet environment, short sentences; state goal / constraints / done criteria in segments
2. For file paths and branch names, **type** or have the Agent spell them back
3. For sensitive work, disable cloud voice processing if a local/disable option exists
4. Keep important decisions in text on issues or PRs

## Common misconceptions

### 1. Voice replaces typing entirely?

No. Prefer typing for:

- File paths
- Branch names
- Commands
- Parameters
- Acceptance criteria

### 2. More detail spoken ≠ fewer errors

Long unstructured speech can scatter the point.

### 3. Voice summary replaces reviewing results?

No.  
Summaries help orientation; confirming changes, files, diffs, and tests still requires text and artifacts.

## Useful speaking order

When starting with voice:

1. What I want done
2. What not to do
3. How to verify when finished

Then ask for a written version to confirm.

## Privacy

- Voice may be transcribed in the cloud—do not read customer PII or credentials
- Mind bystanders in public spaces
- Team policy may forbid voice on confidential codenames

## Relation to multimodal input

- **Image input**: mockups, screenshots → [prompting with images](/prompts/prompting-with-images/)
- **Voice input**: this page
- **Output**: still mainly code, files, text diffs; voice summary does not replace review

## Common mistakes

- Long unstructured speech; Agent misses constraints
- Accepting large code changes via voice without reading diff
- Describing unsanitized production incidents aloud

Voice helps you start and follow up—not replace precise instructions, sensitive handling, or final acceptance.

---

**Status:** verified  
**Applicable products:** App / Desktop Voice (plan and workspace settings dependent)  
**Verification basis:** OpenAI Help Center articles on ChatGPT Voice and ChatGPT Work and Codex state Voice can work with Work/Codex in the desktop App to start tasks, follow progress, and coordinate work; availability depends on plan, workspace settings, and version. This page focuses on use cases, privacy, and "speak then confirm in writing."  
**Last verified:** 2026-07-26
