---
title: CLI
description: コマンドライン入口の最小限の説明。
sidebar:
  order: 11
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

CLI はターミナルユーザーと、スクリプト・CI 連携に向いています。

初めて「CLI」と聞いたら、GUI を使わずターミナルで Codex と協業する入口だと考えてください。

向いているのは次のような場面です。

- コマンドラインに慣れている人
- スクリプトと組み合わせたい人
- CI / 自動化につなげたい人

ターミナルに不慣れな初心者にとって、CLI は最初に必ず学ぶ必要はありません。ただし `cd`、`ls`、プロジェクトディレクトリでのコマンド実行ができていれば、かなり効率的です。

- [インストールと更新](/guide/cli/installation-and-updates/)
- [対話モード](/guide/cli/interactive-mode/)
- [非対話モード](/guide/cli/non-interactive-mode/)
- [CLI 設定](/guide/cli/configuration/)
- [コマンドとショートカット](/guide/cli/commands-and-shortcuts/)
- [承認とサンドボックス](/guide/cli/approvals-and-sandbox/)
- [トラブルシューティング](/guide/cli/troubleshooting/)

完全なコマンドリファレンスは [CLI コマンドリファレンス](/guide/reference/commands/)。

## 最初に区別すること

第一段階では次の 2 モードを分けてください。

1. **対話モード**：ターミナルで Codex と直接会話する
2. **非対話モード**：Codex をコマンドとしてスクリプトや CI に接続する

初回試用なら、通常は対話モードの方が扱いやすいです。自動化が必要になったら非対話モードを見てください。

---

**状態：** verified  
**対象製品：** CLI  
**検証根拠：** OpenAI Help Center の現行 CLI 入門資料は、Codex CLI をターミナル入口として説明し、対話利用とより自動化されたコマンドラインワークフローを区別している。本ページは CLI 章のナビゲーションにとどまり、対話と非対話の 2 類型を概説するだけで、具体的なパラメータやインストールコマンドには依存しない。  
**最終検証：** 2026-07-26
