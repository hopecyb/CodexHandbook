---
title: ワークフローを Skill にする
description: 同じフローが3回目なら Skill の価値——トリガー、指示、受け入れを一箇所に。
locale: ja
source_locale: zh-CN
source_revision: bc54539
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

同種のタスク（リリースチェック、ドキュメント同期、セキュリティスキャン）をプロンプトのコピペで**3回目**やるなら、[Skill](/ja/skills/overview/) を検討。本章は [ワークフロー手法](/ja/cases/workflows/) と拡張システムを橋渡しします。

## 本ページが解くこと

- プロンプトテンプレートから Skill に上げるタイミング
- Skill に含めるべきもの（指示、リソース、スクリプト）
- チームでの共有とバージョン管理

## キャプチャのシグナル

- 固定手順 + 固定受け入れチェックリスト
- リポジトリテンプレートやスクリプトが必要
- 複数人が一貫した挙動を必要
- 関連タスクでモデルにフローを**自動想起**させたい

キャプチャ不要：一度きりの探索、その日の文脈に強く結びついた小修正。

## 最小限のアプローチ

1. **SKILL.md を明確に**：トリガー、入出力、禁止事項
2. **`references/` を添付**：チェックリスト、サンプル diff
3. **任意 `scripts/`**：反復検証コマンド（[コマンドルール](/ja/guide/customization/rules/command-rules/) と整合）
4. README または AGENTS.md で **Skill 名**に言及
5. **2〜3 回試行**後 `verified` とマーク

入門：[最初の Skill を作成する](/ja/skills/create-your-first-skill/)

## 推奨ワークフロー

```text
成功事例からプロンプトと受け入れを抽出
    → Skill 本文に整理（口語は削り、制約は残す）
    → トリガー説明を追加（「マージ前」「リリース前」）
    → チーム PR レビュー
    → リポジトリ examples/、チーム Plugin、社内技能ライブラリへ
```

[フローを自動化にする](/ja/skills/automations/scheduled-tasks/) との比較：Skill は**対話的ガイド**、Automations は**定期／無人**。

## よくあるミス

- `AGENTS.md` を読むより長い Skill
- 受け入れチェックリストなし——実行品質が漂流
- ローカル秘密が要るスクリプトに SECURITY 注記なし
- Hooks ルールと重複・矛盾

## 安全境界

- [Skill のセキュリティとバージョン](/ja/skills/security/)
- チーム Skill は拡張承認リストに（[Plugin と MCP リスク](/ja/guide/team-enterprise/security/plugin-and-mcp-risk/)）

## 受け入れチェックリスト

- [ ] 新メンバーが Skill だけでタスク完了できる
- [ ] トリガー条件が明確。誤トリガーが少ない
- [ ] チームレベル Skill にバージョンまたは CHANGELOG
- [ ] 元ワークフロードキュメントへの相互リンク

## 参考
- リポジトリ内 [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) と [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)
---

**状態：** verified  
**対象製品：** App / CLI / IDE  
**最終検証：** 2026-07-26  
**検証根拠：** OpenAI Developers の「ワークフローを Skill として保存」公開ユースケースと、本ハンドブックの検証済み Skills、自動化、コマンドルール、拡張リスク章を照合。繰り返しフローを Skill にキャプチャするタイミングと、指示・受け入れの整理に関する安定ガイダンスのみ。
