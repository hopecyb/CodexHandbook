---
title: 権限マトリクス
description: ローカルの Permission Profile、従来のサンドボックス、Cloud のネットワークポリシーを区別します。
locale: ja
source_locale: zh-CN
source_revision: a161c0c
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 70
reviewed_at: 2026-08-26
---

「App / CLI / IDE / Cloud のどれが確認ダイアログを出すか」という固定表だけで権限を推測しないでください。実際の動作は、実行場所、有効な設定、組織の requirements、OS、タスクが行う操作の組み合わせで決まります。

![サンドボックスによる阻止、人による承認、実行結果までの判断フロー](/diagrams/sandbox-approval-flow-ja.svg)

## まず 3 つの仕組みを区別する

| 仕組み | スコープ | 主な制御対象 |
|---|---|---|
| ローカル Permission Profiles（Beta） | macOS、Linux、WSL、ネイティブ Windows で実行するローカルコマンド | ファイルシステムの read/write/deny、ネットワークの宛先 |
| 従来の sandbox settings | ローカル Codex | `read-only`、`workspace-write`、`danger-full-access` と承認ポリシー |
| Cloud environment policy | Codex Cloud | 隔離コンテナ、setup 時のネットワーク、Agent のネットワーク allowlist / HTTP メソッド |

Permission Profiles は従来の `sandbox_mode` と組み合わせません。読み込まれた設定に `sandbox_mode` がある、コマンドラインで `--sandbox` を渡した、または設定 Profile で sandbox を指定した場合、Codex は `default_permissions` ではなく従来のサンドボックス設定を使います。

## ローカル組み込み Permission Profiles

| 名前 | 境界 | 適した用途 |
|---|---|---|
| `:read-only` | ローカルコマンドは読み取り専用 | コード理解、レビュー、初めて扱うリポジトリ |
| `:workspace` | 現在の workspace roots とシステムの一時ディレクトリに書き込み可能 | 通常の開発タスク |
| `:danger-full-access` | ローカルサンドボックスの制限を解除 | 外部ですでに隔離され、明確に必要な場合のみ |

カスタム profile では、パスごとに `read`、`write`、`deny` を指定できます。また、より具体的なルールを使って、広い範囲から `.env` などの機密ファイルを除外できます。同じパスで競合する場合、`deny` は `write` より優先され、`write` は `read` より優先されます。

## 最小権限の例

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` は、コマンドによるネットワーク接続を許可するだけです。ドメインルールをプロキシで強制するには、`features.network_proxy` も有効にする必要があります。

## 操作ごとに評価する

| 操作 | 主なリスク | 最小限の境界 |
|---|---|---|
| ソースコードを読む | 機密ファイルがコンテキストに含まれる | workspace を read、credentials を明示的に deny |
| ファイルを変更する | 範囲外の上書きや削除 | 対象 workspace だけを write、先に diff を確認 |
| テストを実行する | スクリプトの副作用 | スクリプトをレビューし、管理された環境を使用 |
| 依存関係をインストールする | サプライチェーンとネットワーク接続 | バージョンを固定し、ドメインを制限 |
| Git push / PR | 外部状態の変更 | 独立したブランチ、ブランチ保護、人によるレビュー |
| MCP / Plugin ツール | 第三者へのデータ送信と書き込み操作 | 最小 scope、項目ごとの承認とログ |

`AGENTS.md` には「push しない」と書けますが、技術的に強制する境界ではありません。ルールを sandbox / permissions、GitHub 権限、人によるレビューと組み合わせる必要があります。

## チームでの確認方法

1. クライアントと Codex のバージョンを記録する。
2. 読み込まれたすべての設定レイヤーを列挙する。
3. Permission Profile と従来の sandbox のどちらを使用しているか確認する。
4. 機密データを含まないテスト用ディレクトリで、read、write、deny、ネットワークをそれぞれ検証する。
5. その後で実際のリポジトリに接続し、Git と組織側のガードレールを維持する。

Permission Profiles はまだ Beta です。アップグレード後は、この検証をもう一度実施してください。

## 公式情報

- [Permissions（Beta）](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)

---

**ステータス：** verified

**対象製品：** App、CLI、IDE、Cloud

**最終確認：** 2026-08-26
