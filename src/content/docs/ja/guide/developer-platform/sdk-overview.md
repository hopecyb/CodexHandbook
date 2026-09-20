---
title: 'SDK 概要：ローカルタスクとクライアント統合'
description: Codex SDK、非対話 CLI、App Server、自分で構築するリモートタスクサービスを区別する。
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 実行場所、スレッドのインターフェース、統合の境界を公式 SDK と App Server の文書で確認した。最小例は構文チェックのみで、認証したモデル呼び出しは行っていない。
  evidence:
    - label: Codex SDK 公式文書
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Codex App Server 公式文書
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: ja
source_locale: zh-CN
source_revision: e888ae6
translation_status: draft
translated_at: '2026-09-20'
---

Codex SDK はプログラムからローカルの Codex Agent を制御する。「ローカル」は SDK と Agent を実行するマシンであり、自分の PC の場合も管理下の CI runner の場合もある。Cloud タスクを作成・照会し、成果物をダウンロードするホスト型 HTTP サービスと同一視してはいけない。[公式 SDK 文書](https://learn.chatgpt.com/docs/codex-sdk)を参照。

## 統合目的に応じて入口を選ぶ

| 目的 | 出発点 | 自分で管理すること |
|---|---|---|
| スクリプトで一度だけ実行 | [`codex exec`](/ja/guide/developer-platform/non-interactive/codex-exec/) | 作業ディレクトリ、入力、終了状態、成果物の保存 |
| プログラムから実行・継続 | Codex SDK | プログラムのライフサイクル、環境、失敗処理、検証 |
| セッション、承認、ストリーミングイベントを持つクライアント | App Server | 操作画面、接続、認証情報の扱い、デプロイ |
| 複数ユーザー向けリモートタスク基盤 | 自作のサービス構成 | キュー、テナント分離、資格情報、保存、取り消し、コールバック |

最後はエンジニアリング上の選択であり、SDK に付属するホスト型基盤ではない。公式文書は SDK を自動化と CI に、App Server をクライアントの深い統合に位置づける。App Server は双方向 JSON-RPC で要求とイベントを交換する。[App Server 文書](https://learn.chatgpt.com/docs/app-server)を参照。

## TypeScript SDK の最小呼び出し

公式 TypeScript パッケージは `@openai/codex-sdk` で、Node.js 18 以上が必要。以下は同じパッケージの基本インターフェースを JavaScript モジュール構文で示すもので、完全な本番サービスではない。

専用の演習ディレクトリで依存関係をインストールし、実際に解決されたバージョンと lockfile を残す。

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

秘密情報を含まない `README.md` を用意し、以下を `example.mjs` として保存する。

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  '現在のディレクトリの README.md だけを読み、用途を中国語で3項目に要約してください。ファイルの変更や外部操作はしないでください。'
);
console.log(answer.finalResponse);
```

続いて `node example.mjs` を実行する。事前に環境に合った認証を完了し、実際の sandbox と承認設定を確かめる。プロンプトの「読み取りのみ」はタスク上の制約であり、実行環境の制限の代わりではない。モデル呼び出しはアカウントの利用量を消費しうる。このページではインストールも呼び出しも代行していない。

メソッド名と戻り値のフィールドは[公式例](https://learn.chatgpt.com/docs/codex-sdk)と照合した。当サイトは JavaScript の構文だけを確認し、特定の SDK 公開版を固定して実行テストしたわけではなく、架空の成功出力も示さない。再現時はパッケージ版、CLI/runtime、OS、資格情報を含まない認証方法、結果を記録する。

## タスクの継続と再開

同じ thread オブジェクトに再び `run()` を呼び出せる。既存の thread ID は `resumeThread()` に渡せる。再開可能な thread は状態の保存環境に依存し、ID は任意のマシンから照会できる Cloud URL ではない。公式 Python インターフェースもあるので、名称と依存関係はそれぞれの章で確認し、両言語のコードを混ぜない。[thread と言語別インターフェース](https://learn.chatgpt.com/docs/codex-sdk)を参照。

再開後は現在のファイルと履歴の記述が一致するかを先に確認する。[引き継ぎと再開](/ja/guide/agent-work/handoff-and-resume/)も参照。

## 呼び出し成功後の確認

1. **実行場所：** 作業ディレクトリと実際に読んだ・変更したファイルを記録し、プロンプトだけに頼らない。
2. **結果：** 返答、ファイルの差分、テストを確認する。`finalResponse` を得ただけでは業務上の受け入れにならない。
3. **失敗の種類：** ローカルの依存関係・プロセス、認証、モデルサービス、タスク検証の失敗を分け、すべてを 400/429 にまとめない。
4. **再試行の影響：** 既にファイルや外部効果が生じていないかを確認してから再試行を決め、同じ要求をただ繰り返さない。
5. **権限：** 実行環境と使用可能なツールは自分で管理する。SDK という名前だけから Cloud、組織管理、マルチテナント分離を推定しない。

これらは当サイトが勧める統合チェックであり、SDK の戻り値フィールド一覧ではない。実際のフィールドは導入した版の型と公式文書に従う。

## コールバック、キュー、リモート実行との関係

自分の runner に SDK を実行させ、自分のサービスから完了通知を送れる。その場合、キュー状態、HTTP コールバック、署名形式、再試行ポリシーは自分のシステムのプロトコルである。App Server のイベントストリームも、そのまま Webhook アドレスにはならない。

[Webhook とタスクイベントの境界](/ja/guide/developer-platform/webhooks/overview/)と[スクリプトとパイプライン](/ja/guide/developer-platform/non-interactive/scripts-and-pipelines/)を続けて読む。SDK 呼び出しによる Codex Cloud タスク、artifact URL、OAuth 委任の自動作成は約束しない。
