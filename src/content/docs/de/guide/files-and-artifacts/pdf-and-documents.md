---
title: PDF and Documents
description: Scope, tools, and verification when Codex reads, summarizes, or generates PDFs and long documents.
locale: de
source_locale: en
source_revision: b882355
translation_status: fallback
translated_at: '2026-07-28'
---

PDFs are common for specs, papers, scans, and exported reports. Unlike plain text, PDFs are **structurally complex, large, and hard to diff**—they need explicit task design.

Most PDF issues: incomplete structure understanding or scope that is too broad.

## What this page covers

- How to have the Agent “read” PDF content correctly
- Format and path conventions when generating or updating PDFs
- Verification beyond “file exists”

## Why PDFs are tricky

PDFs may combine:

- Scanned images
- Multi-column layout
- Headers and footers
- Tables
- Mixed images and text

Clearer scope (“which section, what output”) usually means better results.

## Reading PDFs

### Recommended approach

1. **Specify path**: `docs/spec.pdf` or @ reference (per client support)
2. **State the goal**: summary, compare a chapter, extract table data
3. **Page or section**: limit scope on long docs to save context
4. **Sensitive content**: contracts, ID scans—follow [Sensitive context](/guide/context/sensitive-context/)

### Limits

- Scanned PDFs may need OCR; spot-check results
- Complex layout, columns, footnotes may lose structure
- Do not stuff huge PDFs into one task—segment or convert to Markdown outline first

## Common misconceptions

### 1. Whole PDF ≠ reliable key points

For long, complex, or scanned PDFs:

- Specify range
- Specify task
- Process in segments

### 2. Scanned vs text PDFs differ a lot

Scans rely on OCR; OCR errors propagate to summaries and extractions.

### 3. PDF file exists ≠ done

Also verify:

- Opens correctly
- No garbled text
- Page count, TOC, tables correct
- CJK fonts embedded if needed

## Generating or updating PDFs

| Approach | Fits |
|---|---|
| Compile from Markdown/LaTeX | Technical docs, reports (reproducible) |
| Print from HTML | Simple layout |
| Library generation (e.g. reportlab) | Programmatic tickets, labels |

In the prompt specify:

- Output path and filename
- Page size, language, fonts (CJK PDFs especially)
- Whether to commit (large binaries often artifact or release)

## Copy-paste prompt pattern

```text
Read only pages 12–18 of `docs/spec.pdf` and extract acceptance criteria.
Do not summarize the whole document.
If OCR or layout is uncertain, say so explicitly.
```

## Repo policy

- Large PDFs: **Git LFS** or out of repo
- When diff is unreadable, verify by **opening file** + [Verify artifacts](/guide/quality/verify-artifacts/)
- Generated outputs: [Verifying generated artifacts](/guide/files-and-artifacts/generated-artifacts/)

## Common mistakes

- “Change one word in PDF” without editable source (`.md` / `.tex`)
- Confidential PDF in public repo then Cloud processing
- Accept on “file exists” without opening

## Acceptance checklist

- [ ] PDF opens in target reader/print environment
- [ ] Page count, TOC, key tables match expectation
- [ ] Repo size and LFS policy meet team norms

For PDFs, narrower scope is steadier. After generation, open and confirm content—not just presence.

---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against verified file/folder context, verify-artifacts, sensitive-context, and image/file handling pages; stable principles: limit scope, watch OCR/layout error, open and verify after generation.  
**Last verified:** 2026-07-26
