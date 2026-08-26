---
title: Cloud と GitHub のコードレビュー
description: Cloud の diff をレビューし、GitHub で Codex による高シグナルの追加 review を行います。
locale: ja
source_locale: zh-CN
source_revision: a74296a
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-08-26
---

Cloud タスクが終了すると要約と diff が表示されます。follow-up で質問、修正依頼、PR の作成ができます。タスクの完了は merge の承認を意味しません。最終的にはプロジェクトの CI、ブランチ保護、人による判断が必要です。

## 二種類のレビュー

| 種類 | 確認するもの | 結果 |
|---|---|---|
| Cloud 結果のレビュー | 今回のタスクの要約、ログ、diff | follow-up または PR 作成を判断 |
| GitHub Codex review | 接続済みリポジトリの PR diff と `AGENTS.md` ルール | GitHub code review を投稿 |

GitHub PR のコメントに次を記述します。

```text
@codex review
```

Codex は通常の GitHub review として指摘を投稿します。現在の公式説明では、GitHub コメントは P0 / P1 の優先度が高い問題に集中します。問題がない場合は reaction だけを残すことがあります。コメントが少ないことを理由に、人によるレビューを省略しないでください。

## レビュー順序

1. **範囲**：ファイル、ディレクトリ、依存関係、生成物がタスクに合っているか。
2. **動作**：正常、失敗、境界の各経路が要件を満たすか。
3. **セキュリティ**：認証、権限、入力処理、認証情報、外向きネットワーク。
4. **証拠**：実際に実行したテストと、失敗した項目を開示しているか。
5. **ロールバック可能性**：狭い範囲で取り消せるか、無関係なリファクタリングが混ざっていないか。

プロンプト例：

```text
この PR をレビューし、誤動作、データ破損、セキュリティ問題、互換性の回帰につながる指摘だけを報告してください。
各項目には重大度、具体的な位置、発生条件、影響を含めてください。
スタイル上の好みを欠陥として挙げないでください。
```

## リポジトリ固有のルール

適用対象ディレクトリの `AGENTS.md` に追加します。

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

ルートのルールはリポジトリ全体に適用され、ネストした `AGENTS.md` ではサービス固有のチェックを追加できます。最初は長期間安定し、安全な経路も説明できるルールを二、三個だけ記述してください。変わりやすい関数名を大量に並べないでください。

## 自動 review の境界

必要な GitHub の push または admin 権限を持つユーザーは、Codex Settings でリポジトリの自動 reviews を有効にできます。自動 review は追加のゲートであり、自動 merge 権限を持たせるべきではありません。高リスクのリポジトリでは、required reviewers、CI、ブランチ保護を維持してください。

## 検収チェックリスト

- [ ] 人が主要ロジックの diff を読んだ
- [ ] P0 / P1 の指摘を修正したか、リスクを書面で受け入れた
- [ ] CI が通り、失敗した再実行の履歴を説明できる
- [ ] Secret、意図しない生成物、無関係な lockfile 更新がない
- [ ] タスク説明、PR 説明、実際の変更が一致する

## 公式情報

- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [クライアント横断のコードレビュー](https://learn.chatgpt.com/docs/code-review)

---

**状態：** verified

**対象製品：** Cloud、GitHub

**最終検証：** 2026-08-26
