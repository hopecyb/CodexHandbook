---
title: Scheduled tasks
description: 検証済みのタスクを ChatGPT でスケジュールに従って繰り返し実行します。
locale: ja
source_locale: zh-CN
source_revision: f32c13f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Scheduled task（定期タスク）を使うと、ChatGPT がバックグラウンドでスケジュールに従って作業を繰り返せます。定期レポート、継続的なフォローアップ、反復メンテナンスに向きますが、任意の webhook、リポジトリイベント、CI 自動化と同じものではありません。

## 適しているかを先に判断する

| 適している | 適していない |
|---|---|
| 入力元が安定し、出力をレビューできる | 実行のたびに問題を定義し直す必要がある |
| 時刻または間隔で起動する | Git push や PR の作成など、特定イベントによる正確な起動が必要 |
| 読み取り専用の確認、要約、下書き | 無人で main ブランチへマージする、または一括削除する |
| 「変更なし」と停止条件が明確 | 失敗後に無限に再試行する |

## 現在の管理画面

- ChatGPT Web またはデスクトップ App で定期タスクを作成、管理する
- Codex CLI と IDE 拡張には Scheduled の管理画面がない。先にプロンプト、Skill、スクリプトをテストする用途に向く
- デスクトップ App ではローカルプロジェクトまたは隔離された worktree をタスクで利用できるが、PC の電源が入り、App が実行中で、プロジェクトがディスク上に残っている必要がある
- Web の定期タスクは、アップロードしたコンテキスト、接続ツール、Skills、Plugins を利用できるが、ローカル PC のフォルダへ直接アクセスできない

## このグループの入口

- [定期タスクの完全ガイド](/ja/skills/automations/scheduled-tasks/)：実行方法の選択、長期間使えるプロンプト、権限、検収を扱う

## 公式情報

- [OpenAI：Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**状態：** verified

**対象製品：** ChatGPT Web / デスクトップ App。CLI と IDE は準備とテストにのみ使用し、管理画面は提供しません

**最終検証：** 2026-08-26
