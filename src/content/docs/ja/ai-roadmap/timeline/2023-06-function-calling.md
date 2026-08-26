---
title: "Function Calling（関数呼び出し）"
date: 2023-06-13
year: 2023
summary: "モデルは本質的にはテキスト生成器であり、行動を説明できても実行はできない。Function Calling は「能力メニュー」を導入し、必要なツールを選び構造化引数を埋められるようにした。これにより普通の返答が実行可能なアクションへ近づいた。"
phase: mainstream
trend: stable
signal: well-calibrated
tags: [function-calling, tools, api, orchestration, reliability]
authored_by: ai-assisted
locale: ja
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: 2624937
---

# Function Calling（関数呼び出し）

- 重要な日付:
  - OpenAI function calling release: 2023-06-13
- 公式リファレンス:
  - https://openai.com/index/function-calling-and-other-api-updates/
- 注記: この項目は、Function Calling が API と製品設計における構造化ツール接続の起点になった時点を記録する。

## それは何か

Function Calling は、モデルが利用可能な関数や API のスキーマを見て、どの関数を呼ぶべきか、どの引数を渡すべきかを構造化データとして出力する仕組みである。モデル自身が外部処理を実行するのではなく、実行可能な呼び出し意図をアプリケーションへ渡す。

## AI アプリケーション工学をどこからどこへ進めたか

AI アプリケーションは「モデルが自然言語で助言する」段階から、「モデルがシステム処理へ渡せる構造化指令を出す」段階へ進んだ。これにより、予約、検索、データ更新、社内 API 連携などが会話の外側の実処理に接続しやすくなった。

## 現在の段階

現時点では、この項目を `mainstream` と見なしている。

主流の仕組みになっている。単独の能力としてはすでに多くの API とフレームワークに吸収され、Tool Use や Agent 実行基盤の基礎部品になった。

## 置き換える可能性があるもの

自然言語出力を正規表現や弱いパーサで読み取って外部処理へ変換するやり方の多くを置き換えた。

## それを置き換える可能性があるもの

より広い Tool Use、プランニング付き Agent、実行ハーネスに吸収される。将来は関数単位ではなく、権限、状態、観測、失敗回復まで含む実行単位が中心になる可能性がある。
