---
title: IDE 統合をインストールして有効にする
description: VS Code 系エディタ、Xcode、JetBrains IDE で Codex を正しく開きます。
locale: ja
source_locale: zh-CN
source_revision: fb7ff84
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

IDE の入口は二種類に分かれ、インストール方法を混同することはできません。

| エディタ | 現在の入口 | 開き方 |
|---|---|---|
| Visual Studio Code、Cursor、Windsurf、VS Code Insiders | Codex 拡張 | Codex アイコンを選ぶか、`Codex: Open Codex Sidebar` を実行する |
| Xcode | Xcode 組み込みの coding assistant 統合 | 新しいチャットを作成して Codex agent を選択する |
| JetBrains IDEs | JetBrains AI Chat 統合 | AI Chat を開いて Codex を選択する |

完全なサポート範囲と公式の入口は[対応エディタ](/ja/guide/ide/supported-editors/)を参照してください。

## VS Code 系でのインストールと検収

1. 公式 Marketplace リンクから Codex 拡張をインストールする。
2. 空のウィンドウではなく、練習用プロジェクトを開く。
3. Codex アイコンを選択する。表示されない場合は Command Palette から `Codex: Open Codex Sidebar` を実行する。
4. ChatGPT アカウントまたは API key で認証する。
5. 新しいチャットを作成し、現在開いているファイルを参照して、読み取り専用の質問をする。

最小の検収プロンプト：

```text
現在開いているファイルだけを読み、コードは変更しないでください。
その責務、入力、出力を三点で説明し、それぞれで具体的なシンボル名を引用してください。
```

回答が現在のファイルとシンボルに対応していれば、エディタのコンテキストが正しく渡されています。書き込みタスクへ進む前に、Git のチェックポイントを作成してください。

## よくある問題

- **サイドバーが見つからない**：Command Palette から `Codex: Open Codex Sidebar` を実行する。
- **コンテキストが違う**：プロジェクトウィンドウ、現在のファイル、選択範囲が想定したリポジトリに属しているか確認する。
- **ログインが繰り返し表示される**：CLI と IDE はキャッシュされた認証を共有する。現在のアカウントを確認してログインし直す。
- **Windows のツールチェーンが WSL にある**：必要に応じて `chatgpt.runCodexInWindowsSubsystemForLinux` を有効にする。この設定を変更すると VS Code が再読み込みされる。
- **サードパーティ製エディタの動作が違う**：そのバージョンが VS Code 拡張と互換かを先に確認し、Xcode / JetBrains の入口をそのまま当てはめない。

より詳しい初心者向け手順は [IDE 統合をインストールする](/ja/guide/getting-started/install-ide-extension/) を参照してください。

## 公式情報

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [IDE の設定](https://learn.chatgpt.com/docs/ide/settings)

---

**状態：** verified

**対象製品：** IDE

**最終検証：** 2026-08-26
