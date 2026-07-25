---
title: 个人偏好
description: 用户级配置、默认模型与界面习惯——不污染仓库的团队约定。
---

**个人偏好**是你本机跨项目生效的设置：默认模型、主题、审批习惯、个人 Skill 路径等。与仓库内的 `AGENTS.md` 不同，个人偏好**不应**假设队友相同。

## 这篇解决什么问题

- 什么该放个人层、什么该放项目层
- 如何与 [Profile](/06-customization/configuration/profiles/) 配合切换场景
- 避免个人宽松设置泄露到团队仓库

优先级总览：[个性化配置](/06-customization/) · [作用域与优先级](/06-customization/agents-md/scope-and-precedence/)

## 适合放在个人偏好的内容

| 内容 | 示例 |
|---|---|
| 默认模型与推理档位 | 个人机器性能与套餐 |
| UI 主题、字体、通知 | 桌面 App [设置](/04-product-guides/desktop-app/settings/) |
| 个人 MCP（私有工具） | 本机数据库只读（慎授权） |
| 个人 Skill 库路径 | 不与团队 Plugin 冲突 |
| 终端别名、`codex` 启动目录习惯 | 见 [CLI 配置](/04-product-guides/cli/configuration/) |

## 不应只放个人层的团队内容

- 代码风格、测试命令、目录结构 → **项目 `AGENTS.md`**
- 强制沙盒策略 → **项目配置或组织托管**
- 客户仓库的合规要求 → **文档 + CI**，不能靠个人记忆

## 推荐实践

1. **工作 / 个人 Profile 分离**：客户项目用严格 Profile，练习项目可宽松
2. **进新仓库先读项目规则**，再决定要不要临时覆盖个人默认
3. **定期清理**个人 MCP 与 Skill，移除不再使用的第三方源
4. 换机或重装时，导出配置清单（不含密钥值）

## 与记忆功能

产品若提供「记忆」或持久偏好，见 [记忆与持久上下文](/06-customization/memories-and-persistent-context/)。记忆适合稳定习惯；**项目特定约束仍应以仓库文件为准**。

## 常见错误

- 在个人配置里写死公司 API key
- 个人全局自动批准 shell，处理客户代码
- 队友 clone 仓库后抱怨「规则不生效」——规则从未提交

## 验收清单

- [ ] 能说出个人 vs 项目 vs 组织三层各一例
- [ ] 至少为一个客户项目配置严格 Profile
- [ ] 仓库内无个人密钥

## 参考来源

- freestylefly/CodexGuide 个人与团队配置
- stormzhang `18-config.md`
- KimYx0207 CX-04

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25
