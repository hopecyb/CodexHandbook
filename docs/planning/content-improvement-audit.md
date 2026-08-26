# 内容完善实施审计

**审计日期：** 2026-08-26  
**审计范围：** 简体中文 `guide / prompts / skills / cases`、实例库、站点配置与视觉资产  
**定位：** 记录本轮实际修复、验证证据和剩余风险；简体中文根目录是本轮权威版本。

## 交付判断

项目原有的四模块结构已经保留，并补成一条更清楚的学习主线：

1. 从客户端选择、安装和登录完成首次任务。
2. 用目标、上下文、约束、执行和验证写出可执行任务说明。
3. 通过同一套 Bug 修复材料练习探索、修改、测试和 Review。
4. 根据复用需求选择 `AGENTS.md`、Skill、MCP、Hook、Plugin、Scheduled task 或子 Agent。
5. 用沙箱、审批、联网边界和团队规则治理高风险工作。

本轮没有机械同步全部翻译。中文主站中原有的 24 个 `outdated` 状态页已经全部现行化；其他语言仍可能保留旧命令或旧产品描述，必须在后续翻译批次中按中文权威版本受控同步。

## 已修复的主要问题

| 优先级 | 原问题 | 本轮处理 | 验收证据 |
|---|---|---|---|
| P0 | 文档使用已失效的 CLI `--cwd` 参数 | 统一为当前 `--cd` / `-C`，并按本机 `codex-cli 0.148.0` 帮助核对非交互参数 | 中文四模块扫描无 `--cwd` |
| P0 | Cloud Secrets 生命周期表述错误 | 明确 Secrets 只在 setup phase 可用，进入 Agent phase 前移除；环境变量才在两个阶段都可用 | Cloud 环境、联网、Secrets 页面已重写 |
| P0 | 本地 Node.js 18 无法运行 Astro 7 | 按项目 `.nvmrc` 使用 Node 22，并把要求写入贡献规范 | `pnpm build` 可完成 2,837 页构建 |
| P1 | App、IDE、Cloud、权限与配置页沿用旧产品入口或旧配置概念 | 按当前官方资料重写 24 个页面，移除全部中文 `outdated` 标记 | 中文四模块 `outdated` 文件数为 0 |
| P1 | 扩展能力被错误画成线性升级链 | 改为规则、流程、工具、触发、分发五类正交能力，并补选择决策图 | 能力架构与扩展选择页已接入图示 |
| P1 | Bug 修复案例重复且不可运行 | 短页改为入口，完整页作为权威案例；新增 starter、solution、三段提示词与验证记录 | starter 预期 2/3 通过，solution 3/3 通过 |
| P1 | 缺少统一写作与贡献标准 | 新增 `STYLE_GUIDE.md`、`CONTRIBUTING.md`，约束事实核对、示例、图片、链接和构建验收 | 规范已被贡献入口引用 |
| P2 | 重要关系依赖长段文字解释 | 新增 9 张可维护 SVG，覆盖任务闭环、客户端选择、扩展系统、Hook、自动化、权限和子 Agent | 视觉资产清单状态均为 `integrated` |
| P2 | 内链没有仓库级自动检查 | 新增 `scripts/check-doc-links.mjs` 与 `pnpm check:links` | 309 个源文件、1,145 个引用检查通过 |

## 现行化页面清单

### 桌面 App：7 页

- 安装与界面、Diff/评论/Review、集成终端、Worktree、通知、并行 Agent、设置。
- 补入当前 ChatGPT 桌面端入口、`/review`、Review pane、Handoff、Activity、Goal mode 与设置边界。

### IDE：4 页

- 安装、设置、审查变更、Cloud task 工作流。
- 区分 VS Code/Cursor/Windsurf 扩展与 Xcode、JetBrains 独立集成；补入共享 `config.toml` 和 `chatgpt.*` 设置层。

### Cloud：9 页

- 总览、连接 GitHub、Cloud 环境、联网、Secrets 与变量、委派与跟进、代码 Review、创建 PR、故障排查。
- 补入 setup/Agent phase、容器顺序、缓存、Agent 联网默认关闭、域名/HTTP 方法限制和 `@codex review`。

