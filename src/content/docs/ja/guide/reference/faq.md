---
title: よくある質問
description: 入門と利用時の高頻度質問。
locale: ja
source_locale: zh-CN
source_revision: 3f915e9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

断片的な疑問があるときは FAQ から。完全体系ではなく、次にどこを見るかを素早く示します。

## いつ見るか

- ページが多く、次に何を読むか分からない
- 一つの問題で止まったが、章全体を読むほどではない
- まず方向判断が欲しい

**Q：最初はどのクライアントを使う？**  
A：デスクトップ App。[クライアント選択](/ja/guide/getting-started/choose-your-codex-client/) を参照。

**Q：チェックを飛ばしてすべての変更を受け入れていい？**  
A：推奨しません。[検証と人工复核](/ja/guide/foundations/verification-and-human-review/) を参照。

**Q：prompt に標準テンプレはある？**  
A：フレームワークはあるが魔法はない。[良いタスクの構造](/ja/prompts/task-anatomy/) を参照。

**Q：ハンドブックと公式が矛盾したら？**  
A：公式を優先：[https://developers.openai.com/codex](https://developers.openai.com/codex)。issue 歓迎。

**Q：AGENTS.md、Skill、MCP の違いは？**  
A：[拡張能力マップ](/ja/skills/capability-map/) と [拡張方式の選び方](/ja/skills/choosing-an-extension-method/) を参照。

**Q：推奨標準ワークフローは？**  
A：デフォルトは [探索—計画—実行—検証](/ja/cases/workflows/explore-plan-execute-verify/)。

**Q：Cloud で GitHub 接続、PR 作成は？**  
A：[GitHub 接続](/ja/guide/web-and-cloud/connect-github/) と [Pull Request 作成](/ja/guide/web-and-cloud/create-pull-requests/) を参照。

**Q：CLI を CI に入れられる？**  
A：可能。[非対話モード](/ja/guide/cli/non-interactive-mode/) から始め、承認と権限を設計。

**Q：スラッシュコマンドは？**  
A：クライアントの `/` 補完を基準。学習向け説明は [スラッシュコマンド早見](/ja/guide/reference/slash-commands/)。

**Q：クリエイター/開発者/チームの完全パスは？**  
A：入門パスは記載済み。深度事例は [ユースケース](/ja/cases/use-cases/)。チームガバナンスはロードマップ M6 `11-team-enterprise`。

## よくある誤解

### 1. FAQ は読んでも読まなくてもよい？

初心者には早い起点になりがちです。

### 2. FAQ の答えだけで操作できる？

FAQ は方向判断と、より完全なページへの誘導が主目的です。

### 3. ここにない＝ハンドブックに無い？

トピックページ、学習パス、実践ケースに分散している場合もあります。

## 使い方

迷ったが章全体を読むほどではないとき：

1. FAQ を開く
2. 最も近い質問を探す
3. リンクから該当トピックへ

サイドバーを往復するより省力なことが多いです。

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** 本ハンドブック現行のクライアント選択、ワークフロー、拡張方式、Cloud GitHub フロー、スラッシュコマンド関連入口を逐项相互確認。高頻度質問ナビのみ。易変な製品デフォルト値は単独宣言しない。  
**最終検証：** 2026-07-26
