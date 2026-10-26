---
title: スクリプトとパイプライン
description: shell、Makefile、GitHub Actions で codex exec を編成——再現可能、監査可能に。
locale: ja
source_locale: zh-CN
source_revision: "07aeb4f"
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI / GitHub Actions
  basis: 現行の公式 Non-interactive mode と Codex GitHub Action の推奨事項を照合し、`--cd` を修正済みです。API キーを使う job とリポジトリへの書き込み権限を持つ job の分離を、既定の安全境界としています。
  checkedAt: '2026-08-26'
---

ここでは Codex を一回の臨時操作から、**チームが繰り返し走らせ、問題時に追跡し、担当が変わっても引き継げる**自動化ステップにする方法を説明します。

スクリプトはフローを固定し、パイプラインはルールに従って反復実行します。

本章は [codex exec](/ja/guide/developer-platform/non-interactive/codex-exec/) を shell、Makefile、CI パイプラインに埋め込む方法を説明します。

## 本ページの内容

- ローカルスクリプト vs CI job の分担
- Prompt と秘密鍵の管理
- [コードレビュー自動化](/ja/guide/developer-platform/ci-cd/code-review-automation/) との組み合わせ

## 解くこと

「今日手でやったこと」を「チームが今後も同じ方法で安定再現できる」ことに変えること。

重視する三つ：

- 再現可能
- 監査可能
- 引き継ぎ可能

## なぜ「prompt を CI 画面に直接貼る」だけにしないか

保守が難しくなる：

- 担当が変わると設計意図が分からない
- ロジックを一か所変えても、通常のコードレビューフローに載せられない
- 失敗原因が prompt 変更、環境変更、スクリプト変更のどれか不明

prompt、スクリプト、ルールを Git に入れることは、自動化フローへのバージョン管理です。

## よくある誤解

### 自動化は早いほど良いわけではない

prompt が頻繁に変わり、成功基準が未確定、権限境界が未整理の段階で早く自動化すると、後の調査が難しくなります。

### スクリプトはやり方を固定するため

良いスクリプトは、人が覚えていた手順を誰もが読め、review できるファイルにします。

## 最小限の Shell スクリプト

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

`prompts/ci/security-review.md` は Git に入れ、変更は review 経由。

## 最初に身につける習慣

最初から規模と機能を広げすぎず、次の三つを固定：

1. Prompt ファイルの置き場所
2. 入口スクリプト名
3. 成功と失敗の判定方法

これでログ、schema、通知を足すときもスムーズです。

## GitHub Actions：公式 Action を使う

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - name: Run review
        uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: prompts/ci/pr-review.md
```

:::caution
GitHub Actions では公式の `openai/codex-action` を優先してください。リポジトリのコードを実行する job 全体の環境変数に API キーを設定しないでください。後続処理で PR への書き込みが必要なら、書き込み権限とキーを別々の job に分離し、パッチの artifact で引き継ぎます。
:::

## 推奨ワークフロー

| 層 | 内容 |
|---|---|
| リポジトリ | `prompts/`、`tools/run-codex.sh` |
| CI | 読み取り専用 checkout、CLI 固定、log artifact アップロード |
| コールバック | 任意 [Webhook](/ja/guide/developer-platform/webhooks/overview/) で内部システム更新 |

## 判断方法

次の二つを満たすならスクリプトやパイプライン向き：

- 繰り返す
- 毎回同じやり方にしたい

例：PR レビュー、変更サマリー、セキュリティスキャン、文書チェック。

フローがまだ安定していない段階で「全自動」を急がない。先にスクリプトでやり方を固定し、それをパイプラインに接続する方が安定します。

## よくあるミス

- Prompt を `${{ github.event.pull_request.body }}` で動的結合し未エスケープ（注入）
- 同一 PR に同時実行制御なし。重複実行でクォータ消費
- ローカルは通るが CI で依存不足（`npm ci` 未実行）
- 成功基準が「走り終わった」だけ。構造化結論の解析なし
- 最初から過大な書き込み権限

## セキュリティ境界

- CI token は最小権限。`git push` は独立承認 job 以外禁止
- Fork PR の workflow ではキーの使用に注意する（`pull_request_target` はセキュリティレビュー必須）

## 受け入れチェックリスト

- [ ] Prompt とスクリプトが Git でバージョン管理されている
- [ ] CI 失敗がマージをブロックする（方針で要求する場合）
- [ ] Artifact 保持方針がコンプライアンスに適合
- [ ] ローカル `make review` と挙動が一致

## 参考
- OpenAI Codex + GitHub 統合ドキュメント
