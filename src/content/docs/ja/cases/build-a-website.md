---
caseCategory: creation
directoryOrder: 40
title: 'Webサイトを作る：イベント資料からプレビュー可能なページへ'
description: 要件、初期ページ、完成例をダウンロードし、レスポンシブレイアウト、キーボード操作、再現可能なボタン不具合の修正を練習します。
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64。Codex内蔵ブラウザー（エンジンの正確なバージョンは不明）、1280×720と375×812のビューポート。
  summary: 参照ページをデスクトップと狭い画面で開き、ボタンとキーボード操作を確認しました。リンクの不具合は実際に再現して修正しました。これはブラウザー間の互換性、モデルの性能、読者の完了を保証するものではありません。
  evidence:
    - label: ブラウザーでの確認と実際の表示修正
      href: /downloads/reading-event/validation/browser-review.md
    - label: リンク不具合と修正のログ
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: 固定要件、架空の事実、初期HTML、参照ページ、不具合サンプル、受け入れ確認テンプレート、検証スクリプト
    license: CC0-1.0
    version: 1.0.0
locale: ja
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "55fd86a"
reviewed_at: "2026-10-26"
---

イベント資料を、ブラウザーで開ける1ページのWebサイトにします。成果物はローカルの静的ページと受け入れ確認記録です。イベントと会場は架空で、申し込み方法は未定です。

[練習パック全体をダウンロード](/downloads/reading-event/reading-event-1.0.0.zip) · [完成例を開く](/downloads/reading-event/solution/index.html) · [資料の説明](/downloads/reading-event/README.md)

## 目標と準備

ページにはイベントの紹介、日時、場所、定員、費用、持ち物、未確定事項を含めます。メインボタンは同じページの参加案内へ移動するだけにし、申し込みできるかのように見せてはいけません。

展開後、`starter` を新しい `work` ディレクトリにコピーし、モデルに編集させるのは `work/index.html` のみにします。パックのルートにある `facts.md`、`brief.md`、`prompt.md` は読み取り専用の入力として扱います。`solution` は完成後に確認してください。フロントエンドの依存パッケージを入れなくても、HTMLはブラウザーで直接開けます。

ローカルサーバーを使う場合はREADMEの任意のPythonコマンドに従います。ポートが使用中なら空いているポートを選び、不明なサービスを停止しないでください。

## タスクを依頼する

```text
facts.mdとbrief.mdに基づき、現在のindex.htmlを読書交流会の1ページサイトに
仕上げてください。編集するのはindex.htmlだけとし、HTMLと埋め込みCSSを使い、
依存関係の追加、ネットワーク接続、デプロイ、送信はしないでください。
申し込み方法は「確認中」のままにし、メインボタンはページ内の参加案内へ
移動するだけにしてください。完成後、デスクトップ、375pxの狭い画面、
キーボードフォーカス、ページ内リンクを確認してください。実際に行った確認と
未完了項目を列挙し、未実行の確認を合格と書かないでください。
```

[レイアウト参考](/downloads/reading-event/wireframe.md)には、デスクトップの2列とスマートフォンの1列での読む順番が示されています。色や装飾は変えてもかまいませんが、イベントの事実、未確定事項、受け入れ基準は変えられません。

## 成果物を確認する

| 確認項目 | 完了基準 |
|---|---|
| 事実 | 2026年10月17日14:00～15:30、架空の閲覧室、18人、無料、任意で本を持参という内容が資料と一致する |
| 未確定事項 | 申し込み方法は確認中のままにし、QRコード、電話番号、リンクを捏造しない |
| スマートフォン | 幅375pxで読め、横方向にはみ出さない |
| 操作 | Tabでメインボタンに到達でき、フォーカスが見える。Enterまたはクリックで参加案内へ移動できる |
| 範囲 | 変更は`work/index.html`だけ。新しい依存関係、情報収集フォーム、外部公開はない |

[受け入れ確認テンプレート](/downloads/reading-event/review-template.md)を作業ディレクトリの外にコピーし、自分の結果を記入してください。参照ページは著者が作成したものです。著者の記録は今回のモデル出力の受け入れ確認の代わりになりません。

## ボタン不具合を再現して修正する

パック内の`fixtures/broken.html`では、ボタンが誤って`#signup`を指しています。実際のセクションは`#participation`です。ページは完成しているように見えますが、ボタンは正しい場所へ移動しません。

任意で実行します。

```sh
python3 validation/reproduce.py
```

再現スクリプトは一時ディレクトリで不具合ページを検査し、`missing-fragment`を報告して終了コード1で終わります。次に`href`だけを置き換えて再検査し、終了コード0で終わります。元のfixtureは変更しません。[保存されたログ](/downloads/reading-event/validation/recovery.json)に両方の結果があります。

ボタンを削除したり検査を無視したりして「修正」しないでください。リンク先だけを直し、実際にクリックして確認します。リンク検査スクリプトはデザイン、事実、キーボード体験を判断できないため、別々に確認してください。

## 実際の表示修正と検証範囲

著者が最初にスマートフォン表示を確認したとき、飾りの本の文字がカードからはみ出しました。狭い画面用の文字サイズと内側余白を調整し、再確認しました。デスクトップとスマートフォン表示、キーボードフォーカス、メインボタン、事実F1～F7の観察記録は[ブラウザー確認記録](/downloads/reading-event/validation/browser-review.md)にあります。

すべてのブラウザー、実機のスマートフォン、スクリーンリーダーによる一連の操作、独立した読者の完了は検証していません。サイトは公開しておらず、モデルの成功率も測定していません。公開前には、ホスティング先、公開内容、デプロイ権限を別途確認してください。

次へ：[差分を確認する](/ja/guide/quality/review-diffs/) · [失敗からの復旧演習](/ja/guide/reference/troubleshooting/failure-recovery-lab/)
