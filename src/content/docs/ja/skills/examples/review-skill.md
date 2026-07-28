---
title: "例：レビュー Skill"
description: pr-review ベースの Skill 例。チーム再利用や調整に向く。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

# 例：レビュー Skill

本例は [最初の Skill を作成する](/skills/create-your-first-skill/) の `pr-review` に対応。チーム需要に合わせて調整可能。

## SKILL.md

```md
---
name: pr-review
description: git diff をレビューし、ブロック問題、テスト不足、スタイル提案を列挙する。ユーザーが review、レビュー、マージ前チェックに言及したときに使用。新機能実装には使わない。
---

# PR レビュー

## 入力
- デフォルト比較ブランチ：main（なければデフォルトブランチ）

## フロー
1. 変更ファイルと変更タイプ（機能/修正/リファクタ/ドキュメント）を列挙
2. 各ロジック変更について：テスト不足、API 破壊の有無を確認
3. 秘密鍵、デバッグログ、過大な無関係 diff の有無をチェック
4. 出力：🔴 ブロック / 🟡 提案 / 🟢 通過

## 禁止
- git push しない
- 未議論の公開 API を変更しない
```

## 試用

```text
$pr-review 未コミットの変更をレビューしてください
```

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** diff をレビューし構造化結論を出力するのは現行 Codex の典型シーン。本ページは示意の `SKILL.md` 骨組みであり、特定の変わりやすい UI に依存しない。
