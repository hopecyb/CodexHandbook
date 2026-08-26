---
title: Cloud のトラブルシューティング
description: リポジトリ、setup、ネットワーク、Agent、成果物の 5 層に分けて Cloud の失敗原因を特定します。
locale: ja
source_locale: zh-CN
source_revision: 4ba9a4d
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 80
reviewed_at: 2026-08-26
---

Cloud で再試行すると、再び時間を消費します。しかし、不足している権限、依存関係、ネットワーク設定が自動的に補われるわけではありません。まず、どの段階で失敗したかを判断してください。

## 5 層の切り分け

| 段階 | よくある症状 | 最初に確認する点 |
|---|---|---|
| リポジトリ接続 | リポジトリが一覧にない、403、ブランチが存在しない | GitHub の認可範囲、組織ポリシー、開始ブランチ |
| コンテナ / setup | `command not found`、依存関係のインストール失敗 | 固定したランタイム、setup script、Secret |
| Agent ネットワーク | setup ではダウンロードできるが、Agent の `curl` は失敗する | Agent access の既定値 Off、allowlist、HTTP メソッド |
| Agent 実行 | 意図しない変更、テストコマンドが存在しない | プロンプトの範囲、`AGENTS.md`、作業ログ |
| 成果物 | diff が不完全、PR を作成できない | ブランチの状態、書き込み権限、保護ルール |

## まず証拠を残す

リポジトリ、開始 commit、環境名、失敗した段階、最初の有効なエラー、完全なコマンドを記録します。最後の「exit 1」だけを残してはいけません。

```text
環境：api-node22
起点：main@abc123
段階：setup
コマンド：pnpm install --frozen-lockfile
最初のエラー：ERR_PNPM_FETCH_401 ...
ローカルとの差：ローカルでは ~/.npmrc を使用しているが、Cloud には NPM_TOKEN が設定されていない
```

このような記録があれば、次の試行で再び推測するのではなく、修正箇所を直接特定できます。

## 頻出する問題

### setup では Secret を読めるが、Agent では空になる

これは設計どおりの動作です。Secret は Agent フェーズの前に削除されます。認証情報が必要なインストール処理は setup に置いてください。保護を回避するために通常の環境変数へ変更してはいけません。

### setup はネットワークに接続できるが、Agent は接続できない

これも既定の動作です。タスクで Agent のネットワーク接続が本当に必要なら、環境設定で有効にし、ドメインと HTTP メソッドを制限してからログをレビューします。

### キャッシュに古い依存関係が残る

setup、maintenance、変数、secrets を変更すると、キャッシュは自動的に無効になります。リポジトリ自体の変更によってキャッシュに互換性がなくなった場合は、環境ページで Reset cache を実行します。チーム共有環境では、先にほかの利用者への影響を評価してください。

### ローカルでは成功し、Cloud では失敗する

Node / Python のバージョン、lockfile、システム依存関係、ローカルだけの隠れた設定、VPN / localhost のサービス、大文字と小文字を区別するパスを比較します。差異を明示的な setup とリポジトリルールに変換してください。

### PR review が開始されない

Cloud がリポジトリに設定されていること、Code review が有効であること、コメントが `@codex review` であることを確認し、GitHub 統合の権限を調べます。自動 reviews は別途有効にする必要があります。

## ローカル作業に戻すタイミング

問題がローカルサービスに依存している場合、または 2 回続けて業務コードではなく環境だけを直している場合は、先にローカルで最小再現を作ります。成功したコマンド、バージョン、テストを `AGENTS.md` / setup に反映してから、Cloud に再委任してください。

## 解決後の受け入れ確認

- [ ] 同じ環境で、クリーンな起点から繰り返し実行できる
- [ ] より広いリポジトリ権限や unrestricted ネットワークで問題を覆い隠していない
- [ ] ログに Secret が漏れていない
- [ ] 結果の diff とテストが引き続き人のレビューを受けている

## 公式情報

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**ステータス：** verified

**対象製品：** Cloud

**最終確認：** 2026-08-26
