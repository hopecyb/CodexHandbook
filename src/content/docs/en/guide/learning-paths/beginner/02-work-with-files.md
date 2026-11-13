---
title: "Work with files"
description: "Add one line to only the specified file and inspect the actual change."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "The fixed materials and author's reference result are complete. The temporary-directory file-operation script was run, but no independent model or reader completion test has been performed."
prev:
  link: "/en/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Talk to Codex"
next:
  link: "/en/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Give clear tasks"
locale: en
source_locale: zh-CN
source_revision: 'ec5c2d3'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

## Prerequisites

You have completed step one, and `work` still contains the three original files. Keep `starter` outside the working directory as a baseline.

## Make one verifiable edit

```text
Add the following status comment only to the first line of notice.md:
<!-- 状态：练习草稿，未发布 -->
Preserve the original body character for character. Do not change any other file or create a new file.
When finished, state where the change was made. Do not publish or send a notification.
```

Compare the file line by line with the original using your current client's diff view or an editor. This step asks for one small change; no extra “plan first, then confirm each step” process is needed.

## Completion criteria

Only notice.md has changed, and the addition is exactly one comment line; the other two files remain unchanged. Compare with the [step-two result](/downloads/first-project/references/step-2-notice.md). The comment may be hidden when Markdown is rendered, so inspect the raw file.

If the model changes the body, restore notice.md from the copy in `starter` and repeat this step. Restore only this exercise file; do not reset the entire project. See [Undo and recover](/en/guide/getting-started/undo-and-recover/).

[Exercise package and preparation](/en/guide/learning-paths/beginner/)
