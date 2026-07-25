---
title: Hooks 概述
description: 在 Agent 关键节点插入校验、日志与审计——团队安全与合规的扩展点。
---

**Hooks** 让你在 Codex 执行链路的固定节点运行自定义逻辑：例如提交前扫描密钥、记录 MCP 调用、阻断危险命令。它们不是替代 [审批与沙盒](/04-product-guides/cli/approvals-and-sandbox/)，而是**补充策略与可观测性**。

## 这篇解决什么问题

- Hooks 与 Skill、MCP 的区别
- 典型团队用例
- 设计 Hook 时的安全原则

对比选型：[如何选择扩展方式](/07-extensions-automation/choosing-an-extension-method/)

## Hooks 做什么

| 阶段（概念） | Hook 可做的事 |
|---|---|
| 工具调用前 | 拒绝含 `rm -rf`、外泄 `.env` 的命令 |
| 工具调用后 | 写审计日志到 SIEM |
| 会话结束 | 汇总变更文件列表 |
| PR 创建前 | 检查 issue 编号格式 |

具体事件名与配置格式以 [官方 Hooks 文档](https://developers.openai.com/codex) 为准。

## 与 Skill / MCP 的区别

| | Hooks | Skill | MCP |
|---|---|---|---|
| 触发 | 系统事件 | 用户或模型调用 | 工具请求 |
| 目的 | 策略、审计 | 工作流说明 | 外部系统 |
| 谁维护 | 平台/团队基础设施 | 产品或工程团队 | 集成开发者 |

## 推荐团队用例

1. **密钥泄露检测**：diff 中出现 AWS key 模式则阻断
2. **许可证头检查**：新文件缺公司版权声明时警告
3. **合规日志**：谁、何时、对哪仓库执行了写操作（脱敏）
4. **与 CI 对齐**：本地 Hook 规则与 GitHub Action 尽量同源

## 设计原则

- **快**：Hook 超时会拖慢每次工具调用
- **确定**：避免在 Hook 里再调 LLM
- **可测试**：用固定输入单测 Hook 脚本
- **可关闭**：紧急时团队能绕过（带审计）

安全视角参考路线图 `11-team-enterprise`；个人用户可先从只读日志 Hook 开始。

## 常见错误

- Hook 脚本本身有网络写权限，变成新攻击面
- 与 `AGENTS.md` 规则重复且矛盾
- 未版本化 Hook 配置，队友环境不一致

## 验收清单

- [ ] 能说明本团队最需要的一个 Hook 场景
- [ ] Hook 失败时有明确错误信息给开发者
- [ ] 配置纳入代码审查

## 参考来源

- OpenAI Codex Hooks 文档
- stormzhang `22-hooks.md`
- KimYx0207 CX-08
- freestylefly/CodexGuide 审计与合规

---

**状态：** review  
**适用产品：** CLI / App（视版本）  
**最近核验：** 2026-07-25
