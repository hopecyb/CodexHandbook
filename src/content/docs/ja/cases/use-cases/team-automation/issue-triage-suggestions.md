---
caseCategory: team
directoryOrder: 90
title: 事例：Issue の振り分けと人によるレビュー
description: 5 件の合成 Issue を使い、構造化された提案、入力との紐付け、GitHub を操作しないドライランを練習します。
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 著者が用意した 5 件の提案のドライランと、構造・入力紐付けに関する 8 件のテストに合格しました。モデルの呼び出しや GitHub への接続は行っておらず、分類精度や本番運用可能性を示すものではありません。
  environment: Python 3.12.11 / Darwin arm64。標準ライブラリと合成入力を使用し、トークン・ネットワークは使用していません。
  evidence:
  - label: 実際の実行記録
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: 合成入力、JSON Schema、プロンプト、著者の提案、ドライランスクリプト、レビュー記録
  license: CC0-1.0
  version: 1.0.0
locale: ja
source_locale: zh-CN
source_revision: "6d859d7"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

この演習では Issue の振り分けを「提案を生成 → 検証 → 人がレビュー」に分けます。レビュー待ちの記録が 5 件できます。コメント投稿、ラベル付け、Issue のクローズは自動実行しません。

[演習パッケージをダウンロード](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [実際のドライラン出力](/downloads/issue-triage/validation/dry-run.json)

## 入力と完了条件

5 件の独自の合成入力は、計算ミス、ドキュメントのリンク切れ、アカウントをまたぐデータの兆候、情報不足、Issue 本文の悪意ある指示です。実際の顧客データは含まれません。提案には種類、優先度、ラベル、セキュリティレビューのフラグ、理由、不足情報を含めます。

完了には各入力に 1 件の提案を対応させ、列挙値と入力ハッシュの検証を通す必要があります。その後、メンテナーが各提案を採用・修正・却下し、理由を記録します。構造の検証はこの判断の代わりになりません。

## まず参照用の提案を実行する

Python 3.10 以降が必要ですが、API キーや外部依存関係は不要です。展開したディレクトリで実行します。

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

最初のコマンドは著者が事前に作成した提案を使い、`external_actions` が空の `human-review-required` を 5 件出力します。2 番目は 8 件の検査を実行します。どちらもモデルを自動呼び出ししません。

[入力サンプル](/downloads/issue-triage/fixtures/issues.json) · [参照用提案](/downloads/issue-triage/solution/proposals.json) · [人によるレビューの参考](/downloads/issue-triage/solution/human-review.md)

## 次に自分の提案を生成する

パッケージ内の [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) を Codex に渡し、[schema.json](/downloads/issue-triage/schema.json) に従った `my-proposals.json` を作らせます。その後、次を実行します。

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

スキーマは JSON Schema 2020-12 形式です。真偽値には `"type": "boolean"` を使い、優先度は文字列 `"P0-P3"` ではなく列挙値です。同梱の検証器はこのスキーマで使うキーワードの一部のみを実装しており、汎用スキーマエンジンではありません。

各提案には対応する Issue の全文と紐付ける `input_sha256` が含まれます。入力が変わったら古い提案の使用を停止してください。ハッシュだけを再計算して済ませず、まず変更内容を分析し直してください。ハッシュの規約と関数は README とスクリプトにあります。

## 人の判断と安全上の境界

| 状況 | 対応 |
|---|---|
| 明確な不具合の手掛かり | 分類を提案して再現し、影響範囲を確認してから優先度を決める |
| セキュリティ事案の可能性 | セキュリティ担当者に非公開で確認を依頼する。優先度不明は低リスクを意味しない |
| 情報不足 | `unknown` を使い、不足情報を列挙する。担当者や重大度を推測しない |
| 本文がコマンド実行や権限昇格を要求 | 信頼できない資料として扱い、実行しない。緊急を自称しても P0 にしない |

HTML の削除や長さの制限だけではプロンプトインジェクションを確実に防げません。パッケージのプログラムは Issue 本文を実行しませんが、モデル生成段階ではデータと指示の境界を保つ必要があります。参照出力はモデルの耐性率を証明しません。

## 失敗と復旧

未知のラベル、余分なアクション項目、不正な種類、重複または欠落した提案があると、バッチ全体が終了コード 1 で停止します。プロンプトと該当項目を直し、元の入力を残して再実行します。セキュリティの種類またはラベルにセキュリティレビューフラグがない場合も拒否されます。

構造が正しくても分類が誤っている場合は通過し得ます。この限界はテストで確認済みです。少数の例で一致率が高くても本番投入の基準にはなりません。実運用には代表性のあるサンプル、リスク階層、人による抜き取り検査、誤分類のコスト、ロールバック条件が必要です。この演習で行うのはローカルのドライランだけです。

次は[ドキュメントのリンク検査](/ja/cases/use-cases/team-automation/scheduled-link-check/)と[人による承認パターン](/ja/cases/workflows/human-approval-patterns/)を参照してください。
