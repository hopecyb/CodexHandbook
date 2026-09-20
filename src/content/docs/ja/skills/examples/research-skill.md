---
title: "例：矛盾と情報不足を区別する調査 Skill"
description: "完全な調査パッケージをダウンロードし、固定の合成資料で出典の状態、証拠の矛盾、未解決の問い、追跡可能な報告を練習します。"
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "ローカル出典の確認と8件の回帰テストに合格しました。参考報告は作成者が出典と照合しましたが、モデルのルーティング、調査品質、ネットワーク障害は測定していません。"
  environment: "Python 3.12.11 / Darwin arm64。標準ライブラリ、3件の合成資料、意図的に欠けたローカルファイル1件。"
  evidence:
    - label: "実際の確認範囲と限界"
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "調査 Skill、固定資料、証拠表、報告、出典状態チェッカー"
    license: CC0-1.0
    version: 1.0.0
locale: ja
source_locale: zh-CN
source_revision: cf2b232
translation_status: draft
translated_at: 2026-09-20
---

開けない出典、ある事実に触れていない出典、内容が食い違う二つの出典は、それぞれ扱いが異なります。この Skill はその違いを残し、どの結論を追跡して確認でき、どれに追加の証拠が必要かを示します。

[完全版 evidence-research v1.0.0 をダウンロード](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [インストール手順](/downloads/skills/evidence-research/README.md)

## 固定の問いと資料

このパッケージは[記事作成の演習](/ja/cases/write-an-article/)に登場する架空のツール「拾页」を使い、入力形式、診断機能の既定設定、アップロード項目を調べます。独自に作成した合成資料3件が含まれ、一覧にある4件目の保守担当者メモは意図的に欠けています。架空の製品について実際の Web を検索したり、答えを作り出したりしないでください。

| 証拠の状態 | パッケージ内の例 | 報告方法 |
|---|---|---|
| `supported`：資料が裏付ける | P1 は Markdown とプレーンテキストのみを列挙 | 裏付けられた範囲と箇所を示し、製品を実測したとは言わない |
| `conflict`：矛盾 | P3 は既定でオフ、C2 は既定でオン | 両方を示し、バージョンや条件の不足を残す |
| `unknown`：不明 | 診断のアップロード項目が列挙されていない | 不足している情報を示し、アップロード内容を推測しない |
| `unavailable`：出典を利用できない | M のローカルファイルが提供されていない | 失敗した出典と影響を残し、読んだふりをしない |

[参考報告](/downloads/skills/evidence-research/solution/report.md) · [証拠表](/downloads/skills/evidence-research/solution/evidence.csv) · [出力形式](/downloads/skills/evidence-research/references/evidence-format.md)

## インストールと呼び出し

演習プロジェクトの `.agents/skills/evidence-research/` にディレクトリ全体を配置し、入口が `SKILL.md` であることを確認します。同名のカスタム Skill を上書きしないでください。[Skill の使い方](/ja/skills/use-a-skill/)に従いクライアントで選択できることを確認してから呼び出します。

```text
$evidence-research このパッケージの sources/catalog.json にある資料を基に、
拾页 1.2 の入力形式、診断の既定設定、アップロード項目を確認できるか判断する。
my-output/report.md と evidence.csv を出力し、矛盾と開けない出典を明記する。
合成資料であることを保ち、架空の製品について実際の Web を検索しない。
```

`fixtures/trigger-cases.json` には適用例と非適用例があります。出典比較や証拠確認には適していますが、創作詩や単純なファイル数の集計に調査手順は不要です。これは設計上の想定であり、自動発動は測定していません。

## 出典と報告を確認する

任意の確認には Python 3.10+ が必要で、外部依存はありません。展開後のディレクトリで実行します。

```sh
# 各出典の実際の状態を表示
python3 scripts/check_evidence.py --inspect-only
# 参考報告を確認
python3 scripts/check_evidence.py
# パッケージの形式で生成した報告を確認
python3 scripts/check_evidence.py --output my-output
# 一時コピーで回帰テストを実行
python3 validation/test_checks.py
```

期待される参考結果は P/I/C が `available`、M が `missing` で、4件の証拠が構造確認に通ることです。終了コード0は確認が完了し構造に適合した意味であり、全出典が利用可能という意味ではありません。特に `--inspect-only` では各 status を読んでください。

チェッカーは内容ハッシュの変更、欠落、読み取り不能、期待ハッシュのないファイルを検出します。利用できない出典を既読の証拠として使ったり、報告から黙って消したりしてはいけません。スクリプトが扱うのはローカルファイルだけで、HTTP ステータスや Web ページの到達性はテストしません。

## 失敗後の復旧

- **ファイル欠落：** パスを確認します。本当に提供されていないなら利用不可の状態を残し、他の裏付けられた結論を提出します。
- **内容変更：** バージョンと差分を比較し、引用を再確認します。チェックを通すためだけにハッシュを更新しないでください。
- **証拠の矛盾：** バージョン、インストール条件、適用対象を確認します。解決できないなら日付だけで選ばず、未解決として残します。
- **事実の不足：** 保守担当者に必要な項目や説明を列挙します。提案を確定済みの事実として書かないでください。

固定入力に答えがない問いを、この例で解決する必要はありません。実際の調査で代替出典の探索が許可されたら、選んだ根拠と実際のアクセス結果を記録します。

## 完了条件と限界

報告には調査の問い、読めた出典、失敗した出典、結論ごとの根拠、次に補うべき証拠を含めます。作成者は参考報告を固定資料と照合しましたが、独立した読者や2人目の査読者による検証はありません。

8件のスクリプトテストは盲点も示します。「すべての形式に完全な精度で対応する」という虚偽の主張でも、有効な引用があれば構造チェックを通ることがあります。スクリプトは意味上の裏付けを証明できず、二つの文章が本当に矛盾するかも判断できません。提出前に各原文を読んでください。

次は[執筆 Skill](/ja/skills/examples/writing-skill/)で確認済みの結論を記事にまとめ、矛盾と不明点を引き続き残せます。
