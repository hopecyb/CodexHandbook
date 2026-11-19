# 总体内容架构

## 1. 项目使命

帮助不同背景的读者正确、安全、高效地使用 Codex，并把偶发的成功交互沉淀为可验证、可复用、可协作的工作方法。

## 2. 目标读者

| 读者 | 默认基础 | 核心诉求 |
|---|---|---|
| AI 初学者 | 不熟悉终端、Git、Agent | 理解概念，安全完成第一次任务 |
| 创作者 | 熟悉内容生产，不一定会编程 | 研究、写作、设计、文档和自动化 |
| 开发者 | 熟悉代码、终端和版本控制 | 开发、测试、评审、CI/CD 和扩展 |
| 团队 | 关注协作、标准和风险 | 共享能力、权限、安全、治理与推广 |

正文以 AI 初学者为默认视角，专业术语首次出现时必须解释；开发者和团队内容通过学习路径逐层进入，不降低技术深度。

## 3. 覆盖范围

### 使用入口

- 桌面 App
- Codex CLI
- IDE 扩展
- Web 与 Cloud
- 移动端与远程协作
- GitHub、Slack、Linear 等集成

### 核心能力

- 项目、任务、线程和长期目标
- 提示词、上下文、记忆和压缩
- 文件、终端、Web、浏览器、Computer Use、图片和语音
- 计划、执行、验证、恢复和人工审批
- 并行任务、多 Agent、子 Agent 和工作树

### 定制与扩展

- 个人偏好、项目说明、`AGENTS.md`、Rules 和配置
- Skills、Plugins、MCP、Hooks 和自动化
- Codex SDK、App Server、非交互模式和 GitHub Action

### 实际应用

- 内容创作、设计和原型
- 软件开发、测试、评审和安全
- 研究、学习、数据分析和办公文档
- 产品、运营、项目管理和团队自动化
- 权限、安全、治理、审计和企业部署

## 4. 内容分层

```text
学习路径
  ├── 引用产品手册：在哪里操作
  ├── 引用能力专题：为什么这样做
  ├── 引用工作流：怎样稳定完成
  └── 引用案例：真实任务如何落地

参考资料为所有层提供快速查询
```

| 内容层 | 唯一职责 | 不承担的职责 |
|---|---|---|
| 学习路径 | 安排学习顺序 | 重复完整教程 |
| 产品手册 | 讲界面、命令和产品行为 | 展开通用方法论 |
| 能力专题 | 讲概念、设计和使用边界 | 复制产品操作步骤 |
| 工作流 | 讲可重复的协作过程 | 绑定单一界面 |
| 案例 | 讲端到端真实实践 | 充当功能参考 |
| 模板与实例 | 提供可复制材料 | 代替原理讲解 |
| 参考资料 | 提供短、准、可搜索的信息 | 承担连续教学 |

## 5. 公开网站结构

公开网站由七个 Starlight 内容模块和一组独立页面组成：

- `guide/`：产品入口、能力、工作流、参考与贡献指南
- `prompts/`：提示词方法和模板
- `skills/`：Skills、Hooks、自动化及相关治理
- `cases/`：端到端案例
- `ai-roadmap/`：AI 工程主题路线图
- `pets/`：Pets 使用说明
- `theme/`：站点主题说明
- 独立页面：ChatGPT/Codex 定价、联系、隐私政策和使用条款

中文和 zh-TW 顶栏采用任务型入口；正文侧栏由上述内容目录自动生成。旧路径只通过 `astro.config.mjs` 的重定向保留，不再作为内容源目录。

## 6. 仓库结构

```text
codex-handbook/
├── README.md
├── CONTRIBUTING.md
├── STYLE_GUIDE.md
├── astro.config.mjs
├── package.json
├── public/
├── src/
│   ├── content.config.ts
│   ├── content/docs/           # Starlight 正文，简体中文为 root 语言
│   │   ├── guide/
│   │   ├── prompts/
│   │   ├── skills/
│   │   ├── cases/
│   │   ├── ai-roadmap/
│   │   ├── pets/
│   │   ├── theme/
│   │   └── <locale>/           # 10 个跟踪译文；zh-tw 为生成物
│   ├── pages/                  # 定价、联系、隐私、条款
│   ├── components/
│   └── data/                   # 定价与多语言界面文案
├── scripts/                    # 构建、i18n、链接和仓库检查
├── docs/
│   ├── planning/
│   └── visual-sources/
├── examples/
│   ├── prompts/
│   ├── skills/
│   ├── hooks/
│   └── complete-workflows/
└── glossary/
```

手册正文位于 `src/content/docs/`。简体中文为 root 语言，例如 `guide/start-here/`；其他语言使用同构子目录，例如 `en/guide/start-here/`。zh-TW 不提交到 Git，由 `scripts/generate-zh-tw.mjs` 在开发和构建前从 zh-CN 生成。

每个章节目录的首页文件名为 `index.md` 或 `index.mdx`，不是 `README.md`。页面相对路径去掉扩展名即为页面 ID，例如 `guide/prompting/prompt-basics`。

定价与法律页不是 content collection；它们分别由 `src/data/`、`src/pages/` 和共享布局维护。

## 7. 每种语言的同构目录

```text
src/content/docs/[<locale>/]
├── guide/
├── prompts/
├── skills/
├── cases/
├── ai-roadmap/
├── pets/
├── theme/
└── index.mdx
```

所有语言使用相同英文路径、文件名和页面 ID。标题与正文翻译，路径不翻译，以保证链接稳定、合并简单、工具可处理。

## 8. 导航入口

每种语言至少提供以下入口：

- 从零开始
- 按角色：初学者、创作者、开发者、团队
- 按产品：App、CLI、IDE、Cloud、移动端、集成
- 按任务：理解、创建、修改、诊断、评审、研究、自动化
- 按能力：提示词、上下文、Skills、Plugins、MCP、Hooks、多 Agent
- 按难度：入门、引导实践、实战、高级、团队

## 9. 去重规则

1. 一个概念只能有一个权威解释页。
2. 产品差异写在产品手册，通用原理写在能力专题。
3. 学习路径和案例使用摘要加链接，不复制大段正文。
4. 命令参数只在参考资料维护，教程只引用必需部分。
5. 多个场景共享的提示词模式只保留一份模板。
6. 页面拆分依据是独立阅读目标，不以篇幅作为唯一标准。

## 10. 页面状态

| 状态 | 含义 |
|---|---|
| `planned` | 已规划，尚未编写 |
| `draft` | 正在编写，不保证准确完整 |
| `review` | 内容完成，等待复核 |
| `verified` | 已按标注版本验证 |
| `outdated` | 产品变化后需要更新 |
| `archived` | 保留历史，不进入当前导航 |

易过时页面必须记录官方依据和最近核验日期。
