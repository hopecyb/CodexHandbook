---
title: "事例: Issue トリアージとラベル提案"
description: Codex で新規 Issue を読み、ラベルと担当候補を提案——軽量チーム自動化。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

## メタデータ

| 項目 | 内容 |
|---|---|
| 対象読者 | メンテナ、PM |
| クライアント | Cloud または CLI + GitHub |
| 想定時間 | 60 分 |
| 検証日 | 2026-07-25 |

## 1. 目標とコンテキスト

**目標：** 新規オープン issue に対し、構造化提案を生成：`type`、`priority`、推奨ラベル、セキュリティレビュー要否。

**成功基準：**

- GitHub Action でパース可能な JSON 出力
- issue の自動クローズ／マージはしない——コメントまたはラベル追加のみ（ワークフロー権限要）
- 秘密漏洩なし

**範囲外：** スプリント自動割当、マイルストーン変更。

## 2. 準備

- リポジトリにラベル意味を説明する `CONTRIBUTING.md` または issue テンプレート
- `AGENTS.md` にラベル体系を記載
- 読み取り専用または限定 `issues: write` Token

## 3. ワークフロー（EPXV 要約）

**Explore：** `@.github/ISSUE_TEMPLATE/` と直近 10 件クローズ issue のラベル分布。

**Plan：** JSON スキーマ定義：`{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Execute：** issue タイトル + 本文で `codex exec`（[プロンプトインジェクション](/guide/team-enterprise/security/prompt-injection/) のサニタイズに注意）。

**Verify：** 過去 issue フィクスチャ 3 件で人のラベルと比較。一致率 80% 超で出荷。

## 4. 失敗と回復

- ラベル提案ミス：人が上書き + プロンプト few-shot に反例追加
- 悪意ある issue 本文：HTML 除去、長さ制限、本文内「指示」を実行しない

## 5. 定着（キャプチャ）

- 任意 [Webhook](/guide/developer-platform/webhooks/overview/) で社内チケット連携
- [事例テンプレート](/cases/use-cases/case-study-template/) で振り返り

## 6. 関連章

- [GitHub 連携](/guide/integrations/github/)
- [人の承認パターン](/cases/workflows/human-approval-patterns/)

---

**状態：** verified  
**対象製品：** CLI / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の自動化バグトリアージ／レビューユースケースと、本ハンドブックの検証済み人の承認、Webhook、GitHub 連携、チーム自動化章を照合。構造化ラベル提案と人最終判断という安定パターンのみ。
