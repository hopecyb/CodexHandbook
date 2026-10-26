---
title: ルール
description: allow/deny、コマンドルール、チーム方針の説明ページ——何を止め、何を注意させるかを先に分ける。
locale: ja
source_locale: zh-CN
source_revision: "9ac6185"
translation_status: reviewed
translated_at: "2026-07-28"
reviewed_at: "2026-10-26"
legacyVerification:
  status: verified
  products: App / CLI / Cloud
  basis: 本リポジトリ現行 rules サブ章の構造と入口リンクを相互確認。allow/deny、コマンドルール、チームルールの分類ごとのナビゲーションのみ。具体ルール実装やデフォルト遮断挙動は単独では宣言しない。
  checkedAt: "2026-07-26"
---

ルールグループは「Codex にもう少し注意を書く」と誤解されがちです。

より正確には：**どの動作をデフォルトで許可し、何を止め、何をチーム標準で統一するか**を解きます。

## 推奨順序

1. [許可と拒否パターン](/ja/guide/customization/rules/allow-and-deny-patterns/)
2. [コマンドルール](/ja/guide/customization/rules/command-rules/)
3. [チームルール](/ja/guide/customization/rules/team-rules/)

## このグループが助けること

- どの動作を直接阻止すべきか
- どの制限を口頭注意ではなく明確なルールにすべきか
- チームで同類リスクに同じ境界をどう揃えるか

ルールは境界を明確にし、システムに境界を守らせるためのものです。
