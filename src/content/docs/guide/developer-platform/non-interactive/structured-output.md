---
title: 结构化输出
description: 让 exec 产出机器可解析的结果——供下游步骤、仪表盘与门禁使用。
sidebar:
  order: 30
---

很多人第一次做自动化时，会默认让 Codex 输出一段“看起来很合理的话”。这对人读还行，但对脚本不够友好。

结构化输出要解决的问题很直接：让 Codex 按你规定的格式返回结果。

非交互任务如果只输出自由文本，下游很难自动判断“通过还是失败”“发现了几个问题”“严重程度是什么”。结构化输出就是让结果更适合被机器继续处理。

## 本页内容

- 何时要求 JSON / Markdown 表格 / 固定字段
- Prompt 中如何定义 schema
- 解析失败时的降级策略

## 常见误会

### 结构化输出是为了让下一步接得住

很多人会把 JSON、schema 这些词理解成工程洁癖。

更实际的原因是：如果下一步要靠脚本判断成败、靠机器人发评论、靠仪表盘展示结果，那你就需要稳定格式，而不是每次都让程序猜你在说什么。

### 格式稳定，不等于结论就可靠

结构化输出只能保证“长得像你要求的样子”，不能自动保证任务理解得对。

所以它适合解决输出接口问题，不替代任务定义和结果验证。

## 一个直接的区分

- 自由文本：适合给人看
- 结构化输出：适合给程序看

如果下一步是 `jq`、脚本、仪表盘、门禁规则、自动评论机器人来接结果，那你就不该只依赖一段自由发挥的自然语言。

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

## 常见坑

### 1. 只说“输出 JSON”，没说“只能输出 JSON”

结果模型前面先来一句解释，后面再给 JSON，解析就挂了。

### 2. 今天一个字段名，明天一个字段名

脚本一旦依赖某个字段，就应该把 schema 当接口来维护，而不是随手改。

### 3. 想让结构化输出解决一切模糊问题

它能解决的是“格式稳定”。如果任务本身定义不清，JSON 也只会稳定地输出糊涂结果。

## 推荐工作流

```text
定义 schema（版本号 v1）
    → prompt 引用 schema 文件 @schemas/review-output.json
    → exec 运行
    → jq / 自定义 validator 校验
    → 不通过则 exit 1
```

大输出可要求写入文件路径字段，由 Agent 写到 `artifacts/`，CI 上传 artifact。

## 怎么判断

如果输出结果需要被“下一步程序”继续消费，就尽量结构化。  
如果结果主要给人阅读和讨论，自由文本通常更自然。

只要结果还要继续交给程序处理，就该让 Codex 按约好的字段稳定返回结果。

## 与 SDK 对比

| | CLI + JSON prompt | SDK |
|---|---|---|
| 集成成本 | 低 | 中 |
| 类型安全 | 靠约定 + 校验 | 可用 SDK 类型 |
| 适用 | CI 脚本 | 多租户服务 |

见 [SDK 概述](/guide/developer-platform/sdk-overview/)。

## 常见错误

- 模型输出夹杂解释文字，JSON 解析失败——在 prompt 中强调「仅 JSON」
- Schema 变更未升版本，旧 CI 误解析
- 把密钥放进 JSON 字段回传日志
- 没有为解析失败设计明确的退出行为

## 验收清单

- [ ] 有 schema 文件或文档化字段
- [ ] CI 对解析失败显式失败
- [ ] 样例输出保存在 `fixtures/` 供回归
- [ ] 与 [退出码](/guide/developer-platform/non-interactive/exit-codes-and-retries/) 策略一致

## 参考来源
- OpenAI structured outputs 通用实践（概念对齐）
---

**状态：** verified  
**适用产品：** CLI / API  
**核验依据：** OpenAI API 当前模型/对比文档仍列出 `Structured outputs` 能力；本页内容限定在“为非交互任务设计稳定输出接口”的通用实践，示例中的 JSON schema、校验与降级策略属于工程模式说明。  
**最近核验：** 2026-07-26
