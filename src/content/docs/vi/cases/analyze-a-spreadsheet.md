---
title: Analyze a spreadsheet
description: Upload or reference tabular data for summarization and insights.
locale: vi
source_locale: en
source_revision: c9b511c
translation_status: fallback
translated_at: '2026-07-28'
---

# Analyze a spreadsheet

## Meta information

| Field | Content |
|---|---|
| Audience | Creators / business |
| Client | App |
| Estimated time | 30–60 minutes |

## 1. Goal and background

**Goal:** Clean, summarize, and suggest visualizations for CSV/Excel data.

**Success criteria:** Conclusions are reproducible; key numbers trace back to original rows/columns.

## 2. Recommended prompt

```text
Input: @data/sales-q1.csv
Goal: Summarize sales by region, period-over-period change, and Top 3 products; flag outliers.
Constraints: Do not modify the original file; output summary.md and optional chart notes.
Acceptance: Every number in summary notes the calculation method or referenced column name.
```

## 3. Verification

- Spot-check 2–3 summary numbers
- Confirm no PII is written to logs or sent externally

## 4. Related

- [Tables and spreadsheets](/guide/files-and-artifacts/tables-and-spreadsheets/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' current Codex use cases still include "Query tabular data" and "Clean and prepare messy data"; this page focuses on read-only cleaning, summarization, and anomaly analysis of CSV/Excel, requiring key numbers to trace back to original fields—consistent with current official scenarios.
