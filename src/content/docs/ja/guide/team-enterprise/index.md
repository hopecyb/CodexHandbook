---
title: チームとエンタープライズ
description: 採用、標準、管理、セキュリティガバナンス——Codex を大規模に着地させつつ制御を失わない。
sidebar:
  order: 70
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

**チームとエンタープライズ**章はエンジニアリング責任者、プラットフォーム、セキュリティチーム向けです。Codex を個人で使える状態から、チームで管理・監査・振り返り可能な状態へ進めることを主眼に置きます。[学習パス · チーム](/guide/learning-paths/team/) と併読すると、本章はガバナンスと着地寄りです。

まだ個人利用、または基礎に慣れている段階なら後回しでよいです。多人数利用時の境界、プロセス、責任の整理が主題です。

主な問い：

- 誰が使えるか
- どこまでできるか
- 問題時にどう追跡するか
- 高リスク拡張をどう承認するか

## 本章の内容

- 小チーム試行から組織展開への道
- セキュリティ、コンプライアンス、拡張（Plugin/MCP）リスク
- 本ハンドブック他章との相互参照

## 読者向け

| 役割 | 先に読むページ |
|---|---|
| EM / 責任者 | [脅威モデル](/guide/team-enterprise/security/threat-model/) · [acceptable use](/guide/team-enterprise/governance/acceptable-use/) |
| プラットフォームエンジニア | [チームルール](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| セキュリティ | [Plugin と MCP リスク](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt 注入](/guide/team-enterprise/security/prompt-injection/) |

## ガバナンスモデル（概念）

```text
方針（組織マネージド、AUP）
    ↓
標準（AGENTS.md、承認済み拡張リスト）
    ↓
実行（ルール、サンドボックス、Hooks、CI）
    ↓
観測（監査、指標、振り返り）
```

## 本章ナビ（入門）

| テーマ | ページ |
|---|---|
| セキュリティ | [脅威モデル](/guide/team-enterprise/security/threat-model/) · [Plugin/MCP リスク](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt 注入](/guide/team-enterprise/security/prompt-injection/) |
| ガバナンス | [acceptable use 政策](/guide/team-enterprise/governance/acceptable-use/) |

adoption、administration、deployment-patterns などは [chapter-outline](/docs/planning/chapter-outline.md)（リポジトリ計画文書）で補充予定。

## カスタマイズとの関係

- [AGENTS.md 優先順位](/guide/customization/agents-md/scope-and-precedence/) の組織マネージド層
- [チームルール方針](/guide/customization/rules/team-rules/)

## よくあるミス

- シートだけ購入し研修と標準なし
- 個人サンドボックス緩和を組織デフォルトとみなす
- すべてのコミュニティ Plugin をリストなしで承認

## 受け入れチェックリスト

- [ ] 書面 AUP または同等政策がある
- [ ] 高リスク拡張に承認フローがある
- [ ] インシデント連絡先（セキュリティ／プラットフォーム）が明確

## よくある誤解

### 1. 一人で使っている今、読む必要がある？

必ず今深読する必要はありません。Codex が個人ツールからチームシステムになると、prompt の書き方以外の問題が出ます。

### 2. なぜ監査、ガバナンス、政策ばかり？

チーム環境では、長期多人数利用で境界が曖昧になるリスクが大きいからです。

### 3. 概念だけ知りたいなら何から？

- [Plugin と MCP リスク](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [acceptable use 政策](/guide/team-enterprise/governance/acceptable-use/)

個人入門が主なら後回し。チーム展開、権限管理、リスク制御のときに戻ってください。

## 参考

- KimYx0207 セキュリティとエンタープライズ章
- freestylefly/CodexGuide チーム playbook
- stormzhang セキュリティチュートリアル

---

**状態：** verified  
**対象製品：** 組織版 / チーム機能（プランによる）  
**検証根拠：** OpenAI 現行ヘルプセンターと Plugin/アプリ文書は、チームでの Codex/ChatGPT 着地にロールアクセス、Plugin 有効化、動作承認、データ境界、監査責任などのガバナンス層が必要と継続強調。本章ナビとガバナンスモデル、読書順に焦点。具体管理画面パスにバインドしない。  
**最終検証：** 2026-07-26
