---
caseCategory: creation
directoryOrder: 20
title: 3つの資料から出典付きの記事を書く
description: 製品説明、合成インタビュー、変更履歴を使って事実の対応付け、矛盾への対処、修正を練習する。記事パッケージをダウンロードできる。
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 自作の合成資料3点と重要な事実7件を項目ごとに照合し、構造チェックに合格した。筆者による自己確認であり、実際のモデルとの比較実験や二人目の人間によるレビューは行っていない。
  evidence:
    - label: 製品説明（合成資料）
      href: /downloads/source-backed-article/sources/01-product.md
    - label: 合成インタビュー
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: 未解決の矛盾を含む変更履歴
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: 筆者の確認記録と検証範囲
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: 3つの資料、プロンプト、初稿と最終稿、事実表、修正差分、検証ツール
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /ja/cases/
  label: 実践課題を選ぶ
next:
  link: /ja/cases/create-a-slide-deck/
  label: 記事をスライドにする
locale: ja
source_locale: zh-CN
source_revision: e2bb5ea
translation_status: draft
translated_at: '2026-09-20'
---

目標は、重要な事実をすべて資料にたどれる中国語の短い記事。矛盾する記述を扱い、資料が支える内容、筆者の推論、未確認事項を区別して、意図的に誤りを入れた初稿を修正する。

難易度は入門。所要時間45～60分は編集上の見積もりで、読者による計測はまだ行っていない。Codex にローカルファイルを渡し、Markdown を読めることが前提。任意の構造チェックには Python 3.10+ が必要。

[完全な演習パッケージ v1.0.0（ZIP）をダウンロード](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

資料はすべて当サイトが作成したもの。製品「拾页」とインタビュー対象の「小林」は架空であり、実際の製品やユーザーの証言を表していない。

## 最終成果物

参考最終稿は「まず一つの要約を確認し、利用を広げるか決める」を軸に、入力の境界、小規模な試用、要約の照合、未解決事項を扱う。

| 成果物 | 用途 |
|---|---|
| `outline.md` | 読者の問いと記事の順序を示す |
| `article.md` | 事実 ID を付けた中国語記事 |
| `claim-map.csv` | 重要な事実・助言7件、資料 ID、節、証拠の種類 |
| `unresolved.md` | 資料で答えられない問いを残す |
| `revision.diff` | 設計した初稿から最終稿への実際のテキスト差分 |

[参考記事](/downloads/source-backed-article/solution/article.md) · [事実対応表](/downloads/source-backed-article/solution/claim-map.csv)

## ダウンロードと準備

`source-backed-article` を展開して開き、`brief.md` と `sources/index.csv` を読む。CC0 1.0 により変更と再配布が可能。最初は solution を見ずに自分の版を作ってもよい。

資料は P（製品説明）、I（合成インタビュー）、C（変更履歴）の3つ。P1、I2、C3 のような安定した節番号がある。引用は単に「資料より」ではなく具体的な節に結びつける。

## 1. まず事実と矛盾を整理する

```text
brief.md、sources/index.csv、索引にある3つの資料を読む。
直接裏づけられる事実、欠けた情報、矛盾する記述を先に列挙し、それぞれに資料 ID と節を付ける。
架空の製品情報をネットで補わず、合成インタビューを実際の利用者の証言にしない。
文書の日付だけで矛盾を自動解決しない。記事を書く前に事実表を提出する。
```

矛盾は意図的に残されている。P3 は診断データの送信が既定でオフ、C2 は新規インストールで既定オンと述べ、C3 は管理者からの訂正説明がないと明記する。新しい資料を最終回答として選ぶのではなく、「未確認」と記す。

## 2. 確認済みの範囲で続けて書く

`prompts/02-outline-and-write.md` に読者と4部構成（何ができるか、どう試すか、何を確認するか、未解決の点）が示されている。構成を確認した後は、各段落で止めずに続けて書ける。

出力はすべて `my-output/` に置き、入力資料は残す。重要な事実には `[F1]` などを付け、対応表には次を記録する。

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

証拠の種類は「原文に支持される」「筆者の推論」「未確認」のみ。少数のファイルコピーで試すという助言は筆者の判断であり、製品の約束や必須操作として書かない。

## 3. 文体より先に事実を修正する

`solution/draft.md` は筆者が設計した反例であり、実際のモデル出力ではない。資料にない PDF・画像対応、完全オフライン、効果保証、実在利用者の証言を意図的に含む。

| 初稿の問題 | 修正 | 理由 |
|---|---|---|
| 「PDF とさまざまな画像に対応」 | Markdown とプレーンテキストに限定 | P1 が入力範囲を明示 |
| 「完全オフライン、診断は既定でオフ」 | 矛盾を併記し未確認の問いにする | P3/C2 が逆の記述で、送信項目も不明 |
| 「小林が精度と時間短縮を証明」 | 合成の身分を保ち、効果の数値を示さない | I3 に計測や固定評価サンプルがない |
| 「万能で簡単に効率向上」 | 具体的な入力、操作、確認に変える | 新しい事実を加えず誇張を減らす |

[修正差分](/downloads/source-backed-article/solution/revision.diff)と[修正メモ](/downloads/source-backed-article/solution/revision-notes.md)を参照。間違った能力を残したまま文体だけ整えても完了ではない。

## 4. 構造を確認し、各出典を読み直す

Python 3.10+ がある場合は演習ディレクトリで実行する。

```sh
python3 validation/check.py --output my-output
```

スクリプトは3つの資料のハッシュ、本文の ID、出典の節、未解決ファイルを確認する。参考稿は合格し、存在しない F99 を加えた一時コピーは拒否された。

**構造チェックの合格は事実の正確さを証明しない。** 各主張の原文を開き、現在の文を支えるか、「のみ」「未確認」などの条件が失われていないか確認する。合成の抜粋を実際の証言にしてしまえば、引用 ID があっても誤り。

スクリプトを使えない場合は対応表に沿って3つの元ファイルを開き、ID と文言を手動で確認する。行っていない確認に合格したとは言わない。

## 失敗した場合の復元

- ファイルがない：展開先と資料索引を確認し、内容を作らない。
- 引用 ID がない：正確な対応を加えるか根拠のない事実を削除する。妥当な不確実性は残す。
- 資料が矛盾する：両方を示し、誰にどの証拠が必要か書く。日付、多数決、語調では決めない。
- 記事が宣伝的：根拠のない効果保証を消してから具体的な操作と制限に直す。

## 完了条件

重要な事実にたどれ、筆者の助言が区別され、矛盾と不足が見え、合成であることが残っている。成果物はローカルに留め、自動公開しない。

次にこの最終稿から[編集可能な8枚のスライドを作る](/ja/cases/create-a-slide-deck/)。スライド演習には独立した入力、PPTX、PDF、8枚のプレビュー、検証記録がある。続けて学ぶなら自分で完成・確認した記事を優先する。
