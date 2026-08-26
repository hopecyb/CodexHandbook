---
title: Monorepo での AGENTS.md
description: 単一リポジトリ複数パッケージ構造でのプロジェクト指示、スコープ、テストコマンドの例パターン。
locale: ja
source_locale: zh-CN
source_revision: b6c73e9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Monorepo では複数 app、共有パッケージ、異なる技術スタックが共存します。巨大な `AGENTS.md` 一本だと Agent が**誤ったパッケージを変更**したり、誤ったテストを走らせることがあります。本ページは再利用可能な**層分け説明**パターン（例。リポジトリに合わせて裁剪してください）。

## このページで扱うこと

- ルートとサブパッケージの指示分担
- @ ファイルとパス制約をパッケージ境界に揃える
- CI / Cloud 環境コマンドとの一致

## なぜ層分け説明が必要か

普通のリポジトリが一軒家なら、monorepo は一棟のビルです。部屋、住人、ルールが違います。玄関に超長の総説明を貼ると Codex は：

- 全部見えるが、今どの層に従うべきか分からない
- 一パッケージだけ直したいのに、別の場所まで触る

ルールをディレクトリ境界と一緒に明確にするが要点。機械的に `AGENTS.md` を増やすだけではありません。

## 推奨構造（例）

```text
repo-root/
  AGENTS.md              # グローバル：ブランチ方針、commit 規範、禁止事項
  apps/web/AGENTS.md     # フロント：フレームワーク、テストコマンド、ルート約束
  apps/api/AGENTS.md     # バックエンド：API スタイル、マイグレーション規律
  packages/shared/       # ルート文書リンクのみ、または短い子説明
```

ルート `AGENTS.md` に含めるべきもの：

- Agent が**変更禁止**のディレクトリ（例：`infra/prod/`）
- 各サブパッケージの**責任者または文書リンク**
- グローバルインストールコマンド：ルートで `pnpm install`

## よくある誤解

### 1. ディレクトリが増えたら説明をルートに全部積む

初めて monorepo 指示を書くと、すべての制約をルート `AGENTS.md` に入れたくなります。

結果：

- ファイルが長い
- 現在タスクに本当に関係するルールが目立たない
- サブパッケージ固有の約束が埋もれる

より安定：ルートにグローバル合意、サブパッケージにローカル特別ルール。

### サブパッケージ説明は誤変更範囲を狭めるため。ルートのコピーではない

`apps/web` と `apps/api` で開発・テスト・制約が違えば、各ディレクトリに書くほど Codex の迷いが減ります。

## サブパッケージ AGENTS.md テンプレ片段

```markdown
## スコープ
`apps/web/**` のみ変更。タスクが明示的にクロスパッケージ変更を要求しない限り。

## 開発
- インストール：リポジトリルートで `pnpm install`
- 開発：`pnpm --filter web dev`
- テスト：`pnpm --filter web test`
- 型チェック：`pnpm --filter web typecheck`

## 依存
共有型は `@acme/shared` から import。コピペしない。
```

## タスク prompt の配合

クロスパッケージリファクタでは**パスを明示**：

```text
目標：apps/web で新 API クライアントを使用
変更可：apps/web/**, packages/api-client/**
禁止：apps/api サーバー側を直接変更
受け入れ：pnpm --filter web test && pnpm --filter api-client test
```

[ファイルとディレクトリコンテキスト](/ja/guide/context/file-and-folder-context/) を参照。

## Cloud と CI

Monorepo は Cloud で**ルート未インストール**や filter 誤りで失敗しがち。ルート `AGENTS.md` に明記：

- デフォルト作業ディレクトリはリポジトリルート
- 単一パッケージタスクの filter コマンド
- キャッシュ方針（turborepo/nx 使用時はタスク図を記載）

[Cloud 環境](/ja/guide/web-and-cloud/cloud-environments/)

## よくあるミス

- `apps/web` にだけ説明があり、Agent がルートで lockfile を乱変更
- サブパッケージごとにテストコマンドが違い文書化されていない
- サブパッケージ `AGENTS.md` とルート文書が矛盾

## ルートかサブパッケージかの判断

1. すべてのパッケージが守る共通事項か？
2. 特定ディレクトリにだけ成立するか？
3. 置き場所を間違えると Agent が範囲を誤変更するか？

1 に近ければルート。2・3 に近ければサブパッケージ。

## 受け入れチェックリスト

- [ ] ルートとサブパッケージに少なくとも読める scope 説明がある
- [ ] 任意パッケージでテストコマンドを単独実行できる
- [ ] クロスパッケージタスクの prompt に許可パスを明記

Monorepo の `AGENTS.md` は一味に集中させる必要はない。「グローバル合意」と「ディレクトリ局所ルール」を適切な場所に置くのが適切です。

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** 本ハンドブック現行 `AGENTS.md`、ファイルディレクトリコンテキスト、Cloud 環境章を相互確認。monorepo 層分け説明の例パターンとコマンド整理方法に限定。具体製品入口やマネージド実装を固定契約として扱わない。  
**最終検証：** 2026-07-26
