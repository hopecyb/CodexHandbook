---
title: IDE 統合をインストールする
description: VS Code 互換エディタ、Xcode、JetBrains IDE で Codex を有効にします。
locale: ja
source_locale: zh-CN
source_revision: 1196b38
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-08-26
---

現在サポートされる IDE には、複数のインストール方法があります。

| IDE | インストールまたは有効化の方法 |
|---|---|
| Visual Studio Code、Cursor、Windsurf、VS Code Insiders | Codex 拡張をインストールまたは有効化する |
| Xcode | Xcode の coding assistant で Codex Agent を選択する |
| JetBrains IDEs | AI Chat で Codex を選択する |

[Codex IDE の公式ページ](https://learn.chatgpt.com/docs/codex/ide)から、利用する IDE に対応する公式の入口へ進んでください。別の IDE のスクリーンショットを見て、ボタンの位置を推測しないでください。

## VS Code 互換エディタ

1. 公式 Marketplace の入口から Codex 拡張をインストールする。
2. 実際のプロジェクトのワークスペースルートを開く。
3. Codex アイコンを選択する。表示されない場合は Command Palette を開き、`Codex: Open Codex Sidebar` を実行する。
4. ChatGPT または API key でログインする。

## Xcode と JetBrains

- Xcode：coding assistant を開き、新しいチャットを作成して Agent として Codex を選択する。
- JetBrains：AI Chat を開き、Codex を選択する。

これらの入口は各 IDE が提供するため、画面は VS Code 拡張と完全には一致しません。

## インストール後にコンテキストを確認する

ソースファイルを一つ開き、短いコード範囲を選択してから、次のように質問します。

```text
現在の選択範囲の入力、出力、失敗経路だけを説明してください。ファイルは変更せず、関連する関数名を引用してください。
```

回答が選択範囲と明らかに関係ない場合は、まず次を確認してください。

- 正しいプロジェクトルートを開いているか
- ファイルまたは選択範囲が composer に添付されているか
- 現在のログイン ID とワークスペースが正しいか
- 競合する AI 拡張またはショートカットが同時に有効になっていないか

次に [IDE のローカルタスクワークフロー](/ja/guide/ide/local-task-workflow/) を学んでください。完全なサポート範囲は[対応エディタ](/ja/guide/ide/supported-editors/)を参照してください。

---

**状態：** verified

**対象製品：** IDE

**検証根拠：** 現在の公式 IDE クイックスタートには、VS Code、Cursor、Windsurf、VS Code Insiders と、Xcode、JetBrains の個別の統合方法が明記されています。このページでは、その二種類の経路に分けてインストール方法を説明します。

**最終検証：** 2026-08-26
