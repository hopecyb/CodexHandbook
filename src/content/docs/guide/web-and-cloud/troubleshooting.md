---
title: Cloud 排障
description: 按仓库、setup、网络、Agent 与交付五层定位 Cloud 失败。
sidebar:
  order: 80
---

Cloud 重试会重新消耗时间，但不会自动补齐缺失的权限、依赖或网络配置。先判断失败发生在哪个阶段。

## 五层分诊

| 阶段 | 常见症状 | 第一检查点 |
|---|---|---|
| 仓库连接 | 仓库不在列表、403、分支不存在 | GitHub 授权范围、组织策略、起始分支 |
| 容器/setup | `command not found`、依赖安装失败 | 固定运行时、setup script、Secret |
| Agent 网络 | setup 可下载，Agent `curl` 失败 | Agent access 默认 Off、allowlist、HTTP 方法 |
| Agent 执行 | 修改跑偏、测试命令不存在 | prompt 范围、`AGENTS.md`、工作日志 |
| 交付 | diff 不完整、无法开 PR | 分支状态、写权限、保护规则 |

## 先保留证据

记录仓库、起始 commit、环境名称、失败阶段、第一条有效错误和完整命令。不要只保留最终一句“exit 1”。

```text
环境：api-node22
起点：main@abc123
阶段：setup
命令：pnpm install --frozen-lockfile
首个错误：ERR_PNPM_FETCH_401 ...
本地差异：本地使用了 ~/.npmrc，Cloud 未配置 NPM_TOKEN
```

这类记录能直接指向修复，而不是让下一轮重新猜。

## 高频问题

### setup 中能读 Secret，Agent 中为空

这是设计行为：Secret 在 Agent 阶段前被移除。把使用凭据的安装动作放在 setup；不要改成普通环境变量来绕开保护。

### setup 能联网，Agent 不能

也是默认行为。若任务确实需要 Agent 联网，在环境中开启并限制域名和 HTTP 方法，随后审查日志。

### 缓存导致依赖旧

修改 setup、maintenance、变量或 secrets 会自动失效缓存。仓库本身的变化导致缓存不兼容时，在环境页 Reset cache；团队共享环境先评估对其他用户的影响。

### 本地绿、Cloud 红

对比 Node/Python 版本、lockfile、系统依赖、本地隐藏配置、VPN/localhost 服务和大小写敏感路径。把差异变成显式 setup 与仓库规则。

### PR review 没触发

确认 Cloud 已为仓库配置、Code review 已开启、评论是 `@codex review`，并检查 GitHub 集成权限。自动 reviews 还需要单独启用。

## 何时退回本地

若问题依赖本机服务，或连续两轮都在修环境而非业务代码，先在本地做最小复现。把成功命令、版本和测试写回 `AGENTS.md`/setup 后，再交给 Cloud。

## 解决后的验收

- [ ] 同一环境从干净起点可重复运行
- [ ] 没有用更大仓库权限或 unrestricted 网络掩盖问题
- [ ] 日志未泄露 Secret
- [ ] 结果 diff 与测试仍经过人工审查

## 官方依据

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**状态：** verified

**适用产品：** Cloud

**最近核验：** 2026-08-26
