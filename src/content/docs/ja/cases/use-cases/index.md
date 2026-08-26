---
title: シナリオと事例ライブラリ
description: 準備から実行、検証、失敗回復、振り返りまでの実タスク一式。
locale: ja
source_locale: zh-CN
source_revision: 6349392
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

事例ライブラリが答えるのは：**「この実際の目標で Codex を最初から最後まで動かすとどう見えるか？」** 単一トピックの製品ドキュメントを補完します。

## 事例とチュートリアルの違い

| | 入門チュートリアル | 事例ライブラリ |
|---|---|---|
| 目的 | ボタンや概念を学ぶ | ある種類の実成果を届ける |
| 構造 | 製品機能別 | タスク種別 |
| 失敗処理 | しばしば省略 | 必須 |

## 使い方

1. 最も近い事例を選ぶ（準備チェックリストだけ使ってもよい）
2. [探索—計画—実行—検証](/ja/cases/workflows/explore-plan-execute-verify/) と照合
3. 終了後 [事例テンプレート](/ja/cases/use-cases/case-study-template/) で振り返り——Skill にするか判断

## 入門事例

| 領域 | 事例 | メモ |
|---|---|---|
| ソフトウェア開発 | [検証付きバグ修正](/ja/cases/use-cases/software-development/fix-a-bug-with-verification/) | 最も一般的な開発ループ |
| コンテンツ制作 | [レビュー付きドキュメント改修](/ja/cases/use-cases/content-creation/refactor-docs-with-review/) | 複数ファイルとビルド検証 |
| 調査と学習 | [競合機能マトリクス](/ja/cases/use-cases/research-and-learning/competitive-feature-matrix/) | 出典付き調査出力 |
| チーム自動化 | [定期リンクチェック](/ja/cases/use-cases/team-automation/scheduled-link-check/) · [Issue トリアージ提案](/ja/cases/use-cases/team-automation/issue-triage-suggestions/) | 軽量 CI とチケット自動化 |

コピー可能なプロンプトはリポジトリ [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts) にあります。今後も領域別事例を追加予定です。

## 貢献の方向性

- 再現可能な手順（リポジトリ、ブランチ、コマンド）
- 対象クライアントと検証日を明記
- 検証不能な「一発成功」物語は避ける

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 本リポジトリの現行事例ライブラリ構造、領域インデックス、事例テンプレート、examples プロンプト入口と照合。本ページは実タスク種別で整理された事例へのナビゲーションのみ。
