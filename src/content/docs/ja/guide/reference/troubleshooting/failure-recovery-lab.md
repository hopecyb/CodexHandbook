---
title: 実行ログで学ぶ五つの失敗復旧演習
description: 実際の CLI ログを使い、出典、引用、入力との結び付き、ディレクトリの範囲、状態ファイルの問題を、一度に一つの変数だけ変えて診断します。
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 意図的に設計した五組の失敗を実際に実行し、それぞれ一つの変数だけを修正して再実行に成功しました。元の入力ハッシュは不変です。本番環境の事故でも、モデルの成功率を測る実験でもありません。
  environment: Python 3.12.11 / Darwin arm64。一時コピーと合成入力を使用し、ネットワークやモデルは呼び出していません。
  evidence:
    - label: 五組の実行結果概要
      href: /downloads/failure-recovery/validation/summary.json
    - label: 検証範囲
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: 五種類の障害再現、必要なスクリプトと入力、修正前後のログ、実行方法
    license: CC0-1.0
    version: 1.0.0
locale: ja
source_locale: zh-CN
source_revision: fc91872
translation_status: draft
translated_at: 2026-09-20
---

最初にエラーを保存し、どの層で失敗したかを判断してから、変数を一つだけ変えて再実行します。このページでは五組の固定入力でその流れを示します。障害は作者が意図的に作り、ログは実際のコマンドライン実行から得ています。実際の顧客事故を装ったものではありません。

[復旧演習パッケージをダウンロード](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## まず再現する

Python 3.10 以降の標準ライブラリだけを使い、アカウントやネットワークは不要です。展開したディレクトリで実行します。

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

過去の証拠を上書きしないよう、出力ディレクトリはまだ存在しないものを指定してください。スクリプトは一時コピーで動作します。五組とも修正前は 0 以外、修正後は 0 で終了し、元の入力は変わりません。各ログにはコマンド、終了コード、標準出力、標準エラー出力が含まれます。一時パスは `<WORK>` に統一されます。

## 1. 出典のハッシュが一致しない

**症状：** `FAIL: Source changed: P`、終了コード 1。

**診断：** 固定された出典ファイルに誤った文章が追加されましたが、出典の索引は変わっていません。まず元資料と比較し、検査を通すためだけにハッシュを更新しないでください。

**唯一の修正：** この一つの出典ファイルを既知の元のバイト列に戻します。他の資料、記事、索引は変更しません。再実行はコード 0 で終了します。

[失敗ログ](/downloads/failure-recovery/validation/01-source-changed-before.json) · [復旧ログ](/downloads/failure-recovery/validation/01-source-changed-after.json)

実際の資料が本当に更新されたなら、版、内容、結論を確認し直し、新しい出典記録を残します。この例で古いファイルに戻すのは、誤編集が明確だからです。

## 2. 本文の引用が事実表にない

**症状：** `FAIL: Unmapped or unused claim ID`、終了コード 1。

**診断：** 本文で F1 とすべき箇所が F99 になっています。事実表に F99 はありません。P1 を見直すと、その文は引き続き F1 に対応します。

**唯一の修正：** 誤った番号だけを F1 に戻して再実行します。終了コードは 0 です。不明な引用を隠すために新しい事実表の項目を作らないでください。

[失敗ログ](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [復旧ログ](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

番号が正しくても、文章を出典が裏付けるとは限りません。文ごとに照合してください。[執筆 Skill](/ja/skills/examples/writing-skill/)も参照してください。

## 3. 振り分け案が入力と一致しない

**症状：** `FAIL: Stale input hash`、終了コード 1。

**診断：** 案に記された入力ハッシュは、現在の固定 Issue と一致しません。この演習では、入力との結び付きを検査するため、案のハッシュを意図的に壊しています。

**唯一の修正：** 現在の入力と照合済みの完全な参照案に置き換えます。入力と schema は変えず、再実行はコード 0 で終了します。モデルで Issue を再振り分けしたわけでも、ハッシュだけ再計算して古い結論を流用したわけでもありません。

[失敗ログ](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [復旧ログ](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

実際の Issue の内容が変わった場合は、その変更が結論に与える影響を分析し直してください。[Issue 振り分けの事例](/ja/cases/use-cases/team-automation/issue-triage-suggestions/)も参照してください。

## 4. 同じ状態ファイルを別のディレクトリに使う

**症状：** `State version/site mismatch`、終了コード 3。

**診断：** 状態ファイルは fixed サイトに結び付いていますが、コマンドの `--site` は broken を指しています。失敗したのは範囲チェックであり、リンク自体が突然切れたわけではありません。

**唯一の修正：** `--site` だけを元のディレクトリに戻し、状態ファイルと他の引数は維持します。再実行はコード 0 で終了し、誤った呼び出しは既存の状態を上書きしていません。

[失敗ログ](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [復旧ログ](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

本当に別のサイトを監視するなら、専用の状態を作ります。範囲保護を回避するために古い状態を削除しないでください。

## 5. 状態 JSON の破損

**症状：** JSON の解析に失敗し、実行プログラムが `stopped` と報告してコード 3 で終了します。

**診断：** 状態ファイルが途中で切れ、履歴と重複排除の基準を安全に読み込めません。プログラムは処理を拒否し、破損内容を保存したまま、黙って空の状態に戻すことはしません。

**唯一の修正：** 演習前に保存した、正常と分かっているバックアップを復元します。コマンドとサイトは変更しません。再実行はコード 0 で終了します。

[失敗ログ](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [復旧ログ](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

バックアップがない場合は、破損ファイルを保存し、実行記録を調べてから、手動で状態を再構築します。すぐに状態を削除すると、送信待ちのイベントが失われたり、候補が重複したりします。[自動化 Skill](/ja/skills/examples/automation-skill/)も参照してください。

## 自分のタスクに適用する

入力の版、実際のコマンド、完全なエラーを保存します。入力、構造、範囲、状態のどれに問題があるかを判断し、検証したい原因を一つ記し、対応する変数だけを変更します。同じ検査を再実行して結果を残します。復旧後は、終了コードだけでなく元の目標が満たされたかも確認してください。

この演習は、実際のログイン失敗、クライアントで Skill が起動しない問題、ネットワーク制限、承認の失敗を扱いません。それらは[症状別のトラブルシューティング索引](/ja/guide/reference/troubleshooting/)に戻り、実際の環境情報を保存してください。このページのスクリプトの挙動を、クライアントの動作保証とみなさないでください。
