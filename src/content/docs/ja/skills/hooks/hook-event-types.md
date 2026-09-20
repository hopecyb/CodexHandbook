---
legacyVerification:
  status: "verified"
  products: "ローカル Codex ホストを使用する環境"
  checkedAt: "2026-08-25"
title: Hook のイベント種類
description: セッション、ターン、ツール呼び出し、コンテキスト圧縮、サブエージェントのライフサイクルに応じてイベントを選ぶ。
locale: ja
source_locale: zh-CN
source_revision: 07f4965
translation_status: draft
translated_at: "2026-09-20"
---

Hook を選ぶときの最初の問いは「スクリプトをどう書くか」ではなく、「副作用が起きる前と後のどちらで処理するか」です。イベントを選び間違えると、どれだけ優れたスクリプトでも事後報告しかできません。

![Codex Hook のライフサイクルと主なイベント](/diagrams/hook-lifecycle-events-ja.svg)

## 現在のイベント一覧

| イベント | 発生するタイミング | matcher が絞り込む対象 | 主な用途 |
|---|---|---|---|
| `SessionStart` | セッションの開始または再開 | `startup`、`resume`、`clear`、`compact` | 環境の説明、コンテキストの復元 |
| `SubagentStart` | サブエージェントの起動 | サブエージェントの種類 | サブエージェントに制約を追加 |
| `UserPromptSubmit` | 利用者がプロンプトを送信 | 未対応。設定は無視される | 秘密情報の検査、開発用コンテキストの追加 |
| `PreToolUse` | 対応するローカルツールの実行前 | ツール名 | 呼び出しの拒否や変更 |
| `PermissionRequest` | Codex が承認を求める直前 | ツール名 | 許可、拒否、通常の承認フローへの委任 |
| `PostToolUse` | 対応するローカルツールが結果を返した後 | ツール名 | 結果の記録、後続の推論へのフィードバック |
| `PreCompact` | コンテキストの圧縮前 | `manual` / `auto` | 圧縮前の状態を保存 |
| `PostCompact` | コンテキストの圧縮後 | `manual` / `auto` | 必要なコンテキストを補う |
| `SubagentStop` | サブエージェントの終了直前 | サブエージェントの種類 | もう一度確認を求める |
| `Stop` | メインタスクのターンの終了直前 | 未対応。設定は無視される | メインスレッドで検証を続けさせる |
| `SessionEnd` | メインスレッドの終了時 | 現時点では `other` | 短い終了ログ。サブエージェントには実行されない |

## ツールの matcher

よく使う値は次のとおりです。

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Shell と統合コマンド実行は `Bash` に一致します。`apply_patch` は別名の `Edit` または `Write` でも一致させられます。MCP やその他のローカル関数ツールは実際のツール名で照合します。

## 混同しやすい 3 つのイベント

### PreToolUse

入力には `tool_name`、`tool_use_id`、そのツール固有の `tool_input` が含まれます。返せる内容は次のとおりです。

- `permissionDecision: "deny"`：対応するツールの呼び出しを阻止する。
- `permissionDecision: "allow"` と `updatedInput`：対応するツールの入力を書き換える。
- `additionalContext`：ブロックせず、モデルにコンテキストを追加する。

通常の stdout テキストは無視されます。公式仕様で定義された JSON を出力してください。終了コード `2` と stderr によって、理由を示しながらブロックすることもできます。

### PermissionRequest

Codex が shell の権限昇格や管理対象ネットワークなどについて、もともと承認を求めようとしている場合にのみ発生します。許可、拒否、または判断せず通常の承認 UI に任せることができます。一般的なツールポリシーを定義する `PreToolUse` の代わりにはしないでください。

### PostToolUse

ツールの実行後に発生し、Bash が 0 以外で終了した場合も発火します。`block` を返すか終了コード `2` を使うと、モデルに返すフィードバックを置き換えて処理させることはできます。しかし、コマンド、ファイルへの書き込み、外部操作を取り消すことはできません。

## Stop は「終了拒否」ボタンではない

`Stop` で `decision: "block"` を返すと、`reason` をもとに続行用のプロンプトが自動生成され、Codex にもう 1 ターン実行するよう求めます。すでに完了したツールの副作用は元に戻りません。無限に続行しないよう、スクリプトで `stop_hook_active` を確認してください。

## イベントを選ぶ練習

| 要件 | 選択 | 理由 |
|---|---|---|
| 疑わしい token をファイルに書かせない | `apply_patch|Edit|Write` に一致する `PreToolUse` | 書き込み前に処理する必要がある |
| Shell の失敗率を集計する | `Bash` に一致する `PostToolUse` | 終了結果が必要 |
| 自動圧縮の前に重要な判断を保存する | `PreCompact` | 圧縮前に発生する |
| テストが終わるまでタスクを閉じない | `Stop` | 現在のタスクのターンを続ける |
| メインスレッド終了時に 30 秒のネットワークリクエストを送る | `SessionEnd` は不適切 | 最大 3 秒であり、終了イベントに長時間の作業を入れるべきではない |

## 公式情報

- [OpenAI：Hook イベントと matcher](https://learn.chatgpt.com/docs/hooks)
