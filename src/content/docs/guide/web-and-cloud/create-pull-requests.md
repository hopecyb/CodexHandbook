---
title: 创建 Pull Request
description: 从 Cloud 任务到可审查的 PR——描述、范围与人工合并闸门。
---


第一次用 Cloud 工作流时，常见情况是任务已经做完了，但改动还没进入便于检查和讨论的状态。团队协作里，这一步一般靠 **Pull Request** 完成。

PR 是一份可以被审查的改动申请。

它会把改了什么、为什么改、有没有测过，集中放到一个可以 review 的位置。Cloud 任务交付给团队时，也会落到这里。

## 内容

- 从云端任务到 PR 的端到端预期
- PR 描述应包含什么，方便人与 CI 验收
- 何时不应自动开 PR

## 什么时候要开 PR

如果改动需要别人查看、需要 CI 运行，或者最后要合并到主分支，就别停在“分支里已经改完”，而是继续推进到 **可审查的 PR**。

## 推荐工作流

```text
连接 GitHub → 明确 issue/目标 → Cloud 任务（计划确认）→ 推送分支 → 开 PR → 人工 review + CI → 合并
```

前置：[连接 GitHub](/guide/web-and-cloud/connect-github/)

## 为什么不建议一上来就自动合并

PR 的作用是给人和系统留出检查入口，不只是把代码推上去。

常见做法是：

- Codex 可以帮你开 PR
- 人来决定是否合并

这样即使任务方向跑偏，也还有人工检查这一关。

## 任务提示词要点

```text
目标：修复 #42 描述的登录超时问题
分支：fix/42-login-timeout
范围：仅 packages/auth 与相关测试
完成：开 PR 到 main，不要合并
PR 描述须包含：原因、改动摘要、测试命令与结果、风险与回滚
```

与 [定义完成](/prompts/define-done/) 和 [好任务的结构](/prompts/task-anatomy/) 一致。

## 一份好 PR 至少要回答四个问题

1. 你为什么改这件事？
2. 你具体改了哪些地方？
3. 你怎么验证它？
4. 还有什么风险、限制或未覆盖情况？

PR 描述没覆盖这四点，审查者就得自己补上下文。

## PR 质量检查清单

- [ ] 标题说明「做了什么」，而非「更新代码」
- [ ] 关联 issue 编号
- [ ] CI 通过或说明已知失败原因
- [ ] diff 行数在团队可接受范围；过大则拆 PR
- [ ] 无密钥、无无关格式化风暴
- [ ] 截图或日志（UI/行为变更时）

## 人工闸门

即使 Codex 能开 PR，**合并**应默认由人完成（或通过受控 bot + 分支保护）：

见 [人工审批模式](/cases/workflows/human-approval-patterns/)

## 常见误会

### 1. 把多个不相关改动塞进一个 PR

这样别人会很难看，也很难回退。

### 2. 只说“已修复”，不说怎么验证

对方不知道你是“真测过”，还是“感觉应该没问题”。

### 3. 让 Codex 直接碰主分支

对个人实验也许能省一步，但对协作仓库风险太高。

## 与 Review 自动化

- 可用 Skill 或 CI 中的 `codex exec` 做**补充审查评论**
- 自动合并需单独治理策略，不在初学者默认路径中

KimYx0207 CX-10 专讲 Review/PR，具体能力还是以官方为准。

## 常见错误

- PR 含多个不相关功能
- 描述写「AI 生成的修改」却无测试说明
- 直接合并到 main 绕过 review

## 延伸阅读

- [GitHub 集成](/guide/integrations/github/)
- [审查 diff](/guide/quality/review-diffs/)
- [桌面 App：diff 与评论](/guide/desktop-app/diffs-comments-and-review/)

---

**状态：** review  
**适用产品：** Cloud / Web  
**最近核验：** 2026-07-25
