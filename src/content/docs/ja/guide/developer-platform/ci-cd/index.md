---
title: CI/CD
description: 継続統合とリリースフローに Codex を接続——まず低リスク自動化から。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

Codex を CI/CD に接続するとき、よくある問題は：

最初から自動変更、自動 push、自動マージを狙うこと。

より一般的なやり方は、先に読み取り専用、提案のみ、レポート出力です。

## 本グループの入口

- [コードレビュー自動化](/guide/developer-platform/ci-cd/code-review-automation/)

## 本グループの内容

- PR 段階での構造化レビュー
- 自動化は先に「問題発見」と「提案」
- 高リスク動作は引き続き人工承認

CI/CD で Codex を接続するなら、通常は低リスク補助から始め、どの動作に権限を渡すかは後で決めます。

---

**状態：** verified  
**対象製品：** CLI / API / Cloud  
**検証根拠：** 本リポジトリ現行 CI/CD サブ章構造とコードレビュー自動化入口を相互確認。「CI/CD では先に低リスク補助、後に権限委譲を判断」安定接続原則に限定。  
**最終検証：** 2026-07-26
