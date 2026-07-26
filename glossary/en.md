# Glossary (English)

Recommended English wording for Codex Handbook translations. Stable term IDs live in [`terms.yml`](./terms.yml). Source locale is Simplified Chinese (`zh-CN`).

## Principles

- Do **not** translate product names, protocols, or filenames: Codex, MCP, Skill, Hook, Plugin, AGENTS.md, Token.
- Prefer natural technical English over calques from Chinese.
- Keep the same English term within a page and across the handbook unless the product UI uses a different label.

## Recommended terms

| Term ID | English | zh-CN | Notes |
|---|---|---|---|
| agent | Agent | Agent | Keep English |
| approval | Approval | 审批 | Human confirmation before high-risk ops |
| artifact | Artifact | 产物 / 制品 | Generated outputs |
| cloud-environment | Cloud environment | Cloud 环境 | Remote runner setup |
| cloud-task | Cloud task | Cloud 任务 | Task run in the cloud |
| compaction | Compaction | 压缩 | Context summarization |
| context | Context | 上下文 | Information available to the model |
| diff | Diff | 差异 / diff | Prefer "diff" in UI-oriented copy |
| handover | Handoff | 交接 | Passing work to another session/person |
| hook | Hook | Hook | Keep English |
| interactive | Interactive mode | 交互模式 | Live chat / TUI |
| mcp | MCP | MCP | Never translate |
| non-interactive | Non-interactive mode | 非交互模式 | `codex exec` / scripts |
| permission | Permission | 权限 | What Codex may do |
| plugin | Plugin | Plugin | Keep English |
| profile | Profile | Profile | Named config bundle |
| prompt | Prompt | 提示词 | Goal and requirements text |
| reasoning | Reasoning | 推理 | Model reasoning effort |
| sandbox | Sandbox | 沙箱 | Isolated execution |
| skill | Skill | Skill | Keep English |
| steering | Steering | 引导 / 纠偏 | Redirecting an in-progress run |
| subagent | Subagent | Subagent | Keep English |
| task | Task | 任务 | Goal-oriented work unit |
| thread | Thread | 线程 | Conversation + accumulated context (not OS thread) |
| thread-session | Thread / session | 线程 / 会话 | Beginner-friendly alias |
| token | Token | Token | Keep English |
| tool | Tool | 工具 | Callable capability |
| verification | Verification | 核验 / 验证 | Checking acceptance criteria |
| worktree | Worktree | 工作树 | Isolated git worktree |

## Avoid

| Avoid | Prefer | Why |
|---|---|---|
| "skill package" as a substitute for Skill | Skill | Product name |
| "dialogue" for Thread | Thread / session | Thread emphasizes accumulated context |
| Mixing "sandbox" and "jail" | Sandbox | Handbook standard |
| Translating AGENTS.md | AGENTS.md | Filename |
