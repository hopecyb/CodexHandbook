---
title: IDE 拡張
description: エディター内で Codex を使う——インストール、コンテキスト、ローカルと Cloud タスク、レビュー、設定。
sidebar:
  order: 12
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

IDE 拡張は**書きながら diff を見る**作業に向いています。ファイルを開き、コードを選択し、サイドバーでタスクを説明します。本章では、選定からレビューまでの一連の流れを扱います。

普段からエディターでコードやドキュメントを書いているなら、IDE が最も自然な入口になることが多いです。

現在開いているファイルと選択範囲をそのまま引き継げるため、「小さな範囲の修正」タスクでスコープを絞りやすくなります。

## 章のナビゲーション

| テーマ | ページ |
|---|---|
| 選定 | [対応エディター](/guide/ide/supported-editors/) |
| インストール | [インストール](/guide/ide/installation/) |
| コンテキスト | [エディターコンテキスト](/guide/ide/editor-context/) · [選択範囲と開いているファイル](/guide/ide/selected-code-and-open-files/) |
| ワークフロー | [ローカルタスク](/guide/ide/local-task-workflow/) · [Cloud タスク](/guide/ide/cloud-task-workflow/) |
| 品質 | [変更のレビュー](/guide/ide/reviewing-changes/) |
| 設定 | [設定](/guide/ide/settings/) |
| トラブルシューティング | [トラブルシューティング](/guide/ide/troubleshooting/) |

入門ショートカット：[IDE 拡張のインストール](/guide/getting-started/install-ide-extension/) · [クライアントの選択](/guide/getting-started/choose-your-codex-client/)

## 最初に押さえておくこと

初めて使うときは、次の 3 点に注目してください。

1. 現在開いているファイルを参照する
2. 選択範囲でスコープをより正確に絞れる
3. 変更後も diff は自分でレビューする

IDE 拡張は「小さな範囲で、見ながら直す」タスクに向いていますが、スコープ管理とレビューは欠かせません。

---

**状態：** verified  
**対象製品：** IDE  
**検証根拠：** OpenAI Help Center の現行版《Using Codex with your ChatGPT plan》では、Codex IDE extension のサポートが引き続き明記されており、CLI やデスクトップ App と並ぶローカルクライアントであることも説明されている。本ページは IDE 章のナビゲーションに徹し、「現在のファイル、選択範囲、diff レビュー」という安定したワークフローを強調する。  
**最終検証：** 2026-07-26
