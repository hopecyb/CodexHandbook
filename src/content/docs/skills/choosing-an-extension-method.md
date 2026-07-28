---
title: 如何选择扩展方式
description: 从提示词到 Automations 的决策树，避免「为用而用」。
---

扩展机制一多，选错方法的成本也会上来。这页用来帮你在装 Plugin 或写 MCP 之前，先判断有没有这个必要。

最容易混在一起的是这些名字：

- 提示词
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

同样是“扩展 Codex”，有时一句提示词就够，有时才需要上更重的机制。

## 决策树

```text
任务会重复 ≥3 次？
├─ 否 → 用好提示词 + @ 引用即可
└─ 是 → 需要持久规则吗？
    ├─ 是 → 写进 AGENTS.md
    └─ 否 → 流程固定且可描述？
        ├─ 是 → 做 Skill
        └─ 否 → 需要读外部系统？
            ├─ 是 → 评估 MCP（只读优先）
            └─ 否 → 需要无人值守？
                ├─ 是 → Automations + 人工闸门
                └─ 否 → 保持 Skill + 手动触发
```

团队要统一分发多个 Skill + MCP？在以上路径末端考虑 **Plugin**。

## 场景对照

| 场景 | 推荐组合 |
|---|---|
| 统一测试与提交规范 | AGENTS.md |
| 每次合并前审查清单 | Skill `pr-review` |
| 从 Linear 拉 ticket 上下文 | MCP + 任务提示 |
| 每周依赖报告 | Automation → 开 issue |
| 提交前密钥扫描 | Hooks（企业）或 CI |
| 新人一键装全套工具 | Plugin（经安全审查） |

## 成本维度

| 机制 | 编写成本 | 维护成本 | 安全风险 |
|---|---|---|---|
| 提示词 | 低 | 低 | 低 |
| AGENTS.md | 中 | 中 | 低 |
| Skill | 中 | 中 | 低–中 |
| MCP | 高 | 高 | 中–高 |
| Plugin | 低（用现成的）/高（自建） | 中 | 中–高 |
| Automations | 高 | 高 | 高 |

## 反模式

- **技能膨胀**：安装几十个 Skill，description 互相抢匹配
- **MCP 万能锤**：本可用 `git` 的事硬接 API
- **无验收自动化**：定时改代码但无人看 diff
- **重复造轮子**：官方已有 Connector 仍自建 MCP

## 常见问题

### 1. 我是不是一开始就应该装 Plugin、接 MCP？

很多问题先把提示词、范围控制和 `AGENTS.md` 用好就能解决。

### 2. 这棵决策树怎么看？

按一个原则看就够了：先用轻的，不够再加重。

### 3. 第一次用时，通常从哪类方式起步？

多数情况会先落在这三类里：

- 提示词
- `AGENTS.md`
- Skill

通常还用不着一开始就上 MCP 或无人值守自动化。

关键不是机制多高级，而是它跟当前问题合不合。

## 延伸阅读

- [扩展能力地图](/skills/capability-map/)
- [人工审批模式](/cases/workflows/human-approval-patterns/)
- [把流程沉淀为 Skill](/cases/workflows/turn-a-workflow-into-a-skill/)（路线图页）

---

**状态：** outdated  
**适用产品：** App / CLI / IDE / Cloud  
**复核说明：** 本页决策树涉及当前 Automations、Plugins、MCP 与官方 Connector 的边界和适用面；这些产品形态仍在快速变化，现有公开资料不足以稳定支撑整页判断。  
**最近核验：** 2026-07-26
