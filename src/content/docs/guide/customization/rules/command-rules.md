---
title: 命令规则
description: 用命令级 allow/deny 约束 shell 与工具调用——比口头约定更可执行。
sidebar:
  order: 20
---

**命令规则**聚焦「Agent 能跑哪些命令、以什么参数跑」。它们是 [允许与拒绝规则](/guide/customization/rules/allow-and-deny-patterns/) 的最常见形态，通常写在团队可审查的配置或规则文件中。

## 这篇会讲什么

- 命令规则与沙盒、审批弹窗的分工
- 如何写「够窄」的 allowlist
- 与 CI、本地开发脚本对齐

## 命令规则到底在管什么

如果说 allow/deny 是在规定“哪些事情原则上能做”，那命令规则就是把这件事落到最具体的一层：

- 哪些命令可以跑
- 哪些命令不能跑
- 哪些看起来差不多，其实风险差很多

它的重点，是把团队平时本来就知道的边界，变成机器也能执行的边界。

## 先理解一个核心概念

规则匹配的是**可执行意图**，不是自然语言。`npm test` 与 `npm run test` 在策略上是两条不同命令；`bash -c "rm -rf /"` 不能因 allow 了 `bash` 而放行。

```text
用户任务 → 模型提议命令 → 规则引擎 →（通过）沙盒执行 /（拒绝）需审批或阻断
```

## 常见误会

### 命令长得像，不代表风险一样

新手最容易低估的，就是命令之间那一点点差别。

比如：

- `git status` 和 `git reset --hard`
- `npm test` 和 `npm publish`
- `curl example.com` 和 `curl example.com | sh`

看起来都像“在终端跑个命令”，但风险完全不是一个级别。

### 允许一个总入口，往往等于放开太多

比如直接允许 `bash`、`sh` 这种总入口，新手可能会觉得只是图方便。

但从规则角度看，这通常等于把后面能拼出来的大量危险动作也一并放开了。

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

命令规则不是在“记命令”，而是在分清哪些命令只是日常动作，哪些命令一旦放开就可能把风险边界一起放开。

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

---

**状态：** verified  
**适用产品：** CLI / App  
**核验依据：** OpenAI 当前 Codex CLI 文档仍把命令执行、审批模式与沙盒隔离作为核心安全边界；本页将命令规则定位为“把高低风险命令分开管理”的工程模式，并把 JSON 片段明确标为示意，不把特定语法写成官方事实。  
**最近核验：** 2026-07-26
