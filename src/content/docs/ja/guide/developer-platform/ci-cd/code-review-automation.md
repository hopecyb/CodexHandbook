---
title: コードレビュー自動化
description: CI または PR フローに Codex レビューを接続——prompt、権限、人工ゲート。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

**Pull Request パイプライン**に Codex を入れると、人間レビュー前に明らかな問題を拾えますが、**責任あるレビューとテストの代替にはなりません**。本ページは実装可能な自動化パターンを説明します。

## このページで扱うこと

- CI で Codex を安全に呼ぶ方法
- レビュー prompt に含めるべきこと
- 結果を PR に貼り、自動マージしない方法

## 位置づけ

「コードレビュー自動化」は：Codex がチームの第一ラウンドスクリーニングを手伝い、最終判断は人がする、と理解してください。

向くこと：

- 明らかなリスクの事前指摘
- diff の要点整理
- 反復チェックの先行

「この PR は必ずマージできる」と決める用途には向きません。

関連：[非対話モード](/guide/cli/non-interactive-mode/) · [SDK 概要](/guide/developer-platform/sdk-overview/)

## 推奨アーキテクチャ

```text
PR opened / updated
    → CI job（読み取り専用 token）
    → codex exec または API で diff レビュー
    → レポートアップロード / PR コメント
    → 人がマージを判断
```

## よくある誤解

### 自動レビューと自動承認は別物

初回接続で過大評価しがち：自動で見られるなら自動で決められる、という誤解。

より現実的には「提案層」「予備スクリーニング層」向きで、「最終責任層」には向きません。

### すべての PR に最初から重いレビューを走らせる必要はない

小さく価値が低い PR、ルール未確定の段階で重い自動レビューはノイズを増やすだけです。軽量 diff レビューから始め、時間短縮に効くかを見るのが一般的です。

## Prompt テンプレ要点

```text
あなたはコードレビューアシスタント。base ブランチとの diff だけをレビュー。
出力：重大問題 / 提案 / nit。各項目にファイルと行番号。
リポジトリは変更しない。ネットワークリクエストは実行しない。
diff が大きい場合は <パス一覧> だけレビュー。
```

`prompts/ci-review.md` にバージョン管理。

## 権限とセキュリティ

| 原則 | やり方 |
|---|---|
| 読み取り専用 | CI token は push 不可（または bot コメントのみ） |
| モデル固定 | 過去レビュー品質の比較のため |
| 注入防止 | 未消毒 PR 説明を system prompt にそのまま結合しない |
| 秘密 | GitHub Secrets に token |

[人工承認パターン](/cases/workflows/human-approval-patterns/) · [環境変数](/guide/reference/environment-variables/)

## 品質ゲート

- レビュー job 失敗 ≠ 必ずマージブロック（最初は advisory 可）
- 必須 status check と区別：テスト赤は必ず止める。AI nit は警告可
- 定期的に人が AI レビューの見逃し／誤報をサンプリング比較

## Cloud との関係

複雑リポジトリは [Cloud](/guide/web-and-cloud/) で完全テスト後にレビュー。CI 内 exec は **軽量 diff レビュー**向き。

## よくあるミス

- CI に書き込み権限 + 注入された「fix を push して」prompt
- レビュー結果が長すぎて真人レビューを埋没
- diff サイズ未制限でタイムアウトとクォータ消費

コードレビュー自動化の価値は、真人 review の前に明らかな問題を拾うこと。真人のマージ責任の代替ではありません。

## 受け入れチェックリスト

- [ ] fork PR で CI 挙動が安全（secrets 漏洩なし）
- [ ] レビュー出力が構造化され機械解析可能（任意）
- [ ] チーム文書で AI レビューの位置づけを説明

## 参考
- OpenAI Codex CI 例
---

**状態：** verified  
**対象製品：** CLI / API / Cloud  
**検証根拠：** OpenAI Developers ホームは依然 Codex をテスト、レビュー、変更のデリバリー準備に使えると記述。公式 Codex ユースケースに「Review GitHub pull requests」が含まれる。本ページは CI 安全接続原則とゲートパターンのまとめのみ。固定コマンドや唯一実装を宣言しない。  
**最終検証：** 2026-07-26
