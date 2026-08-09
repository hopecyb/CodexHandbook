---
title: AI アプリケーションロードマップ
description: Prompt Engineering、RAG、MCP、Multi-agent、Context Engineering、Skills など、AI アプリケーション工学の節目を時系列で理解する。
locale: ja
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-08
---

# AI アプリケーションロードマップ

これは AI アプリケーション工学の知識マップです。モデルのパラメータ数、ランキング、単発の製品発表ではなく、主要な方法論を逆時系列でつなぎます。再利用でき、検証できる Agent 工学システムから、それを支えた実践へとさかのぼって読みます。

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/ai-roadmap/timeline/2026-04-skills/">Skills（スキル）</a></h3>
    <p>Skills は、プロンプト、手順、例、スクリプト、リソースを再利用可能なワークフロー単位としてまとめます。毎回「どうやるか」を説明し直すのではなく、チームの経験を蓄積するための仕組みです。</p>
    <p><strong>学習ポイント：</strong>SKILL.md、段階的開示、依存リソース、再利用境界、チーム規約。</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering（実行ハーネス工学）</a></h3>
    <p>Harness Engineering は、モデルが安定してタスクを完了するための環境を設計します。ツール、コンテキスト、検証フィードバック、失敗からの復旧、品質ゲート、回帰確認が対象です。</p>
    <p><strong>学習ポイント：</strong>タスクハーネス、検証フィードバック、失敗復旧、品質ゲート。</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/ai-roadmap/timeline/2026-01-openspec/">OpenSpec（仕様駆動開発）</a> / <a href="/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw（個人 AI アシスタントゲートウェイ）</a></h3>
    <p>この 2 つは異なる方向を示します。OpenSpec は要件と設計を追跡可能な仕様成果物にし、OpenClaw は個人アシスタント、チャネル、ツールゲートウェイを統合します。</p>
    <p><strong>学習ポイント：</strong>仕様駆動開発、ゲートウェイ、セッション、チャネル、追跡可能な成果物。</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering（コンテキスト工学）</a></h3>
    <p>Context Engineering は「どうプロンプトを書くか」から「モデルに何を、どの順序で見せ、何を圧縮または除外するか」へ焦点を移します。</p>
    <p><strong>学習ポイント：</strong>コンテキスト優先度、検索戦略、圧縮、記憶、ファイル選択。</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent（マルチエージェント協調）</a></h3>
    <p>Multi-agent は、調査、実装、レビュー、検証、要約などの役割に複雑な仕事を分けます。目的は構造化、並列化、相互チェックです。</p>
    <p><strong>学習ポイント：</strong>役割境界、引き継ぎ形式、衝突解決、レビューと検証。</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/ai-roadmap/timeline/2025-03-tool-use/">Tool Use（ツール利用）</a></h3>
    <p>Tool Use は、モデルがタスク中にツールを選び、呼び出し、結果を読み、次の推論へ進む方法を扱います。単発回答から多段実行への橋渡しです。</p>
    <p><strong>学習ポイント：</strong>ツール選択、呼び出しチェーン、状態管理、ツール失敗後の復旧。</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/ai-roadmap/timeline/2024-11-mcp/">MCP（モデルコンテキストプロトコル）</a></h3>
    <p>MCP は、ツール、リソース、プロンプトの接続をプロトコル化します。価値は単に統合数を増やすことではなく、統合を再利用可能で発見可能、統制可能にすることです。</p>
    <p><strong>学習ポイント：</strong>server/client、tools、resources、prompts、権限、デバッグ。</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/ai-roadmap/timeline/2023-11-rag/">RAG（検索拡張生成）</a></h3>
    <p>RAG は、取得した資料に回答を根拠づけます。AI を「話せる」状態から「追跡可能な根拠で答える」状態へ進めます。</p>
    <p><strong>学習ポイント：</strong>チャンク分割、ベクトル検索、再ランキング、引用、コンテキスト圧縮。</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/ai-roadmap/timeline/2023-06-function-calling/">Function Calling（関数呼び出し）</a></h3>
    <p>Function Calling は、モデルをテキスト回答から構造化パラメータによる外部機能呼び出しへ進めました。AI が実システムに入るための重要な一歩です。</p>
    <p><strong>学習ポイント：</strong>schema 設計、パラメータ検証、ツール境界、エラー返却。</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering（プロンプト工学）</a></h3>
    <p>AI アプリケーション工学の出発点は入力制御です。タスク目標、コンテキスト、制約、例、出力形式を明示し、モデルの振る舞いを安定させます。</p>
    <p><strong>学習ポイント：</strong>タスク分解、役割設定、few-shot 例、出力形式、失敗時の再試行。</p>
  </article>
</div>
