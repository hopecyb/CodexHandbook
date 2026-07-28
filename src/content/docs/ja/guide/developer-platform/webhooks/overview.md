---
title: Webhook 概要
description: HTTP コールバックで Codex タスク状態を内部システムに接続——イベント、署名、冪等。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

**Webhook** で、Codex または Cloud タスクの状態変化時に自社サービスへ HTTP コールバックを送り、チケット更新、Slack 通知、内部承認台を駆動できます。本章は [開発者プラットフォーム](/guide/developer-platform/) のイベント統合入口です。

## このページで扱うこと

- Webhook と SDK ポーリングの使い分け
- 一般的なイベントとペイロードフィールド（概念）
- 署名検証、リプレイ、冪等

## 何をするか

初見では：タスク状態が変わると Codex が自システムに通知し、自分で「終わったか」を繰り返し問い合わせない。

「タスク終了後に別システム動作を続ける」シーン向きです。

:::note
Webhook パス、イベント名、署名アルゴリズムは [公式 API ドキュメント](https://developers.openai.com/codex) を基準に。
:::

## よくある誤解

### Webhook はすべての自動化のデフォルト答案ではない

単発 `codex exec` なら終了コードで足り、通常 Webhook 不要。

Webhook 向き：

- 長時間タスク
- 多段オーケストレーション
- 終了後に通知や他システム駆動

### コールバックを受けたらそのまま信じてよいわけではない

署名検証、冪等、タイムアウト処理をしないと、偽造、重複配信、システム揺らぎで問題が出ます。

## いつ Webhook を使うか

| 向く | 向かない |
|---|---|
| タスク完了を内部システムに通知 | 強リアルタイムの逐字ストリーミング出力 |
| 既存イベントバスと統合 | 単純 cron は `exec` 終了コードで足りる |
| 多段編成（完了 → デプロイ起動） | 公網到達 endpoint がなくキューも使わない |

単純パイプラインは [スクリプトとパイプライン](/guide/developer-platform/non-interactive/scripts-and-pipelines/) で足りることが多い。マルチテナント製品は **SDK + Webhook** 組み合わせが一般的です。

## 典型イベント（概念）

| イベント | 用途 |
|---|---|
| `task.completed` | 結果取得、PR 状態更新 |
| `task.failed` | アラート、再試行キュー |
| `task.needs_approval` | 人工承認 UI へプッシュ |
| `review.posted` | コードレビュー結論を同期 |

ペイロードに含めるべきもの：`task_id`、状態、タイムスタンプ、リポジトリ／プロジェクト識別。**PII を含む完全 prompt を webhook body に入れない。**

## 受信側の最小要求

1. **HTTPS** エンドポイント。公式署名ヘッダ（例：`X-Signature` + HMAC）を検証
2. **冪等**：同一 `event_id` は一度だけ処理
3. **迅速 2xx**：重い処理はキューで非同期
4. **ログ脱敏**：秘密鍵と完全ユーザー入力を記録しない

示意（疑似コード）：

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## CI との関係

- CI 内 `codex exec` は通常**Webhook 不要**。終了コードで足りる
- Cloud 長時間タスク、モバイル承認シーンは webhook で内部システムへプッシュ向き

## よくあるミス

- 署名検証なし。偽造コールバック
- 処理がプラットフォームタイムアウト超過で重複配信
- webhook handler で同期的に第二回 Codex を実行
- webhook URL をクライアントフロントに露出

## 使うべきかの判断

1. タスク状態変化で能動通知が必要か
2. 終了後にシステム級の次ステップを自動接続するか
3. HTTP コールバックを安全に受けられるバックエンドがあるか

「はい」が多いほど Webhook の意味が大きいです。

## セキュリティ境界

- [脅威モデル](/guide/team-enterprise/security/threat-model/) と [acceptable use](/guide/team-enterprise/governance/acceptable-use/) を参照
- webhook secret のローテーションを運用カレンダーに

## 受け入れチェックリスト

- [ ] 署名検証失敗で 4xx を返す
- [ ] 冪等テーブルまたは dedupe key を実装
- [ ] 非同期 worker と DLQ（デッドレター）を設定
- [ ] [構造化出力](/guide/developer-platform/non-interactive/structured-output/) フィールド約束と一致

Webhook はタスク状態変化を別システムに接続する向き。署名検証、冪等、非同期処理の基礎を先に整えること。

## 参考

- OpenAI Codex / Cloud API イベントドキュメント
- KimYx0207 統合章

---

**状態：** verified  
**対象製品：** API / Cloud  
**検証根拠：** OpenAI Developers の現行開発者プラットフォームとイベント駆動統合の公開説明、および本ハンドブックで検証済みの Webhooks 分组、CI/CD、構造化出力、チームセキュリティ境界章を相互確認。「Webhook は状態通知向き。受信側は署名検証、冪等、非同期処理を行う」安定統合原則のみ確認。  
**最終検証：** 2026-07-26
