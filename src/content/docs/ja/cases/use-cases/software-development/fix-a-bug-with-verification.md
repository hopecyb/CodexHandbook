---
title: "事例: 検証付きバグ修正"
description: 失敗テストから最小修正と回帰へ——最も一般的な開発ループ。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

## メタデータ

| 項目 | 内容 |
|---|---|
| 対象読者 | 開発者 |
| クライアント | CLI または IDE（ローカルリポジトリ） |
| 想定時間 | 30〜60 分 |
| 検証日 | 2026-07-25 |

## 1. 目標とコンテキスト

**目標：** ユニットテストで既に捕捉された回帰バグを修正し、再発防止テストを追加する。

**成功基準：**

- もともと失敗していたテストが通る
- フルテストスイートが依然として緑
- diff は必要ファイルに限定

**範囲外：** 大規模リファクタ、メジャー依存アップグレード。

## 2. 準備

- リポジトリをクローン、`pnpm install`（または `AGENTS.md` に従う）
- ローカル再現確認：`pnpm test -- path/to/failing.test.ts`
- ブランチ：`fix/issue-123-short-desc`

## 3. ワークフロー

### Explore（探索）

```text
まだコードは変更しないで。失敗テスト @tests/auth/login.test.ts と実装 @src/auth/login.ts を読み、
5 項目以内で失敗を説明し、アサーションとスタック行番号を引用して。
```

### Plan（計画）

```text
修正計画を出して：どのファイルを変えるか、新規テストが要るか、どう検証するか。
コード変更前に私の「実行」を待って。
```

### Execute（実行）

```text
計画のステップ 1〜2 を実行。各ステップ後は関連テストのみ実行。
```

### Verify（検証）

```text
フルテストスイートを実行。レビュー用に diff を要約。git push はしない。
```

人：[diff をレビュー](/guide/quality/review-diffs/) し、無関係変更がないか確認。

## 4. 失敗と回復

| 問題 | 対応 |
|---|---|
| 修正後に新たな失敗 | `git stash` またはコミット revert。変更を狭める |
| 根因の誤り | 探索に戻り、新仮説を要求 |
| フレーキーテスト | ビジネスロジック修正前にテストを安定化 |

## 5. 定着（キャプチャ）

- 同種バグが繰り返すなら `AGENTS.md` に規約追加
- 任意 `$regression-guard` Skill：マージ前に重要テストリスト実行

## 6. 関連章

- [修正前に診断する](/cases/workflows/diagnose-before-fixing/)
- [開発者学習パス](/guide/learning-paths/developer/)
- [テストを実行する](/guide/quality/run-tests/)

---

**状態：** verified  
**対象製品：** CLI / IDE  
**最終検証：** 2026-07-26  
**検証根拠：** 本ハンドブックの検証済み診断、テスト実行、diff レビュー、開発者パス章と照合。失敗テストから最小修正と回帰検証への安定した開発ループのみ。
