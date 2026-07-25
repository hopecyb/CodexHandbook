---
title: 结构化输出
description: 让 exec 产出机器可解析的结果——供下游步骤、仪表盘与门禁使用。
---

非交互任务若只输出自由文本，下游很难自动判断「通过/失败」。[结构化输出](/08-developer-platform/non-interactive/structured-output/) 要求 Codex 按约定格式返回，便于 CI 解析。

## 这篇解决什么问题

- 何时要求 JSON / Markdown 表格 / 固定字段
- Prompt 中如何定义 schema
- 解析失败时的降级策略

## 最小可用做法

在 prompt 末尾固定格式要求：

```text
…（任务正文）…

输出要求：
- 仅输出一个 JSON 对象，不要 markdown 代码围栏
- 字段：{"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- 若无问题，findings 为空数组
```

Shell 解析（示意）：

```bash
result=$(codex exec --cwd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## 推荐工作流

```text
定义 schema（版本号 v1）
    → prompt 引用 schema 文件 @schemas/review-output.json
    → exec 运行
    → jq / 自定义 validator 校验
    → 不通过则 exit 1
```

大输出可要求写入文件路径字段，由 Agent 写到 `artifacts/`，CI 上传 artifact。

## 与 SDK 对比

| | CLI + JSON prompt | SDK |
|---|---|---|
| 集成成本 | 低 | 中 |
| 类型安全 | 靠约定 + 校验 | 可用 SDK 类型 |
| 适用 | CI 脚本 | 多租户服务 |

见 [SDK 概述](/08-developer-platform/sdk-overview/)。

## 常见错误

- 模型输出夹杂解释文字，JSON 解析失败——在 prompt 中强调「仅 JSON」
- Schema 变更未升版本，旧 CI 误解析
- 把密钥放进 JSON 字段回传日志

## 验收清单

- [ ] 有 schema 文件或文档化字段
- [ ] CI 对解析失败显式失败
- [ ] 样例输出保存在 `fixtures/` 供回归
- [ ] 与 [退出码](/08-developer-platform/non-interactive/exit-codes-and-retries/) 策略一致

## 参考来源

- OpenAI structured outputs 通用实践（概念对齐）
- KimYx0207 自动化输出章节

---

**状态：** review  
**适用产品：** CLI / API  
**最近核验：** 2026-07-25
