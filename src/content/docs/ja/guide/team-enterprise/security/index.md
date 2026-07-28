---
title: セキュリティ
description: チーム級リスク、攻撃面、防御思路の説明ページ——リスクを先に理解し、制御を決める。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

セキュリティグループを細部ページから入ると、断片用語だけ覚えて、何を防いでいるか分からなくなりがちです。

「リスクはどこから来るか」を先に見て、どの層で止め、どの層で審査するかを決める順が分かりやすいです。

## 推奨順序

1. [脅威モデル](/guide/team-enterprise/security/threat-model/)
2. [Plugin と MCP リスク](/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [Prompt 注入](/guide/team-enterprise/security/prompt-injection/)

## 先に見る人

- チーム利用範囲を拡大しようとしている
- 第三者拡張、外部ツール、共有ルールを接続し始める
- 「注意喚起」だけでは解けないリスクを知りたい

セキュリティページの要点は、システム境界で制御すべきリスクを見つけることです。

---

**状態：** verified  
**対象製品：** チーム / エンタープライズシーン  
**検証根拠：** OpenAI 現行 Plugin、アプリ、統合文書は外部接続、動作権限、ソースアクセス、承認境界のセキュリティリスクを継続強調。脅威モデル、Plugin/MCP リスク、Prompt 注入の順で読むセキュリティ小節ナビのみ。  
**最終検証：** 2026-07-26
