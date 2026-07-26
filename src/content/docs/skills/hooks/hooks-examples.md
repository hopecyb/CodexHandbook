---
title: Hook 配置示例
description: 可改编的 Hook 配置与脚本骨架，包含密钥扫描、审计日志与格式校验。
---

看 Hook 示例时，先确认它到底想防什么，再改成适合自己环境的版本。

本章提供**示意性**配置与脚本，便于团队改编。字段名、路径以 [官方文档](https://developers.openai.com/codex) 与本地 `codex --help` 为准；复制前请在隔离仓库试跑。

前置阅读：[Hooks 概述](/skills/hooks/hooks-overview/) · [Hook 事件类型](/skills/hooks/hook-event-types/)

## 使用前先确认范围

不要把这些示例当成能直接照搬的“标准答案”。  
把它们看成三种样板就行：

- 只记录
- 先阻断
- 先做轻量输入检查

先看思路，再决定要不要往下扩。

## 示例 1：工具调用后写审计日志（只读）

**目标：** 记录谁在何时对哪些路径做了写操作，不脱敏失败则不落盘密钥。

`hooks.json`（示意）：

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`：

```bash
#!/usr/bin/env bash
# stdin: JSON payload（结构以官方为准）
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**验收：** 执行一次文件写入后，日志有一行；脚本退出码始终为 0。

这类示例只记录，不改行为，风险最低，通常适合作为起点。

## 示例 2：工具调用前阻断疑似密钥

**目标：** diff 或写入内容匹配 AWS 访问密钥模式时 `block`。

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

`secret-scan.sh` 核心逻辑（示意）：

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**验收：** 含 `AKIA` 测试串时被阻断；正常 `git status` 通过。

:::caution
正则扫描有误报/漏报，仅作补充层；真实密钥应走 secret scanner 与 pre-commit，见 [敏感上下文](/guide/context/sensitive-context/)。
:::

这类示例通常放在你已经确定要拦真实动作之后再用。直接从 block 型 Hook 开始，排障成本会高不少。

## 示例 3：用户提交 prompt 时的长度与关键字策略

**目标：** 拒绝明显试图覆盖系统指令的短语（简化示例）。

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**验收：** 超长与命中模式时失败；正常任务通过。

这类示例至少要做到：

- 能看输入
- 能给出明确失败原因
- 不会把正常请求误伤得太离谱

## 与团队规则同源

将「禁止的命令子串」提取到 `tools/codex-policy.json`，供 Hook 与 [命令规则](/guide/customization/rules/command-rules/) 共同读取，避免两处维护。

## 常见误区

### 1. 示例能跑，就能直接上生产

示例的价值在于说明结构和思路，不在于可直接原样上线。

### 2. block 型 Hook 不一定比 log 型更成熟

很多团队会先从 log 做起，确认误报和性能都能接受，再升级到 warn 或 block。

### 3. Hook 示例不只是看脚本写法

只看脚本还不够，还得看：

- 挂在什么事件
- 失败策略是什么
- 团队是否能解释为什么要这样拦

## 测试 Hook

```bash
# 用 fixture 测脚本（示意）
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## 常见顺序

很多团队会按下面的顺序推进：

1. 先做只读日志型
2. 再做 warn 型
3. 再做 block 型

这样比较容易把“逻辑写对”和“团队真愿意让它拦”分开处理。

Hook 示例主要是拿来学思路和结构的，不适合原样搬进正式环境。

## 常见错误

- 脚本无 `chmod +x`，静默失败
- `timeout_ms` 过短导致误拦
- 日志路径不可写导致整个 Hook 链失败
- 在 Hook 里 `curl` 外发完整 payload

## 验收清单

- [ ] 每个 Hook 有对应 fixture 测试
- [ ] 失败策略（block/warn）与团队政策一致
- [ ] 配置与脚本同仓库、同 PR 审查
- [ ] 文档注明核验日期与适用 CLI 版本

## 参考来源

- OpenAI Codex Hooks 示例
- freestylefly/CodexGuide 审计配置
- stormzhang `22-hooks.md`

---

**状态：** review  
**适用产品：** CLI / App（视版本）  
**最近核验：** 2026-07-25
