---
title: Web と Cloud（概要）
description: リポジトリ接続、再現可能な環境、レビュー、Pull Request までのリモートタスクの流れを理解します。
locale: ja
source_locale: zh-CN
source_revision: 5861c62
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 13
reviewed_at: 2026-08-26
---

Codex Cloud は隔離されたクラウド環境でコーディングタスクを実行します。バックグラウンドの長時間タスク、並行した試行、GitHub、GitLab（Beta）、Linear、Slack から開始する作業に適しています。「PC を遠隔操作する」ものではなく、ローカルでまだ push していないファイルを自動的に参照することもありません。

## 一つの Cloud タスクの流れ

```text
ChatGPT でログイン
  → GitHub / GitLab を接続
  → リポジトリ環境を作成
  → 指定したブランチまたは commit を checkout
  → setup script で依存関係をインストール
  → Agent がネットワークポリシーの範囲内で変更、検証
  → 要約、ログ、diff を確認
  → follow-up で修正、または PR を作成
  → 人によるレビューと CI の後に merge
```

Cloud の価値は隔離、再現性、並行処理にあり、レビューをなくすことではありません。

## ローカルと Cloud の選択

| ローカルを選ぶ | Cloud を選ぶ |
|---|---|
| 未コミットのファイルまたはローカルサービスに依存する | 入力がリモートリポジトリにある |
| プロセスとリアルタイムで対話する必要がある | タスクをバックグラウンドで独立して実行できる |
| 小さく短時間の変更 | 複数ステップのビルド、テスト、並行した試行 |
| ツールが現在の PC にしかない | スクリプトで環境を再構築できる |

実行境界を理解するには、先に[ローカルと Cloud](/ja/guide/foundations/local-vs-cloud/)を参照してください。

## 推奨する学習順序

1. [GitHub を接続する](/ja/guide/web-and-cloud/connect-github/)：必要なリポジトリだけを認可する。
2. [Cloud 環境](/ja/guide/web-and-cloud/cloud-environments/)：ツール、バージョン、setup を固定する。
3. [Secrets と環境変数](/ja/guide/web-and-cloud/secrets-and-variables/)：インストール時の Secret と実行時の変数を区別する。
4. [インターネットアクセス](/ja/guide/web-and-cloud/internet-access/)：Agent フェーズはデフォルトでオフライン。ドメインと method を最小限だけ許可する。
5. [委任と follow-up](/ja/guide/web-and-cloud/delegate-and-follow-up/)：目標、制約、検収基準を使ってタスクを依頼する。
6. [Pull Request を作成する](/ja/guide/web-and-cloud/create-pull-requests/)と[コードレビュー](/ja/guide/web-and-cloud/code-review/)：結果を merge 可能な成果物にする。
7. [Cloud のトラブルシューティング](/ja/guide/web-and-cloud/troubleshooting/)：リポジトリ、setup、ネットワーク、タスクの四層で問題を特定する。

デスクトップ App または IDE から開始する場合は、それぞれ[ローカルタスクと Cloud タスク](/ja/guide/desktop-app/local-and-cloud-tasks/)と [IDE の Cloud タスク](/ja/guide/ide/cloud-task-workflow/)を参照してください。

## 最初の練習

本番の認証情報を含まないテスト用リポジトリを選び、Codex には文書リンクの修正とリンクチェックだけを依頼してください。成功基準は、環境が起動する、diff が想定したファイルだけを含む、コマンド出力を確認できる、結果から PR を作成できる、です。画面に「完了」と表示されたことだけを検収基準にしないでください。

## 公式情報

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Cloud 環境](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**状態：** verified

**対象製品：** Cloud

**最終検証：** 2026-08-26
