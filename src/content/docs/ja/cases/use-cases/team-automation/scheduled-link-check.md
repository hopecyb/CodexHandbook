---
title: "事例: 定期ドキュメントリンクチェック"
description: 非対話 Codex または CI でサイト内死リンクをスキャン——チーム自動化の入門事例。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

## メタデータ

| 項目 | 内容 |
|---|---|
| 対象読者 | チームメンテナ、テクニカルライター |
| クライアント | CLI + GitHub Actions |
| 想定時間 | 45〜90 分（初回 CI 設定含む） |
| 検証日 | 2026-07-25 |

## 1. 目標とコンテキスト

**目標：** サイト内リンクと主要外部リンクを週次自動チェック。死リンクを PR または issue で報告。

**成功基準：**

- CI またはスケジュールワークフローが反復実行可能
- 構造化死リンクリスト（ファイル、行、URL）
- 無関係ファイル変更なし、push なし

**範囲外：** フルサイトクロール、ログイン後ページ、パフォーマンステスト。

## 2. 準備

- ドキュメントサイトソースが Git リポジトリにある（例：本ハンドブック `src/content/docs/`）
- 既存 `npm run build` またはリンクチェックスクリプト（任意）
- org secrets に読み取り専用 `GITHUB_TOKEN` と `OPENAI_API_KEY`

## 3. ワークフロー

### Explore（探索）

```text
@src/content/docs/ と既存 package.json スクリプトを読んで。
リンクチェックの有無を列挙。なければ最小案：Markdown 内部リンク + 公式ドキュメント外部のサンプル。
ファイルは変更しない。
```

### Plan（計画）

```text
計画を出して：プロンプトファイルパス、CI ワークフロー名、構造化 JSON 出力フィールド。
ファイル作成前に私の確認を待って。
```

### Execute（実行）

- `prompts/ci/link-check.md` を追加
- `.github/workflows/docs-link-check.yml` を追加（例示——[スクリプトとパイプライン](/guide/developer-platform/non-interactive/scripts-and-pipelines/) 参照）
- [codex exec](/guide/developer-platform/non-interactive/codex-exec/) またはプレーンスクリプト + Codex で二次分類

### Verify（検証）

- ローカルで `codex exec` を1回
- CI 手動 `workflow_dispatch`
- 意図的に死リンクを挿入。`pass: false` を確認

## 4. 失敗と回復

| 問題 | 対応 |
|---|---|
| 外部サイト一時 503 | プロンプトで硬い死リンクとソフト失敗を区別 |
| JSON パース失敗 | [構造化出力](/guide/developer-platform/non-interactive/structured-output/) 制約を強化 |
| クォータ枯渇 | 週次スケジュール + 増分チェックに切替 |

## 5. 定着（キャプチャ）

- 3 回成功後 Skill 化：`docs-link-audit`
- チーム [コマンドルール](/guide/customization/rules/team-rules/) で `npm run build` と読み取り専用 git を許可

## 6. 関連章

- [長時間タスク管理](/cases/workflows/long-running-task-management/)
- [Automations 定期タスク](/skills/automations/scheduled-tasks/)
- [チーム学習パス](/guide/learning-paths/team/)

---

**状態：** verified  
**対象製品：** CLI  
**最終検証：** 2026-07-26  
**検証根拠：** 本ハンドブックの検証済み非対話モード、スクリプトとパイプライン、構造化出力、チームルール、自動化章と照合。定期リンクチェック、構造化レポート、失敗時停止という安定したチーム自動化事例のみ。
