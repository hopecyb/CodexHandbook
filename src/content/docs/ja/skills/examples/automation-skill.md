---
title: '例：変化だけを記録する自動化Skill'
description: quiet-link-monitorをダウンロードし、繰り返しの検査、障害からの復旧、永続イベント、停止動作を手動で確認します。
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 8件の状態テストと3回のCLI演習に合格しました。同じ障害では新しいイベントを作らず、修正後には復旧を記録します。実際のスケジュール実行、モデルのルーティング、メッセージ配送は検証していません。
  environment: Python 3.12.11 / Darwin arm64。一時的な架空の静的サイト、標準ライブラリのみ、ネットワークなし。
  evidence:
    - label: 実際の実行記録
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: 自動化Skill、リンク検査器、永続状態スクリプト、故障サンプル、検証記録
    license: CC0-1.0
    version: 1.0.0
locale: ja
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 6c758b9
---

検査を繰り返しても、毎回通知する必要はありません。このSkillは[リンク検査の演習](/ja/cases/use-cases/team-automation/scheduled-link-check/)を再利用し、変化、復旧、実行異常を記録します。結果が変わらなければ通知候補も増やさず、静かにします。

[quiet-link-monitor v1.0.0をダウンロード](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## インストールと手動演習

練習用プロジェクトの`.agents/skills/quiet-link-monitor/`にディレクトリ一式を置きます。同名の既存Skillを上書きしないでください。[Skillの使い方](/ja/skills/use-a-skill/)に従って選択可能であることを確認してから呼び出します。

```text
$quiet-link-monitor 同梱のサンプルを使い、障害、繰り返し検査、復旧を
演習してください。一時コピーで作業し、状態は別ファイルに保存します。
最後にイベントの変化を報告し、通知は送らないでください。
```

モデルやアカウントなしでスクリプトだけを先に実行できます。必要なのはPython 3.10以降の標準ライブラリだけです。

```sh
python3 validation/test_monitor.py
```

手動で行う場合、`fixtures/broken`を自分の`work-site`へコピーします。Skillディレクトリで続けて2回実行します。

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

最初は終了コード1で障害イベントが記録されます。2回目も終了コード1ですが、`new_event`はnullです。`fixtures/fixed`を参考に同じディレクトリを修正して再実行すると、終了コード0と`recovered`が得られます。別のサイトパスに替えて復旧を装わないでください。状態検証が範囲の変更を拒否します。

[実際の3回のCLI実行概要](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## 何を記録し、いつ停止するか

状態ファイルは検査対象ディレクトリの外に置きます。各回の結果、連続する実行エラーの回数、永続イベントを保存します。スクリプトはこのファイルと隣接するロックファイルを書き込むため、完全な読み取り専用操作ではありません。サイトの内容は変更しません。

| 状況 | 動作 |
|---|---|
| 初回から正常 | 基準状態を作成し、新しいイベントはなし |
| 初回の故障、または検出された問題の変化 | 変化イベントを保存 |
| 同じ結果の繰り返し | 新しいイベントを作らない |
| 故障を修正 | 復旧イベントを保存 |
| 検査の実行エラーが3回連続 | 停止イベントを保存し、一時停止 |
| 状態の破損、ロック競合、サイトの不一致 | 元の状態を上書きせず直ちに停止 |

リンク切れは有効な検査結果であり、実行エラーには数えません。一時停止後は通常の呼び出しでは再検査しません。原因を確認して修正し、明示的に再開します。

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

失敗を回避するためにロックや状態を自動削除しないでください。プロセスの異常終了でロックが残る場合があるため、まず実行中のプロセスがないことを確認します。[状態と復旧の説明](/downloads/skills/quiet-link-monitor/references/operations.md)には終了コード、保持、並行実行の境界が記されています。

## 通知候補は送信済みメッセージではない

スクリプトはローカルイベントだけを記録します。`delivery`はすべて`not-sent`であり、スケジュールの作成もメッセージの送信もしません。イベントごとにその記録について安定したIDがあり、同じ結果を繰り返しても同じ状態のイベントを再作成しません。

許可された送信器を接続する場合は、永続化された未配送イベントを読み、IDで重複を除き、配送確認を保存します。この回の端末に出た`new_event`だけを見ると、プロセス中断後のイベントを見落とす場合があります。このパックには送信器はなく、システムをまたぐ厳密な一回限りの配送も保証しません。

## 手動実行から定期実行へ

まずビルドの成功を確認してから最新の出力を検査します。ビルドが失敗したら停止し、古いディレクトリを検査しません。スケジュール実行では毎回同じサイトと状態ファイルを使い、並行した書き込みを防ぎます。対象環境で先に手動起動し、ログと停止動作を確認してから周期を設定します。実際の通知先チャネル、受信者、範囲は既存の許可に基づく必要があります。

実際のスケジュール実行とメッセージ配送はまだテストしていません。外部リンクは`unchecked`のままであり、ローカルで正常でも「サイトのすべてのリンクが正常」とは言えません。

## 適用範囲と受け入れ条件

ドキュメントのリンク監査を繰り返す用途に適しています。一般的な売上日報、創作、運用環境への自動インストールはこのパックの対象外です。起動例は設計上の想定であり、モデルのルーティングを測定した結果ではありません。

演習の完了には、初回の失敗、繰り返し時の静かな動作、修正後の復旧、一時停止と明示的な再開の記録が必要です。同梱の8件のテストはこうしたローカルの状態動作を検証しましたが、モデルの判断、ネットワーク到達性、本番環境での信頼性を証明しません。
