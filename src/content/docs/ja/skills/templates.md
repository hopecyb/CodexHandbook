---
title: templates/ ディレクトリ
description: Skill 内で出力テンプレートとレポート骨組みを提供する。
locale: ja
source_locale: zh-CN
source_revision: 9f93d04
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`templates/` は体裁を省くためだけではありません。実務的には、毎回即興せず Skill 出力を安定させる役割があります。

`references/` が**入力時に何を参照するか**寄りなら、`templates/` は**出力がどう見えるか**寄りです。固定構造と再確認しやすさに向きます。

# templates/ ディレクトリ

`templates/` には Skill が再利用する出力形式——レビューレポート、changelog 骨組み、調査比較表など——を置きます。

## 例

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

`SKILL.md`：「templates/review-report.md の構造でレビュー結論を出力する。」

## 役割

- `SKILL.md` がプロセス
- `templates/` が結果の見た目

単純に：

- Skill が**やり方**を決める
- template が**見せ方**を決める

次の問題を減らします。

- 毎回構造が違う
- 情報はあるが読みにくく、比較・監査しにくい

## いつ templates/ が価値あるか

似た見た目の結果が毎回欲しいならテンプレート化。例：

- レビューレポート
- changelog
- 調査比較表
- リリースチェックリスト

最初の Skill に `templates/` は必須ではありません。  
「この構造で出力して」と繰り返し言うなら抽出の価値があります。

## よくある誤解

### 1. テンプレートは見た目のためだけ

安定性・比較しやすさ・監査しやすさにも効きます。

### 2. テンプレートがあれば SKILL.md に出力要件は不要

依然として必要です。

`SKILL.md` はいつテンプレートを使うか、必須フィールドは何かを書きます。

### 3. すべての出力にテンプレートが要る

必ずしもそうではありません。

出力がほとんど繰り返されない、構造差が大きいなら、無理にテンプレート化すると窮屈になります。

## いつ templates/ を単独で作るか

「この構造で出力して」を2〜3回連続で言ったら `templates/` 化を検討。

`templates/` の核心価値は、再利用と再確認のための安定した出力構造です。

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 現在の Codex ランタイムはスキル内の同梱ファイル利用をガイド可能。本ページは出力テンプレートの安定した書き方で、現行クライアント UI やインストール手順に依存しない。
