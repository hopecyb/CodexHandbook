# 概念插画提示词指南

记录本站「无文字概念插画」的画风、提示词写法和生成流程，供后续补图或重画时复用。完整提示词存放在 [illustrations-prompts.json](illustrations-prompts.json)（键名即图片文件名），资产与页面的对应关系见 [visual-assets-manifest.md](visual-assets-manifest.md)。

## 适用范围

- 适用：概念、流程、比喻类插画，所有语言共用同一张图。
- 2026-11 起，原先 10 套带文字的 SVG 示意图（`public/diagrams/`）也已改为无文字插画，`public/diagrams/` 与本地化生成脚本已删除。精确信息（事件名、字段名、步骤标签）由正文承接；如果将来必须恢复带文字的图，请另行设计，不要让 AI 生图生成文字。

## 统一画风（`--style`）

每次批量生成都追加同一段画风描述，保证整站一致：

```text
Soft 3D isometric illustration, rounded friendly shapes, deep navy dark background
with cobalt blue and cream accents and small mint green and coral highlights,
gentle glow, clean minimal composition, consistent friendly white round robot
assistant mascot with a dark face, no text, no letters, no watermark, no logo
```

- 画幅 `--aspect 16:9`，入库前转成 1600px 宽 WebP（质量 82，单张约 35–95 KB）。
- 吉祥物：Skills、MCP、Plugins、Hooks 等栏目统一用「白色圆润机器人助手」；Pets 栏目的主角是宠物本身（像素小猫、带芽的圆团子），不放机器人。

## 提示词写法

一条提示词按下面的顺序写，一句话讲清一个比喻：

1. **画面构图**：左右对比、三层堆叠、传送带流程、剖面图等，先说结构。
2. **主体与道具**：列出 3–5 个具体物件（工具箱、放大镜、闸门、抽屉），用物件而不是文字表达概念。
3. **状态变化**：绿灯、勾选、红色屏障、箭头，表达「通过 / 拦截 / 流转」。
4. **最后一句写教学目的**：以 `Conveys …` 结尾，让模型明白这张图要传达什么。

要点：

- 一张图只表达一个概念；想表达两件事就拆成两张。
- 不要让图里出现文字、代码、可读标签；用图标和形状代替。需要符号时只用 `$`、`{}` 这类通用符号。
- 敏感内容（危险命令、攻击）用盾牌、屏障、骷髅图标等中性符号，不画真实有害内容。
- 同一栏目的多张图共享同一个吉祥物和色板，不要单张换风格。

## 生成流程

1. 把提示词写成 `{"文件名": "提示词"}` 的 JSON。
2. 批量生成（每张约 1–1.5 分钟，并发 5–7）：

   ```bash
   codex-img --batch prompts.json -d temp/xxx-src --aspect 16:9 -j 6 --style "<统一画风>"
   ```

3. 逐张查看：内容是否对得上、有没有乱码文字、画风是否一致。不满意就改提示词，加 `--force` 重画。
4. 转 WebP 放入 `public/illustrations/`：

   ```bash
   cwebp -quiet -q 82 -resize 1600 0 temp/xxx-src/name.png -o public/illustrations/name.webp
   ```

5. 在 10 种语言页面的第一个二级标题前插入 `![替代文字](/illustrations/name.webp)`，替代文字逐语言撰写，描述画面里发生了什么。
6. 运行 `pnpm check:links` 和 `npx astro build` 验证。
7. 发布时提醒勾选平台的「AI 生成内容」声明。

## 2026-11 新增与重画

### Pets（5 张）

| 资产 | 页面 | 表达的概念 |
|---|---|---|
| `pets-hero` | `/pets/` | 像素小宠物陪伴在 Codex 窗口边 |
| `pets-anatomy` | `/pets/` | 资源包 = 元数据 + 动画图集 + 授权 |
| `pets-install` | `/pets/install/` | 检查来源、放入目录、刷新后出现 |
| `pets-create` | `/pets/create/` | 从草图到可加载宠物包的制作流程 |
| `pets-spritesheet` | `/pets/create/` | 图集按行列裁帧并播放 |

### Skills（14 张，其中 3 张重画）

| 资产 | 页面 | 表达的概念 |
|---|---|---|
| `skills-capability-ladder` | `/skills/` | 从一条提示升级到团队能力包的六级阶梯（替换原带文字的 SVG 阶梯图） |
| `skills-toolkit`（重画） | `/skills/overview/` | 成功流程封装成工具箱并分发 |
| `plugins-overview`（重画） | `/skills/plugins/plugins-overview/` | 扩展包的安装与干净卸载 |
| `mcp-overview`（重画） | `/skills/mcp/mcp-overview/` | 统一转接中枢连接外部工具 |
| `skills-anatomy` | `/skills/skill-anatomy/` | 分层结构与按需加载 |
| `skills-first-skill` | `/skills/create-your-first-skill/` | 第一个 Skill 的制作步骤 |
| `skills-when` | `/skills/when-to-use-skills/` | 什么任务值得封装 |
| `skills-trigger` | `/skills/use-a-skill/` | 显式调用与隐式触发 |
| `skills-scripts` | `/skills/scripts-and-tests/` | 确定性脚本与测试关卡 |
| `skills-security` | `/skills/security/` | 来源检查、权限门、版本回滚 |
| `mcp-connect` | `/skills/mcp/connect-an-mcp-server/` | 连接、授权、验证 |
| `mcp-debugging` | `/skills/mcp/debugging-mcp/` | 配置、传输、鉴权、工具四层排障 |
| `hooks-guardrail` | `/skills/hooks/hooks-examples/` | PreToolUse 守护栏放行与拦截 |
| `automations-schedule` | `/skills/automations/` | 定时运行 + 人工复核与暂停 |

## 已知取舍

- 图是 AI 生成的，同一栏目内人物细节会有差异；`mcp-connect` 的细节比其他图少，可按需 `--force` 重画。
- 旧的 `PetScienceFigure.astro` SVG 组件已删除；其中的 8×9 网格等规格信息只保留在正文里，且尚无实测记录。

### 流程/架构图替换（10 张）

原带文字 SVG 的替代图，替代文字沿用各语言页面里原有的图说，保留「这张图想说明什么」。

| 资产 | 替换的原图 | 页面 |
|---|---|---|
| `roadmap-ai-application` | ai-application-roadmap | `/ai-roadmap/` |
| `flow-bug-fix` | verified-bug-fix-workflow | 带验证的 Bug 修复 |
| `flow-subagents` | subagent-orchestration | 子 Agent、并行 Agent |
| `flow-client-selection` | codex-client-selection | 选择客户端 |
| `flow-sandbox-approval` | sandbox-approval-flow | 权限与沙箱、权限矩阵 |
| `flow-task-loop` | task-execution-loop | 任务结构 |
| `flow-scheduled-safety` | scheduled-task-safety-loop | 定时任务 |
| `arch-work-system` | codex-work-system-architecture | 扩展能力地图 |
| `map-extension-selection` | extension-selection-map | 如何选择扩展方式 |
| `flow-hook-lifecycle` | hook-lifecycle-events | Hook 事件类型、Hooks 概述 |
