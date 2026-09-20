---
caseCategory: office
directoryOrder: 10
title: From Sales CSV to a Verifiable Weekly Report
description: Practice cleaning, grouping, period comparisons, and independent reconciliation with 46 rows of synthetic sales data; download the complete materials and reference answers.
contentType: case
audiences: [creator, beginner]
task: data-analysis
level: beginner
estimatedMinutes: 40
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: The reference script was run, and independent integer-cent and SQL checks passed. This was an author self-check, not a test with ordinary readers or a second human reviewer.
  environment: Darwin 27.0.0 / arm64, Python 3.12.11; standard-library script, independent of a particular Codex client.
  evidence:
    - label: Execution and review record
      href: /downloads/sales-weekly-report/record.md
assets:
  - path: /downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip
    purpose: Complete exercise materials, reference answers, and checking scripts
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /en/cases/
  label: Choose a hands-on task
next:
  link: /en/guide/verification/
  label: Learn to verify results
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 2b4f164
---

In this exercise, deliver a weekly sales report, a regional summary, a product ranking, and a row-by-row cleaning ledger. The input is synthetic data made for this handbook; no real customer records are needed.

Level: beginner. The 30–45 minute estimate is editorial and has not been timed with readers. You should be able to give Codex local files. Reading the reference result does not require programming; running the validator requires Python 3.10+.

[Download the complete exercise pack v1.0.0 (ZIP)](/downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip) · [Download only the sales CSV](/downloads/sales-weekly-report/sales.csv)

## See the deliverable first

| Metric | Reference value | What to check |
|---|---:|---|
| Current-period net sales | ¥4,644.75 | Refunds must count |
| East region current net | ¥1,281.25 | 1,401.75 − 120.50 |
| Amount with missing date | ¥199.99 | Isolate it; do not guess its week |

The current period is 2026-09-07 to 09-13, and the previous period is 2026-08-31 to 09-06. The period-on-period growth for these two complete calendar weeks is 87.04%. This is a synthetic sample result, not an explanation of real business causes.

[View the reference report](/downloads/sales-weekly-report/summary.md). Try the exercise yourself before comparing answers.

## Download the materials

The complete pack contains a task brief, data dictionary, three prompts, the 46-row CSV, a reference report, three summary/ledger CSVs, a reference implementation, an independent checker, and a verification record. All are released under CC0 1.0 for modification and redistribution.

Extract and open the `sales-weekly-report` folder. Downloading only the CSV will not bring along the files referenced by the exercise.

## 1. Confirm files and definitions

Give Codex the task below. Clients differ in how they receive files; first make sure it actually read the files before continuing.

```text
Read brief.md, starter/data-dictionary.md, and starter/sales.csv. Confirm that
the files exist and list the fields, date range, row count, and row numbers
requiring special treatment. Do not edit the source table or look at solution.
Distinguish exact duplicates, missing dates, negative amounts, and valid zeros.
Describe the two-week definition from the dictionary. List any conflict; if
none exists, continue.
```

The source table has 46 rows: two refunds, one exact duplicate, and one row without a date. Keep only the first copy of an exact duplicate. Stop and investigate if rows with the same ID have different contents. Do not invent a missing date; zero amounts are valid. After treatment, 44 rows should be included.

## 2. Generate the report and calculation ledger

Continue with the pack's `prompts/02-report.md` and write outputs to `my-output/`:

| File | Required contents |
|---|---|
| `summary.md` | Total, period comparison, regions, current-period top three, data quality, and calculation basis |
| `region-summary.csv` | Each region's net sales for both weeks, difference, and growth; totals reconcile with the sum of regions |
| `top-products.csv` | Products sorted by current-period net sales, including refunds |
| `row-ledger.csv` | Each original row's number, inclusion decision, period, and amount |

Keep the inputs, `solution`, and `validation` unchanged. Follow the data dictionary's field names and table order so an independent checker can compare entries. The Southwest region's previous period is zero, so its growth is N/A, not 0% or infinite.

## 3. Reconcile independently, not by asking “is it right?”

From the extracted exercise directory, run:

```sh
python3 validation/check.py --output my-output
```

When all four deliverables exist and follow the defined calculations, it prints `result: PASS`. A changed input hash, omitted refund, grouping error, or ledger mismatch causes failure. If it fails, fix your own outputs; do not change the validator to accommodate them.

If you cannot run Python, at least check manually:

1. Seven positive East-region entries total ¥1,401.75. Add the refund of -¥120.50 on row 44 to get ¥1,281.25.
2. Sum the three current-period regions: 1,281.25 + 2,101.75 + 1,261.75 = 4,644.75.
3. O046 on row 47 lacks a date, so ¥199.99 does not enter either weekly total. O001 on row 46 is the duplicate.

Automated checks cannot review every natural-language conclusion. Read the report and remove claims about growth causes or business judgments without sources.

## 4. Practice correction: a missing refund

**Designed counterexample:** If all negative entries were filtered out, the current-period total would be ¥4,765.25, overstated by ¥120.50. During reference verification, the author changed a temporary result and confirmed that the checker rejects this wrong value. This is not a fabricated model conversation.

```text
Review valid records with net_sales below zero and explain whether they belong
in the result. Keep refunds negative, recalculate both periods' regional and
product summaries, and list the before-and-after difference. Do not alter
the original CSV or validator to make the failure disappear.
```

## 5. Recover when something goes wrong

| Symptom | Check first | Next step |
|---|---|---|
| File not found | Does the current directory contain `starter/sales.csv`? | Open the extracted directory and refer to the file; do not ask the agent to recreate missing data |
| Garbled Chinese or only one column | Is the encoding UTF-8 and the delimiter a comma? | Reimport the original CSV; do not hand-edit amounts |
| Total differs by 120.50 | Was refund R043 omitted? | Keep negative values per the dictionary and recalculate both weeks |
| Growth divides by zero | Was the Southwest previous period actually zero? | Write N/A and explain the zero base |
| Validator reports a missing file | Were all four outputs generated? | Complete them according to the dictionary, then rerun; a missing file is not an amount error |

## Completion criteria and next step

- The input table's hash is unchanged and all four outputs exist.
- Total, East-region net, and missing-date amount were independently reconciled.
- The report retains anomalies, the zero base, and calculation definitions without inventing causes.
- You distinguish checks actually run from those still requiring human review.

Keep your prompts and correction record. Before substituting new data, check fields and definitions again. This exercise's fixed validator is not suitable for arbitrary company data.

Continue with [verifying results](/en/guide/verification/) or return to the [cases](/en/cases/).
