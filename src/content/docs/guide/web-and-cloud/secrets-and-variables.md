---
title: Secrets 与环境变量
description: 在 Cloud 中安全注入 API 密钥、令牌与非敏感配置变量。
---

Cloud 任务常需要访问私有 API、包仓库或数据库。这里用到的凭据，应该通过 **Secrets 与环境变量** 注入，不要写进代码、prompt、issue、聊天记录或 Git 历史。

## 内容

- Secrets vs 普通环境变量的区别
- 在 Cloud 控制台 / 仓库设置中如何配置
- 与 GitHub Actions Secrets 的关系

## 区分 Secret 与环境变量

可以直接这样区分：

- **Secret**：不能随便被人看到的值，比如 API Key、数据库密码、私钥
- **环境变量**：给程序看的配置项，有些敏感，有些不敏感

不是所有环境变量都是 Secret，但 Secret 最好都走安全注入机制，不要直接写死。

## 概念区分

| 类型 | 内容示例 | 存储要求 |
|---|---|---|
| **Secret** | API key、私钥、数据库密码 | 加密存储、界面掩码、不可进日志 |
| **变量** | `NODE_ENV=production`、功能开关 | 可非加密，仍避免泄露业务策略 |
| **仓库内 `.env`** | 本地开发用 | **不要提交**；Cloud 用控制台 Secrets 代替 |

敏感上下文总则：[敏感上下文](/guide/context/sensitive-context/)

## 常见误会

### 1. “我只是临时贴一下 key，问题不大吧？”

风险很大。你一旦把 key 贴进：

- 对话
- issue
- PR 描述
- shell 历史
- Git 提交

它就可能被日志、通知、截图、历史版本和其他协作者扩散出去。

### 2. “那我写进 `.env` 再提交，Cloud 就能读到了？”

`.env` 更适合本地开发，不适合提交进版本库。Cloud 场景下，优先使用平台提供的 Secret 管理能力。

### 3. “Secret 名字随便起，反正值对就行？”

很多任务失败，问题不在值本身，而在这些地方：

- 名称拼错
- 作用域不对
- 代码里读取的是另一个变量名

所以文档、代码、Cloud 设置里的命名最好统一。

## 配置原则

1. **最小权限**：每个 Secret 只够完成一类任务
2. **按仓库/环境隔离**：staging 与 production 分开
3. **轮换**：定期更新 token，旧任务失效可接受
4. **审计**：记录谁添加/修改了哪些 Secret（团队流程）
5. **永不回显**：任务日志与 PR 评论不应打印 Secret 值

## 最小配置流程

可以按这个顺序处理：

1. 先列出任务到底需要访问哪些外部服务
2. 只为这次任务准备必要的 Secret，不要一开始就给生产全量权限
3. 在文档里写“需要什么名字的 Secret”，但不写值
4. 跑一次测试任务，验证能否读取
5. 再做真实任务

## 推荐工作流

```text
1. 在 Cloud / GitHub 设置中添加 Secret（名称大写蛇形，如 NPM_TOKEN）
2. 在 AGENTS.md 说明「需要 NPM_TOKEN 才能安装私有包」，不写值
3. 发起 Cloud 任务，确认环境能读取（失败则查名称拼写与作用域）
4. CI 使用 GitHub Actions Secrets，与 Cloud 命名对齐便于文档化
```

与 [GitHub 集成](/guide/integrations/github/) 配合时，优先使用平台原生 Secrets，而非让 Agent 从 issue 正文复制密钥。

## 什么时候该当成 Secret

拿不准某个值该不该当 Secret 时，可以先问自己：

- 这个值泄露后，会不会带来金钱、数据、权限或业务风险？

如果答案是“会”，那它就不该出现在公开文档、prompt、聊天记录和仓库里。

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
| 为了省事直接给管理员权限 token | 失控面太大 |

## 验收清单

- [ ] 仓库内无硬编码密钥（可用 secret scanner）
- [ ] Cloud Secrets 列表与文档中的名称一致
- [ ] 任务失败日志未包含 Secret 明文
- [ ] 离职/轮换流程已定义

## 参考来源
- OpenAI Codex Cloud secrets
---

**状态：** outdated  
**适用产品：** Cloud  
**复核说明：** 本页把 Cloud Secrets 的配置位置、仓库作用域和与 GitHub Actions Secrets 的关系讲得较具体，但当前缺少足够强的官方现行 Secrets 管理文档来逐项证明这些表述；在补齐正式依据前更适合标为 `outdated`。  
**最近核验：** 2026-07-26
