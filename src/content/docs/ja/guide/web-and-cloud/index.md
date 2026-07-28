---
title: Web と Cloud（概要）
description: Cloud タスク、環境、Secrets、PR レビューへの入口ナビゲーション。
sidebar:
  order: 13
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

Cloud は**標準化されたリモート環境**でタスクを実行し、GitHub に接続して PR を作成するのに向いています。始める前に [ローカルとクラウド](/guide/foundations/local-vs-cloud/) を読み、[公式 Cloud ドキュメント](https://developers.openai.com/codex) も参照してください。

タスクはあなたの PC 上ではなく、リモート環境で継続して実行されます。

このような場面でよく使われます：

- タスクの実行時間が長い
- ローカルマシンの前に張り付きたくない
- リモートリポジトリと PR フローに直接つなぎたい

Cloud は最初に触る部分とは限りませんが、リモートリポジトリ、PR、非同期の長時間タスクに触れ始めると、ほぼ必ず使うことになります。

## 章ナビゲーション

| 段階 | ページ |
|---|---|
| 接続 | [GitHub に接続](/guide/web-and-cloud/connect-github/) |
| 環境 | [Cloud 環境](/guide/web-and-cloud/cloud-environments/) |
| 認証情報 | [Secrets と環境変数](/guide/web-and-cloud/secrets-and-variables/) |
| 成果物 | [Pull Request を作成](/guide/web-and-cloud/create-pull-requests/) |
| 品質 | [Cloud コードレビュー](/guide/web-and-cloud/code-review/) |
| コラボレーション | [委任とフォローアップ](/guide/web-and-cloud/delegate-and-follow-up/) |
| ネットワーク | [インターネットアクセス](/guide/web-and-cloud/internet-access/) |
| トラブルシューティング | [Cloud トラブルシューティング](/guide/web-and-cloud/troubleshooting/) |
| 統合 | [GitHub 統合](/guide/integrations/github/) |

デスクトップ App からクラウドタスクを開始する：[ローカルとクラウドタスク](/guide/desktop-app/local-and-cloud-tasks/)。IDE から委任する：[IDE クラウドタスク](/guide/ide/cloud-task-workflow/)。

## 推奨読書順序

初めて Cloud に触れるときは、次の順序で読むとよいです：

1. [GitHub に接続](/guide/web-and-cloud/connect-github/)
2. [Secrets と環境変数](/guide/web-and-cloud/secrets-and-variables/)
3. PR、コードレビュー、コラボレーションフロー

「リポジトリへの接続方法、権限の取得方法、キーの扱い方」を先に把握してから、自動化の詳細を読むと省力です。

Cloud は、ローカルを離れても続けられるリモートリポジトリタスクを扱うのに向いており、単にローカルフローを Web に移しただけではありません。

---

**状態：** outdated  
**対象製品：** Cloud  
**検証根拠：** 本ページは Cloud ナビゲーションページとして構造的な価値はあるが、GitHub 接続、Secrets、PR、モバイルフォローアップ、ネットワークアクセスなどの依存機能はすべて変動の激しい製品領域にある。現行の公式 Cloud ドキュメントをページごとに補完するまでは、`outdated` とするのが適切。  
**最終検証：** 2026-07-26
