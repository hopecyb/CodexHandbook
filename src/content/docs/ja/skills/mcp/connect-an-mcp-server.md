---
title: MCP サーバーに接続する
description: CLI または config.toml で最初の MCP サーバーを設定・認証・検証します。
locale: ja
source_locale: zh-CN
source_revision: 0675d33
translation_status: draft
translated_at: 2026-09-20
---

この章では、現在の公式インターフェースを使い、**サーバーを追加 → 設定を確認 → セッション内でツールを確認 → 読み取り専用の呼び出しを一度行う**という最小の一連の操作を完了します。

## 始める前に

- [MCP 概要](/ja/skills/mcp/mcp-overview/)を読んでいること
- 手元で `codex mcp --help` が実行できること
- 最初の接続には信頼できる提供元と読み取り専用の用途を選ぶこと
- 実際の token をコマンド履歴、プロンプト、リポジトリに書かないこと

## 方法 A：CLI で STDIO サーバーを追加

公式の例では Context7 のドキュメントサーバーを使用します。

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

このコマンドはサーバーを Codex の設定に書き込みます。`--` より後ろは STDIO サーバーを起動するコマンドです。初回実行時に npm パッケージがダウンロードされる場合があるため、先にパッケージ名と提供元を確認してください。

## 方法 B：config.toml を直接編集

ユーザー単位の設定は既定では `~/.codex/config.toml` にあります。信頼できるプロジェクトでは、プロジェクト単位の `.codex/config.toml` も使用できます。

STDIO の例：

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

リモートの Streamable HTTP の例：

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`、アドレス、ツール名は構造を示すための例です。実際にはサーバーのドキュメントに記載された値に置き換えてください。`bearer_token_env_var` に保存するのは token 自体ではなく、環境変数の**名前**です。

## OAuth 対応サーバー

OAuth 対応サーバーを設定したら、次を実行します。

```bash
codex mcp login <server-name>
```

デスクトップ App と IDE の MCP 一覧にも OAuth が必要なサーバーが表示され、Authenticate 操作が用意されています。

## 三つのクライアントで確認する方法

| 環境 | 設定・確認の入口 |
|---|---|
| ChatGPT デスクトップ App | Settings → MCP servers。保存後に Restart し、`/mcp` で接続を確認 |
| Codex CLI | `codex mcp add/list/login`。TUI では `/mcp` を入力 |
| IDE 拡張 | 歯車メニュー → MCP servers。保存後に Restart extension |

この三つは同じ Codex host で設定を共有するため、設定ファイルを三つ別々に管理する必要はありません。ChatGPT Web はローカル設定を読みません。

## 検証用プロンプト

```text
現在接続されている MCP サーバーだけを使って、次を確認してください。
1. 開発ドキュメントの検索に使えるツール名を列挙してください。
2. 読み取り専用ツールを一つ選び、Node.js test runner の基本的な使い方を調べてください。
3. 実際に呼び出したツールを示してください。
4. 書き込みを行わず、ほかのサービスにも接続しないでください。
```

合格の根拠は、サーバーが `codex mcp list` または `/mcp` に表示され、読み取り専用ツールが構造化された結果を返し、無関係な権限を要求しないことです。

## 最小権限の設定項目

- `enabled_tools`：列挙したツールだけを許可します。
- `disabled_tools`：許可リスト適用後に、さらにツールを除外します。
- `enabled = false`：設定を残したまま一時的に無効化します。
- `required = true`：サーバーの初期化に失敗した場合、起動も失敗させます。本当に必須の依存先に適しています。

## 失敗した場合

推測で複数の項目を同時に変えないでください。エラーの原文を記録し、[MCP 接続のデバッグ](/ja/skills/mcp/debugging-mcp/)に従って、設定の読み込み、プロセスまたはネットワーク、認証、個別のツールを順に確認します。

## 公式資料

- [OpenAI：Codex を MCP サーバーに接続する](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)
