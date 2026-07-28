---
title: GitHub 連携
description: リポジトリ接続、PR、Review、CI——GitHub ワークフローにおける Codex の位置づけ。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

GitHub は Codex にとって最も一般的なコード協業面です。Cloud タスク、PR レビュー、Actions、ローカル push は、同じブランチと権限の上で動きます。

ここでは、Codex が「コードリポジトリ、ブランチ、PR、Review」の協業フローにどう接続するかを説明します。

シニア開発者でなくても、まず次の 3 類型を押さえれば、このページの大半は読めます。

- コードをどこに置くか
- 変更をどう見せてレビューに出すか
- レビューとマージがどう進むか

## 能力マップ

| 能力 | 典型的な入口 | ハンドブック位置 |
|---|---|---|
| リモートリポジトリ接続 | Cloud 設定 | [GitHub 接続](/guide/web-and-cloud/connect-github/) |
| クラウドでコード変更し PR 作成 | Cloud タスク | [Pull Request の作成](/guide/web-and-cloud/create-pull-requests/) |
| ローカルで diff レビュー | デスクトップ App / IDE | [diff とコメント](/guide/desktop-app/diffs-comments-and-review/) |
| CI で Codex を実行 | GitHub Actions | ロードマップ `08-developer-platform/ci-cd/` |
| PR 自動コメントレビュー | Actions + exec | [非対話モード](/guide/cli/non-interactive-mode/) |

## 推奨チーム規約

```md
## GitHub × Codex（AGENTS.md に入れられる例）

- デフォルトで main を保護。Codex は feature ブランチのみ push
- PR は issue にリンク。説明にテスト内容を含める
- release bot の明示的許可がない限り、Codex に PR マージさせない
- 鍵は GitHub Secrets / 環境 secrets を使い、プロンプトに入れない
```

## Cloud vs ローカル Git

| | ローカル clone | Cloud |
|---|---|---|
| コードの出所 | 手元のワークスペース | リモート clone |
| 未 push の commit | 見える | 見えない。先に push が必要 |
| 環境 | 手元の Node / OS バージョン | 設定された環境イメージ |
| 向くこと | 日常開発 | 非同期長時間タスク、標準化ビルド |

## Review ワークフロー

1. Codex または人が PR を開く
2. 人が diff を読む（または `$pr-review` Skill）
3. CI がテストを実行
4. コメント駆動で修正——新しい Codex タスクで「review コメントだけ対応」も可
5. 人がマージ

## よくある誤解

### 1. GitHub 連携 = Codex に開発を全部任せる

より一般的な用途は次です。

- リポジトリコンテキストを読む
- diff や review を整理する
- PR 作成やコメント修正を補助する

### 2. PR、Review がまだよくわからない

ざっくり次の理解で十分です。

- **PR**：変更を正式に出して、他者に見てもらう
- **Review**：その変更を誰かが確認する

このレベルがあれば、本ページの大半は読めます。

### 3. GitHub 連携で最初に分けるべきこと

最初に分けるのは token でも Actions でもなく、次です。

> **ローカル変更、クラウドリポジトリ、PR レビューは別物である。**

GitHub 連携の要点は、Codex を既存のコード協業フローに接続することです。

## セキュリティ

- GitHub Token の scope を最小化
- `pull_request_target` など敏感な Actions パターンに注意（注入面）
- fork PR で自動化を走らせる場合は追加の分離戦略が必要

## よくあるミス

- Cloud タスクが、ローカル未コミット変更の存在を前提にする
- 未消毒の指示を PR 説明で実行させる（プロンプト注入）
- 1 つの PR にフォーマット変更と機能変更を混ぜる

## 参考ソース
- OpenAI Codex GitHub 連携ドキュメント
---

**状態：** verified  
**対象製品：** Cloud / App / CLI  
**検証根拠：** OpenAI Developers の現行 Codex use cases には「Review GitHub pull requests」が含まれる。OpenAI Help Center のプラグイン・連携説明も、外部リポジトリアクセスが基盤アプリ権限、ロールアクセス、動作境界に依存することを強調している。本ページは GitHub リポジトリ、ブランチ、PR、Review、CI の協業位置と、ローカルと Cloud のコード可視性の差だけを要約する。  
**最終検証：** 2026-07-26
