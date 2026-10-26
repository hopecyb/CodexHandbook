---
title: Function Calling（関数呼び出し）
description: モデルは呼び出したい関数名と構造化された引数を出力でき、アプリケーションが検証して実行するかを決めます。引数の生成、承認の取得、実際の実行は別々の段階です。
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 以下の出来事やプロジェクトの説明は一次資料と照合しました。学習上の助言は筆者の判断であり、製品を実際に動かして検証したものとして扱っていません。
  evidence:
  - label: Function Calling の公開告知
    href: https://openai.com/index/function-calling-and-other-api-updates/
locale: ja
source_locale: zh-CN
source_revision: "c362c48"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

## 確認可能な出来事と範囲

**日付：2023年6月13日 · 種別：製品発表。** OpenAI は当時の Chat Completions API に Function Calling を導入すると発表しました。この日付は特定の事業者による API の公開を指し、あらゆるツール呼び出しの起点ではありません。

出典：[Function Calling の公開告知](https://openai.com/index/function-calling-and-other-api-updates/)。確認日は2026年9月18日です。出典の公開日と本ページの確認日は意味が異なります。

## 何を解決するか

モデルは呼び出したい関数名と構造化された引数を出力でき、アプリケーションが検証して実行するかを決めます。引数の生成、承認の取得、実際の実行は別々の段階です。

## 学習上の助言と適用範囲

以下は本サイトの教育上の判断であり、業界での普及率や効果を測定した結果ではありません。

検証可能な入力、明確な権限範囲、失敗時の応答を優先して設計してください。JSON として正しくても、引数の意味が正しいとは限らず、外部システムへの書き込みが許可されたことにもなりません。過去の発表にあるモデル名や API の例は、現在の設定ガイドとして使わないでください。

## 実践演習

[Issue 振り分け提案のドライラン](/ja/cases/use-cases/team-automation/issue-triage-suggestions/)：合成 Issue に対する構造化された提案が入力に結び付いているか確認し、人による確認キューを残します。この演習はデータの境界を検証するものであり、過去の API を呼び出したり、Issue にラベルを適用したりはしません。

[ロードマップと日付の扱いに戻る](/ja/ai-roadmap/)
