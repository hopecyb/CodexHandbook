---
title: "完成第一个小项目"
description: "交付通知、复核和恢复记录，而不只写学习感想。"
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar: {"order": 50}
verification: {"kind": "editorial", "checkedAt": "2026-09-18", "summary": "固定材料与作者参考已补齐；临时目录文件操作脚本已实跑，尚未进行独立模型或读者通关测试。", "evidence": [{"label": "作者文件操作记录", "href": "/downloads/first-project/validation/record.json"}]}
prev: {"link": "/guide/learning-paths/beginner/04-review-results/", "label": "审查结果"}
next: {"link": "/cases/analyze-a-spreadsheet/", "label": "继续做销售周报"}
---

## 前置条件

通知已通过逐项复核，facts.md 与 private-note.md 保持原样，records 中保存了自己的检查记录。

## 做一次恢复演练

1. 将整个 `work` 复制到一个新建的 `backup-final` 文件夹，确认三个文件齐全。
2. 再复制到新的 `recovery-drill` 文件夹。仅在这个演练副本中，把 notice.md 改为“恢复演练中的错误版本”。真实 work 保持不变。
3. 打开演练文件确认它确实被改变，再从 backup-final 复制正确的 notice.md 覆盖回来。
4. 将 recovery-drill 的三个文件与备份逐一比较，确认内容一致；同时核对 work 未变。

用文件管理器和编辑器即可操作。先确认目标路径确实是演练副本，已有同名目录时换一个新名字，避免覆盖其他内容。若未能确认恢复结果，在记录中保留“未确认”。

## 保存可交接成果

将 `templates/handoff.md` 复制到 records，按实际填写客户端版本、最终文件、依据、复核证据、未决报名方式和恢复结果。保存自己本次使用的任务说明，便于下次替换材料。

交付包括：最终 notice.md、原始 facts.md、自己的 review.md 与 handoff.md，以及可复用任务说明。这些是教学文件，没有实际发布授权。

## 怎样算完成

通知有事实依据，未知没有被编造；改动范围正确；坏样本错误已识别；恢复演练已实际执行并记录；交接能让别人找到依据和未决项。只写“三次任务成功”不足以证明完成。

作者的[文件操作验证记录](/downloads/first-project/validation/record.json)与[复现脚本](/downloads/first-project/validation/reproduce.py)仅证明临时目录中的参考复制和恢复流程。主练习不需要 Python，这些记录也不能替代你的实际操作。

继续选择：[销售周报](/cases/analyze-a-spreadsheet/)或[创作者路径](/guide/learning-paths/creator/)。

[练习包与准备说明](/guide/learning-paths/beginner/)
