---
title: エラーとメッセージリファレンス
description: よくあるエラー、終了コード、失敗原因の学習向け索引——公式サポートの代替ではない。
locale: ja
source_locale: zh-CN
source_revision: '955c0a6'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: 本ページは「エラーの切り分け索引」として位置づけ。認証、権限、環境、ネットワーク、タスクロジックの五種類への切り分けは現行 CLI、Cloud、権限、設定章と相互確認。固定エラーコード表には依存しない。
  checkedAt: '2026-07-26'
---

エラーを見ると、英語の一行を直感で当てにいきがちですが、先に分類する方が効率的です。

**認証、権限、環境、ネットワーク、タスクロジック**のどれに近いかを先に判断してください。本ページは高頻度メッセージの大意と次の一手を整理した索引です。完全エラー辞典ではありません。最新挙動は公式とクライアント出力を基準にしてください。

## エラーを見たら先に読む

1. キーワードがどの類か：認証、権限、環境、ネットワーク、コンテキスト
2. どの段階か：起動、インストール、実行、push、出力
3. 該当トピックページへ

原因を直感で当てるより速いことが多いです。

全体索引：[トラブルシュート](/ja/guide/reference/troubleshooting/)

## 認証とアカウント

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| Authentication failed / 401 | token 期限切れ、未ログイン | [ログインと認証](/ja/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | 組織が機能またはモデルを無効化 | 管理者に連絡。[アカウントとアクセス](/ja/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | リクエスト過多またはクォータ | 後で再試行。プラン使用量を確認 |

## よくある誤解

### 1. 長い＝複雑ではない

長文は文脈を積んだだけで、有用な一行は短い部分にあることが多いです。

### 2. 終了コードが非ゼロでも、モデルに実行能力がないとは限らない

権限不足、ネットワーク不通、出力形式未達、タスク自体の失敗条件など、別原因もあります。

### 3. 401 / 403 / 429 は同じではない

- `401`：一般に、認証が正しく完了していない
- `403`：一般に、相手は誰か分かっているが操作は許可されていない
- `429`：一般に、リクエストが速すぎるため、時間を置いて再試行する

### 4. 最後の一行が必ずしも最重要ではない

最後は「最終失敗要約」だけのことも。上の方に有用情報：

- どのステップで発火したか
- どのファイル、コマンド、ツールが失敗したか
- 根本原因に近い手がかりがあるか

## CLI とコマンド

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| command not found: codex | 未インストールまたは PATH | [CLI インストール](/ja/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML 構文 | [CLI 設定](/ja/guide/cli/configuration/) |
| Permission denied (write) | サンドボックスまたは承認拒否 | [承認とサンドボックス](/ja/guide/cli/approvals-and-sandbox/) |
| 非ゼロ終了コード（exec） | タスク失敗または完了条件未達 | stderr ログ確認。prompt を絞る |

## 先に分類

| 類 | 最初に見るもの |
|---|---|
| 認証 | アカウント、token、ログイン状態 |
| 権限 | 承認、サンドボックス、リポジトリ権限 |
| 環境 | インストール、PATH、設定、依存 |
| ネットワーク | 外向き、プロキシ、リモートサービス到達性 |
| タスクロジック | prompt、入力ファイル、出力要求 |

ここまで分けると、調査方向がぶれにくくなります。

## 使い方

完全辞典ではなくエラーの切り分け表として：

- キーワードを見る
- 対応類を探す
- より具体のトラブルシュートページへ

まだ分からなければ、エラーをより直接的な問いに翻訳：

- ログイン問題？
- 権限問題？
- コマンド未インストール？
- ネットワーク不通？
- Codex への要求自体が不明確？

次の一手が分からなければ、まず本ページで大まかな種類に分類。

## 権限とサンドボックス

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| User rejected tool call | あなたまたは方針が操作拒否 | 承認すべきか確認。またはタスク変更 |
| Sandbox violation | 書き込みパスまたはコマンドが許可範囲を超過 | [サンドボックスとネットワーク](/ja/guide/foundations/sandbox-and-network/) |
| Network access denied | 外向き通信禁止 | Cloud：[インターネットアクセス](/ja/guide/web-and-cloud/internet-access/) |

## Cloud と GitHub

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| Repository access denied | OAuth scope 不足 | [GitHub 接続](/ja/guide/web-and-cloud/connect-github/) |
| Clone failed | リポジトリ名、権限、ネットワーク | [Cloud トラブルシュート](/ja/guide/web-and-cloud/troubleshooting/) |
| Secret not found | 名前誤りまたは scope 誤り | [Secrets と変数](/ja/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | ブランチ保護 | [PR 作成](/ja/guide/web-and-cloud/create-pull-requests/) |

## MCP と拡張

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| MCP server failed to start | コマンドパス、依存不足 | [MCP 接続](/ja/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | 外部 API 遅延または障害 | 再試行。MCP ログ確認 |
| Unknown tool | 設定とサーバーバージョン不一致 | セッション再起動。設定更新 |

## コンテキストとモデル

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| Context length exceeded | 会話または @ ファイルが大きすぎ | [圧縮](/ja/guide/context/compaction/) · 範囲縮小 |
| Model not available | 地域またはプラン非サポート | [モデルと推論](/ja/guide/foundations/models-and-reasoning/) |

## 本ページの使い方

1. **キー文を**クライアント検索または本ハンドブック検索にコピー
2. 表からトピックページのチェックリストを実行
3. 解決しない：完全ログを保持。[公式リソース](/ja/guide/reference/official-resources/)

## 報告時に添付すると助かる情報

- クライアント種別とバージョン（App / CLI / IDE / Cloud）
- OS
- 機密情報を伏せたエラー全文
- 非対話か、CI か

## トラブルシュート順序

1. 完全エラーをスクリーンショットまたはコピー。最後の一行だけにしない
2. 類を判断。技術細部を急いで当てに行かない
3. 直前に何を変えたか思い出す
4. 一変数だけ変えて一度再試行
5. まだダメなら完全情報を添えて質問または公式確認

複数変更を混ぜない。他の人も原因を特定しやすくなります。

## 参考
- OpenAI Codex サポートドキュメント
