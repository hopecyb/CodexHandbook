---
title: 設定 Profile
description: 独立した設定ファイルを使い、Codex CLI の基本設定に名前付きの設定一式を重ねます。
locale: ja
source_locale: zh-CN
source_revision: 7043ada
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

現在の Codex CLI では、`--profile <name>` を指定すると、`$CODEX_HOME/<name>.config.toml` が基本のユーザー設定に重ねられます。これは主に CLI 向けの機能であり、デスクトップ App 全体で使える汎用的な「ワンクリックモード」と説明すべきではありません。

## 最小構成の例

基本設定には、共通の既定値を残します。

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

読み取り専用レビュー用の profile：

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

起動方法：

```bash
codex --profile review
# 短縮形
codex -p review
```

ローカルにインストールしたバージョンで動作を確認します。

```bash
codex --help
```

現在のヘルプには、profile ファイルのパスと設定の重ね合わせが説明されているはずです。バージョンによって内容が異なる場合は、ローカルの出力と公式の設定リファレンスを優先してください。

## Profile に適した用途

| Profile | 目的 | 境界の例 |
|---|---|---|
| `review` | 読み取り専用の確認 | read-only、書き込みなし |
| `workspace` | 日常的なプロジェクト変更 | ワークスペース内だけに書き込み、必要に応じて承認 |
| `ci` | 非対話型の検査 | 出力を固定し、push は行わない |

Profile は、設定の開始点をひとまとめに保存するだけです。組織の requirements を上書きすることも、プロンプトを自動的に安全にすることもありません。特に `danger-full-access` を、気軽に使う既定の profile にしないでください。

## Permission Profile と混同しない

- **設定 Profile**：`--profile name` で `<name>.config.toml` を選択し、さまざまな Codex 設定を重ねます。
- **Permission Profile（Beta）**：`default_permissions` と `[permissions.<name>]` で、ファイルシステムとネットワークの境界を定義します。

どちらも profile と呼ばれますが、目的と設定構造は異なります。現在の Permission Profile は従来の `sandbox_mode` とも併用しません。どちらか一方の権限システムを選んで設定してください。

## チームで使う場合の境界

設定 Profile はユーザーの Codex home に置かれ、現在のバージョンでは、そのままプロジェクト設定としてコミットされるものではありません。チームはレビュー済みのサンプルファイルをドキュメントで提供し、各メンバーに明示的なインストールと確認を求められます。リポジトリを clone しただけで個人 profile が自動的に有効になるとは想定しないでください。

## 受け入れ確認

1. `codex --help` を実行し、現在のバージョンが `-p/--profile` をサポートしていることを確認する。
2. 読み取り専用タスクで `review` を試す。
3. ワークスペース外のファイル読み取りやファイル書き込みを要求し、想定どおりに境界で阻止されることを確認する。
4. ファイル名だけを信用せず、有効になった設定を確認する。

## 公式情報

- [Codex configuration schema](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Codex CLI ソースコードの設定レイヤー](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)

---

**ステータス：** verified

**対象製品：** CLI

**最終確認：** 2026-08-26（ローカル環境：`codex-cli 0.148.0`）
