---
title: 開発者プラットフォーム
description: SDK、非対話 CLI、CI/CD で Codex をエンジニアリング体系に組み込む——統合開発者向け。
sidebar:
  order: 50
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

**開発者プラットフォーム**は Codex を**製品化**してパイプラインに入れたい人向けです：カスタムアプリ、一括レビュー、リリースゲート、内部開発者ポータル。日常の「prompt でバグ修正」は [クイックスタート](/guide/getting-started/) から始めてください。

この章は Codex の日常利用ではなく、自システムへの接続方法を扱います。

向くシーン：

- CI で自動タスクを走らせたい
- 自社バックエンドやツールに Codex を接続したい
- Codex をチームワークフローの一部にしたい

## このページで扱うこと

- 開発者プラットフォームとエンドユーザー向けハンドブックの境界
- 典型的な統合アーキテクチャ
- 本章ナビとロードマップ

## 製品ハンドブックとの分担

| 読者の問い | 行き先 |
|---|---|
| ターミナルで `codex` をどう走らせるか | [CLI 製品ハンドブック](/guide/cli/) |
| CI で exec レビューするには | [非対話モード](/guide/cli/non-interactive-mode/) + 本章 CI |
| 自社 App に Agent を埋め込むには | [SDK 概要](/guide/developer-platform/sdk-overview/) |
| 権限とセキュリティモデル | [人工承認パターン](/cases/workflows/human-approval-patterns/) |

## 典型アーキテクチャ（概念）

```text
開発者システム（CI / 内部プラットフォーム / SaaS）
        ↓ API または CLI
Codex（モデル + ツール + 方針）
        ↓
Git プロバイダ / チケット / アーティファクトリポジトリ
```

## 設計原則

1. **冪等と再試行可能**：同一 PR の複数レビュー結果を比較可能に
2. **最小権限**：CI Token は読み取り専用またはリポジトリ限定
3. **可観測性**：prompt バージョン、モデル、diff artifact を保持
4. **人と機械の分担**：自動コメント ≠ 自動マージ

## 本章ナビ

| テーマ | ページ |
|---|---|
| SDK | [SDK 概要](/guide/developer-platform/sdk-overview/) |
| 非対話 | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) · [スクリプトとパイプライン](/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [構造化出力](/guide/developer-platform/non-interactive/structured-output/) · [終了コードと再試行](/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [概要](/guide/developer-platform/webhooks/overview/) |
| CI/CD | [コードレビュー自動化](/guide/developer-platform/ci-cd/code-review-automation/) |

`codex-sdk/`、`app-server/`、`architecture-patterns/` などは [章アウトライン](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md) を参照。

## よくある誤解

### 1. Codex を本当に使うにはこの章を学ぶ必要がある？

まず Codex を使い始めたいだけなら、後回しでよいです。

### 2. CLI / App / IDE との関係は？

- **App / CLI / IDE**：個人またはチームが直接 Codex を使う入口
- **開発者プラットフォーム**：Codex を別システム・プロセスに再埋め込む

### 3. 初めて読むならどのページが価値が高い？

概念構築なら [SDK 概要](/guide/developer-platform/sdk-overview/) と [非対話モード](/guide/cli/non-interactive-mode/) の関係を優先。

開発者プラットフォーム章は「Codex をシステムに接続する」話。初めて Codex に触れるなら、先の入門を見てください。

## 参考

- OpenAI Codex API / SDK 公式ドキュメント
- KimYx0207 開発者章
- stormzhang CI と自動化チュートリアル
- codex.bozhouai.com 工程化事例

---

**状態：** verified  
**対象製品：** API / CLI / Cloud  
**検証根拠：** 本リポジトリ現行 developer-platform 章構造、ナビ入口、関連 CLI/CI/SDK 説明ページを相互確認。「開発者プラットフォームは工程化統合向け」という安定した分担のみ。具体パラメータやランタイム挙動は宣言しない。  
**最終検証：** 2026-07-26
