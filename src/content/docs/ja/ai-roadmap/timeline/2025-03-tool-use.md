---
title: "Tool Use（ツール利用）"
date: 2025-03-11
year: 2025
summary: "Tool Use は完全に新しい概念ではなく、Function Calling をシステムレベルへ広げたものだ。Function Calling が「どう呼ぶか」に答えるなら、Tool Use は「何を呼べるか」を広げる。検索、コード実行、ブラウザ、データベースなどが対象になる。"
phase: emerging
trend: rising
signal: well-calibrated
tags: [tool-use, tools, agent, orchestration, function-calling]
authored_by: ai-assisted
locale: ja
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: 902c66c
---

# Tool Use（ツール利用）

- 重要な日付:
  - Engineering inflection: 2025-03-11 (Responses API and built-in tools)
- 公式リファレンス:
  - https://openai.com/index/new-tools-for-building-agents/
  - https://platform.openai.com/docs/guides/tools
- 注記: この項目は組み込みツールと Agent 構築ツールの公開が、ツール利用を一般的なアプリ設計要素に押し上げた時点を記録する。

## それは何か

Tool Use は、モデルが外部能力を選択し、呼び出し、結果を読み取り、次の行動へ反映する設計パターンである。関数呼び出しより広く、検索、ファイル処理、コード実行、ブラウザ操作、データベース操作などを含む。

## AI アプリケーション工学をどこからどこへ進めたか

AI アプリケーションは「単一関数を構造化して呼ぶ」段階から、「目的に応じて複数ツールを編成して実行する」段階へ進んだ。モデルは会話相手だけでなく、外部環境を操作する実行主体に近づいた。

## 現在の段階

現時点では、この項目を `emerging` と見なしている。

主流へ向かう新興段階である。主要 API と Agent フレームワークでは中心機能になりつつあるが、信頼性と権限設計はまだ重要な課題として残る。

## 置き換える可能性があるもの

人が検索、コピー、貼り付け、実行、確認を手作業でつなぐワークフローの一部を置き換える。

## それを置き換える可能性があるもの

Harness Engineering や Agent ランタイムに吸収され、ツール単位ではなく、状態、チェックポイント、失敗回復を持つ実行システムとして扱われるようになる。
