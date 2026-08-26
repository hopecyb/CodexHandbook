---
title: 基礎概念
description: モデル、Agent、ツール、権限、検証の共通言語を身につける。
locale: ja
source_locale: zh-CN
source_revision: cf898a2
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 3
---

このセクションでは、ハンドブック全体で繰り返し登場する基礎概念をまとめています。製品ごとの画面の違いは [製品ガイド](/ja/guide/) に、プロンプトの技法は [コア能力](/ja/guide/) に書いてあります。

ここでは主に、Codex がどう動くか、そしてどう協業するかを説明します。

## 本章の地図

1. [AI と言語モデル](/ja/guide/foundations/ai-and-language-models/)
2. [Agent の基礎](/ja/guide/foundations/agent-basics/)
3. [目標、コンテキストとアクション](/ja/guide/foundations/goals-context-and-actions/)
4. [ファイル、ツールとコマンド](/ja/guide/foundations/files-tools-and-commands/)
5. [ローカルとクラウド](/ja/guide/foundations/local-vs-cloud/)
6. [スレッド、タスクとプロジェクト](/ja/guide/foundations/threads-tasks-and-projects/)
7. [権限と承認](/ja/guide/foundations/permissions-and-approvals/)
8. [サンドボックスとネットワーク](/ja/guide/foundations/sandbox-and-network/)
9. [モデルと推論](/ja/guide/foundations/models-and-reasoning/)
10. [Token、コンテキストと圧縮](/ja/guide/foundations/tokens-context-and-compaction/)
11. [検証と人的レビュー](/ja/guide/foundations/verification-and-human-review/)
12. [よくある誤解](/ja/guide/foundations/common-misconceptions/)

読み終えたら [クイックスタート](/ja/guide/getting-started/) へ進んでください。

## よくある誤解

### 1. 基礎概念は理論だけなので飛ばしても大丈夫

短期的には飛ばせそうに見えますが、後の多くの誤解はここが曖昧なまま残っていることが原因です。

たとえば：

- なぜ承認を求めるのか
- なぜコンテキストの影響を受けるのか
- なぜ想定外の場所を変更してしまうのか
- なぜ「完了した」と言っても本当に完了とは限らないのか

### 2. 質問の仕方さえわかれば、概念は深く知らなくていい

質問の仕方は大切ですが、コンテキストの読み取り方、ツールの呼び出し方、権限の制約を知らないと、結果がずれる理由を判断しにくくなります。

### 3. この章は定義を暗記するために読むべき

もっと実用的な読み方は次のとおりです。

- まず各概念が何の問題を解くのかを把握する
- 実際の利用シーンを持ちながら理解する

## 一度に全部読みたくない場合

一章まとめて読むのが負担なら、まず次のページから始めてください。

1. [Agent の基礎](/ja/guide/foundations/agent-basics/)
2. [目標、コンテキストとアクション](/ja/guide/foundations/goals-context-and-actions/)
3. [ファイル、ツールとコマンド](/ja/guide/foundations/files-tools-and-commands/)
4. [権限と承認](/ja/guide/foundations/permissions-and-approvals/)
5. [検証と人的レビュー](/ja/guide/foundations/verification-and-human-review/)

これらを理解できれば、日常利用には十分です。

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** 本ページは基礎概念章の構成と読み順のみを説明。サイト内リンクと概念表現を再確認済み。本文に製品バージョン、価格、画面など変わりやすい事実への依存はない。  
**最終検証：** 2026-07-26
