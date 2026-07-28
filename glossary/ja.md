# 用語集（日本語）

Codex Handbook の翻訳・執筆で使う推奨訳。安定した用語 ID は [`terms.yml`](./terms.yml) を参照。ソース言語は簡体字中国語（`zh-CN`）。

## 原則

- 製品名・プロトコル名・ファイル名は翻訳しない：Codex、MCP、Skill、Hook、Plugin、AGENTS.md、Token。
- 機械的な直訳より、技術ドキュメントとして自然な日本語を優先する。
- 同一ページ内・ハンドブック全体で用語を統一する（製品 UI が別表記の場合を除く）。

## 推奨訳

| Term ID | 英語 | 日本語 | 備考 |
|---|---|---|---|
| agent | Agent | Agent | 英語のまま |
| approval | Approval | 承認 | 高リスク操作前の人による確認 |
| artifact | Artifact | 成果物 | 生成されたファイルなど |
| cloud-environment | Cloud environment | Cloud 環境 | |
| cloud-task | Cloud task | Cloud タスク | |
| compaction | Compaction | 圧縮 | コンテキスト要約 |
| context | Context | コンテキスト | |
| diff | Diff | diff / 差分 | UI では diff を優先 |
| handover | Handoff | 引き継ぎ | |
| hook | Hook | Hook | 英語のまま |
| interactive | Interactive mode | 対話モード | |
| mcp | MCP | MCP | 翻訳しない |
| non-interactive | Non-interactive mode | 非対話モード | `codex exec` など |
| permission | Permission | 権限 | |
| plugin | Plugin | Plugin | 英語のまま |
| profile | Profile | Profile | 設定バンドル名 |
| prompt | Prompt | プロンプト | |
| reasoning | Reasoning | 推論 | |
| sandbox | Sandbox | サンドボックス | |
| skill | Skill | Skill | 英語のまま |
| steering | Steering | 軌道修正 / 誘導 | |
| subagent | Subagent | Subagent | 英語のまま |
| task | Task | タスク | |
| thread | Thread | スレッド | OS のスレッドではない |
| thread-session | Thread / session | スレッド / セッション | 初学者向け |
| token | Token | Token | 英語のまま |
| tool | Tool | ツール | |
| verification | Verification | 検証 | 受け入れ条件の確認 |
| worktree | Worktree | 作業ツリー | git worktree |

## 避ける表記

| 避ける | 推奨 | 理由 |
|---|---|---|
| Skill を「スキルパック」と Plugin を混用 | Skill / Plugin | 製品上の仕組みが異なる |
| Thread を「会話」だけにする | スレッド / セッション | 蓄積コンテキストを強調 |
| Sandbox を「監獄」などと意訳 | サンドボックス | ハンドブック標準 |
| AGENTS.md を翻訳 | AGENTS.md | ファイル名 |
