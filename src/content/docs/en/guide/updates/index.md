---
title: Handbook updates and corrections
description: See handbook changes, affected exercises, verification boundaries, and how to report a problem tied to a specific page.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Compiled from the current repository content and run records. This is a handbook change log, not an OpenAI product release log or a claim that the site has been deployed.
locale: en
source_locale: zh-CN
source_revision: 3c99d35
translation_status: draft
translated_at: 2026-09-20
---

This page records what changed in the handbook, which tasks are affected, and what has been verified. Dates refer to content preparation. For actual publication status, check the version of the site you are visiting. For changes to product capabilities, follow the official sources linked from the relevant tutorials.

## 2026-09-18: Exercises readers can follow and their verification boundaries

| Change | What it means for readers | Verification record |
|---|---|---|
| The [weekly sales report](/en/cases/analyze-a-spreadsheet/) now has complete inputs and outputs | Download 46 rows of synthetic data to practice refunds, deduplication, and period-over-period changes | [Independent algorithm check](/downloads/sales-weekly-report/record.md) |
| The [source-backed article](/en/cases/write-an-article/) now has a fact map and conflicting material | Practice preserving unknowns without treating a synthetic interview as real testimony | [Source and structure checks](/downloads/source-backed-article/validation/record.md) |
| The [slide deck](/en/cases/create-a-slide-deck/) provides PPTX, PDF, and eight preview pages | Inspect editable text and slide appearance; compatibility with every app is not guaranteed | [Software and rendering record](/downloads/article-to-slides/validation/record.md) |
| The [creator path](/en/guide/learning-paths/creator/) and [developer path](/en/guide/learning-paths/developer/) now proceed through artifacts | Each step includes materials, acceptance checks, and a next step; developers can record red and green tests | [Developer rerun record](/downloads/developer-path/run-record.json) |
| [Four Skill types](/en/skills/examples/) now have complete downloadable packages | Review, writing, research, and automation each have references and checks; trigger samples are not routing measurements | “Verification environment and evidence” on each detail page |
| [Issue triage](/en/cases/use-cases/team-automation/issue-triage-suggestions/) corrects its schema and launch threshold | “Three samples and 80% agreement” is no longer presented as a basis for launch; human review remains advised | [Dry-run record](/downloads/issue-triage/validation/record.md) |
| [Link checking](/en/cases/use-cases/team-automation/scheduled-link-check/) and [failure recovery](/en/guide/reference/troubleshooting/failure-recovery-lab/) now include run materials | Reproduce local errors and recovery. External links, real scheduling, and sign-in failures remain untested | [Recovery record](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18: Case filtering and learning-path navigation

The [case directory](/en/cases/) supports filtering by task type and keyword, with shareable filtered URLs. Cards take outputs and verification status from case metadata. In the Simplified and Traditional Chinese versions, learning-path sidebars show only the current path, steps, and related help; the beginner overview is pinned first and the five steps are numbered. Empty filter results can be reset. Without scripts, readers can still browse every case.

## 2026-09-18: Twelve recorded prompt comparison runs

The [three prompt comparisons](/en/prompts/comparison-lab/) now include two actual A/B runs each for a weekly sales report, a source-backed article, and a bug fix, with artifacts, elapsed time, and criterion-by-criterion scores. The [results package](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) retains tool errors, missing log fields, and redacted path hashes. The primary Agent reviewed the runs without blinding, model labels are unknown, and the results do not establish a general success rate or time savings.

## 2026-09-18: Complete website exercise

The [build a website case](/en/cases/build-a-website/) now includes fixed requirements, a starter HTML page, a reference result, an acceptance template, and a broken button anchor to diagnose. The reference page was checked on desktop and at a 375px narrow viewport, with actual fixes and link logs retained. It makes no claim about deployment, sign-ups, or model performance.

## 2026-09-18: A more focused Chinese entry point

The home page now groups tasks, role-based paths, troubleshooting, and reusable materials, removing repeated positioning and capability explanations. Simplified and Traditional Chinese main navigation emphasizes tasks, learning paths, and the reference directory. The roadmap moved into the resources menu, and mobile uses the same entry points.

## 2026-09-18: Fixed beginner materials and recovery exercise

The [five-step beginner path](/en/guide/learning-paths/beginner/) uses one set of synthetic event materials, a reference announcement, four error samples, and review and handoff templates. The exercise progresses from read-only work and a single-file edit to restoring a real copy. The [author's script record](/downloads/first-project/validation/record.json) proves only the file-operation sequence; there is no independent model evaluation or evidence that readers completed it successfully.

## 2026-09-18: Roadmap dates and practice entry points

The [AI application roadmap](/en/ai-roadmap/) now distinguishes papers, product launches, engineering articles, and project topics that are not sorted by first-release date. Each topic has specific sources and a practice entry point. The date of one article is no longer used as the date of an industry-wide trend, and structural checks of a Skill package are not presented as a client trigger test. Original URLs remain, but historical year-month labels are not current event dates. Each topic page records its sources and verification scope near the top.

## 2026-09-18: Clarifications that prevent common misreadings

- The pricing entry is now “Price reference.” Sourced snapshots in their original currencies are separated from unknowns; estimates no longer drive a global high-to-low price comparison. Check the actual seller's display before buying.
- Page headers distinguish editorial status, source checking, example runs, and historical notes. A “run tested” label covers only the named scripts and environments; it is not a reliability rate for model output.
- [Instruction priority](/en/guide/context/context-priority/) distinguishes message roles, how project instructions are discovered, and execution permissions. It no longer broadly claims that newer or stricter instructions always win.
- [SDK](/en/guide/developer-platform/sdk-overview/) and [Webhook](/en/guide/developer-platform/webhooks/overview/) pages distinguish local execution, self-hosted services, and callback design; proposed interfaces are not presented as official contracts.
- [Task levels](/en/prompts/ask-for-a-plan/) distinguish direct execution, planning first, and action approval, avoiding pauses at every step regardless of risk.

See each mechanism page's header for its sources and verification scope. This update summary is not a complete API reference.

## If you find a problem on a page

Each Chinese article has a “Report a problem with this page (GitHub draft)” link at the bottom. It puts the page title, site path, and recorded verification date into an unsubmitted Issue draft. Check its contents before submitting it yourself; a GitHub account is required.

Describe the exact passage, expected and actual behavior, relevant environment, and a public source if needed. Share only redacted information. Do not paste API keys, account details, private directories, customer data, or full raw logs. The draft does not automatically collect your task logs or include the page query parameters.

Without a GitHub account, copy the page path and issue description into a local note, then ask a collaborator with access to submit it. No response time is promised, and no message is sent automatically.

## How maintainers handle reports

After reproducing an issue or checking the source, record why it was accepted, revised, or could not yet be confirmed. When changing a product fact, update its evidence rather than refreshing the verification dates of unrelated pages. When changing an exercise, synchronize the source material, download package, and article. If an earlier conclusion is invalid, explain the impact of the old approach and the migration steps instead of simply saying the content was “improved.”

When updating this page, link specific pages and verification records and keep untested scope visible. This is a community handbook change log, not an official OpenAI release log.
