---
caseCategory: creation
directoryOrder: 40
title: 'Build a Website: From Event Materials to a Previewable Page'
description: Download requirements, a starter page, and a reference result to practice responsive layout, keyboard operation, and a reproducible button-link fix.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64; Codex built-in browser (exact engine version unknown), 1280×720 and 375×812 viewports.
  summary: The reference page was checked in desktop and narrow browser views, including button and keyboard behavior. A broken link was reproduced and fixed. This does not establish cross-browser compatibility, model performance, or reader completion.
  evidence:
    - label: Browser review and actual visual adjustment
      href: /downloads/reading-event/validation/browser-review.md
    - label: Link failure and fix log
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: Fixed requirements, synthetic facts, starter HTML, reference page, broken fixture, acceptance template, and validation script
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: '55fd86a'
reviewed_at: 2026-10-25
---

Turn an event brief into a one-page website you can open in a browser. The deliverables are a local static page and an acceptance record. The event and venue are fictional, and the registration method has not been decided.

[Download the complete exercise pack](/downloads/reading-event/reading-event-1.0.0.zip) · [Open the reference result](/downloads/reading-event/solution/index.html) · [Read about the materials](/downloads/reading-event/README.md)

## Goal and preparation

The page includes an event introduction, time, place, capacity, cost, what to bring, and information awaiting confirmation. Its main button links only to participation details on the same page; it must not imply that registration is available.

After extracting the pack, copy `starter` into a new `work` directory and let the model edit only `work/index.html`. Use the pack's `facts.md`, `brief.md`, and `prompt.md` as read-only inputs. Inspect `solution` only after finishing. You can open the HTML directly in a browser without installing frontend dependencies.

To use a local server, follow the optional Python command in the README. If its port is occupied, choose a free one; do not terminate an unknown service.

## Submit the task

```text
Using facts.md and brief.md, complete the current index.html as a one-page site
for a reading meetup. Edit only index.html, using HTML and inline CSS. Add no
dependencies, network calls, deployment, or sending. Keep the registration method
marked as unconfirmed; the main button should only jump to participation details
on this page. Check desktop and 375px narrow views, keyboard focus, and internal
links when done. Report actual checks and unfinished items; do not mark checks
that did not run as passed.
```

The [layout reference](/downloads/reading-event/wireframe.md) describes the reading order for two columns on desktop and one on mobile. Colors and decoration may differ; event facts, unknowns, and acceptance criteria must remain intact.

## Check the result

| Check | Acceptance criterion |
|---|---|
| Facts | 2026-10-17, 14:00–15:30, a fictional reading room, 18 people, free, and bringing a book voluntarily match the materials |
| Unknowns | Registration stays unconfirmed; no invented QR code, phone number, or link |
| Mobile | Readable at 375px without horizontal overflow |
| Interaction | Tab reaches the main button with visible focus; Enter or clicking takes you to participation details |
| Scope | Only `work/index.html` changed; no new dependency, data-collecting form, or external publication |

Copy the [acceptance template](/downloads/reading-event/review-template.md) outside the work directory and fill in your own results. The reference page was written by the author. Its record cannot replace acceptance checks on this run's model output.

## Follow a button-link failure and fix

In the pack, `fixtures/broken.html` has a button pointing to `#signup`, while the actual section is `#participation`. The page looks complete, but the button does not reach its destination.

Optionally run:

```sh
python3 validation/reproduce.py
```

The reproducer checks the broken page in a temporary directory, exits with 1, and reports `missing-fragment`. It then changes only the `href`, checks again, and exits with 0. The original fixture remains unchanged. The [saved log](/downloads/reading-event/validation/recovery.json) contains both results.

Do not “fix” this by deleting the button or ignoring the check. Change the target link only, then click it to verify. The link script cannot assess design, facts, or keyboard experience; check those separately.

## Actual visual adjustment and verification boundary

On the author's first mobile check, decorative book text overflowed its card. The author adjusted the narrow-view font size and padding, then checked again. Desktop and mobile observations, keyboard focus, the main button, and facts F1–F7 are in the [browser review](/downloads/reading-event/validation/browser-review.md).

This exercise did not test every browser, a physical phone, full screen-reader operation, or independent reader completion. No site was published and no model success rate was measured. Before publishing, separately confirm the hosting destination, public content, and deployment permission.

Next: [review diffs](/en/guide/quality/review-diffs/) · [failure recovery lab](/en/guide/reference/troubleshooting/failure-recovery-lab/)
