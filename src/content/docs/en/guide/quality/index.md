---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page covers only the structure and reading order of the quality and verification section. Internal links and concepts were checked; the text does not depend on changing product details such as versions, prices, or interface."
  checkedAt: "2026-07-26"
title: Quality & Verification
description: Review, testing, and definition of done.
locale: en
source_locale: zh-CN
source_revision: 401b6a6
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 21
---
Many people focus on whether Codex can produce a result, then overlook the next question: how do you know the result is ready to accept?

This section covers that check. Quality and verification keep “looks finished” from being mistaken for “ready to use.”

- [Review diffs](/en/guide/quality/review-diffs/)
- [Run tests](/en/guide/quality/run-tests/)
- [Verify artifacts](/en/guide/quality/verify-artifacts/)
- [Validate sources](/en/guide/quality/validate-sources/)
- [Handle uncertainty](/en/guide/quality/handle-uncertainty/)
- [Usage, time, and model choice](/en/guide/quality/usage-time-and-model-choice/)
- [Workflow evaluation and 20 samples](/en/guide/quality/workflow-evaluation/)
- [Definition of done](/en/guide/quality/definition-of-done/)

## Reading order

On a first visit, read in this order:

1. [Review diffs](/en/guide/quality/review-diffs/) to see what actually changed.
2. [Run tests](/en/guide/quality/run-tests/) to check whether anything broke.
3. [Verify artifacts](/en/guide/quality/verify-artifacts/) to check whether the result is what you wanted.
4. [Definition of done](/en/guide/quality/definition-of-done/) to decide when the work is truly complete.

Without these checks, “done” can mean only that the result looks finished for now.
