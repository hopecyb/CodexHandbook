---
title: 対応エディタ
description: VS Code 互換拡張、Xcode 統合、JetBrains 統合を区別します。
locale: ja
source_locale: zh-CN
source_revision: 1f0b54d
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---

Codex は現在、異なる方法で主要なエディタに統合されます。VS Code 系では Codex 拡張を使い、Xcode と JetBrains IDE ではそれぞれの統合入口を使います。

## 現在のサポート方法

| エディタ | Codex の入口 | 開き方 |
|---|---|---|
| Visual Studio Code | Codex 拡張 | Codex アイコンまたは `Codex: Open Codex Sidebar` |
| Cursor | 互換性のある Codex 拡張 | Codex アイコンまたは Command Palette |
| Windsurf | 互換性のある Codex 拡張 | Codex アイコンまたは Command Palette |
| Visual Studio Code Insiders | Codex 拡張 | 拡張パネルと Codex サイドバー |
| Xcode | Xcode coding assistant 統合 | 新しいチャットを作成して Codex Agent を選択 |
| JetBrains IDEs | JetBrains AI Chat 統合 | AI Chat を開いて Codex を選択 |

インストールの入口と最低バージョンは変わる可能性があります。必ず [Codex IDE の公式ページ](https://learn.chatgpt.com/docs/codex/ide) から移動し、名前の似たサードパーティ拡張を公式サポートだと判断しないでください。

## IDE の入口に最も適した作業

- 現在開いているファイルまたは選択範囲を質問へ直接追加する
- 局所的なコードを説明、変更し、そのままフォローアップする
- ソースコードの横で要約と変更をレビューする
- 小さなタスクはローカルに残し、大きくなったら長いワークフローへ委任する

例：

```text
現在の選択範囲にある再試行ループを確認してください。
最初に終了条件を説明してから、最小限の変更を行ってください。変更は現在のファイルと対応するテストだけに限定します。
完了したら diff とテストコマンドを報告し、依存関係は更新しないでください。
```

## 複数エディタを使うチームで一貫性を保つ

1. ビルド、テスト、フォーマットのコマンドをリポジトリの `AGENTS.md` またはコントリビューション文書に記述する。
2. プロンプトでファイル範囲を制約し、特定 IDE の専用ボタンに依存しない。
3. 最終検収は Git diff と同じテスト群を基準にし、「自分の IDE では動く」を基準にしない。
4. 正確な UI の案内が必要な場合だけ、IDE ごとに説明を分ける。

## 一覧にないエディタ

まず [Codex CLI](/ja/guide/cli/) または[デスクトップ App](/ja/guide/desktop-app/)を使ってください。VS Code の拡張パッケージを互換性のないエディタへ無理にインストールしたり、サードパーティ統合を OpenAI の公式機能だとみなしたりしないでください。

インストール手順は [IDE 統合をインストールする](/ja/guide/getting-started/install-ide-extension/)、コンテキストの使い方は[エディタのコンテキスト](/ja/guide/ide/editor-context/)を参照してください。

---

**状態：** verified

**対象製品：** IDE

**検証根拠：** 現在の公式 IDE ページを照合し、VS Code、Cursor、Windsurf、VS Code Insiders、Xcode、JetBrains IDEs の具体的な入口を確認しました。各統合の機能が完全に同じだとは仮定していません。

**最終検証：** 2026-08-26
