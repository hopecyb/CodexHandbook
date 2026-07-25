---
title: 项目说明
description: 除 AGENTS.md 外的项目级上下文——README、docs 与对话引用的分工。
---


「项目说明」是 Codex 理解仓库的**静态上下文**，不限于单个文件格式。

## 项目上下文的组成

| 来源 | 作用 |
|---|---|
| `AGENTS.md` | 协作规则与命令（权威：本章 AGENTS 系列） |
| `README.md` | 项目是什么、如何启动 |
| `docs/` | 架构、ADR、运行手册 |
| 依赖与脚本 | `package.json`、`Makefile` 等可执行真相 |

Codex 会结合工具读取这些材料；你的任务是让**真相单一**——README 写的启动命令必须能跑通。

## 最小可用做法

1. 确保根 `README.md` 有：用途、安装、开发、测试四段
2. 把**重复给 Codex 的说明**沉到 `AGENTS.md`
3. 在任务里用 `@` 指向具体文件，而不是粘贴全文：

```text
按 @AGENTS.md 的测试要求，修复 @src/auth/login.ts 中的空指针。
相关设计见 @docs/auth-flow.md
```

## 与「对话上下文」的分工

- **项目说明**：几个月内相对稳定
- **对话上下文**：本次目标、约束、中间结论

长任务中若发现某条规则被反复提及，应**回写**到 `AGENTS.md` 或 `docs/`，而不是在十个线程里复制粘贴。见 [保持上下文聚焦](/guide/context/keep-context-focused/)。

## 常见错误

- README 过时，Codex 按错误命令操作
- 把所有文档塞进一个巨型 `CONTEXT.md`，无人维护
- 敏感信息放在公开仓库说明中

## 验收清单

- [ ] 新克隆仓库的人（或 Codex）可按 README + AGENTS.md 跑通测试
- [ ] 任务提示以 @ 引用为主，避免重复长背景

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
