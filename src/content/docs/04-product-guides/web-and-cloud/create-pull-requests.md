---
title: 创建 Pull Request
description: 从 Cloud 任务到可审查的 PR——描述、范围与人工合并闸门。
---


Cloud 任务的价值常体现在 **Pull Request**——可 diff、可评论、可 CI。本页讲如何设计任务，使 PR **小而可审**。

## 这篇解决什么问题

- 从云端任务到 PR 的端到端预期
- PR 描述应包含什么，方便人与 CI 验收
- 何时不应自动开 PR

## 推荐工作流

```text
连接 GitHub → 明确 issue/目标 → Cloud 任务（计划确认）→ 推送分支 → 开 PR → 人工 review + CI → 合并
```

前置：[连接 GitHub](/04-product-guides/web-and-cloud/connect-github/)

## 任务提示词要点

```text
目标：修复 #42 描述的登录超时问题
分支：fix/42-login-timeout
范围：仅 packages/auth 与相关测试
完成：开 PR 到 main，不要合并
PR 描述须包含：原因、改动摘要、测试命令与结果、风险与回滚
```

与 [定义完成](/05-core-capabilities/prompting/define-done/) 和 [好任务的结构](/05-core-capabilities/prompting/anatomy-of-a-good-task/) 一致。

## PR 质量检查清单

- [ ] 标题说明「做了什么」，而非「更新代码」
- [ ] 关联 issue 编号
- [ ] CI 通过或说明已知失败原因
- [ ] diff 行数在团队可接受范围；过大则拆 PR
- [ ] 无密钥、无无关格式化风暴
- [ ] 截图或日志（UI/行为变更时）

## 人工闸门

即使 Codex 能开 PR，**合并**应默认由人完成（或通过受控 bot + 分支保护）：

见 [人工审批模式](/09-workflows/human-approval-patterns/)

## 与 Review 自动化

- 可用 Skill 或 CI 中的 `codex exec` 做**补充审查评论**
- 自动合并需单独治理策略，不在初学者默认路径中

KimYx0207 CX-10 专讲 Review/PR；事实以官方为准。

## 常见错误

- PR 含多个不相关功能
- 描述写「AI 生成的修改」却无测试说明
- 直接合并到 main 绕过 review

## 延伸阅读

- [GitHub 集成](/04-product-guides/integrations/github/)
- [审查 diff](/05-core-capabilities/quality/review-diffs/)
- [桌面 App：diff 与评论](/04-product-guides/desktop-app/diffs-comments-and-review/)

---

**状态：** review  
**适用产品：** Cloud / Web  
**最近核验：** 2026-07-25
