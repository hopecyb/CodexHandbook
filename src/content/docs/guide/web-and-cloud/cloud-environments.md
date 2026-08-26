---
title: Cloud 环境
description: 配置 Codex Cloud 的运行时、依赖、setup、缓存和仓库起点。
sidebar:
  order: 20
---

Cloud 环境定义 Codex 为某个仓库安装和运行什么。环境不继承你的笔记本配置；本地能跑、Cloud 失败时，先比较运行时、依赖、变量和网络。

## 每次聊天的执行顺序

1. 创建容器，并 checkout 所选分支或 commit SHA；
2. 运行 setup script；复用缓存时还可运行 maintenance script；
3. 应用互联网策略；
4. Agent 循环运行命令、编辑和验证，并读取适用的 `AGENTS.md`；
5. 返回回答与 diff，供你继续追问或创建 PR。

默认 `universal` 镜像预装常见语言、包和工具。可在环境设置里固定 Python、Node.js 等版本，也可以用 setup script 安装额外依赖。

## 最小可复现配置

对一个 pnpm 项目，先在环境中固定与 CI 相同的 Node.js 版本，再提供：

```bash
corepack enable
pnpm install --frozen-lockfile
```

在仓库根目录 `AGENTS.md` 写明：

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

setup 与 Agent 阶段是不同的 Bash 会话，setup 中临时 `export` 的值不会自动延续。非敏感值应在环境设置中配置，或按官方建议持久化到 shell 配置。

## 缓存与 maintenance

Cloud 最多缓存容器状态 12 小时，以加速新聊天和跟进。缓存恢复后会 checkout 聊天指定分支，并可运行 maintenance script 更新依赖。

修改 setup、maintenance、环境变量或 secrets 会自动使缓存失效；仓库变化导致缓存不兼容时，手动 **Reset cache**。Business 与 Enterprise 的环境缓存可能由有权访问该环境的用户共享，重置会影响工作区其他用户。

## 环境变量和 Secret

- 环境变量贯穿 setup 与 Agent 阶段；
- Secret 只在 setup 阶段解密，Agent 开始前会移除；
- setup 阶段有互联网访问；
- Agent 阶段默认断网，可按环境单独开放。

这几个边界经常被混淆，下一章会展开：[Secrets 与环境变量](/guide/web-and-cloud/secrets-and-variables/)。

## 对齐清单

| 检查 | 目标 |
|---|---|
| 起始分支/commit | 与任务描述一致 |
| 运行时版本 | 与 CI 或生产约束一致 |
| lockfile | 使用冻结安装 |
| setup | 可重复、非交互、失败即停止 |
| 验证命令 | 写入 `AGENTS.md` |
| 网络 | Agent 只开放必要域名和方法 |

## 官方依据

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [codex-universal 镜像](https://github.com/openai/codex-universal)

---

**状态：** verified

**适用产品：** Cloud

**最近核验：** 2026-08-26
