---
title: Secrets 与环境变量
description: 在 Cloud 中安全注入 API 密钥、令牌与非敏感配置变量。
---

Cloud 任务常需要访问私有 API、包仓库或数据库——这些凭据应通过 **Secrets 与环境变量**注入，而不是写进代码、prompt 或 Git 历史。

## 这篇解决什么问题

- Secrets vs 普通环境变量的区别
- 在 Cloud 控制台 / 仓库设置中如何配置
- 与 GitHub Actions Secrets 的关系

## 概念区分

| 类型 | 内容示例 | 存储要求 |
|---|---|---|
| **Secret** | API key、私钥、数据库密码 | 加密存储、界面掩码、不可进日志 |
| **变量** | `NODE_ENV=production`、功能开关 | 可非加密，仍避免泄露业务策略 |
| **仓库内 `.env`** | 本地开发用 | **不要提交**；Cloud 用控制台 Secrets 代替 |

敏感上下文总则：[敏感上下文](/guide/context/sensitive-context/)

## 配置原则

1. **最小权限**：每个 Secret 只够完成一类任务
2. **按仓库/环境隔离**：staging 与 production 分开
3. **轮换**：定期更新 token，旧任务失效可接受
4. **审计**：记录谁添加/修改了哪些 Secret（团队流程）
5. **永不回显**：任务日志与 PR 评论不应打印 Secret 值

## 推荐工作流

```text
1. 在 Cloud / GitHub 设置中添加 Secret（名称大写蛇形，如 NPM_TOKEN）
2. 在 AGENTS.md 说明「需要 NPM_TOKEN 才能安装私有包」，不写值
3. 发起 Cloud 任务，确认环境能读取（失败则查名称拼写与作用域）
4. CI 使用 GitHub Actions Secrets，与 Cloud 命名对齐便于文档化
```

与 [GitHub 集成](/guide/integrations/github/) 配合时，优先使用平台原生 Secrets，而非让 Agent 从 issue 正文复制密钥。

## 互联网访问与 Secrets

部分任务需要出网拉包或调 API：

- 出网策略见组织安全规定
- 即使能出网，也不应在 prompt 里粘贴 Bearer token
- 对不可信仓库默认禁止读取生产 Secrets

## 常见错误

| 错误 | 风险 |
|---|---|
| 把 `.env` commit 进仓库 | 永久泄露 |
| 在 issue/任务描述里贴 key | 日志与通知扩散 |
| 生产 Secret 用于实验任务 | 误操作生产数据 |
| Secret 名称与代码不一致 | 任务静默失败 |

## 验收清单

- [ ] 仓库内无硬编码密钥（可用 secret scanner）
- [ ] Cloud Secrets 列表与文档中的名称一致
- [ ] 任务失败日志未包含 Secret 明文
- [ ] 离职/轮换流程已定义

## 参考来源

- OpenAI Codex Cloud secrets
- stormzhang `16-security.md`、`10-cloud.md`
- KimYx0207 安全与企业章节（事实需官方复核）

---

**状态：** review  
**适用产品：** Cloud  
**最近核验：** 2026-07-25
