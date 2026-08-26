---
title: ローカルと Cloud タスク
description: App でローカル実行と Cloud 実行を切り替える。
locale: ja
source_locale: zh-CN
source_revision: 95e2382
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

ここで扱うのは、デスクトップ App でタスクがローカルマシンで動くのか、リモート環境で動くのかという点です。

App でタスクの実行場所を選択します。

- **ローカル**：ローカルのファイルと環境。反復が速い
- **Cloud**：クラウド環境。リモートリポジトリや長時間タスクに向く

概念：[ローカルと Cloud](/ja/guide/foundations/local-vs-cloud/) · 概要：[Web と Cloud](/ja/guide/web-and-cloud/)

切り替える前に確認：秘密情報をその環境に置くべきか、ネットワークポリシーが許可するか。

## よくある誤解

### 1. デスクトップ App を使っているのに、なぜローカルと Cloud を区別するの？

App は入口にすぎず、タスクが必ずローカルで実行されるわけではないからです。

### 2. デフォルトはどちらを選ぶべき？

多くの場合、まずローカルを選びます。主な理由は次のとおりです。

- ファイルが自分の PC 上にある
- 結果を確認しやすい
- 失敗時に巻き戻しやすい

### 3. いつ Cloud を検討する？

よくある状況は次のとおりです。

- タスクが長い
- リモートリポジトリ環境への接続が必要
- 環境を統一したい
- ローカルマシンのリソースを使いたくない

デスクトップ App でローカルで完結できるなら、通常はローカルを使います。タスクが長く、リモート寄り、または環境統一が必要なときに Cloud を検討しましょう。

---

**状態：** verified  
**対象製品：** App  
**検証根拠：** OpenAI Help Center の現行版《ChatGPT Work and Codex》と《Using Codex with your ChatGPT plan》はいずれも local workflows と cloud tasks を明確に区別している。本ページはデスクトップ App の文脈で「ローカルは高速な反復に、Cloud はリモートリポジトリと長時間タスクに向く」という選定原則を要約するのみ。  
**最終検証：** 2026-07-26
