---
title: 上下文与文件
description: 管理项目、文件、对话上下文，以及常见输入类型。
sidebar:
  order: 15
---

# 上下文与文件

上下文，就是 Codex 在这一刻能看到、能参考、能据此行动的信息。

你脑子里已经想得很清楚，但对方没看到关键资料，于是做偏了。  
对 Codex 也是一样。管不好上下文，再好的提示词也会被噪音淹没。

## 上下文包括什么

可以把它看成刚加入群聊的新同事会依赖的信息：

- 你发给它的任务要求，是当前问题
- 你打开给它看的文件，是背景材料
- 仓库里的规则文档，是团队约定
- 历史对话，是它对这次任务的记忆

这些东西加起来，就是它正在依赖的上下文。

## 常见问题来源
很多“它怎么又理解错了”的根源，不是模型太笨，而是上下文出了问题，比如：

- 给的信息太少，它只能猜
- 给的信息太多，重点被淹没
- 你以为它知道这个文件，但其实没明确告诉它
- 你沿着旧对话聊太久，早期信息已经不再聚焦

这一页的重点是一个简单标准：

> **让它看到真正相关的信息，别让无关信息抢位置。**
## 上下文管理

- [项目上下文](/guide/context/project-context/) — `AGENTS.md`、仓库约定
- [文件与目录上下文](/guide/context/file-and-folder-context/) — @ 引用与范围
- [对话上下文](/guide/context/conversation-context/) — 线程与压缩
- [保持聚焦](/guide/context/keep-context-focused/) — 避免无关噪音
- [敏感上下文](/guide/context/sensitive-context/) — 密钥与隐私

在提示词中如何组织背景，见 [目标与上下文](/prompts/goals-and-context/)。

## 文件与产物

除了“告诉它要做什么”，你还经常需要“给它看东西”。

这里的“东西”可能是：

- 一份代码或文档
- 一张截图
- 一个 PDF
- 一张表格
- 一份演示文稿

不同类型的文件，Codex 的读取方式、适合的提问方式、以及验收方式都会有一些差别。

## 文件与产物

- [文本与代码文件](/guide/files-and-artifacts/text-and-code-files/)
- [图片与截图](/guide/files-and-artifacts/images-and-screenshots/)
- [PDF 与文档](/guide/files-and-artifacts/pdf-and-documents/)
- [表格与电子表格](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [演示文稿](/guide/files-and-artifacts/presentations/)

## 建议阅读顺序

不需要一口气全看完。可以按这个顺序读：

1. 先读 [文件与目录上下文](/guide/context/file-and-folder-context/)，理解“该让它看哪些文件”
2. 再读 [保持聚焦](/guide/context/keep-context-focused/)，避免把任务聊散
3. 按你手头材料类型，再去读对应的文件章节

上下文就是 Codex 做判断时手边那堆信息；给对了，结果也更容易做对。

---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 本页为站内导航与方法总览，所述“任务要求、文件材料、项目规则、历史对话共同构成上下文”的框架，已与当前上下文章节及文件处理章节逐项交叉核对，不依赖易变界面细节。  
**最近核验：** 2026-07-26
