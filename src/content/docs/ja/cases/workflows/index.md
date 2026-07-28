---
title: ワークフロー手法
description: 繰り返し可能な協働方法——単一製品 UI に縛られず、チェックポイントと受け入れを重視する。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

[プロンプト](/prompts/) は**言い方**を教えます。ワークフローは**一連の作業の組み立て方**を教えます。本章の方法は App、CLI、IDE、Cloud に適用できます。

## なぜワークフローが必要か

外部チュートリアルでは「1 回の会話で完了」という物語がよく見られますが、実際のプロジェクトでは次のような流れが一般的です。

```text
探索 → 計画 → 実行 → 検証 →（場合により）引き継ぎまたは自動化
```

チェックポイントがないと、誤ったディレクトリの変更、テスト未実行、誤マージ、コンテキスト枯渇後の結論喪失が起きやすくなります。

## コアワークフロー

| ワークフロー | 解決する問題 |
|---|---|
| [探索—計画—実行—検証](/cases/workflows/explore-plan-execute-verify/) | 汎用の主経路。ほとんどのタスクに適する |
| [構築前にブレインストーム](/cases/workflows/brainstorm-before-building/) | 案が未定のときの発散と収束 |
| [仕様駆動の作業](/cases/workflows/specification-driven-work/) | 受け入れ可能な仕様を先に書いてから実装 |
| [テスト駆動の作業](/cases/workflows/test-driven-work/) | テスト先行で実装を駆動 |
| [人間による承認パターン](/cases/workflows/human-approval-patterns/) | いつ止まり、いつ承認し、いつ拒否するか |
| [診断してから修正](/cases/workflows/diagnose-before-fixing/) | 「推測修正」を避ける |
| [マージ前レビュー](/cases/workflows/review-before-merge/) | PR マージ前の構造化レビュー |
| [出典付きリサーチ](/cases/workflows/research-with-sources/) | 検索、比較、出典の検証 |
| [成果物優先](/cases/workflows/artifact-first-work/) | まず成果物を約束し、ステップを逆算 |
| [複数 Agent 協働](/cases/workflows/multi-agent-coordination/) | 並列と分担 |
| [長タスク管理](/cases/workflows/long-running-task-management/) | セッションをまたぐチェックポイントと終了条件 |
| [失敗からの回復](/cases/workflows/failure-recovery/) | 逸脱、テスト失敗時のロールバック |
| [Skill として蓄積](/cases/workflows/turn-a-workflow-into-a-skill/) | 繰り返しフローを Skill として記述 |

## ワークフロー関連のその他の章

- 品質：[コア能力 · 品質と検証](/guide/quality/)
- Agent：[計画](/guide/agent-work/planning/)、[サブ Agent](/guide/agent-work/subagents/)
- 蓄積：[Skill](/skills/overview/)、[AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- ケース：[シナリオとケースライブラリ](/cases/use-cases/)

## 設計原則

1. **各段階に成果物がある**：計画、diff、テストレポート、意思決定記録
2. **デフォルトは小さなステップ**：一度の巨大な変更より、レビュー可能な増分
3. **失敗から回復可能**：取り消し方法、スレッドをフォークして続行する方法を知っている
4. **蓄積できるものは蓄積する**：3 回目の繰り返しフローは Skill またはテンプレートに書く

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 本ハンドブックの現在検証済みのプロンプト、品質、Agent 作業、Skills 各章を相互参照して再確認済み。本ページは方法のナビゲーションと段階的チェックポイントの説明のみを担い、具体的なクライアントフローを長期契約として記述しません。
