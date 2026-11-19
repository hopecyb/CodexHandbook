---
legacyVerification:
  status: "verified"
  basis: "Cross-checked against the handbook’s current status system, completed rounds of review, and the official-first principle. This page describes internal standards for promoting pages to `verified` and for downgrading them."
  checkedAt: "2026-07-26"
title: Verify Technical Content
description: How to check technical facts, reproduce steps, and record scope and evidence.
locale: en
source_locale: zh-CN
source_revision: '7fba563'
translation_status: reviewed
reviewed_at: 2026-11-19
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Updated contribution guidance for the site’s new metadata fields; this does not mean every product mechanism cited here was rerun.
sidebar:
  order: 30
---

Commands, permissions, pricing, and product features can change between versions. Technical verification should help readers understand which claims have current support, which environments they apply to, and what they still need to confirm themselves.

## Verification goal

Verification goes beyond editing for clarity. Key facts must match the current product, steps must work in the stated environment, and conclusions must stay within what the evidence supports.

## Evidence priority

1. Use official OpenAI documentation first for product behavior, parameters, and limits.
2. Any example described as “run” must have an actual result and environment information.
3. Community articles can help identify topics, but they do not replace official sources or an actual run.
4. A working link does not prove that its content supports a claim; read the source.
5. State uncertainty directly when information cannot be confirmed instead of filling gaps with guesses.

## Scope to record

- Applicable product: App, CLI, IDE, or Cloud
- Operating system, client, and important dependency versions
- Steps actually performed and how the result was checked
- Platforms, entry points, and edge cases that were not covered
- The specific source page, rather than only a website homepage

## Verification sequence

1. Identify the product, entry point, and scenario discussed by the page.
2. Check volatile facts against the current official documentation.
3. If the page says steps can be run, execute them from the beginning in a clean environment.
4. Narrow any untested or uncertain claim and state the limitation in the body.
5. Check internal links, external links, and prerequisites readers need.

## Information that changes often

Recheck these topics first after major product releases:

- Commands, subcommands, and flags
- Permission defaults and sandbox behavior
- Plans, model names, pricing, quotas, and regional availability
- MCP, Hooks, and other integration interfaces
- Menu locations, button names, and product entry points

## When something cannot be confirmed

Do not present an inference as fact. Remove obsolete specifics, rewrite the section around a stable method, or record the open question in a PR or issue. For current behavior, pricing, and policies, the official sources are authoritative.

## Related

- [Content reliability](/en/guide/start-here/handbook-version-policy/)
- [Official resources](/en/guide/reference/official-resources/)
