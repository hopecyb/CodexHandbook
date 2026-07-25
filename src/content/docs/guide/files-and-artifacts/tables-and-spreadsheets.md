---
title: 表格与电子表格
description: CSV、Excel 与表格类数据的读取、清洗、分析与导出——避免破坏结构与编码。
---

表格任务是「看起来简单、容易 silently 做错」的典型：分隔符、编码、表头、公式与日期格式任一出错，下游全崩。

## 这篇解决什么问题

- 如何让 Codex 安全读写 CSV / Excel
- 数据分析类任务的 prompt 结构
- 如何验收数字与行数

## 格式选择

| 格式 | 优点 | 注意 |
|---|---|---|
| CSV | 文本可 diff、通用 | 编码（UTF-8 BOM）、分隔符、引号转义 |
| TSV | 少逗号冲突 | 同 CSV |
| XLSX | 多表、公式 | 二进制，diff 困难；用库读写 |
| Google Sheets | 协作 | 常经 MCP 或导出 CSV |

小数据、要进 Git：**优先 CSV/TSV**。复杂报表：**源数据 CSV + 生成 XLSX 脚本**。

## 读取与分析

推荐 prompt 结构：

```text
文件：data/sales_2025.csv
编码：UTF-8
任务：按 region 汇总 revenue，输出 summary.csv
约束：不修改原文件；空值按 0 处理；保留两位小数
验收：打印前 5 行 + 总行数
```

上下文：[文件与目录上下文](/guide/context/file-and-folder-context/)

## 写入与清洗

- 明确**列名、顺序、类型**（日期用 ISO 8601）
- 大表分批处理，避免一次性加载爆内存
- 去重、合并键写进任务说明，不要让 Agent 猜「主键」

若用 Python：`pandas` 读写；若用 Node：`csv-parse` / `xlsx` 等——在 `AGENTS.md` 约定项目标准库。

## 与验证

- 行数、合计是否与源数据交叉校验
- 打开 Excel 看日期是否被当成数字
- [验证产物](/guide/quality/verify-artifacts/)：抽样对比

## 常见错误

- Excel 打开 CSV 中文乱码（缺 BOM 或错编码）
- 浮点合计误差未四舍五入说明
- 在 Excel 里改公式却不保存为可复现脚本

## 验收清单

- [ ] 列名与类型符合下游消费方约定
- [ ] 合计/抽样与人工或 SQL 核对一致
- [ ] 原文件未被意外覆盖（或变更在 diff 中可见）

## 参考来源

- stormzhang 数据处理教程
- codex.bozhouai.com 表格任务模板
- [定义约束](/prompts/constraints-and-boundaries/)

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
