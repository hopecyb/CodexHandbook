---
title: 配置 Profile
description: 用命名配置档切换模型、沙盒与审批组合——开发、审查、CI 各一套。
---

**Profile（配置档）** 让你保存一组命名配置（模型 + 沙盒 + 审批等），在不同场景一键切换，而不必每次手动改设置。

## 这篇解决什么问题

- Profile 与「改默认配置」的区别
- 常见 Profile 划分方式
- 团队如何共享 Profile 定义

## 典型 Profile 示例

| Profile 名 | 意图 | 特征（概念） |
|---|---|---|
| `daily` | 日常开发 | 平衡模型、标准沙盒 |
| `strict` | 不可信仓库 | 强审批、限网络 |
| `review-only` | 只读审查 | 禁止写盘或仅允许读 |
| `ci` | 流水线 | 固定模型、非交互、无 push |

具体字段见 [配置项参考](/guide/reference/configuration-reference/)。

## 使用方式（概念）

1. 在官方文档确认 Profile 语法（可能与 `config.toml` 内 `[profiles.name]` 或等价结构相关）
2. 创建 Profile 并命名
3. 启动时指定：`codex --profile strict`（命令以 `--help` 为准）
4. 在 README 注明「贡献者推荐 `daily`，CI 使用 `ci`」

CLI 细节：[CLI 配置](/guide/cli/configuration/)

## 与 AGENTS.md 分工

| | Profile | AGENTS.md |
|---|---|---|
| 管什么 | 能力开关、模型、沙盒 | 怎么写这个项目 |
| 提交 Git | 可选（项目级 profile 片段） | 是 |
| 个人/团队 | 个人 profile 可本机；团队 profile 应 PR | 团队 |

## 常见错误

- 每个仓库建 10 个 Profile 无人维护
- `ci` Profile 仍允许 `git push`
- Profile 名与文档不一致导致新人用错

## 参考来源

- stormzhang `18-config.md`
- OpenAI Codex profiles 文档

---

**状态：** review  
**适用产品：** CLI / App  
**最近核验：** 2026-07-25
