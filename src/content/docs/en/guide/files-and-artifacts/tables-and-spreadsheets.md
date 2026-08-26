---
title: Tables and Spreadsheets
description: Read, clean, analyze, and export CSV, Excel, and tabular data—without breaking structure or encoding.
locale: en
source_locale: zh-CN
source_revision: f9b9dfc
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Spreadsheet tasks are a classic silent-failure category: delimiter, encoding, headers, formulas, or date format—one mistake breaks everything downstream.

## What this page covers

- Safe read/write of CSV / Excel with Codex
- Prompt structure for data analysis tasks
- Verifying counts and numbers

## Format choice

| Format | Pros | Watch out |
|---|---|---|
| CSV | Text-diffable, universal | Encoding (UTF-8 BOM), delimiter, quoting |
| TSV | Fewer comma conflicts | Same as CSV |
| XLSX | Multiple sheets, formulas | Binary, hard diff; use libraries |
| Google Sheets | Collaboration | Often via MCP or CSV export |

Small data for Git: **prefer CSV/TSV**. Complex reports: **source CSV + script to generate XLSX**.

Three questions:

- Need diff, traceability, reproducibility: CSV / TSV
- Deliver to Excel users: export XLSX
- Do not confuse “view format” with “best processing format”

## Read and analyze

Recommended prompt shape:

```text
File: data/sales_2025.csv
Encoding: UTF-8
Task: Summarize revenue by region, output summary.csv
Constraints: Do not modify source; treat blanks as 0; two decimal places
Verification: Print first 5 rows + total row count
```

Context: [File and folder context](/en/guide/context/file-and-folder-context/)

## Why spreadsheets fail quietly

Common traps:

- Dates as text vs date
- Blanks as 0 vs skip vs error
- Which column is the unique key
- Rounding for decimals and currency
- Whether source file may change

Without clarity, Codex may “finish” with unreliable results.

## Write and clean

- Specify **column names, order, types** (dates as ISO 8601)
- Batch large tables to avoid memory blowups
- Deduplication and merge keys in the task—do not let Agent guess “primary key”

## Common misconceptions

### 1. Opens in Excel ≠ correct

“Opens” and “data intact” are different.

### 2. Looks fine in Excel ≠ fine downstream

Errors may appear only when another system consumes:

- Wrong encoding
- Column order changed
- Numeric types changed
- Formulas baked to values

### 3. Let Agent decide blanks, dates, keys

Usually avoid—explicit rules are steadier.

## Five things to state for spreadsheet tasks

1. Input file
2. Output filename
3. Columns to keep, aggregate, or clean
4. Blanks, dates, duplicates handling
5. How to verify results

Much steadier than “clean up this Excel.”

Python: `pandas`; Node: `csv-parse` / `xlsx`—document project standard in `AGENTS.md`.

## Verification

- Row counts and totals cross-check against source
- Open Excel and confirm dates are not stored as numbers wrongly
- [Verify artifacts](/en/guide/quality/verify-artifacts/): sample comparison

For spreadsheets, clarity on columns, types, rules, and acceptance matters most.

## Common mistakes

- CSV garbled in Excel (missing BOM or wrong encoding)
- Float totals without rounding rules
- Edit formulas in Excel without reproducible script

## Acceptance checklist

- [ ] Column names and types match downstream contract
- [ ] Totals/samples match manual or SQL check
- [ ] Source file not overwritten unexpectedly (or change visible in diff)

## Reference sources
- [Define constraints](/en/prompts/constraints-and-boundaries/)
---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against verified file/folder context, verify-artifacts, constraints pages; stable principle: explicitly state columns, types, blanks, dates, verification—not a single library as the only implementation.  
**Last verified:** 2026-07-26
