---
title: 学習パス
description: 役割ごとに読む順序を整理し、正本の本文へリンクします。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 5
---

学習パスは **順序の整理だけ** を行い、製品マニュアルや能力トピックの長文を複製しません。

初めて「学習パス」の章を見ると、ただのディレクトリが増えただけに感じるかもしれません。主に答えているのは、今あなたがどのタイプのユーザーに近いか、そして次にどの順序で読むべきかです。

この章は新しい知識を補う役割ではなく、遠回りを減らすことを主な目的としています。

## この章で扱うこと

- 初心者、クリエイター、開発者、チーム推進者のどれに当てはまるか、どのルートを進むべきか
- 役割ごとに読む順序がどう違うか
- 今読む価値がある内容と、あとで補えばよい内容

## MVP 利用可能パス

- **初心者（完全な 5 ステップ）**
  1. [Codex と対話する](/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [ファイルを扱う](/guide/learning-paths/beginner/02-work-with-files/)
  3. [明確なタスクを与える](/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [結果をレビューする](/guide/learning-paths/beginner/04-review-results/)
  5. [最初の小さなプロジェクトを完了する](/guide/learning-paths/beginner/05-complete-first-project/)

## 概要（詳細ステップは今後追加）

- [クリエイター](/guide/learning-paths/creator/)
- [開発者](/guide/learning-paths/developer/)
- [チーム](/guide/learning-paths/team/)

## 高度な操作者パス

小さなタスクを完了できるようになったら、次はコマンドをさらに覚えることではなく、複数の能力を安定したワークフローとして組み合わせることです。

| ステップ | テーマ | 先に読むもの |
|---|---|---|
| 1 | すばやい入口 | [スラッシュコマンドとクイック入口](/guide/reference/slash-commands/) |
| 2 | 永続的なコンテキスト | [AGENTS.md](/guide/customization/agents-md/) と [メモリと永続コンテキスト](/guide/customization/memories-and-persistent-context/) |
| 3 | 再利用できるワークフロー | [Skills 概要](/skills/overview/) と [Skill の構造](/skills/skill-anatomy/) |
| 4 | 独立したサブタスク | [サブエージェント](/guide/agent-work/subagents/) と [マルチ Agent 協調](/cases/workflows/multi-agent-coordination/) |
| 5 | 外部システム | [MCP 概要](/skills/mcp/mcp-overview/) |
| 6 | 自動ガードレール | [Hooks 概要](/skills/hooks/hooks-overview/) |
| 7 | チーム配布 | [Plugins 概要](/skills/plugins/plugins-overview/) |
| 8 | 復元とレビュー | [取り消しと復元](/guide/getting-started/undo-and-recover/) と [Diff をレビューする](/guide/quality/review-diffs/) |

このパスは、「たまに Codex に頼む」状態から「チームで繰り返せる小さな仕組み」へ進むためのものです。プロジェクト指示が長期ルールを定め、Skill が方法を定め、MCP が外部ツールを提供し、サブエージェントが境界の明確な作業を分担し、Hook が要所を守り、Plugin が一式を配布します。

## よくある誤解

### 1. 学習パスとマニュアル本文は重複している

本文は内容を説明し、学習パスは今どのページを読むべきかを示します。

### 2. まず固定の一種の役割に自分を当てはめなければならない

判断すべきは一点だけです。  
**今いちばん解決したい主な問題は何か。**

### 3. 一つのパスは最初から最後まで学び抜かなければならず、飛ばせない

パスは推奨順序であり、強制フローではありません。実際の利用では、具体的な問題を抱えて他の章に戻ることもできます。

## 迷ったときの選び方

どのパスを進むべきか迷ったら、次の方法で選べます。

- まだ初回の完全なタスクを通していない：[初心者パス](/guide/learning-paths/beginner/)
- 主にコンテンツ作成、図文、デモをしたい：[クリエイターパス](/guide/learning-paths/creator/)
- 主にコード変更、バグ修正、プロジェクト対応をしたい：[開発者パス](/guide/learning-paths/developer/)
- 主にチームでの導入方法やリスク管理を考えている：[チームパス](/guide/learning-paths/team/)

学習パスは、「今いちばん重要な問題」に基づいて、次に何を読むかを決めるためのものです。

---

**状態：** verified  
**対象製品：** App / CLI / IDE  
**検証根拠：** 本リポジトリの現行 learning paths ディレクトリ構造、各役割の入口ページ、初心者の段階別パスを相互に照合済み。本ページは「役割ごとに読む順序を整理する」ナビゲーションのみを担い、変わりやすい製品の挙動詳細は含まない。  
**最終検証：** 2026-07-26
