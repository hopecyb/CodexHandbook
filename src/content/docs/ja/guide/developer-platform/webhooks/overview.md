---
title: Webhook とタスクイベントの境界
description: Codex のローカル実行結果、App Server イベント、自分で設計する HTTP コールバックを区別する。
contentType: reference
audiences:
- developer
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: SDK と App Server の実行・イベントモデルを確認した。HTTP コールバックは自作構成への提案であり、統一された Codex Cloud Webhook 契約の存在を主張しない。
  evidence:
  - label: SDK 公式文書
    href: https://learn.chatgpt.com/docs/codex-sdk
  - label: App Server のプロトコルとイベント
    href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: ja
source_locale: zh-CN
source_revision: "8a84ab8"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

タスク終了後はプログラムの戻り値、プロセスの終了状態、イベントストリーム、HTTP コールバックで内部システムに知らせられる。まず送信者とプロトコルを決め、それから Webhook が必要か判断する。

## 3つの仕組みを混同しない

| 仕組み | 受信方法 | 境界 |
|---|---|---|
| ローカル SDK / CLI 実行 | プログラムの結果やプロセス状態 | ホスト型 HTTP コールバック API ではない |
| App Server イベント | 接続上の JSON-RPC 通知 | プロトコルに沿って接続、初期化、メッセージ処理が必要 |
| 自作 runner のコールバック | 自分のサービスが送る HTTP 要求 | イベント名、署名、再試行、保存を自分で定義する |

App Server の `turn/completed` はプロトコル通知であり、最終状態は完了、中断、失敗のいずれかになりうる。イベント名だけでデプロイせず、状態と業務上の結果を確認する。[公式イベント説明](https://learn.chatgpt.com/docs/app-server)を参照。

このページでは統一された Codex Cloud の Webhook 登録エンドポイント、署名ヘッダー、`task.completed` イベント契約を確認していない。そのため、URL、Header、イベント表を公式インターフェースとして提示しない。特定の製品が Webhook を提供する場合は、その製品のバージョン付き文書に従う。

## 自作コールバックが必要な場合

一回の CI タスクなら、通常は終了状態と保存した出力から次へ進める。「非同期」であるだけでは公開受信口は不要。

複数プロセスでタスクをスケジュールし、終了後にチケットを更新するなら、次の内部経路を設計できる。

```text
自前のキュー → 管理下の runner が SDK/CLI を実行 → 結果と状態を保存
                                              → 自前の通知サービス → 内部チケット
```

これは当サイトの構成案であり、SDK 付属のデプロイ機能ではない。実行場所と統合境界は[SDK 概要](/ja/guide/developer-platform/sdk-overview/)を参照。

## 自作プロトコルに必要な定義

- **本人確認と完全性：** 受信者が送信者を検証する方法を決め、検討済みの認証方式を使う。架空の「公式署名ヘッダー」を作らない。
- **安定した ID と重複排除：** タスク ID、イベント ID、試行回数を記録し、重複配送で外部効果を重ねない。
- **状態と版：** 実行の完了、失敗、中断と業務上の受け入れ結果を区別し、ペイロードに版を付ける。
- **確実な受信：** イベントを確実に保存またはキューへ入れてから受信確認する。失敗時は再試行できるようにし、成功を返してからイベントを失わない。
- **データ範囲：** 下流に必要な要約と安全な参照だけを送り、ログに資格情報を残さない。
- **停止条件：** 再試行上限、人への引き継ぎ、後続操作を取り消す仕組みを定める。

これらは実装・検証すべき設計要件であり、すぐに実行できる例ではない。このページはチケットを自動接続したり、メッセージを送ったり、デプロイを作成したりしない。

## 最小受け入れシナリオ

テスト環境で成功、実行失敗、取り消し、重複イベント、誤った本人確認、受信側の一時停止を最低限確認する。重複配送が業務効果を1回しか起こさないこと、取り消しを成功と扱わないこと、受け入れ検証を終えていない生成結果を直接公開しないことを確認する。

練習には[Issue 振り分け事例](/ja/cases/use-cases/team-automation/issue-triage-suggestions/)と[定期リンクチェック](/ja/cases/use-cases/team-automation/scheduled-link-check/)を利用できる。各資料の状態はそれぞれのページを参照。
