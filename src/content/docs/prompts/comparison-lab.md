---
title: 三组提示词对照：12 次运行与逐项复核
description: 用周报、文章和Bug修复练习A/B对照；下载固定输入、提示词与记录模板，不预设更长的提示词必然更好。
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64；Codex 26.911.61220 / build 9647；12 个独立 Agent 上下文，实际模型和推理设置未知。
  summary: 三组A/B各重复两次，保留产物、耗时与工具错误；主Agent非盲复核，存在日志缺项，不代表普遍效果或真实读者测试。
  evidence:
    - label: 12次运行逐项评分及限制
      href: /downloads/prompt-comparison-results/review.md
    - label: 实际运行与耗时记录
      href: /downloads/prompt-comparison-results/runs.json
    - label: 后续产物检查记录
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: 12次任务、输入、原始产物公开副本、日志、耗时、逐项评分与复核脚本
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: 九个固定输入文件、六份提示词、统一评分维度、人工复核依据与空白运行模板
    license: CC0-1.0
    version: 1.0.0
---

对照的价值在于发现哪些要求影响交付，而不是证明提示词越长越好。本页提供三组固定输入材料，以及 2026 年 9 月 18 日完成的 12 次实际运行记录。这批样本主要体现出交付证据的差别，不足以证明普遍效果。

[下载完整对照材料](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [运行协议](/downloads/prompt-comparisons/README.md) · [空白记录](/downloads/prompt-comparisons/blank-run.json)

## 三组任务，同一比较方式

每组 A/B 使用同一份输入和同样的工具范围。B 完整保留 A 的任务，只追加一组显式验收要求；不能把结果归因到其中某个单独词句。

| 任务 | 固定输入 | B 新增要求 | 重点观察 |
|---|---|---|---|
| 销售周报 | 46 行合成 CSV 与数据字典 | 逐行决定、异常解释、独立核对记录 | 数字正确之外，能否追溯退款、重复与零基数 |
| 来源文章 | 三份有意包含冲突的合成资料 | 事实表、未决清单、冲突不擅自择一 | 是否保留未知，来源是否支持具体表述 |
| Bug 修复 | 购物车实现与原测试 | 原测试红灯、修复后绿灯、日志与差异 | 是否实际验证且没有修改测试绕过错误 |

[周报 A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [文章 A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Bug A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A 也可能自行核对资料和运行测试；B 也可能失败。不要把预期当作结果。

## 五个统一评分维度

A/B 使用同一个 [rubric.json](/downloads/prompt-comparisons/rubric.json)：任务正确性、证据可追溯、范围控制、不确定性处理、可复现性。每项 0 为不满足，1 为部分满足，2 为满足且可回查；未运行或无法判断用 null。

评分必须关联具体证据。周报不能只因文笔流畅得高分；文章不能只因列了链接就算事实正确；代码不能只因声称“测试通过”就算已验证。不要用一个平均分掩盖关键事实错误。

## 本次 12 次实际运行

[下载结果与日志](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [逐项评分与耗时](/downloads/prompt-comparison-results/review.md) · [采样条件](/downloads/prompt-comparison-results/README.md)

每组按 A1 → B1 → B2 → A2 顺序执行，每轮三个不同任务并行。每次新建 Agent 上下文和工作目录，不提供评分答案；模型与推理设置未显式覆盖，实际标签未知。目录隔离依靠指令约束，并非操作系统级隔离。主 Agent 进行非盲复核，没有人类独立评分。

| 任务 | A 两次观察 | B 两次观察 | 这次能说明什么 |
|---|---|---|---|
| 销售周报 | 数字、台账、异常处理均正确，也主动核对 | 数字正确，另附核对说明；一次未保存完整计算命令 | 追加要求没有保证日志完整 |
| 来源文章 | 事实、来源、冲突均正确，交付正文 | 同样保留事实边界，另交事实表和未决清单 | 增加了供复核使用的材料 |
| Bug 修复 | 原测试未改、修复后3项通过；未保存修复前失败日志 | 保留原测试失败和修复后成功、退出码与差异 | 验证链条更完整，但四次均漏记当次Node版本 |

完整表分别展示五项 0–2 分，不计算总排名。文章 A 缺事实表影响既定“可复现”检查项，不代表正文错误；Bug A/B 虽然可复现项均为部分满足，但原因不同，不能只看分数。

所有输入与任务文本的哈希保持一致。后续复核重新计算了销售 CSV，并用未修改的原测试检查四份 Bug 修复；[复核记录](/downloads/prompt-comparison-results/reviewer-checks.json) 与实验 Agent 自己执行的日志分开保存。

## 失败与限制也要保留

- 销售任务的共同提示将字典写成 `data-dictionary.md`，实际位于 `input/data-dictionary.md`。四次都先遇到路径错误再恢复；这是材料缺陷，不能归因于 A/B 的验收要求。为保持冻结输入，本批没有中途改提示。
- `run-07` 的 Python 命令只有摘要，完整代码未保留。结果包原样保留这个缺口，没有补写成“当时已完整记录”。
- 日志由 Agent 自行整理，不是平台完整审计导出。公开副本仅替换本机绝对路径；原始与公开文件的哈希分别保存。
- 耗时包含工具等待与日志记录，且任务并行。没有人工基线、费用测量；模型标签与推理设置未知，不能用于模型速度或省时排名。

每个任务每种变体仅两次，评分非盲，部分评分要求又与 B 提醒重合。这里展示交付物与验证证据的差别，不发布普遍成功率，也不宣称“B 胜出”或“越长越好”。

## 自己运行并记录

1. 为 A/B 创建独立工作目录，复制相同输入并核对哈希；不向模型提供评分参考答案。
2. 使用全新任务，固定模型、推理设置、客户端、工具范围和时间上限；未知设置如实记录。两次运行不共享前一次结果。
3. 预先约定重复次数与停止条件，交替 A→B 和 B→A 顺序；保存失败、中断和重试，不只保留最好的输出。
4. 记录实际输出路径、模型标签、环境、耗时、工具错误和输入哈希。人工返工时间单独记录，未运行不填零。
5. 按同一标准逐项评分，尽可能隐藏变体标签后复核。比较各维度及失败类型，再讨论是否值得采用新增要求。

少量观察只代表本次输入与环境，不能推出普遍成功率，也不能把相关性写成某句话带来的因果提升。

## 当前已验证与待验证

材料检查可运行：

```sh
python3 scripts/check_materials.py
```

已检查九个固定输入文件、三组追加式 A/B 提示及空白记录没有虚构分数。这个脚本不调用模型，不测试提示词效果。

本次 12 次运行、逐项评分与耗时已记录；实际模型标签、完整平台日志及人类独立复核仍缺失。结果包内另有 `python3 scripts/check_results.py`，用于重查已保存产物，不会重跑模型。完整原练习见[周报](/cases/analyze-a-spreadsheet/)、[文章](/cases/write-an-article/)和[开发者路径](/guide/learning-paths/developer/)。
