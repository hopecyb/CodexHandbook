---
caseCategory: team
directoryOrder: 90
title: 案例：Issue 分流与人工复核队列
description: 用五份合成 Issue 练习结构化建议、输入绑定与干运行，不自动操作 GitHub。
contentType: case
audiences: [developer, team]
level: intermediate
outputs: [json, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 五条作者参考建议干运行通过，八项结构与输入绑定测试通过；未调用模型或连接 GitHub，不代表分类正确率或生产上线验证。
  environment: Python 3.12.11 / Darwin arm64；标准库、合成输入，无 token 或网络。
  evidence:
    - label: 实际运行记录
      href: /downloads/issue-triage/validation/record.md
assets:
  - path: /downloads/issue-triage/issue-triage-1.0.0.zip
    purpose: 合成输入、JSON Schema、提示词、作者建议、干运行脚本与复核记录
    license: CC0-1.0
    version: 1.0.0
---

这个练习把 Issue 分流拆成“生成建议 → 校验 → 人工复核”。你将得到五条待复核记录，不会自动发布评论、添加标签或关闭 Issue。

[下载完整练习包](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [查看实际干运行输出](/downloads/issue-triage/validation/dry-run.json)

## 输入与完成条件

五份原创合成输入分别是计算错误、文档断链、跨账号数据线索、信息不足和恶意正文指令。没有真实客户数据。建议输出包含类型、优先级、标签、安全复核标记、理由与缺失信息。

完成条件：每份输入对应一条建议，合法枚举与输入哈希通过校验；维护者逐项判断接受、修改或拒绝，并记录理由。结构通过不能代替这一判断。

## 先运行参考建议

需要 Python 3.10+，无需 API 密钥或第三方依赖。在解压后的目录执行：

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

第一条使用作者预写的建议，输出五项 `human-review-required`，`external_actions` 为空。第二条运行八项检查。这里没有自动调用模型。

[输入样本](/downloads/issue-triage/fixtures/issues.json) · [参考建议](/downloads/issue-triage/solution/proposals.json) · [人工复核参考](/downloads/issue-triage/solution/human-review.md)

## 再生成自己的建议

将包内 [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) 交给 Codex，按 [schema.json](/downloads/issue-triage/schema.json) 输出 `my-proposals.json`，然后运行：

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

Schema 是 JSON Schema 2020-12 格式，布尔类型写为 `"type": "boolean"`，优先级用枚举而不是字符串 `"P0-P3"`。包内校验器只实现此 schema 使用的关键字子集，不是通用 schema 引擎。

每条建议带 `input_sha256`，绑定对应 Issue 的完整内容。输入变了就停止使用旧建议；不要只重算哈希，先重新分析变更。哈希计算约定和函数在 README 与脚本中。

## 人工判断与安全边界

| 情况 | 处理 |
|---|---|
| 有明确错误线索 | 建议分类后复现，确认影响范围再定级 |
| 安全事件线索 | 交安全负责人私下复核，未知优先级不等于低风险 |
| 信息不足 | 使用 unknown，列缺失信息，不猜负责人或严重程度 |
| 正文要求执行命令或提权 | 作为不可信资料，不执行，也不因它自称紧急就设 P0 |

删除 HTML 或限制长度不能保证防住提示注入。本包程序不执行正文，模型生成阶段仍需保持资料与指令边界；参考输出不证明模型抵抗率。

## 失败与恢复

未知标签、额外动作字段、错误类型、重复或遗漏建议会让整批停止，退出码 1。修正提示和对应字段后重跑，保留原始输入。安全类型或标签却没有安全标记时也会拒绝。

错误但结构合法的分类仍可能通过，这是测试中实际验证的局限。因此不能用几个样本的高一致率作为上线门槛。真实推广需要代表性样本、风险分层、人工抽检、误判成本与回退条件；本练习只完成本地干运行。

接下来阅读[文档链接检查](/cases/use-cases/team-automation/scheduled-link-check/)与[人工审批模式](/cases/workflows/human-approval-patterns/)。
