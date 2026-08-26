# 日本語 / 한국어 / Tiếng Việt 翻訳レビュー

## Accuracy

- **Metadata-only sync was initially too optimistic:** the first mechanical pass updated hashes and marked all 198 pages `reviewed` while many bodies still reflected the older source. This was corrected immediately: unfinished pages are `draft`; only pages reviewed against the current source remain `reviewed`.
- **Client selection was materially stale:** all three locale pages lacked the current 30-second decision table, four-surface explanation, cross-surface handoff, scenarios, and post-install verification loop. The three pages were rewritten in full.
- **Permissions and sandboxing were materially incomplete:** all three locale pages lacked the current sandbox-versus-approval decision chain, local-versus-Cloud network model, Cloud Secret lifecycle, four-step approval review, and localized diagram. The three pages were rewritten in full.
- **Cloud Secrets lifecycle was high risk:** the Japanese page was rewritten and now explicitly states that environment variables are available in setup and Agent phases, while Secrets are setup-only and removed before the Agent phase.
- **Commands:** the scoped 198 pages were changed from stale `--cwd` to current `--cd`; command names, configuration keys, code blocks, and official URLs were otherwise preserved.

## Native voice

- The existing Japanese, Korean, and Vietnamese translations are generally more natural than small offline machine-translation models for full technical pages.
- Two offline approaches were evaluated locally. Chinese-to-target cascading produced unnatural technical prose and damaged Markdown placeholders. Direct English-to-target improved sentence fluency but still dropped placeholders in complex paragraphs. Both approaches were stopped after isolated trials; affected pages were manually repaired or restored.
- Reviewed pages use concise technical-documentation prose and preserve product terms such as Codex, CLI, IDE, Cloud, MCP, Hook, Plugin, Skill, Agent, and worktree.

## Notes and adaptation

- Internal links in all scoped pages received the corresponding `/ja/`, `/ko/`, or `/vi/` prefix.
- References to the nine new diagrams use locale suffixes rather than `-zh-cn.svg`.
- Diagram dictionaries contain one entry for every unique visible Chinese `<title>`, `<desc>`, and `<text>` string. They intentionally preserve official product terms while translating surrounding language.
- `source_revision` records the current Simplified Chinese source SHA-1 prefix even when a page remains `draft`; status, not the hash alone, indicates review completion.

## Applied revisions

1. Downgraded unfinished metadata-only syncs from `reviewed` to `draft`.
2. Rewrote `guide/choose-your-client.md` in Japanese, Korean, and Vietnamese.
3. Rewrote `guide/permissions-and-sandbox.md` in Japanese, Korean, and Vietnamese.
4. Rewrote the Japanese `guide/web-and-cloud/secrets-and-variables.md` page.
5. Reviewed and promoted nine structurally current Japanese low-risk pages whose source changes were limited to current commands, official links, and repository-maintenance instructions.
6. Generated and key-validated the Japanese, Korean, and Vietnamese diagram dictionaries.
7. Removed all experimental machine-translated output that did not meet the Refined quality bar.
8. Rewrote and reviewed 35 additional Japanese pages covering verified bug fixing, subagents, non-interactive CLI use, desktop App settings and workflows, IDE installation and Cloud delegation, account/authentication, Cloud environments, networking, GitHub, PRs, review, MCP/Plugin entry points, and the extension capability architecture.
9. Shortened the Vietnamese scheduled-task diagram label for `按运行是否相互独立判断`, regenerated the vi SVG, and visually confirmed that the label stays within its node.
10. Removed the stray `:memory:.ses` session file created by the discarded offline translation runtime.

## Remaining review work

- Pages still marked `draft` require paragraph-by-paragraph alignment with the current Chinese source before promotion to `reviewed`.
- The parity validator is the structural gate, but a zero structural issue count alone is not sufficient; technical facts and native voice still require review.
- The remaining work should continue serially by locale: finish Japanese, then Korean, then Vietnamese, with `node scripts/check-i18n-parity.mjs --locale <locale>` at each checkpoint.
- Current checkpoint: Japanese passes 50/66 pages with 68 structural issues across 16 draft pages; Korean and Vietnamese each pass 2/66 pages with 230 issues. These counts are intentionally recorded rather than overstating completion.
