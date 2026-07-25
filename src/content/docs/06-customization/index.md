---
title: 个性化与项目配置
description: 个人偏好、AGENTS.md、配置与规则优先级——让 Codex 长期按你的方式工作。
---


Codex 不只靠「这一次怎么问」，还靠**持久化配置**记住你和团队的约定。本章讲如何把重复说明沉到项目里，而不是每次任务重敲一遍。

## 这篇解决什么问题

- 个人偏好、项目说明、团队规则、临时提示词**谁覆盖谁**
- `AGENTS.md` 该写什么、不该写什么
- 配置文件与审批/沙盒策略放在哪一层管

## 适合谁

| 读者 | 建议先读 |
|---|---|
| 刚跑通第一个任务 | [项目说明](/06-customization/project-instructions/) |
| 要在仓库里固化协作规范 | [什么是 AGENTS.md](/06-customization/agents-md/what-is-agents-md/) |
| 要统一 CLI/App 行为 | [配置基础](/06-customization/configuration/config-basics/) |

## 配置优先级（从高到低）

理解优先级，能避免「写了规则却不生效」的困惑：

```text
1. 组织/团队托管策略（Managed configuration，若已下发）
2. 项目级 AGENTS.md / 项目指令（仓库内）
3. 用户级配置与偏好（本机 ~/.codex 等）
4. 当前会话中的临时提示词与 @ 引用
```

**原则：** 越靠近「组织强制」越不可被单次任务覆盖；越靠近「当前对话」越灵活、也越易丢失。

## 本章导航

| 主题 | 页面 |
|---|---|
| AGENTS.md | [概述](/06-customization/agents-md/what-is-agents-md/) · [作用域与优先级](/06-customization/agents-md/scope-and-precedence/) · [写好项目指令](/06-customization/agents-md/writing-effective-instructions/) |
| 项目指令 | [项目说明](/06-customization/project-instructions/) |
| 记忆 | [记忆与持久上下文](/06-customization/memories-and-persistent-context/) |
| 配置文件 | [配置基础](/06-customization/configuration/config-basics/) · [Profile](/06-customization/configuration/profiles/) |
| 个人偏好 | [个人偏好](/06-customization/personal-preferences/) |
| 规则 | [允许与拒绝](/06-customization/rules/allow-and-deny-patterns/) · [命令规则](/06-customization/rules/command-rules/) · [团队策略](/06-customization/rules/team-rules/) |
| 示例 | [Monorepo 中的 AGENTS.md](/06-customization/examples/monorepo-agents-md/) |

Rules 细目已起步；更多配置细页见 [路线图](/ROADMAP/) M3 后续。

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

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
