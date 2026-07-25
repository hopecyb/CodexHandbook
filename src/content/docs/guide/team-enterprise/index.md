---
title: 团队与企业
description: 采用、标准、管理与安全治理——让 Codex 规模化落地而不失控。
sidebar:
  order: 70
---

**团队与企业**章节面向工程负责人、平台与安全团队：在个人能用的 Codex 之上，建立**可审查、可审计、可度量**的协作方式。与 [学习路径 · 团队](/guide/learning-paths/team/) 编排阅读，本章提供治理深度页。

## 这篇解决什么问题

- 小团队试点到组织推广的路径
- 安全、合规与扩展（Plugin/MCP）风险
- 与本手册其他章节的交叉引用

## 适合谁

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

## 参考来源

- KimYx0207 安全与企业章节
- freestylefly/CodexGuide 团队 playbook
- stormzhang 安全教程

---

**状态：** review  
**适用产品：** 组织版 / 团队功能（视套餐）  
**最近核验：** 2026-07-25
