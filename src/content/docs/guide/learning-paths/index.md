---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "已按本仓库当前 learning paths 目录结构、各角色入口页与初学者分步路径交叉复核；本页只承担“按角色组织阅读顺序”的导航作用，不包含易变的产品行为细节。"
  checkedAt: "2026-07-26"
prev: false
next:
  link: /guide/learning-paths/beginner/01-talk-to-codex/
  label: 开始初学者路径
title: 学习路径
description: 按角色编排阅读顺序，并链接权威正文。
sidebar:
  order: 5
---

学习路径 **只编排顺序**，不复制产品手册或能力专题的长文。

第一次看到“学习路径”这一章，可能会觉得只是又多了一层目录。它主要是在回答：你现在最像哪一类用户，接下来该按什么顺序读。

这一章不负责补新知识，主要是帮你少走弯路。

## 这章在做什么

- 我是初学者、创作者、开发者还是团队推进者，该走哪条线
- 不同角色的阅读顺序有什么差别
- 哪些内容值得现在读，哪些可以以后再补

## 初学者固定材料路径

[下载同一套活动通知练习材料](/downloads/first-project/first-project-1.0.0.zip)，按五步完成通知、复核与恢复记录。无需编程；尚未经独立读者通关测试。

- **初学者（五步）**
  1. [与 Codex 对话](/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [处理文件](/guide/learning-paths/beginner/02-work-with-files/)
  3. [给出清晰任务](/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [审查结果](/guide/learning-paths/beginner/04-review-results/)
  5. [完成第一个小项目](/guide/learning-paths/beginner/05-complete-first-project/)

## 创作者实操路径

[创作者路径](/guide/learning-paths/creator/)提供四个连续里程碑：资料与事实表 → 带来源文章 → 八页可编辑演示稿 → 可复用任务说明。文章与演示稿均有独立下载材料，每步有完成条件；整条路径尚未经独立读者通关测试。

## 开发者实操路径

[开发者路径](/guide/learning-paths/developer/)复用购物车 Bug 练习，按代码阅读 → 修复与测试 → 差异审查 → 交接编排，提供三份可填写模板及作者参考。参考测试已重新运行，独立读者通关仍待验证。

## 团队路径：两周试点与推广决定

- [团队](/guide/learning-paths/team/)：章程 → 手动验证 → 抽检 → 回退演练 → 推广/继续/停止决定，含六份模板。

## 高级操作者路径

如果你已经能完成小任务，下一步不是背更多命令，而是学会把多个能力组合成稳定工作流：

| 步骤 | 主题 | 先读 |
|---|---|---|
| 1 | 快速入口 | [斜杠命令与快捷入口](/guide/reference/slash-commands/) |
| 2 | 持久上下文 | [AGENTS.md](/guide/customization/agents-md/) 与 [记忆与持久上下文](/guide/customization/memories-and-persistent-context/) |
| 3 | 可复用流程 | [Skills 概述](/skills/overview/) 与 [Skill 结构](/skills/skill-anatomy/) |
| 4 | 独立子任务 | [子 Agent](/guide/agent-work/subagents/) 与 [多 Agent 协作](/cases/workflows/multi-agent-coordination/) |
| 5 | 外部系统 | [MCP 概述](/skills/mcp/mcp-overview/) |
| 6 | 自动守护栏 | [Hooks 概述](/skills/hooks/hooks-overview/) |
| 7 | 团队分发 | [Plugins 概述](/skills/plugins/plugins-overview/) |
| 8 | 回退与审查 | [撤销与恢复](/guide/getting-started/undo-and-recover/) 与 [审查 Diff](/guide/quality/review-diffs/) |

这条路径适合把“偶尔让 Codex 帮一次忙”升级为“团队可重复执行的一套小系统”：项目指令定义长期规则，Skill 定义做事方法，MCP 提供外部工具，子 Agent 分担边界清楚的子任务，Hook 保护关键节点，Plugin 负责把这组能力发给更多人。

## 常见误会

### 1. 学习路径和手册正文是两套重复内容

正文负责讲清楚，学习路径负责告诉你现在该看哪几篇。

### 2. 我必须先确定自己属于某一种固定身份

先判断一件事就行：  
**你现在最想解决的主要问题是什么。**

### 3. 一条路径就要从头学到尾，不能跳

路径是推荐顺序，不是强制流程。真正使用时，你完全可以带着具体问题回跳到别的章节。

## 拿不准时怎么选

如果你拿不准该走哪条路径，可以按这个方式选：

- 还没跑通过第一次完整任务：走 [初学者路径](/guide/learning-paths/beginner/)
- 主要想写内容、做图文、做演示：看 [创作者路径](/guide/learning-paths/creator/)
- 主要想改代码、修 bug、接项目：看 [开发者路径](/guide/learning-paths/developer/)
- 主要在想团队怎么落地、怎么控风险：看 [团队路径](/guide/learning-paths/team/)

学习路径就是按“当前最重要的问题”决定接下来读什么。
