---
title: GitHub を接続する
description: 最小限のリポジトリ範囲で Codex Cloud の GitHub アクセスを設定します。
locale: ja
source_locale: zh-CN
source_revision: b811894
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---

Codex Cloud では、最初に GitHub または GitLab（Beta）を接続し、次にリポジトリ用の環境を作成します。GitHub で認可した範囲により、Codex が参照できるリポジトリが決まります。ローカルの clone とまだ push していない変更は、その範囲に含まれません。

## 接続手順

1. Codex Cloud を開き、ChatGPT アカウントでログインする。
2. 案内に従って GitHub を接続する。
3. GitHub の認可画面で、組織と**必要なリポジトリ**を選択する。
4. Codex に戻り、そのリポジトリを選択して Cloud 環境を作成する。
5. 読み取り専用または小さな変更タスクで clone、ブランチ、diff を検証する。
6. PR review が必要な場合は、Codex Settings でリポジトリの Code review を有効にする。

今回必要なリポジトリだけを認可してください。チームのリポジトリでは、組織が統合のインストールを許可していること、現在のアカウントに対応する権限があることを確認し、ブランチ保護を維持します。

## 接続前後のチェック

- [ ] 対象リポジトリが、誤って選んだ同名の fork ではない
- [ ] デフォルトブランチとタスクの開始点を確認済み
- [ ] 必要なローカル変更を push 済み、またはタスクに含めないことを明示済み
- [ ] main ブランチへのレビューなしの直接書き込みを禁止している
- [ ] 環境に本番用の全権限認証情報がない
- [ ] 最初のタスクは低リスクのファイルだけを変更する

## GitHub での二つの使い方

### Cloud にタスクを実装させる

Codex Cloud でリポジトリ環境と開始ブランチを選び、目標を説明します。タスク終了後に diff を確認してから PR を作成します。

### Codex に PR をレビューさせる

リポジトリで Code review を有効にした後、PR のコメントに次を記述します。

```text
@codex review
```

Codex は通常の GitHub review を投稿します。自動レビューは Codex Settings で別途有効にする必要があります。チームは `AGENTS.md` の `## Code Review Rules` にリポジトリ固有のルールを記述できます。

## 権限エラーの判断

- リポジトリが一覧にない：GitHub で認可したリポジトリ範囲を確認する
- 組織リポジトリで 403：組織ポリシー、SSO、インストール許可を確認する
- 自動 review を有効にできない：設定に必要な GitHub の push または admin 権限があるか確認する
- Cloud からローカル commit が見えない：Cloud はリモートリポジトリからだけ checkout するため、明確なブランチへ先に push する

一つの 403 を解決するために、すべての private リポジトリを直接認可しないでください。対象リポジトリと不足している具体的な権限を先に確認します。

## 公式情報

- [Codex Cloud クイックスタート](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)

---

**状態：** verified

**対象製品：** Cloud、GitHub

**最終検証：** 2026-08-26
