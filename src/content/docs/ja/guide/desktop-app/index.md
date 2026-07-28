---
title: デスクトップ App
description: デスクトップ App のインストール、インターフェース、日常ワークフロー。
sidebar:
  order: 10
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

デスクトップ App は初心者向けのデフォルト入口です。プロジェクト、タスク、差分、承認を視覚的に扱えます。

コマンドラインや IDE 拡張に慣れていない人にとっても、比較的取り組みやすい入口です。

単なる「チャット」ではなく、プロジェクト、変更、承認、検証を同じ見える画面にまとめています。

## 本章の内容

- デスクトップ App で優先して覚えるべき操作
- 初心者が先に使う機能と、後から学べばよい機能
- 変更、承認、トラブルシューティング時にどこを見るか

## まずこの 3 つを押さえる

一度にすべての機能を覚える必要はありません。  
まず次の 3 種類のコア操作を押さえましょう。

1. タスクを入力する場所
2. 変更を確認する場所
3. 操作を承認または拒否する場所

この 3 ステップが通れば、基本的なタスクの一連の流れは完了できます。

## よくある誤解

### 1. デスクトップ App は CLI の GUI ラッパーにすぎない？

協業プロセスの重要な段階を、次のように見える形で並べてくれます。

- 現在のタスク
- 計画とツール呼び出し
- ファイルの変更
- 承認操作
- 結果のレビュー

### 2. すべてのボタンを理解してから始めないといけない？

最初は次の 3 つが分かれば十分です。

- タスクを入力する場所
- diff を見る場所
- 承認／拒否する場所

### 3. デスクトップ App は初心者向けだから、本番作業には向かない？

可視化されたレビューとプロセスの透明性を重視するなら、多くの本番作業もデスクトップ App でこなせます。

## 学習の順序

デスクトップ App を初めて使うときは、次の順序がおすすめです。

1. インストールしてインターフェースに慣れる
2. 正しいプロジェクトを選ぶ
3. 小さなタスクを始める
4. 変更内容を確認する
5. 承認と拒否の方法を覚える
6. 最後に並列 Agent、worktree、Cloud タスクなどの応用機能を学ぶ

いきなりすべての機能を調べるより、こちらの方が楽なことが多いです。

## 本章

- [インストールとインターフェース](/guide/desktop-app/installation-and-interface/)
- [プロジェクトとタスク](/guide/desktop-app/projects-and-tasks/)
- [並列 Agent](/guide/desktop-app/parallel-agents/)
- [worktree](/guide/desktop-app/worktrees/)
- [差分、コメント、レビュー](/guide/desktop-app/diffs-comments-and-review/)
- [統合ターミナル](/guide/desktop-app/integrated-terminal/)
- [ローカルと Cloud タスク](/guide/desktop-app/local-and-cloud-tasks/)
- [通知](/guide/desktop-app/notifications/)
- [設定](/guide/desktop-app/settings/)
- [トラブルシューティング](/guide/desktop-app/troubleshooting/)

入門はこちら：[デスクトップ App のインストール](/guide/getting-started/install-desktop-app/)

デスクトップ App は Codex との基本的な協業を先に通すのに向いており、その後にコマンドラインやより高度なワークフローを補えます。

---

**状態：** verified  
**対象製品：** App  
**検証根拠：** OpenAI Help Center の現行版《Moving to the new ChatGPT desktop app》と《ChatGPT Work and Codex》はいずれも、デスクトップアプリに Chat/Work と Codex が同梱され、Codex は独立したビューを維持していると明記している。本ページはデスクトップ App 章のナビゲーションに徹し、「タスク入力」「変更確認」「承認」の 3 つの基本操作に焦点を当てる。  
**最終検証：** 2026-07-26
