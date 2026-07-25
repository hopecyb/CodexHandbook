---
title: 环境变量
description: Codex 相关环境变量的用途、分层与安全——配置参考的补充索引。
---

环境变量用于**注入密钥、覆盖开关、适配 CI**，而不把敏感值写进配置文件或 Git。本页是概念索引；具体变量名以 [官方文档](https://developers.openai.com/codex) 与 `codex --help` 为准。

## 这篇解决什么问题

- 哪些东西应该用环境变量而不是 config 文件
- 用户级、项目级、Cloud Secrets、CI 如何分工
- 常见命名与泄露风险

配置键概念见 [配置项参考](/12-reference/configuration-reference/)；Cloud 见 [Secrets 与变量](/04-product-guides/web-and-cloud/secrets-and-variables/)。

## 适合放环境变量的内容

| 类型 | 示例意图 | 不要 |
|---|---|---|
| 认证 token | API key、GitHub PAT | 提交到仓库 |
| 临时开关 | 调试日志级别 | 长期业务配置 |
| CI 注入 | 只读审查模式 | 生产写权限 token |
| MCP 子进程 | 第三方服务 key | 明文写在 `AGENTS.md` |

## 不适合仅靠环境变量的内容

- 编码规范、目录结构 → `AGENTS.md`
- 团队共识的模型默认值 → 项目配置（非密钥部分）
- 复杂 allowlist → [规则](/06-customization/rules/allow-and-deny-patterns/)

## 分层与优先级（概念）

```text
组织强制策略（若有）
    ↓ 覆盖
Shell / CI 注入的环境变量
    ↓ 与配置文件合并（具体规则以官方为准）
用户级 / 项目级 config 文件
```

同一键多处设置时，以**官方文档说明的优先级**为准；排障时打印「有效配置」或查日志。

## 常用场景

### 本地开发

在 `~/.zshrc` 或 direnv `.envrc` 中导出个人 token——**勿 commit** `.env`。

### CLI 非交互

CI 通过 secret store 注入变量后跑 `codex exec`。见 [非交互模式](/04-product-guides/cli/non-interactive-mode/)。

### MCP 服务器

MCP 进程常继承父进程环境；在配置中引用 `$VAR` 而非写死值。见 [连接 MCP](/07-extensions-automation/mcp/connect-an-mcp-server/)。

### Cloud

仓库级 Secrets 在 Cloud 控制台配置，名称与任务内引用一致。

## 安全清单

- [ ] `.env` 在 `.gitignore` 中
- [ ] 日志打印前脱敏 token
- [ ] 轮换泄露过的 key
- [ ] 最小权限 scope（只读 CI token 等）

## 常见错误

- 把 `.env.example` 填成真实 key 并提交
- 在 screen 共享时 `export` 可见 token
- 假设 `unset` 后子进程仍安全——需查进程树

## 参考来源

- OpenAI Codex configuration / environment 文档
- stormzhang `18-config.md`
- KimYx0207 CX-04

---

**状态：** review  
**适用产品：** CLI / App / IDE / Cloud  
**最近核验：** 2026-07-25
