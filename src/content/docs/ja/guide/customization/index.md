---
title: カスタマイズとプロジェクト設定
description: 個人の好み、AGENTS.md、設定、ルールの優先順位——Codex を長期的にあなたのやり方で動かす。
sidebar:
  order: 40
locale: ja
source_locale: zh-CN
source_revision: 3a2992b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Codex は「今回どう聞くか」だけでなく、**永続的な設定**によってあなたとチームの約束を覚えます。この章では、どの要求を会話に残し、どれをプロジェクトに沈めるかを主に区別します。

「このディレクトリは触らない」「先にテストを走らせる」「デフォルトでこのモデルを使う」など、同じことを繰り返し言い始めたら、この章が扱う問題です。

## 内容

- 個人の好み、プロジェクト説明、チームルール、一時的なプロンプトの**上書き関係**
- `AGENTS.md` に何を書き、何を書かないか
- 設定ファイルと承認／サンドボックス方針をどの層で管理するか

## 対象読者

| 読者 | 先に読むページ |
|---|---|
| 初めてタスクを動かした | [プロジェクト説明](/ja/guide/customization/project-instructions/) |
| リポジトリに協業規範を固定したい | [AGENTS.md とは](/ja/guide/customization/agents-md/what-is-agents-md/) |
| CLI/App の挙動を統一したい | [設定の基礎](/ja/guide/customization/configuration/config-basics/) |

## この章が扱うこと

Codex を使い始めてしばらくすると、多くの人が同じ種類の問題に直面します。ルールは書いたのに、完全には効いていない気がする。あるいは、場所ごとにルールがぶつかっている。

この章では、協業ルールを層ごとに置く方法を主に論じます。

- どれが個人の習慣か
- どれがリポジトリ共有ルールか
- どれが組織レベルのハード境界か
- どれが今回タスクだけの一時要求か

層が曖昧だと、「書いたはずのルールが、効くべきときに効かない」が起きやすいです。

## よくある層分け（概念）

層を理解すると、「ルールを書いたのに効かない」混乱を避けやすくなります。クライアント、組織のマネージド機能、バージョン実装は異なる場合がありますが、まずは次の層で考えてよいです。

```text
1. 組織／チームのマネージド方針（配布済みの場合）
2. プロジェクトレベルの AGENTS.md / プロジェクト指示（リポジトリ内）
3. ユーザーレベルの設定と好み（本機の ~/.codex など）
4. 現在タスクの一時要求と @ 参照
```

**原則：** 「組織の強制」に近いほど、単発タスクで安易に緩めない。現在タスクに近いほど柔軟で、セッション終了とともに失われやすい。具体的な precedence は、現在のクライアントと公式ドキュメントを基準にしてください。

## よくある誤解

### 1. prompt が書けるなら、長期設定は不要？

短いタスクなら足りることもあります。継続協業になると、繰り返し要求を下に沈めたくなります。

### 2. すべてのルールを `AGENTS.md` に入れればよい？

そうでもありません。次のような場所が適しています。

- 個人の好み
- 設定ファイル
- 組織のマネージド方針
- 現在タスクの prompt

### 3. 設定は多いほど良い？

設定が散らばり、ルールが長く、層が乱れると、人もツールも「誰の言うことを聞くか」が分からなくなります。

## 本章ナビゲーション

| テーマ | ページ |
|---|---|
| AGENTS.md | [概要](/ja/guide/customization/agents-md/what-is-agents-md/) · [スコープと優先順位](/ja/guide/customization/agents-md/scope-and-precedence/) · [効果的なプロジェクト指示の書き方](/ja/guide/customization/agents-md/writing-effective-instructions/) |
| プロジェクト指示 | [プロジェクト説明](/ja/guide/customization/project-instructions/) |
| メモリ | [メモリと永続コンテキスト](/ja/guide/customization/memories-and-persistent-context/) |
| 仕組みの選び方 | [適切な仕組みの選択](/ja/guide/customization/choosing-the-right-mechanism/) |
| 設定ファイル | [設定の基礎](/ja/guide/customization/configuration/config-basics/) · [Profile](/ja/guide/customization/configuration/profiles/) |
| 個人の好み | [個人の好み](/ja/guide/customization/personal-preferences/) |
| ルール | [許可と拒否](/ja/guide/customization/rules/allow-and-deny-patterns/) · [コマンドルール](/ja/guide/customization/rules/command-rules/) · [チーム方針](/ja/guide/customization/rules/team-rules/) |
| 例 | [Monorepo での AGENTS.md](/ja/guide/customization/examples/monorepo-agents-md/) |

Rules の細目は着手済み。設定の詳細ページはカスタマイズモジュールとともに継続補充されます。

## 推奨順序

Codex の協業ルールを初めて体系的に整理するときは、次の順がおすすめです。

1. まずプロジェクトルールを整理
2. 次に `AGENTS.md` を補う
3. 個人の好みを分離
4. 最後に設定ファイルと細かいルール制御

最初から設定キーを大量に触るより、乱れにくいです。

ルールは多さより、置き場所が重要です。

## よくあるミス

- 長いアーキテクチャ文書を `AGENTS.md` に詰め、重要な制約が埋もれる
- 会話でチーム規範を繰り返すがリポジトリに載せず、協業者の体験がばらける
- 個人本機でサンドボックスを緩め、共有リポジトリで同権限を前提にする

## 受け入れチェックリスト

- [ ] 四層設定の優先順位を説明できる
- [ ] リポジトリに短い `AGENTS.md`（または同等のプロジェクト指示）がある
- [ ] 機密操作は承認フローに任せ、文字ルールでモデルを「脅す」つもりにしない

## 参考
- OpenAI Codex ドキュメント：[https://developers.openai.com/codex](https://developers.openai.com/codex)
---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** OpenAI の現行ヘルプセンターと Codex 関連設定資料は、ユーザーレベルの `~/.codex` 設定、組織レベルのマネージド機能、プロジェクトレベルの協業説明の層分けを依然として明示している。本ページは「優先順位」をより保守的な一般的層分けに書き換え、特定実装を絶対ルールとして書かない。  
**最終検証：** 2026-07-26
