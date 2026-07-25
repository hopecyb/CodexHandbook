---
title: 什么是 AGENTS.md
description: 项目级持久指令文件——给 Codex 的「协作合同」，不是架构百科。
---


`AGENTS.md` 是放在仓库（或子目录）里的 **Markdown 项目指令**，Codex 在进入该项目时会读取，用来对齐编码风格、测试要求、提交规范和禁区。

## 先理解一个核心概念

把它想成**新同事入职手册的浓缩版**：只写「在这个仓库里怎么干活」，不写公司发展史。

| 适合写进 AGENTS.md | 不适合写 |
|---|---|
| 如何跑测试、lint、构建 | 完整 API 文档（应链到正式文档） |
| 目录约定、命名风格 | 上千行历史设计决策 |
| 禁止事项（如不要改 `main`、不要提交密钥） | 每次任务都不同的临时需求 |
| 提交信息、PR 检查清单 | 与代码无关的个人偏好 |

## 最小可用做法

在仓库根目录创建 `AGENTS.md`：

```md
# 项目指令

## 构建与测试
- 安装：`pnpm install`
- 测试：`pnpm test`（改逻辑后必须跑）
- 类型检查：`pnpm typecheck`

## 代码风格
- 使用 TypeScript 严格模式
- 新组件放在 `src/components/`，文件名 PascalCase

## 禁止
- 不要修改 `pnpm-lock.yaml` 除非依赖变更
- 不要提交 `.env` 或 API 密钥
- 未经确认不要执行 `git push`

## 完成定义
- 相关测试通过
- 无新增 lint 错误
- 在 PR 描述中说明验证步骤
```

保存后，在新任务里只需写**本次差异**，例如：「修复登录页在 Safari 下的布局问题，按 AGENTS.md 验收。」

## 放哪里

| 位置 | 作用域 |
|---|---|
| 仓库根 `AGENTS.md` | 整个项目默认生效 |
| 子目录 `AGENTS.md` | 该目录及子路径（monorepo 常见） |
| 用户级说明 | 用个人配置或全局偏好，不要与项目指令混为一谈 |

作用域与冲突处理见 [作用域与优先级](/guide/customization/agents-md/scope-and-precedence/)。

## 与 Skill、斜杠命令的区别

| 机制 | 本质 | 典型用途 |
|---|---|---|
| AGENTS.md | 持久、被动的项目规则 | 风格、测试、禁区 |
| Skill | 可复用工作流包（`SKILL.md`） | 发版清单、专项审查流程 |
| 斜杠命令 | 你主动触发的快捷入口 | `/review`、一次性工作流 |

项目规则用 `AGENTS.md`；**可重复、可分享的一套步骤**更适合做成 [Skill](/skills/overview/)。

## 常见错误

- 文件过长，模型只读到前半段——**把硬约束放在前 30 行**
- 写了「永远自动 push」类高风险指令，与 [权限与审批](/guide/foundations/permissions-and-approvals/) 冲突
- 团队无人维护，文档与真实脚本命令不一致

## 安全边界

`AGENTS.md` **不能替代**沙盒与审批。即使写上「可以随意执行命令」，产品仍可能要求你确认；团队托管策略可进一步收紧。

## 参考来源

- OpenAI Codex 项目上下文说明
- freestylefly/CodexGuide：`docs/advanced/02-agents-md.md`
- stormzhang/ai-coding-guide：`codex/11-agents-md.md`

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
