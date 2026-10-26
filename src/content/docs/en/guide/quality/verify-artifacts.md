---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains how to verify final deliverables. Its internal links, artifact categories, and check sequence have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Verify artifacts
description: Check generated documents, pages, and other deliverables.
locale: en
source_locale: zh-CN
source_revision: '7a6a12e'
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: '2026-09-20'
sidebar:
  order: 30
---

An “artifact” here is what the task ultimately delivers, such as:

- A document
- A page
- An image
- A spreadsheet
- A generated file

Do not assume the artifact is right simply because the code looks right.

## Why verify the artifact separately?

Many tasks deliver more than a code diff: they also deliver something people will see and use.

When checking an artifact, ask:

- Can the final item actually be used?
- Does it appear as expected?
- Will it seem awkward, incorrect, or incomplete to someone else?

Some problems appear in the final presentation rather than in the code.

For example:

- The page runs, but the layout is wrong.
- The copy has the right structure, but sounds awkward.
- A link is formatted correctly, but leads to the wrong place.
- A table was generated, but its columns are in an impractical order.

“It was generated” does not mean “it is usable.”

For non-code artifacts, open the file, check links, compare with the design, and read the copy aloud. For pages, preview in a browser or on a real device rather than inspecting only the generated code.

## Check by artifact type

Choose checks to suit the artifact:

- **Page**: actual rendering, layout, links, and interactions
- **Document**: structure, terminology, readability, and links
- **Image**: dimensions, clarity, text, and details
- **Spreadsheet or exported file**: fields, order, whether it opens, and readability

## Common misunderstandings

### 1. A successful build does not prove the page is right

A build only shows that the page can be produced. It does not show that its appearance, content, or interactions are correct.

### 2. Documents need verification too

They do. In particular, check:

- Whether heading levels make sense
- Whether links work and lead to the right place
- Whether terminology is consistent
- Whether the copy is natural and readable

### 3. A screenshot alone is not enough

A screenshot gives a quick overview, but some problems appear only when you open the actual file or page.

## Use this directly

You can ask:

```text
After finishing, review the final artifact from the user's point of view. Tell me what you actually opened and checked, what you found, and what remains unverified.
```

## Check order

Use this order:

1. Open the actual artifact.
2. Compare it with each acceptance requirement.
3. Look for smaller issues in the user experience.

If it runs, the basics may be intact; whether it is ready to deliver depends on the final experience.
