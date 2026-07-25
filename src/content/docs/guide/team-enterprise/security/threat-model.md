---
title: 威胁模型
description: Codex 在团队环境中的主要风险面——数据、工具、扩展与供应链。
---

**威胁模型**帮助安全与平台团队对齐：Codex 不是「又一个聊天窗口」，而是能**读代码、跑命令、调外部工具**的 Agent。本章给出起步视角，具体控制项对照 [权限矩阵](/guide/reference/permission-matrix/) 与 [沙盒](/guide/foundations/sandbox-and-network/)。

## 这篇解决什么问题

- 资产与信任边界
- 典型威胁与缓解方向
- 与规则、Hooks、CI 的分工

## 资产与边界

| 资产 | 示例 |
|---|---|
| 源代码与 IP | 私有仓库、未发布设计 |
| 凭据 | API key、`.env`、云 IAM |
| 用户数据 | PII、客户工单内容 |
| 基础设施 | CI、生产部署管道 |

**信任边界：** 模型与扩展默认在**不可完全信任**一侧；人审与策略在边界上 enforcement。

## 威胁概览

| 威胁 | 描述 | 缓解方向 |
|---|---|---|
| Prompt 注入 | 恶意 issue/网页诱导越权操作 | 输入消毒、只读 CI、[注入专题](/guide/team-enterprise/security/prompt-injection/) |
| 过度权限 | token、沙盒过宽 | 最小权限、分支保护 |
| 数据外泄 | 命令/MCP 外传仓库内容 | 网络策略、DLP、审计 Hook |
| 恶意扩展 | 未审查 Plugin/MCP | [扩展风险](/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| 供应链 | 依赖与脚本投毒 | 与现有 SCA、code review 结合 |
| 误操作 | Agent 删库、错 push | 命令 deny、无 push CI |

## 推荐分层控制

```text
L1 身份与租户（SSO、组）
L2 组织托管配置与模型策略
L3 仓库 rules + AGENTS.md
L4 沙盒 / 审批 / Hooks
L5 人工 review 与分支保护
```

## 常见错误

- 只做培训不写技术控制
- 假设「模型足够聪明」不会犯错
- 生产密钥出现在 Agent 可写路径

## 验收清单

- [ ] 能列出本组织 Top 3 关切资产
- [ ] 每条威胁有对应控制或接受风险记录
- [ ] 与事件响应联系人已对齐

## 相关章节

- [敏感上下文](/guide/context/sensitive-context/)
- [人工审批模式](/cases/workflows/human-approval-patterns/)

## 参考来源

- KimYx0207 企业安全
- OpenAI 企业安全白皮书（官方）
- CodexGuide 合规实践

---

**状态：** review  
**适用产品：** 团队 / 企业  
**最近核验：** 2026-07-25
