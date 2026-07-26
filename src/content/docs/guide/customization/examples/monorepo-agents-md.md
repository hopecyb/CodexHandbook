---
title: Monorepo 中的 AGENTS.md
description: 在单仓库多包结构下放置项目指令、作用域与测试命令的示例模式。
---

Monorepo 里多个 app、共享包、不同技术栈并存——一份巨型 `AGENTS.md` 容易让 Agent **改错包**或跑错测试。本页给出可复用的**分层说明**模式（示例，请按仓库裁剪）。

## 这篇会讲什么

- 根目录与子包如何分工写指令
- 如何让 @ 文件与路径约束对齐包边界
- 与 CI / Cloud 环境命令一致

## 这类仓库为什么更需要分层说明

如果普通仓库像一套房子，monorepo 更像一栋楼。

楼里有不同房间、不同住户、不同规则。  
这时如果你只在大门口贴一张超长总说明，Codex 很容易出现两种问题：

- 看得到全部，但不知道当前该遵守哪一层
- 明明只想改一个包，结果顺手动到了别的地方

重点是让规则跟着目录边界一起变清楚，而不是机械地多写几份 `AGENTS.md`。

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

## 常见误会

### 1. 目录变多后，别把说明都堆到根目录

很多人第一次做 monorepo 指令，会下意识把所有约束都塞进根 `AGENTS.md`。

结果就是：

- 文件很长
- 当前任务真正相关的规则不突出
- 子包自己的特殊约定很容易被淹没

更稳的做法通常是：根目录写全局共识，子包写本地特殊规则。

### 子包说明的作用是缩小误改范围，不是重复根规则

如果 `apps/web` 和 `apps/api` 的开发命令、测试命令、约束方式都不同，那把这些差异写在各自目录，反而更能帮 Codex 少走弯路。

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

## 怎么判断该写在根目录还是子包目录

如果你不确定某条说明该写在根目录还是子包目录，可以先问：

1. 这是不是所有包都要遵守的共识
2. 这是不是只对某个目录成立
3. 这条规则如果放错地方，会不会让 Agent 改错范围

更像第 1 条，就进根目录；更像第 2、3 条，就更适合进子包目录。

## 验收清单

- [ ] 根与子包至少各有一份可读的 scope 说明
- [ ] 任意包可单独跑通测试命令
- [ ] 跨包任务在 prompt 中写清允许路径

Monorepo 里的 AGENTS.md 不需要一味集中；更合适的做法，是让“全局共识”和“目录局部规则”各自放在合适的位置。

## 参考来源

- freestylefly/CodexGuide monorepo playbook
- codex.bozhouai.com 大型仓库章节
- stormzhang monorepo 与 Git 实践

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
