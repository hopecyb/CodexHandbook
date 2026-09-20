---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "このページは品質と検証の章の構成と読む順序だけを説明します。内部リンクと概念の記述を確認済みで、バージョン、価格、画面など変わりやすい製品情報には依存しません。"
  checkedAt: "2026-07-26"
title: 品質と検証
description: レビュー、テスト、完了の定義。
sidebar:
  order: 21
locale: ja
source_locale: zh-CN
source_revision: 401b6a6
translation_status: draft
translated_at: 2026-09-20
---
Codex を使うとき、多くの人は「作れるかどうか」に注目しがちですが、もう一つの問いを見落としやすいです。作ったあと、今回の結果を本当に受け取れるかどうか。

この一連の内容は、その問いに答えるものです。品質と検証は、「見た目は完了したが、まだ安定していない」状態を避けるためのものです。

- [差分のレビュー](/ja/guide/quality/review-diffs/)
- [テストの実行](/ja/guide/quality/run-tests/)
- [成果物の検証](/ja/guide/quality/verify-artifacts/)
- [出典の確認](/ja/guide/quality/validate-sources/)
- [不確実性の扱い](/ja/guide/quality/handle-uncertainty/)
- [使用量・所要時間・モデルの選択](/ja/guide/quality/usage-time-and-model-choice/)
- [ワークフロー評価と20件のサンプル](/ja/guide/quality/workflow-evaluation/)
- [完了の定義](/ja/guide/quality/definition-of-done/)

## 読み順

初めて読むときは、次の順序がおすすめです。

1. [差分のレビュー](/ja/guide/quality/review-diffs/) で、実際に何を変えたかを確認する
2. [テストの実行](/ja/guide/quality/run-tests/) で、他を壊していないかを確認する
3. [成果物の検証](/ja/guide/quality/verify-artifacts/) で、結果が本当に望んだものかを確認する
4. [完了の定義](/ja/guide/quality/definition-of-done/) で、「どうなったら本当に完了か」を明確にする

確認がないと、「完了」は多くの場合、一時的に完了したように見えるだけです。
