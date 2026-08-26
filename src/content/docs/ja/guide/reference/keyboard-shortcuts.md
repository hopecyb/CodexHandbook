---
title: キーボードショートカット
description: 現在の公式文書で確認できる App と IDE のショートカット操作だけを掲載します。
locale: ja
source_locale: zh-CN
source_revision: 0edf4f3
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 90
reviewed_at: 2026-08-26
---

ショートカットはプラットフォーム、クライアント、カスタム設定によって変わります。このページには、現在の公式文書で明示されている組み合わせだけを掲載します。完全な一覧は App 内の **Keyboard Shortcuts** を基準にしてください。

## デスクトップ App

| 操作 | macOS | Windows |
|---|---|---|
| Settings を開く | `Cmd + ,` | `Ctrl + ,` |
| Activity を開く / 閉じる | `Cmd + Option + U` | `Ctrl + Alt + U` |
| 統合ターミナルを開く | `Ctrl` + バッククォートキー | `Ctrl` + バッククォートキー |
| App の Command Palette を開く | `Cmd + K` | Keyboard Shortcuts を基準にする |
| ターミナル表示を消去する | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` は App の Command Palette を開くもので、ターミナルを消去する操作ではありません。

Settings の Keyboard Shortcuts では、コマンド名による検索、キー入力からの逆引き、割り当ての変更、デフォルトへの復元ができます。カスタマイズした後は、オンラインの早見表よりローカル設定を優先してください。

## IDE

VS Code 系エディタの `chatgpt.composerEnterBehavior` 設定は、Enter と `Cmd/Ctrl + Enter` で複数行プロンプトを送信する方法を決めます。すべての PC で同じ送信キーを使うとは仮定しないでください。

Codex の実行中は、`chatgpt.followUpQueueMode` により、新しいメッセージをキューへ入れるか、すぐに steer するかが決まります。単発の送信では `Cmd/Ctrl + Shift + Enter` を押すと現在のデフォルト動作を反転できます。

Codex サイドバーが見つからない場合は、エディタの Command Palette から次を実行します。

```text
Codex: Open Codex Sidebar
```

## CLI

CLI TUI の操作は、現在のバージョンの `/help` と画面上の案内で確認してください。このページでは `y`、`n` などの承認キーを推測して掲載しません。ターミナル、モード、バージョンによって操作が変わるためです。

一般的なターミナル信号である `Ctrl + C` は、実行中のコマンドまたはセッションを中断する場合があります。現在の状態を先に確認し、副作用のない「戻る」キーとして扱わないでください。

## 学習する順序

まず Settings を開く、Activity を確認する、ターミナルを開く、複数行プロンプトを送信する操作を覚えてください。そのほかは、実際によく使う操作を App 内で検索します。チーム文書では操作名を記載し、全員に同じカスタムキーを強制しないでください。

## 公式情報

- [デスクトップ App の設定](https://learn.chatgpt.com/docs/app/settings)
- [通知と Activity](https://learn.chatgpt.com/docs/notifications)
- [統合ターミナル](https://learn.chatgpt.com/docs/integrated-terminal)
- [IDE の設定](https://learn.chatgpt.com/docs/ide/settings)

---

**状態：** verified

**対象製品：** App、CLI、IDE

**最終検証：** 2026-08-26
