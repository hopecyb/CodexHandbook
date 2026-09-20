---
title: 开发者路径：读代码、修复、审查与交接
description: 用已有购物车 Bug 练习串起代码阅读、红绿测试、差异审查与任务交接，提供三份可填写模板。
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 参考练习已重新运行：起点三个测试中一个失败，参考修复三个通过，两份测试相同。路径模板为作者自审，尚未经独立读者通关。
  environment: Node.js v22.16.0 / Darwin arm64；内置 node:test，无第三方依赖。
  evidence:
    - label: 实际运行摘要
      href: /downloads/developer-path/run-record.json
    - label: 作者审查参考与范围限制
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /guide/learning-paths/
  label: 选择学习路径
next:
  link: /cases/use-cases/software-development/fix-a-bug-with-verification/
  label: 开始带验证的 Bug 修复
---

用同一个小型购物车练习完成四项工作：解释代码、修复错误、审查差异、交接证据。你不必先学会所有客户端、配置或多 Agent 功能。

前置：能阅读简单 JavaScript，在本地终端运行 Node.js 测试。参考环境是 Node.js 22.16.0；无需安装第三方依赖。客户端可选 CLI、IDE 或能访问本地文件与终端的入口，测试行为由 Node.js 决定。

## 准备代码与记录目录

使用[手册源仓库](https://github.com/hopecyb/CodexHandbook)中的 `examples/complete-workflows/developer/verified-bug-fix/`，先读 `brief.md` 与 `README.md`，不看 `solution/`。完整教学步骤见[带验证的 Bug 修复](/cases/use-cases/software-development/fix-a-bug-with-verification/)。

在该练习目录中操作：

```sh
# work/ 必须尚不存在；如果已有自己的练习，换一个新名称，不覆盖它。
cp -R starter work
mkdir -p evidence
```

在 `work/` 修复，保留 `starter/` 原始失败现场和 `solution/` 参考答案。把下面的模板另存到 `evidence/`；下载的手册模板不包含完整代码，需与上述仓库练习一起使用。

| 里程碑 | 前置 | 产物 | 完成条件 |
|---|---|---|---|
| 1. 读代码 | brief 与 starter | code-map.md | 输入、数据路径、失败与根因都有文件依据 |
| 2. 修复并验证 | 根因和未改动的测试 | work/cart.js、red.txt、green.txt | 先复现失败，再通过同一组测试 |
| 3. 审查差异 | 修改与两次测试输出 | review.md、实现差异 | 未修改期望、未改变 API、没有无关改动 |
| 4. 交接 | 已完成的前三项证据 | handoff.md | 接手者能找到当前文件并重跑下一步 |

## 1. 先读代码，形成可检查的地图

[下载代码阅读模板](/downloads/developer-path/code-map-template.md)。让 Codex 阅读 `brief.md`、`starter/cart.js`、`starter/cart.test.js`，先只读解释入口、数据路径、触发输入、实际与期望值、根因行和范围限制。

把结果写入 `evidence/code-map.md`。这份练习只有两个核心文件，不必生成复杂架构图。完成条件：解释清楚 `10` 表示百分之十，为什么错误实现把小计 40 算成总额 -360，以及应该得到 36。

核对时可以看[作者阅读参考](/downloads/developer-path/code-map-reference.md)，但自己的结论仍需回到实际代码。通过后再改实现。

## 2. 保存红灯，再做最小修复

以下命令都在 `verified-bug-fix/` 目录执行：

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

这条命令预期退出码为 1，三个测试中一个失败。打开 `evidence/red.txt`，确认折扣测试确实显示实际 -360、期望 36。若全部通过，先检查是否误用了参考答案或提前改过文件，不继续假定红灯已复现。

任务说明可以直接限定完整执行范围：

```text
根据 brief.md 和 evidence/code-map.md，只修复 work/cart.js 的百分比换算。
保持函数签名与 work/cart.test.js 的断言不变，不加依赖、不做重构。
完成后运行 node --test work/cart.test.js，把真实输出存入 evidence/green.txt。
如果结果不符合预期，保留失败证据并定位原因；不要改断言迎合实现。
交付修改说明和测试结果，不提交或推送。
```

完成条件：原来的三个测试通过，退出码 0，修改只触及根因。测试命令失败时仍可输出日志，不能把“生成了 green.txt”当成测试通过。

## 3. 审查差异与遗漏

[下载审查模板](/downloads/developer-path/review-template.md)，填写实际比较范围：本练习是保留的 `starter/` 与自己的 `work/`，不默认比较 main，也不依赖仓库是否有未提交改动。

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

第一条预期显示百分比换算差异，退出码 1 表示存在差异，并非命令故障；第二条应无输出、退出码 0。让 Codex 结合真实差异与红绿日志做只读审查，把发现、证据、未覆盖项和决定写入 `evidence/review.md`。

完成条件：测试未被放宽，API 没变，没有额外依赖或无关修改。明确练习未覆盖的货币精度、税费、非法输入；不要把三条测试通过写成生产环境已安全。可对照[作者审查参考](/downloads/developer-path/review-reference.md)。

## 4. 写交接，再从文件恢复

[下载交接模板](/downloads/developer-path/handoff-template.md)，在 `evidence/handoff.md` 写当前目录、修改文件、仍有效的约束、证据路径、下一步命令和预期结果。在真实 Git 项目里还要记录当前分支、提交与工作区状态。

交接后的只读任务可以这样写：

```text
读取 evidence/handoff.md，先核对 work/ 里的当前文件与交接描述是否一致。
在练习根目录运行 node --test work/cart.test.js，记录实际退出码和摘要。
比较 work 与 starter 的实现和测试。若状态不同，指出差异，不沿用历史绿灯。
不要再次修改代码，也不要提交或推送。
```

可以在新任务中执行，或请另一位协作者复核。自己重开任务只算恢复演练，不写成独立人工审稿。参考格式见[作者交接记录](/downloads/developer-path/handoff-reference.md)。

完成条件：仅凭交接文件能找到代码、测试和边界，并实际跑出当前结果。没有执行这一轮时，在记录里保留“待接手验证”。

## 遇到问题时返回哪一步

- 找不到文件：确认终端所在目录与 `work/` 是否存在，回到准备步骤。
- 没有红灯：检查原始起点及测试，不以参考答案的绿灯代替复现。
- 测试修改后才通过：恢复原断言，回到根因分析。
- 发现无关改动：先保留差异，收窄修复，重新运行测试。
- 交接与文件不符：以当前文件为依据，更新记录后再继续。

进入真实项目后，在这个证据结构上加入仓库要求的 lint、类型检查与全量测试。它们是否必需、运行什么命令，应从实际项目说明确定；本练习没有这些额外检查，不伪造通过记录。
