---
title: references/ ディレクトリ
description: Skill 内で長い参考ドキュメントを整理し、段階的開示を実現する。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

`references/` は毎回展開不要な長文を置き、主フローを短く保つのに向いています。

「ファイルを増やす」だけでなく、**すぐには読まなくてよいが特定ステップで必要**な資料を分け、必要時に読みます。

# references/ ディレクトリ

`SKILL.md` が長くなったら、詳細規約・API 説明・チェックリストを `references/` に移し、手順から必要に応じて参照します。

## 例

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

`SKILL.md` では：

```md
コードスタイルをレビューするときは references/style-guide.md を読み、そのルールで確認する。
```

## 役割

- `SKILL.md` が主線
- `references/` が「必要時に開く資料」

単純に言うと：

- `SKILL.md` は作業指示
- `references/` は資料棚

初読で背景に埋もれず、詳細は必要時に参照できます。

## いつ references/ に分けるか

`SKILL.md` に次があるなら分割を検討：

- 毎回場所を取る大きな規約ブロック
- 複数トピックの参考が混在
- 背景が主フローを断ち、初読で筋が追えない

最初の Skill に `references/` は必須ではありません。  
よくある順序は**まず動かし、本当に長くなったら分ける**。

## よくある誤解

### 1. references/ は単にコピーを外に出すだけではない

主フローを短く・明確に・先に実行可能に保つことが重要です。

### 2. 参考ファイルは多いほど良いわけではない

何でも `references/` に入れると、混乱がファイル間に移るだけです。

### 3. references/ があれば SKILL.md は極薄でよい

初見が実行方法を分かるよう、主プロセスは `SKILL.md` に残します。

## 原則

- 主フローは `SKILL.md`、参考は必要時読み込み
- 1 ファイル 1 トピックで保守しやすく
- references 内で SKILL.md の手順を繰り返さない

## references/ に入れる内容

「**どのルールでやるか**」に答えるなら `references/`、「**次はどのステップか**」なら主フローに残します。

`references/` は主フローを短くし、必要時に詳細を展開します。

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 現在の Codex ランタイムはスキル本文と関連資料の必要に応じた読み込みを明示。本ページは `references/` の安定したドキュメント整理原則。
