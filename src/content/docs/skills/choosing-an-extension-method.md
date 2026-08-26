---
title: 如何选择扩展方式
description: 根据要持久化的对象选择提示词、AGENTS.md、Skill、MCP、Hook、Plugin 或 Scheduled task。
---

扩展机制一多，最常见的错误就是先选技术名词，再找问题来套。更稳妥的顺序是先问：**我究竟想把什么留下来，或者让什么自动发生？**

最容易混在一起的是这些名字：

- 提示词
- AGENTS.md
- Skill
- MCP
- Plugin
- Scheduled task

同样是“扩展 Codex”，有时一句提示词就够，有时才需要上更重的机制。

## 选择图

![Codex 扩展方式选择图](/diagrams/extension-selection-map-zh-cn.svg)

这不是互斥决策树。一个成熟工作流可能同时使用 `AGENTS.md`、Skill 和 MCP；图的作用是避免让某个机制承担它不擅长的职责。

## 七个判断问题

### 1. 只影响当前任务吗？

先用提示词。把目标、输入、范围、验收和权限说清楚，成本最低，也最容易观察实际问题。

### 2. 每次进入这个仓库都必须遵守吗？

写进 `AGENTS.md`。例如测试命令、代码风格、不可修改目录和依赖安装规则。不要把一次性需求长期塞进项目规则。

### 3. 同类任务有稳定步骤和输出吗？

做成 Skill。Skill 适合保存可复用说明，并按需要带上模板、参考资料、资产或辅助脚本。没有固定成功标准的流程，先继续用提示词试验。

### 4. 需要仓库外的数据或操作吗？

评估 MCP 或 Connector。先列出真正需要的工具与数据，优先只读、最小范围和可审计配置。能用本地文件或现有命令解决时，不必额外引入外部连接。

### 5. 需要在固定生命周期节点检查吗？

使用 Hook。例如工具调用前检查危险命令、写入后扫描补丁、会话结束时记录摘要。Hook 会自动运行，因此必须测试超时、失败和误报行为。

### 6. 需要把一组能力统一发给别人吗？

考虑 Plugin。Plugin 是组合和分发层，可以包含 Skills、连接器、MCP、Hooks 和 Scheduled task 模板。安装 Plugin 不等于自动信任其中的连接、脚本或 Hook。

### 7. 任务已经手动跑稳，而且需要按时间重复吗？

再创建 Scheduled task。先在普通任务中验证提示词、Skill、权限和结果格式；开始调度后检查前几次运行，并保留人工发布或合并闸门。

## 场景对照

| 场景 | 推荐组合 |
|---|---|
| 统一测试与提交规范 | AGENTS.md |
| 每次合并前审查清单 | Skill `pr-review` |
| 从 Linear 拉 ticket 上下文 | MCP + 任务提示 |
| 每周依赖报告 | Scheduled task → 开草稿 issue |
| 写文件后扫描补丁中的密钥 | Hook 或 CI；高风险场景两者并用 |
| 团队统一安装评审流程和 GitHub 工具 | Plugin（安装前审查权限与 Hooks） |
| 每周生成依赖风险报告 | 已验证的 Skill + Scheduled task + 人工审查 |
| 并行审查安全、测试和可维护性 | 多个只读子 Agent，主 Agent 汇总 |

## 成本维度

| 机制 | 编写成本 | 维护成本 | 安全风险 |
|---|---|---|---|
| 提示词 | 低 | 低 | 低 |
| AGENTS.md | 中 | 中 | 低 |
| Skill | 中 | 中 | 低–中 |
| MCP | 高 | 高 | 中–高 |
| Hook | 中 | 中–高 | 中–高 |
| Plugin | 低（安装）/高（自建） | 中–高 | 中–高 |
| Scheduled task | 中 | 高 | 高 |

## 反模式

- **技能膨胀**：安装几十个 Skill，description 互相抢匹配
- **MCP 万能锤**：本可用 `git` 的事硬接 API
- **无验收调度**：定时改代码但没有退出条件、运行证据和人工审查
- **重复造轮子**：官方已有 Connector 仍自建 MCP
- **规则错位**：把一次性需求写进 `AGENTS.md`，导致之后每个任务都带着旧约束
- **Hook 过载**：把耗时业务流程塞进每次工具调用，导致日常任务变慢或被误阻断

## 常见问题

### 1. 我是不是一开始就应该装 Plugin、接 MCP？

很多问题先把提示词、范围控制和 `AGENTS.md` 用好就能解决。

### 2. 任务重复几次才值得做 Skill？

没有固定数字。重复次数只是信号，更重要的是步骤是否稳定、成功标准是否清楚，以及失败成本是否值得自动检查。

### 3. 第一次用时，通常从哪类方式起步？

多数情况会先落在这三类里：

- 提示词
- `AGENTS.md`
- Skill

通常还用不着一开始就上 MCP 或无人值守自动化。

关键不是机制多高级，而是职责是否匹配、权限是否最小、结果是否可验证。

## 最小落地练习

以“合并前审查当前 diff”为例：

1. 先用一段提示词跑两次，记录每次都需要重复说明的检查项。
2. 把仓库固定命令写进 `AGENTS.md`，例如 `pnpm test` 和禁止修改生成目录。
3. 把审查步骤、严重级别和输出格式写成 `pr-review` Skill。
4. 只有需要 GitHub PR 评论或 CI 状态时才增加 MCP/Connector。
5. 只有需要在固定事件自动检查时才增加 Hook 或 Scheduled task。
6. 多个团队都要安装时，再把这些能力打成 Plugin。

每加一层，都重新回答三件事：新增了什么权限、怎样验证、怎样关闭或回滚。

## 延伸阅读

- [扩展能力地图](/skills/capability-map/)
- [人工审批模式](/cases/workflows/human-approval-patterns/)
- [把流程沉淀为 Skill](/cases/workflows/turn-a-workflow-into-a-skill/)（路线图页）

## 官方依据

- [Skills 与 Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [构建 Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**状态：** verified
**适用产品：** ChatGPT Web / 桌面 App / Codex CLI / IDE（支持面因机制不同）
**核验依据：** 已按 2026-08-25 OpenAI 官方 Skills、Plugins、MCP、Hooks 与 Scheduled tasks 文档核对职责、产品入口和安全边界。
**最近核验：** 2026-08-25
