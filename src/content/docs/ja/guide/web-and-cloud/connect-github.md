---
title: GitHub に接続
description: Codex Cloud と GitHub リポジトリを連携する——権限、ブランチ、環境。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

GitHub に接続すると、Codex は**リモート環境**でリポジトリをクローンし、ブランチを作成し、プッシュして PR を開けます。これは Cloud ワークフローの前提です。

## 内容

- 接続が必要な理由、どの権限を承認するか
- 接続前後のチェックリスト
- ローカルデスクトップタスクとの役割分担

## 関係図

```text
あなたの GitHub リポジトリ
    ↕（OAuth / GitHub App、製品仕様による）
Codex Cloud 環境
    ↕
Web/App で開始したクラウドタスク
```

ローカルの [デスクトップ App](/guide/desktop-app/) は引き続きローカル clone を直接編集できます。Cloud は**標準化された環境、PC を離れても継続実行、スマホからの承認**などの場面向きです。詳しくは [ローカルとクラウド](/guide/foundations/local-vs-cloud/) を参照。

## よくある誤解

### 1. ローカルにリポジトリがあるのに、なぜ GitHub に再接続するのか？

Cloud タスクが参照するのはリモートリポジトリであり、ローカルのリポジトリではありません。

### 2. GitHub に接続すれば、ローカルの変更がすべて見えるのか？

push していないローカルの変更は、Cloud からは通常見えません。  
これはよくある混乱点です。

### 3. 接続時に最も注意すべきことは？

次を先に確認すべきです：

- リポジトリのスコープが広すぎないか
- ブランチ保護の設定
- キーが Cloud の安全な場所に正しく配置されているか

GitHub に接続した後、Cloud が見るのはリモートリポジトリであり、まだプッシュしていないローカルの状態ではありません。

## 接続前チェック

- [ ] 対象リポジトリへの push 権限がある（PR のみ必要な場合は fork 戦略）
- [ ] ブランチ保護ルールを把握している：main への直接 push が禁止されているか
- [ ] キーがリポジトリ内にない。Cloud は [Secrets 設定](/guide/web-and-cloud/secrets-and-variables/) を使用
- [ ] 組織がサードパーティ GitHub 統合を許可している

## 推奨手順（概念）

1. Codex Web/Cloud 設定で **GitHub 接続** を開く
2. 組織とリポジトリのスコープを選択（**できるだけ最小限のリポジトリリスト**）
3. OAuth 権限の説明を確認：通常はコードの読み取りと PR の作成が必要。書き込み権限はタスク次第
4. テストリポジトリで小規模な Cloud タスクを開始して検証
5. 成功後、デフォルトブランチと環境変数（あれば）を設定

具体的なボタンと UI は現行製品に準拠してください。

## 権限とセキュリティ

| プラクティス | 理由 |
|---|---|
| 専用マシンユーザーまたは bot アカウントを使う（チーム） | 監査と退職時の回収 |
| すべてのプライベートリポジトリを承認しない | 誤操作のリスクを下げる |
| ブランチ保護 + 必須 review を有効化 | Cloud の成果物も人のレビューを通す |
| 接続済みリポジトリリストを定期的に見直す | 終了したプロジェクトは速やかに切断 |

## 接続後のよくあるタスク

- リモートで issue を実装 → [Pull Request を作成](/guide/web-and-cloud/create-pull-requests/)
- PR レビューとフォローアップ → [GitHub](/guide/integrations/github/) 統合
- [Automations](/skills/automations/scheduled-tasks/) との連携

## よくあるエラー

- 個人 GitHub を本番組織リポジトリに接続し、個人ポリシーを適用している
- Cloud がローカル未プッシュの commit にアクセスできると想定している
- 初回から大規模 monorepo で無制限タスクを実行している

## 参考ソース

- OpenAI Codex Cloud / GitHub 統合ドキュメント
- KimYx0207 CX-10、CX-11
- stormzhang `26-git-github.md`、`10-cloud.md`

---

**状態：** outdated  
**対象製品：** Cloud / Web  
**検証根拠：** 本ページは現行の GitHub 接続方式、承認モデル、リポジトリスコープ設定、Cloud 側のボタン入口など具体的な製品動作に依存している。これらはすべて変動の激しい統合情報であり、現行の公式接続ドキュメントを補完してから `verified` に戻す必要がある。  
**最終検証：** 2026-07-26
