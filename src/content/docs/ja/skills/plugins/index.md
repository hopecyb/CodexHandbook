---
title: Plugins
description: 再利用可能な Skills、コネクタ、MCP、Hooks、タスクテンプレートの組み合わせを参照、インストール、管理します。
locale: ja
source_locale: zh-CN
source_revision: 33c9fe2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Plugin は機能を組み合わせて配布する単位です。Skills、コネクタ、MCP サーバー、ブラウザ拡張、Hooks、Scheduled task のテンプレートを含めることができます。実際の作業を行うのは、Plugin に含まれるこれらのコンポーネントです。

## 対象読者

- 公開ディレクトリから既成の機能セットをインストールしたい利用者
- チームの手順、ツール、ガードレールを一つのバージョン管理単位として配布したい保守担当者
- 配布元、外部サービスの権限、Plugin Hook をレビューする必要がある管理者

## 現在サポートされる画面

| 画面 | 参照 / インストール | 使用 |
|---|---|---|
| ChatGPT Web とデスクトップ App | Plugins タブ | Chat と Work |
| ChatGPT Mobile | 主な管理画面ではない | アカウントにある Plugin を使用 |
| ChatGPT デスクトップ App 内の Codex | Plugins タブ | Codex タスク |
| Codex CLI | `/plugins` ブラウザ。インストール後に新しいセッションを開始 | Codex 環境 |
| IDE 拡張 | **Plugin はサポートしない** | MCP や Skill など、IDE が個別にサポートする機能は使用可能 |

## 読む入口

- [Plugins の概要](/ja/skills/plugins/plugins-overview/)：コンポーネント、サポート範囲、インストールの検証、セキュリティレビューを理解する
- [拡張機能マップ](/ja/skills/capability-map/)：Plugin、Skill、MCP、Hook、Scheduled task を比較する

## インストール前に確認すること

1. 配布元と保守担当者は誰か。
2. どの Skills、コネクタ、MCP、ブラウザ機能、Hooks が含まれるか。
3. 外部アカウントへの接続が必要か。どの scope を取得するか。
4. Hook は `/hooks` でレビューされ、信頼済みになっているか。
5. チームはどのように無効化、更新、ロールバック、認可の取り消しを行うか。

## 公式情報

- [OpenAI：Plugins](https://learn.chatgpt.com/docs/plugins)

---

**状態：** verified

**対象製品：** ChatGPT Web / デスクトップ App / Mobile、Codex デスクトップと CLI。IDE 拡張は Plugin をサポートしません

**最終検証：** 2026-08-26
