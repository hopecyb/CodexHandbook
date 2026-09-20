---
caseCategory: team
directoryOrder: 100
title: 事例：ドキュメントのリンク検査と失敗からの復旧
description: 静的 HTML のリンク検査教材をダウンロードし、欠落したページと無効なアンカーを段階的に修正して、定期実行の準備をします。
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: スクリプトの 7 件のテストに合格しました。一時コピーで 1 件ずつ修正すると失敗数は 2、1、0 と減りました。外部リンクのオンライン確認、実際の CI やスケジューラーの実行はしていません。
  environment: Python 3.12.11 / Darwin arm64。標準ライブラリと独自の合成静的 HTML を使用し、トークンは使用していません。
  evidence:
  - label: 実際の実行・復旧記録
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: リンク検査スクリプト、故障入力、参考修正、テスト、段階的復旧記録
  license: CC0-1.0
  version: 1.0.0
locale: ja
source_locale: zh-CN
source_revision: 0d21aa9
translation_status: draft
translated_at: '2026-09-20'
---

定期検査を設定する前に、スクリプトが本当に問題を発見し、何を調べたか説明できることを確認します。この演習は意図的なリンク切れ 2 件から始めます。対象を一つずつ直し、結果の変化を観察します。

[演習パッケージをダウンロード](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [実際の復旧記録](/downloads/docs-link-audit/validation/recovery.json)

## まず故障サンプルを実行する

Python 3.10 以降が必要です。外部依存関係、API キー、ネットワーク接続は不要です。展開したディレクトリで実行します。

```sh
python3 scripts/check_links.py fixtures/site
```

終了コードは 1 です。レポートにはファイル、行番号、URL、理由が記載されます。`index.html` の 4 行目にある `/missing/` には対応するページがなく、5 行目の `#old-anchor` は対象ページに存在しません。別の外部リンクは `unchecked` に入り、確認済みとして黙って扱われることはありません。

## 一度に一つずつ修正する

`fixtures/site` を自分の `work/` にコピーし、元の入力を残します。まず `/missing/` を `/guide/` に変え、次を実行します。

```sh
python3 scripts/check_links.py work
```

まだ終了コード 1 ですが、残るのはアンカーの問題だけです。次に `#old-anchor` を `#install` に変えて再実行すると、終了コードは 0 になります。`solution/site` と[人によるレビューの参考](/downloads/docs-link-audit/solution/review.md)を見比べ、他の内容を変えていないか確認します。

著者の実際の検査では失敗数が順に 2、1、0 となり、元のサンプルのハッシュは変わりませんでした。[修正前の JSON](/downloads/docs-link-audit/validation/stage-0.json) · [修正後の JSON](/downloads/docs-link-audit/validation/stage-2.json)

## 結果と限界を理解する

| 結果 | 意味 | 次の手順 |
|---|---|---|
| 終了 0 | ローカル参照は合格 | `unchecked` を読む。外部リンクの到達性は証明されない |
| 終了 1 | 欠落ページ、アンカー、範囲外パスを検出 | 各リンクの意図を確認してから修正する |
| 終了 2 | 検査を完了できなかった | ディレクトリ、ビルド出力、読み取りエラー、未対応の `base` タグを確認する |

スクリプトはビルド済み HTML を読み、ディレクトリの `index.html`、相対パス、ルートパス、HTML アンカーに対応します。動的 JavaScript ルート、CSS URL、`srcset`、フレームワーク固有の書き換えは解析しません。`base href` がある場合は相対パスの誤解釈を避けるため停止します。外部 URL と他のプロトコルは未確認と明示します。

同梱の 7 件のテストを実行します。

```sh
python3 validation/test_links.py
```

実際のプロジェクトでは、まずその手順に従ってビルドし、出力ディレクトリをスクリプトに渡します。このサイトには内部参照専用の検査器がすでにあります。この教材はフレームワークに必要な全検証を代替しません。

## その後、定期的な手順に組み込む

既存のスケジューラーに「プロジェクトをビルド → リンクを検査 → 終了コードと JSON を保存」を設定し、作業ディレクトリと依存環境を固定します。ビルド失敗時は古い出力を読まずに停止します。同じ記録への並行書き込みを避けます。

まず手動で一度実行し、次に目的のスケジュール環境で手動起動してから定期設定します。前回と比較し、変化がなければ通知せず、新規失敗・検査エラー・復旧があれば変更概要を準備します。実際の通知送信には別途、許可された範囲が適用されます。

このパッケージは定期タスクの作成、通知送信、実サイトの変更、CI 実行をしていません。ここでのスケジュール手順は導入ガイドであり、実際のスケジューラー実行の証拠ではありません。次に[定期タスクのガイド](/ja/skills/automations/scheduled-tasks/)を参照してください。

## 外部リンクの扱い

外部リンクには、別途許可された検査範囲と頻度を設けます。404、認証制限、タイムアウト、一時的なサービスエラーは意味が異なります。1 回のアクセス失敗だけでリンクを削除すべきではありません。このパッケージは実際の外部リンクを検査せず、模擬応答を実ネットワーク障害として提示していません。

[Issue 振り分け演習](/ja/cases/use-cases/team-automation/issue-triage-suggestions/)と組み合わせる場合は、チケット作成を判断する前に、ローカルレポートと人によるレビュー意見を用意してください。
