# 日本語 / 한국어 / Tiếng Việt 翻訳分析

## 対象範囲

- 正本：`git diff --name-only -- src/content/docs/guide src/content/docs/prompts src/content/docs/skills src/content/docs/cases` が返す現在の簡体字中国語ページ。
- 現在のワークツリーでは 66 ページが変更されている。当初の 62 ページという見積もりより 4 ページ多いため、同期漏れを避けるために実際の 66 ページを対象とする。
- 対象ロケール：`ja`、`ko`、`vi`。
- モード：Refined。対象読者は技術者、文体は簡潔で自然な技術文書調。
- 画像：今回追加された 9 個の `*-zh-cn.svg`。SVG 自体は変更せず、すべての可視文字列をロケール別 JSON 辞書に翻訳する。

## 内容の要約

対象ページは、Codex の初回利用から高度な拡張・自動化までを段階的に説明する。クライアント選択、インストールと認証、App / CLI / IDE / Cloud、サンドボックスと承認、非対話実行、AGENTS.md、Profile、MCP、Hook、Plugin、Scheduled task、子 Agent、寄稿方法、検証付きの実例が含まれる。

翻訳では「まず判断基準を説明し、最小の実用例を示し、その後に運用上の制約、検証手順、詳細ページへのリンクを加える」という原文の学習順序を維持する。

## 用語

| 原文の概念 | 日本語 | 한국어 | Tiếng Việt | 規則 |
|---|---|---|---|---|
| Codex / ChatGPT | Codex / ChatGPT | Codex / ChatGPT | Codex / ChatGPT | 製品名を変更しない。 |
| Agent | Agent | Agent | Agent | 公式用語を維持し、周囲の文法だけ自然に翻訳する。 |
| App / CLI / IDE / Cloud | App / CLI / IDE / Cloud | App / CLI / IDE / Cloud | App / CLI / IDE / Cloud | 製品サーフェス名を維持する。 |
| MCP / Hook / Plugin / Skill | MCP / Hook / Plugin / Skill | MCP / Hook / Plugin / Skill | MCP / Hook / Plugin / Skill | 拡張機構名を維持する。 |
| Worktree | worktree | worktree | worktree | Git の用語として維持し、必要な箇所だけ説明する。 |
| sandbox | サンドボックス | 샌드박스 | sandbox | 各言語で定着した技術用語を使う。 |
| approval | 承認 | 승인 | phê duyệt | 設定キーは翻訳しない。 |
| setup phase | セットアップフェーズ | 설정 단계 | giai đoạn thiết lập | Secrets を利用できるのはこの段階だけ。 |
| Agent phase | Agent フェーズ | Agent 단계 | giai đoạn Agent | この段階の前に Secrets は削除される。 |
| diff | diff | diff | diff | 開発者向け用語として維持する。 |
| `--cd` / `-C` | 変更しない | 변경하지 않음 | giữ nguyên | 古い `--cwd` を置き換え、フラグ自体は翻訳しない。 |

## 文体

- 日本語：簡潔な「です・ます」調。手順は明確な動詞から始め、過剰な直訳調や名詞の連続を避ける。
- 한국어：간결한 `-습니다` 기술 문서체. 제품 용어와 설정 키는 유지하고 불필요한 피동 표현을 줄인다.
- Tiếng Việt：văn phong tài liệu kỹ thuật tự nhiên, câu ngắn, động từ rõ ràng, thuật ngữ nhất quán; tránh cấu trúc dịch sát tiếng Trung.
- 全言語：見出し、表、コードブロック、コマンド、設定キー、公式 URL、事実上の限定条件、検証状態を保持する。

## 翻訳上の難所

- 現行クライアント：旧訳の「Codex Desktop」表記や、すべての IDE を単一拡張として扱う説明を修正する。ChatGPT デスクトップ App、VS Code 互換拡張、Xcode / JetBrains 統合、CLI、Cloud を原文どおり区別する。
- コマンドの変化：古い `--cwd` を現在の `--cd` または `-C` に置き換え、シェルの意味を変えない。
- Cloud の Secrets：環境変数は setup と Agent の両フェーズで利用できる。Secrets は setup のみで利用でき、Agent フェーズ前に削除される。この差を明示する。
- 権限：Beta の Permission Profiles と従来の sandbox / approval 設定は別モデルであり、組み合わせ可能な設定として説明しない。
- 内部リンク：`/ja/`、`/ko/`、`/vi/` の各接頭辞を付ける。公式外部 URL はそのまま維持する。
- 図：9 個の新しい図にある `<title>`、`<desc>`、`<text>` のすべての可視中国語文字列に、各ロケールで一意の翻訳を用意する。
- メタデータ：各ページに現在の中国語ソースの SHA-1 先頭 7 桁、`translation_status: reviewed`、`translated_at` と `reviewed_at: 2026-08-26` を設定する。

## 審査ゲート

1. 各ロケールの対象ページ数が 66 ページで一致する。
2. 対象ページに `--cwd` が残っていない。
3. 対象ページが `-zh-cn.svg` を参照せず、言語別接尾辞を使う。
4. 内部リンクが対象ロケールの接頭辞を持つ。
5. frontmatter の revision が中国語ソースと一致する。
6. 図の辞書が 9 個の図に含まれる可視中国語文字列を過不足なく網羅する。
7. Markdown リンク、frontmatter、サイト全体のビルドが有効である。
