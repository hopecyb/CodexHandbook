---
title: Hook 設定例
description: 改編可能な Hook 設定とスクリプト骨組み。秘密鍵スキャン、監査ログ、形式検証を含む。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

Hook の例を見るときは、まず何を防ぐかを確認し、自分の環境に合わせて改変します。

本章は**参考例**の設定とスクリプトを提供し、チーム改編を容易にします。フィールド名とパスは [公式ドキュメント](https://developers.openai.com/codex) とローカル `codex --help` を正とし、コピー前に隔離リポジトリで試走してください。

事前読了：[Hooks 概要](/skills/hooks/hooks-overview/) · [Hook イベントタイプ](/skills/hooks/hook-event-types/)

## 使用前に範囲を確認

これらの例をそのまま使える「正解」として扱わない。  
3 種類の雛形として見る。

- 記録のみ
- 先にブロック
- 軽量入力チェック

まず考え方を見て、拡張するか決める。

## 例 1：ツール呼び出し後に監査ログ（読み取り専用）

**目標：** 誰がいつどのパスに書き込み操作したかを記録。マスキング失敗時は秘密鍵をディスクに書かない。

`hooks.json`（参考例）：

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`：

```bash
#!/usr/bin/env bash
# stdin: JSON payload（構造は公式を正とする）
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**受け入れ：** ファイル書き込みを 1 回実行後、ログに 1 行。スクリプト終了コードは常に 0。

この類の例は記録のみで挙動を変えず、リスクが最も低く、通常は出発点に向きます。

## 例 2：ツール呼び出し前に疑わしい秘密鍵をブロック

**目標：** diff または書き込み内容が AWS アクセスキーパターンに一致したら `block`。

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

`secret-scan.sh` の核心ロジック（参考例）：

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**受け入れ：** `AKIA` テスト文字列を含むとブロック。通常の `git status` は通過。

:::caution
正規表現スキャンは誤検知・見逃しあり。補助層のみ。実際の秘密鍵は secret scanner と pre-commit を使い、[機密コンテキスト](/guide/context/sensitive-context/) を参照。
:::

この類は、実動作を止めることを決めた後に使うのが一般的。最初から block 型 Hook だとトラブルシュートコストが高くなりがちです。

## 例 3：ユーザープロンプト送信時の長さとキーワードポリシー

**目標：** システム指示を上書きしようとする明らかなフレーズを拒否（簡略例）。

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**受け入れ：** 超長とパターン一致時に失敗。通常タスクは通過。

この類は少なくとも次が必要です。

- 入力を見られる
- 明確な失敗理由を出せる
- 正常リクエストを過度に誤傷しない

## チームルールとの同源

「禁止コマンド部分文字列」を `tools/codex-policy.json` に抽出し、Hook と [コマンドルール](/guide/customization/rules/command-rules/) が共通読み取り。二重保守を避ける。

## よくある誤解

### 1. 例が動けば本番にそのまま載せられる

例の価値は構造と考え方の説明にあり、そのまま本番投入を意味しません。

### 2. block 型 Hook が log 型より成熟しているとは限らない

多くのチームは log から始め、誤検知とパフォーマンスを確認してから warn/block に上げます。

### 3. Hook 例はスクリプトの書き方だけを見ればよい

スクリプトだけでは不十分。次も見る。

- どのイベントに付けるか
- 失敗戦略は何か
- チームがなぜこう止めるか説明できるか

## Hook のテスト

```bash
# fixture でスクリプトをテスト（参考例）
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## よくある順序

多くのチームは次の順で進めます。

1. 読み取り専用ログ型
2. warn 型
3. block 型

「ロジックが正しい」と「チームがブロックを受け入れる」を分けやすくなります。

Hook 例は主に考え方と構造の学習用。正式環境へそのまま移植は不向きです。

## よくあるミス

- スクリプトに `chmod +x` がなく、静かに失敗
- `timeout_ms` が短すぎて誤ブロック
- ログパスが書き込めず Hook チェーン全体が失敗
- Hook 内で payload 全文を `curl` 外部送信

## 受け入れチェックリスト

- [ ] 各 Hook に対応する fixture テストがある
- [ ] 失敗戦略（block/warn）がチーム方針と一致
- [ ] 設定とスクリプトが同リポジトリ、同 PR レビュー
- [ ] ドキュメントに検証日と対象 CLI バージョンを記載

## 参考ソース

- OpenAI Codex Hooks 例
- freestylefly/CodexGuide 監査設定
- stormzhang `22-hooks.md`

---

**状態：** outdated  
**対象製品：** CLI / App（バージョンによる）  
**最終検証：** 2026-07-26  
**検証根拠：** 本ページは Hook 設定構造、イベント名、ペイロードフィールド、スクリプト例を含む。例は現行実装に強く依存し、十分に安定した公式公開根拠が不足。
