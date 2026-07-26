---
title: 分析表格
description: 上传或引用表格数据，完成汇总与洞察。
---

# 分析表格

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 创作者 / 业务 |
| 客户端 | App |
| 预估耗时 | 30–60 分钟 |

## 1. 目标与背景

**目标：** 对 CSV/Excel 做清洗、汇总与可视化建议。

**成功标准：** 结论可复现，关键数字可追溯到原表行/列。

## 2. 推荐提示词

```text
输入：@data/sales-q1.csv
目标：按区域汇总销售额、环比、Top 3 产品；标出异常值。
约束：不要修改原文件；输出 summary.md 与可选 chart 说明。
验收：summary 中每个数字注明计算方式或引用列名。
```

## 3. 验证

- 抽样复核 2–3 个汇总数字
- 确认无 PII 写入日志或外发

## 4. 相关

- [表格与电子表格](/guide/files-and-artifacts/tables-and-spreadsheets/)
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** OpenAI Developers 当前 Codex use cases 仍包含“Query tabular data”“Clean and prepare messy data”；本页示例聚焦对 CSV/Excel 做只读清洗、汇总与异常分析，并要求关键数字可追溯到原表字段，和当前官方场景一致。  
**最近核验：** 2026-07-26
