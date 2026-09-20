---
title: "Give Clear Tasks"
description: "Create a notice from fixed facts while preserving unknown information."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 30
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "The fixed materials and author reference are complete; file operations in a temporary directory were run, but no independent model or reader completion test has been performed."
  evidence:
    - label: "Author’s file operation record"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/en/guide/learning-paths/beginner/02-work-with-files/"
  label: "Work with files"
next:
  link: "/en/guide/learning-paths/beginner/04-review-results/"
  label: "Review results"
locale: en
source_locale: zh-CN
source_revision: 664fdf7
translation_status: draft
translated_at: 2026-09-20
---
## Prerequisites

Complete step two first. `facts.md` contains seven numbered facts, and `notice.md` already has a comment marking it as unpublished.

## Prepare the notice with explicit criteria

```text
Use only facts.md in this directory as the source to turn notice.md into an event notice.
Keep the exact status comment <!-- 状态：练习草稿，未发布 --> unchanged.
Include the time, location, capacity, cost, what to bring, and a “To be confirmed” section.
Mark each fact with its corresponding F number. Leave uncertain information unknown;
do not add a QR code, phone number, or registration link.
Change only notice.md. Do not change facts.md or private-note.md, create files,
access the network, publish, or send anything.
When done, list the changes and their supporting facts. If sources conflict, explain the conflict and leave it to be confirmed.
```

The goal is a verifiable notice; the background is a fictional teaching event; the input is `facts.md`; the boundary is to change only `notice.md`. The acceptance criteria specify both content and files instead of relying on “make it sound more professional.”

## Completion criteria

The time is 2026-10-17 14:00–15:30, the place is the fictional reading room named in the materials, capacity is 18 people, attendance is free, and bringing a book is optional. The registration method remains to be confirmed. Check each cited F number against the sentence it is meant to support.

Check your work first, then consult the [author’s reference notice](/downloads/first-project/references/notice.md). The writing style need not match, but the facts, open item, and scope of changes must. If something is wrong, fix the specific issue; do not let the model rewrite the facts file to fit its result.

[Practice package and preparation guide](/en/guide/learning-paths/beginner/)
