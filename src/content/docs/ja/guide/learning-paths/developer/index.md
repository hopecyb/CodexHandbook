---
title: "開発者パス：コードを読み、修正し、レビューして引き継ぐ"
description: "既存の買い物かごのバグ練習で、コード読解、赤・緑のテスト、差分レビュー、引き継ぎをつなぎ、記入用テンプレートを3つ提供します。"
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "参考練習を再実行しました。開始時は3件中1件のテストが失敗し、参考修正後は3件とも成功しました。2つのテストファイルは同一です。パスのテンプレートは著者自身が確認しましたが、独立した読者による完了テストはまだありません。"
  environment: "Node.js v22.16.0 / Darwin arm64。組み込みのnode:testを使用し、サードパーティーの依存関係はありません。"
  evidence:
    - label: "実行結果の記録"
      href: /downloads/developer-path/run-record.json
    - label: "著者のレビュー参考と範囲の制限"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /ja/guide/learning-paths/
  label: "学習パスを選ぶ"
next:
  link: /ja/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "検証付きのバグ修正を始める"
locale: ja
source_locale: zh-CN
source_revision: 22d8bd3
translation_status: draft
translated_at: 2026-09-20
---
小さな買い物かごの練習を使い、コードの説明、バグ修正、差分レビュー、証拠の引き継ぎという4つの作業を行います。すべてのクライアント、設定、マルチエージェント機能を先に学ぶ必要はありません。

前提は簡単なJavaScriptを読めて、ローカルのターミナルでNode.jsのテストを実行できることです。参考環境はNode.js 22.16.0で、追加の依存関係は不要です。CLI、IDE、またはローカルファイルとターミナルにアクセスできるクライアントを選べます。テストの動作はNode.jsによって決まります。

## コードと証拠用ディレクトリを準備する

