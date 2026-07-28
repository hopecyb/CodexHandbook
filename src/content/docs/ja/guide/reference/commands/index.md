---
title: CLI コマンドリファレンス
description: Codex CLI 常用サブコマンドとパラメータ早見——学習向け索引。公式手册の代替ではない。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

コマンドリファレンスは入口判断用。パラメータ暗記より先に：

> **今は対話入口か、単発コマンド入口か？**

本ページは **Codex CLI** 常用入口をまとめ、検索と対照を助けます。**コマンド名、パラメータ、デフォルト値はバージョンで変わります**。実行前に必ず `codex --help` とサブコマンド `--help` を実行し、[OpenAI Codex ドキュメント](https://developers.openai.com/codex) を基準にしてください。

## いつ使うか

- 対話に入るか、一回限りコマンドか
- チャット式かスクリプト式か
- CLI を使うが、どの入口を見るべきか分からない

## 入口選択

- 見ながら話しながら修正：`codex`
- タスクを一度渡して終了時に結果：`codex exec`

CLI 初心者なら、この一步で多くの入口選択問題は解けます。

## コマンド概要（示意）

| 入口 | 用途 | 詳説 |
|---|---|---|
| `codex` | 対話型 TUI セッション | [対話モード](/guide/cli/interactive-mode/) |
| `codex exec`（または同等） | 非対話単発/パイプラインタスク | [非対話モード](/guide/cli/non-interactive-mode/) |
| 設定関連 | ユーザー/プロジェクト設定の読み書き | [CLI 設定](/guide/cli/configuration/) |

:::caution[バージョン敏感]
下表パラメータ名はコミュニティ文書の常见表記。**インストールした CLI と一致しない可能性があります**。更新後 `--help` を再確認。
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
# リポジトリルートで対話セッション起動（示意）
codex

# セッション内の常见操作（TUI を基準に）
# - タスク説明を入力
# - / スラッシュコマンド → slash-commands ページ
# - shell / ファイル書き込み要求の承認
```

スラッシュコマンド：[スラッシュコマンド早見](/guide/reference/slash-commands/)

## 入口判断

CLI 初心者は：

1. 先に `codex --help`
2. 対話か `exec` か決める
3. サブコマンドを使うときだけその `--help`

最初からパラメータ表に沈まない。

## 今すぐ始めるなら

1. `codex --help` を実行
2. 話しながらやるなら `codex` へ
3. CI やスクリプトなら `codex exec` を調べる

パラメータ細部より楽に始められます。

## 非対話 exec（概念）

```bash
# 作業ディレクトリと単発 prompt 指定（示意）
codex exec --cwd /path/to/repo "完全なタスク説明"

# 常见意図（パラメータ名は公式を基準に）
# --cwd          作業ディレクトリ
# --model        モデル固定
# --sandbox      サンドボックス方針
# --approval     承認方針（無人運用で特に重要）
# stdin パイプ   ファイルまたは上流コマンドから prompt 読み取り
```

セキュリティ：[人工承認パターン](/cases/workflows/human-approval-patterns/)

## 設定と認証（概念）

| 操作 | 説明 |
|---|---|
| ログイン | [ログインと認証](/guide/getting-started/sign-in-and-authentication/) と一致 |
| 設定ファイル | ユーザー級 / プロジェクト級。[設定リファレンス](/guide/reference/configuration-reference/) |
| MCP | [MCP 接続](/skills/mcp/connect-an-mcp-server/) |

## 終了コードと自動化

非対話モードは一般に**終了コード**で成功/失敗を表し、CI が利用します。

- `0`：約束どおり完了
- 非 `0`：失敗または人工介入必要——ログ artifact を確認

CLI コマンドページは入口判断と意図検索用。パラメータ暗記で入門しない。

CI で stderr を無視しない。ログ保持は [診断優先](/cases/workflows/diagnose-before-fixing/) を助けます。

## チャットスラッシュコマンドとの違い

| | `codex` ターミナル | セッション内 `/` |
|---|---|---|
| 文書 | 本ページ + 製品ハンドブック | [slash-commands](/guide/reference/slash-commands/) |
| 向く用途 | スクリプト、CI | 対話探索 |

## トラブルシュート

| 現象 | 行き先 |
|---|---|
| コマンド不存在 | [CLI インストール](/guide/getting-started/install-cli/) |
| 設定が効かない | [CLI 設定](/guide/cli/configuration/) |
| CI で承認が止まる | prompt 絞り込み + 読み取り専用サンドボックス |

[CLI トラブルシュート](/guide/cli/troubleshooting/)

---

**状態：** outdated  
**対象製品：** CLI  
**検証根拠：** 入口地図として書いているが、核心は `codex`、`codex exec`、セッション内 `/` コマンドと関連パラメータ意図。これらは現行 CLI の高変動製品細部。最新公式コマンド文書補足後に `verified` へ戻す。  
**最終検証：** 2026-07-26
