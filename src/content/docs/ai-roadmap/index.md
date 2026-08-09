---
title: AI 应用路线图
description: 用时间线理解 Prompt Engineering、RAG、MCP、Multi-agent、Context Engineering、Skills 等 AI 应用工程节点。
---

# AI 应用路线图

这是一张面向 AI 应用工程的知识地图。它不追模型参数、榜单或单次产品发布，而是把关键方法按时间倒序串起来：从可复用、可验证的 Agent 工程系统，回看这些能力怎样一步步长出来。

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/ai-roadmap/timeline/2026-04-skills/">Skills（技能）</a></h3>
    <p>Skills 把提示词、步骤、示例、脚本和资源打包成可复用工作流单元。它解决的是组织经验如何沉淀的问题：不再每次重新解释“怎么做”，而是让 AI 遇到熟悉任务时直接调用成熟方法。</p>
    <p><strong>学习重点：</strong>SKILL.md、渐进披露、依赖资源、复用边界、团队规范。</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering（驾驭工程）</a></h3>
    <p>Harness Engineering 关注如何构建一套能稳定驱动模型完成任务的环境：工具、上下文、反馈、错误恢复、质量门槛和回归检查。它把 AI 应用从“偶尔跑出好结果”推向“可重复交付结果”。</p>
    <p><strong>学习重点：</strong>任务脚手架、验证反馈、失败恢复、质量门槛。</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/ai-roadmap/timeline/2026-01-openspec/">OpenSpec（规范驱动开发）</a> / <a href="/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw（个人 AI 助手网关）</a></h3>
    <p>2026 年初的两个节点代表两条方向：OpenSpec 把需求和设计固化成规格工件，OpenClaw 把个人助手、多渠道入口和工具网关串起来。一个强调“先对齐再实现”，一个强调“统一入口与运行环境”。</p>
    <p><strong>学习重点：</strong>spec-driven development、网关、会话、渠道、可追踪工件。</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering（上下文工程）</a></h3>
    <p>Context Engineering 把注意力从“怎么写提示词”转向“模型应该看到什么、按什么顺序看到、哪些内容应该被压缩或排除”。在长任务和代码库协作里，它往往决定上限。</p>
    <p><strong>学习重点：</strong>上下文优先级、检索策略、压缩、记忆、文件选择。</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent（多智能体协作）</a></h3>
    <p>Multi-agent 把复杂任务拆给多个角色：研究、实现、审查、验证、总结。它不是为了“看起来更智能”，而是为了让复杂工作具备分工、并行和互相检查的结构。</p>
    <p><strong>学习重点：</strong>角色边界、交接格式、冲突解决、审查与验证。</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/ai-roadmap/timeline/2025-03-tool-use/">Tool Use（工具使用）</a></h3>
    <p>Tool Use 关注模型如何在任务过程中选择工具、调用工具、读取返回结果，并继续下一步推理。它是从“单次响应”走向“多步骤执行”的关键节点。</p>
    <p><strong>学习重点：</strong>工具选择、调用链、状态管理、工具失败后的恢复。</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/ai-roadmap/timeline/2024-11-mcp/">MCP（模型上下文协议）</a></h3>
    <p>MCP 把工具、资源和提示词的接入方式协议化。它的价值不只在“多接几个工具”，而在于让工具接入从一次性胶水代码，变成可复用、可发现、可治理的接口层。</p>
    <p><strong>学习重点：</strong>server/client、tools、resources、prompts、权限与调试。</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/ai-roadmap/timeline/2023-11-rag/">RAG（检索增强生成）</a></h3>
    <p>RAG 让模型回答不再只依赖训练记忆，而是把检索到的资料放进上下文。它把 AI 应用从“会说”推向“有依据地说”，尤其适合知识库、客服、研究和企业内部文档场景。</p>
    <p><strong>学习重点：</strong>切片、向量检索、重排、引用、上下文压缩。</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/ai-roadmap/timeline/2023-06-function-calling/">Function Calling（函数调用）</a></h3>
    <p>Function Calling 把“让模型回答”推进到“让模型按结构化参数调用外部能力”。这一步让 AI 可以进入真实系统：查订单、建任务、发请求、更新记录，而不是停留在聊天窗口里。</p>
    <p><strong>学习重点：</strong>schema 设计、参数校验、工具边界、错误回传。</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering（提示词工程）</a></h3>
    <p>AI 应用工程的起点不是“模型变聪明”，而是人开始学会把任务目标、上下文、约束、示例和输出格式写进提示词里。它解决的是输入控制问题：如何让同一个模型在不同任务里更稳定地听懂意图。</p>
    <p><strong>学习重点：</strong>任务拆解、角色设定、few-shot 示例、输出格式、失败重试。</p>
  </article>
</div>
