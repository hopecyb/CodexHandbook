---
title: PR をレビューする
description: マージ前に Codex で構造化された diff レビューを行う。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

# PR をレビューする

## メタ情報

| 項目 | 内容 |
|---|---|
| 対象読者 | 開発者 / チーム |
| クライアント | CLI / IDE / Cloud |
| 所要時間の目安 | 20–40 分 |

## 1. 目標と背景

**目標：** マージ前にスコープの拡大、セキュリティリスク、テストの欠落を発見する。

**成功基準：** レビュー出力が具体的なファイル/行に遡れ、P0 は対処済みまたはマージをブロックしていること。

## 2. 推奨プロンプト

```text
現在のブランチと main の diff を比較してください（まだコードを変更しないでください）：
1. issue の範囲を超えていないか
2. 明らかなセキュリティリスク（秘密鍵、インジェクション、権限）があるか
3. テストやドキュメントが不足していないか
チェックリストを出力し、P0/P1 を付け、ファイルパスを添付してください。
```

## 3. チームへの蓄積

- [`$pr-review`](/skills/examples/review-skill/) Skill を使用する
- CI 統合は [コードレビュー自動化](/guide/developer-platform/ci-cd/code-review-automation/) を参照

## 4. 関連

- [レビューテンプレート](/prompts/templates/review/)
- [マージ前レビュー](/cases/workflows/review-before-merge/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の現在の Codex use cases には「Review GitHub pull requests」が含まれており、人間のレビュー前に回帰と潜在的な問題を捕捉することを強調しています。本ページの例は diff の構造化レビューと P0/P1 およびファイルパスの出力のみを要求し、特定の UI や固定コマンドに依存しません。
