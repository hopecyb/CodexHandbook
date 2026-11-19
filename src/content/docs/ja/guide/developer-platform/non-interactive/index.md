---
title: 非対話モード
description: バッチ、スクリプト、パイプラインの説明ページ——向くタスクを先に理解し、具体コマンドと出力設計を見る。
locale: ja
source_locale: zh-CN
source_revision: "2d542c9"
translation_status: stale
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI / API / Cloud
  basis: 本リポジトリ現行 non-interactive サブ章の構造と入口リンクを相互確認。「非対話モードはスクリプト、バッチ、パイプライン向き」という分類の説明のみ。具体コマンドパラメータは単独では約束しない。
  checkedAt: '2026-07-26'
---

初めて「非対話モード」を見ると、「チャット UI がない普通の Codex」と理解しがちです。

非対話モードは Codex をスクリプト、CI、バッチに入れ、一回のコマンドで安定して一件を完了させる用途に向いています。

## 推奨順序

1. [codex exec](/ja/guide/developer-platform/non-interactive/codex-exec/)
2. [スクリプトとパイプライン](/ja/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [構造化出力](/ja/guide/developer-platform/non-interactive/structured-output/)
4. [終了コードと再試行](/ja/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## このグループが解くこと

- 一回のタスクをコマンドラインステップにする方法
- CI が成功、失敗、再試行をどう判断するか
- 出力を後続スクリプトが処理しやすくする方法

スクリプトやパイプラインで結果を安定して受け取るための方式です。時間をかけて対話を重ねる用途には向いていません。
