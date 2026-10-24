# 视觉资产清单

本清单记录教学图示的用途、接入位置和可编辑来源。状态为 `planned` 的资产不得在正文中引用。

| 资产 | 类型 | 对应页面 | 教学目的 | 源文件 | 状态 |
|---|---|---|---|---|---|
| `codex-capability-ladder-zh-cn.svg` | 能力演进图 | `/skills/` | 从一次任务到复用资产；2026-10 修正节点文字重叠与多语言溢出 | 同名 SVG | integrated |
| `ai-application-roadmap-zh-cn.svg` | 时间线 | `/ai-roadmap/` | 按时间倒序总览代表事件；2026-10 日期与事件表对齐，接入多语言生成 | 同名 SVG，标签见 `scripts/i18n/diagram-labels.*.json` | integrated |
| `codex-work-system-architecture-zh-cn.svg` | 系统架构图 | `/skills/capability-map/` | 区分规则、流程、工具、触发和分发层 | `docs/visual-sources/codex-work-system-architecture.html` | integrated |
| `extension-selection-map-zh-cn.svg` | 决策图 | `/skills/choosing-an-extension-method/` | 根据需求选择提示词、AGENTS.md、Skill、MCP、Hook、Plugin 或 Scheduled task | 同名 SVG | integrated |
| `task-execution-loop-zh-cn.svg` | 流程图 | `/prompts/task-anatomy/` | 解释任务说明如何经过执行与验证形成反馈闭环 | 同名 SVG | integrated |
| `verified-bug-fix-workflow-zh-cn.svg` | 工作流图 | `/cases/use-cases/software-development/fix-a-bug-with-verification/` | 解释红灯、最小修复、绿灯和回归审查 | 同名 SVG | integrated |
| `hook-lifecycle-events-zh-cn.svg` | 生命周期图 | `/skills/hooks/hooks-overview/`、`/skills/hooks/hook-event-types/` | 区分会话、工具调用、压缩、子 Agent 和停止事件 | 同名 SVG | integrated |
| `scheduled-task-safety-loop-zh-cn.svg` | 运行闭环图 | `/skills/automations/scheduled-tasks/` | 解释手动验证、运行上下文、默认沙箱、Scheduled 收件箱和人工复核 | 同名 SVG | integrated |
| `codex-client-selection-zh-cn.svg` | 选择图 | `/guide/choose-your-client/` | 按工作位置与交互方式选择 App、CLI、IDE 或 Cloud | 同名 SVG | integrated |
| `sandbox-approval-flow-zh-cn.svg` | 流程图 | `/guide/permissions-and-sandbox/` | 解释沙箱内执行、越界审批、拒绝后的收窄与最终验证 | 同名 SVG | integrated |
| `subagent-orchestration-zh-cn.svg` | 架构图 | `/guide/agent-work/subagents/` | 解释上下文隔离、权限继承、共享工作区、证据汇总与最终验收 | 同名 SVG | integrated |

## 概念插画（2026-10）

不含文字的 AI 生成插画，所有语言共用同一张图，替代文字按语言分别撰写。生成工具为 `codex-img`，提示词与统一画风记录在 [illustrations-prompts.json](illustrations-prompts.json)，原始 PNG 存于本地 `temp/illustrations-src/`（不入库），站点使用 1600px 宽的 WebP。

