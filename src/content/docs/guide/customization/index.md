---
title: 个性化与项目配置
description: 个人偏好、AGENTS.md、配置与规则优先级——让 Codex 长期按你的方式工作。
sidebar:
  order: 40
---


Codex 不只靠“这一次怎么问”，还靠**持久化配置**记住你和团队的约定。本章主要区分哪些要求该留在对话里，哪些该沉到项目里。

如果你已经开始反复说同样的话，比如“别改这个目录”“先跑测试”“默认用这个模型”，这一章就在处理这类问题。

## 内容

- 个人偏好、项目说明、团队规则、临时提示词**谁覆盖谁**
- `AGENTS.md` 该写什么、不该写什么
- 配置文件与审批/沙盒策略放在哪一层管

## 适合谁

| 读者 | 建议先读 |
|---|---|
| 刚跑通第一个任务 | [项目说明](/guide/customization/project-instructions/) |
| 要在仓库里固化协作规范 | [什么是 AGENTS.md](/guide/customization/agents-md/what-is-agents-md/) |
| 要统一 CLI/App 行为 | [配置基础](/guide/customization/configuration/config-basics/) |

## 这一章在处理什么

很多人在用 Codex 一段时间后，会碰到同一类问题：规则写了不少，但总感觉没完全生效，或者不同地方互相打架。

这一章主要讨论怎么把协作规则分层放好：

- 哪些是我个人习惯
- 哪些是仓库共享规则
- 哪些是组织级硬边界
- 哪些只是这次任务的临时要求

分层不清时，很容易出现“写了很多，但该生效的时候没生效”。

## 常见分层（概念）

理解分层，能避免「写了规则却不生效」的困惑。不同客户端、组织托管能力与版本实现可能不同，但通常可以先按下面几层理解：

```text
1. 组织/团队托管策略（若已下发）
2. 项目级 AGENTS.md / 项目指令（仓库内）
3. 用户级配置与偏好（本机 ~/.codex 等）
4. 当前任务中的临时要求与 @ 引用
```

**原则：** 越靠近「组织强制」越不应被单次任务随意放宽；越靠近「当前任务」越灵活、也越容易随会话结束而丢失。具体 precedence 以当前客户端和官方文档为准。

## 常见误会

### 1. 只要我会写 prompt，就不需要做长期配置？

短任务也许勉强够，但只要开始持续协作，你就会越来越想把重复要求沉下去。

### 2. 什么规则都塞进 `AGENTS.md` 就行？

也不对。  
有些东西更适合放在：

- 个人偏好
- 配置文件
- 组织托管策略
- 当前任务 prompt

### 3. 配置不是越多越好

配置太散、规则太长、层级太乱，反而更容易让人和工具都搞不清楚该听谁的。

## 本章导航

| 主题 | 页面 |
|---|---|
| AGENTS.md | [概述](/guide/customization/agents-md/what-is-agents-md/) · [作用域与优先级](/guide/customization/agents-md/scope-and-precedence/) · [写好项目指令](/guide/customization/agents-md/writing-effective-instructions/) |
| 项目指令 | [项目说明](/guide/customization/project-instructions/) |
| 记忆 | [记忆与持久上下文](/guide/customization/memories-and-persistent-context/) |
| 机制选型 | [选择合适的机制](/guide/customization/choosing-the-right-mechanism/) |
| 配置文件 | [配置基础](/guide/customization/configuration/config-basics/) · [Profile](/guide/customization/configuration/profiles/) |
| 个人偏好 | [个人偏好](/guide/customization/personal-preferences/) |
| 规则 | [允许与拒绝](/guide/customization/rules/allow-and-deny-patterns/) · [命令规则](/guide/customization/rules/command-rules/) · [团队策略](/guide/customization/rules/team-rules/) |
| 示例 | [Monorepo 中的 AGENTS.md](/guide/customization/examples/monorepo-agents-md/) |

Rules 细目已起步；更多配置细页会随自定义模块持续补充。

## 建议顺序

第一次系统整理 Codex 的协作规则时，可以按这个顺序：

1. 先整理项目规则
2. 再补 `AGENTS.md`
3. 再分离个人偏好
4. 最后再处理配置文件和更细的规则控制

这样比一上来就改一堆配置键更不容易乱。

规则不必追求多，放对位置更重要。

## 常见错误

- 把长篇架构文档塞进 `AGENTS.md`，关键约束反而被淹没
- 在对话里重复写团队规范，却不提交到仓库，导致协作者体验不一致
- 个人本机放宽沙盒，却在共享仓库里假设队友也有同样权限

## 验收清单

- [ ] 能说出四层配置的优先级
- [ ] 仓库里有一份简短的 `AGENTS.md`（或等价项目指令）
- [ ] 敏感操作仍走审批，而不是指望文字规则「吓住」模型

## 参考来源

- OpenAI Codex 文档：[https://developers.openai.com/codex](https://developers.openai.com/codex)
- 社区实践结构参考：freestylefly/CodexGuide AGENTS.md 专题、stormzhang/ai-coding-guide `11-agents-md.md`

---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** OpenAI 当前帮助中心与 Codex 相关配置材料仍明确存在用户级 `~/.codex` 配置、组织级托管能力与项目级协作说明的分层；本页已将“优先级”改写为更保守的常见分层说明，避免把特定实现细节写成绝对规则。  
**最近核验：** 2026-07-26
