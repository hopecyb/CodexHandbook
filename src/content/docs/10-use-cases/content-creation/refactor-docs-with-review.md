---
title: 带审查地重构文档站
description: 案例：在 Astro/Starlight 文档项目中批量更新链接与章节——小步 diff、构建验证。
---

本案例演示**内容工程**类任务：多文件 Markdown、侧边栏配置、构建验证。技术栈与本手册类似，但场景可迁移到任意静态站。

## 元数据

| 项 | 值 |
|---|---|
| 领域 | 内容创作 / 文档工程 |
| 入口 | CLI 或 IDE |
| 风险 | 中（大量链接与导航） |
| 时长 | 1～3 小时（视规模） |

模板说明：[案例模板](/10-use-cases/case-study-template/)

## 背景

文档站新增一章后，需要：

1. 更新 `astro.config` 侧栏 slug
2. 修正文内相对链接
3. `npm run build` 零错误

人工易漏 slug；适合 Agent **按清单执行 + 构建验收**。

## 准备

- [ ] 干净 git 分支
- [ ] 本地能跑通 `npm run build`
- [ ] 列出新增页面路径与目标 sidebar 位置

## 任务 prompt（示例）

```text
目标：为 12-reference 新增 environment-variables.md 并接入侧栏与 index 链接。
约束：只改 src/content/docs 与 astro.config.mjs；不升级依赖。
验收：npm run build 成功；无死链。
步骤：先改 config，再写 md，最后更新 12-reference/index.md。
```

## 执行要点

- **先 config 后内容**：避免 build 报 missing slug
- 每批 3～5 文件 commit，便于 review
- 用 [探索—计划—执行—验证](/09-workflows/explore-plan-execute-verify/)

## 检查

- [ ] 侧栏每一项 slug 有对应文件
- [ ] 站内链接用相对路径规范
- [ ] build 日志无 Starlight 警告（若团队要求零警告）

## 失败恢复

| 问题 | 处理 |
|---|---|
| Sidebar slug 报错 | 对照 astro 文档改 slug 或补 md |
| 死链 | `grep` 目标路径；改链接或补页 |
| 构建 OOM | 分批改；本地加 Node 内存 |

## 复盘

- 第三次同类「新章+侧栏」应沉淀为 Skill
- ROADMAP 勾选完成项，避免文档与计划脱节

## 参考来源

- 本仓库实际 M2 文档迭代流程
- codex.bozhouai.com 文档维护案例（结构参考）

---

**状态：** review  
**适用产品：** CLI / IDE  
**最近核验：** 2026-07-25
