---
title: ログインと認証
description: ローカルクライアントと Cloud で正しいログイン方法を選び、現在の ID を安全に確認します。
locale: ja
source_locale: zh-CN
source_revision: e17d14f
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 60
reviewed_at: 2026-08-26
---

Codex で OpenAI モデルを使う個人向けログイン方法は二つあります。

- **ChatGPT でログイン**：サブスクリプションの利用枠を使い、ChatGPT ワークスペースの権限とデータポリシーを継承する
- **API key でログイン**：API の利用量に応じて課金され、API organization のデータポリシーと管理ポリシーを継承する

ChatGPT デスクトップ App、Codex CLI、IDE 統合でのローカル作業は、どちらの方法もサポートします。**Codex Cloud には ChatGPT でのログインが必要です。**

## ChatGPT でログインする

ローカルクライアントはブラウザを開いて認証し、認証情報をクライアントへ返します。

- デスクトップ App：ログアウト状態の画面でログインを続ける
- CLI：`codex login` を実行する
- IDE：ログアウト状態の画面で ChatGPT によるログインを選択する

ログイン後、現在のアカウントとワークスペースを確認してください。個人スペースと会社のワークスペースが同時にある場合は特に重要です。

## API key でログインする

OpenAI Platform で key を作成した後、コマンド履歴へ直接書かないでください。CLI では標準入力を使います。

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

デスクトップ App では「別の方法でログイン」から、IDE では「Use API Key」から入ります。API key はローカル作業と信頼された CI に適していますが、ChatGPT ワークスペースまたは Cloud に依存する機能は提供しません。

## CLI の ID を確認してログアウトする

```bash
codex login status
codex logout
```

CLI と IDE はキャッシュされたログイン情報を共有します。一方からログアウトすると、もう一方も次回起動時に再ログインが必要になる場合があります。

## 認証情報のセキュリティ

- `~/.codex/auth.json` を commit せず、チケット、チャット、ログにも貼り付けない
- OS の認証情報ストレージを優先し、ファイルに保存された token はパスワードとして扱う
- CI では専用で取り消し可能な認証情報を使い、個人の長期 key を再利用しない
- Codex Cloud はコードリポジトリへ直接アクセスするため、アカウントで MFA を有効にする。組織の SSO では管理者が MFA を強制する
- 組織の制限を回避するために個人の key へ切り替えず、最初にワークスペースと managed policy を確認する

## ログイン成功後も利用できない場合

次の順序で確認します。

1. 現在のアカウントまたは API organization が正しいか。
2. 正しい ChatGPT ワークスペースに入っているか。
3. 対象機能に API key ではなく ChatGPT ログインが必要か。
4. プラン、seat、role、管理者ポリシーでアクセスが制限されているか。
5. 最後にクライアントキャッシュ、ネットワーク、バージョンを確認する。

CLI のログインには専用ログがあり、公式サポートまたはログイン問題の調査時に利用できます。ログも先に機密情報を確認してください。

プランの境界は[アカウント、プラン、アクセス](/ja/guide/getting-started/account-plans-and-access/)を、完全な詳細は[公式 Authentication ページ](https://learn.chatgpt.com/docs/auth)を参照してください。

---

**状態：** verified

**対象製品：** App / CLI / IDE / Cloud

**検証根拠：** 現在の公式 Authentication ページを照合し、ChatGPT と API key による二種類のローカルログイン、Cloud の ChatGPT ログイン要件、CLI コマンド、キャッシュ共有、認証情報ストレージの境界を確認しました。

**最終検証：** 2026-08-26
