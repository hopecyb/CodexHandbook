---
title: IDE の Cloud タスク
description: IDE から長時間タスクを Codex Cloud へ委任し、レビュー可能な結果へ戻ります。
locale: ja
source_locale: zh-CN
source_revision: ea8a618
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 60
reviewed_at: 2026-08-26
---

IDE では短い反復作業をローカルに残す一方、Codex web に接続して時間のかかるタスクを Cloud へ委任できます。入口はエディタ内にありますが、実行環境、リポジトリ状態、ネットワーク境界は Cloud のものに変わります。

## 委任するタイミング

| ローカルに残す | Cloud へ委任する |
|---|---|
| 現在の選択範囲を素早く繰り返し変更する | 手順が多く、実行時間が長い |
| まだ commit していないローカル状態に依存する | 入力がリモートリポジトリにある、またはアップロード可能 |
| ローカル専用ツールへのアクセスが必須 | Cloud 環境で依存関係と検証を再構築できる |
| プロセスをリアルタイムに操作する必要がある | ローカルで別の作業を続けたい |

Cloud は、まだ commit していないローカルファイル、認証情報、実行中のプロセスを自動的には持ちません。委任前に、どのリポジトリ、ブランチ、commit からタスクを開始するかを明示してください。

## 委任前のチェックリスト

- [ ] ChatGPT アカウントでログイン済み。Codex Cloud は API key ログインを受け付けない
- [ ] GitHub を接続済み、または現在サポートされる GitLab Beta 統合を使用
- [ ] Cloud 環境でインストールと検証スクリプトを実行できる
- [ ] 必要な変数と Secrets を環境に設定し、プロンプトには書いていない
- [ ] ローカルの未コミット変更を処理済み、またはタスクに含めないことを明示済み
- [ ] 目標、許可するパス、禁止範囲、検収コマンドを明記済み

## エンドツーエンドの例

```text
目標：再試行モジュールが上限到達後も一度待機する問題を修正する。
開始点：リポジトリ acme/retry-service、ブランチ fix/retry-limit。
範囲：src/retry.ts と対応するテストだけを変更する。
制約：依存関係を更新せず、公開 API を変更せず、main へ push しない。
検収：pnpm test -- retry と pnpm typecheck を実行し、diff とコマンド結果を表示する。
```

推奨フロー：

1. IDE で関連ファイルまたは選択範囲を添付し、問題の境界を確認する。
2. Cloud を選択して長時間タスクを続ける。
3. Cloud で計画、進捗、検証結果を確認する。
4. IDE または Web に戻り、レビュー可能な結果を確認する。
5. ブランチを pull するか、PR から変更を取得する。
6. 信頼できるローカル環境で再テストし、人がレビューしてから merge する。

Cloud の「完了」はリモート実行の終了を示すだけで、コードが merge に適していることを意味しません。リモートの依存関係、OS、認証情報がローカルや CI と異なり、環境差が残る場合があります。

## 競合とセキュリティ

- 委任後、ローカルと Cloud で同じファイルを同時に変更しない
- 本番の Secret をプロンプトへ貼り付けず、環境 Secrets を使う
- Cloud のネットワークアクセスをデフォルト機能だと考えず、環境の allowlist で設定する
- push、PR 作成、merge は別の操作であり、merge には人または CI のゲートを残す

次は [Cloud 環境](/ja/guide/web-and-cloud/cloud-environments/) と [Pull Request を作成する](/ja/guide/web-and-cloud/create-pull-requests/) を参照してください。

## 公式情報

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**状態：** verified

**対象製品：** IDE、Cloud

**最終検証：** 2026-08-26
