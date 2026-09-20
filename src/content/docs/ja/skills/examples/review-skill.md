---
title: 例：差分範囲を明示するレビュー Skill
description: scoped-review パッケージをダウンロードし、ステージ済み・未ステージ・ブランチのレビューを区別して、見落としやすい Git の状況を再現します。
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 差分収集器の 7 件の回帰検査と Skill の構造検査に合格しました。起動例とレビュー結果は著者が設計したもので、複数モデルによる自動ルーティングや欠陥検出率の実験は行っていません。
  environment: Python 3.12.11 / Git / Darwin arm64。一時的な合成リポジトリを使用し、外部依存関係はありません。
  evidence:
  - label: 実際の実行範囲と限界
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill、収集器、範囲の説明、合成入力、レビューの参考、回帰テスト
  license: CC0-1.0
  version: 1.0.0
locale: ja
source_locale: zh-CN
source_revision: e29d1b3
translation_status: draft
translated_at: '2026-09-20'
---

レビュー前に比較対象を明確にします。この Skill は「現在の未コミット変更」を「main に対するコミット」と取り違えたり、作業ツリーが正常に見えるためにステージ領域のエラーを見落としたりするのを防ぎます。

[scoped-review v1.0.0 をダウンロード](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [SKILL.md を見る](/downloads/skills/scoped-review/SKILL.md) · [インストールと使用方法](/downloads/skills/scoped-review/README.md)

## できること

| ユーザーの依頼 | 収集範囲 | 含まれないもの |
|---|---|---|
| ステージ済み変更のみレビュー | HEAD → インデックス | 未ステージの内容 |
| 未ステージ変更のみレビュー | インデックス → 作業ツリー | ステージ済みパッチ |
| 現在の未コミット変更をレビュー | 上記 2 つのパッチを分けて保持し、新規ファイルを列挙 | 新規ファイルの内容は別途読む |
| 指定ブランチに対するコミットをレビュー | 一意のマージベース → HEAD | ローカルの未コミット内容 |

`main` を既定の基準とは推測しません。基準が存在しなければ、範囲を黙って変えずエラーにします。収集器は証拠を提供しますが、欠陥の判断には関連するコードとテストも必要です。

## インストールと最初の呼び出し

Python 3.10 以降、Git、少なくとも 1 件のコミットがあるローカルの練習リポジトリが必要です。展開した `scoped-review/` を対象プロジェクトの `.agents/skills/` に置き、入口が `.agents/skills/scoped-review/SKILL.md` であることを確認します。同名の Skill があれば上書き前に比較してください。

ローカル Skill の検出と入口は[公式ガイド](https://learn.chatgpt.com/docs/build-skills)に従ってください。インストール後に選択可能か確認し、明示的に呼び出します。

```text
$scoped-review この練習リポジトリの現在の未コミットのコード変更をレビューしてください。
ファイルは変更しないでください。まず findings を挙げ、ステージ済み、未ステージ、
新規ファイルのカバー範囲を説明してください。
```

これは教材で、個人設定に自動インストールされません。まだインストールしない場合は、同梱スクリプトを直接実行して収集範囲を確認できます。

## 見落としやすい状況を再現する

合成入力は `fixtures/scenario.json` にあります。

1. 基準となる割引式は正しい。
2. 誤った式 `amount * (1 - percent)` をステージする。
3. 作業ツリーでは正しい式 `amount * (1 - percent / 100)` に戻すが、その修正はステージしない。

この時点では `git diff HEAD` に変更が見えない場合がありますが、インデックスをコミットすると誤りが入ります。`amount=40, percent=10` ではステージ済みの式は 36 ではなく -360 になります。

正しいレビューでは、ステージ済みの式の誤りと未ステージのパッチがそれを直すことを両方指摘します。[著者による詳しい参考](/downloads/skills/scoped-review/fixtures/expected-review.md)にはブランチモードをこのローカル問題と混ぜない理由もあります。これは実際のモデル出力ではありません。

## 同梱の検証を実行する

展開した Skill ディレクトリで実行します。

```sh
python3 validation/test_scopes.py
```

一時 Git リポジトリを使う 7 件のテストで、範囲、見落としの回帰、無効な基準の拒否、新規ファイル一覧、レビュー対象リポジトリが変更されないことを確認します。成功時の終了コードは 0 です。実際のプロジェクトには書き込みません。

収集器をリポジトリで使うには：

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

パスはレビューが許可されたリポジトリに置き換えます。ブランチモードには `--base` も必要です。JSON 出力に非公開コードが含まれる可能性がありますが、自動アップロードはしません。コマンド全体は[範囲の説明](/downloads/skills/scoped-review/references/scopes.md)を参照してください。

## 起動すべきでない場合

文章の推敲や新機能の実装はこの Skill の対象外です。曖昧な「レビューして」は文脈から範囲を判断し、それでも不明なら質問します。[起動例](/downloads/skills/scoped-review/fixtures/trigger-cases.json)には想定される依頼が 7 種類あります。実際の自動ルーティングは測定していません。

## 完了条件と限界

- レポートに実際にレビューしたスナップショット、基準、ファイル範囲を記す。
- findings には場所、発生条件、影響、証拠を示し、スタイルの好みを阻害要因にしない。
- 関連する未追跡ファイルの内容を確認するか、未レビューと明示する。バイナリ、無視対象、サブモジュールを確認済みと偽らない。
- 実行した検証と実行しなかった検証を示す。findings がないことは欠陥ゼロの保証ではない。
- レビューは報告で終了し、ファイル変更、コミット、プッシュを自動実行しない。

結果の保存には[開発者向け学習パス](/ja/guide/learning-paths/developer/)のレビュー・引き継ぎテンプレートを使えます。従来の短い `pr-review` の骨組みも構造の理解には役立ちますが、このパッケージは個人の既存版を上書きしないよう別名にしています。
