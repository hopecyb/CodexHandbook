---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "現在のトラブルシューティング入口と、ログイン、クライアント選択、結果確認、コンテキスト、権限の各章を照合しました。このページは症状から次のページへ案内する索引であり、特定のエラーや製品の動作を永続的な仕様として示すものではありません。"
  checkedAt: "2026-07-26"
title: トラブルシュート索引
description: 症状から該当チュートリアルと製品ページへ。
locale: ja
source_locale: zh-CN
source_revision: 7327724
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 110
---

問題が出ても、App、CLI、IDE、Cloud のどのページを見るべきか分からないときは、ここから方向を探せます。

症状で探す方が、サイト全体を往復するより速いことが多いです。

| 症状 | 行き先 |
|---|---|
| インストール失敗 | [デスクトップトラブルシュート](/ja/guide/desktop-app/troubleshooting/) · [CLI トラブルシュート](/ja/guide/cli/troubleshooting/) · [IDE トラブルシュート](/ja/guide/ide/troubleshooting/) |
| ログイン/認証失敗 | [ログイン](/ja/guide/getting-started/sign-in-and-authentication/) |
| どのクライアントを選ぶか分からない | [クライアント選択](/ja/guide/getting-started/choose-your-codex-client/) · [機能比較](/ja/guide/reference/feature-comparison/) |
| 結果が範囲外/品質が悪い | [結果を確認](/ja/guide/getting-started/review-the-result/) · [プロンプトデバッグ](/ja/prompts/prompt-debugging/) · [元に戻す](/ja/guide/getting-started/undo-and-recover/) |
| コンテキストが混乱 | [フォーカスを保つ](/ja/guide/context/keep-context-focused/) |
| 権限/サンドボックスの疑問 | [権限](/ja/guide/foundations/permissions-and-approvals/) · [サンドボックス](/ja/guide/foundations/sandbox-and-network/) |

## ログをたどる演習

[5つの失敗回復演習](/ja/guide/reference/troubleshooting/failure-recovery-lab/)には、ダウンロードできる入力と実際のコマンドログがあります。出典の意図しない変更、引用番号、提案と入力の対応付け、ディレクトリ範囲、状態の破損を扱います。各例に、変える要因を一つに絞った修正と回復記録があります。これらは設計されたローカル演習であり、クライアントのログイン障害やネットワーク事故ではありません。

## 問題の類が分からないとき

次で分類：

1. 「入れない」？
2. 「動かない」？
3. 「動いたが結果がおかしい」？
4. 「ツールや入口をどう選ぶか分からない」？

対応ページへより早く着地できます。

公式サポートとドキュメント：[https://developers.openai.com/codex](https://developers.openai.com/codex)
