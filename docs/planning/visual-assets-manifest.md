# 视觉资产清单

本清单记录教学图示的用途、接入位置和可编辑来源。状态为 `planned` 的资产不得在正文中引用。

| 资产 | 类型 | 对应页面 | 教学目的 | 源文件 | 状态 |
|---|---|---|---|---|---|
| `codex-capability-ladder-zh-cn.svg` | 能力演进图 | `/skills/capability-map/`（历史） | 从一次任务到复用资产 | 同名 SVG | retained |
| `codex-work-system-architecture-zh-cn.svg` | 系统架构图 | `/skills/capability-map/` | 区分规则、流程、工具、触发和分发层 | `docs/visual-sources/codex-work-system-architecture.html` | integrated |
| `extension-selection-map-zh-cn.svg` | 决策图 | `/skills/choosing-an-extension-method/` | 根据需求选择提示词、AGENTS.md、Skill、MCP、Hook、Plugin 或 Scheduled task | 同名 SVG | integrated |
| `task-execution-loop-zh-cn.svg` | 流程图 | `/prompts/task-anatomy/` | 解释任务说明如何经过执行与验证形成反馈闭环 | 同名 SVG | integrated |
| `verified-bug-fix-workflow-zh-cn.svg` | 工作流图 | `/cases/use-cases/software-development/fix-a-bug-with-verification/` | 解释红灯、最小修复、绿灯和回归审查 | 同名 SVG | integrated |
| `hook-lifecycle-events-zh-cn.svg` | 生命周期图 | `/skills/hooks/hooks-overview/`、`/skills/hooks/hook-event-types/` | 区分会话、工具调用、压缩、子 Agent 和停止事件 | 同名 SVG | integrated |
| `scheduled-task-safety-loop-zh-cn.svg` | 运行闭环图 | `/skills/automations/scheduled-tasks/` | 解释手动验证、运行上下文、默认沙箱、Scheduled 收件箱和人工复核 | 同名 SVG | integrated |
| `codex-client-selection-zh-cn.svg` | 选择图 | `/guide/choose-your-client/` | 按工作位置与交互方式选择 App、CLI、IDE 或 Cloud | 同名 SVG | integrated |
| `sandbox-approval-flow-zh-cn.svg` | 流程图 | `/guide/permissions-and-sandbox/` | 解释沙箱内执行、越界审批、拒绝后的收窄与最终验证 | 同名 SVG | integrated |
| `subagent-orchestration-zh-cn.svg` | 架构图 | `/guide/agent-work/subagents/` | 解释上下文隔离、权限继承、共享工作区、证据汇总与最终验收 | 同名 SVG | integrated |

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
