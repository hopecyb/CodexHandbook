---
title: "例：自動化 Skill"
description: 繰り返しチェックやレポート生成を Skill としてパッケージ化する。
locale: ja
source_locale: zh-CN
source_revision: 0d33e2d
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 例：自動化 Skill

## SKILL.md 骨組み

```md
---
name: daily-report
description: 昨日の変更、テスト結果、TODO を集約し、日報 Markdown を生成する。ユーザーが日報、スタンドアップ資料、進捗集約を求めたときに使用する。
---

## フロー
1. git log（指定時間範囲）と CI 状態要約を読み取る
2. 完了項目、ブロック項目、明日の計画を列挙
3. reports/daily-YYYY-MM-DD.md に出力
4. 明示的に求められない限りメールやメッセージは送信しない

## scripts/
- scripts/collect-metrics.sh（任意）
```

## 関連

- [自動化日報ケース](/ja/cases/automate-a-daily-report/)
- [スケジュールタスク](/ja/skills/automations/scheduled-tasks/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 本ページは反復集約類 Skill の示意骨組み。現行 Codex/Skills が担える安定した workflow パターンに属し、特定の自動化入口に依存しない。
