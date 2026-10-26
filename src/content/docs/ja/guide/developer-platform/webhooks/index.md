---
legacyVerification:
  status: verified
  products: API / Cloud
  basis: 本リポジトリ現行 webhooks サブ章の構造と入口リンクを相互確認。Webhook が統合で「イベントトリガー」役を担うことのみ説明。具体イベントフィールドや実装細部を固定契約として書かない。
  checkedAt: '2026-07-26'
title: Webhooks
description: イベントトリガー統合の説明ページ——Webhook は通知を受け取る。ワークフロー設計の代替ではない。
locale: ja
source_locale: zh-CN
source_revision: "68cb29b"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
---

`Webhook` は抽象的に聞こえますが、単純に言えば**何かが起きたとき、システムがあなたに通知を送る**仕組みです。

Codex 統合では「外部イベントが来たら、後続フローをどう起動するか」を解きます。

## 本グループの入口

- [Webhook とタスクイベントの境界](/ja/guide/developer-platform/webhooks/overview/)：ローカルの実行結果、App Server のイベント、自作の HTTP コールバックを区別します。この節では、未検証の統一的な Cloud Webhook 契約は提示しません。

## 本グループの内容

- 外部システムがイベントをどうプッシュするか
- イベント到着後の後続フロー接続
- Webhook はトリガーだけで、自動化の仕組み全体ではない理由

Webhook はドアベルのようなもの。「何かが起きた」と知らせる。後処理は自分でフローを接続する。
