---
title: MCP
description: サードパーティのツールとコンテキストを、制御された方法で ChatGPT と Codex に接続します。
locale: ja
source_locale: zh-CN
source_revision: ff68431
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP（Model Context Protocol）が解決するのは「Agent がリポジトリ外のツールやデータをどう呼び出すか」であり、「ワークフローをどう記述するか」ではありません。

## 対象読者

- Codex からドキュメント、デザイン、チケット、社内ツールを参照したい個人開発者
- 外部ツール、OAuth、最小権限を統一して設定する必要があるチーム
- 「サーバーを設定したのにツールが表示されない、または呼び出しに失敗する」問題を調査する保守担当者

タスクが現在のリポジトリ内の読み書きだけで完了するなら、まず組み込みのファイル機能とターミナル機能を使ってください。サードパーティのコンテキストや操作が本当に必要な場合だけ MCP を接続します。

## 読む順序

1. [MCP の概要](/ja/skills/mcp/mcp-overview/)：MCP、Skill、Plugin の役割を区別する
2. [MCP サーバーに接続する](/ja/skills/mcp/connect-an-mcp-server/)：CLI または `config.toml` で最初のサーバーを接続する
3. [MCP 接続をデバッグする](/ja/skills/mcp/debugging-mcp/)：「設定、起動、認証、ツール」の四層で調査する

## 現在のサポート範囲

- ChatGPT デスクトップ App、Codex CLI、IDE 拡張は、同じ Codex host 上で MCP 設定を共有する
- ローカルの Codex クライアントは STDIO と Streamable HTTP サーバーをサポートする
- ChatGPT Web はローカルの `~/.codex/config.toml` を読み込まない。インストール済み Plugin が提供するリモート MCP ツールを使用する

## 最初に覚える三つのこと

1. MCP はツールを公開しますが、信頼できるワークフローを定義するわけではありません。安定した手順は Skill または `AGENTS.md` に記述します。
2. サーバーでできることは、公開するツールと、その背後の認証情報に与えられた権限範囲によって決まります。
3. 最初の接続では、読み取り専用、テスト用テナント、少数のツールから始めてください。本番の管理者 token で試してはいけません。

## 公式情報

- [OpenAI：Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Model Context Protocol 仕様](https://modelcontextprotocol.io/)

---

**状態：** verified

**対象製品：** ChatGPT デスクトップ App / Codex CLI / IDE。ChatGPT Web は Plugin を介してリモート MCP ツールを使用します

**検証範囲：** クライアントのサポート、共有設定、転送方式、CLI コマンド

**最終検証：** 2026-08-25
