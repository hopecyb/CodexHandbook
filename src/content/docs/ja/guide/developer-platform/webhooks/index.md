---
title: Webhooks
description: イベントトリガー統合の説明ページ——Webhook は通知を受け取る。ワークフロー設計の代替ではない。
locale: ja
source_locale: zh-CN
source_revision: b718fb3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`Webhook` は抽象的に聞こえますが、単純に言えば**何かが起きたとき、システムがあなたに通知を送る**仕組みです。

Codex 統合では「外部イベントが来たら、後続フローをどう起動するか」を解きます。

## 本グループの入口

- [Webhook 概要](/ja/guide/developer-platform/webhooks/overview/)

## 本グループの内容

- 外部システムがイベントをどうプッシュするか
- イベント到着後の後続フロー接続
- Webhook はトリガーだけで、完全自動化方案ではない理由

Webhook はドアベルのようなもの。「何かが起きた」と知らせる。後処理は自分でフローを接続する。

---

**状態：** verified  
**対象製品：** API / Cloud  
**検証根拠：** 本リポジトリ現行 webhooks サブ章の構造と入口リンクを相互確認。Webhook が統合で「イベントトリガー」役を担うことのみ説明。具体イベントフィールドや実装細部を固定契約として書かない。  
**最終検証：** 2026-07-26
