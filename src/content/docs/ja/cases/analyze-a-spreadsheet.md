---
title: スプレッドシートを分析する
description: スプレッドシートデータをアップロードまたは参照し、集計とインサイトを得る。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

# スプレッドシートを分析する

## メタ情報

| 項目 | 内容 |
|---|---|
| 対象読者 | クリエイター / ビジネス |
| クライアント | App |
| 所要時間の目安 | 30–60 分 |

## 1. 目標と背景

**目標：** CSV/Excel のクレンジング、集計、可視化の提案を行う。

**成功基準：** 結論が再現可能であること、主要数値が元の表の行/列に遡れること。

## 2. 推奨プロンプト

```text
入力：@data/sales-q1.csv
目標：地域別に売上、前月比、Top 3 製品を集計し、異常値を特定する。
制約：元ファイルは変更しない。summary.md と任意の chart 説明を出力する。
受け入れ基準：summary の各数値に計算方法または列名の参照を明記する。
```

## 3. 検証

- 2–3 個の集計数値を抜き取り照合する
- PII がログに書き込まれたり外部送信されていないことを確認する

## 4. 関連

- [表とスプレッドシート](/guide/files-and-artifacts/tables-and-spreadsheets/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の現在の Codex use cases には「Query tabular data」「Clean and prepare messy data」が含まれています。本ページの例は CSV/Excel の読み取り専用クレンジング、集計、異常分析に焦点を当て、主要数値が元の表フィールドに遡れることを要求しており、現在の公式シナリオと一致しています。
