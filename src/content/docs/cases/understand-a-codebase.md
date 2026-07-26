---
title: 理解代码库
description: 只读探索陌生仓库，建立可行动的认知地图。
---

# 理解代码库

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 开发者 |
| 客户端 | CLI / IDE |
| 预估耗时 | 30–60 分钟 |

## 1. 目标与背景

**目标：** 在改动前弄清模块边界、入口与风险区域。

**成功标准：** 能向他人解释「从请求到响应」或「从命令到输出」的主路径。

## 2. 推荐提示词

```text
先不要改代码。阅读 @src/ 与 @README，用 8 条以内说明：
1. 项目用途与技术栈
2. 主要目录职责
3. 启动/测试入口
4. 与【我的目标】最相关的 3 个文件
5. 3 个待我确认的问题
```

## 3. 验证

- 对照实际 `package.json` / 入口文件抽查
- 将结论写入 issue 或 `AGENTS.md` 摘要

## 4. 相关

- [理解模板](/prompts/templates/understand/)
- [探索—计划—执行—验证](/cases/workflows/explore-plan-execute-verify/)
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** OpenAI Developers 当前 Codex use cases 仍包含“Understand large codebases”，重点是追踪主路径、识别关键模块并快速定位相关文件；本页示例属于只读探索场景，与官方当前定位一致。  
**最近核验：** 2026-07-26
