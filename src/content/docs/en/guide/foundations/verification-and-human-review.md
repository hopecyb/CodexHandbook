---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains why results need verification and human review. Its internal links, sequence of steps, and concepts have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Verification and human review
description: Why results need to be checkable and how to review them.
locale: en
source_locale: zh-CN
source_revision: 'bfe4036'
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 110
reviewed_at: 2026-10-25
---

Codex can help you work faster, but it cannot take final responsibility for confirming the result.

Speed does **not remove the need for acceptance checks**. At minimum:

1. Read the [diff](/en/guide/quality/review-diffs/): which files changed, and did anything go beyond the agreed scope?
2. Check the result against your definition of done.
3. Run tests when possible: [Run tests](/en/guide/quality/run-tests/).
4. Check sources for external facts: [Validate sources](/en/guide/quality/validate-sources/).

## What human review actually checks

Human review does not mean doing all the work again. From the perspective of the person responsible for delivery, confirm:

- Did Codex change the right thing?
- Did it change too much?
- Did it miss a key condition?
- Would you actually be comfortable delivering this result?

## Common misunderstandings

### 1. If the result looks right, can I finish?

“It looks right” can hide problems:

- The writing flows, but the facts may be wrong.
- The page looks normal, but a key flow was never tried.
- The code runs, but edge cases were not tested.

### 2. Does human review mean AI has no value?

AI speeds up the work. You set the standard and make the final decision.

### 3. Is review needed only for code tasks?

These also need review:

- Research conclusions
- Documentation
- Spreadsheets and summaries
- Presentation materials
- Configuration and scripts

## A review sequence

If time is limited, follow this order:

1. Check whether the work went outside the agreed scope.
2. Check whether the result meets your original request.
3. Use automated verification where available.
4. Review the most important remaining point from a human perspective.

Human review leaves the final decision with the person responsible for the result.
