---
title: Bug 修正：どこから始めるか
description: 現在の問題に合う Bug 修正経路を選び、実行可能な資料を使う完全な事例へ進みます。
locale: ja
source_locale: zh-CN
source_revision: 27c707b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

これは短い入口ページです。完全な手順、実行可能なコード、RED / GREEN のテスト証拠、段階ごとのプロンプトは [検証付き Bug 修正](/ja/cases/use-cases/software-development/fix-a-bug-with-verification/) にまとめています。2 つのページで内容が重複し、後から不整合が生じるのを防ぐためです。

## まず、今足りない手順を判断する

| 現在の状況 | ここから始める |
|---|---|
| 「結果がおかしい」だけで、安定した再現がない | [先に診断してから修正する](/ja/cases/workflows/diagnose-before-fixing/) |
| 安定した失敗テストがある | [検証付き Bug 修正](/ja/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| 関連モジュールに詳しくない | [コードベースを理解する](/ja/cases/understand-a-codebase/) |
| 修正が終わり、マージの準備ができた | [PR をレビューする](/ja/cases/review-a-pr/) |
| テスト自体が不安定 | 先に [テストを実行する](/ja/guide/quality/run-tests/) を読み、flaky test を修正の証拠にしない |

## 最小の閉ループ

言語やフレームワークに関係なく、次の証拠チェーンを維持します。

1. 明確なコマンドで元の問題を安定して再現する。
2. 失敗したアサーション、エラー出力、入力条件を保存する。
3. 先に根本原因を説明し、その後に最小修正を行う。
4. 元の失敗テストと追加した境界テストを通過させる。
5. より広い範囲の回帰チェックを実行する。
6. 人が diff を読み、無関係な変更がないことを確認する。

第 4 歩だけで第 1 歩がなければ、テストが元の問題を対象にしている証明にはなりません。「全テストが GREEN」だけで diff レビューがなければ、変更範囲が正しい証明にもなりません。

## すぐに練習できる

リポジトリには、外部パッケージに依存しない JavaScript のショッピングカート割引例があります。

```bash
# 開始コード：1 件のテストが予期どおり失敗
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# 参考修正：3 件のテストがすべて通過
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

完全な資料は [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix) にあります。

---

**状態：** verified  
**対象製品：** CLI / IDE  
**検証根拠：** このページは入口として経路選択と安定したエンジニアリング閉ループだけを扱います。サンプルの予期された失敗と成功コマンドは、現在のリポジトリで実行して確認済みです。
**最終検証：** 2026-08-25
