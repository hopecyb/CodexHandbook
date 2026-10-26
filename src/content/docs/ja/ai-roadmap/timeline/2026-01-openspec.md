---
title: OpenSpec（仕様駆動開発）
description: OpenSpec は仕様と変更成果物を整理する具体的なプロジェクトである。仕様駆動開発はより広い作業方法であり、プロジェクトのあるバージョンが方法の起源というわけではない。
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 以下の一次資料に記載された出来事やプロジェクトの説明を確認済み。学習上の提案は筆者の判断であり、資料の確認を製品の実地検証とは扱っていない。
  evidence:
  - label: OpenSpec v1.0.0 のリリースノート
    href: https://github.com/Fission-AI/OpenSpec/releases/tag/v1.0.0
locale: ja
source_locale: zh-CN
source_revision: "1a34023"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

## 確認できる出来事と範囲

**種別：プロジェクトのバージョン · 初回公開日順ではない。** プロジェクトの公式リリースページには v1.0.0（The OPSX Release）のリリースノートがある。今回の確認では、このバージョンからプロジェクトの初回公開日を推定しない。また、今回の証拠では確認できない npm での初回公開日も残さない。

出典：[OpenSpec v1.0.0 のリリースノート](https://github.com/Fission-AI/OpenSpec/releases/tag/v1.0.0)。確認日：2026-09-18。資料の公開日と本ページの確認日は意味が異なる。

## どの問題に取り組むか

OpenSpec は仕様と変更成果物を整理する具体的なプロジェクトである。仕様駆動開発はより広い作業方法であり、プロジェクトのあるバージョンが方法の起源というわけではない。

## 学習上の提案と適用範囲

以下は本サイトの教育上の判断であり、業界での普及率や効果を測定したものではない。

要件に複数の制約や人同士の引き継ぎがある場合は、まず目標、範囲、受け入れ基準、未解決事項を記録する。簡単な変更に完全な仕様プロセスを機械的に追加する必要はない。具体的なコマンドはプロジェクトのバージョンによって変わるため、対応するバージョンの文書を使う。

## 実践演習

[仕様駆動のワークフロー](/ja/cases/workflows/specification-driven-work/)：一つの変更について検証可能な仕様を書き、実装を仕様の各項目に対応させる。このサイトの演習は方法を紹介するものであり、OpenSpec をインストールまたは実際に動かしたことを意味しない。

[ロードマップと日付の扱いに戻る](/ja/ai-roadmap/)。