| 资产 | 对应页面 | 教学目的 |
|---|---|---|
| `illustrations/what-is-codex.webp` | `/guide/start-here/what-is-codex/` | 把任务交给会用工具的 Agent |
| `illustrations/agent-basics.webp` | `/guide/foundations/agent-basics/` | 普通聊天与 Agent 循环的区别 |
| `illustrations/context-layers.webp` | `/guide/context/` | 规则、文件、对话三层上下文与噪音过滤 |
| `illustrations/sandbox-and-approval.webp` | `/guide/foundations/sandbox-and-network/` | 沙箱边界、网络隔离与人工批准 |
| `illustrations/local-vs-cloud.webp` | `/guide/foundations/local-vs-cloud/` | 本地执行与云端隔离并行 |
| `illustrations/verification.webp` | `/guide/quality/` | 审查 diff、清单与测试 |
| `illustrations/task-brief.webp` | `/prompts/` | 目标、上下文、约束、完成标准组成任务 |
| `illustrations/skills-toolkit.webp` | `/skills/overview/` | 成功流程封装为可复用 Skill |
| `illustrations/cases-deliverables.webp` | `/cases/` | 练习以可交付成果结束 |
| `illustrations/handoff-and-resume.webp` | `/guide/agent-work/handoff-and-resume/` | 交接与恢复不丢进度 |
| `illustrations/learning-paths.webp` | `/guide/learning-paths/` | 按角色选择学习路径 |
| `illustrations/team-guardrails.webp` | `/guide/team-enterprise/` | 团队协作中的规则与审查 |
| `illustrations/start-here.webp` | `/guide/start-here/` | 入门起点与路线选择 |
| `illustrations/getting-started.webp` | `/guide/getting-started/` | 安装、登录、项目、首个任务 |
| `illustrations/undo-and-recover.webp` | `/guide/getting-started/undo-and-recover/` | 版本快照与恢复 |
| `illustrations/permissions-approvals.webp` | `/guide/foundations/permissions-and-approvals/` | 读、写、执行、联网四级权限 |
| `illustrations/tokens-compaction.webp` | `/guide/foundations/tokens-context-and-compaction/` | 上下文上限与压缩 |
| `illustrations/threads-tasks-projects.webp` | `/guide/foundations/threads-tasks-and-projects/` | 项目、任务、线程的层级 |
| `illustrations/desktop-app.webp` | `/guide/desktop-app/` | 并行任务与 diff 审批 |
| `illustrations/cli.webp` | `/guide/cli/` | 终端、脚本与测试 |
| `illustrations/ide.webp` | `/guide/ide/` | 编辑器内的就地修改 |
| `illustrations/web-and-cloud.webp` | `/guide/web-and-cloud/` | 云端隔离执行与 PR |
| `illustrations/tools-overview.webp` | `/guide/tools/` | 按任务选择工具 |
| `illustrations/files-and-artifacts.webp` | `/guide/files-and-artifacts/` | 多种文件类型的检查 |
| `illustrations/agent-planning.webp` | `/guide/agent-work/planning/` | 先计划后执行 |
| `illustrations/agents-md.webp` | `/guide/customization/agents-md/what-is-agents-md/` | 项目说明文件与作用域 |
| `illustrations/prompt-injection.webp` | `/guide/team-enterprise/security/prompt-injection/` | 拦截隐藏指令 |
| `illustrations/mcp-overview.webp` | `/skills/mcp/mcp-overview/` | 标准协议连接外部服务 |
| `illustrations/plugins-overview.webp` | `/skills/plugins/plugins-overview/` | 扩展的打包、安装与卸载 |
| `illustrations/prompt-debugging.webp` | `/prompts/prompt-debugging/` | 对比产出并调整任务说明 |
| `illustrations/long-running-tasks.webp` | `/prompts/long-running-tasks/` | 检查点与中途纠偏 |
| `illustrations/failure-recovery.webp` | `/cases/workflows/failure-recovery/` | 按清单回退与重建 |

首页卡片配图（960px 宽，装饰性，`alt=""`）：`home-weekly-report`、`home-bug-fix`、`home-article`（任务卡片），`home-path-beginner`、`home-path-creator`、`home-path-developer`、`home-path-team`（角色卡片）。

插画只表达概念，不承载需要读者核对的事实；涉及步骤、界面或数据的内容仍使用带文字的 SVG 或真实截图。

## 维护规则

### 演示稿案例预览（2026-09-18）

- 公开路径：`public/downloads/article-to-slides/previews/slide-01.png` 至 `slide-08.png`，接入 `/cases/create-a-slide-deck/`；第一页展示最终成果，第六页展示冲突证据，其余逐页链接可查看。
- 来源：`examples/complete-workflows/creator/article-to-slides/solution/source-backed-writing.pptx`，由原生文本对象构成；用 LibreOfficeDev 26.8.0.0.alpha0 导出 PDF 后渲染 PNG，八页均已目视检查。无生成式位图或外来图片。
- 许可：本站原创合成教学资料，CC0 1.0。字体 Arial Unicode MS 只在本机使用，不随包分发。文件哈希与环境见同包 `validation/manifest.json`、`validation/record.md`。
- 状态：integrated。预览和下载包由 `scripts/package-teaching-examples.py` 从同一源目录生成，预览不替代可编辑源稿。

### 通用规则

- 新图先确定正文要解释的关系，再制作资产。
- SVG 需要 `<title>`、`<desc>`、`role="img"`、稳定 `viewBox` 和中文系统字体栈。
- 生成式位图需额外记录最终提示词、生成方式和版权检查结果。
- 替换资产时保留稳定路径，除非旧图表达本身错误；语义改变时使用新文件名。
- 每次构建后抽查图片真实加载，并在桌面与移动视口检查文字和连线。
