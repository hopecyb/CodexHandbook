---
title: AGENTS.md のスコープと優先順位
description: グローバル、プロジェクトルート、現在のディレクトリにあるルールが、どのように検出・統合されるかを正確に理解します。
locale: ja
source_locale: zh-CN
source_revision: 698ab44
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

Codex は実行を開始するたびに、指示のチェーンを組み立てます。重要なのは、「組織ポリシー、設定、プロンプト」を含む推測上の順位表ではなく、まず `AGENTS.md` 自体の検出順序を正確に理解することです。

## 公式の検出順序

1. **グローバル層**：Codex home（既定では `~/.codex`）で、最初に `AGENTS.override.md` を探し、なければ `AGENTS.md` を読みます。この層で使うのは、最初に見つかった空でないファイルだけです。
2. **プロジェクト層**：プロジェクトルート（通常は Git ルート）から現在の作業ディレクトリまで順にたどります。各ディレクトリで `AGENTS.override.md`、`AGENTS.md`、設定済みの fallback ファイル名を順に確認し、各階層につき最大 1 ファイルを採用します。
3. **統合**：ルートから現在のディレクトリに向かって内容を連結します。現在のディレクトリに近いファイルほど後に現れるため、それ以前の指示を上書きできます。

Codex は空のファイルを読み飛ばします。統合した内容が `project_doc_max_bytes` に達すると読み込みを停止し、既定の上限は 32 KiB です。

## Monorepo の例

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

`services/payments` から起動すると、ルートの `AGENTS.md` が先に読み込まれます。このディレクトリに `AGENTS.override.md` がある場合、同じディレクトリの `AGENTS.md` は無視されます。

ルートファイルには、パッケージマネージャー、共通テスト、セキュリティ上の禁止事項など、リポジトリ全体のルールを書きます。ネストしたファイルには、そのサービス固有の差分だけを書いてください。内容の 80% が同じファイルを複製しないようにします。

## タスクプロンプトとの組み合わせ

`AGENTS.md` は、長期的かつバージョン管理可能なプロジェクト規約を担います。プロンプトは、今回の目標、範囲、受け入れ基準を担います。例：

```text
適用される AGENTS.md に従ってください。今回は services/payments/retry.ts とテストだけを変更し、
シークレットのローテーションは行わず、make test-payments を実行して実際の結果を報告してください。
```

プロンプトを書いても、システム、組織、サンドボックス、権限による越えられない境界が利用可能になるわけではありません。競合があるときは「以前のルールを無視して」の一言で優先順位を推測せず、まず Codex に読み込んだ instruction sources を列挙させ、その後でタスク範囲を狭めてください。

## 実際に読み込まれた内容を確認する

対象ディレクトリから新しいセッションを開始し、次のように質問します。

```text
作業を始める前に、今回読み込んだ AGENTS.md / AGENTS.override.md の出典を順番に列挙し、
各ファイルが追加する制約をそれぞれ要約してください。ファイルは変更しないでください。
```

`AGENTS.md` は起動時に読み込まれます。変更後は新しい実行またはセッションで確認し、現在のセッションに自動反映されたと想定しないでください。

## fallback と容量

既存の `TEAM_GUIDE.md` を使う場合は、次のように設定できます。

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

fallback は、同じディレクトリにより優先度の高いファイルがない場合だけ有効です。上限を増やす前に、重複や無関係な背景説明を削除し、重要なルールがコンテキストから押し出されないようにしてください。

## 公式情報

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

---

**ステータス：** verified

**対象製品：** App、CLI、IDE、Cloud

**最終確認：** 2026-08-26
