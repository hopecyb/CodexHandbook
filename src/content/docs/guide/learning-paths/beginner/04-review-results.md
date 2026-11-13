---
title: "审查结果"
description: "用固定错误样本练习找错，再复核自己的通知。"
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar: {"order": 40}
verification: {"kind": "editorial", "checkedAt": "2026-09-18", "summary": "固定材料与作者参考已补齐；临时目录文件操作脚本已实跑，尚未进行独立模型或读者通关测试。"}
prev: {"link": "/guide/learning-paths/beginner/03-give-clear-tasks/", "label": "给出清晰任务"}
next: {"link": "/guide/learning-paths/beginner/05-complete-first-project/", "label": "完成第一个小项目"}
---

## 先看一个已知有错的样本

打开[作者设计的错误通知](/downloads/first-project/references/flawed-notice.md)，与 `facts.md` 对照，记录错误句、对应事实编号及修正方法。该样本不是模型输出，也不说明某种提示词必然失败。

不要故意放宽真实工作目录的权限来诱发越界。固定坏样本已经能训练识别错误，并可重复比较。

## 再检查自己的产物

将包里的 `templates/review.md` 复制到工作目录之外的新 `records` 文件夹，逐项填写：

- 时间、地点、名额、费用和准备事项是否正确。
- 报名方式是否保留未知，事实编号是否支持正文。
- 是否只改了 notice.md；原事实与便条有无变化。
- 是否有额外新增、删除或外部发送。

未知项写未检查，不因为模型说“完成”就填通过。

## 完成条件

独立指出坏样本中的四项事实错误，再查[复核参考](/downloads/first-project/references/review-key.md)：结束时间、人数、编造报名方式、将自愿带书写成强制。自己的通知如有问题，完成修正后重新核对。

保存实际复核记录，不将作者参考复制为自己已完成的证据。相关：[审查差异](/guide/quality/review-diffs/)。

[练习包与准备说明](/guide/learning-paths/beginner/)
