# Codex Handbook

<p align="center">
  <img src="./public/icon-512.png" alt="Codex Handbook Logo" width="180" />
</p>

<p align="center">
  <img src="./public/cover.png" alt="Codex Handbook Cover" width="100%" />
</p>

<p align="center"><strong>Codex 系统化手册与实践知识库</strong></p>

<p align="center">
  <a href="./README.md">简体中文</a>
  ·
  <a href="./README.en.md">English</a>
  ·
  <a href="./README.zh-TW.md">繁體中文</a>
  ·
  <a href="./README.fr.md">Français</a>
  ·
  <a href="./README.ja.md">日本語</a>
  ·
  <a href="./README.ko.md">한국어</a>
  ·
  <a href="./README.es.md">Español</a>
  ·
  <a href="./README.de.md">Deutsch</a>
  ·
  <a href="./README.pt.md">Português</a>
  ·
  <a href="./README.vi.md">Tiếng Việt</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/">在线阅读</a>
  ·
  <a href="./src/content/docs/guide/index.md">新手指南</a>
  ·
  <a href="./docs/planning/content-architecture.md">内容架构</a>
  ·
  <a href="./ROADMAP.md">路线图</a>
  ·
  <a href="./examples/README.md">示例库</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/"><img src="https://img.shields.io/badge/website-codexhandbook.com-1d4ed8" alt="Website" /></a>
  <a href="https://codexhandbook.com/"><img src="https://img.shields.io/badge/docs-handbook-2563eb" alt="Docs" /></a>
  <a href="https://starlight.astro.build/"><img src="https://img.shields.io/badge/built%20with-Starlight-f97316" alt="Built with Starlight" /></a>
</p>

> 从第一次打开 Codex，到把它真正用进项目、工作流与长期知识沉淀。  
> 这不是一份零散技巧合集，而是一套围绕 `指南 / 提示词 / Skills / 实战案例` 组织起来的系统化实践手册。

## 这是什么

**Codex Handbook** 是一个围绕 Codex 学习与实践的系统化知识库。它想解决的不是“Codex 能做什么”这么宽泛的问题，而是三个更实际的问题：

- 第一次接触 Codex，应该从哪里开始。
- 想把 Codex 用进真实项目，应该如何描述任务、组织上下文、验证结果。
- 做过一次成功协作之后，怎样把经验沉淀成提示词、Skills、规则、案例和团队资产。

如果你刚开始了解 Codex，这个仓库和网站就是你的第一站。

## 先从这里开始

### 1. 在线阅读

正式阅读入口是 [codexhandbook.com](https://codexhandbook.com/)。  
如果你想获得完整的导航、搜索、章节组织和长期更新内容，优先直接看网站。

### 2. 新手第一条阅读路径

推荐按这个顺序开始：

1. [Guide 首页](./src/content/docs/guide/index.md)
2. [上下文与文件](./src/content/docs/guide/context-and-files.md)
3. [Prompts](./src/content/docs/prompts/index.md)
4. [Skills](./src/content/docs/skills/index.md)
5. [Cases](./src/content/docs/cases/index.md)

这条路径适合第一次接触 Codex 的人，能帮你先建立稳定的基础认知，再进入实战部分。

## 你会在这里学到什么

### 指南

理解 Codex 的入口选择、基础使用路径、上下文组织、权限边界和结果验证方法。

### 提示词

学习如何把任务讲清楚，如何定义约束、目标、输入材料和验收标准，让 Codex 更稳定地产出可检查结果。

### Skills

学习如何设计、使用、维护和治理 Skills，把一次成功协作变成长期可复用的能力。

### 实战案例

通过真实任务理解完整工作流，比如读代码、修 Bug、写文档、做调研、自动化处理和交付协作。

## 适合谁

- 第一次了解 Codex 的新手
- 想把 Codex 用进真实项目的开发者
- 需要沉淀提示词、规则、模板和案例的团队
- 想把 Codex 用在写作、调研、文档和演示中的知识工作者

## 快速入口

| 入口 | 用途 |
| --- | --- |
| [在线阅读](https://codexhandbook.com/) | 从网站完整浏览整套手册 |
| [Guide](./src/content/docs/guide/index.md) | 从零开始理解 Codex 的使用路径 |
| [Prompts](./src/content/docs/prompts/index.md) | 学习如何清晰描述任务与边界 |
| [Skills](./src/content/docs/skills/index.md) | 学习如何把经验沉淀成可复用能力 |
| [Cases](./src/content/docs/cases/index.md) | 通过真实任务理解端到端工作流 |
| [Examples](./examples/README.md) | 直接复用提示词与示例资产 |
| [内容架构](./docs/planning/content-architecture.md) | 快速理解整站信息设计 |
| [章节大纲](./docs/planning/chapter-outline.md) | 查看主题覆盖范围 |
| [路线图](./ROADMAP.md) | 了解项目规划与后续方向 |

## 内容结构

```text
Codex Handbook
├── src/content/docs/guide/      # 入门指南、客户端、权限、验证
├── src/content/docs/prompts/    # 提示词方法与任务表达
├── src/content/docs/skills/     # Skills 设计、使用与治理
├── src/content/docs/cases/      # 真实任务案例
├── examples/                    # 可复制提示词与扩展实例
├── docs/planning/               # 内容规划与维护资料
└── ROADMAP.md                   # 项目路线与阶段脉络
```

## 本地开发

本项目使用 [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) 构建文档站，正文内容位于 `src/content/docs/`。

环境要求：

- Node.js `>=22.12.0`
- `pnpm`

启动开发环境：

```bash
pnpm install
pnpm dev
```

构建静态站点：

```bash
pnpm build
```

## 项目原则

- 官方优先：涉及产品能力、规则和边界时，优先以官方资料为准。
- 新手友好：不预设终端、Git、Agent 或自动化背景。
- 真实任务导向：强调可复用工作流、案例和模板，而不是抽象概念堆积。
- 安全边界清晰：权限、文件写入、联网、自动化与扩展能力必须讲清风险。
- 持续沉淀：鼓励把一次成功任务转成提示词、Skills、规则、案例和团队资产。

## 参与贡献

欢迎提交：

- 新手友好的教程改写
- 可复现的真实案例
- 高质量提示词、Skill 模板、配置样板与案例材料
- 事实核验与失效内容修订
- English、繁體中文等版本的内容

如果你想参与内容建设，可以先看：

- [示例库说明](./examples/README.md)
- [内容架构](./docs/planning/content-architecture.md)
- [章节大纲](./docs/planning/chapter-outline.md)

## 声明

本项目是社区维护的 Codex 实践手册，并非 OpenAI 官方项目。涉及功能、定价、可用性、安全策略和产品细节等时间敏感信息时，请以官方资料为准。
