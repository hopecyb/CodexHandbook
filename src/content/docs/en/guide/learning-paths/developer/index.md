---
title: "Developer path: read code, fix, review, and hand off"
description: "Use an existing shopping-cart bug exercise to connect code reading, red/green tests, diff review, and handoff, with three fillable templates."
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "The reference exercise was rerun: one of three tests failed at the start, all three passed after the reference fix, and both test files were identical. The path templates were self-reviewed by the author; the path has not yet undergone independent reader completion testing."
  environment: "Node.js v22.16.0 / Darwin arm64; built-in node:test, no third-party dependencies."
  evidence:
    - label: "Actual run summary"
      href: /downloads/developer-path/run-record.json
    - label: "Author review reference and scope limits"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /en/guide/learning-paths/
  label: "Choose a learning path"
next:
  link: /en/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "Start a bug fix with verification"
locale: en
source_locale: zh-CN
source_revision: '22d8bd3'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---
Use one small shopping-cart exercise to do four things: explain code, fix a bug, review the diff, and hand off evidence. You do not need to learn every client, configuration option, or multi-agent feature first.

Prerequisites: read simple JavaScript and run Node.js tests in a local terminal. The reference environment is Node.js 22.16.0; no third-party dependencies are needed. You may use the CLI, IDE, or another client with access to local files and a terminal. Node.js determines test behavior.

## Prepare the code and evidence directory

Use `examples/complete-workflows/developer/verified-bug-fix/` in the [handbook source repository](https://github.com/hopecyb/CodexHandbook). Read `brief.md` and `README.md` first, without looking at `solution/`. The full teaching steps are in [Fix a bug with verification](/en/cases/use-cases/software-development/fix-a-bug-with-verification/).

Run these commands in the exercise directory:

```sh
# work/ must not exist yet. If you already have your own exercise, choose a new name instead of overwriting it.
cp -R starter work
mkdir -p evidence
```

Make the fix in `work/`. Keep `starter/` as the original failing state and `solution/` as the reference answer. Save the following templates separately in `evidence/`. The downloadable handbook templates do not contain the full code; use them together with the repository exercise above.

| Milestone | Prerequisite | Output | Completion criteria |
|---|---|---|---|
| 1. Read code | `brief.md` and `starter/` | `code-map.md` | File evidence for the input, data path, failure, and root cause |
| 2. Fix and verify | Root cause and unchanged tests | `work/cart.js`, `red.txt`, `green.txt` | Reproduce the failure first, then pass the same tests |
| 3. Review diff | Changes and both test outputs | `review.md`, implementation diff | Expectations unchanged, API unchanged, no unrelated edits |
| 4. Hand off | Evidence from the first three steps | `handoff.md` | The next person can find current files and rerun the next step |

## 1. Read the code and make a checkable map

[Download the code-reading template](/downloads/developer-path/code-map-template.md). Have Codex read `brief.md`, `starter/cart.js`, and `starter/cart.test.js`, then explain the entry point, data path, triggering input, actual and expected values, root-cause line, and scope limits without changing files.

Save the result in `evidence/code-map.md`. This exercise has only two core files, so a complex architecture diagram is unnecessary. To complete this step, explain that `10` means ten percent, why the faulty implementation turns a subtotal of 40 into a total of -360, and why the result should be 36.

You can compare with the [author’s code-reading reference](/downloads/developer-path/code-map-reference.md), but still check your own conclusions against the actual code. Change the implementation only after that.

## 2. Save the red result, then make the smallest fix

Run all commands below from `verified-bug-fix/`:

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

The expected exit code is 1: one of three tests fails. Open `evidence/red.txt` and confirm the discount test reports actual -360 and expected 36. If all tests pass, check whether you used the reference solution or changed a file early; do not assume you reproduced the red result.

You can give Codex the full execution boundary directly:

```text
Using brief.md and evidence/code-map.md, fix only the percentage conversion in work/cart.js.
Keep the function signature and assertions in work/cart.test.js unchanged. Add no dependencies and do not refactor.
Then run node --test work/cart.test.js and save the real output to evidence/green.txt.
If the result is unexpected, keep the failure evidence and find the cause; do not change assertions to fit the implementation.
Deliver a change summary and test results. Do not commit or push.
```

Completion requires the original three tests to pass with exit code 0 and a change confined to the root cause. A failed test command can still produce a log; the existence of `green.txt` alone does not prove the tests passed.

## 3. Review the diff and omissions

[Download the review template](/downloads/developer-path/review-template.md) and fill in the real comparison scope: this exercise compares the retained `starter/` with your own `work/`, not `main` by default, and does not depend on whether the repository has uncommitted changes.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

The first command should show the percentage conversion change; exit code 1 means a diff exists, not that the command failed. The second should have no output and exit code 0. Ask Codex to review the real diff and red/green logs in read-only mode, then record findings, evidence, uncovered areas, and decisions in `evidence/review.md`.

To finish, confirm the tests were not weakened, the API did not change, and there are no extra dependencies or unrelated edits. State that currency precision, taxes, and invalid inputs are outside this exercise; three passing tests do not establish production safety. Compare with the [author’s review reference](/downloads/developer-path/review-reference.md).

## 4. Write a handoff, then recover from files

[Download the handoff template](/downloads/developer-path/handoff-template.md). In `evidence/handoff.md`, record the current directory, changed files, still-active constraints, evidence paths, next command, and expected result. In a real Git project, also record the branch, commit, and working-tree state.

A read-only task after handoff can be written as follows:

```text
Read evidence/handoff.md and first check whether the current files in work/ match the handoff description.
Run node --test work/cart.test.js from the exercise root, recording the actual exit code and summary.
Compare the implementation and tests in work with starter. If the state differs, describe the difference; do not reuse a historical green result.
Do not change code, commit, or push.
```

Run it in a new task or ask another collaborator to check it. Reopening it yourself is a recovery drill, not independent human review. For the format, see the [author’s handoff record](/downloads/developer-path/handoff-reference.md).

Completion means the handoff file alone lets someone find the code, tests, and boundaries and actually run the current result. If that run has not happened, mark it “awaiting handoff verification” in the record.

## Where to return when something goes wrong

- Missing file: check the terminal directory and whether `work/` exists; return to preparation.
- No red result: check the original starting point and tests; a green result from the reference answer does not reproduce the failure.
- Tests pass only after changing them: restore the original assertions and return to root-cause analysis.
- Unrelated changes: retain the diff, narrow the fix, and rerun tests.
- Handoff does not match files: trust the current files, update the record, then continue.

In a real project, add the lint, type checks, and full test suite required by the repository to this evidence structure. Determine whether they are necessary and which commands to run from the actual project instructions. This exercise has no such extra checks, so do not invent passing results.
