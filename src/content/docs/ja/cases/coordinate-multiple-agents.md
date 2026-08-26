---
title: 複数 Agent の調整
description: 並列探索、分担実行、結果のマージ——協働ケース。
locale: ja
source_locale: zh-CN
source_revision: 5abc786
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 複数 Agent の調整

## メタ情報

| 項目 | 内容 |
|---|---|
| 対象読者 | 開発者 / チーム |
| クライアント | デスクトップ App |
| 所要時間の目安 | タスクによる |

## 1. 目標と背景

**目標：** 並列可能なサブ問題を複数の Agent に分割し、人間が結論をマージする。

**成功基準：** 各サブ Agent に独立した完了定義があり、同じファイルを互いに上書きしていないこと。

## 2. 推奨パターン

### 並列探索、人間が選択

```text
Agent 1：案 A の長所短所と工数
Agent 2：案 B の長所短所と工数
（あなたが選択後、単一 Agent で実行）
```

### ワークツリー分離

異なる Agent が異なる [git worktree](/ja/guide/desktop-app/worktrees/) で異なるブランチを変更し、最後に人間がマージする。

## 3. 調整ルール（AGENTS.md への記載を推奨）

- 各 Agent に明確なディレクトリ境界を設定する
- 並列 `git push` を禁止する
- マージ前に CI を一括実行する

## 4. 関連

- [複数 Agent 協働](/ja/cases/workflows/multi-agent-coordination/)
- [サブ Agent](/ja/guide/agent-work/subagents/)

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Help Center の現在の Codex プラン資料は、デスクトップ App が並列 Codex agents、組み込み worktree サポート、クラウド委任をサポートすると説明しています。本ページは「並列探索、ディレクトリ境界の分離、並列 push の回避、人間による結論のマージ」という協働パターンのみをまとめており、単一の UI フローに依存しません。
