---
title: AI application roadmap
description: Understand Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills, and other applied AI engineering milestones.
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-08
reviewed_at: 2026-08-26
source_revision: 0333168
---

# AI application roadmap

This is a knowledge map for applied AI engineering. It does not track model parameter counts, benchmark scoreboards, or every product launch. Instead, it reads the key methods in reverse chronological order: from reusable, verifiable agent systems back to the practices that made them possible.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/en/ai-roadmap/timeline/2026-04-skills/">Skills (Reusable Workflows)</a></h3>
    <p>Skills package prompts, steps, examples, scripts, and resources into reusable workflow units. They help teams preserve "how we do this" instead of re-explaining it every time.</p>
    <p><strong>Focus:</strong> SKILL.md, progressive disclosure, dependency resources, reuse boundaries, and team conventions.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/en/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering (Execution Harness)</a></h3>
    <p>Harness Engineering designs the environment that lets models complete tasks reliably: tools, context, feedback, recovery, quality gates, and regression checks.</p>
    <p><strong>Focus:</strong> task harnesses, verification feedback, failure recovery, and quality gates.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/en/ai-roadmap/timeline/2026-01-openspec/">OpenSpec (Spec-Driven Development)</a> / <a href="/en/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw (Personal AI Assistant Gateway)</a></h3>
    <p>These two nodes point in different directions: OpenSpec turns requirements and design into trackable specification artifacts; OpenClaw unifies personal assistants, channels, and tool gateways.</p>
    <p><strong>Focus:</strong> spec-driven development, gateways, sessions, channels, and traceable work artifacts.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/en/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering (Context Design)</a></h3>
    <p>Context Engineering shifts attention from "how to write the prompt" to "what the model should see, in what order, and what should be compressed or excluded." In long tasks, it often sets the ceiling.</p>
    <p><strong>Focus:</strong> context priority, retrieval strategy, compression, memory, and file selection.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/en/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent (Agent Collaboration)</a></h3>
    <p>Multi-agent workflows split complex work across roles such as research, implementation, review, verification, and summary. The point is structure, parallelism, and mutual checking.</p>
    <p><strong>Focus:</strong> role boundaries, handoff formats, conflict resolution, review, and verification.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/en/ai-roadmap/timeline/2025-03-tool-use/">Tool Use (Tool Orchestration)</a></h3>
    <p>Tool Use asks how a model chooses tools, calls them, reads results, and continues the task. It is the bridge from one-shot answers to multi-step execution.</p>
    <p><strong>Focus:</strong> tool selection, call chains, state, and recovery after tool failure.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/en/ai-roadmap/timeline/2024-11-mcp/">MCP (Model Context Protocol)</a></h3>
    <p>MCP turns tools, resources, and prompts into protocol-level surfaces. Its value is not only more integrations; it is making integrations reusable, discoverable, and governable.</p>
    <p><strong>Focus:</strong> servers, clients, tools, resources, prompts, permissions, and debugging.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/en/ai-roadmap/timeline/2023-11-rag/">RAG (Retrieval-Augmented Generation)</a></h3>
    <p>RAG grounds answers in retrieved material. It is the step from "the model can talk" to "the system can answer with traceable evidence," especially for knowledge bases and internal documents.</p>
    <p><strong>Focus:</strong> chunking, retrieval, reranking, citations, and context compression.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/en/ai-roadmap/timeline/2023-06-function-calling/">Function Calling (Structured Tool Calls)</a></h3>
    <p>Function Calling moved models from answering in text to calling external capabilities with structured parameters. That is what lets AI enter real systems instead of staying inside a chat box.</p>
    <p><strong>Focus:</strong> schemas, validation, tool boundaries, and error feedback.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/en/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering (Prompt Design)</a></h3>
    <p>The applied AI story starts with input control: making task goals, constraints, examples, context, and output formats explicit enough for the model to behave consistently.</p>
    <p><strong>Focus:</strong> task framing, role setting, few-shot examples, output formats, and retry patterns.</p>
  </article>
</div>
