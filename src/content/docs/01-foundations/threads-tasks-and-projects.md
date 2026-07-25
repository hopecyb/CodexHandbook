---
title: 线程、任务与项目
description: 理清会话、任务和项目工作区的关系。
---


不同产品用词可能略有差别，本手册统一这样理解：

- **项目 / 工作区**：Codex 绑定的文件夹或仓库根
- **线程 / 会话**：一段连续对话，上下文会累积
- **任务**：一次有明确目标的工作（可包含多步工具调用）

## 实践建议

- 主题变了就 **新开线程**，避免旧上下文干扰
- 长任务写清阶段与检查点，见 [长任务提示](/05-core-capabilities/prompting/prompting-for-long-tasks/)
- 需要跨会话继续时，做交接摘要：见 [交接与恢复](/05-core-capabilities/agent-work/handoff-and-resume/)


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

