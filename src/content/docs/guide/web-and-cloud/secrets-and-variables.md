---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-11-19"
title: Secrets 与环境变量
description: 区分 Cloud 直接环境变量与 network secret，理解原值可见性、代理替换和网络边界。
sidebar:
  order: 30
---

Cloud 当前区分直接 environment variable 与 network secret。关键不再是“setup 后一律删除”，而是任务中的程序能否读取原值、代理何时替换，以及请求被允许发往哪里。

| 类型 | Agent/程序看到什么 | 阶段 | 适合内容 |
|---|---|---|---|
| Environment variable | 环境内程序可读取原值 | setup 与任务阶段，取决于环境配置 | 非敏感配置；或确实必须读取原值且权限很小的临时凭据 |
| Network secret | Agent 看到 placeholder；网络代理在匹配请求中替换真实值 | setup 与任务阶段均可使用 | 发往明确允许域名的 HTTPS 认证请求 |

Network secret 不是“任务阶段不存在”，也不是让任意程序直接读取原值的变量。代理只在允许目标的 HTTPS 请求中替换 placeholder；仍应把域名、端口、方法和凭据权限缩到最小。

## 示例：访问私有包仓库

优先评估 network secret：只允许私有 registry 域名，让包管理器向该 HTTPS 目标发请求时由代理替换 placeholder。不要在日志中打印变量，也不要开放无关域名。

如果工具必须在进程内读取 token 原值、无法通过网络代理完成，才考虑 direct environment variable，并使用只读、短期、范围最小的凭据。此时要明确：任务中的程序与子进程可能接触原值，不能把它描述成 Agent 前会自动消失。

## 不正确示例

```text
把生产 API_KEY 配成普通环境变量，
再让 Agent curl 外部接口验证真实订单。
```

这样会让敏感值被任务程序读取，并在开放网络时形成外传或误操作风险。应改用测试夹具、mock、权限极小的临时凭据；若只需向固定 HTTPS 服务认证，优先使用带域名限制的 network secret。

## 配置检查

1. 列出 setup 和任务阶段各自真正需要的值；
2. 只需向固定 HTTPS 目标认证时，优先 network secret；
3. 程序必须读取原值时才用 direct environment variable，并缩小凭据权限；
4. 不把值写进 prompt、issue、PR、仓库或 `AGENTS.md`；
5. 运行 secret scanner，并检查 setup 日志；
6. 定期轮换并删除不再使用的凭据。

setup 在独立 Bash 会话中运行，脚本里的临时 `export` 不会自动变成环境配置。需要在后续任务使用的值应通过环境配置声明，不要依赖某个 setup shell 的临时状态。

## 与 CI 的关系

GitHub Actions Secrets 与 Codex Cloud Secrets 是不同存储系统，不会自动同步。可以统一变量**名称**便于文档化，但不要复制超出任务所需权限的同一个生产 token。

## 泄露后的动作

立刻撤销或轮换凭据，再清理日志、聊天、issue 和 Git 历史中的暴露内容。仅删除当前文件不足以撤回已经传播的 Secret。

## 官方依据

- [Cloud environments：variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environments)
