---
title: "ファイルを扱う"
description: "指定したファイルだけに1行を追加し、実際の変更を確認します。"
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "固定の教材と筆者による参照結果を用意しました。一時ディレクトリでファイル操作スクリプトを実行済みですが、独立したモデルや読者による完走テストはまだ行っていません。"
prev:
  link: "/ja/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Codex と会話する"
next:
  link: "/ja/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "明確なタスクを伝える"
locale: ja
source_locale: zh-CN
source_revision: 'a379994'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

## 前提条件

最初のステップを終え、`work` に元の3ファイルが残っていること。作業ディレクトリの外にある `starter` は基準として保管してください。

## 確認できる編集を一度行う

```text
notice.md の1行目にだけ、次の状態コメントを追加してください。
<!-- 状态：练习草稿，未发布 -->
元の本文は一字一句変えないでください。他のファイルを変更したり、新しいファイルを作ったりしないでください。
完了後は変更箇所を説明してください。公開や通知の送信はしないでください。
```

現在使っているクライアントの差分表示かエディターで、元のファイルと1行ずつ比較してください。ここで求めるのは小さな変更一つだけです。「まず計画し、各段階で確認する」という追加手順は不要です。

## 完了条件

変更されたのは notice.md だけで、追加内容はコメント1行のみ。他の2ファイルは元のままです。[ステップ2の完成例](/downloads/first-project/references/step-2-notice.md)と比較してください。Markdown の表示ではコメントが隠れる場合があるため、ファイルの原文を確認します。

モデルが本文を変えた場合は、`starter` の元ファイルから notice.md だけを復元して、このステップをやり直してください。プロジェクト全体はリセットしません。詳しくは[取り消しと復元](/ja/guide/getting-started/undo-and-recover/)を参照してください。

[練習パッケージと準備](/ja/guide/learning-paths/beginner/)
