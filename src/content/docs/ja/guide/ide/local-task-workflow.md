---
title: ローカルタスクのワークフロー
description: IDE で開いているファイルと選択範囲に基づき、ローカル Codex タスクを開始・追跡・完了する。
locale: ja
source_locale: zh-CN
source_revision: f9abb5b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

IDE のローカルタスクは「**開く → 選択 → 説明 → レビュー → テスト**」のループで、頻度の高い小さな修正に向いています。ここでは最も一般的な実践パスを示します。コンテキストの詳細は [選択範囲と開いているファイル](/ja/guide/ide/selected-code-and-open-files/) を参照。

## 推奨フロー

1. **ワークスペースのルートを開く**（単一ファイルではなくリポジトリ全体）
2. 関連ファイルを開く。必要なら [コード断片を選択](/ja/guide/ide/selected-code-and-open-files/)
3. Codex パネルに目標、制約、[完了の定義](/ja/prompts/define-done/) を明確に書く
4. タスクが複雑なら、先に [計画を求める](/ja/prompts/ask-for-a-plan/) してから実行
5. diff / inline ビューで [変更をレビュー](/ja/guide/ide/reviewing-changes/)
6. IDE ターミナルでプロジェクトのテストコマンドを実行
7. 自分で `git commit`（チームが Agent の commit を明示的に許可している場合を除く）

## プロンプト例（示意）

```text
src/auth/login.ts と対応するテストだけを変更。
目標：空メール送信時の 500 を 400 + エラーメッセージに修正。
禁止：package-lock の変更、git push。
完了：npm test -- auth を実行し、変更概要を列挙。
```

## 別の入口に切り替えるタイミング

| 状況 | 推奨 |
|---|---|
| 並列マルチタスク、worktree | [デスクトップ App](/ja/guide/desktop-app/) |
| スクリプト / CI | [CLI 非対話](/ja/guide/cli/non-interactive-mode/) |
| リモートの標準環境、PR 作成 | [IDE の Cloud タスク](/ja/guide/ide/cloud-task-workflow/) |

## よくある間違い

- ワークスペースを開かず `AGENTS.md` を読めない
- inline 提案を一括受け入れ
- テストせずに commit

コンテキスト：[エディターコンテキスト](/ja/guide/ide/editor-context/) · [ファイルとディレクトリのコンテキスト](/ja/guide/context/file-and-folder-context/)

## よくある疑問

### 1. なぜ「ワークスペースのルートを開く」と強調するのか？

IDE 拡張の多くのコンテキストは、単一ファイルではなくプロジェクト全体を開いていることに依存するからです。

### 2. IDE で変更しやすいから、レビューを省略できるか？

いいえ。

便利なほど、無意識に受け入れボタンを押しやすくなるため、チェックの習慣を保つ必要があります。

### 3. 初回に向いているタスクは？

次のようなものが向いています。

- 1〜2 ファイルだけの変更
- 結果が一目で分かる
- 変更後にテストやプレビューがしやすい

IDE のローカルタスクは小さく速く進めるのに向いていますが、「便利」はレビューと検証の省略を意味しません。

---

**状態：** verified  
**対象製品：** IDE  
**検証根拠：** OpenAI の現行ヘルプセンターでは、IDE extension をローカルコードリポジトリと組み合わせるクライアントとして説明している。本ページのワークフローは「ワークスペースを開く、ファイル範囲を限定、タスクを説明、diff をレビュー、テストを実行、手動でコミット」という安定したローカル協業ループに焦点を当て、特定の拡張 UI に依存しない。  
**最終検証：** 2026-07-26
