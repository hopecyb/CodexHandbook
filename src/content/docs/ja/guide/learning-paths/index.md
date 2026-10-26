---
prev: false
next:
  link: /ja/guide/learning-paths/beginner/01-talk-to-codex/
  label: 初心者パスを始める
title: 学習パス
description: 役割ごとに読む順序を整理し、正本の本文へリンクします。
locale: ja
source_locale: zh-CN
source_revision: "2f7ff71"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 5
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: 現在のリポジトリの learning paths の構成、役割別の入口ページ、初心者向けの段階別パスを相互に照合済みです。このページは役割に応じた読書順を案内するためのもので、変化しやすい製品動作の詳細は扱いません。
  checkedAt: '2026-07-26'
reviewed_at: "2026-10-26"
---

学習パスは **読む順序だけを整理** し、製品マニュアルや機能別ガイドの長い記事を複製しません。

初めてこの章を見ると、目次が一段増えただけに感じるかもしれません。ここで答えるのは、今の自分がどのタイプの利用者に近いか、次に何をどの順で読むかです。

この章は新しい製品知識を追加するのではなく、遠回りを減らします。

![イラスト：同じ本から伸びる四つの道——初心者・クリエイター・開発者・チーム——が山頂で合流する](/illustrations/learning-paths.webp)

## この章で扱うこと

- 初心者、クリエイター、開発者、チーム推進者のどのパスを選ぶか
- 役割によって読む順序がどう違うか
- 今読むべき内容と後で補えばよい内容

## 共通教材を使う初心者パス

[イベント告知の共通練習教材をダウンロード](/downloads/first-project/first-project-1.0.0.zip)し、五つのステップで告知、レビュー、復旧記録を完成させます。プログラミングは不要です。独立した読者によるパス全体の完走検証はまだありません。

- **初心者（五つのステップ）**
  1. [Codex と対話する](/ja/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [ファイルを扱う](/ja/guide/learning-paths/beginner/02-work-with-files/)
  3. [明確なタスクを与える](/ja/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [結果をレビューする](/ja/guide/learning-paths/beginner/04-review-results/)
  5. [最初の小さなプロジェクトを完了する](/ja/guide/learning-paths/beginner/05-complete-first-project/)

## クリエイター向け実践パス

[クリエイターパス](/ja/guide/learning-paths/creator/)は、資料と事実表 → 出典付き記事 → 編集可能な八枚のスライド → 再利用できるタスク指示、という四つの連続したマイルストーンで構成されます。記事とスライドにはそれぞれ独立したダウンロード教材があり、各ステップに完了条件があります。独立した読者によるパス全体の完走検証はまだありません。

## 開発者向け実践パス

[開発者パス](/ja/guide/learning-paths/developer/)はショッピングカートのバグ演習を再利用し、コードを読む → 修正とテスト → 差分のレビュー → 引き継ぎの準備、の順に進みます。記入できる三つのテンプレートと作者による参照例があります。参照テストは再実行済みですが、独立した読者による完走は未検証です。

## チームパス：二週間の試行と展開判断

- [チーム](/ja/guide/learning-paths/team/)：憲章 → 手動検証 → 抜き取り確認 → ロールバック演習 → 展開・継続・停止の判断。六つのテンプレート付き。

## 高度な操作者パス

小さなタスクを完了できるようになったら、次はコマンドをさらに覚えることではなく、複数の能力を安定したワークフローとして組み合わせることです。

| ステップ | テーマ | 先に読むもの |
|---|---|---|
| 1 | すばやい入口 | [スラッシュコマンドとクイック入口](/ja/guide/reference/slash-commands/) |
| 2 | 永続的なコンテキスト | [AGENTS.md](/ja/guide/customization/agents-md/) と [メモリと永続コンテキスト](/ja/guide/customization/memories-and-persistent-context/) |
| 3 | 再利用できるワークフロー | [Skills 概要](/ja/skills/overview/) と [Skill の構造](/ja/skills/skill-anatomy/) |
| 4 | 独立したサブタスク | [サブエージェント](/ja/guide/agent-work/subagents/) と [マルチ Agent 協調](/ja/cases/workflows/multi-agent-coordination/) |
| 5 | 外部システム | [MCP 概要](/ja/skills/mcp/mcp-overview/) |
| 6 | 自動ガードレール | [Hooks 概要](/ja/skills/hooks/hooks-overview/) |
| 7 | チーム配布 | [Plugins 概要](/ja/skills/plugins/plugins-overview/) |
| 8 | 復元とレビュー | [取り消しと復元](/ja/guide/getting-started/undo-and-recover/) と [Diff をレビューする](/ja/guide/quality/review-diffs/) |

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

- まだ初回の完全なタスクを通していない：[初心者パス](/ja/guide/learning-paths/beginner/)
- 主に文章・画像入りコンテンツ・プレゼンテーションの作成をしたい：[クリエイターパス](/ja/guide/learning-paths/creator/)
- 主にコード変更、バグ修正、プロジェクト対応をしたい：[開発者パス](/ja/guide/learning-paths/developer/)
- 主にチームでの導入方法やリスク管理を考えている：[チームパス](/ja/guide/learning-paths/team/)

学習パスは、「今いちばん重要な問題」に基づいて、次に何を読むかを決めるためのものです。
