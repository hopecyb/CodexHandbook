---
title: 示例：区分冲突与缺失的研究 Skill
description: 下载完整研究包，用固定合成资料练习来源状态、证据冲突、未决问题与可回查报告。
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 本地来源检查与八项回归通过；参考报告为作者来源自检，未进行模型路由、研究质量或网络故障测量。
  environment: Python 3.12.11 / Darwin arm64；标准库，三份合成资料及一个故意缺失的本地文件。
  evidence:
    - label: 实际检查范围与局限
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: 研究 Skill、固定资料、证据表、报告与来源状态检查
    license: CC0-1.0
    version: 1.0.0
---

来源打不开、资料没说、两份资料说法不同，需要不同的处理。这个 Skill 保留这些区别，让读者知道哪些结论可以回查，哪些仍需补证。

[下载完整 evidence-research v1.0.0](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [安装说明](/downloads/skills/evidence-research/README.md)

## 固定问题与材料

本包沿用[文章练习](/cases/write-an-article/)中的虚构工具“拾页”，研究输入格式、诊断默认设置与上传字段。三份原创合成资料随包提供；清单中的第四份维护者说明故意缺失。不要为这个虚构产品搜索真实网页或补造答案。

| 证据状态 | 本包例子 | 应如何交付 |
|---|---|---|
| supported：资料支持 | P1 只列 Markdown 与纯文本 | 写明支持范围和定位，不说已实测产品 |
| conflict：冲突 | P3 默认关闭，C2 默认开启 | 并列说明，保留版本与条件缺口 |
| unknown：未知 | 未列诊断上传字段 | 说明缺什么，不猜上传内容 |
| unavailable：来源不可用 | M 对应的本地文件未提供 | 保留失败来源和影响，不冒充已读 |

[参考报告](/downloads/skills/evidence-research/solution/report.md) · [证据表](/downloads/skills/evidence-research/solution/evidence.csv) · [输出格式](/downloads/skills/evidence-research/references/evidence-format.md)

## 安装与调用

把完整目录放进练习项目 `.agents/skills/evidence-research/`，确认入口为 `SKILL.md`，不要覆盖已有同名自定义 Skill。按[使用 Skill](/skills/use-a-skill/)确认客户端中可选后调用：

```text
$evidence-research 依据此包 sources/catalog.json 中的资料，
判断拾页 1.2 的输入范围、诊断默认设置和上传字段能否确认。
输出 my-output/report.md 与 evidence.csv，明确冲突和打不开的来源。
保持合成身份，不搜索虚构产品的真实网页。
```

触发正反例在包内 `fixtures/trigger-cases.json`：来源比较与证据核查适用；创意诗歌、简单文件计数不需要研究流程。这些是设计预期，尚未测量自动触发。

## 检查来源和报告

可选检查需要 Python 3.10+，无第三方依赖。在解压后的目录运行：

```sh
# 打印每个来源的实际状态
python3 scripts/check_evidence.py --inspect-only
# 检查参考报告
python3 scripts/check_evidence.py
# 检查按包内约定生成的报告
python3 scripts/check_evidence.py --output my-output
# 在临时副本运行回归检查
python3 validation/test_checks.py
```

正常参考结果为 P/I/C `available`、M `missing`，四条证据结构通过。退出码 0 表示检查完成并符合结构，不表示全部来源可用。仅检查来源时尤其要逐项阅读 status。

检查器会识别内容哈希变更、缺失、不可读及没有预期哈希的文件。不可用来源不能作为已读证据，也不能从报告中静默消失。脚本只处理本地文件，不测试 HTTP 状态或网页可访问性。

## 失败后如何恢复

- **文件缺失**：确认路径；资料确实未提供时保留不可用状态，交付其余有依据的结论。
- **内容变更**：比较版本与差异，重新检查引用；不要只更新哈希让检查通过。
- **证据冲突**：核对版本、安装条件与适用对象，无法解决就保留未决，不只按日期选答案。
- **缺少事实**：列出需要维护者提供的字段或说明，不把建议写成已确认事实。

本例不要求解决固定输入中没有答案的问题。真实研究若获准寻找替代来源，要记录替换依据和实际访问结果。

## 完成条件与局限

报告应覆盖研究问题、已读来源、失败来源、逐项依据和下一步补证。作者已对照固定资料检查参考报告，但没有独立读者或第二位审稿验证。

八项脚本测试还验证了一个盲点：虚假的“支持所有格式且完全准确”保留合法引用后仍能通过结构检查。因此，脚本不能证明语义得到支持，不能判定两段文字是否真的冲突。交付前仍须逐条阅读原文。

接下来可用[写作 Skill](/skills/examples/writing-skill/)把已核对结论写成文章，继续保留冲突与未知状态。
