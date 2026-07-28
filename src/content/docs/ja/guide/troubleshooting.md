---
title: トラブルシューティング
description: 症状から該当チュートリアルと製品ページへ案内する。
sidebar:
  order: 18
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

問題が起きていて、まだ種類がわからないときは、このページから入れます。

最初から CLI、IDE、Cloud、権限、プロンプトのどれかと決める必要はありません。まず症状で分類し、該当章へ進んでください。

## ここでできること

- 問題が起きたとき、最初にどこへ振り分けるか
- エラー種別がわからないときの最小の始め方
- インストール、権限、コンテキスト、タスク記述のどれに当たるか

# トラブルシューティング

| 症状 | 行き先 |
|---|---|
| インストール失敗 | [デスクトップのトラブルシューティング](/guide/desktop-app/troubleshooting/) · [CLI トラブルシューティング](/guide/cli/troubleshooting/) · [IDE トラブルシューティング](/guide/ide/troubleshooting/) |
| ログイン / 認証失敗 | [ログイン](/guide/getting-started/sign-in-and-authentication/) |
| どのクライアントを選ぶかわからない | [クライアントの選び方](/guide/choose-your-client/) · [機能対照](/guide/reference/feature-comparison/) |
| 結果が範囲外 / 品質が悪い | [最初のタスク事例](/cases/first-task/) · [プロンプトのデバッグ](/prompts/prompt-debugging/) · [元に戻す](/guide/getting-started/undo-and-recover/) |
| コンテキストが混乱 | [焦点を保つ](/guide/context/keep-context-focused/) |
| 権限 / サンドボックスの疑問 | [権限とサンドボックス](/guide/permissions-and-sandbox/) |

## どこから調べるかわからないときの分け方

初めてのトラブルシューティングでは、次のどれかを先に判断します。

- そもそも始められない
- 始められるが途中でエラー
- エラーはないが結果がおかしい
- エラーではなく、入口の選び方やタスクの出し方がわからない

この 4 類型に分けると、あとの特定はだいたい速くなります。

## よくある誤解

### 1. トラブルシューティングには専門用語が先に必要

必要ありません。

初回は用語より、まず問題を大分類することの方が重要です。

### 2. エラーがなければトラブルシューティングの対象ではない

「結果がおかしい」「いつもずれる」「始め方がわからない」も、振り分けが必要な問題です。

### 3. 困ったらとりあえずいろいろなページをクリックする

多くの場合、一度止まって種類を判断してから該当ページへ行く方がよいです。

トラブルシューティングは、すぐ直すことより先に分類することから始めます。

参考：[FAQ](/guide/reference/faq/) · [エラーリファレンス](/guide/reference/error-reference/) · [公式 Codex ドキュメント](https://developers.openai.com/codex)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** 本ページは、インストール、ログイン、権限、コンテキスト、結果品質の各章へ症状で振り分けるナビゲーションに限定。リンク先パスは個別確認済み。具体的なエラーコード、バージョン、UI 文言には依存しない。  
**最終検証：** 2026-07-26
