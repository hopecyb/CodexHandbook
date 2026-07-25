---
title: 允许与拒绝规则
description: 用命令与路径规则约束 Agent 能执行的操作——个人习惯与团队底线。
---

**Rules（规则）** 在配置或项目文件中声明哪些 shell 命令、路径、工具调用**允许或禁止**，减少每次手动点审批，同时防止危险操作自动化。

## 这篇解决什么问题

- Allow / Deny 规则如何工作
- 与沙盒、审批弹窗、`AGENTS.md` 的关系
- 团队规则示例

## 规则类型（概念）

| 类型 | 示例 |
|---|---|
| 命令 allowlist | 允许 `npm test`、`git status` |
| 命令 denylist | 禁止 `rm -rf`、`curl \| bash` |
| 路径 | 禁止写 `../`、禁止读 `~/.ssh` |
| 网络 | 禁止出网或仅允许 registry 域名 |

与 [权限矩阵](/12-reference/permission-matrix/) 对照：规则是**可配置**的 enforcement，矩阵描述**典型默认**。

## 推荐分层

```text
组织托管策略（不可覆盖）
    ↓
项目 rules + AGENTS.md（Git 审查）
    ↓
个人 allowlist 补充（仅本机）
    ↓
单次任务 prompt 约束
```

## 团队示例（示意，非复制即用）

**允许：**

- 包管理器安装**项目内**依赖
- 运行文档中的测试脚本

**拒绝：**

- `git push`、`git reset --hard`
- 读写 `.env*`（除非明确任务）
- 向公网 POST 含仓库内容的请求

规则应写在团队可 review 的文件中，而非仅口头约定。

## 常见错误

- Allowlist 过宽（允许 `bash` 等价于允许一切）
- 只 deny 不 allow，审批仍然过多
- 规则与 `AGENTS.md` 矛盾

## 安全边界

- 规则**不能**替代 code review 与分支保护
- 恶意 prompt 可能诱导 Agent 尝试绕过规则——保持沙盒默认严格
- 变更规则走 PR，像改 CI 一样对待

## 参考来源

- stormzhang `15-permissions.md`、`18-config.md`
- KimYx0207 权限配置章节

---

**状态：** review  
**适用产品：** CLI / App  
**最近核验：** 2026-07-25
