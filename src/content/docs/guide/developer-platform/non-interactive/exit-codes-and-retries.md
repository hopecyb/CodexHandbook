---
title: 退出码与重试
description: 在流水线中正确解读 codex exec 的成败——何时重试、何时立即失败。
---

CI 依赖**进程退出码**判断步骤成败。本章说明 [codex exec](/guide/developer-platform/non-interactive/codex-exec/) 常见语义、重试策略与幂等设计。

## 这篇解决什么问题

- 退出码与业务「审查未通过」的区别
- 429/网络类错误是否重试
- 如何避免重复执行产生副作用

:::note
具体退出码表以官方 CLI 文档为准；下表为集成时的**设计原则**。
:::

## 推荐语义（概念）

| 情况 | 建议处理 |
|---|---|
| `0` | 任务完成且满足 prompt 中的成功标准 |
| 非 `0` 且日志含 policy/sandbox 拒绝 | **不要**盲目重试，修配置或 prompt |
| 非 `0` 且 API 429/5xx | 有限次指数退避重试 |
| 审查发现 P0 问题但执行成功 | 用 [结构化输出](/guide/developer-platform/non-interactive/structured-output/) 的 `pass: false` + 脚本 `exit 1` |

「发现了安全问题」不应依赖崩溃式异常，而应**显式**在 JSON 里 `pass: false` 并由包装脚本决定退出码。

## 重试模板（bash）

```bash
max=3
delay=10
for i in $(seq 1 $max); do
  if codex exec --cwd . "$(cat "$PROMPT")"; then
    exit 0
  fi
  code=$?
  if [ "$code" -eq 2 ]; then
    echo "Policy error, not retrying" >&2
    exit "$code"
  fi
  sleep $((delay * i))
done
exit 1
```

将「不可重试」码与官方文档对齐后写入 `case` 分支。

## 幂等与副作用

| 风险 | 缓解 |
|---|---|
| 重复 PR 评论 | 用 check run id 或「已有 bot 评论则更新」 |
| 重复写文件 | exec 默认只读审查；写操作单独 job + 人工门 |
| 重复发通知 | 通知 webhook 带 dedupe key |

## 常见错误

- 忽略退出码，CI 始终 green
- 对策略错误无限重试，烧配额
- 重试时未固定 prompt/git sha，结果不可比

## 验收清单

- [ ] CI 对非 0 退出码失败
- [ ] 重试次数与退避有上限
- [ ] 审查「未通过」与「运行崩溃」可区分
- [ ] 日志保留足够排障信息

## 相关章节

- [错误参考](/guide/reference/error-reference/)
- [失败恢复](/cases/workflows/failure-recovery/)

## 参考来源

- OpenAI API 重试指南（概念）
- stormzhang CI 排错

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25
