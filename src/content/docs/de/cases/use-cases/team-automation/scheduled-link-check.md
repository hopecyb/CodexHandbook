---
title: 'Case study: Scheduled documentation link check'
description: Non-interactive Codex or CI to scan for dead site links—a team automation starter case.
locale: de
source_locale: en
source_revision: f7b153b
translation_status: fallback
translated_at: '2026-07-28'
---

## Metadata

| Field | Content |
|---|---|
| Audience | Team maintainers, technical writers |
| Client | CLI + GitHub Actions |
| Estimated time | 45–90 minutes (including first CI setup) |
| Verification date | 2026-07-25 |

## 1. Goal and context

**Goal:** Weekly automatic check of in-site links and key external links; report dead links via PR or issue.

**Success criteria:**

- CI or scheduled workflow runs repeatably
- Structured dead-link list (file, line, URL)
- No unrelated file changes, no push

**Out of scope:** Full-site crawl, logged-in pages, performance testing.

## 2. Preparation

- Docs site source in a Git repo (e.g. this handbook `src/content/docs/`)
- Existing `npm run build` or link-check script (optional)
- Read-only `GITHUB_TOKEN` and `OPENAI_API_KEY` in org secrets

## 3. Workflow

### Explore

```text
Read @src/content/docs/ and existing package.json scripts.
List whether link check exists; if not, suggest minimal approach: markdown internal links + sample official doc externals.
Do not change files.
```

### Plan

```text
Give plan: prompt file path, CI workflow name, structured JSON output fields.
Wait for my confirmation before creating files.
```

### Execute

- Add `prompts/ci/link-check.md`
- Add `.github/workflows/docs-link-check.yml` (illustrative—see [Scripts and pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/))
- Use [codex exec](/guide/developer-platform/non-interactive/codex-exec/) or plain script + Codex for secondary classification

### Verify

- Local `codex exec` once
- CI manual `workflow_dispatch`
- Insert a dead link on purpose; confirm `pass: false`

## 4. Failure and recovery

| Issue | Action |
|---|---|
| External site temporary 503 | Distinguish hard dead links vs soft failures in prompt |
| JSON parse failure | Tighten [structured output](/guide/developer-platform/non-interactive/structured-output/) constraints |
| Quota exhausted | Switch to weekly schedule + incremental checks |

## 5. Capture

- After third successful run, capture as Skill: `docs-link-audit`
- Team [command rules](/guide/customization/rules/team-rules/) allow `npm run build` and read-only git

## 6. Related chapters

- [Long-running task management](/cases/workflows/long-running-task-management/)
- [Automations scheduled tasks](/skills/automations/scheduled-tasks/)
- [Team learning path](/guide/learning-paths/team/)

---

**Status:** verified  
**Applicable products:** CLI  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified non-interactive mode, scripts and pipelines, structured output, team rules, and automation chapters; content is limited to the stable team automation case of scheduled link checks, structured reports, and failure stop conditions.
