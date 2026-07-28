---
title: IDE での Cloud タスク
description: IDE から Cloud タスクを委任し、状態を追跡し、リモートの成果物をレビューする。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

一部の IDE 連携では、タスクを**Cloud に委任**できます。タスクはリモートの標準環境で実行され、ローカル編集を続けたり、PC から離れても構いません。フローは純粋な Cloud/Web と似ていますが、入口はエディター側です。

## 内容

- IDE から Cloud タスクを送るタイミング（純ローカルとの使い分け）
- 委任の前後に準備すること
- リモート diff をローカルレビューに接続する方法

## 向いているシーン

| Cloud が向く | ローカルに留まる |
|---|---|
| 依存のインストールが重く、環境の再現が難しい | 数行の素早い修正 |
| ブランチの push / PR が必要 | GitHub 未接続 |
| 長時間実行、スマホでの承認通知が欲しい | 未コミットの機密ドラフトがローカルにある |

概念：[ローカルと Cloud](/guide/foundations/local-vs-cloud/)

## このワークフローが向く状況

次のような場合に使われます。

- IDE で作業する習慣がある
- タスク自体はリモート環境で走らせた方がよい

つまり、作業の入口は IDE のまま、実行環境はリモートに切り替わります。

## 前提条件

- [ ] [GitHub 接続済み](/guide/web-and-cloud/connect-github/)
- [ ] Cloud [環境](/guide/web-and-cloud/cloud-environments/) と [Secrets](/guide/web-and-cloud/secrets-and-variables/) を設定済み（タスクに必要な場合）
- [ ] ローカル変更は commit 済み、または「リモートブランチを正」と明示

**IDE は、ローカルで未 push の commit を Cloud の代わりに渡せません。**

## よくある誤解

### 1. IDE で「Cloud で実行」を押せば、ローカルのすべてが自動で付くか

いいえ。  
リモートタスクが見えるのは、リモートリポジトリ、リモート環境、明示的に渡した内容だけです。

### 2. 入口が IDE なら、ローカルタスクとほぼ同じか

違います。  
開始位置は IDE でも、実行境界、環境、可視コンテンツは Cloud 側のルールです。

### 3. Cloud で完了した＝レビュー済みか

リモート完了は、そこでタスクが終わっただけで、ローカルの review、テスト、最終確認が済んだ意味ではありません。

## 推奨フロー

```text
1. IDE でタスク説明を書く（目標、ブランチ、制約、受け入れ条件）
2. 「Cloud で実行」または同等の入口を選択（製品 UI に準拠）
3. 計画を確認（plan モードが有効な場合）
4. 離れるかローカル作業を続ける → 通知 / パネルで進捗確認
5. リモート完了後：Web/App で diff を確認 → PR 作成またはブランチをローカルに pull
6. ローカルでテスト + 手動 review → マージ
```

PR の詳細：[Pull Request の作成](/guide/web-and-cloud/create-pull-requests/)

## 初回のおすすめ順序

IDE から初めて Cloud タスクを送るときは、次の順で進めてください。

1. ローカル変更を commit 済みか、意図的に含めないかを確認
2. GitHub、Secrets、ブランチの準備を確認
3. 明確な目標、範囲、受け入れ条件でタスクを開始
4. リモート完了後に diff を確認
5. ローカルでテストと手動レビューを補完

IDE の Cloud タスクとローカルタスクの違いの核心は、実行環境がリモートかどうかです。

## デスクトップ App 委任との関係

デスクトップ App の [ローカルと Cloud タスク](/guide/desktop-app/local-and-cloud-tasks/) と IDE 委任は同じ Cloud バックエンドを共有します。差は主に**入口 UI とコンテキスト添付**（IDE は現在の選択範囲の要約を付ける場合あり）です。

## セキュリティ境界

- Cloud タスクの権限は GitHub 接続範囲と組織ポリシーに制約される
- タスク説明に本番鍵を貼らない。[Secrets](/guide/web-and-cloud/secrets-and-variables/) を使う
- マージ前も [手動レビュー](/guide/web-and-cloud/code-review/) が必要

## よくある間違い

- 委任後に同じファイルをローカルで編集し、リモートブランチと競合
- ブランチ名を書かず、リモートが共有ブランチに直接 push
- Cloud の成果物を「検証済み」とみなし CI をスキップ

---

**状態：** outdated  
**対象製品：** IDE / Cloud  
**検証根拠：** 本ページは「IDE から直接 Cloud タスクを委任し、diff を接続し、ローカルで追跡する」という比較的具体な拡張能力とフローを書いているが、現行の公式資料だけでは IDE 側 Cloud 委任体験の具体形を項目ごとに証明できない。正式な IDE/Cloud ドキュメントを補完するまでは `outdated` が適切。  
**最終検証：** 2026-07-26
