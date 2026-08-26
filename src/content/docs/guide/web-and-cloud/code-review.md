---
title: Cloud 与 GitHub 代码审查
description: 审查 Cloud diff，并在 GitHub 用 Codex 做高信号补充 review。
sidebar:
  order: 50
---

Cloud 任务结束会给出摘要和 diff；你可以追问、要求修改或创建 PR。任务完成不等于合并批准，最终仍要经过项目的 CI、分支保护与人工判断。

## 两种审查

| 类型 | 看什么 | 结果 |
|---|---|---|
| Cloud 结果审查 | 本次任务摘要、日志、diff | 决定跟进或创建 PR |
| GitHub Codex review | 已连接仓库的 PR diff 与 `AGENTS.md` 规则 | 发布 GitHub code review |

在 GitHub PR 评论：

```text
@codex review
```

Codex 会以普通 GitHub review 的形式发布发现。当前官方说明 GitHub 评论聚焦 P0/P1 高优先级问题；没有发现时可能只留下反应。不要因为评论少就跳过人工审查。

## 审查顺序

1. **范围**：文件、目录、依赖与生成物是否符合任务；
2. **行为**：正常、失败和边界路径是否满足需求；
3. **安全**：认证、权限、输入处理、凭据和出站网络；
4. **证据**：实际运行了哪些测试，失败项是否披露；
5. **可回滚性**：是否能小范围撤销，是否混入无关重构。

示例提示：

```text
审查这个 PR，只报告会导致错误行为、数据损坏、安全问题或兼容性回归的发现。
每条必须包含严重程度、具体位置、触发条件和影响。
不要把风格偏好列为缺陷。
```

## 仓库特有规则

在适用目录的 `AGENTS.md` 中加入：

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

根目录规则覆盖整个仓库，嵌套 `AGENTS.md` 可为服务追加更具体检查。先写两三条长期稳定、能说明安全路径的规则，不要堆满易过时的函数名。

## 自动 review 的边界

拥有所需 GitHub push 或 admin 权限的用户可在 Codex Settings 为仓库开启自动 reviews。自动 review 是补充门禁，不应拥有自动 merge 权限；高风险仓库仍保留 required reviewers、CI 和分支保护。

## 验收清单

- [ ] 人已阅读主要逻辑 diff
- [ ] P0/P1 发现已修复或书面接受风险
- [ ] CI 通过，且失败重跑记录可解释
- [ ] 无 Secret、意外生成物或无关 lockfile 更新
- [ ] 任务描述、PR 描述与实际改动一致

## 官方依据

- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [跨客户端代码审查](https://learn.chatgpt.com/docs/code-review)

---

**状态：** verified

**适用产品：** Cloud、GitHub

**最近核验：** 2026-08-26
