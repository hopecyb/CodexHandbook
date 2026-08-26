---
title: Pull Request を作成する
description: Cloud の結果を、レビューと検証が可能で自動 merge されない PR として引き渡します。
locale: ja
source_locale: zh-CN
source_revision: 70996a7
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 40
reviewed_at: 2026-08-26
---

Cloud タスクが完了したら、最初に要約と diff を確認します。結果が範囲と検証基準を満たしている場合にだけ Pull Request を作成してください。満たしていない場合は、同じチャットで続けて修正します。

## タスクから PR まで

```text
環境と開始ブランチを選択
  → Cloud タスクを実行
  → 要約、ログ、diff をレビュー
  → 必要に応じて follow-up
  → Create Pull Request
  → CI + Codex の追加 review + 人による review
  → merge するかを人が判断
```

プロンプトには「PR を作成し、merge しない」と明記します。ただし、自然言語の制約だけに依存しないでください。リポジトリでもブランチ保護と required checks を有効にします。

## 再利用可能なタスクテンプレート

```text
目標：#42 のログインタイムアウト回帰を修正する。
開始点：main。
範囲：packages/auth/** と対応するテストだけ。
禁止：依存関係の更新、公開 API の変更、main への直接書き込み。
検証：pnpm test --filter auth、pnpm typecheck。
成果物：main 向けの PR を作成するが、merge はしない。
PR の説明には根本原因、変更の要約、テストコマンドと結果、リスク、ロールバック方法を含める。
```

## 作成前のチェック

- [ ] 開始 commit が正しく、まだ push していないローカル入力を見落としていない
- [ ] diff がタスク範囲だけを含む
- [ ] 新しいブランチ名を識別でき、ほかの人の作業を上書きしない
- [ ] テストを実際に実行し、失敗が要約で隠されていない
- [ ] 認証情報、一時ログ、キャッシュ、無関係なフォーマット変更がない
- [ ] 大きな変更を独立してレビュー可能な PR に分割している

## PR の説明で最低限答えること

1. なぜ変更が必要か。
2. 実際に何を変更したか。
3. コマンドと結果を含め、どう検証したか。
4. リスク、制限、ロールバック方法。
5. 明示的に実施しなかったこと。

UI の変更には実際のスクリーンショット、動作の変更には再現手順、migration の変更には互換性とロールバックの説明を追加します。

## 作成後

required checks を待ち、`@codex review` で追加レビューを依頼し、コンテキストを持つ人が主要な diff を確認します。修正が必要な場合は、具体的なコメントを同じ PR ブランチへ返してください。無関係な別ブランチを作って結果を二重化しないでください。

PR の作成と merge は別の権限境界です。Cloud が PR を作成できても、チームの merge ポリシーを回避してよいことにはなりません。

## 公式情報

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)

---

**状態：** verified

**対象製品：** Cloud、GitHub

**最終検証：** 2026-08-26
