---
title: 自动化模板
description: 重复任务与可复用流程。
---

# 自动化模板

## 模板

```text
目标：把【重复任务】自动化为【脚本/Skill/定时任务】。
触发：【手动 / 定时 / CI】
输入：【数据源、配置文件】
约束：
- 失败时明确退出码与日志位置
- 不硬编码密钥；用环境变量
- 提供 dry-run 模式
验收：
- 在【示例输入】上输出预期结果
- 文档说明如何运行与排障
```

## 相关

- [长任务提示](/prompts/long-running-tasks/)
- [自动化日报案例](/cases/automate-a-daily-report/)


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
