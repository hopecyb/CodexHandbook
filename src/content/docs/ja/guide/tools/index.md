---
title: ツール
description: Codex Agent の利用可能なツールの選定とトピック——ターミナル、検索、ブラウザ、Computer Use など。
sidebar:
  order: 20
locale: ja
source_locale: zh-CN
source_revision: adbe0aa
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Agent は**ツール**を通じてファイルを読み、コマンドを実行し、ネットワークを検索し、ブラウザを開くなどの操作を行います。適切なツールを選び、境界を明確に書くことで、勝手に外部へ出たり、過度な変更をしたりするリスクを減らせます。

ここでいう「ツール」とは、Codex が実際にタスクを実行するときに呼び出す能力のことです。すべてのタスクが会話だけで完結するわけではありません。  
タスクによってはファイルを読む必要があり、コマンドを実行する必要があり、Web ページを調べる必要があり、実際のページを見る必要があります。

## なぜ先にツールを理解するのか

使い始めの頃は、Codex を純粋な対話アシスタントだと捉えがちです。  
しかし許可を与えると、次のようなことが起こり得ます。

- プロジェクトファイルを読む
- ドキュメントやコードを変更する
- ターミナルコマンドを実行する
- 公開 Web ページを検索する
- ローカルページを開いて結果を確認する

ツールは付加的な知識ではなく、安全と効率の基盤です。

## 章のナビゲーション

| ツール | ページ |
|---|---|
| 選定の概要 | [ツール選択](/ja/guide/tools/tool-selection/) |
| ターミナル | [Shell とターミナル](/ja/guide/tools/shell-and-terminal/) |
| 検索 | [Web 検索](/ja/guide/tools/web-search/) |
| Web ページ | [ブラウザツール](/ja/guide/tools/browser/) |
| GUI | [Computer Use](/ja/guide/tools/computer-use/) |
| 画像 | [画像生成](/ja/guide/tools/image-generation/) |
| 音声 | [音声入力と出力](/ja/guide/tools/voice/) |

ファイルの読み書きと成果物の検証は [ファイルと成果物](/ja/guide/files-and-artifacts/) を参照してください。拡張ツールは [MCP](/ja/skills/mcp/mcp-overview/) 経由で接続します。

## 推奨する読み順

この章を初めて読むときは、次の順序がおすすめです。

1. [ツール選択](/ja/guide/tools/tool-selection/)——まず、タスクごとに何を優先すべきかを確認する
2. [Shell とターミナル](/ja/guide/tools/shell-and-terminal/)——次に、コマンド実行のリスクを理解する
3. 検索、ブラウザ、その他のツールページ——手元のタスクに応じて続きを読む

ツールは Codex がどのように動けるかを決めます。あなたの役割は、どのツールを使ってよいか、使ってはいけないかを説明することです。

---

**状態：** verified  
**対象製品：** App / CLI / IDE / Cloud  
**検証根拠：** 本ページはツールトピックのナビゲーションです。ターミナル、検索、ブラウザ、Computer Use、画像、音声などの章への入口は、サイト内ディレクトリと相互確認済みです。本文は「ツールが実行範囲とリスクに影響する」ことのみを説明し、固定のサポートマトリクスは宣言していません。  
**最終検証：** 2026-07-26
