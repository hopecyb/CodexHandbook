---
title: Cloud 環境
description: Codex Cloud の runtime、依存関係、setup、cache、リポジトリの開始点を設定します。
locale: ja
source_locale: zh-CN
source_revision: f7c7188
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

Cloud 環境は、Codex が特定のリポジトリで何をインストールし、どう実行するかを定義します。環境はノート PC の設定を継承しません。ローカルでは動くのに Cloud で失敗する場合は、まず runtime、依存関係、変数、ネットワークを比較してください。

## 各チャットの実行順序

1. コンテナを作成し、選択したブランチまたは commit SHA を checkout する。
2. setup script を実行する。cache を再利用する場合は maintenance script も実行できる。
3. インターネットポリシーを適用する。
4. Agent がコマンド、編集、検証のループを実行し、適用される `AGENTS.md` を読む。
5. 回答と diff を返し、follow-up または PR の作成へ進める。

デフォルトの `universal` イメージには、一般的な言語、package、ツールが事前インストールされています。環境設定で Python、Node.js などのバージョンを固定し、setup script で追加の依存関係をインストールできます。

## 最小限の再現可能な設定

pnpm プロジェクトでは、まず CI と同じ Node.js バージョンを環境で固定し、次を設定します。

```bash
corepack enable
pnpm install --frozen-lockfile
```

リポジトリルートの `AGENTS.md` に次を記述します。

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

setup と Agent フェーズは別の Bash セッションです。setup で一時的に `export` した値は自動的に引き継がれません。機密でない値は環境設定で指定するか、公式の推奨に従って shell 設定へ永続化してください。

## cache と maintenance

Cloud は新しいチャットと follow-up を高速化するため、コンテナ状態を最大 12 時間 cache します。cache の復元後、チャットで指定したブランチを checkout し、maintenance script で依存関係を更新できます。

setup、maintenance、環境変数、Secrets を変更すると cache は自動的に無効になります。リポジトリの変更で cache に互換性がなくなった場合は、手動で **Reset cache** を実行してください。Business と Enterprise の環境 cache は、その環境へアクセスできるユーザー間で共有される場合があり、reset は同じワークスペースのほかのユーザーにも影響します。

## 環境変数と Secret

- 環境変数は setup と Agent の両フェーズで利用できる
- Secret は setup フェーズだけで復号され、Agent の開始前に削除される
- setup フェーズはインターネットへアクセスできる
- Agent フェーズはデフォルトでオフライン。環境ごとにアクセスを許可できる

これらの境界は混同されやすいため、次の章で詳しく説明します：[Secrets と環境変数](/ja/guide/web-and-cloud/secrets-and-variables/)。

## 整合性チェックリスト

| 確認項目 | 目標 |
|---|---|
| 開始ブランチ / commit | タスク説明と一致 |
| runtime バージョン | CI または本番の制約と一致 |
| lockfile | frozen install を使用 |
| setup | 再実行可能、非対話、失敗時に停止 |
| 検証コマンド | `AGENTS.md` に記述 |
| ネットワーク | Agent には必要なドメインと method だけを許可 |

## 公式情報

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [codex-universal イメージ](https://github.com/openai/codex-universal)

---

**状態：** verified

**対象製品：** Cloud

**最終検証：** 2026-08-26
