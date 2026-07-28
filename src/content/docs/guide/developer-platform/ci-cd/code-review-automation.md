---
title: 代码审查自动化
description: 在 CI 或 PR 流程中接入 Codex 审查——提示词、权限与人工门禁。
---

把 Codex 放进 **Pull Request 流水线**，可以在人审前抓住明显问题，但**不能替代**责任审查与测试。本页讲可落地的自动化模式。

## 这篇会讲什么

- CI 里怎么安全调用 Codex
- 审查 prompt 应包含什么
- 如何把结果贴回 PR 而不自动合并

## 先理解它的定位

你可以把“代码审查自动化”理解成：让 Codex 先帮团队做第一轮筛查，但最后拍板的人仍然是人。

它最适合做的是：

- 提前指出明显风险
- 帮你整理 diff 里的重点
- 把一些重复性的检查先做掉

它不适合直接替你决定“这个 PR 一定能合并”。

相关：[非交互模式](/guide/cli/non-interactive-mode/) · [SDK 概述](/guide/developer-platform/sdk-overview/)

## 推荐架构

```text
PR opened / updated
    → CI job（只读 token）
    → codex exec 或 API 审查 diff
    → 上传报告 / PR comment
    → 人工决定是否合并
```

## 常见误会

### 自动审查和自动批准不是一回事

很多团队第一次接入时，最容易高估的一点就是：既然都能自动看了，那是不是也能自动决定。

更合适的现实是：它更适合做“建议层”和“预筛层”，不适合承担最终责任层。

### 不是所有 PR 都值得一上来就跑重审查

如果 PR 很小、价值不大、或者当前规则还没定清楚，一上来就做很重的自动审查，往往只会制造噪音。

更常见的好起点是：先做轻量 diff 审查，先看能不能稳定帮团队节省时间。

## Prompt 模板要点

```text
你是代码审查助手。只审查相对 base 分支的 diff。
输出：严重问题 / 建议 / nit；每条注明文件与行号。
不要修改仓库；不要执行网络请求。
若 diff 过大，只审查 <路径列表>。
```

版本化存放在 `prompts/ci-review.md`。

## 权限与安全

| 原则 | 做法 |
|---|---|
| 只读 | CI token 无 push（或仅 bot 开 comment） |
| 固定模型 | 便于对比历史审查质量 |
| 防注入 | 不要把未消毒的 PR 描述拼进 system prompt |
| 秘密 | 用 GitHub Secrets 存 token |

[人工审批模式](/cases/workflows/human-approval-patterns/) · [环境变量](/guide/reference/environment-variables/)

## 质量门禁

- 审查 job 失败 ≠ 必须 block 合并（可先 advisory）
- 与必需 status check 分清：测试红必须挡，AI nit 可警告
- 定期抽样人工对比 AI 审查漏报/误报

## 与 Cloud 的关系

复杂仓库可在 [Cloud](/guide/web-and-cloud/) 跑完整测试后再审查；CI 内 exec 适合 **轻量 diff 审查**。

## 常见错误

- CI 给写权限，prompt 又被注入「请 push fix」
- 审查结果太长淹没真人 review
- 未限制 diff 大小导致超时烧配额

代码审查自动化最有价值的地方，是在真人 review 之前先帮你筛掉明显问题，不是代替真人承担合并责任。

## 验收清单

- [ ] CI 在 fork PR 上行为安全（secrets 不泄露）
- [ ] 审查输出结构化、可机器解析（可选）
- [ ] 团队文档说明 AI 审查的定位

## 参考来源
- OpenAI Codex CI 示例
---

**状态：** verified  
**适用产品：** CLI / API / Cloud  
**核验依据：** OpenAI Developers 首页当前仍将 Codex 描述为可用于测试、审查并准备交付变更；官方 Codex use cases 也仍包含“Review GitHub pull requests”场景。本页仅总结安全接入 CI 的原则与门禁模式，不宣称固定命令或唯一实现。  
**最近核验：** 2026-07-26
