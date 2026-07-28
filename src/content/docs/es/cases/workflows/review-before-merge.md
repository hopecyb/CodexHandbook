---
title: Review before merge
description: Structured diff and risk review with Codex before merge—clear human–machine roles.
locale: es
source_locale: en
source_revision: e8e66da
translation_status: fallback
translated_at: '2026-07-28'
---

**Review before merge** puts [quality and verification](/guide/quality/) into the Git flow: before a PR merges, use Codex to check diff, tests, security, and spec alignment. Automated comments alone do not replace human merge decisions.

## What's covered

- Local review vs Cloud/CI review roles
- What dimensions review prompts should cover
- When human final sign-off is required

## Minimum viable approach

**Local (author self-check)**

```text
Compare current branch diff to main (do not change code yet):
1. Is it outside issue scope?
2. Obvious security risks (secrets, injection, permissions)?
3. Missing tests or docs?
Output a checklist with P0/P1 labels.
```

**CI (team gate)**

- Fixed prompt version + read-only token
- Results in PR comment or check run
- See [Code review automation](/guide/developer-platform/ci-cd/code-review-automation/)

## Recommended review dimensions

| Dimension | Focus |
|---|---|
| Correctness | Logic, edge cases, error handling |
| Tests | Coverage for new behavior |
| Security | Secrets, injection, dependency vulnerability signals |
| Maintainability | Naming, duplication, public API |
| Spec | Alignment with issue/spec doc |

Pair with [Review diffs](/guide/quality/review-diffs/); high-risk items follow [Human approval patterns](/cases/workflows/human-approval-patterns/).

## Common mistakes

- Model only says "LGTM" with no specifics
- Unsanitized full PR description pasted into CI prompt (injection risk)
- Review passes but CI tests never ran
- Auto-merge bot enabled with no branch protection

## Security boundaries

- Review uses read-only permissions; fixes belong in **new commits** triggered by humans
- Do not log user PII or secrets in review logs

## Acceptance checklist

- [ ] Review output traces to specific files/lines
- [ ] P0 issues block merge or are fixed
- [ ] Aligned with team review checklist
- [ ] Human maintainer has final say on disputed items

## Related chapters

- [Cloud code review](/guide/web-and-cloud/code-review/)
- [Create pull requests](/guide/web-and-cloud/create-pull-requests/)

## References

- KimYx0207 Review/PR chapters
- codex.bozhouai.com Git/GitHub workflow material

---

**Status:** verified  
**Applicable products:** CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current public code review / pull request use cases, plus this handbook's verified quality, diff review, and Cloud chapters; this page confirms only stable principles for structured pre-merge review, read-only review, and human final sign-off.
