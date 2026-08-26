---
title: 互联网访问
description: 区分安装期联网与 Agent 联网，并以域名和 HTTP 方法限制风险。
sidebar:
  order: 70
---

Cloud 有两个不同的联网阶段：

| 阶段 | 默认行为 | 主要用途 |
|---|---|---|
| setup script | 可联网 | 安装依赖和工具 |
| Agent phase | 默认关闭 | Agent 执行任务时访问外部资源 |

因此，`pnpm install` 在 setup 成功，不代表 Agent 随后可以 `curl` 任意网站。

## 为什么默认关闭

Agent 联网会增加提示注入、代码或数据外传、恶意依赖和许可证不兼容内容进入仓库的风险。不可信 issue、网页或依赖 README 里可能包含诱导 Agent 执行外传命令的指令。

原则是：只开放任务必需的目标和动作，并审查工作日志。

## 配置选项

Agent 互联网访问按环境配置：

- **Off**：完全阻止 Agent 联网；
- **On**：允许联网，并可限制域名与 HTTP 方法。

域名列表可从空列表开始，使用 Common dependencies 预设，或选择 All（unrestricted）。生产仓库不应把 unrestricted 当成排障捷径。

若任务只需读取文档或下载内容，把 HTTP 方法限制在 `GET`、`HEAD` 与 `OPTIONS`。这样会阻止 `POST`、`PUT`、`PATCH`、`DELETE` 等可能外发或修改数据的方法。

## 最小开放示例

任务需要查询某个公开 API 文档：

1. 先保持 Off，确认失败确实由网络造成；
2. 开启 Agent access；
3. allowlist 只加入该官方域名；
4. 只允许 `GET`、`HEAD`、`OPTIONS`；
5. 重新运行并检查日志中所有出站请求；
6. 任务结束后评估是否恢复 Off。

## 与 Secret 的关键关系

Cloud Secret 在 Agent 阶段前会被移除，这降低了 Agent 直接外传 setup Secret 的风险；但普通环境变量、仓库内容和任务产生的数据仍可能被发出。不要把敏感值伪装成普通变量来绕过 Secret 生命周期。

## 验收清单

- [ ] 已说明为什么 Agent 阶段必须联网
- [ ] allowlist 只含必要域名
- [ ] HTTP 方法限制到最小集合
- [ ] 输入来源可信，或已考虑提示注入
- [ ] 日志中没有上传仓库、环境或凭据的命令
- [ ] 新依赖经过来源、版本与许可证检查

## 官方依据

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**状态：** verified

**适用产品：** Cloud

**最近核验：** 2026-08-26
