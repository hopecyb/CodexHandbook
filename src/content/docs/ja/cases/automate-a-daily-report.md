---
title: 日報の自動化
description: 繰り返しの集計作業を再利用可能なスクリプトまたは Skill に固定化する。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

# 日報の自動化

## メタ情報

| 項目 | 内容 |
|---|---|
| 対象読者 | チーム |
| クライアント | CLI |
| 所要時間の目安 | 1–2 時間（初版） |

## 1. 目標と背景

**目標：** 毎日、変更サマリー、テスト結果、ToDo リストを自動生成する。

**成功基準：** 1 コマンドまたは Skill で固定形式の Markdown を出力できること。失敗時に明確な終了コードがあること。

## 2. 参考パラダイム

チームに既存の類似ケースあり：[定期ドキュメントリンクチェック](/cases/use-cases/team-automation/scheduled-link-check/)。

## 3. 推奨プロンプト

```text
目標：昨日から今日までの日報 Markdown を生成する。
内容：git log サマリー、CI 状態（読み取り可能な場合）、オープン PR リスト。
出力：reports/daily-YYYY-MM-DD.md
制約：git は読み取りのみ。push しない。繰り返し実行用に scripts/generate-daily.sh を提供する。
```

## 4. 蓄積

- [自動化 Skill の例](/skills/examples/automation-skill/)
- [定期タスク](/skills/automations/scheduled-tasks/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の現在の Codex use cases には「Automate bug triage」「Turn feedback into actions」などの繰り返し自動化シナリオが含まれています。本ページは日報を「固定形式 Markdown + 明確な終了コード + 再利用可能なスクリプトまたは Skill」と定義しており、特定の統合に依存しない安定した自動化ワークフローパターンです。
