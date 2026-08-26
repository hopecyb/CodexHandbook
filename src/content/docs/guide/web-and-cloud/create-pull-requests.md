---
title: 创建 Pull Request
description: 把 Cloud 结果交付为可审查、可验证且不自动合并的 PR。
sidebar:
  order: 40
---

Cloud 任务完成后先检查摘要和 diff。结果满足范围与验证标准时，再创建 Pull Request；若不满足，在同一聊天继续修正。

## 从任务到 PR

```text
选择环境与起始分支
  → 运行 Cloud 任务
  → 审查摘要、日志与 diff
  → 必要时 follow-up
  → Create Pull Request
  → CI + Codex 补充 review + 人工 review
  → 人决定是否合并
```

提示词中明确“创建 PR，不要合并”，但不要只依赖自然语言约束；仓库还应启用分支保护和 required checks。

## 可复用任务模板

```text
目标：修复 #42 的登录超时回归。
起点：main。
范围：仅 packages/auth/** 与对应测试。
禁止：升级依赖、修改公共 API、直接写 main。
验证：pnpm test --filter auth；pnpm typecheck。
交付：创建到 main 的 PR，但不要合并。
PR 描述包含根因、改动摘要、测试命令及结果、风险和回滚方式。
```

## 创建前检查

- [ ] 起始 commit 正确，未遗漏本地未推送输入
- [ ] diff 仅含任务范围
- [ ] 新分支名称可识别且不覆盖他人工作
- [ ] 测试真实执行，失败没有被摘要隐藏
- [ ] 无凭据、临时日志、缓存和无关格式化
- [ ] 大改动已拆成可独立审查的 PR

## PR 描述至少回答

1. 为什么需要改；
2. 实际改了什么；
3. 如何验证，包括命令与结果；
4. 风险、限制和回滚方式；
5. 哪些内容明确未做。

UI 改动补真实截图，行为改动补复现步骤，迁移改动补兼容与回滚说明。

## 创建后

等待 required checks，使用 `@codex review` 请求补充审查，再由具备上下文的人检查主要 diff。需要修正时把具体评论交回同一 PR 分支；不要另开一个不相关分支制造双份结果。

开 PR 与合并是两个权限边界。Cloud 能创建 PR，不代表它应绕过团队合并策略。

## 官方依据

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)

---

**状态：** verified

**适用产品：** Cloud、GitHub

**最近核验：** 2026-08-26
