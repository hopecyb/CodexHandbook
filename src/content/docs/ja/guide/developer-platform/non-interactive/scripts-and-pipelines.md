---
title: スクリプトとパイプライン
description: shell、Makefile、GitHub Actions で codex exec を編成——再現可能、監査可能に。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

ここでは Codex を一回の臨時操作から、**チームが繰り返し走らせ、問題時に追跡し、担当が変わっても引き継げる**自動化ステップにする方法を説明します。

スクリプトはフローを固定し、パイプラインはルールに従って反復実行します。

本章は [codex exec](/guide/developer-platform/non-interactive/codex-exec/) を shell、Makefile、CI パイプラインに埋め込む方法を説明します。

## 本ページの内容

- ローカルスクリプト vs CI job の分担
- Prompt と秘密鍵の管理
- [コードレビュー自動化](/guide/developer-platform/ci-cd/code-review-automation/) との組み合わせ

## 解くこと

「今日手でやったこと」を「チームが今後も同じ方法で安定再現できる」ことに変えること。

重視する三つ：

- 再現可能
- 監査可能
- 引き継ぎ可能

## なぜ「prompt を CI 画面に直接貼る」だけにしないか

保守が難しくなる：

- 担当が変わると設計意図が分からない
- 一箇所変更で code review が通らない
- 失敗原因が prompt 変更、環境変更、スクリプト変更のどれか不明

prompt、スクリプト、ルールを Git に入れることは、自動化フローへのバージョン管理です。

## よくある誤解

### 自動化は早いほど良いわけではない

prompt が頻繁に変わり、成功基準が未確定、権限境界が未整理の段階で早く自動化すると、後の調査が難しくなります。

### スクリプトはやり方を固定するため

良いスクリプトは、人が覚えていた手順を誰もが読め、review できるファイルにします。

## 最小 Shell 片段

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

`prompts/ci/security-review.md` は Git に入れ、変更は review 経由。

## 最初に身につける習慣

最初は「大而全」を狙わず、次の三つを固定：

1. Prompt ファイルの置き場所
2. 入口スクリプト名
3. 成功と失敗の判定方法

これでログ、schema、通知を足すときもスムーズです。

## GitHub Actions 示意

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # バージョン固定。公式インストール文書を基準に
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
例のインストール方式と権限 scope は組織セキュリティ要求に合わせて調整。**workflow で秘密鍵を echo しない。**
:::

## 推奨ワークフロー

| 層 | 内容 |
|---|---|
| リポジトリ | `prompts/`、`tools/run-codex.sh` |
| CI | 読み取り専用 checkout、CLI 固定、log artifact アップロード |
| コールバック | 任意 [Webhook](/guide/developer-platform/webhooks/overview/) で内部システム更新 |

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
- Fork PR の workflow で秘密鍵を安易に使う（`pull_request_target` はセキュリティレビュー必須）

## 受け入れチェックリスト

- [ ] Prompt とスクリプトが Git でバージョン管理されている
- [ ] CI 失敗がマージをブロックする（方針で要求する場合）
- [ ] Artifact 保持方針がコンプライアンスに適合
- [ ] ローカル `make review` と挙動が一致

## 参考

- OpenAI Codex + GitHub 統合ドキュメント
- codex.bozhouai.com 自動化章

---

**状態：** outdated  
**対象製品：** CLI  
**検証根拠：** 「prompt、スクリプト、パイプラインを Git review に入れる」原則は依然妥当だが、本文例は `codex exec`、CLI インストール方式、GitHub Actions 接続など高変動実装細部に依存。現行公式パイプライン文書を補足後に `verified` へ戻す。  
**最終検証：** 2026-07-26
