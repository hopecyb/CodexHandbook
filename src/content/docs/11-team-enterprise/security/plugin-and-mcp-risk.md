---
title: Plugin 与 MCP 风险
description: 扩展能访问什么、团队如何批准与监控——Skills、Plugin、MCP 的统一风险视角。
---

**Plugin** 与 **MCP 服务器**把 Codex 连接到外部系统：工单、数据库、内部 API。能力越强，[威胁模型](/11-team-enterprise/security/threat-model/) 中的外泄与越权面越大。本章与 [MCP 概述](/07-extensions-automation/mcp/mcp-overview/)、[Plugins 概述](/07-extensions-automation/plugins/plugins-overview/) 配合阅读。

## 这篇解决什么问题

- 扩展的风险分类
- 批准清单与版本固定
- 调试与事故时的隔离

## 风险分类

| 类型 | 示例 | 控制 |
|---|---|---|
| 数据读 | MCP 读客户库 | 只读账号、行级权限 |
| 数据写 | 自动关工单、改配置 | 人工审批、双写确认 |
| 网络 | 任意外连 | 出口 allowlist |
| 凭据 | OAuth token 落盘 | 密钥托管、短期 token |
| 供应链 | 第三方 server 更新投毒 | 固定版本、hash 锁定 |

## 团队批准流程（推荐）

```text
申请（用途、数据分级、权限）→ 安全/架构 review
    → 进入「批准清单」仓库或内部目录
    → 固定版本号 + 负责人
    → 季度重审或随 major 升级重审
```

个人实验性 MCP **不应**与生产仓库同一 token。

## 最小实践

1. **默认拒绝**安装未在清单内的远程 MCP
2. **本地 MCP** 仍可能读全盘——用专用 OS 用户或容器
3. **日志**：记录 tool 名与参数摘要（脱敏），见 [Hook 审计](/07-extensions-automation/hooks/hooks-examples/)
4. **Skill 与 MCP 分工**：Skill 说明流程，MCP 执行外联——两者权限取并集，取最严策略

## 常见错误

- 「官方市场」等于「已安全评审」
- 开发环境与生产共用一个 MCP OAuth 应用
- 调试时打开 `DEBUG=*` 把 token 打进 CI 日志

## 验收清单

- [ ] 有书面批准清单或等价流程
- [ ] 每个生产 MCP 有 owner 与数据分级
- [ ] 与 [Skill 安全](/07-extensions-automation/skills/skill-security-and-versioning/) 政策一致

## 参考来源

- KimYx0207 MCP/Plugin 安全
- stormzhang MCP 章节
- [调试 MCP](/07-extensions-automation/mcp/debugging-mcp/)

---

**状态：** review  
**适用产品：** CLI / App / Cloud  
**最近核验：** 2026-07-25
