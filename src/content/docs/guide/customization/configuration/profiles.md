---
title: 配置 Profile
description: 用独立配置文件为 Codex CLI 叠加一组命名设置。
sidebar:
  order: 20
---

当前 Codex CLI 的 `--profile <name>` 会把 `$CODEX_HOME/<name>.config.toml` 叠加到基础用户配置上。它主要用于 CLI 场景，不应被描述成桌面应用里的通用“一键模式”。

## 最小示例

基础配置保留共享默认值：

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

只读审查 profile：

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

启动：

```bash
codex --profile review
# 简写
codex -p review
```

用本机版本确认语义：

```bash
codex --help
```

当前帮助应说明 profile 文件路径和叠加关系。若版本不同，以本机输出与官方配置参考为准。

## Profile 适合什么

| Profile | 目的 | 示例边界 |
|---|---|---|
| `review` | 只读检查 | read-only、无写操作 |
| `workspace` | 日常项目修改 | 只写工作区、按需审批 |
| `ci` | 非交互检查 | 固定输出、无 push |

Profile 只保存一组配置起点。它不会覆盖组织 requirements，也不会让提示词自动安全。尤其不要把 `danger-full-access` 做成随手使用的默认 profile。

## 不要与 Permission Profile 混淆

- **配置 Profile**：`--profile name` 选择 `<name>.config.toml`，可叠加多种 Codex 配置；
- **Permission Profile（Beta）**：`default_permissions` 与 `[permissions.<name>]` 定义文件系统和网络边界。

两者都叫 profile，但用途和配置结构不同。当前 Permission Profile 也不与旧 `sandbox_mode` 组合；选一种权限系统配置。

## 团队使用边界

配置 Profile 位于用户 Codex home，不是当前版本里天然可提交的项目配置。团队可在文档中提供审查过的示例文件，让成员显式安装和核对；不要假设仓库 clone 后会自动启用个人 profile。

## 验收

1. 运行 `codex --help` 确认当前版本支持 `-p/--profile`；
2. 用只读任务测试 `review`；
3. 要求读取工作区外文件或写入文件，确认边界按预期阻止；
4. 检查有效配置，不要只相信文件名。

## 官方依据

- [Codex 配置 schema](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Codex CLI 源码中的配置层](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)

---

**状态：** verified

**适用产品：** CLI

**最近核验：** 2026-08-26（本机 `codex-cli 0.148.0`）
