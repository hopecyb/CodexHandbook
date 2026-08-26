---
title: worktree
description: Git worktree で並行チャットを隔離し、安全にローカルワークスペースへ戻します。
locale: ja
source_locale: zh-CN
source_revision: f050c32
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 40
reviewed_at: 2026-08-26
---

worktree を使うと、一つの Git リポジトリに独立した複数の checkout ディレクトリを持たせられます。各ディレクトリは固有のファイルとブランチ状態を持ち、リポジトリの Git メタデータを共有します。複数のコーディングチャットを、互いのファイルを上書きせずに並行して進めるのに適しています。

## 利用条件

- プロジェクトが Git リポジトリ内にある
- タスクの境界を独立して説明、検収できる
- 並行タスクが同じ主要ファイル群を変更しない

Codex を初めて練習するだけなら、まず Local モードでタスクを順番に完了してください。待ち時間やファイル競合が実際に問題になってから worktree を使います。

## App で作成する

1. 新しいチャットの入力欄の下で **Worktree** を選択する。
2. 開始ブランチを選ぶ。main ブランチ、feature ブランチ、unstaged changes を持つ現在のブランチから選択できる。
3. プロンプトを送信すると、App が Git worktree を作成する。
4. 独立したチャットで確認、テスト、レビューする。
5. ローカルの checkout へ戻す準備ができたら **Handoff** を使う。

デフォルトで作成される worktree は detached HEAD 状態です。Codex の作業に支障はありませんが、commit を保存または共有する前に、対象ブランチと統合方法を明確にしてください。

## 二つの並行タスクの例

| チャット | worktree のタスク | ファイルの所有範囲 | 検収 |
|---|---|---|---|
| A | ログインエラーを修正 | `src/auth/**` | 認証テストが通る |
| B | 認証文書を追加 | `docs/auth/**` | リンクチェックが通る |

A と B に共有 lockfile または同じ設定ファイルを同時に変更させないでください。必要な場合は、一つのチャットだけが変更し、もう一つは分析結果だけを提供するよう事前に決めます。

## Handoff 前のチェック

```bash
git status --short
git diff --check
git diff --stat
```

続けて、タスクに対応するテストを実行します。各変更がどのチャットから来たか、対象ブランチは何か、検証が通ったかを明確に把握した後でのみ、Handoff、commit、merge を行ってください。

## 定期タスクおよび Remote との関係

- Git リポジトリ内の定期タスクは専用のバックグラウンド worktree を使用でき、現在の作業との競合を避けられる
- Remote を使うと、モバイル端末から接続先 PC の worktree チャットを操作できる。リポジトリとコマンドは、その PC またはリモート開発環境に残る
- Git ではないプロジェクトに worktree の隔離はなく、定期タスクはプロジェクトディレクトリを直接使用する

## 公式情報

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [長時間タスクと並行チャット](https://learn.chatgpt.com/docs/long-running-work)

---

**状態：** verified

**対象製品：** App

**最終検証：** 2026-08-26
