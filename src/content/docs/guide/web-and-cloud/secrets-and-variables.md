---
title: Secrets 与环境变量
description: 正确选择 Cloud setup Secret 与贯穿聊天的普通环境变量。
sidebar:
  order: 30
---

Cloud 环境变量和 Secrets 的生命周期不同。这个差异决定了它们能安全支持什么，而不只是“界面会不会掩码”。

| 类型 | 可见阶段 | 适合内容 |
|---|---|---|
| 环境变量 | setup + Agent 全程 | 非敏感配置，如运行模式、公开 API 基址 |
| Secret | 仅 setup script | 私有包 token、安装依赖所需凭据 |

Secret 会额外加密保存，只在任务执行时解密，并在 Agent 阶段开始前移除。它不是让 Agent 在运行期调用生产 API 的通用凭据通道。

## 正确示例：安装私有包

在环境设置中创建 `NPM_TOKEN` Secret。setup script 使用它生成临时认证配置并安装依赖：

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

Agent 阶段不再需要 token，只使用已经安装好的依赖。setup 日志中不得 `echo` Secret。

## 不正确示例

```text
把生产 API_KEY 配成普通环境变量，
再让 Agent curl 外部接口验证真实订单。
```

这样会让敏感值贯穿 Agent 阶段，并在开放网络时形成外传或误操作风险。应改用测试夹具、mock、权限极小的临时测试凭据，或把必须认证的准备工作限制在 setup。

## 配置检查

1. 列出 setup 和 Agent 各自真正需要的值；
2. 敏感且只用于安装的值使用 Secret；
3. Agent 必须使用的非敏感设置使用环境变量；
4. 不把值写进 prompt、issue、PR、仓库或 `AGENTS.md`；
5. 运行 secret scanner，并检查 setup 日志；
6. 定期轮换并删除不再使用的凭据。

setup 在独立 Bash 会话中运行，普通 `export` 不会自动延续到 Agent 阶段。需要贯穿聊天的非敏感值应直接配置成环境变量，而不是依赖临时 shell 状态。

## 与 CI 的关系

GitHub Actions Secrets 与 Codex Cloud Secrets 是不同存储系统，不会自动同步。可以统一变量**名称**便于文档化，但不要复制超出任务所需权限的同一个生产 token。

## 泄露后的动作

立刻撤销或轮换凭据，再清理日志、聊天、issue 和 Git 历史中的暴露内容。仅删除当前文件不足以撤回已经传播的 Secret。

## 官方依据

- [Cloud environments：variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**状态：** verified

**适用产品：** Cloud

**最近核验：** 2026-08-26
