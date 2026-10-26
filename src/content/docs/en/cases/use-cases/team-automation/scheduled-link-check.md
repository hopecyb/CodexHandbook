---
caseCategory: team
directoryOrder: 100
title: 'Case: Documentation Link Checking and Failure Recovery'
description: Download a static HTML link-checking exercise, fix a missing page and broken anchor step by step, then prepare a recurring run.
contentType: case
audiences: [developer, team]
level: intermediate
outputs: [json, html]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Seven script tests passed. In a temporary copy, fixing one issue at a time reduced failures from two to one to zero. External links were not checked online, and no real CI or scheduler was run.
  environment: Python 3.12.11 / Darwin arm64; standard library and original synthetic static HTML, without tokens.
  evidence:
    - label: Actual run and recovery record
      href: /downloads/docs-link-audit/validation/record.md
assets:
  - path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
    purpose: Link checker, broken inputs, reference fix, tests, and step-by-step recovery record
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
source_revision: '0d21aa9'
---

Before scheduling a check, confirm that the script can actually find problems and explain what it checked. This exercise begins with two deliberately broken links. Change one target at a time and observe how the result changes.

[Download the complete exercise pack](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [Actual recovery record](/downloads/docs-link-audit/validation/recovery.json)

## Run the broken fixture first

You need Python 3.10+, with no third-party dependency, API key, or network access. In the extracted directory, run:

```sh
python3 scripts/check_links.py fixtures/site
```

Expect exit code 1. The report identifies the file, line number, URL, and reason: `/missing/` on line 4 of `index.html` has no corresponding page, and `#old-anchor` on line 5 does not exist on its target page. Another external link appears under `unchecked`; it is not silently counted as passing.

## Fix one issue at a time

Copy `fixtures/site` to your own `work/` directory, preserving the original inputs. First change `/missing/` to `/guide/` and run:

```sh
python3 scripts/check_links.py work
```

It still exits with 1, but only the anchor problem remains. Change `#old-anchor` to `#install` and rerun; it exits with 0. Compare against `solution/site` and the [human-review reference](/downloads/docs-link-audit/solution/review.md) to confirm you changed nothing else.

The author's actual checks found 2, then 1, then 0 failures, while the original fixture hash stayed the same. [Before-fix JSON](/downloads/docs-link-audit/validation/stage-0.json) · [After-fix JSON](/downloads/docs-link-audit/validation/stage-2.json)

## Understand the result and its limits

| Result | Meaning | Next step |
|---|---|---|
| Exit 0 | Local references pass | Read `unchecked`; this does not establish that external links are reachable |
| Exit 1 | Missing page, anchor, or out-of-bounds path detected | Confirm what each link should mean, then fix it |
| Exit 2 | The check could not finish | Check the directory, build output, read errors, or an unsupported `base` tag |

The script reads built HTML and supports directory `index.html` files, relative and root paths, and HTML anchors. It does not parse dynamic JavaScript routes, CSS URLs, `srcset`, or framework-specific rewrites. It stops on `base href` to avoid interpreting relative paths incorrectly. External URLs and other protocols are explicitly reported as unchecked.

Run the seven bundled tests:

```sh
python3 validation/test_links.py
```

For a real project, build it according to its instructions first, then pass the output directory to the script. This site already has a dedicated internal-reference checker; the teaching package does not replace all validation appropriate to your framework.

## Add it to a recurring workflow afterward

Give your existing scheduler “build project → check links → save exit code and JSON,” with a fixed working directory and dependency environment. Stop if the build fails rather than reading old output. Avoid concurrent writes to the same record.

Run it manually once, then trigger it manually in the target scheduling environment, and only then set a recurring schedule. Compare this result with the last: stay quiet if nothing changed, and prepare a change summary for new failures, check errors, or recovery. Sending an actual notification still depends on the authorized scope.

The package has not created a scheduled task, sent notifications, modified a real site, or run CI. These scheduling steps are integration guidance, not evidence of a scheduler run. See the [scheduled tasks guide](/en/skills/automations/scheduled-tasks/) next.

## Handling external links

Set a separately authorized scope and frequency for checking external links. A 404, authentication restriction, timeout, and temporary service failure mean different things. One failed request is not sufficient reason to remove a link. This package has not checked real external links or presented simulated responses as real network failures.

When combining this with the [issue triage exercise](/en/cases/use-cases/team-automation/issue-triage-suggestions/), produce a local report and human-review notes before deciding whether to create a ticket.
