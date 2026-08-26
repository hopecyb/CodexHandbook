---
title: Hooks
description: Codex のライフサイクルでスクリプトまたは MCP ツールを実行し、チェック、記録、ポリシー制御を行います。
locale: ja
source_locale: zh-CN
source_revision: c768708
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Hook は Codex のライフサイクルに組み込む自動ハンドラーです。セッション開始、プロンプト送信、ツール呼び出しの前後、コンテキスト圧縮、子 Agent の停止、メインスレッドの終了などの時点で、スクリプトまたは MCP ツールを実行できます。

## このグループで解決すること

- 存在しない `pre_tool` のような名前を作らず、正しいイベントを選ぶ方法
- 「実行前にブロックする」と「実行後にフィードバックする」の区別
- テスト可能で低リスクな Hook から始める方法
- プロジェクトの Hook と Plugin に含まれる Hook の信頼境界をレビューする方法

## 読む順序

1. [Hooks の概要](/ja/skills/hooks/hooks-overview/)：設定レイヤー、信頼、実行動作を理解する
2. [Hook イベントの種類](/ja/skills/hooks/hook-event-types/)：ライフサイクルに沿ってイベントと matcher を選ぶ
3. [Hook の設定例](/ja/skills/hooks/hooks-examples/)：単体テスト可能な `PreToolUse` ガードの例を実行する

## 最短の判断

| 目的 | 最初に検討するもの |
|---|---|
| ツール実行前に拒否する、または入力を書き換える | `PreToolUse` |
| Codex が権限昇格を要求しようとするときに判断する | `PermissionRequest` |
| ツール終了後に記録する、またはフィードバックを追加する | `PostToolUse` |
| プロンプト送信時にチェックする、またはコンテキストを補う | `UserPromptSubmit` |
| メインスレッドまたは子 Agent にもう一度続行させる | `Stop` / `SubagentStop` |

Hook はサンドボックス、承認、コマンドルール、サーバー側の権限の代わりにはなりません。Hook は追加のガードレイヤーであり、一部の管理対象ツールの経路はローカルのツール Hook を通りません。

## 公式情報

- [OpenAI：Hooks](https://learn.chatgpt.com/docs/hooks)

---

**状態：** verified

**対象製品：** ローカル Codex host を使用する環境。信頼のレビューと `/hooks` の管理については、Codex CLI の公式説明を基準にします

**最終検証：** 2026-08-25
