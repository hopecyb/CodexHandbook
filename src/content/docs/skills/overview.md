---
title: Skills 概述
description: 用 SKILL.md 把可复用工作流教给 Codex，写一次，按需调用。
---


**Skill** 是一个包含 `SKILL.md` 的目录（可加脚本与参考资料），把一套固定流程打包成 Codex 能**自动或显式调用**的能力。

它适合承载那些已经重复出现、以后还会继续复用的做事方法。

## 核心概念

### 与斜杠命令的区别

| | 斜杠命令 | Skill |
|---|---|---|
| 触发 | 你输入 `/xxx` | 你可 `$name` 调用，或模型按描述匹配 |
| 上下文 | 一般立即展开 | **渐进式披露**：平时只占名称+描述，选中才读全文 |
| 适合 | 固定、高频、你记得住的入口 | 流程长、需文档、希望模型自己判断何时用 |

### 渐进式披露

Codex 启动时只看到每个 Skill 的 **name、description、路径**；只有决定使用时才加载完整 `SKILL.md`。因此正文可以写详细检查清单，而不必担心占满上下文。

注意：Skill 列表有**初始字符预算**（约为上下文的一小部分）。`description` 要把核心触发场景写在**最前面**，避免被截断后匹配失败。

## Skill 目录结构

```text
my-skill/
├── SKILL.md          # 必需
├── scripts/          # 可选：确定性步骤
└── references/       # 可选：长参考文档
```

`SKILL.md` 最小示例：

```md
---
name: pr-review
description: 审查当前分支相对 main 的 diff，标出风险与测试缺口。在用户要求 review、审查 PR 或合并前检查时使用。
---

## 步骤
1. 获取相对 main 的 diff
2. 按文件分类：逻辑错误、安全、性能、测试
3. 输出分级清单：阻断 / 建议 /  nit
4. 不要自动 push 或合并
```

## 存放位置

| 类型 | 典型位置 | 说明 |
|---|---|---|
| 项目 Skill | `.agents/skills/<name>/` | 跟仓库走，团队共享 |
| 用户 Skill | 用户 skills 目录（见官方文档） | 个人跨项目 |
| 官方精选 | 通过安装器安装 | 路径由安装器管理，勿与手写目录混淆 |

**不要**照搬过时教程中的错误路径或虚构的 `trigger:` 字段；以 [官方 Skills 文档](https://developers.openai.com/codex/skills) 为准。

## 触发方式

1. **显式**：在支持的环境中用 `$skill-name` 调用（名称与 frontmatter `name` 一致）
2. **隐式**：模型根据 `description` 语义判断当前任务是否适用

写好 `description` 的要点：

- 写清「何时用」和「何时不用」
- 包含用户可能说的关键词（review、发版、changelog）
- 避免空泛的「帮助用户写代码」

## 推荐工作流

1. 发现某个流程已经重复做了几次
2. 起草 `SKILL.md`，先纯文字步骤
3. 在小任务上试用 `$name` 与隐式匹配
4. 需要确定性时再补 `scripts/`
5. 提交到 `.agents/skills/` 并 PR 给团队

动手练习：[创建第一个 Skill](/skills/create-your-first-skill/)

## 常见困惑

### 1. Skill 和提示词有什么区别？

- **提示词**：这次任务你临时说的话
- **Skill**：以后类似任务都能复用的一套流程

### 2. 我是不是一开始就要学会写 Skill？

不用。先把普通任务说清楚，等某个流程重复很多次，再考虑沉淀成 Skill。

### 3. 它和斜杠命令是不是一回事？

两者不完全一样。斜杠命令更像快捷入口；Skill 更像带完整说明和流程的工作包。

Skill 不是起步必需品，更适合拿来整理那些已经反复出现的流程。

## 安全边界

- Skill 内的脚本与 MCP 调用继承当前审批策略
- 不要在 Skill 中硬编码密钥；用环境变量或 MCP 鉴权
- 团队应审查第三方 Skill，同审查依赖包

## 常见错误

- `description` 过长或过泛，导致从不触发或误触发
- 一个 Skill 塞入十种不相关流程
- 用脚本替代本可清晰描述的步骤，难以维护

## 参考来源

- OpenAI Codex Skills 文档
- KimYx0207 CX-06；stormzhang `22-skills.md`

---

**状态：** verified  
**适用产品：** App / CLI / IDE  
**核验依据：** 当前 Codex 运行时对 Skill 的装载规则（`SKILL.md`、按需读取完整技能文件）与 OpenAI Help《Skills in ChatGPT》对 Skill 作为可复用 workflow 的定义一致；本页以概念与目录组织为主，不依赖易变 UI。  
**最近核验：** 2026-07-26
