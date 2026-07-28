---
title: codex exec
description: 非対話実行入口——スクリプトと CI で単発タスクを一括投入。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

対話型 `codex` が話しながら作業するなら、**`codex exec`** はタスクを一度渡して走らせ、終了時に結果または失敗状態を返すに近いです。

[非対話モード](/guide/cli/non-interactive-mode/) の核心：往復チャットなし、途中澄清なし。プロセス終了で結果または失敗。本章は [開発者プラットフォーム](/guide/developer-platform/) 統合者向け。Codex を初めてスクリプトや CI に接続する読者にも適します。

## 本ページの内容

- `exec` と対話型 `codex` の差
- 最小コマンド形と作業ディレクトリ
- 無人運用時の承認、サンドボックス要求

## `exec` がすること

`codex exec` は：

- 一回限りの作業指示を出す
- 走らせて結果を返す

指示を書いたら、その説明に従って走り、結果を返して終了します。

向くシーン：

- タスク境界が固定
- 途中で往復澄清が不要
- 今後も安定して反復実行したい

## なぜ存在するか

CI で Codex とチャットしたり、十回止まって聞かれることは期待しません。

`codex exec` の典型用途：

- コードレビュー自動化
- 定期タスク
- バッチスクリプト
- パイプライン内の単発分析または生成ステップ

「**タスク境界がすでに明確**」なシーン向き。まだ曖昧に探索中なら対話モードが一般的です。

:::note
**コマンド名とパラメータは公式 CLI を基準に。** 更新後は `codex --help` と `codex exec --help` で再確認。
:::

## 最小実用手順

```bash
cd /path/to/repo
codex exec --cwd . "読み取り専用：現在ブランチと main の diff を比較し、最高リスク3件を列挙。ファイルは変更しない"
```

原則：

- Shell スクリプトでは先にクリーン worktree へ `cd`
- Prompt はバージョン庫 `prompts/` または heredoc。shell エスケープエラーを避ける
- CI では**終了コード**で成否判定

## 見落とされがちな現実

対話モードでは「そういう意味ではない」と補足できます。  
`exec` では**最初の指示が間違っていると、タスク全体が逸れる**可能性があります。

`exec` prompt では通常より明確に：

- 何をするか
- 何をしないか
- 出力形式
- 何が完了か
- 失敗時にどう終了してほしいか

## よくある誤解

### `exec` は固定タスク向き

「CLI の上級モード」と誤解されがちですが、より正確には**安定反復実行**向きです。

### 短い＝明確ではない

対話では曖昧でも後から補足できます。`exec` で境界、制限、成功基準を省いた短い prompt は、洗練ではなく失控の原因になりがちです。

## 推奨ワークフロー

```text
リポジトリ準備（checkout、install、読み取り専用 token）
    → prompt バージョン固定（git sha）
    → codex exec
    → stdout / artifact 収集
    → 非0なら CI 失敗。無限再試行しない
```

[スクリプトとパイプライン](/guide/developer-platform/non-interactive/scripts-and-pipelines/) と接続。

## 何として使えるか

- スクリプト化可能な単発タスクコマンド
- スクリプト、CI、cron、内部プラットフォームボタンの後ろに接続

多くのチームは `make review`、GitHub Actions、cron、内部ボタンに接続します。

## 対話モードとの比較

| | `codex` 対話 | `codex exec` |
|---|---|---|
| 澄清 | 複数ラウンド可 | 一度で言い切る必要 |
| 承認 | 人が同席 | 事前に方針を厳格化 |
| 向く用途 | 学習、探索 | CI、cron |

## 迷ったときの選択

- 要件探索中、頻繁に言い直す：対話モード優先
- テンプレ化済みで安定反復したい：`codex exec`

`codex exec` は「すでに明確で、今後も繰り返したい」タスク向き。まだ考えながら言い直す段階なら、非対話フローに急がない。

## よくあるミス

- 長いチャット履歴を単発 exec に詰める
- CI で書き込み権限 token と未消毒 PR 本文を含む prompt
- CLI バージョン未固定でパイプラインが突然失敗
- 非ゼロ終了コードを無視して green 表示
- 人間判断が必要な複雑タスクを無人に押し込む

## セキュリティ境界

- 無人運用＝[人工承認](/cases/workflows/human-approval-patterns/) が弱まる。デフォルト読み取り専用
- [セキュリティ資格情報](/guide/developer-platform/ci-cd/code-review-automation/#安全凭证)（同章相互参照）

## 受け入れチェックリスト

- [ ] ローカルと CI が同じ prompt ファイルを使用
- [ ] 終了コードが CI で正しく処理される
- [ ] ログに秘密鍵と PII がない
- [ ] サンドボックスとルールが対話開発時と一致またはより厳格

## 関連章

- [CLI 非対話モード](/guide/cli/non-interactive-mode/)
- [構造化出力](/guide/developer-platform/non-interactive/structured-output/)
- [終了コードと再試行](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## 参考
- OpenAI Codex CLI ドキュメント
---

**状態：** outdated  
**対象製品：** CLI  
**検証根拠：** 本ページは `codex exec`、`--cwd`、非対話統合方式について有用な思路を提供するが、現行公式ドキュメントがコマンド入口、パラメータ、挙動細部を十分に逐条確認できる根拠が不足。最新 CLI 公式根拠を補足する前は `verified` とすべきでない。  
**最終検証：** 2026-07-26
