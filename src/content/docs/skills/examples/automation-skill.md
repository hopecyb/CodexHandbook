---
title: 示例：只记录变化的自动化 Skill
description: 下载 quiet-link-monitor，手动验证重复检查、故障恢复、持久事件与失败停止。
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 八项状态测试及三次 CLI 演练通过；重复故障不新增事件，修复后记录恢复。未验证真实调度、模型路由或消息投递。
  environment: Python 3.12.11 / Darwin arm64；临时合成静态站点，标准库，无网络。
  evidence:
    - label: 实际运行记录
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: 自动化 Skill、链接检查器、持久状态脚本、故障样本与验证记录
    license: CC0-1.0
    version: 1.0.0
---

重复运行一个检查，并不意味着每次都该通知。这个 Skill 复用[链接检查实例](/cases/use-cases/team-automation/scheduled-link-check/)，记录变化、恢复和执行异常；结果相同时保持安静。

[下载 quiet-link-monitor v1.0.0](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## 安装与手动演练

完整目录放进练习项目 `.agents/skills/quiet-link-monitor/`，不覆盖已有同名 Skill。按[使用 Skill](/skills/use-a-skill/)确认可选后调用：

```text
$quiet-link-monitor 使用包内样本演练失败、重复检查和恢复。
在临时副本操作，保存独立状态，最后报告事件变化，不发送通知。
```

可先独立运行脚本，不需要模型或账号。需要 Python 3.10+ 标准库：

```sh
python3 validation/test_monitor.py
```

手动操作时，将 `fixtures/broken` 复制为自己的 `work-site`。在 Skill 目录连续执行：

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

第一次退出 1 并记录故障事件；第二次仍退出 1，但 `new_event` 为 null。参照 `fixtures/fixed` 修复同一目录，再运行得到退出 0 和 `recovered`。不要换成另一个站点路径来模拟恢复，状态会拒绝范围变化。

[实际三次 CLI 摘要](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## 记录什么，什么时候停止

状态文件必须在被检查目录外。它保存每次运行结果、连续失败次数与持久事件；脚本会写这个文件及相邻锁文件，不是绝对只读操作。站点内容不会修改。

| 情况 | 行为 |
|---|---|
| 首次健康 | 建立基线，无新事件 |
| 首次故障或发现问题变化 | 保存变化事件 |
| 相同结果再次出现 | 不新增事件 |
| 故障修复 | 保存恢复事件 |
| 连续三次检查执行异常 | 保存停止事件，进入暂停状态 |
| 状态损坏、锁冲突或站点不匹配 | 立即停止，不覆盖原状态 |

发现断链属于有效检查结果，不计入执行异常次数。暂停后普通调用不会继续检查；核对原因并修复后显式恢复：

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

不要自动删锁或状态来绕过失败。进程崩溃可能留下锁，需先确认没有活跃进程。[状态与恢复说明](/downloads/skills/quiet-link-monitor/references/operations.md)列出退出码、留存和并发边界。

## 通知候选不等于已经发送

脚本只记录本地事件，所有 `delivery` 均为 `not-sent`，不创建调度、不发送消息。事件有稳定于该次记录的 id，重复结果不会再创建同一状态事件。

接入获准发送器时，读取持久未投递事件，按 id 去重并保存投递确认。只读取终端本次 `new_event` 可能在进程中断后漏报。这个包不提供发送器，也不承诺跨系统恰好一次投递。

## 从手动到周期运行

先确认构建成功，再检查最新输出；构建失败就停止，不检查旧目录。调度器每次使用相同站点与状态文件，避免并发覆盖。先在目标环境手动触发，确认日志和停止行为，再设周期。实际通知的渠道、接收人和范围须来自已有授权。

这里的真实调度和消息投递尚未测试。外链仍属于 `unchecked`，不能把本地健康状态写成“全站链接都正常”。

## 适用范围与验收

重复文档链接审计适用，一般销售日报、创意写作和自动安装生产任务不属于本包能力。触发用例是设计预期，未进行模型路由测量。

完成练习应能拿出首次失败、重复静默、修复恢复的记录，以及暂停和显式恢复的证据。包内八项测试已验证这些本地状态行为；它们不证明模型判断、网络可达或真实生产可靠性。
