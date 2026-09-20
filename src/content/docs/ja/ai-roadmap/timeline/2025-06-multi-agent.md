---
title: Multi-agent（複数エージェントの協働）
description: 複数の Agent が独立した検索、分析、レビューを担当し、合意した引き継ぎ形式で結果をまとめられる。一方、調整や重複作業、共有状態には追加のコストがかかる。
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 以下の一次資料に記載された出来事やプロジェクトの説明を確認済み。学習上の提案は筆者の判断であり、資料の確認を製品の実地検証とは扱っていない。
  evidence:
  - label: 複数 Agent による調査システムのエンジニアリング記事
    href: https://www.anthropic.com/engineering/multi-agent-research-system
locale: ja
source_locale: zh-CN
source_revision: f24f2f5
translation_status: draft
translated_at: '2026-09-20'
---

## 確認できる出来事と範囲

**日付：2025-06-13 · 種別：エンジニアリング記事。** Anthropic は複数 Agent による調査システムの開発経験を公開した。この日付が示すのは記事の公開であり、業界全体がこの日に主流化の段階へ入ったことではない。

出典：[複数 Agent による調査システムのエンジニアリング記事](https://www.anthropic.com/engineering/multi-agent-research-system)。確認日：2026-09-18。資料の公開日と本ページの確認日は意味が異なる。

## どの問題に取り組むか

複数の Agent が独立した検索、分析、レビューを担当し、合意した引き継ぎ形式で結果をまとめられる。一方、調整や重複作業、共有状態には追加のコストがかかる。

## 学習上の提案と適用範囲

以下は本サイトの教育上の判断であり、業界での普及率や効果を測定したものではない。

独立して実行できる部分課題がある場合に限って並列化を検討する。依存関係が強い、同じファイルを編集する、個別に成果を検証できないといった課題では、まず一つの Agent を使う。ベンダーが自社の評価で示した利益を、本サイトの演習の成功率としてそのまま扱うことはできない。

## 実践演習

[複数 Agent の調整フロー](/ja/cases/coordinate-multiple-agents/)：まず役割ごとの入力、出力、依存関係を明記したタスク分割表を作り、その後で並列化する価値があるか判断する。これは手順の例であり、本サイトが効果を測定した複数 Agent 実験ではない。

[ロードマップと日付の扱いに戻る](/ja/ai-roadmap/)。
