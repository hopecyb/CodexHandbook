---
title: 示例：明确差异范围的审查 Skill
description: 下载完整 scoped-review 包，区分暂存、未暂存和分支审查，复现容易漏审的 Git 场景。
contentType: skill
audiences: [developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 差异收集器七项回归检查通过，Skill 结构检查通过；触发样本和审查结论为作者设计，未进行多模型自动路由或缺陷检出率实验。
  environment: Python 3.12.11 / Git / Darwin arm64；临时合成仓库，无第三方依赖。
  evidence:
    - label: 实际运行范围与局限
      href: /downloads/skills/scoped-review/validation/record.md
assets:
  - path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
    purpose: Skill、收集器、范围说明、合成输入、审查参考与回归测试
    license: CC0-1.0
    version: 1.0.0
---

审查之前先明确比较什么。这个 Skill 避免把“当前未提交改动”误当作“相对 main 的提交”，也不会因为工作树看起来正常而漏掉暂存区中的错误。

[下载完整 scoped-review v1.0.0](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [查看 SKILL.md](/downloads/skills/scoped-review/SKILL.md) · [安装与使用说明](/downloads/skills/scoped-review/README.md)

## 它能做什么

| 用户请求 | 收集范围 | 不包含什么 |
|---|---|---|
| 只审已暂存 | HEAD → index | 未暂存内容 |
| 只审未暂存 | index → 工作树 | 已暂存补丁 |
| 审当前未提交改动 | 分别保留上述两份补丁；列出新文件 | 新文件内容仍需另读 |
| 相对指定分支审查提交 | 唯一 merge-base → HEAD | 本地未提交内容 |

不会默认猜 main。基线不存在时会报错，不悄悄改范围。收集器只提供证据，缺陷判断仍需结合相关代码和测试。

## 安装和第一次调用

需要 Python 3.10+、Git 和一个已有提交的本地练习仓库。将解压后的 `scoped-review/` 放进目标项目的 `.agents/skills/`，确认入口是 `.agents/skills/scoped-review/SKILL.md`；已有同名 Skill 时先比较，不覆盖。

本地 Skills 的发现和可用入口以[官方说明](https://learn.chatgpt.com/docs/build-skills)为准。安装后确认可选，再显式调用：

```text
$scoped-review 审查这个练习仓库当前未提交的代码改动。
不要修改文件，先列 findings，再说明暂存、未暂存和新文件覆盖情况。
```

这是教学包，不会自动安装到你的个人配置。若暂时不安装，可以直接运行包内脚本，观察它收集的范围。

## 复现一次容易漏审的场景

合成输入在 `fixtures/scenario.json`：

1. 基线折扣公式正确。
2. 将错误公式暂存：`amount * (1 - percent)`。
3. 工作树又恢复正确公式：`amount * (1 - percent / 100)`，但没有重新暂存。

此时只看 `git diff HEAD` 可能没有变化，提交暂存区却仍会引入错误。对 `amount=40, percent=10`，暂存版本得到 -360，而应为 36。

正确审查应分别指出：暂存版本有错误，未暂存补丁在修复它。完整[作者参考](/downloads/skills/scoped-review/fixtures/expected-review.md)还说明了分支模式为什么不应混入这个本地问题；它不是实际模型输出。

## 运行包内验证

在解压后的 Skill 目录执行：

```sh
python3 validation/test_scopes.py
```

七项测试在临时 Git 仓库中验证范围、漏审回归、无效基线拒绝、新文件清单和不修改被审仓库。正常完成后退出码 0。测试不写入你的实际项目。

实际使用收集器：

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

将路径替换为已授权审查的仓库。分支模式必须额外提供 `--base`。输出 JSON 可能含私有代码，不自动上传；完整命令见[范围说明](/downloads/skills/scoped-review/references/scopes.md)。

## 什么时候不该触发

文章润色、新功能实现不属于这个 Skill。模糊的“review 一下”应结合上下文确定范围，仍不清楚时再询问。包内[触发用例](/downloads/skills/scoped-review/fixtures/trigger-cases.json)记录了七种预期请求；尚未进行实际自动路由测量。

## 完成条件与局限

- 报告写明实际审查的快照、基线与文件范围。
- findings 有位置、触发条件、影响和证据，没有把风格偏好当阻断。
- 相关未跟踪文件内容已检查，或清楚列为未审；二进制、忽略文件、子模块不冒充已覆盖。
- 说明运行了哪些验证、哪些未运行；没有发现不等于保证无缺陷。
- 审查停在报告，不自动修改、提交或推送。

接着可用[开发者路径](/guide/learning-paths/developer/)的审查与交接模板保存结果。原来的 `pr-review` 短骨架仍可用于理解结构，本包使用不同名称以避免覆盖个人已有版本。
