---
title: 拡張方式の選び方
description: プロンプトから Automations までの決定木——「使うために使う」を避ける。
locale: ja
source_locale: zh-CN
source_revision: ba31b5a
translation_status: draft
translated_at: 2026-07-28
---

拡張の仕組みが増えるほど、選び間違えたコストも上がります。Plugin や MCP を入れる前に、本当に必要かを判断するページです。

混同しやすい名前：

- プロンプト
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

どれも Codex を拡張しますが、プロンプトで足りることもあれば、もっと重い仕組みが要ることもあります。

## 決定木

```text
タスクは3回以上繰り返す？
├─ いいえ → プロンプト + @ 参照で十分
└─ はい → 永続ルールが必要？
    ├─ はい → AGENTS.md に書く
    └─ いいえ → 固定で説明できるフロー？
        ├─ はい → Skill を作る
        └─ いいえ → 外部システムが必要？
            ├─ はい → MCP を評価（読み取り優先）
            └─ いいえ → 無人実行が必要？
                ├─ はい → Automations + 人のゲート
                └─ いいえ → Skill + 手動トリガーのまま
```

チームで複数 Skill + MCP を配布？上記の末端で **Plugin** を検討。

## シナリオ対照

| シナリオ | 推奨組み合わせ |
|---|---|
| テストとコミット規約の統一 | AGENTS.md |
| マージ前レビューチェックリスト | Skill `pr-review` |
| Linear からチケット文脈を取得 | MCP + タスクプロンプト |
| 週次依存レポート | Automation → issue 作成 |
| コミット前の鍵スキャン | Hooks（エンタープライズ）または CI |
| 新人向け一式ツール | Plugin（セキュリティレビュー後） |

## コストの次元

| 仕組み | 作成コスト | 保守コスト | セキュリティリスク |
|---|---|---|---|
| プロンプト | 低 | 低 | 低 |
| AGENTS.md | 中 | 中 | 低 |
| Skill | 中 | 中 | 低〜中 |
| MCP | 高 | 高 | 中〜高 |
| Plugin | 低（既製）／高（自作） | 中 | 中〜高 |
| Automations | 高 | 高 | 高 |

## アンチパターン

- **Skill 膨張**：description が競合する Skill を大量導入
- **MCP 万能ハンマー**：`git` で足りることを API 化
- **受け入れなし自動化**：diff を誰も見ない定期コード変更
- **車輪の再発明**：公式 Connector があるのに自作 MCP

## よくある質問

### 1. 最初から Plugin と MCP を入れるべき？

多くはプロンプト、範囲制御、`AGENTS.md` で解決します。

### 2. この木の読み方は？

原則は一つ：軽いものから。足りなければ重くする。

### 3. 多くの人の起点は？

だいたい次のいずれか：

- プロンプト
- `AGENTS.md`
- Skill

初日から MCP や無人自動化は不要なことが多いです。

重要なのは仕組みの見た目の高度さではなく、問題との適合です。

## 関連読み物

- [拡張能力マップ](/skills/capability-map/)
- [人の承認パターン](/cases/workflows/human-approval-patterns/)
- [フローを Skill にする](/cases/workflows/turn-a-workflow-into-a-skill/)（ロードマップページ）

---

**状態：** outdated  
**対象製品：** App / CLI / IDE / Cloud  
**最終検証：** 2026-07-26  
**検証根拠：** 本決定木は現在の Automations、Plugins、MCP、公式 Connector の境界に触れる。製品表面は変化が速く、2026-07-26 時点の公開資料ではページ全体を安定核証するには不十分。
