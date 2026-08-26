---
title: インターネットアクセス
description: インストール時と Agent 実行時のネットワークを区別し、ドメインと HTTP method でリスクを制限します。
locale: ja
source_locale: zh-CN
source_revision: 1e2d815
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 70
reviewed_at: 2026-08-26
---

Cloud には異なる二つのネットワークフェーズがあります。

| フェーズ | デフォルト動作 | 主な用途 |
|---|---|---|
| setup script | インターネット接続あり | 依存関係とツールのインストール |
| Agent phase | デフォルトでオフ | タスク実行中に Agent が外部リソースへアクセス |

したがって、setup で `pnpm install` が成功しても、その後 Agent が任意の Web サイトへ `curl` できるとは限りません。

## デフォルトで無効にする理由

Agent のインターネットアクセスには、prompt injection、コードやデータの外部送信、悪意のある依存関係、ライセンスに適合しない内容がリポジトリへ入るリスクがあります。信頼できない issue、Web ページ、依存関係の README に、データ送信コマンドを実行させる指示が含まれる可能性もあります。

原則は、タスクに必要な接続先と操作だけを許可し、作業ログをレビューすることです。

## 設定オプション

Agent のインターネットアクセスは環境ごとに設定します。

- **Off**：Agent のインターネットアクセスを完全にブロック
- **On**：アクセスを許可し、ドメインと HTTP method で制限可能

ドメイン一覧は空から開始するか、Common dependencies の preset、または All（unrestricted）を選択できます。本番リポジトリで unrestricted をトラブルシューティングの近道として使わないでください。

タスクが文書またはコンテンツを読み取るだけなら、HTTP method を `GET`、`HEAD`、`OPTIONS` に制限します。これにより、データ送信や変更につながりうる `POST`、`PUT`、`PATCH`、`DELETE` をブロックできます。

## 最小限の許可例

公開 API の文書を参照する必要がある場合：

1. 最初は Off のままにし、失敗の原因が実際にネットワークであることを確認する。
2. Agent access を有効にする。
3. allowlist には公式ドメインだけを追加する。
4. `GET`、`HEAD`、`OPTIONS` だけを許可する。
5. 再実行し、ログにあるすべての外向きリクエストを確認する。
6. タスク終了後、Off に戻すべきかを評価する。

## Secret との重要な関係

Cloud Secret は Agent フェーズの前に削除されるため、Agent が setup Secret を直接外部送信するリスクは低下します。しかし、通常の環境変数、リポジトリ内容、タスクが生成したデータは送信される可能性があります。Secret のライフサイクルを回避するため、機密値を通常の変数に偽装しないでください。

## 検収チェックリスト

- [ ] Agent フェーズにインターネットが必要な理由を説明した
- [ ] allowlist は必要なドメインだけを含む
- [ ] HTTP method を最小の集合に制限した
- [ ] 入力元を信頼できる、または prompt injection を考慮した
- [ ] ログにリポジトリ、環境、認証情報を送信するコマンドがない
- [ ] 新しい依存関係の配布元、バージョン、ライセンスを確認した

## 公式情報

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**状態：** verified

**対象製品：** Cloud

**最終検証：** 2026-08-26
