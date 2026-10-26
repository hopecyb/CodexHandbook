---
title: "Review results"
description: "Practice finding errors in a fixed flawed example, then review your own notice."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "The fixed materials and author's reference result are complete. The temporary-directory file-operation script was run, but no independent model or reader completion test has been performed."
  evidence:
    - label: "Author's file-operation record"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/en/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Give clear tasks"
next:
  link: "/en/guide/learning-paths/beginner/05-complete-first-project/"
  label: "Complete your first small project"
locale: en
source_locale: zh-CN
source_revision: 'e426ec4'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

## First, inspect a known flawed example

Open the [intentionally flawed notice prepared by the author](/downloads/first-project/references/flawed-notice.md), compare it with `facts.md`, and record each incorrect sentence, the corresponding fact number, and how to correct it. This example is not model output and does not show that any particular prompt must fail.

Do not deliberately relax permissions in your real working directory to provoke an out-of-scope change. The fixed flawed example already lets you practice finding errors and compare results repeatedly.

## Then review your own work

Copy `templates/review.md` from the package into a new `records` folder outside the working directory, then fill in each item:

- Are the time, place, capacity, cost, and preparation details correct?
- Is the registration method left as unknown, and do the fact numbers support the notice?
- Was only notice.md changed? Are the original facts and note unchanged?
- Were any files additionally created or deleted, or anything sent outside?

Mark unknown items as not checked; do not mark them as passed merely because the model says “done.”

## Completion criteria

Independently identify the four factual errors in the flawed example, then consult the [review key](/downloads/first-project/references/review-key.md): the end time, the number of attendees, an invented registration method, and wording that turns bringing a book voluntarily into a requirement. If your own notice has problems, correct them and check it again.

Save the review record you actually completed; do not copy the author's reference as evidence that you finished the task. Related: [Review diffs](/en/guide/quality/review-diffs/).

[Exercise package and preparation](/en/guide/learning-paths/beginner/)
