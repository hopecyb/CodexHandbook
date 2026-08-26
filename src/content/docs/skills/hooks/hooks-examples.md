---
title: Hook 配置示例
description: 用真实 hooks.json 和标准库 Python 脚本实现可测试的 PreToolUse 守护栏。
---

本章已移除旧版示意事件名和配置字段。示例遵循当前官方 `hooks.json` 结构，并附带可运行测试。

完整文件位于 [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard)。

## 目标与边界

目标：当 `Bash` 或 `apply_patch` 的命令输入出现形似 AWS Access Key ID 的测试串时，在工具执行前拒绝。

它只是演示 Hook 输入、输出和测试结构：

- 不能替代专业 secret scanner
- 正则会误报和漏报
- 不扫描 Hosted tools
- 不应记录完整工具输入

## 1. 配置 hooks.json

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

仓库内实际使用时，通常把配置放在 `.codex/hooks.json`，脚本放到 `.codex/hooks/`。这里保留 examples 路径，方便直接验证手册仓库里的完整材料。

## 2. 拒绝输出

脚本从 stdin 读取事件 JSON，只检查 `tool_input.command`。命中时输出：

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

未命中时退出 `0` 且不输出内容。普通 stdout 文本不会成为有效的 `PreToolUse` 决策。

## 3. 运行测试

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

预期结果：三个测试通过，覆盖正常命令、疑似密钥和非字典 `tool_input`。

也可以手动喂入 fixture：

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

正常输入不会产生 stdout。

## 4. 在项目中启用

1. 把配置和脚本放入目标仓库，改成目标仓库内的稳定路径。
2. 在隔离仓库运行单元测试和一次真实正常命令。
3. 启动 Codex，打开 `/hooks` 审查来源和精确定义。
4. 信任后分别验证“正常通过”和“测试串被拒绝”。
5. 修改脚本后重新审查；hash 变化会使非托管 Hook 回到待信任状态。

## 从提醒升级到阻断

生产团队通常先做不阻断的审计或附加上下文，再升级为 deny。升级前至少回答：

- fixture 能否覆盖已知误报？
- 脚本超时或崩溃时用户能否看懂？
- 规则是否也由 CI 或服务端策略兜底？
- 绕过与紧急恢复是否可审计？

## 官方来源

- [OpenAI：Hooks 配置与 PreToolUse 输出](https://learn.chatgpt.com/docs/hooks)

---

**状态：** verified

**适用产品：** 使用本地 Codex host 的环境；信任管理使用 Codex CLI `/hooks`

**最近核验：** 2026-08-25
