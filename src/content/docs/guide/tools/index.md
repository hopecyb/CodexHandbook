---
title: 工具
description: Codex Agent 可用工具选型与专题——终端、搜索、浏览器、Computer Use 等。
sidebar:
  order: 20
---

Agent 通过**工具**读文件、跑命令、搜索网络、打开浏览器等。选对工具并写清边界，能减少擅自出网或过度改动。

这里的“工具”，指的是 Codex 实际执行任务时会调用的能力。并不是所有任务都只靠对话完成。  
有些任务要读文件，有些要跑命令，有些要查网页，有些要看真实页面。

## 为什么要先了解工具

刚开始使用时，容易把 Codex 当成纯对话助手。  
但一旦你允许，它可能会：

- 读项目文件
- 修改文档或代码
- 运行终端命令
- 搜索公开网页
- 打开本地页面检查结果

工具不是附加知识，而是安全和效率的基础。

## 章节导航

| 工具 | 页面 |
|---|---|
| 选型总览 | [工具选择](/guide/tools/tool-selection/) |
| 终端 | [Shell 与终端](/guide/tools/shell-and-terminal/) |
| 检索 | [Web 搜索](/guide/tools/web-search/) |
| 网页 | [浏览器工具](/guide/tools/browser/) |
| GUI | [Computer Use](/guide/tools/computer-use/) |
| 图像 | [图像生成](/guide/tools/image-generation/) |
| 语音 | [语音输入与输出](/guide/tools/voice/) |

文件读写与产物验收见 [文件与产物](/guide/files-and-artifacts/)。扩展工具经 [MCP](/skills/mcp/mcp-overview/) 接入。

## 建议阅读顺序

第一次看这章，可以按这个顺序读：

1. [工具选择](/guide/tools/tool-selection/)，先看不同任务该优先用什么
2. [Shell 与终端](/guide/tools/shell-and-terminal/)，再看命令执行的风险
3. 搜索、浏览器或其他工具页，按手头任务继续读

工具决定 Codex 能怎么动手，而你要负责说明哪些工具能用、哪些不能用。

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
