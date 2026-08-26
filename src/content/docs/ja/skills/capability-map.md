---
title: 拡張機能マップ
description: タスク、ルール、手順、ツール、ガード、配布、起動、並行処理という八つの責務から Codex の拡張システムを理解します。
locale: ja
source_locale: zh-CN
source_revision: fa5604a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

拡張の仕組みが混同されやすいのは、同じワークフローの中で一緒に使われることが多い一方、解決する問題はそれぞれ異なるためです。

このページでは最初にシステム全体を整理します。プロンプトと `AGENTS.md` はタスクとルールを提供し、Skill は再利用可能な手順を提供し、MCP は外部ツールを提供します。Hook はライフサイクルの各時点をガードし、Plugin は機能を組み合わせて配布し、Scheduled task は時刻に従って起動します。これらは組み合わせて使うものであり、固定された「アップグレード順序」はありません。

## システムアーキテクチャ

![Codex の再利用可能な作業システムのアーキテクチャ](/diagrams/codex-work-system-architecture-ja.svg)

図を読むときは、次の三点を押さえてください。

- **タスク入力**は今回何をするかを決め、プロジェクトルールは毎回必ず守ることを決める
- **実行能力**は扱える範囲を広げるが、結果が正しいことを自動的に証明しない。MCP、子 Agent、スクリプトも権限と検収の制約を受ける
- **配布と起動**はワークフローそのものではない。Plugin は機能を組み合わせ、Scheduled task は指定時刻に一回の実行を開始する

## 八つの責務

| 責務 | 仕組み | 最も適した問題 | 担当しないこと |
|---|---|---|---|
| 現在のタスク | プロンプト | 今回行うこと、範囲、検収 | 長期的なプロジェクトルール |
| 永続ルール | `AGENTS.md` | リポジトリのコマンド、規約、ディレクトリ境界 | 特定タスクの完全な手順 |
| 再利用可能な手順 | Skill | 安定した手順、参考資料、テンプレート、補助スクリプト | 外部システムへの権限を新たに得ること |
| 外部ツール | MCP / Connector | Codex にリポジトリ外のデータ参照や操作をさせる | ビジネス目標が正しいかを判断すること |
| ライフサイクルのガード | Hook | セッションやツール呼び出しの前後で記録、検査、コンテキスト追加、ブロックを行う | テストと人間によるレビューの代替 |
| 組み合わせと配布 | Plugin | Skills、コネクタ、MCP、Hooks、タスクテンプレートをパッケージ化する | すべての機能を自動的に信頼可能にすること |
| 時間による起動 | Scheduled task | 検証済みタスクを定時または周期的に実行する | 明確なプロンプトと終了条件の代替 |
| 並行した分担 | 子 Agent | 相互に独立した調査、テスト、レビューを分担する | 書き込み競合と調整コストを自動的になくすこと |

## 一つのタスクでこれらを組み合わせる方法

チームが依存関係のリスクを毎週確認する場合を考えます。

1. `AGENTS.md` で許可するパッケージマネージャー、テストコマンド、変更禁止ディレクトリを定める。
2. `dependency-audit` Skill で、依存関係の収集、アドバイザリの照合、優先度付け、検証の手順を固定する。
3. GitHub またはパッケージソースの MCP で外部情報を取得する。読み取り専用権限を優先する。
4. Hook で実際の Secret を含む出力をブロックするか、外部ツールの呼び出しを記録する。
5. Plugin で Skill、MCP 設定、Hook を一緒にチームへ配布する。
6. Scheduled task で週に一度起動し、レポートまたは issue の下書きだけを作成して、公開前に人がレビューする。

レイヤーが少ないからといって、設計が「高度ではない」という意味ではありません。ローカルの依存関係を一度だけ確認するなら、明確なプロンプトと既存のターミナルコマンドだけで十分な場合があります。

## よくある対応関係

| 要件 | 推奨する選択 |
|---|---|
| コードスタイルとテストコマンドを統一する | AGENTS.md |
| 「PR をレビューする」手順を標準化する | Skill |
| Jira / Linear のチケットを読む | MCP |
| チーム全体に一式の統合をインストールする | Plugin |
| 各コミット前に Secret をスキャンする | Hooks |
| 毎週月曜に週報の下書きを自動生成する | Automations（+ 人が公開） |

## 一度の成功をチーム資産にする

次の流れを使い、さらに仕組み化する必要があるかを判断できます。

| 段階 | 形式 | 適している状況 |
|---|---|---|
| 一度限りのプロンプト | 現在の会話にあるタスク説明 | 一度だけ行う、またはまだ問題を探索中 |
| テンプレート | 「目標、コンテキスト、制約、検収」の固定された骨格 | 同じ種類のタスクが繰り返されるが、手順はまだ調整中 |
| Skill | `SKILL.md` とテンプレート、参考資料、スクリプト | 手順が安定し、成功条件が明確 |
| Plugin | Skills、コネクタ、MCP、Hooks、テンプレートを組み合わせたパッケージ | 統一したインストール、更新、ガバナンスが必要 |
| Scheduled task | 保存されたタスク、時刻ルール、実行履歴 | 手動で検証済みで、周期的に実行する価値がある |

MCP、Hook、子 Agent は、この仕組み化の段階で必ず通るものではありません。タスクが外部ツール、ライフサイクルのガード、並行した分担を実際に必要とする場合だけ追加します。

詳しい分岐は[拡張方法の選び方](/ja/skills/choosing-an-extension-method/)を参照してください。

## 現在の製品境界

- Codex Skills は `SKILL.md` を含むディレクトリで定義し、スクリプト、参考資料、アセットを追加できる。Codex は必要に応じて完全な説明を読み込む
- デスクトップ App、Codex CLI、IDE 拡張は、同じ Codex host 上で MCP 設定を共有する
- Plugins は現在、ChatGPT の対応画面、Codex のデスクトップ体験、Codex CLI で使用できる。IDE 拡張は Plugin の参照と使用をサポートしない
- Scheduled task は ChatGPT Web またはデスクトップ App で作成、管理する。CLI と IDE はプロンプト、Skill、スクリプトの事前テストに使えるが、Scheduled の管理画面は提供しない
- 子 Agent は独立した読み取り専用の調査、テスト、レビューに適している。同じファイル群へ並行して書き込むと競合コストが増える

製品の入口は今後も変わる可能性があります。具体的に設定する前に、[機能比較](/ja/guide/reference/feature-comparison/)と次の公式情報も確認してください。

## 公式情報

- [Skills と Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Codex Skills を構築する](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Codex 子 Agent](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**状態：** verified
**対象製品：** ChatGPT Web / デスクトップ App / Codex CLI / IDE（各仕組みの対応範囲は本文を参照）
**検証根拠：** 2026-08-25 時点で参照できる OpenAI 公式の Skills、Plugins、MCP、Hooks、Scheduled tasks、Subagents の文書に基づき、責務モデルと入口の境界を再構成しました。
**最終検証：** 2026-08-25
