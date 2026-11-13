---
title: "处理文件"
description: "只在指定文件增加一行，观察实际改动。"
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar: {"order": 20}
verification: {"kind": "editorial", "checkedAt": "2026-09-18", "summary": "固定材料与作者参考已补齐；临时目录文件操作脚本已实跑，尚未进行独立模型或读者通关测试。"}
prev: {"link": "/guide/learning-paths/beginner/01-talk-to-codex/", "label": "与 Codex 对话"}
next: {"link": "/guide/learning-paths/beginner/03-give-clear-tasks/", "label": "给出清晰任务"}
---

## 前置条件

已完成第一步，`work` 中仍是三个原始文件。保留工作目录之外的 `starter` 作为基线。

## 做一次可核对的编辑

```text
只在 notice.md 第一行增加下面的状态注释：
<!-- 状态：练习草稿，未发布 -->
原来的正文逐字保留。不要改其他文件，也不要新增文件。
完成后说明改动位置，不发布或发送通知。
```

用当前客户端的差异视图或编辑器逐行对照原件。这里只要求一次小改动，不需要额外增加“先规划再逐步确认”的流程。

## 完成条件

只有 notice.md 改变，新增内容恰好为一行注释；另外两个文件保持原样。参考[第二步结果](/downloads/first-project/references/step-2-notice.md)。注释在 Markdown 渲染中可能隐藏，需查看文件原文。

如果模型改了正文，把 notice.md 恢复为 starter 中的原件，再重做本步。恢复只针对这个练习文件，不重置整个项目。相关方法见[撤销与恢复](/guide/getting-started/undo-and-recover/)。

[练习包与准备说明](/guide/learning-paths/beginner/)
