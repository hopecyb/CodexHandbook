---
title: Monorepo 中的 AGENTS.md
description: 在单仓库多包结构下放置项目指令、作用域与测试命令的示例模式。
---

Monorepo 里多个 app、共享包、不同技术栈并存——一份巨型 `AGENTS.md` 容易让 Agent **改错包**或跑错测试。本页给出可复用的**分层说明**模式（示例，请按仓库裁剪）。

## 这篇解决什么问题

- 根目录与子包如何分工写指令
- 如何让 @ 文件与路径约束对齐包边界
- 与 CI / Cloud 环境命令一致

## 推荐结构（示例）

```text
repo-root/
  AGENTS.md              # 全局：分支策略、commit 规范、禁止事项
  apps/web/AGENTS.md     # 前端：框架、测试命令、路由约定
  apps/api/AGENTS.md     # 后端：API 风格、迁移纪律
  packages/shared/       # 可仅在根文档链接，或简短子说明
```

根 `AGENTS.md` 应包含：

- 哪些目录**禁止** Agent 修改（如 `infra/prod/`）
- 各子包的**负责人或文档链接**
- 全局安装命令：`pnpm install` 在根执行

## 子包 AGENTS.md 模板片段

```markdown
## 范围
仅修改 `apps/web/**`，除非任务明确要求跨包改动。

## 开发
- 安装：在仓库根 `pnpm install`
- 开发：`pnpm --filter web dev`
- 测试：`pnpm --filter web test`
- 类型检查：`pnpm --filter web typecheck`

## 依赖
共享类型从 `@acme/shared` 导入，不复制粘贴。
```

## 任务 prompt 配合

跨包重构时**显式列出路径**：

```text
目标：在 apps/web 使用新 API 客户端
允许修改：apps/web/**, packages/api-client/**
禁止：直接改 apps/api 服务端
验收：pnpm --filter web test && pnpm --filter api-client test
```

见 [文件与目录上下文](/guide/context/file-and-folder-context/)

## Cloud 与 CI

Monorepo 在 Cloud 上常因**未在根安装**或 filter 错误而失败。在根 `AGENTS.md` 写明：

- 默认工作目录为仓库根
- 单包任务的 filter 命令
- 缓存策略（若使用 turborepo/nx，注明任务图）

[Cloud 环境](/guide/web-and-cloud/cloud-environments/)

## 常见错误

- 只在 `apps/web` 写说明，Agent 却在根目录乱改 lockfile
- 各子包测试命令不一致且未文档化
- 子包 AGENTS.md 与根文档冲突

## 验收清单

- [ ] 根与子包至少各有一份可读的 scope 说明
- [ ] 任意包可单独跑通测试命令
- [ ] 跨包任务在 prompt 中写清允许路径

## 参考来源

- freestylefly/CodexGuide monorepo playbook
- codex.bozhouai.com 大型仓库章节
- stormzhang monorepo 与 Git 实践

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
