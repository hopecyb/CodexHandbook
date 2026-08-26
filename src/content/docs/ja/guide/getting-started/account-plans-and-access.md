---
title: アカウント、プラン、アクセス
description: ChatGPT プラン、API key の利用量、組織ワークスペースの権限を区別します。
locale: ja
source_locale: zh-CN
source_revision: 7e2e8e6
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---

現在、Codex は **ChatGPT プラン**または **API key の従量課金**で利用できます。ただし、この二つの方法で利用できる入口とガバナンスの境界は完全には同じではありません。

## アクセス方法を先に選ぶ

| 方法 | 適している用途 | 利用できる範囲 |
|---|---|---|
| ChatGPT でログイン | 個人の対話作業、デスクトップ、Cloud、組織ワークスペース | ChatGPT プランの上限、ワークスペースの役割、管理者ポリシーに従って実行 |
| API key を使用 | ローカル Codex、スクリプト、CI | API の利用量に応じて課金。ChatGPT ワークスペースまたは Cloud に依存する一部機能は利用不可 |

現在の公式 Pricing ページでは、ChatGPT Work と Codex が Free、Go、Plus、Pro、Business、Edu、Enterprise などのプランに含まれています。ただし、料金、上限、モデル、含まれる機能は変わる可能性があります。このハンドブックでは料金表を複製しません。[公式の最新 Pricing ページ](https://learn.chatgpt.com/docs/pricing)を直接確認してください。

## アカウントがあっても使えない場合がある理由

ログインは第一段階にすぎません。最終的なアクセスは次の条件にも依存します。

1. 現在のプランが、対象の入口または機能を含んでいるか。
2. 現在の地域と製品で利用できるか。
3. 組織から seat、role、ワークスペース権限が割り当てられているか。
4. 管理者が managed configuration でログイン方法、モデル、ローカル機能を制限していないか。
5. 現在の時間枠または週単位の利用上限に達していないか。

## 個人ユーザーのチェックリスト

- 公式ページで正しい ChatGPT アカウントにログインできる
- プランの上限を使っているのか、API の従量課金を使っているのかを理解している
- 対象クライアントで正しい ID が表示される
- 上限に関するメッセージが表示されたら、クライアントを何度も再インストールせず、最新の利用量を確認する

## チームと企業ユーザーのチェックリスト

- 同じメールアドレスの個人スペースではなく、正しいワークスペースを選択している
- 管理者が member、seat、role の設定を完了している
- SSO、MFA、データ保持、地域ポリシーが組織要件を満たしている
- ローカルのログイン方法が managed configuration で別の方式に強制されていない
- API key が正しい API organization に属し、ChatGPT ワークスペースのポリシーと混同されていない

## 判断例

CLI では API key でログインできるのに Cloud ボタンを使えない場合、必ずしもインストールの問題ではありません。Cloud には ChatGPT でのログインが必要であり、ChatGPT プランとワークスペース権限の制御を受けます。API key は主にローカルとプログラムからのワークフローを対象にします。

次は[ログインと認証](/ja/guide/getting-started/sign-in-and-authentication/)を参照してください。

---

**状態：** verified

**対象製品：** App / CLI / IDE / Cloud

**検証根拠：** 現在の公式 Pricing と Authentication のページを照合しました。このページではアクセスモデルと調査順序を記録し、価格、上限、変動の大きい機能一覧は固定しません。

**最終検証：** 2026-08-26
