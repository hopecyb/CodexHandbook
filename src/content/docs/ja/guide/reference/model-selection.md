---
title: ChatGPT と Codex のモデルを選ぶ
description: 会話、文章、表計算、プログラミング、調査に合うモデルと推論強度を選び、プランと実際の使用量を評価します。
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: 公式のモデル、Chat の推論、プランの文書を確認。タスク別の推奨は編集上の助言であり、性能やコストの実測ではありません。
  evidence:
    - label: Work と Codex のモデル
      href: https://learn.chatgpt.com/docs/models
    - label: Chat のモデルと思考レベル
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: プランと使用量
      href: https://learn.chatgpt.com/docs/pricing
locale: ja
source_locale: zh-CN
translation_status: reviewed
reviewed_at: '2026-10-26'
translated_at: 2026-10-25
source_revision: '20eb508'
---

**複雑な作業ではまず GPT‑6.1 Sol、明確で小さなタスクでは Luna を試し、厳しい要件の難題では Astra を検討してください。通常の Chat では Instant、Thinking、Pro を選びます。** まず利用している製品を確認し、対応する表を参照してください。

[Work / Codex](#work-codex) · [通常の Chat](#chat) · [プランと価格](/ja/chatgpt-pricing/) · [実際の使用量を記録](/ja/guide/quality/usage-time-and-model-choice/)

:::note[適用範囲 · 2026-10-24]
モデル、設定、上限はアカウント、クライアント、ワークスペース、提供段階によって異なります。本ページは日付付きの参考資料です。推奨は出発点であり、利用権限を保証しません。Chat、Work、Codex のメニューと使用量ルールはそれぞれ確認してください。
:::

<span id="work-codex"></span>

## Work / Codex：タスクから選ぶ

以下は編集上の推奨です。まずクライアントで対応している既定の推論強度から始め、強いモデルに変更する前に入力と作業範囲を確認してください。

| タスク | 推奨する出発点 | 推論強度を上げる・モデルを変更する目安 | 練習と検証 |
|---|---|---|---|
| 項目抽出、形式変換、小さな書き換え | GPT‑6 Luna | 入力が明確でも項目の欠落や境界条件の誤りが残る場合は Sol を試す | [使用量と手直しを記録](/ja/guide/quality/usage-time-and-model-choice/) |
| 複数の資料から文章を書く | GPT‑6.1 Sol | 資料間の矛盾を処理できない、または要件を繰り返し見落とす場合は Astra を検討 | [記事を書く](/ja/cases/write-an-article/) |
| 売上データを分析し、週次レポートを作る | GPT‑6.1 Sol | 返金処理、重複排除、前期比の計算に誤りが残る場合は推論強度を上げ、別途計算して結果を検証する | [売上レポート](/ja/cases/analyze-a-spreadsheet/) |
| バグ修正や複数ファイルの変更 | GPT‑6.1 Sol | ファイル間の依存関係を特定しにくい、または修正が繰り返し失敗する場合は Astra を検討 | [バグを修正して検証する](/ja/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| 厳密な要件の下で複数資料を調査する | GPT‑6.1 Sol。難題では Astra も検討 | 矛盾する証拠を統合できない、または制約を繰り返し見落とす場合は推論強度を上げる | [結果を確認する](/ja/guide/quality/) |

## モデルの特徴とトレードオフ

| モデル | 主な役割 | トレードオフと制約 |
|---|---|---|
| GPT‑6 Luna | 内容が明確で、繰り返し行う頻度の高い作業を効率よく処理 | 小さなタスクに便利。複雑な判断には慎重な確認が必要 |
| GPT‑6.1 Sol | 複雑な作業で能力とコストのバランスを取る | 公式には Astra に近い性能を低コストで提供する位置づけ。すべてのタスクで同等ではない |
| GPT‑6 Astra | 複数段階にわたる難しい作業向けの最も強力な選択肢 | 成果の品質を優先する場合に検討。簡単なタスクでは使用量増加の効果が小さい場合もある |
| GPT‑6 Sol と GPT‑5.6 系列 | クライアントに残っている場合がある旧モデル | 検証済みの手順が機能していれば維持できる。新しいタスクでは現在の推奨と比較する |

[公式モデルガイド](https://learn.chatgpt.com/docs/models)では 6.1 Sol は Work と Codex に掲載されています。通常の Chat にも同名の選択肢があるとは限りません。Work/Codex のモデル説明と Chat の GPT‑6 表記は、それぞれの製品内で解釈してください。

<span id="chat"></span>

## 通常の Chat：思考レベルを選ぶ

| 選択肢 | 推奨用途 | トレードオフ |
|---|---|---|
| Instant | 日常の質問、翻訳、短い書き換え | 応答速度を優先 |
| Thinking · Medium | 学習、選択肢の比較、一般的な分析 | 丁寧な分析の出発点 |
| Thinking · High | 数学、多条件の意思決定、複雑なコードの質問 | 難問により長い思考時間を割く |
| Extra High | 慎重な確認が必要な特に難しい問題 | プランの対応範囲で必要に応じて利用 |
| Pro / GPT‑6 Pro | 難しいタスクや長いワークフロー | Astra を使用。プランと利用枠に依存 |

確認時点の Chat 文書では、Plus は Medium と High に対応し、Extra High と Pro は上位プランに含まれます。Free / Go の Think を有料プランの同名機能と同等の能力だと考えないでください。Plus / Pro の Instant に「深く考えて」と指示しても、思考レベルは自動では上がりません。メニューで選択してください。[Chat 公式文書](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## 推論強度を上げる・下げる目安

- 受け入れ基準を満たしている：現在の設定を維持するか、同じタスクで軽い設定を試す。
- 資料や目標が不足している：まず入力を補う。推論を増やしても不足する証拠は補えない。
- 欠落や論理の破綻が繰り返される：入力を固定し、推論強度またはモデルを一段階ずつ変更する。
- 高い設定でも失敗する：範囲を絞り、ツール、権限、検証方法を確認する。

モデルと推論強度は別々の選択です。推論強度を上げると、通常は時間と token の消費が増えます。モデルとクライアントごとの対応設定を確認し、Chat の設定をそのまま Codex に当てはめないでください。[モデルと推論の基礎](/ja/guide/foundations/models-and-reasoning/)

## 別のプランが必要か

時々使うなら無料枠を試してください。文章作成、分析、プログラミングを頻繁に行うなら Plus を検討できます。繰り返し上限に達する、または追加の能力や利用枠が必要な場合に Pro と比較します。Go は必要な機能と地域ごとの価格差で判断してください。

これは判断の順序であり、普遍的な費用対効果ランキングではありません。**Pro プランでもモデルの使用量には上限があります。** サブスクリプション料金、追加クレジット、API 料金は別々に確認してください。単価の比率はタスク全体の節約率ではありません。

[プラン選択と価格の出典](/ja/chatgpt-pricing/) · [アカウント、プラン、アクセス](/ja/guide/getting-started/account-plans-and-access/)

## 費用対効果を評価する

入力、ツール、受け入れ基準をそろえて比較します。待ち時間、失敗、再試行、人による確認、手直しを別々に記録してください。応答速度だけを追うより、基準を安定して満たす最も軽い設定を選びます。

[使用量記録をダウンロードして記入](/ja/guide/quality/usage-time-and-model-choice/)するか、[3 組のプロンプト比較演習](/ja/prompts/comparison-lab/)を再利用してください。既存のプロンプト実験には実際のモデル名の記録がなく、**モデルの順位付けには使えません**。

## モデルが利用できない場合

まず Chat、Work、Codex のどれを使っているか確認し、次にクライアントのバージョン、プラン、ワークスペースの権限、利用枠がリセットされる時刻を確認します。利用可能なモデルでタスクを絞るか、進捗を保存して待ってください。モデル名を選択しても利用権限は付与されません。

[アクセスの問題を調べる](/ja/guide/getting-started/account-plans-and-access/) · [トラブルシューティング](/ja/guide/reference/troubleshooting/)

## 出典と更新

製品に関する事実は上記の公式資料に基づき、タスク別の推奨は編集上の判断です。本ページにはモデルの性能実験は含まれません。価格は価格ページで別途管理しています。実際の決済情報を確認してください。

- 2026-10-24：Chat と Work/Codex を分けた初版を公開。演習、使用量記録、価格の出典へのリンクを追加。
