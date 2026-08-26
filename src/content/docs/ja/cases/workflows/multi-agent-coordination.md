---
title: マルチ Agent 協調
description: 並列探索、分担実行、結果統合——いつ分割し、どう検証するか。
locale: ja
source_locale: zh-CN
source_revision: e4d0f69
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

マルチ Agent は、並列で疎結合なサブ問題に向きます。コーディネータなしに同一ファイルを2体が編集する用途には向きません。

## いつ分割するか

| 向く | 向かない |
|---|---|
| フロントスタイルとバックエンド API 契約を並列調査 | 同一関数を2人が変更 |
| 一方がテスト、他方がドキュメント | ロックなしの共有可変状態 |
| 複数実装案を探索 | 依存関係が未整理の強い直列依存 |

製品能力：[並列 Agent](/ja/guide/desktop-app/parallel-agents/)、[サブエージェント](/ja/guide/agent-work/subagents/)。

## 協調パターン

### パターン A：並列探索、人が選択

```text
Agent 1：案 A の長所／短所と工数
Agent 2：案 B の長所／短所と工数
あなた：1つ選び、単一 Agent で実行
```

### パターン B：パイプライン

```text
探索 Agent → 計画出力 → 実行 Agent（計画要約付き新スレッド）
```

[引き継ぎと再開](/ja/guide/agent-work/handoff-and-resume/) で構造化要約を渡す——チャット全文を貼らない。

### パターン C：worktree 分離

別 [git worktree](/ja/guide/desktop-app/worktrees/) で別ブランチを別 Agent が編集。最後に人がマージ。

## 協調ルール（AGENTS.md 推奨）

- 各 Agent に明示的なディレクトリ境界
- 並列 `git push` 禁止
- マージ前に CI を1回
- コンフリクトは人が解決——Agent に推測させない

## 受け入れ

- [ ] 各サブ Agent に独自の完了定義
- [ ] マージ後フルテストスイート合格
- [ ] diff が対応サブタスク説明にトレース可能

## よくあるミス

- 3 並列 Agent が `package.json` を編集
- 統合ステップなし——どの結論に従うか不明

---

**状態：** verified  
**対象製品：** App / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers のマルチ Agent／サブエージェント公開資料と、本ハンドブックの検証済みサブエージェント、引き継ぎ、並列作業章を照合。分割タイミング、境界分離、人による統合・検証の安定方法のみで、現行ベータや UI 入口の固定契約には依存しない。
