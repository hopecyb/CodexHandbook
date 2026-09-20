---
caseCategory: creation
directoryOrder: 30
title: 記事から編集可能な8枚のスライドを作る
description: 記事、8枚の構成案、ネイティブテキストの PPTX とプレビューをダウンロードし、話の圧縮、出典の維持、中国語レイアウトの確認を練習する。
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 参考 PPTX をソフトウェアに読み込み、8枚をレンダリングし、ネイティブテキストの変更を確認した。記録された環境に限る筆者の自己検証。
  environment: Artifact Tool JS / Node.js 24.19.0；LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64；Arial Unicode MS、システムフォントディレクトリを明示的に設定。
  evidence:
    - label: 検証手順、フォント修正、確認範囲
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: 単独演習用の入力、プロンプト、PPTX、PDF、8枚のプレビュー、検証記録
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /ja/cases/write-an-article/
  label: 先に出典付きの記事を完成する
next:
  link: /ja/guide/learning-paths/creator/#4-次回再利用できるタスク指示を保存する
  label: 再利用できるタスク指示を保存する
locale: ja
source_locale: zh-CN
source_revision: '7189374'
translation_status: draft
translated_at: '2026-09-20'
---

記事を8枚の報告用スライドに圧縮し、文字を編集できる PPTX、プレビュー、発表ノートを提出する。ページを埋めるための数字やグラフを創作せず、資料の制限と矛盾を残す。

難易度は入門。所要60～90分は編集上の見積もりで、読者による計測はまだない。ローカルファイルを読め、PPTX を作るツールまたはプレゼンテーションソフトが必要。パッケージには入力記事があり、単独でも[記事事例](/ja/cases/write-an-article/)の続きとしても練習できる。

