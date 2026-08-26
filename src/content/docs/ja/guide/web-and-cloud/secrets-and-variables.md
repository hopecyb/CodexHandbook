---
title: Secrets と環境変数
description: Cloud のセットアップ用 Secrets と、チャット全体で利用できる通常の環境変数を正しく使い分けます。
sidebar:
  order: 30
locale: ja
source_locale: zh-CN
source_revision: 08f8d64
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Cloud の環境変数と Secrets ではライフサイクルが異なります。安全に利用できる用途はこの違いで決まり、UI 上で値が隠されるかどうかだけが差ではありません。

| 種類 | 利用できるフェーズ | 適した内容 |
|---|---|---|
| 環境変数 | セットアップと Agent | 実行モードや公開 API のベース URL など、機密ではない設定 |
| Secret | セットアップスクリプトのみ | 非公開パッケージの token や、依存関係の導入に必要な認証情報 |

Secret は追加の暗号化を施して保存され、タスク実行中だけ復号されます。Agent フェーズが始まる前に削除されるため、Agent が実行時に本番 API を呼ぶための一般的な認証情報チャネルではありません。

## 正しい例：非公開パッケージをインストールする

環境設定で `NPM_TOKEN` Secret を作成します。セットアップスクリプトは一時的な認証設定を作り、依存関係をインストールします。

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

Agent は token を必要とせず、インストール済みの依存関係を使います。セットアップログへ Secret を `echo` しないでください。

## 誤った例

```text
本番 API_KEY を通常の環境変数として設定し、Agent に外部サービスを curl させて
実際の注文を検証させる。
```

ネットワークアクセスが有効な場合、これは Agent フェーズ全体で機密値を露出し、外部送信や誤操作のリスクを生みます。fixture、mock、範囲を限定した一時的なテスト認証情報を使うか、認証が必要な準備をセットアップ内で完了してください。

## 設定レビュー

1. セットアップと Agent の各フェーズで本当に必要な値を列挙する。
2. インストール時だけ使う機密値には Secret を使う。
3. Agent が必要とする非機密設定には環境変数を使う。
4. 値をプロンプト、issue、PR、リポジトリ、`AGENTS.md` に書かない。
5. secret scanner を実行し、セットアップログを確認する。
6. 認証情報を定期的にローテーションし、不要なものを削除する。

セットアップは独立した Bash セッションで実行されます。通常の `export` は Agent フェーズへ自動的に引き継がれません。チャット全体で必要な非機密値は、一時的な shell 状態に頼らず環境変数として設定します。

## CI との関係

GitHub Actions Secrets と Codex Cloud Secrets は別々のストアであり、自動同期されません。変数**名**をそろえると文書化しやすくなりますが、権限が広すぎる 1 つの本番 token を両方へコピーしないでください。

## 漏えい後の対応

認証情報を直ちに失効またはローテーションし、ログ、チャット、issue、Git 履歴から削除します。現在のファイルだけを消しても、すでに伝播した Secret は回収できません。

## 公式情報

- [Cloud 環境：変数と Secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**状態：** verified

**対象製品：** Cloud

**最終検証：** 2026-08-26
