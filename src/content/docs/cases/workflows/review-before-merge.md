---
title: 合并前审查
description: 在 merge 之前用 Codex 做结构化 diff 与风险审查——人机分工清晰。
---

**合并前审查**把 [质量与验证](/guide/quality/) 落到 Git 流程：在 PR 合并前，用 Codex 检查 diff、测试、安全与规格符合度。自动评论**不等于**自动合并。

## 这篇解决什么问题

- 本地审查 vs Cloud/CI 审查的分工
- 审查提示词应覆盖哪些维度
- 何时必须人工最终签字

## 最小可用做法

**本地（作者自检）**

```text
对比当前分支与 main 的 diff（先不要改代码）：
1. 是否超出 issue 范围
2. 是否有明显安全风险（密钥、注入、权限）
3. 是否缺测试或文档
输出 checklist，标 P0/P1。
```

**CI（团队门禁）**

- 固定 prompt 版本 + 只读 token
- 结果写入 PR comment 或 check run
- 见 [代码审查自动化](/guide/developer-platform/ci-cd/code-review-automation/)

## 推荐审查维度

| 维度 | 关注点 |
|---|---|
| 正确性 | 逻辑、边界、错误处理 |
| 测试 | 新行为是否有覆盖 |
| 安全 | 密钥、注入、依赖漏洞线索 |
| 可维护性 | 命名、重复、公共 API |
| 规格 | 与 issue/规格文档一致 |

与 [审查 diff](/guide/quality/review-diffs/) 配合；高风险项走 [人工审批模式](/cases/workflows/human-approval-patterns/)。

## 常见错误

- 只让模型说「LGTM」无具体依据
- 把完整 PR 描述未消毒拼进 CI prompt（注入风险）
- 审查通过但 CI 测试未跑
- 自动合并 Bot 开启且无分支保护

## 安全边界

- 审查用只读权限；修复应在**新 commit** 由人触发
- 不在审查日志中记录用户 PII 或密钥

## 验收清单

- [ ] 审查输出可追溯到具体文件/行
- [ ] P0 问题已阻断合并或已修复
- [ ] 与团队 review checklist 对齐
- [ ] 人工 maintainer 对争议项有最终决定

## 相关章节

- [Cloud 代码审查](/guide/web-and-cloud/code-review/)
- [创建 Pull Request](/guide/web-and-cloud/create-pull-requests/)

## 参考来源

- KimYx0207 Review/PR 章节
- codex.bozhouai.com Git/GitHub 工作流

---

**状态：** review  
**适用产品：** CLI / IDE / Cloud  
**最近核验：** 2026-07-25
