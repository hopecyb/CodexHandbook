# 外部资料吸收审计

来源：待吸收资料目录中的英文原文。其他语言目录只作为对照，不作为主来源。

## 总结

这批资料值得吸收的不是某个产品的完整命令表，也不是某个版本的功能清单，而是它把高级 Agent 能力组织成学习路径、模板、角色、守护栏和团队分发机制的方式。

本网站应采用“改写后融入现有 Codex 章节”的方式，而不是导入一个外部资料镜像栏目。

## 值得加入中文站点的内容

| 来源模块 | 可吸收价值 | 中文站点落点 |
|---|---|---|
| `LEARNING-ROADMAP.md`、`README.md` | 从新手到高级操作者的递进路径 | `guide/learning-paths/index.md` |
| `01-slash-commands/*.md` | PR 准备、文档生成、测试扩展、性能优化等可复用任务骨架 | `prompts/templates/index.md`，后续可拆独立模板 |
| `02-memory/*.md` | 个人记忆、项目指令、目录级规则、本地偏好的分层 | `guide/customization/memories-and-persistent-context.md`、`guide/customization/agents-md/*` |
| `03-skills/*/SKILL.md` | Skill 可以携带脚本、模板、参考资料，而不只是长 prompt | `skills/skill-anatomy.md`、`skills/examples/*` |
| `04-subagents/*.md` | reviewer、test engineer、debugger、security reviewer 等角色库 | `guide/agent-work/subagents.md`、`cases/workflows/multi-agent-coordination.md` |
| `05-mcp/*.json`、`05-mcp/README.md` | MCP 从只读开始、按真实系统做权限治理 | `skills/mcp/mcp-overview.md` |
| `06-hooks/*.sh`、`06-hooks/README.md` | 命令审计、密钥扫描、格式检查、依赖检查、会话总结 | `skills/hooks/hooks-overview.md` |
| `07-plugins/*` | Plugin 作为团队扩展包，而不是单个能力本身 | `skills/plugins/plugins-overview.md` |
| `08-checkpoints/README.md` | 恢复点、回退、探索另一条路径 | `guide/getting-started/undo-and-recover.md`、`cases/workflows/failure-recovery.md` |
| `09-advanced-features/planning-mode-examples.md` | 大任务先计划、再执行、再验收的思路 | `guide/agent-work/planning.md`、`cases/workflows/explore-plan-execute-verify.md` |

## 不建议加入

| 内容 | 原因 |
|---|---|
| 外部产品内置命令完整清单 | 产品特定且变化快，容易误导 Codex 用户 |
| 版本号、发布时间、模型名称等细节 | 需要外部实时核验，维护成本高 |
| 外部产品目录路径与配置格式 | 可作为启发，但不能原样写进 Codex 手册 |
| 安装外部产品的命令与品牌素材 | 与本站主题不匹配 |
| 翻译目录中的重复内容 | 可对照语言表达，不作为事实来源 |

## 已先实现的中文改动

1. 在学习路径中加入“高级操作者路径”。
2. 在子 Agent 页面加入可复用角色库和更严格的主线程验收原则。
3. 在 Hooks 页面加入可落地的守护栏候选和从记录到阻断的采纳顺序。
4. 在 MCP 页面补充“只读先行”和接入前审查清单。
5. 在 Plugins 页面补充团队扩展包设计检查表。
6. 在记忆与项目指令页面补充分层归属和沉淀方式。
7. 在提示词模板入口补充从一次性任务升级为模板/Skill/Hook/MCP/Plugin 的判断。

后续可以继续把 PR 准备、文档生成、测试扩展、性能优化四类模板拆成独立中文页面。
