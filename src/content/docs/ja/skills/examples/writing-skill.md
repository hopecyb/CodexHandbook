---
title: "例：出典と文体サンプルを備えた文章作成Skill"
description: "出典付き文章作成パックをダウンロードし、主張と根拠の対応、文体の修正、矛盾の保持、人による確認を練習します。"
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "出典と引用の構造チェック、および8項目の回帰チェックに合格しました。記事と文体は著者が自己点検し、起動例は設計上の想定です。モデルの文章品質と自動ルーティングは未検証です。"
  environment: "Python 3.12.11 / Darwin arm64。独自に作成した合成資料3件、一時コピー、サードパーティー依存なし。"
  evidence:
    - label: "検証範囲と著者の自己点検記録"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill、文体サンプル、合成資料、参考稿、主張と根拠の対応表、修正差分、構造チェック"
    license: CC0-1.0
    version: 1.0.0
locale: ja
source_locale: zh-CN
source_revision: cbaec37
translation_status: draft
translated_at: 2026-09-20
---
このSkillは、与えられた資料から根拠をたどれる記事を作り、文体の要件、事実の根拠、未解決事項を残します。出典に基づく執筆と事実確認に向きますが、誤字を1つ直すだけなら全工程は不要です。

[完全なsource-backed-writer v1.0.0をダウンロード](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [SKILL.mdを見る](/downloads/skills/source-backed-writer/SKILL.md) · [インストール方法](/downloads/skills/source-backed-writer/README.md)

## パックの内容

| 資料 | 目的 |
|---|---|
| 合成資料3件とハッシュ索引 | 架空の製品を実際の選択肢と誤認せず、固定入力で練習する |
| 文体サンプルと設計された反例 | 根拠のない効果の約束を具体的な行動に置き換える |
| 構成案、初稿、最終稿、修正diff | 事実・構成・表現の変更を分けて見る |
| 7件の主張と根拠の対応、未決事項一覧 | 原文の根拠、著者の推論、未確認事項を区別する |
| 起動する例としない例、スクリプト、検証記録 | 適用範囲とチェックの限界を示す |

資料は[出典付き記事の練習](/ja/cases/write-an-article/)に出てくる架空のツール「拾页」を使います。先に記事練習を済ませ、この書き方をSkillとして保存しても構いません。

## インストールと初回の呼び出し

練習プロジェクトの`.agents/skills/source-backed-writer/`にディレクトリ全体を置き、`SKILL.md`が直下にあることを確認します。同名のSkillがあれば上書き前に比較します。検出方法は[Skillを使う](/ja/skills/use-a-skill/)を参照し、クライアントで選択できることを確認してから明示的に呼び出します。

```text
$source-backed-writer この教材パックの sources/ にある3件の資料を読み、
references/style.mdに従って個人の書き手向けの紹介文を作成してください。
article.md、claim-map.csv、unresolved.mdをmy-output/に保存してください。
合成資料であることを保持し、公開しないでください。
```

読むことと書くことにPythonは不要です。任意の構造チェックはPython 3.10以降の標準ライブラリだけを使います。展開したSkillディレクトリで実行します。

```sh
# 同梱の参考稿を確認
python3 scripts/check_article.py
# パック形式で作成した自分の稿を確認
python3 scripts/check_article.py --output my-output
# 一時コピーで8項目のチェックを再現
python3 validation/test_checks.py
```

本ページで実際に実行したのはスクリプトであり、特定クライアントの自動検出やモデル呼び出しは検証していません。実務で別の出力形式を使うなら、自分の取り決めに沿って確認し、教材の形式を強制しないでください。

## 文体が記事に与える影響

[文体サンプル](/downloads/skills/source-backed-writer/references/style.md)には、設計された比較があります。

> 反例：拾页はどんな形式も簡単に扱え、作業効率を2倍にする万能ツールです。

「説明にあるのはMarkdownとプレーンテキストだけです。まず少量のメモのコピーで試し、要約が指す原文を見直してください」と直します。前の文は資料に基づき、後の文は著者の助言です。対応表では分けて記録します。ユーザーが異なる語調や構成を求めたら、その実際の要件に従います。

[参考最終稿](/downloads/skills/source-backed-writer/solution/article.md) · [主張と根拠の対応表](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [修正差分](/downloads/skills/source-backed-writer/solution/revision.diff)

## 矛盾や欠落の扱い

製品説明のP3は診断情報のアップロードが既定で無効と述べ、更新概要のC2は新規インストールで有効と述べています。最終稿では両方を併記し、日付が新しい方を自動的に正しいとはしません。アップロード対象の項目は不明なので[未決事項一覧](/downloads/skills/source-backed-writer/solution/unresolved.md)に残します。

合成インタビューには時間計測も固定評価サンプルもありません。「効率2倍」や正確度の数値は書けません。根拠のない数字を削り、条件を戻し、対応表を更新します。架空の製品についてもっともらしい答えを検索しても解決しません。

## 受け入れ条件とチェックの限界

書き終えたら次を一つずつ確認します。

- 重要な主張に追跡可能な場所があり、事実、助言、未知を分けている。
- 架空の性質、入力の制約、未解決の矛盾が本文に残っている。
- 文体の修正で必要な限定を消さず、ユーザー指定の構成を変えていない。
- 引用形式の検査後、番号の有無だけでなく各文を資料と照合する。

スクリプトは出典のハッシュ変更と引用構造の誤りを検出できますが、主張の意味が資料で裏づけられるかは判断できません。パックでは、正しい番号を付けると構造チェックに通る虚偽の機能保証を意図的にテストしています。人による事実確認は引き続き必要です。

## 起動すべきでないとき

誤字の修正、Gitパッチのレビュー、ソフトウェア機能の追加を自動的に記事作成の全工程へ変えてはいけません。記事の完成は公開権限も意味しません。[起動例](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json)は設計上の想定であり、ルーティング成功率の報告ではありません。

完了後は[クリエイター向けパス](/ja/guide/learning-paths/creator/)に戻り、今回使った文体と受け入れ条件を再利用用の説明に記録してください。
