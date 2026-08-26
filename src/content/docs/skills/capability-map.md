---
title: 扩展能力地图
description: 从任务、规则、流程、工具、守护、分发、触发和并行八个职责理解 Codex 扩展系统。
---

扩展机制容易混淆，是因为它们经常出现在同一个工作流里，但解决的不是同一类问题。

这页先建立一张系统图：提示词和 `AGENTS.md` 提供任务与规则，Skill 提供可复用流程，MCP 提供外部工具，Hook 在生命周期节点守护，Plugin 负责组合分发，Scheduled task 负责按时间触发。它们可以组合，并不存在固定的“升级顺序”。

## 系统架构

![Codex 可复用工作系统架构](/diagrams/codex-work-system-architecture-zh-cn.svg)

读图时抓住三点：

- **任务输入**决定这一次要做什么，项目规则决定每次都必须遵守什么。
- **执行能力**可以扩大范围，但不会自动证明结果正确；MCP、子 Agent 和脚本都要受权限与验收约束。
- **分发和触发**不等于工作流本身。Plugin 把能力组合起来，Scheduled task 在指定时间启动一次运行。

## 八类职责

| 职责 | 机制 | 最适合解决 | 不负责 |
|---|---|---|---|
| 当前任务 | 提示词 | 这次要做什么、范围和验收 | 长期项目规则 |
| 持久规则 | `AGENTS.md` | 仓库命令、约定、目录边界 | 某类任务的完整步骤 |
| 可复用流程 | Skill | 稳定步骤、参考资料、模板和辅助脚本 | 凭空获得外部系统权限 |
| 外部工具 | MCP / Connector | 让 Codex 调用仓库外的数据和操作 | 决定业务目标是否正确 |
| 生命周期守护 | Hook | 在会话或工具调用前后记录、检查、补上下文或阻断 | 取代测试和人工审查 |
| 组合分发 | Plugin | 打包 Skills、连接器、MCP、Hooks 和任务模板 | 自动让所有能力可信 |
| 时间触发 | Scheduled task | 定时或周期性运行已验证任务 | 替代清晰提示和退出条件 |
| 并行分工 | 子 Agent | 把互相独立的探索、测试或审查分出去 | 自动消除写冲突和协调成本 |

## 一次任务怎样组合这些能力

假设团队每周检查依赖风险：

1. `AGENTS.md` 规定允许的包管理器、测试命令和禁止修改的目录。
2. `dependency-audit` Skill 固定收集依赖、核对公告、分级和验证的步骤。
3. GitHub 或包源 MCP 提供外部信息；只读权限优先。
4. Hook 可以阻止包含真实密钥的输出，或记录外部工具调用。
5. Plugin 把 Skill、MCP 配置和 Hook 一起分发给团队。
6. Scheduled task 每周触发一次，只创建报告或草稿 issue，发布前由人审查。

少一层并不代表方案“不高级”。如果只做一次本地依赖检查，一段清楚的提示词和现有终端命令可能已经够用。

## 常见对应关系

| 需求 | 建议选择 |
|---|---|
| 统一代码风格和测试命令 | AGENTS.md |
| 把「审查 PR」流程标准化 | Skill |
| 读 Jira/Linear 工单 | MCP |
| 给全团队装一套集成 | Plugin |
| 每次提交前扫描密钥 | Hooks |
| 每周一自动生成周报草稿 | Automations（+ 人工发布） |

## 从一次成功到团队资产

可以按下面这条线判断要不要继续沉淀：

| 阶段 | 形态 | 适合什么情况 |
|---|---|---|
| 一次性提示词 | 当前对话里的任务说明 | 只做一次，或者还在摸索问题 |
| 模板 | 固定“目标、上下文、约束、验收”骨架 | 同类任务会重复，但步骤还在调整 |
| Skill | `SKILL.md` 加模板、参考资料或脚本 | 流程稳定，成功标准清楚 |
| Plugin | Skills、连接器、MCP、Hooks 与模板的组合包 | 需要统一安装、更新和治理 |
| Scheduled task | 保存的任务、时间规则和运行记录 | 已经手动验证，且值得周期运行 |

MCP、Hook 和子 Agent 不是这条沉淀阶梯上的必经阶段。只有任务确实需要外部工具、生命周期守护或并行分工时才加入。

详细分支逻辑见 [如何选择扩展方式](/skills/choosing-an-extension-method/)。

## 当前产品边界

- Codex Skills 由包含 `SKILL.md` 的目录定义，可附带脚本、参考资料和资产；Codex 按需加载完整说明。
- 桌面 App、Codex CLI 与 IDE 扩展在同一 Codex host 上共享 MCP 配置。
- Plugins 当前可在 ChatGPT 的支持入口、Codex 桌面体验和 Codex CLI 中使用；IDE 扩展不支持 Plugin 浏览和使用。
- Scheduled task 从 ChatGPT Web 或桌面 App 创建和管理；CLI 与 IDE 可以先帮助测试提示词、Skill 或脚本，但不提供 Scheduled 管理界面。
- 子 Agent 适合独立的只读探索、测试和审查；并行写同一批文件会增加冲突成本。

产品入口仍会变化。做具体配置前，继续查看[功能对照](/guide/reference/feature-comparison/)和下方官方依据。

## 官方依据

- [Skills 与 Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [构建 Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Codex 子 Agent](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**状态：** verified
**适用产品：** ChatGPT Web / 桌面 App / Codex CLI / IDE（具体机制支持面见正文）
**核验依据：** 已按 2026-08-25 可访问的 OpenAI 官方 Skills、Plugins、MCP、Hooks、Scheduled tasks 与 Subagents 文档重构职责模型和入口边界。
**最近核验：** 2026-08-25
