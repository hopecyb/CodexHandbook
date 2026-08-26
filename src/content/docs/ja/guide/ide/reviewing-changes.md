---
title: IDE で変更をレビューする
description: ソースコードの横で差分を確認し、読み取り専用の reviewer で worktree を検査します。
locale: ja
source_locale: zh-CN
source_revision: 1ca9ffe
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 70
reviewed_at: 2026-08-26
---

IDE はソースコードの横で要約や絞り込まれた diff を素早く読むのに適しています。ただし、「変更がエディタに表示された」ことは検収に合格したことを意味しません。まず差分を確認し、次にテストを実行して、最後に残す内容を判断してください。

## ローカルレビューを完了する

1. 結果の要約を読む。ただし、要約を diff の代わりにしない。
2. changed lines を展開し、影響を受けた各ファイルを確認する。
3. 必要な編集を残し、範囲に合わない内容は次の変更で修正するよう依頼する。
4. 入力欄で `/review` を実行する。
5. 基準ブランチとの比較、または未コミットの変更のレビューを選ぶ。
6. IDE のターミナルでプロジェクトのテストと静的チェックを実行する。
7. 最後に Git ツールでもう一度状態を確認する。

`/review` は、開いているプロジェクトが Git リポジトリである場合だけ表示されます。優先度順に問題を報告し、worktree は変更しません。IDE では次を選択できます。

- **Review against a base branch**：現在のブランチと選択した基準ブランチを比較する
- **Review uncommitted changes**：現在の worktree の変更を確認する

結果はデフォルトで現在のチャットに表示されます。`chatgpt.reviewDelivery` を `detached` に設定すると、独立したレビューチャットを開始できます。

## 例：reviewer に明確な基準を与える

```text
現在の未コミット変更をレビューしてください。誤動作、データ破損、セキュリティ問題につながる欠陥を優先してください。
純粋なスタイル上の好みは無視してください。各指摘には具体的なファイル位置、発生条件、検証可能な影響を含めてください。
問題が見つからない場合は、残っているテストの不足を説明してください。
```

## 検収チェックリスト

- [ ] 変更されたファイルがタスクで許可した範囲と一致する
- [ ] 意図しない削除、ファイル全体のフォーマット、機密ファイルがない
- [ ] 失敗経路と境界条件をカバーしている
- [ ] プロジェクト要件に従い、テスト、lint、型チェックが通る
- [ ] reviewer の優先度が高い指摘を修正したか、リスクを明示して受け入れた
- [ ] `git diff --check` と `git status --short` の結果が正常

行単位のコメント、stage、hunk 単位の取り消しが必要な場合は、デスクトップ App の[差分、コメント、レビュー](/ja/guide/desktop-app/diffs-comments-and-review/)へ移ってください。一般的な方法は [diff をレビューする](/ja/guide/quality/review-diffs/) を参照してください。

## 公式情報

- [コードレビュー](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)

---

**状態：** verified

**対象製品：** IDE

**最終検証：** 2026-08-26
