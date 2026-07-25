---
title: 代码审查自动化
description: 在 CI 或 PR 流程中接入 Codex 审查——提示词、权限与人工门禁。
---

把 Codex 放进 **Pull Request 流水线**，可以在人审前抓住明显问题，但**不能替代**责任审查与测试。本页讲可落地的自动化模式。

## 这篇解决什么问题

- CI 里怎么安全调用 Codex
- 审查 prompt 应包含什么
- 如何把结果贴回 PR 而不自动合并

相关：[非交互模式](/04-product-guides/cli/non-interactive-mode/) · [SDK 概述](/08-developer-platform/sdk-overview/)

## 推荐架构

```text
PR opened / updated
    → CI job（只读 token）
    → codex exec 或 API 审查 diff
    → 上传报告 / PR comment
    → 人工决定是否合并
```

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

[人工审批模式](/09-workflows/human-approval-patterns/) · [环境变量](/12-reference/environment-variables/)

## 质量门禁

- 审查 job 失败 ≠ 必须 block 合并（可先 advisory）
- 与必需 status check 分清：测试红必须挡，AI nit 可警告
- 定期抽样人工对比 AI 审查漏报/误报

## 与 Cloud 的关系

复杂仓库可在 [Cloud](/04-product-guides/web-and-cloud/) 跑完整测试后再审查；CI 内 exec 适合 **轻量 diff 审查**。

## 常见错误

- CI 给写权限，prompt 又被注入「请 push fix」
- 审查结果太长淹没真人 review
- 未限制 diff 大小导致超时烧配额

## 验收清单

- [ ] CI 在 fork PR 上行为安全（secrets 不泄露）
- [ ] 审查输出结构化、可机器解析（可选）
- [ ] 团队文档说明 AI 审查的定位

## 参考来源

- OpenAI Codex CI 示例
- KimYx0207 Review/PR 章节
- stormzhang CI 教程
- codex.bozhouai.com Git/GitHub 篇

---

**状态：** review  
**适用产品：** CLI / API / Cloud  
**最近核验：** 2026-07-25
