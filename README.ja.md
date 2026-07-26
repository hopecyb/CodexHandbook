# Codex Handbook

<p align="center">
  <img src="./public/icon-512.png" alt="Codex Handbook Logo" width="180" />
</p>

<p align="center">
  <img src="./public/cover.png" alt="Codex Handbook Cover" width="100%" />
</p>

<p align="center"><strong>Codex の体系的ハンドブックと実践ナレッジベース</strong></p>

<p align="center">
  <a href="./README.md">简体中文</a>
  ·
  <a href="./README.en.md">English</a>
  ·
  <a href="./README.zh-TW.md">繁體中文</a>
  ·
  <a href="./README.fr.md">Français</a>
  ·
  <a href="./README.ja.md">日本語</a>
  ·
  <a href="./README.ko.md">한국어</a>
  ·
  <a href="./README.es.md">Español</a>
  ·
  <a href="./README.de.md">Deutsch</a>
  ·
  <a href="./README.pt.md">Português</a>
  ·
  <a href="./README.vi.md">Tiếng Việt</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/ja/">オンラインで読む</a>
  ·
  <a href="./src/content/docs/guide/index.md">初心者ガイド</a>
  ·
  <a href="./docs/planning/content-architecture.md">コンテンツ構成</a>
  ·
  <a href="./ROADMAP.md">ロードマップ</a>
  ·
  <a href="./examples/README.md">サンプル集</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/"><img src="https://img.shields.io/badge/website-codexhandbook.com-1d4ed8" alt="Website" /></a>
  <a href="https://codexhandbook.com/ja/"><img src="https://img.shields.io/badge/docs-handbook-2563eb" alt="Docs" /></a>
  <a href="https://starlight.astro.build/"><img src="https://img.shields.io/badge/built%20with-Starlight-f97316" alt="Built with Starlight" /></a>
</p>

> Codex を初めて開いた瞬間から、実際のプロジェクト・ワークフロー・長期的な知識の蓄積まで。  
> これはバラバラのテクニック集ではなく、`ガイド / プロンプト / Skills / 実践ケース` で整理された体系的な実践ハンドブックです。

## これは何か

**Codex Handbook** は、Codex の学習と実践のための体系的なナレッジベースです。「Codex で何ができるか」という広い問いではなく、次の 3 つの実践的な問いに答えます：

- Codex に初めて触れるとき、どこから始めるべきか。
- 実際のプロジェクトで Codex を使うとき、タスクの記述、コンテキストの整理、結果の検証をどう行うか。
- 一度成功した協業の後、その経験をプロンプト、Skills、ルール、ケース、チーム資産にどう落とし込むか。

Codex をこれから学ぶ方にとって、このリポジトリとサイトが最初の入口です。

## まずここから

### 1. オンラインで読む

正式な閲覧入口は [codexhandbook.com/ja](https://codexhandbook.com/ja/) です。  
ナビゲーション、検索、章構成、継続的な更新を得るには、サイトでの閲覧をおすすめします。

### 2. 初心者向けの最初の読書ルート

次の順番での開始を推奨します：

1. [Guide ホーム](./src/content/docs/guide/index.md)
2. [コンテキストとファイル](./src/content/docs/guide/context-and-files.md)
3. [Prompts](./src/content/docs/prompts/index.md)
4. [Skills](./src/content/docs/skills/index.md)
5. [Cases](./src/content/docs/cases/index.md)

Codex 初心者向けのルートで、実践に入る前に安定した基礎を築けます。

## ここで学べること

### ガイド

Codex の入口選択、基本的な利用パス、コンテキストの整理、権限の境界、結果の検証方法を理解します。

### プロンプト

タスクを明確に伝え、制約・目標・入力・受け入れ基準を定義し、Codex が検証可能な結果を安定して出す方法を学びます。

### Skills

Skills の設計・利用・保守・ガバナンスを学び、一度の成功した協業を長期的に再利用できる能力に変えます。

### 実践ケース

コードの読解、バグ修正、ドキュメント作成、調査、自動化、納品協業など、実際のタスクを通じてエンドツーエンドのワークフローを理解します。

## こんな方に

- Codex を初めて知る初心者
- 実際のプロジェクトで Codex を使いたい開発者
- プロンプト・ルール・テンプレート・ケースを蓄積したいチーム
- 執筆・調査・ドキュメント・プレゼンに Codex を使いたい知識労働者

## クイックリンク

| リンク | 用途 |
| --- | --- |
| [オンラインで読む](https://codexhandbook.com/ja/) | サイトでハンドブック全体を閲覧 |
| [Guide](./src/content/docs/guide/index.md) | Codex の利用パスをゼロから理解 |
| [Prompts](./src/content/docs/prompts/index.md) | タスクと境界を明確に記述する |
| [Skills](./src/content/docs/skills/index.md) | 経験を再利用可能な能力に変える |
| [Cases](./src/content/docs/cases/index.md) | 実タスクでエンドツーエンドの流れを理解 |
| [Examples](./examples/README.md) | プロンプトとサンプル資産をそのまま再利用 |
| [コンテンツ構成](./docs/planning/content-architecture.md) | サイト全体の情報設計を把握 |
| [章の概要](./docs/planning/chapter-outline.md) | トピックのカバー範囲を確認 |
| [ロードマップ](./ROADMAP.md) | プロジェクトの計画と方向性 |

## コンテンツ構造

```text
Codex Handbook
├── src/content/docs/guide/      # 入門ガイド、クライアント、権限、検証
├── src/content/docs/prompts/    # プロンプト手法とタスク表現
├── src/content/docs/skills/     # Skills の設計・利用・ガバナンス
├── src/content/docs/cases/      # 実タスクのケース
├── examples/                    # コピー可能なプロンプトと拡張例
├── docs/planning/               # コンテンツ計画と保守資料
└── ROADMAP.md                   # プロジェクトのロードマップと段階
```

## ローカル開発

このプロジェクトは [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) でドキュメントサイトを構築しています。本文は `src/content/docs/` にあります。

環境要件：

- Node.js `>=22.12.0`
- `pnpm`

開発環境の起動：

```bash
pnpm install
pnpm dev
```

静的サイトのビルド：

```bash
pnpm build
```

## プロジェクトの原則

- **公式優先**：製品の能力・ルール・境界については、公式資料を優先します。
- **初心者に優しい**：ターミナル、Git、Agent、自動化の前提知識は不要です。
- **実タスク志向**：抽象概念の積み上げではなく、再利用可能なワークフロー・ケース・テンプレートを重視します。
- **安全境界の明確化**：権限、ファイル書き込み、ネットワーク、自動化、拡張のリスクを明確に説明します。
- **継続的な蓄積**：一度成功したタスクをプロンプト、Skills、ルール、ケース、チーム資産に変えることを推奨します。

## コントリビューション

以下の提出を歓迎します：

- 初心者向けのチュートリアル改訂
- 再現可能な実ケース
- 高品質のプロンプト、Skill テンプレート、設定サンプル、ケース資料
- 事実確認と古くなった内容の修正
- 他言語版のコンテンツ（例：English、简体中文、繁體中文）

コンテンツに参加する場合は、まず以下をご覧ください：

- [サンプル集の説明](./examples/README.md)
- [コンテンツ構成](./docs/planning/content-architecture.md)
- [章の概要](./docs/planning/chapter-outline.md)

## 免責事項

本プロジェクトはコミュニティが維持する Codex 実践ハンドブックであり、OpenAI の公式プロジェクトではありません。機能、価格、可用性、セキュリティポリシー、製品の詳細など、時間に敏感な情報については、公式資料を参照してください。
