---
title: CLI コマンドリファレンス
description: Codex CLI の主なサブコマンドと引数の早見表。学習用の索引であり、公式資料の代わりではありません。
locale: ja
source_locale: zh-CN
source_revision: '6091bcc'
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 50
legacyVerification:
  status: verified
  products: CLI
  basis: 現行の公式 Developer commands の成熟度表と照合し、Stable の入口だけを列挙しました。--cd / -C、サンドボックス、承認の引数も確認済みです。Experimental や非推奨のコマンドは基本一覧に含めません。
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

コマンドリファレンスは、どの実行方法を使うか判断するための索引です。引数を覚える前に、次を確認してください。

> **今は対話入口か、単発コマンド入口か？**

このページは、現在 **Stable** とされる Codex CLI の入口を検索・比較しやすいようまとめたものです。実行前には `codex --help` と各サブコマンドの `--help` を確認し、成熟度と引数の全容は [Developer commands](https://learn.chatgpt.com/docs/developer-commands) を参照してください。

## いつ使うか

- 対話に入るか、一回限りコマンドか
- チャット式かスクリプト式か
- CLI を使うが、どの入口を見るべきか分からない

## 入口選択

- 見ながら話しながら修正：`codex`
- タスクを一度渡して終了時に結果：`codex exec`

CLI 初心者なら、この区別で入口の選択はほぼできます。

## Stable コマンド一覧

| 入口 | 用途 | 詳細 |
|---|---|---|
| `codex` | 対話型 TUI セッション | [対話モード](/ja/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | 非対話の単発タスク・パイプライン | [非対話モード](/ja/guide/cli/non-interactive-mode/) |
| `codex doctor` | インストール、設定、認証、実行環境、Git、端末の診断レポートを生成 | [CLI のトラブルシューティング](/ja/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | 認証を管理 | [サインインと認証](/ja/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | 保存されたセッションを再開・分岐 | [引き継ぎと再開](/ja/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | MCP サーバーを管理 | [MCP の接続](/ja/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Plugin のインストール、一覧表示、削除 | [Plugins](/ja/skills/plugins/) |

:::caution[成熟度の違い]
公式リファレンスには Experimental、Beta、Deprecated のコマンドもあります。この基本一覧には Stable と混在させていません。必要なときは成熟度とリスクを先に確認してください。
:::

## よくある誤解

### 1. リファレンスのコマンドを全部覚える必要はない

「どの類の入口が今のタスク向きか」を知り、残りは現場で `--help`。

### 2. `codex exec` は `codex` の上級版ではない

無人運用、スクリプト、CI 向き。「より強い対話入口」ではありません。

### 3. パラメータを見たらすぐ触る必要はない

多くは現行バージョン、環境、セキュリティ方針と関係。意図を理解してから変更判断。

### 4. コマンドリファレンス＝操作チュートリアルではない

- 入口地図
- パラメータ索引
- 「どの詳細ページを見るか」の中継

## 対話モード（概念）

```bash
# リポジトリのルートで対話セッションを起動（例）
codex

# セッション内のよくある操作（TUI を基準に）
# - タスク説明を入力
# - / スラッシュコマンド → slash-commands ページ
# - shell / ファイル書き込み要求の承認
```

スラッシュコマンド：[スラッシュコマンド早見](/ja/guide/reference/slash-commands/)

## 入口判断

CLI 初心者は：

1. 先に `codex --help`
2. 対話か `exec` か決める
3. サブコマンドを使うときだけその `--help`

最初から引数の一覧を読み込む必要はありません。

## 今すぐ始めるなら

1. `codex --help` を実行
2. 話しながらやるなら `codex` へ
3. CI やスクリプトなら `codex exec` を調べる

パラメータ細部より楽に始められます。

## 非対話 exec（概念）

```bash
# 作業ディレクトリと単発の prompt（例）
codex exec --cd /path/to/repo "タスクの完全な説明"

# 現在よく使う引数
# --cd, -C       作業ディレクトリ
# --model        モデルを固定
# --sandbox      サンドボックス方針
# --ask-for-approval, -a  承認方針
# stdin パイプ   ファイルまたは前段のコマンドから prompt を読む
```

セキュリティ：[人による承認パターン](/ja/cases/workflows/human-approval-patterns/)

## 設定と認証（概念）

| 操作 | 説明 |
|---|---|
| ログイン | [ログインと認証](/ja/guide/getting-started/sign-in-and-authentication/) と一致 |
| 設定ファイル | ユーザーレベル / プロジェクトレベル。[設定リファレンス](/ja/guide/reference/configuration-reference/) |
| MCP | [MCP 接続](/ja/skills/mcp/connect-an-mcp-server/) |

## 終了コードと自動化

非対話モードは一般に**終了コード**で成功/失敗を表し、CI が利用します。

- `0`：約束どおり完了
- 非 `0`：失敗または人の対応が必要。保存されたログを確認

CLI コマンドページは入口判断と意図検索用。パラメータ暗記で入門しない。

CI で stderr を無視しない。ログ保持は [診断優先](/ja/cases/workflows/diagnose-before-fixing/) を助けます。

## チャットスラッシュコマンドとの違い

| | `codex` ターミナル | セッション内 `/` |
|---|---|---|
| 文書 | 本ページ + 製品ハンドブック | [slash-commands](/ja/guide/reference/slash-commands/) |
| 向く用途 | スクリプト、CI | 対話探索 |

## トラブルシュート

| 現象 | 行き先 |
|---|---|
| コマンドが見つからない | [CLI インストール](/ja/guide/getting-started/install-cli/) |
| 設定が効かない | [CLI 設定](/ja/guide/cli/configuration/) |
| CI で承認が止まる | prompt 絞り込み + 読み取り専用サンドボックス |

[CLI トラブルシュート](/ja/guide/cli/troubleshooting/)
