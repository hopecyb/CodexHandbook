---
title: 并行聊天与 Agent
description: 用独立聊天和工作树并行推进可独立验收的任务。
sidebar:
  order: 30
---

并行的基本单位是拥有独立上下文、消息、结果与目标的聊天。适合并行的不是“步骤很多”，而是**任务彼此独立、文件边界清晰、可以分别验收**。

![主线程把独立任务分派给多个子 Agent，并汇总证据与冲突的编排图](/diagrams/subagent-orchestration-zh-cn.svg)

## 先判断能不能并行

| 可以并行 | 应保持串行 |
|---|---|
| 两个只读调研 | 后一项依赖前一项结论 |
| 代码与文档目录互不重叠 | 同时修改同一核心文件 |
| 两种方案分别制作原型 | 需求仍在频繁变化 |
| 每项都有独立测试 | 只能一起集成后才知道对错 |

官方建议避免让两个聊天写同一数据源；并行编码时使用不同 Git worktree。

## 从简单到复杂

### 1. 先并行只读任务

```text
任务：只分析认证模块最近一次失败，不改文件。
范围：src/auth/** 和对应测试。
交付：根因假设、证据路径、仍不确定之处、建议验证命令。
```

只读任务不会产生合并冲突，适合第一次练习。

### 2. 再并行写任务

为每个聊天写清目标、文件所有权、禁区和验收：

```text
目标：补充认证错误码文档。
所有权：仅 docs/auth/**。
禁区：不修改 src/**、锁文件和共享配置。
验收：运行 pnpm check:links，并报告结果。
```

编码聊天应放到独立[工作树](/guide/desktop-app/worktrees/)；共享配置由主聊天或指定单一所有者修改。

### 3. 最后统一回收

不要把结果直接拼起来。主聊天要核对：

1. 每项是否按边界交付；
2. 证据和测试是否可复现；
3. 不同结论是否冲突；
4. 合并后是否需要补跑集成测试。

## 长任务与 Goal 模式

在桌面应用、CLI 或 IDE 输入 `/goal` 可启动 Goal 模式。目标应包含结果、约束和验证标准。每个聊天有独立目标；并行运行不会扩大沙箱或权限，遇到需要决策的操作仍会暂停。

更细的工具级编排见[子 Agent](/guide/agent-work/subagents/)。

## 官方依据

- [长任务](https://learn.chatgpt.com/docs/long-running-work)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [子 Agent](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**状态：** verified

**适用产品：** App、CLI、IDE

**最近核验：** 2026-08-26
