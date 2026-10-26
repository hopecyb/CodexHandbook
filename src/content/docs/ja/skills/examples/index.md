---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "この索引ページにある執筆、レビュー、調査、自動化の例は、現在のCodex Skillsで扱える一般的なワークフローです。"
  checkedAt: "2026-07-26"
title: "Skillの例"
description: "執筆、レビュー、調査、自動化の4種類のSkill例への入口。"
locale: ja
source_locale: zh-CN
source_revision: "490db95"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

例を選ぶ前に、資料の状態を確認してください。完成したパッケージには入力、参考資料、検証スクリプトがあります。骨組みには資料と実際の確認を追加する必要があり、そのまま検証済みのワークフローとして使うことはできません。

| 例 | 資料の状態 | 確認した範囲 |
|---|---|---|
| [執筆Skill](/ja/skills/examples/writing-skill/) | 完全なsource-backed-writerダウンロードパッケージ | 構造に関する8件の回帰テストが成功。事実と文体は作成者自身が確認したが、モデルの品質は測定していません。 |
| [レビューSkill](/ja/skills/examples/review-skill/) | 完全なscoped-reviewダウンロードパッケージ | 差分の範囲に関する7件の回帰テストが成功。モデルの振り分けと検出率は測定していません。 |
| [調査Skill](/ja/skills/examples/research-skill/) | 完全なevidence-researchダウンロードパッケージ | 出典と証拠の構造に関する8件のテストが成功。モデルの調査品質は測定していません。 |
| [自動化Skill](/ja/skills/examples/automation-skill/) | 完全なquiet-link-monitorダウンロードパッケージ | 状態に関する8件のテストが成功。実際のスケジュール実行と配信は試していません。 |

関連ページ：[最初のSkillを作成する](/ja/skills/create-your-first-skill/)。

[ワークフロー評価方法](/ja/guide/quality/workflow-evaluation/)で、起動条件、境界、形式、品質、所要時間を別々に記録してください。例のスクリプトが成功しても、モデル全体の成功率は示せません。
