# Codex 指南手册

面向 AI 初学者、创作者、开发者与团队的 Codex 开源指南，帮助读者从第一次使用逐步走向专业工作流、能力扩展与团队落地。

## 项目定位

- 以 AI 初学者作为主叙事视角，不预设终端、Git 或 Agent 知识。
- 完整覆盖 Codex 的桌面 App、CLI、IDE、Web/Cloud、移动与远程协作、集成和开发者平台。
- 系统讲解提示词、上下文、Skills、Plugins、MCP、Hooks、自动化、多 Agent 与安全治理。
- 提供可复用的提示词、Skill、配置、工作流和完整案例。
- 采用简体中文作为源语言；繁体中文、英语、法语、日语、韩语等为规划中的译文目标。

## 内容组织

手册采用“学习路径为主线，产品、能力、场景为专题”的分层结构：

1. **学习路径**：告诉读者按什么顺序学习。
2. **产品手册**：说明每种 Codex 使用形态如何操作。
3. **能力专题**：解释提示词、上下文、工具和扩展能力。
4. **案例实践**：展示真实目标如何从头做到尾。
5. **参考资料**：提供命令、配置、术语和故障排查入口。

## 规划文档

- [总体内容架构](docs/planning/content-architecture.md)
- [完整章节大纲](docs/planning/chapter-outline.md)
- [MVP 范围](docs/planning/mvp-scope.md)
- [提示词、Skill 与案例体系](docs/planning/examples-system.md)
- [多语言与内容维护规范](docs/planning/i18n-and-maintenance.md)
- [内容设计总规格](docs/superpowers/specs/2026-07-25-codex-handbook-content-design.md)
- [路线图](ROADMAP.md)

## 文档站点

手册正文采用 [Starlight](https://starlight.astro.build/) 构建，内容源路径为 `src/content/docs/`（简体中文为 root 语言，URL 无前缀）。

本地开发：

```bash
npm install
npm run dev
```

构建静态站点：

```bash
npm run build
```

## 当前阶段

项目已完成 **简体中文 MVP 正文**：`00`–`05` 黄金路径与精简 `12` 参考页位于 `src/content/docs/`。后续里程碑（产品余页、个性化、扩展、案例、团队与翻译）见 [ROADMAP.md](ROADMAP.md)。