[ハンドブックのソースリポジトリ](https://github.com/hopecyb/CodexHandbook)にある`examples/complete-workflows/developer/verified-bug-fix/`を使います。`solution/`を見ずに、先に`brief.md`と`README.md`を読んでください。詳しい手順は[検証付きでバグを修正する](/ja/cases/use-cases/software-development/fix-a-bug-with-verification/)にあります。

練習ディレクトリで実行します。

```sh
# work/ はまだ存在してはいけません。既存の練習がある場合は上書きせず、別の名前を選んでください。
cp -R starter work
mkdir -p evidence
```

修正は`work/`で行い、`starter/`は失敗する元の状態、`solution/`は参考解答として残します。以下のテンプレートを`evidence/`へ別名で保存します。ダウンロードできるテンプレートには完全なコードが含まれないため、上記リポジトリの練習と併用してください。

| 段階 | 前提 | 成果物 | 完了条件 |
|---|---|---|---|
| 1. コード読解 | `brief.md`と`starter/` | `code-map.md` | 入力、データ経路、失敗、根本原因にファイル上の根拠がある |
| 2. 修正と検証 | 根本原因と変更していないテスト | `work/cart.js`、`red.txt`、`green.txt` | 失敗を先に再現し、同じテストを成功させる |
| 3. 差分レビュー | 変更と2回のテスト出力 | `review.md`、実装差分 | 期待値とAPIを変えず、無関係な変更がない |
| 4. 引き継ぎ | 前3段階の証拠 | `handoff.md` | 引き継ぐ人が現在のファイルを見つけ、次の手順を再実行できる |

## 1. コードを読んで検証可能な地図を作る

[コード読解テンプレートをダウンロード](/downloads/developer-path/code-map-template.md)します。Codexに`brief.md`、`starter/cart.js`、`starter/cart.test.js`を読ませ、入口、データ経路、失敗を起こす入力、実際と期待の値、原因となる行、作業範囲を読み取り専用で説明させます。

結果を`evidence/code-map.md`に保存します。中心となるファイルは2つだけなので、複雑な構成図は不要です。`10`が10％を表し、誤った実装では小計40が合計-360になり、正しくは36になる理由を説明できれば完了です。

必要なら[著者の読解参考](/downloads/developer-path/code-map-reference.md)を見ても構いませんが、自分の結論は実際のコードで確かめてください。その後で実装を変更します。

## 2. 赤い結果を保存し、最小限の修正をする

以下のコマンドはすべて`verified-bug-fix/`で実行します。

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

期待する終了コードは1で、3件中1件が失敗します。`evidence/red.txt`を開き、割引テストが実際値-360、期待値36を示すことを確認してください。すべて成功したら、参考解答を使ったか、ファイルを先に変更したかを調べます。赤い状態を再現したと決めつけないでください。

実行範囲は次のように直接指定できます。

```text
brief.md と evidence/code-map.md に基づき、work/cart.js の百分率換算だけを修正してください。
関数シグネチャと work/cart.test.js のアサーションは変えず、依存関係の追加やリファクタリングもしないでください。
その後 node --test work/cart.test.js を実行し、実際の出力を evidence/green.txt に保存してください。
予想と違う結果なら失敗の証拠を残して原因を調べ、実装に合わせてアサーションを変えないでください。
変更内容とテスト結果を報告し、コミットやpushはしないでください。
```

元の3テストが終了コード0で成功し、変更が原因箇所だけに限られることが完了条件です。失敗したテストでもログは作られます。`green.txt`が存在するだけでは成功の証拠になりません。

## 3. 差分と見落としをレビューする

[レビューテンプレートをダウンロード](/downloads/developer-path/review-template.md)し、実際の比較範囲を記入します。この練習では残した`starter/`と自分の`work/`を比較します。既定で`main`とは比較せず、リポジトリに未コミットの変更があるかにも依存しません。

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

1つ目は百分率換算の差分を示すはずです。終了コード1は差分があるという意味で、コマンドの故障ではありません。2つ目は出力なしで終了コード0になるはずです。Codexに実際の差分と赤・緑のログを読み取り専用でレビューさせ、発見、根拠、未確認部分、判断を`evidence/review.md`に記録します。

テストの期待値を緩めず、APIを変えず、依存関係や無関係な変更を追加していないことを確認します。通貨の精度、税金、不正な入力は対象外です。3件の成功を本番環境の安全性と同一視しないでください。[著者のレビュー参考](/downloads/developer-path/review-reference.md)とも照合できます。

## 4. 引き継ぎを書き、ファイルから再開する

[引き継ぎテンプレートをダウンロード](/downloads/developer-path/handoff-template.md)し、`evidence/handoff.md`に現在のディレクトリ、変更ファイル、有効な制約、証拠の場所、次のコマンドと期待結果を書きます。実際のGitプロジェクトではブランチ、コミット、作業ツリーの状態も記録します。

引き継ぎ後の読み取り専用タスクは次のように書けます。

```text
evidence/handoff.md を読み、まず work/ の現在のファイルが引き継ぎ内容と一致するか確認してください。
練習のルートで node --test work/cart.test.js を実行し、実際の終了コードと概要を記録してください。
work と starter の実装とテストを比較してください。状態が違えば差を示し、過去の緑の結果を使い回さないでください。
コードを再変更せず、コミットやpushもしないでください。
```

新しいタスクで実行するか、別の協力者に確認してもらえます。自分で開き直すのは再開の練習であり、独立した人による査読ではありません。形式は[著者の引き継ぎ記録](/downloads/developer-path/handoff-reference.md)を参照してください。

引き継ぎファイルだけでコード、テスト、境界を見つけられ、現在の結果を実際に実行できれば完了です。まだ実行していなければ、記録に「引き継ぎ後の検証待ち」と残します。

## 問題が起きたら戻る場所

- ファイルが見つからない：ターミナルのディレクトリと`work/`の存在を確認し、準備に戻る。
- 赤い結果がない：元の開始状態とテストを確認する。参考解答の緑で失敗を再現したことにはならない。
- テストを変更して初めて成功した：元のアサーションを復元し、原因分析に戻る。
- 無関係な変更がある：差分を保存して修正を絞り、テストを再実行する。
- 引き継ぎがファイルと違う：現在のファイルを基準に記録を更新して続ける。

実際のプロジェクトでは、リポジトリが要求するlint、型チェック、全テストをこの証拠の構造に加えます。必要性とコマンドは実際のプロジェクトの指示で確認してください。この練習には追加のチェックはないため、成功したと書き足してはいけません。
