---
title: 用量、耗时与模型选择
description: 分开记录订阅额度、API费用、等待和返工，用可比较任务选择模型，不把消耗指标当作质量。
contentType: guide
audiences: [beginner, creator, developer, team]
level: intermediate
outputs: [csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: 核对官方用量、API定价及推理计费说明；记录模板与估算为教学设计，没有模型速度、费用或节省比例实测。
  evidence:
    - label: 官方Codex用量与定价
      href: https://learn.chatgpt.com/docs/pricing
    - label: 官方API定价
      href: https://developers.openai.com/api/docs/pricing
    - label: 推理模型说明
      href: https://developers.openai.com/api/docs/guides/reasoning
assets:
  - path: /downloads/usage-log/usage-log-1.0.0.zip
    purpose: 运行成本与耗时、额度快照两份记录模板及来源说明
    license: CC0-1.0
    version: 1.0.0
---

先问清自己在记录什么：账户还剩多少额度、一次API调用花了多少钱、等了多久，还是花了多少人工返工。这几项单位不同，不能相互替代。

[下载记录模板](/downloads/usage-log/usage-log-1.0.0.zip) · [填写说明](/downloads/usage-log/README.md)

## 四本账分开记

| 指标 | 记录依据 | 常见误读 |
|---|---|---|
| 订阅额度 | 当前界面显示的窗口、剩余比例与重置时间 | 将剩余百分比直接换算成美元或固定任务数 |
| API费用 | 当次实际用量、模型与适用价格；核对账单 | 用订阅价格代替API费率，或把估算当实际扣费 |
| 等待时间 | 同一任务的开始、结束、排队及重试情况 | 只记录最后成功一轮，遗漏失败耗时 |
| 人工投入 | 复核与返工分别计时 | 把模型等待全部算成节省的人力 |

官方定价说明指出，任务用量受模型、上下文、推理、工具和缓存影响，消息数量估计不是固定上限。当前额度以用量面板为准，CLI 会话可用 `/status` 查看；API key 使用按 API 费率计费。[官方说明](https://learn.chatgpt.com/docs/pricing)

额度快照可能混入其他任务和窗口重置。不要用“前后少了5%”断言这个任务固定消耗5%，更不要据此给读者承诺还能做多少次。

## API估算先确认计费口径

按模型、输入/缓存/输出类别和服务条件查对应价格，再使用实际用量计算；涉及其他计费项目时单独计入。本文不维护另一份固定模型价格表。[API定价](https://developers.openai.com/api/docs/pricing)

推理 token 按输出 token 计费；统计时检查字段是否已经包含推理部分，避免重复相加。可选推理档位也应按对应模型支持情况核对。[推理模型说明](https://developers.openai.com/api/docs/guides/reasoning)

教学演算：假设输入10000、输出2000 token，无缓存或其他费用，使用**虚构**的每百万输入2美元、输出10美元费率，则估算为0.04美元。这仅演示单位转换，不对应任何模型报价或真实账单。

## 用同一批任务比较设置

先选一组有明确验收条件的任务，用当前可用设置建立基线。保持输入、工具权限、项目说明与评估方式相同，每次只改变模型或推理设置中的一个主要因素。

逐项比较正确性、边界、证据和返工，而不是只比响应快慢。若较轻设置不能稳定满足验收，检查失败来自资料缺失、范围不清还是推理不足，再决定是否提高设置。更高设置不能替代来源核对与测试。

这是本手册的评估建议，不是某型号必胜的实测结论。可直接使用[三组提示词对照材料](/prompts/comparison-lab/)和[工作流评估样本](/guide/quality/workflow-evaluation/)记录自己的观察。

## 记录采样条件

[运行表](/downloads/usage-log/runs.csv)记录输入哈希、实际模型标签、客户端、推理设置、计费路线、时间、重试、结果和费用证据。[额度快照表](/downloads/usage-log/allowance-snapshots.csv)另记窗口与重置时间。

失败和中断都保留，人工复核与返工分开记录。未知字段留空并说明，不能填0假装没有消耗。使用账户别名，公开材料不要包含密钥、账号或私人日志。

当前下载表没有任何实测行。没有匹配人工基线就不计算节省比例；没有重复样本就不声称稳定速度优势。即使模型等待更短，若返工更多，也未必值得采用。

## 接近限制时怎样处理

先保存当前成果、未决项与恢复入口，检查任务是否陷入重复重试或读取无关材料。按目标缩小非必要范围，保留质量与安全验收，不为赶在额度耗尽前省掉关键检查。

需要继续运行时，核对自己的当前额度与计费路线再选择。本文不会自动切换API计费、购买额度或调整账号设置。团队选择可结合[两周试点路径](/guide/learning-paths/team/)记录采用理由和回退条件。

查看当前型号、入口差异和任务建议：[模型选择：按任务找到起点](/guide/reference/model-selection/)。
