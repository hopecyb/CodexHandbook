---
title: 团队与企业
description: 采用、标准、管理与安全治理，让 Codex 规模化落地而不失控。
sidebar:
  order: 70
---

**团队与企业**章节面向工程负责人、平台与安全团队，重点是把 Codex 从个人可用推进到团队可管、可审、可复盘。和 [学习路径 · 团队](/guide/learning-paths/team/) 配合阅读时，这一章更偏治理和落地。

如果你目前还是个人使用，或者还在熟悉基础用法，这一章可以先放后面。这里主要讨论很多人一起使用时，边界、流程和责任怎么理顺。

这里主要涉及这些问题：

- 谁能用
- 能做到什么范围
- 出问题时怎么追踪
- 高风险扩展怎么审批

## 本章内容

- 小团队试点到组织推广的路径
- 安全、合规与扩展（Plugin/MCP）风险
- 与本手册其他章节的交叉引用

## 适合阅读的人

| 角色 | 建议先读 |
|---|---|
| EM / 负责人 | [威胁模型](/guide/team-enterprise/security/threat-model/) · [可接受使用](/guide/team-enterprise/governance/acceptable-use/) |
| 平台工程 | [团队规则](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| 安全 | [Plugin 与 MCP 风险](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt 注入](/guide/team-enterprise/security/prompt-injection/) |

## 治理模型（概念）

```text
策略（组织托管、AUP）
    ↓
标准（AGENTS.md、批准扩展清单）
    ↓
执行（规则、沙盒、Hooks、CI）
    ↓
观测（审计、指标、复盘）
```

## 本章导航（起步）

| 主题 | 页面 |
|---|---|
| 安全 | [威胁模型](/guide/team-enterprise/security/threat-model/) · [Plugin/MCP 风险](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt 注入](/guide/team-enterprise/security/prompt-injection/) |
| 治理 | [可接受使用政策](/guide/team-enterprise/governance/acceptable-use/) |

路线图将补充 adoption、administration、deployment-patterns 等细目，见 [chapter-outline](/docs/planning/chapter-outline.md)（仓库规划文档）。

## 与个性化配置的关系

- [AGENTS.md 优先级](/guide/customization/agents-md/scope-and-precedence/) 中的组织托管层
- [团队规则策略](/guide/customization/rules/team-rules/)

## 常见错误

- 只买席位不做培训与标准
- 个人沙盒放宽当成组织默认
- 批准所有社区 Plugin 无清单

## 验收清单

- [ ] 有书面 AUP 或等价政策
- [ ] 高风险扩展有批准流程
- [ ] 事件联系人明确（安全/平台）

## 常见误会

### 1. 我现在一个人用，还需要看这章吗？

不一定现在就要深读。  
但可以先知道，Codex 一旦从个人工具变成团队系统，要处理的问题就不只剩提示词怎么写。

### 2. 为什么这里总在讲审计、治理、政策？

团队环境下，更大的风险是很多人长期一起使用时，边界越来越模糊。

### 3. 第一次只想建立概念，先看什么？

可以先看：

- [Plugin 与 MCP 风险](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [可接受使用政策](/guide/team-enterprise/governance/acceptable-use/)

如果你当前主要关心个人上手，这章可以先放后面；等开始做团队推广、权限管理或风险控制时再回来。

---

**状态：** verified  
**适用产品：** 组织版 / 团队功能（视套餐）  
**核验依据：** OpenAI 当前帮助中心与插件/应用文档仍持续强调：团队落地 Codex/ChatGPT 需要角色访问、插件启用、动作审批、数据边界与审计责任等治理层能力。本页只作为团队与企业章节导航，聚焦治理模型和阅读顺序，不绑定具体后台路径。  
**最近核验：** 2026-07-26
