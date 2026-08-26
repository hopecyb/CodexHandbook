---
title: AGENTS.md 作用域与优先级
description: 准确理解全局、项目根与当前目录规则如何被发现和合并。
sidebar:
  order: 20
---

Codex 在每次运行开始时构建一条指令链。核心不是一张包含“组织策略、配置、提示词”的猜测排序表，而是先准确理解 `AGENTS.md` 自身的发现顺序。

## 官方发现顺序

1. **全局层**：在 Codex home（默认 `~/.codex`）先找 `AGENTS.override.md`，没有时才读 `AGENTS.md`；这一层只使用第一个非空文件。
2. **项目层**：从项目根（通常是 Git 根）一路走到当前工作目录；每个目录依次检查 `AGENTS.override.md`、`AGENTS.md` 和配置的 fallback 文件名，每层最多取一个。
3. **合并**：从根到当前目录拼接，越靠近当前目录的文件越晚出现，因此可覆盖较早的指导。

Codex 跳过空文件；合并内容达到 `project_doc_max_bytes` 后停止，默认上限为 32 KiB。

## Monorepo 示例

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

从 `services/payments` 启动时，根 `AGENTS.md` 会先加载；该目录的 `AGENTS.override.md` 存在时，同目录 `AGENTS.md` 被忽略。

根文件写全仓规则，例如包管理器、通用测试和安全禁区；嵌套文件只写该服务的增量规则。不要复制 80% 相同内容。

## 任务提示词怎么配合

`AGENTS.md` 负责长期、可版本管理的项目约定；提示词负责本次目标、范围和验收。示例：

```text
遵守适用 AGENTS.md。本次只修改 services/payments/retry.ts 和测试；
不要进行密钥轮换；运行 make test-payments，并报告真实结果。
```

提示词不能把不可突破的系统、组织、沙箱或权限边界变成可用能力。遇到冲突时不要靠一句“忽略之前规则”猜优先级，应先要求 Codex列出加载的 instruction sources，再收窄任务。

## 验证实际加载内容

从目标目录启动新会话并询问：

```text
在开始工作前，列出本次加载的 AGENTS.md / AGENTS.override.md 来源顺序，
并分别概括每个文件新增的约束。不要修改文件。
```

`AGENTS.md` 在启动时读取；修改后应新开运行或新会话验证，不要假设当前会话已热更新。

## fallback 与容量

已有 `TEAM_GUIDE.md` 时可配置：

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

fallback 只在同目录没有更高优先文件时生效。扩容前先删重复和无关背景，避免把重要规则挤出上下文。

## 官方依据

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

---

**状态：** verified

**适用产品：** App、CLI、IDE、Cloud

**最近核验：** 2026-08-26
