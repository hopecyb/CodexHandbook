---
title: CLI をインストールする
description: Codex CLI をインストールし、バージョン、ログイン状態、最初のリポジトリタスクを確認します。
locale: ja
source_locale: zh-CN
source_revision: b12f7d0
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 40
reviewed_at: 2026-08-26
---

Codex CLI は、調査、変更、テスト、レビューをターミナル内で行う場合に適しています。公式インストールページでは macOS / Linux、Windows、npm、Homebrew の選択肢が提供されています。OS とソフトウェア管理方法に合うものを一つ選んでください。

## macOS / Linux の公式スタンドアロンインストーラー

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

CLI を更新するときも、同じ公式インストールコマンドを実行します。Windows、npm、Homebrew を使う場合は、[Codex CLI の公式ページ](https://learn.chatgpt.com/docs/codex/cli)で対応するインストールタブへ切り替えてください。macOS / Linux 用コマンドをすべての OS にそのまま使わないでください。

## インストール後の確認

新しいターミナルウィンドウを開き、練習用リポジトリで次を実行します。

```bash
codex --version
codex login status
```

まだログインしていない場合：

```bash
codex login
```

ブラウザでの認証を完了したら、リポジトリディレクトリで対話セッションを開始します。

```bash
codex
```

最初のタスクは読み取り専用にできます。

```text
まだファイルを変更しないでください。このプロジェクトのインストール、テスト、ビルド方法を説明し、参照したファイルのパスを示してください。
```

## エラーが出た場合の確認順序

1. `codex --version` でコマンドが見つからない：ターミナルを開き直し、現在の shell の `PATH` を確認する。
2. コマンドは実行できるが利用できない：`codex login status` を実行し、インストール問題と認証問題を区別する。
3. ログインしている ID が違う：`codex logout` を実行してからログインし直す。
4. 会社の環境で拒否される：ワークスペース、ログイン方法、managed configuration を確認し、個人の認証情報へ切り替えてポリシーを回避しない。

API key を shell 履歴、チケット、チャットに貼り付けないでください。API key でログインする必要がある場合は、[ログインと認証](/ja/guide/getting-started/sign-in-and-authentication/)に従い、標準入力を使用してください。

次に [CLI の対話モード](/ja/guide/cli/interactive-mode/) を学んでください。そのほかの問題は [CLI のトラブルシューティング](/ja/guide/cli/troubleshooting/) を参照してください。

---

**状態：** verified

**対象製品：** CLI

**検証根拠：** 現在の Codex CLI クイックスタートと認証文書を照合し、macOS / Linux の公式インストーラー、`codex` の起動手順、ChatGPT でのログイン、ログイン状態コマンドを確認しました。そのほかのインストール方法は、公式ページの最新タブへ案内します。

**最終検証：** 2026-08-26
