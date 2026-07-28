---
title: Structured Output
description: Make exec produce machine-parseable results for downstream steps, dashboards, and gates.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Many first automations assume Codex will return “reasonable-looking prose.” Fine for humans; awkward for scripts.

Structured output solves a direct problem: Codex returns results in a format you specify.

If a non-interactive task only emits free text, downstream steps struggle to judge pass/fail, issue count, or severity. Structured output makes results easier for machines to consume.

## What this page covers

- When to require JSON / Markdown tables / fixed fields
- Defining schema in prompts
- Fallback when parsing fails

## Common misconceptions

### Structured output is for the next step

JSON and schema are not engineering pedantry—they matter when scripts judge outcomes, bots post comments, or dashboards display results. You need stable shape, not guesswork each run.

### Stable format ≠ reliable conclusions

Structured output guarantees shape, not correct understanding.

It solves the output interface—not task definition and verification.

## A simple split

- Free text: for humans
- Structured output: for programs

If the next step is `jq`, scripts, dashboards, gate rules, or auto-comment bots, do not rely on free-form natural language alone.

## Minimal approach

Fix format requirements at the end of the prompt:

```text
…(task body)…

Output requirements:
- Emit only one JSON object, no markdown code fences
- Fields: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- If no issues, findings is an empty array
```

Shell parsing (sketch):

```bash
result=$(codex exec --cwd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Common pitfalls

### 1. “Output JSON” but not “only JSON”

A preamble before the JSON breaks parsers.

### 2. Field names change day to day

Once scripts depend on fields, treat schema as an interface.

### 3. Expecting structure to fix vague tasks

It stabilizes format. If the task is unclear, JSON will just be consistently wrong.

## Recommended workflow

```text
Define schema (version v1)
    → prompt references schema file @schemas/review-output.json
    → exec run
    → jq / custom validator
    → exit 1 on failure
```

For large output, require a file path field; Agent writes to `artifacts/`, CI uploads artifact.

## How to decide

If the next consumer is a program, prefer structure.  
If the result is mainly for human reading and discussion, free text is often fine.

Whenever results feed another program, ask Codex to return agreed fields consistently.

## Compared to SDK

| | CLI + JSON prompt | SDK |
|---|---|---|
| Integration cost | Low | Medium |
| Type safety | Convention + validation | SDK types |
| Best for | CI scripts | Multi-tenant services |

See [SDK overview](/guide/developer-platform/sdk-overview/).

## Common mistakes

- Model adds explanation text; JSON parse fails—emphasize “JSON only” in prompt
- Schema change without version bump; old CI mis-parses
- Secrets in JSON fields logged
- No explicit exit behavior on parse failure

## Acceptance checklist

- [ ] Schema file or documented fields exist
- [ ] CI fails explicitly on parse failure
- [ ] Sample output in `fixtures/` for regression
- [ ] Aligned with [exit codes](/guide/developer-platform/non-interactive/exit-codes-and-retries/) strategy

## Reference sources
- OpenAI structured outputs general practice (conceptual alignment)
---

**Status:** verified  
**Products:** CLI / API  
**Verification basis:** OpenAI API model/comparison docs still list `Structured outputs`; this page is limited to general practice for stable non-interactive output interfaces; JSON schema, validation, and fallback patterns are engineering guidance.  
**Last verified:** 2026-07-26
