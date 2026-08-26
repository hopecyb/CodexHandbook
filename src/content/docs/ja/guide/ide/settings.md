---
title: IDE 拡張の設定
description: 共有する Agent 設定と VS Code 系エディタの動作設定を区別します。
locale: ja
source_locale: zh-CN
source_revision: d4a3506
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 80
reviewed_at: 2026-08-26
---

IDE には二つの設定レイヤーがあります。

| 設定レイヤー | 保存場所 | 担当すること |
|---|---|---|
| Codex Agent の設定 | `config.toml` | モデル、推論強度、権限、サンドボックス、MCP、パーソナライズ。CLI と共有する |
| エディタの設定 | VS Code の設定システムにある `chatgpt.*` | サイドバー、メッセージのキュー、送信キー、review の表示、言語、フォント |

リポジトリのルールは引き続き `AGENTS.md` に記述し、個人のエディタ設定には入れないでください。

## 設定を開く

Codex サイドバーで歯車を選択し、**Codex Settings** を選びます。よく使う Agent オプションはパネルで変更できます。また、**Open config.toml** を選び、現在有効な設定レイヤーを編集することもできます。

エディタの動作設定は、エディタの Settings で `@ext:openai.chatgpt`、`Codex`、または特定のキー名を検索します。

## 先に理解したい設定

| キー | デフォルト | 変更する場面 |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | 拡張の起動後、自動的にサイドバーへフォーカスしたい |
| `chatgpt.followUpQueueMode` | `queue` | `steer` に変更し、新しいメッセージで現在の実行を誘導したい |
| `chatgpt.composerEnterBehavior` | `enter` | 複数行プロンプトを誤って送信することが多い |
| `chatgpt.reviewDelivery` | `inline` | `/review` を独立したチャットに表示したい場合は `detached` を使う |
| `chatgpt.localeOverride` | 自動 | UI 言語を固定したい |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | リポジトリとツールチェーンが WSL2 にある |

`chatgpt.cliExecutable` は Codex CLI の開発にのみ使用します。一般ユーザーは拡張に内蔵された実行ファイルを手動で上書きしないでください。一部の機能が動作しなくなる可能性があります。

## 設定の優先順位を実務的に理解する

- 組織ポリシーは越えられない上限を定義する
- `config.toml` は Agent のデフォルト動作を決める
- `AGENTS.md` はリポジトリとディレクトリのルールを与える
- エディタ設定は IDE の使用体験だけを変える
- 単発のプロンプトは今回のタスク目標と境界を補う

設定が「反映されない」場合は、どのレイヤーを変更したかを先に確認し、次に上位ポリシーによる制約を確認してください。詳しくは[スコープと優先順位](/ja/guide/customization/agents-md/scope-and-precedence/)を参照してください。

## 変更後の検証

一度に一項目だけ変更してください。たとえば `chatgpt.reviewDelivery` を `detached` に変更した後、Git リポジトリで `/review` を実行し、独立したレビューチャットが開くかを確認します。元の値を記録し、想定どおりでなければ復元してエディタを再読み込みしてください。

## 公式情報

- [Codex IDE 設定リファレンス](https://learn.chatgpt.com/docs/ide/settings)
- [設定の基本](https://learn.chatgpt.com/docs/config)

---

**状態：** verified

**対象製品：** IDE

**最終検証：** 2026-08-26
