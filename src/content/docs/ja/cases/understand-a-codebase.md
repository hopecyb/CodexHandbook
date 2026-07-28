---
title: コードベースを理解する
description: 読み取り専用で未知のリポジトリを探索し、行動可能な認知マップを構築する。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

# コードベースを理解する

## メタ情報

| 項目 | 内容 |
|---|---|
| 対象読者 | 開発者 |
| クライアント | CLI / IDE |
| 所要時間の目安 | 30–60 分 |

## 1. 目標と背景

**目標：** 変更前にモジュール境界、エントリポイント、リスク領域を把握する。

**成功基準：** 「リクエストからレスポンスまで」または「コマンドから出力まで」の主経路を他者に説明できること。

## 2. 推奨プロンプト

```text
まだコードを変更しないでください。@src/ と @README を読み、8 項目以内で説明してください：
1. プロジェクトの目的と技術スタック
2. 主要ディレクトリの役割
3. 起動/テストのエントリポイント
4. 【私の目標】に最も関連する 3 ファイル
5. 確認が必要な 3 つの質問
```

## 3. 検証

- 実際の `package.json` / エントリファイルと照合して抜き取り確認する
- 結論を issue または `AGENTS.md` の要約に記録する

## 4. 関連

- [理解テンプレート](/prompts/templates/understand/)
- [探索—計画—実行—検証](/cases/workflows/explore-plan-execute-verify/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の現在の Codex use cases には「Understand large codebases」が含まれており、主経路の追跡、重要モジュールの特定、関連ファイルの迅速な発見が重点です。本ページの例は読み取り専用の探索シナリオであり、公式の現在の位置づけと一致しています。
