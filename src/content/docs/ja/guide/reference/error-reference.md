---
title: エラーとメッセージリファレンス
description: 常见エラー、終了コード、失敗原因の学習向け索引——公式サポートの代替ではない。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

エラーを見ると、英語の一行を直感で当てにいきがちですが、先に分類する方が効率的です。

**認証、権限、環境、ネットワーク、タスクロジック**のどれに近いかを先に判断してください。本ページは高頻度メッセージの大意と次の一手を整理した索引です。完全エラー辞典ではありません。最新挙動は公式とクライアント出力を基準にしてください。

## エラーを見たら先に読む

1. キーワードがどの類か：認証、権限、環境、ネットワーク、コンテキスト
2. どの段階か：起動、インストール、実行、push、出力
3. 該当トピックページへ

原因を直感で当てるより速いことが多いです。

全体索引：[トラブルシュート](/guide/reference/troubleshooting/)

## 認証とアカウント

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| Authentication failed / 401 | token 期限切れ、未ログイン | [ログインと認証](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | 組織が機能またはモデルを無効化 | 管理者に連絡。[アカウントとアクセス](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | リクエスト過多またはクォータ | 後で再試行。プラン使用量を確認 |

## よくある誤解

### 1. 長い＝複雑ではない

長文は文脈を積んだだけで、有用な一行は短い部分にあることが多いです。

### 2. 非ゼロ終了コード＝モデルができない

権限不足、ネットワーク不通、出力形式未達、タスク自体の失敗条件など、別原因もあります。

### 3. 401 / 403 / 429 は同じではない

- `401`：認証が通っていない
- `403`：認証は通ったが許可されていない
- `429`：速すぎる。後で再試行

### 4. 最後の一行が必ずしも最重要ではない

最後は「最終失敗要約」だけのことも。上の方に有用情報：

- どのステップで発火したか
- どのファイル、コマンド、ツールが失敗したか
- より原始の原因ヒントがあるか

## CLI とコマンド

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| command not found: codex | 未インストールまたは PATH | [CLI インストール](/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML 構文 | [CLI 設定](/guide/cli/configuration/) |
| Permission denied (write) | サンドボックスまたは承認拒否 | [承認とサンドボックス](/guide/cli/approvals-and-sandbox/) |
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

完全辞典ではなくエラー分流表として：

- キーワードを見る
- 対応類を探す
- より具体のトラブルシュートページへ

まだ分からなければ、エラーをより直接的な問いに翻訳：

- ログイン問題？
- 権限問題？
- コマンド未インストール？
- ネットワーク不通？
- Codex への要求自体が不明確？

次の一手が分からなければ、まず本ページで大类へ分類。

## 権限とサンドボックス

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| User rejected tool call | あなたまたは方針が操作拒否 | 承認すべきか確認。またはタスク変更 |
| Sandbox violation | 書き込みパスまたはコマンドが越界 | [サンドボックスとネットワーク](/guide/foundations/sandbox-and-network/) |
| Network access denied | 外向き通信禁止 | Cloud：[インターネットアクセス](/guide/web-and-cloud/internet-access/) |

## Cloud と GitHub

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| Repository access denied | OAuth scope 不足 | [GitHub 接続](/guide/web-and-cloud/connect-github/) |
| Clone failed | リポジトリ名、権限、ネットワーク | [Cloud トラブルシュート](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | 名前誤りまたは scope 誤り | [Secrets と変数](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | ブランチ保護 | [PR 作成](/guide/web-and-cloud/create-pull-requests/) |

## MCP と拡張

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| MCP server failed to start | コマンドパス、依存不足 | [MCP 接続](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | 外部 API 遅延または障害 | 再試行。MCP ログ確認 |
| Unknown tool | 設定とサーバーバージョン不一致 | セッション再起動。設定更新 |

## コンテキストとモデル

| 表示または現象 | 可能性 | 次の一手 |
|---|---|---|
| Context length exceeded | 会話または @ ファイルが大きすぎ | [圧縮](/guide/context/compaction/) · 範囲縮小 |
| Model not available | 地域またはプラン非サポート | [モデルと推論](/guide/foundations/models-and-reasoning/) |

## 本ページの使い方

1. **キー文を**クライアント検索または本ハンドブック検索にコピー
2. 表からトピックページのチェックリストを実行
3. 解決しない：完全ログを保持。[公式リソース](/guide/reference/official-resources/)

## 報告時に添付すると助かる情報

- クライアント種別とバージョン（App / CLI / IDE / Cloud）
- OS
- 脱敏後のエラー全文
- 非対話か、CI か

## トラブルシュート順序

1. 完全エラーをスクリーンショットまたはコピー。最後の一行だけにしない
2. 類を判断。技術細部を急いで当てに行かない
3. 直前に何を変えたか思い出す
4. 一変数だけ変えて一度再試行
5. まだダメなら完全情報を添えて質問または公式確認

複数変更を混ぜない。他人も定位しやすくなります。

## 参考
- OpenAI Codex サポートドキュメント
---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** 本ページは「エラー分流索引」として位置づけ。認証、権限、環境、ネットワーク、タスクロジックの五類分流は現行 CLI、Cloud、権限、設定章と相互確認。固定エラーコード表には依存しない。  
**最終検証：** 2026-07-26
