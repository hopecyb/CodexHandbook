---
title: "Context Engineering（コンテキスト工学）"
date: 2025-09-29
year: 2025
summary: "Prompt Engineering が「どう頼むか」に注目するなら、Context Engineering は「モデルに何を見せるか」を設計する。履歴、検索知識、ツール出力を体系的に整理し、モデルが正しい情報で推論できるようにする。"
phase: emerging
trend: rising
signal: well-calibrated
tags: [context-engineering, agent, memory, context-window, llmops]
authored_by: ai-assisted
locale: ja
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: 5fc2d08
---

# Context Engineering（コンテキスト工学）

- 重要な日付:
  - Application-engineering inflection: 2025-09-01
- 公式リファレンス:
  - https://platform.openai.com/docs/guides/conversation-state
  - https://platform.openai.com/docs/guides/retrieval
- 注記: この項目は、コンテキスト設計が Prompt Engineering とは別の中核能力として認識され始めた段階を記録する。

## それは何か

Context Engineering は、モデルへ渡す会話履歴、システム指示、検索結果、ファイル、ツール出力、メモリを選び、圧縮し、順序づけ、更新する設計である。

## AI アプリケーション工学をどこからどこへ進めたか

AI アプリケーションは「主にプロンプト文面を調整する」段階から、「タスク実行環境としてのコンテキスト全体を設計する」段階へ進んだ。

## 現在の段階

現時点では、この項目を `emerging` と見なしている。

新興だが急速に重要になっている。RAG、Agent メモリ、長文処理、マルチターン作業では、モデル能力よりコンテキスト品質が結果を左右する場面が多い。

## 置き換える可能性があるもの

長い履歴や文書をそのまま詰め込む雑なやり方を置き換える。情報の選別、圧縮、配置が明示的な設計対象になる。

## それを置き換える可能性があるもの

自動コンテキスト管理、長期記憶システム、状態付き Agent ランタイムに吸収される可能性がある。ただし「何を見せるか」を決める思想は残る。