### 规则、权限与参考：4 页

- `AGENTS.md` 作用域与优先级、配置 Profile、键盘快捷键、权限矩阵。
- 区分 CLI `--profile` 与 Beta Permission Profile，补入当前 `:read-only`、`:workspace`、`:danger-full-access` 语义与网络代理前置条件。

## 新增教学资产

### 图示

本轮新增并接入 9 张 SVG：

1. `task-execution-loop-zh-cn.svg`：任务说明到验证反馈的闭环。
2. `codex-client-selection-zh-cn.svg`：App、CLI、IDE 与 Cloud 的选择路径。
3. `codex-work-system-architecture-zh-cn.svg`：规则、流程、工具、触发与分发架构。
4. `extension-selection-map-zh-cn.svg`：Prompt、Skill、MCP、Hook、Plugin 和 Scheduled task 决策树。
5. `verified-bug-fix-workflow-zh-cn.svg`：红灯、最小修复、绿灯与回归审查。
6. `hook-lifecycle-events-zh-cn.svg`：会话、工具调用、压缩、子 Agent 与停止事件。
7. `scheduled-task-safety-loop-zh-cn.svg`：手动验证、运行上下文、默认沙箱、收件箱和人工复核。
8. `sandbox-approval-flow-zh-cn.svg`：沙箱内执行、越界审批、收窄和最终验证。
9. `subagent-orchestration-zh-cn.svg`：上下文隔离、权限继承、共享工作区和证据汇总。

完整接入位置和源文件见 [`visual-assets-manifest.md`](visual-assets-manifest.md)。

### 可运行示例

- `examples/complete-workflows/developer/verified-bug-fix/`：无第三方依赖的 Node.js 红绿测试案例。
- `examples/hooks/secret-guard/`：使用 Python 标准库的 `PreToolUse` 拒绝 Hook，并含正常、命中与畸形输入测试。
- 原有开发、研究和元工作流提示词已补充真实输入、预期产物和验收标准。

## 验证记录

| 检查 | 结果 |
|---|---|
| `git diff --check` | 通过 |
| `pnpm check:links` | 通过；309 个源文件、1,145 个内部链接与图片引用 |
| `xmllint --noout public/diagrams/*.svg` | 通过；20 个 SVG 均可解析，其中 9 个为本轮新增 |
| Bug 修复 starter 测试 | 预期失败；3 项中 2 项通过、1 项失败 |
| Bug 修复 solution 测试 | 通过；3/3 |
| Secret guard Hook 测试 | 通过；3/3 |
| Node 22 `pnpm build` | 通过；Astro 构建 2,837 页并完成 Pagefind 索引 |
| 桌面/移动端关键页面抽查 | 7 个重点页面 × 2 种视口通过；无坏图、控制台 warning/error 或整页横向溢出 |
| 移动端图表交互 | 通过；宽图与宽表均在正文内部横向滚动，未裁掉不可访问内容 |

重点页面包括客户端选择、Cloud 环境、权限矩阵、子 Agent、IDE 安装、功能对照和权限与沙箱。桌面视口为 1440×1000，移动视口为 390×844。

## 剩余风险与下一批建议

1. 多语言目录仍可能出现 `--cwd`、旧 Desktop 命名和旧能力描述。应以中文主站为源进行术语和事实同步，不宜全局机械替换。
2. 当前图示优先覆盖高认知负担关系；非编程工作流还可补研究溯源、长文编辑和演示文稿制作的端到端证据图。
3. UI 会持续变化。涉及按钮名、Beta 功能和套餐可用性的页面应保留官方链接，并在后续发布周期复核。

## 官方核验入口

- [Codex App](https://learn.chatgpt.com/docs/app)
- [Codex CLI](https://learn.chatgpt.com/docs/codex/cli)
- [Codex IDE extension](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Hooks](https://learn.chatgpt.com/docs/hooks)
- [Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)