[完全な演習パッケージ v1.0.0（ZIP）](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [編集可能な PPTX](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## 最終成果物

![参考スライド1枚目：一つの要約を確認してから利用拡大を判断し、架空の製品と合成資料を明示](/downloads/article-to-slides/previews/slide-01.png)

参考稿はネイティブのテキストボックスを使い、重要な文字を変更できる。資料、製品「拾页」、人物「小林」はすべて CC0 1.0 の架空教材で、フォントファイルは同梱しない。

| ページ | 伝えることは一つ | 実際のプレビュー |
|---|---|---|
| 1 | まず確認し、利用拡大を判断 | [表紙](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | ファイル形式と証拠には境界がある | [読者の問い](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | 3資料は異なる役割を担う | [資料と証拠](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | 4段階で小さく試す | [方法](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | 根拠のない機能宣伝を削る | [修正例](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | 診断設定の矛盾は未解決 | [制限](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | 確認記録を残し、不明点を補う | [次の段階](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | 出典と合成の用途を追跡できる | [出典](/downloads/article-to-slides/previews/slide-08.png) |

## 1. 入力を読み、報告の軸を決める

`article-to-slides/` を展開し、`brief.md`、`input/article.md`、`input/claim-map.csv`、`input/unresolved.md` を読む。参考稿を最初から写さない。

```text
brief.md と input/ の記事、事実表、未解決事項を読む。
ノート整理ツールを初めて試す個人の著者向けに、約5分の8枚の報告を設計する。
各ページに結論、要点、出典 ID を書き、my-output/outline.md に保存する。
架空の身分、対応形式の制限、診断設定の矛盾を残す。
精度、価格、節約時間の数値を作らず、筆者の助言と製品の事実を分ける。
```

8枚の役割がそろい、各ページに重点が一つで、各事実が資料の節へたどれれば完了。5分は目標であり、試しに発表した証拠ではない。完全なプロンプトは `prompts/01-outline.md` にある。

## 2. 2枚の試作でレイアウトを確認する

最初に表紙と6枚目の制限ページを作る。前者は大見出し、後者は最も密な本文を確認できる。参考スタイルは濃紺、温かみのある白、ネイティブテキストで、装飾は必須ではない。

```text
確認済みの8枚構成に基づき、まず1枚目と6枚目の試作を作る。
16:9 とネイティブテキストボックスを使い、環境で利用可能な中国語フォントを選ぶ。
6枚目には P3「既定でオフ」と C2「新規インストールで既定オン」をともに残し、未確認と明記する。
レンダリングして中国語、改行、余白、出典の読みやすさを確認する。通過後に残り6枚を続けて作る。
PPTX、8枚のプレビュー、各ページの説明、検証記録を my-output/ に保存する。
```

参考稿は Arial Unicode MS を使う。そのフォントがなければ合法的に利用できる中国語フォントを選んでレイアウトを再確認する。PPTX ツールがなければ構成案と不足する機能を提出できるが、構成案だけでは演習完了にならない。

## 3. 編集可能性、8枚のレイアウト、出典を確認する

自作 PPTX をプレゼンテーションソフトで開き、テスト用コピーを保存する。重要な文字を選択・変更して保存し、もう一度開く。各ページのプレビューを出力し、中国語、改行、遮り、枚数、ノートを確認する。ページ全体の画像8枚で編集可能な稿を代用しない。

参考稿は LibreOffice headless で読み込み・書き出し済み。一時的な PPTX コピーでネイティブな表題を「一份」から「两份」に変更し、再書き出し後に変更を読み取った。これは GUI でクリックして編集した試験ではなく、すべてのソフトで同じ挙動を保証しない。

![参考6枚目：2つの資料に異なる既定設定が記され、結論は未確認と明示](/downloads/article-to-slides/previews/slide-06.png)

6枚目は事実確認の要点。結論を簡潔にするため矛盾する一方を消したり、「既定でオフ」に変えたりしない。5枚目左は筆者が設計した反例で、右の正しい表現と区別する。詳しい出典は PPTX のノートと `solution/slide-notes.md` にある。

## 4. 参考ファイルを確認し、自分の検証を記録する

完全パッケージのディレクトリで、ダウンロードした参考ファイルの完全性を確認する（Python 3.10+、標準ライブラリのみ）。

```sh
python3 validation/check.py
```

コマンドは参考ファイルのハッシュ、8枚、ネイティブテキスト、ノート、プレビューを確認する。`my-output/` の自作稿は確認しないので、前節の方法でソフトを使って検査し、版、フォント、結果、残る制限を記録する。

スクリプトが使えなくても PPTX/PDF を各ページで開けるが、ハッシュや構造の検証をしたとは言わない。参考の[検証記録](/downloads/article-to-slides/validation/record.md)は実施範囲を示す。

## 失敗時の復元

| 症状 | 次の対応 | 復元の証拠 |
|---|---|---|
| 中国語が四角になる | レンダリング処理が中国語フォントを読めるか調べ、必要ならコピーで置き換える | 8枚を再レンダリングし、中国語が読める |
| フォント変更後に文字がはみ出す | 1枚の文字数を減らし、テキスト枠と余白を調整して重要な制限を残す | プレビューに切れや重なりがない |
| 文字を個別選択できない | 全面 PNG ではなくネイティブテキストで作り直す | ソフトで選択、変更、保存、再開できる |
| 出典の矛盾が「整えられて」消えた | P3/C2/C3 を再確認し、両方と未確認表示を復元 | 6枚目と事実表が一致 |
| 開けない、または枚数が違う | 再書き出ししてソフトに読み込み、失敗ファイルを診断用に残す | 8枚そろい、正常に開く |

最初の問題は実際に起きた。LibreOffice が当初システムの中国語フォントを読み込めなかったため、フォントディレクトリを設定し、8枚を再レンダリング・確認した。文字が欠けたページは最終プレビューに使っていない。

## 完了条件と次の段階

- 8枚 PPTX が記録したソフトで開き、重要な文字を編集できる。
- 8枚のプレビューがあり、中国語、改行、制限をページごとに確認した。
- 出典、合成の身分、筆者の助言、未解決の矛盾が見える。
- 検証記録に実施・未実施の確認を記し、成果物はローカルに置く。

次は[クリエイターパス：再利用手順を保存する](/ja/guide/learning-paths/creator/#4-次回再利用できるタスク指示を保存する)。安定した手順を自分のテンプレートにし、後で[ワークフローを Skill にする](/ja/cases/workflows/turn-a-workflow-into-a-skill/)を学ぶ。
