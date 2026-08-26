---
title: "例：執筆 Skill"
description: 調査、大纲、原稿、推敲を再利用可能な執筆フローに整理する。
locale: ja
source_locale: zh-CN
source_revision: f24afeb
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 例：執筆 Skill

## SKILL.md 骨組み

```md
---
name: article-writer
description: 大纲に沿って技術記事を執筆。調査、原稿、推敲を含む。ユーザーがブログ、チュートリアル、記事執筆を求めたときに使用する。
---

## フロー
1. 読者、長さ、トーン、禁止事項を確認
2. 資料不足なら先に大纲を列挙し、補足待ち箇所をマーク
3. 節ごとに執筆。必要なら重要段落後に方向確認
4. 全文完成後に事実とリンクをチェック
5. 指定パスに最終稿を出力

## 禁止
- 引用やデータを捏造しない
- 承認なく外部プラットフォームに公開しない
```

## 関連

- [記事執筆ケース](/ja/cases/write-an-article/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 本ページは示意の `SKILL.md` 骨組み。執筆フローで手順と禁止事項を整理しており、Skills を再利用可能な workflow として定義する現行説明と一致。
