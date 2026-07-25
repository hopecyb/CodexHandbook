---
title: 案例：竞品功能对比表
description: 带引用的研究与表格产出——非研发读者也能复用的工作流。
---


## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 产品、运营、研究者 |
| 客户端 | App 或 CLI |
| 预估耗时 | 45 分钟 |
| 核验日期 | 2026-07-25 |

## 1. 目标与背景

**目标：** 产出一份 3–5 个竞品的对比表（功能、定价线索、适用场景），每个结论附来源。

**成功标准：**

- Markdown 表格 + 「待确认」标注
- 不捏造价格与版本号
- 不将内部机密写入对外文档

## 2. 准备

- 明确对比维度（事先写在 prompt 或 `@brief.md`）
- 启用 [网页搜索](/guide/tools/web-search/)（若产品支持）

## 3. 工作流

遵循 [带引用的研究](/cases/workflows/research-with-sources/)：

```text
对比 A/B/C 三家的「团队协作」功能：
每个维度给 1–2 句说明 + 来源 URL；
官方文档优先于博客；
价格若无法核验标「待确认」；
输出 markdown 表格，不要改仓库其他文件。
```

**验证：** 人工点开 3 个 URL；检查日期与 [核验政策](/guide/start-here/handbook-version-policy/)。

## 4. 失败与恢复

- 来源冲突：要求并列两说，不强行统一
- 上下文过长：拆成「先 A vs B，再加入 C」

## 5. 沉淀

- 对比表模板存入 `templates/competitor-matrix.md`
- 可转为 Skill：`source-backed-research`

## 6. 相关章节

- [产物优先](/cases/workflows/artifact-first-work/)
- [验证来源](/guide/quality/validate-sources/)

---

**状态：** review  
**适用产品：** App / CLI  
**最近核验：** 2026-07-25
