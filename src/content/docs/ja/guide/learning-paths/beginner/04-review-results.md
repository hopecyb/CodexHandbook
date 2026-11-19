---
title: "結果をレビューする"
description: "固定の誤りを含む例で間違いを探す練習をし、自分の案内文を確認します。"
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "固定の教材と筆者による参照結果を用意しました。一時ディレクトリでファイル操作スクリプトを実行済みですが、独立したモデルや読者による完走テストはまだ行っていません。"
prev:
  link: "/ja/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "明確なタスクを伝える"
next:
  link: "/ja/guide/learning-paths/beginner/05-complete-first-project/"
  label: "最初の小さなプロジェクトを完成させる"
locale: ja
source_locale: zh-CN
source_revision: 'ca6a935'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

## まず、既知の誤りがあるサンプルを見る

[筆者が意図的に誤りを入れた案内文](/downloads/first-project/references/flawed-notice.md)を開き、`facts.md` と比べて、誤った文、対応する事実番号、修正方法を記録してください。このサンプルはモデルの出力ではなく、特定のプロンプトが必ず失敗することも示しません。

実際の作業ディレクトリの権限をわざと緩めて、範囲外の変更を誘発しないでください。固定の誤りサンプルだけで、間違いを見つける練習と繰り返しの比較ができます。

## 次に、自分の成果物を確認する

パッケージ内の `templates/review.md` を作業ディレクトリ外の新しい `records` フォルダーにコピーし、次の項目を一つずつ記入します。

- 時刻、場所、定員、費用、準備事項は正しいか。
- 申込方法は不明のままか。事実番号は本文の根拠になっているか。
- 変更したのは notice.md だけか。元の事実ファイルとメモは変わっていないか。
- 追加のファイル作成や削除、外部への送信はないか。

不明な項目は「未確認」と記入してください。モデルが「完了」と言っただけで合格にしないでください。

## 完了条件

誤りサンプルの事実誤認4点を自力で指摘してから、[確認用の解答](/downloads/first-project/references/review-key.md)を見ます。4点は終了時刻、人数、架空の申込方法、任意の本の持参を必須とした点です。自分の案内文に問題があれば、修正後に再確認してください。

実際に記入した確認記録を保存してください。筆者の参考例を、自分が完了した証拠としてコピーしないでください。関連：[差分を確認する](/ja/guide/quality/review-diffs/)。

[練習パッケージと準備](/ja/guide/learning-paths/beginner/)
