# Codex Handbook

<p align="center">
  <img src="./public/logo-origin.png" alt="Codex Handbook Logo" width="180" />
</p>

<p align="center">
  <img src="./cover-image/codex-handbook-cover/cover.png" alt="Codex Handbook Cover" width="100%" />
</p>

<p align="center"><strong>A systematic handbook and practice knowledge base for Codex</strong></p>

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
  <a href="https://codexhandbook.com/en/">Read online</a>
  ·
  <a href="./src/content/docs/en/guide/start-here/index.md">Start here</a>
  ·
  <a href="./docs/planning/content-architecture.md">Content architecture</a>
  ·
  <a href="./ROADMAP.md">Roadmap</a>
  ·
  <a href="./examples/README.md">Examples</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/"><img src="https://img.shields.io/badge/website-codexhandbook.com-1d4ed8" alt="Website" /></a>
  <a href="https://codexhandbook.com/en/"><img src="https://img.shields.io/badge/docs-handbook-2563eb" alt="Docs" /></a>
  <a href="https://starlight.astro.build/"><img src="https://img.shields.io/badge/built%20with-Starlight-f97316" alt="Built with Starlight" /></a>
</p>

> From your first time opening Codex to using it in real projects, workflows, and long-term knowledge building.  
> This is not a scattered collection of tips—it is a systematic practice handbook organized around `Guide / Prompts / Skills / Cases`.

## What this is

**Codex Handbook** is a systematic knowledge base for learning and practicing with Codex. It does not try to answer the broad question of “what can Codex do?” Instead, it focuses on three practical questions:

- Where should you start when you first encounter Codex?
- How should you describe tasks, organize context, and verify results when using Codex in real projects?
- After a successful collaboration, how do you turn that experience into prompts, Skills, rules, cases, and team assets?

If you are just getting started with Codex, this repository and website are your first stop.

## Start here

### 1. Read online

The main reading entry is [codexhandbook.com/en](https://codexhandbook.com/en/).  
For full navigation, search, chapter structure, and ongoing updates, prefer the website.

### 2. First reading path for beginners

We recommend starting in this order:

1. [Start here](./src/content/docs/en/guide/start-here/index.md)
2. [Context](./src/content/docs/en/guide/context/index.md)
3. [Prompts](./src/content/docs/prompts/index.md)
4. [Skills](./src/content/docs/skills/index.md)
5. [Cases](./src/content/docs/cases/index.md)

This path is for people new to Codex—it helps you build a solid foundation before moving into hands-on work.

## What you will learn

### Guide

Understand how to choose your Codex entry point, follow core usage paths, organize context, respect permission boundaries, and verify results.

### Prompts

Learn how to describe tasks clearly, define constraints, goals, inputs, and acceptance criteria so Codex can produce results you can check reliably.

### Skills

Learn how to design, use, maintain, and govern Skills—turning one successful collaboration into a reusable capability over time.

### Cases

Understand end-to-end workflows through real tasks: reading code, fixing bugs, writing docs, doing research, automation, and delivery collaboration.

## Who this is for

- Beginners discovering Codex for the first time
- Developers who want to use Codex in real projects
- Teams that need to capture prompts, rules, templates, and cases
- Knowledge workers using Codex for writing, research, docs, and presentations

## Quick links

| Link | Purpose |
| --- | --- |
| [Read online](https://codexhandbook.com/en/) | Browse the full handbook on the website |
| [Guide](./src/content/docs/en/guide/start-here/index.md) | Understand Codex usage paths from scratch |
| [Prompts](./src/content/docs/prompts/index.md) | Learn to describe tasks and boundaries clearly |
| [Skills](./src/content/docs/skills/index.md) | Turn experience into reusable capabilities |
| [Cases](./src/content/docs/cases/index.md) | See end-to-end workflows through real tasks |
| [Examples](./examples/README.md) | Reuse prompts and example assets directly |
| [Content architecture](./docs/planning/content-architecture.md) | Understand the site information design |
| [Chapter outline](./docs/planning/chapter-outline.md) | See topic coverage |
| [Roadmap](./ROADMAP.md) | Project plans and direction |

## Content structure

```text
Codex Handbook
├── src/content/docs/guide/      # Getting started, clients, permissions, verification
├── src/content/docs/prompts/    # Prompt methods and task expression
├── src/content/docs/skills/     # Skills design, use, and governance
├── src/content/docs/cases/      # Real task cases
├── examples/                    # Copyable prompts and extended examples
├── docs/planning/               # Content planning and maintenance
└── ROADMAP.md                   # Project roadmap and phases
```

## Local development

This project uses [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) for the docs site. Main content lives in `src/content/docs/`.

Requirements:

- Node.js `>=22.12.0`
- `pnpm`

Start the dev server:

```bash
pnpm install
pnpm dev
```

Build the static site:

```bash
pnpm build
```

## Principles

- **Official first**: For product capabilities, rules, and boundaries, prefer official sources.
- **Beginner-friendly**: No assumption of terminal, Git, Agent, or automation background.
- **Real-task oriented**: Emphasize reusable workflows, cases, and templates—not abstract concept piles.
- **Clear safety boundaries**: Permissions, file writes, networking, automation, and extensions must explain risks clearly.
- **Continuous capture**: Encourage turning one successful task into prompts, Skills, rules, cases, and team assets.

## Contributing

We welcome:

- Beginner-friendly tutorial rewrites
- Reproducible real cases
- High-quality prompts, Skill templates, config samples, and case materials
- Fact-checking and updates for outdated content
- Content in other locales (e.g. 简体中文, 繁體中文)

If you want to contribute content, start with:

- [Examples guide](./examples/README.md)
- [Content architecture](./docs/planning/content-architecture.md)
- [Chapter outline](./docs/planning/chapter-outline.md)

## Disclaimer

This project is a community-maintained Codex practice handbook—not an official OpenAI project. For time-sensitive details on features, pricing, availability, security policies, and product specifics, refer to official sources.
