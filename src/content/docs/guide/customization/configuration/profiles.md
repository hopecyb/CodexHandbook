---
title: 配置 Profile
description: 用命名配置档切换模型、沙盒与审批组合——开发、审查、CI 各一套。
---

**Profile（配置档）** 让你保存一组命名配置（模型 + 沙盒 + 审批等），在不同场景一键切换，而不必每次手动改设置。

## 这篇会讲什么

- Profile 与「改默认配置」的区别
- 常见 Profile 划分方式
- 团队如何共享 Profile 定义

## Profile 在管什么

如果“配置”是默认工作习惯，那 **Profile** 就是“不同场景下的一套预设档”。

可以把它看成：

- 平时开发用一套
- 看不可信仓库用一套
- 只读审查用一套
- CI 自动跑任务再用一套

这样就不用每次临时去改一堆开关。

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

## 常见误会

### Profile 不是越多越灵活越好

很多人第一次会想给每种细小场景都建一个 Profile，最后变成十几个名字，自己都记不住差别。

通常先保留 2 到 4 个最常用的即可：

- 日常开发
- 严格模式
- 只读审查
- CI

能明显区分风险边界即可。

### Profile 不是替代思考的开关

切到某个 Profile，不代表以后所有任务都绝对安全或绝对合适。

它只是帮你把“常见起始状态”切过去，具体任务仍然要结合当前仓库和风险判断。

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

## 起步建议

刚开始用 Profile 时，可以这样开始：

1. 先保留一个 `daily` 作为默认档
2. 再补一个 `strict`，专门应对不熟悉或风险高的仓库
3. 如果团队有自动化，再单独加一个 `ci`

这样已经能覆盖大多数常见情况。

Profile 的价值在于让你在不同风险场景下，快速切到一套已经想清楚的默认组合。

## 参考来源

- stormzhang `18-config.md`
- OpenAI Codex profiles 文档

---

**状态：** outdated  
**适用产品：** CLI / App  
**复核说明：** 本页将 `Profile`、`codex --profile` 和共享 profile 结构写得过于具体，但当前可核到的官方资料不足以证明这些用法在现版本中普遍成立；在补齐正式文档依据前，不宜标为 `verified`。  
**最近核验：** 2026-07-26
