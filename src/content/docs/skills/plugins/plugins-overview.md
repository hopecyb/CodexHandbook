---
title: Plugins 概述
description: 理解 Plugin 的组成、支持表面、安装验证和信任边界。
---

ChatGPT 与 Codex 使用同一公共 Plugin 目录。Plugin 把一组相关能力组合成可发现、可安装的工作流，而不是发明一种新的工具调用协议。

## Plugin 可以包含什么

| 部分 | 作用 | 安装者应检查 |
|---|---|---|
| Skills | 可复用步骤、参考资料和脚本 | 指令是否适合当前任务，脚本是否可信 |
| Connectors | 连接 GitHub、Slack、Google Drive 等工具 | OAuth scope、读写动作、外部数据范围 |
| MCP servers | 定义工具、鉴权并返回结构化数据 | 服务器来源、工具清单、日志与权限 |
| Browser extensions | 为特定工作流提供浏览器能力 | 浏览器访问范围与必要性 |
| Hooks | 在生命周期节点运行命令或 MCP 工具 | 在启用前审查并信任精确定义 |
| Scheduled task templates | 为支持定时任务的表面提供可复用起点 | 频率、权限、退出条件和人工复核 |

## 与 Skill、MCP 的区别

| 机制 | 主要问题 | 一个 PR 审查组合中的例子 |
|---|---|---|
| Skill | 应该按什么步骤工作 | 读取 diff、验证证据、按风险排序 |
| MCP / Connector | 能调用哪些外部工具 | 读取 GitHub PR 和评论 |
| Hook | 在哪个生命周期节点检查 | 写文件后运行密钥扫描 |
| Plugin | 怎样把这些能力一起安装和分发 | 团队的“PR 审查包” |

Plugin 是分发层，不是运行链路最后一步。关系图见[扩展能力地图](/skills/capability-map/)。

## 安装与首次验证

### ChatGPT Web / 桌面 App

1. 打开 Plugins 标签页。
2. 查看发布者、说明和所含能力。
3. 安装；若要求连接外部服务，单独审查授权范围。
4. 在新的 Chat、Work 或 Codex 任务里做低风险验证。

### Codex CLI

1. 输入 `/plugins` 打开 Plugin 浏览器。
2. 从已配置 marketplace 安装。
3. **开启新会话**，再验证随包安装的 Skill 或工具。

IDE 扩展当前不支持 Plugin。不要写“在 IDE 里找不到入口”的排障教程；正确做法是改用 ChatGPT 桌面 App 或 Codex CLI 管理 Plugin。

## 低风险验证提示词

```text
只检查刚安装的 <plugin-name>，不要执行写操作：
1. 列出本次任务中与它相关的 Skills 和工具；
2. 说明每个工具是只读还是可能产生外部副作用；
3. 用测试数据或只读查询完成一个最小调用；
4. 报告实际使用了哪个组件，并列出仍需人工确认的授权。
```

如果 Plugin 需要外部连接，首次验证不要发送消息、修改状态、删除数据或批量写文件。

## 团队采纳流程

1. **清点组件**：列出 Skills、连接器、MCP、浏览器扩展、Hooks 和模板。
2. **验证来源**：确认 marketplace、仓库、发布者和更新策略。
3. **最小授权**：用测试账号和只读 scope 试跑。
4. **隔离试点**：先在非生产项目或小团队使用。
5. **审查 Hook**：通过 `/hooks` 检查 Plugin-bundled Hook 的 hash 与行为。
6. **记录退出**：写清禁用、卸载、回滚和 OAuth 回收步骤。

## 不要忽略的边界

- 安装成功不代表组件安全或适合当前数据。
- Plugin 可提示你连接外部服务；授权是独立的高风险步骤。
- Plugin Hook 会与其他来源的匹配 Hook 一起运行，不会自动覆盖旧 Hook。
- Workspace 管理员可以控制哪些 Plugin 和工具可用；个人看到的目录不等于组织允许范围。
- Mobile 适合使用账号已有 Plugin，不应假设拥有完整管理界面。

## 什么时候不必做 Plugin

- 只有一个简单 `SKILL.md`，没有组合或分发问题
- 一次性个人脚本，仍在快速试验
- 权限与升级策略尚未稳定
- 目标用户只在 IDE 扩展工作

先把单个 Skill 或 MCP 流程验证稳定，再考虑组合分发，通常更容易审查。

## 验收清单

- [ ] 目标表面支持 Plugin
- [ ] 发布者与来源可追溯
- [ ] 外部连接和 OAuth scope 已审查
- [ ] Plugin Hook 已审查和信任
- [ ] 只读最小任务成功
- [ ] 新会话能发现预期 Skill 或工具
- [ ] 团队有禁用、回滚和授权回收说明

## 官方来源

- [OpenAI：Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI：Hooks](https://learn.chatgpt.com/docs/hooks)

---

**状态：** verified

**适用产品：** ChatGPT Web / 桌面 App / Mobile；Codex 桌面与 CLI；IDE 扩展不支持 Plugin

**最近核验：** 2026-08-26
