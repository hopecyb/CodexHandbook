---
legacyVerification:
  status: verified
  products: ローカル Codex ホストを使用する環境。信頼設定は Codex CLI の `/hooks` で管理
  checkedAt: "2026-08-25"
title: Hook 設定例
description: 実際の hooks.json と Python 標準ライブラリのスクリプトで、テスト可能な PreToolUse ガードを実装する。
locale: ja
source_locale: zh-CN
source_revision: 'a8abc38'
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: "2026-10-26"
---

この章では、旧版の説明用イベント名と設定項目を削除しました。例は現在の公式 `hooks.json` 構造に従い、実行可能なテストも付属します。

ファイル一式は [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard) にあります。

![イラスト：ツール呼び出しの経路に置かれた光るゲート。スキャナーが安全なコマンドを緑のレーンで通し、危険なコマンドは赤いバリアで止める。横のテストパネルは緑のランプ](/illustrations/hooks-guardrail.webp)

## 目的と限界

目的は、`Bash` または `apply_patch` のコマンド入力に AWS Access Key ID に似たテスト文字列が含まれている場合、ツール実行前に拒否することです。

この例は Hook の入出力とテストの構造を示すだけです。

- 専門の secret scanner の代わりにはなりません。
- 正規表現には誤検知と見逃しがあります。
- Hosted tools は検査しません。
- ツール入力全体をログに記録してはいけません。

## 1. hooks.json を設定する

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

実際のリポジトリでは通常、設定を `.codex/hooks.json` に、スクリプトを `.codex/hooks/` に置きます。ここではハンドブックのリポジトリにある教材一式をそのまま検証できるよう、examples のパスを残しています。

## 2. 拒否時の出力

スクリプトは stdin からイベントの JSON を読み、`tool_input.command` だけを確認します。一致した場合は次を出力します。

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

一致しなければ何も出力せず、終了コード `0` で終了します。通常の stdout テキストは有効な `PreToolUse` の判断にはなりません。

## 3. テストを実行する

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

期待する結果は、通常のコマンド、疑わしいキー、辞書型ではない `tool_input` を対象とする 3 件のテストがすべて通ることです。

fixture を手動で入力することもできます。

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

通常の入力では stdout は出力されません。

## 4. プロジェクトで有効にする

1. 設定とスクリプトを対象リポジトリに置き、そのリポジトリ内の安定したパスに変更します。
2. 隔離したリポジトリで単体テストと通常のコマンドを 1 回実行します。
3. Codex を起動し、`/hooks` を開いて出所と正確な定義を確認します。
4. 信頼を許可した後、「通常の入力は通る」「テスト文字列は拒否される」の両方を確認します。
5. スクリプトを変更したら再確認します。hash が変わると、非管理 Hook は再び信頼待ち状態になります。

## 警告からブロックへ強化する

本番環境では通常、まずブロックしない監査やコンテキスト追加から始め、その後 `deny` に進めます。強化する前に、少なくとも次を確認してください。

- fixture は既知の誤検知を網羅していますか。
- スクリプトがタイムアウトまたは異常終了したとき、利用者に理由が伝わりますか。
- CI やサーバー側のポリシーでも同じルールを補完していますか。
- 回避と緊急復旧の経緯を監査できますか。

## 公式情報

- [OpenAI：Hooks の設定と PreToolUse の出力](https://learn.chatgpt.com/docs/hooks)
