---
title: 安全
description: 团队级风险、攻击面与防护思路的说明页，先理解风险在哪里，再谈管控措施。
---

安全这一组如果直接从细节页切进去，很容易只记住一些零散名词，却不知道它们在防什么。

这一组按“风险从哪里来，再决定该拦哪一层、审哪一层”的顺序来看会更清楚。

## 推荐顺序

1. [威胁模型](/guide/team-enterprise/security/threat-model/)
2. [Plugin 与 MCP 风险](/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [Prompt 注入](/guide/team-enterprise/security/prompt-injection/)

## 适合先看的人

- 团队准备扩大使用范围
- 你开始接第三方扩展、外部工具或共享规则
- 你想知道哪些风险不能只靠“提醒大家小心”解决

安全页的重点，是帮你找出哪些风险必须靠系统边界来控制。

---

**状态：** verified  
**适用产品：** 团队 / 企业场景  
**核验依据：** OpenAI 当前插件、应用与集成文档持续强调外部连接、动作权限、源系统访问与审批边界带来的安全风险；本页仅作为安全小节导航，按威胁模型、Plugin/MCP 风险、Prompt 注入的顺序组织阅读。  
**最近核验：** 2026-07-26
