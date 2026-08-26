---
title: マージ前レビュー
description: merge 前に Codex で構造化 diff とリスクレビューを行う——人間と機械の役割分担を明確にする。
locale: ja
source_locale: zh-CN
source_revision: ce05ae9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**マージ前レビュー**は [品質と検証](/ja/guide/quality/) を Git フローに組み込むものです。PR マージ前に、Codex で diff、テスト、セキュリティ、仕様の一貫性を確認します。自動コメント自体は自動マージの代替にはなりません。

## このページの重点

- ローカルレビュー vs Cloud/CI レビューの役割分担
- レビュープロンプトがカバーすべき次元
- いつ人間による最終承認が必須か

## 最小限の実践方法

**ローカル（作者の自己チェック）**

```text
現在のブランチと main の diff を比較してください（まだコードを変更しないでください）：
1. issue の範囲を超えていないか
2. 明らかなセキュリティリスク（秘密鍵、インジェクション、権限）があるか
3. テストやドキュメントが不足していないか
チェックリストを出力し、P0/P1 を付けてください。
```

**CI（チームゲート）**

- 固定プロンプトバージョン + 読み取り専用 Token
- 結果を PR コメントまたは check run に書き込む
- [コードレビュー自動化](/ja/guide/developer-platform/ci-cd/code-review-automation/) を参照

## 推奨レビュー次元

| 次元 | 注目点 |
|---|---|
| 正確性 | ロジック、境界、エラー処理 |
| テスト | 新しい動作にカバレッジがあるか |
| セキュリティ | 秘密鍵、インジェクション、依存関係の脆弱性の手がかり |
| 保守性 | 命名、重複、公開 API |
| 仕様 | issue/仕様ドキュメントと一致しているか |

[差分のレビュー](/ja/guide/quality/review-diffs/) と組み合わせ可能。高リスク項目は [人間による承認パターン](/ja/cases/workflows/human-approval-patterns/) を経由する。

## よくある誤り

- モデルに「LGTM」とだけ言わせ、具体的根拠がない
- 未消毒の完全な PR 説明を CI プロンプトに連結する（インジェクションリスク）
- レビュー通過だが CI テスト未実行
- 自動マージ Bot が有効でブランチ保護がない

## 安全境界

- レビューは読み取り専用権限。修正は**新しい commit** で人間がトリガーする
- レビューログにユーザー PII や秘密鍵を記録しない

## 受け入れチェックリスト

- [ ] レビュー出力が具体的なファイル/行に遡れる
- [ ] P0 問題がマージをブロックするか修正済み
- [ ] チームの review チェックリストと整合している
- [ ] 争点について maintainer が最終決定を下している

## 関連章

- [Cloud コードレビュー](/ja/guide/web-and-cloud/code-review/)
- [Pull Request の作成](/ja/guide/web-and-cloud/create-pull-requests/)

---

**状態：** verified  
**対象製品：** CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の現在公開されている code review / pull request 関連 use cases、および本ハンドブック検証済みの品質、diff レビュー、Cloud 関連章を相互参照して再確認済み。本ページは「マージ前の構造化レビュー、読み取り専用レビュー、人間による最終承認」という安定した原則のみを確認しています。
