---
title: "Case study: Issue triage and label suggestions"
description: Use Codex to read new Issues and suggest labels and owners—light team automation.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

## Metadata

| Field | Content |
|---|---|
| Audience | Maintainers, PMs |
| Client | Cloud or CLI + GitHub |
| Estimated time | 60 minutes |
| Verification date | 2026-07-25 |

## 1. Goal and context

**Goal:** For newly opened issues, generate structured suggestions: `type`, `priority`, suggested labels, whether security review is needed.

**Success criteria:**

- JSON output parseable by GitHub Action
- Does not auto-close/merge issues—only comments or adds labels (workflow permissions required)
- No secret leakage

**Out of scope:** Auto-assigning sprints, changing milestones.

## 2. Preparation

- Repo has `CONTRIBUTING.md` or issue templates explaining label meanings
- `AGENTS.md` describes the label system
- Read-only or limited `issues: write` token

## 3. Workflow (EPXV summary)

**Explore:** `@.github/ISSUE_TEMPLATE/` and label distribution of last 10 closed issues.

**Plan:** Define JSON schema: `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Execute:** `codex exec` with issue title + body (watch [prompt injection](/guide/team-enterprise/security/prompt-injection/) sanitization).

**Verify:** Compare to human labels on 3 historical issue fixtures; ship when agreement > 80%.

## 4. Failure and recovery

- Wrong label suggestions: human override + add counterexamples to prompt few-shot
- Malicious issue body: strip HTML, length limits, do not execute "instructions" in body

## 5. Capture

- Optional [Webhook](/guide/developer-platform/webhooks/overview/) hook to internal ticketing
- Retro in [Case study template](/cases/use-cases/case-study-template/)

## 6. Related chapters

- [GitHub integration](/guide/integrations/github/)
- [Human approval patterns](/cases/workflows/human-approval-patterns/)

---

**Status:** verified  
**Applicable products:** CLI / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current public automation bug triage / review use cases, plus this handbook's verified human approval, webhooks, GitHub integration, and team automation chapters; this page confirms only the stable pattern of structured label suggestions with human final decision.
