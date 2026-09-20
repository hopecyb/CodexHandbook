---
title: 五种失败恢复实录
description: 用实际 CLI 日志练习定位来源、引用、输入绑定、目录范围和状态文件问题，每次只改一个变量。
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 五组人为设计的失败已实际运行，分别单变量修复并重跑通过；原始输入哈希保持不变。不是生产事故或模型成功率实验。
  environment: Python 3.12.11 / Darwin arm64；临时副本与合成输入，无网络或模型调用。
  evidence:
    - label: 五组实际运行摘要
      href: /downloads/failure-recovery/validation/summary.json
    - label: 验证范围
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: 五种故障复现、依赖脚本与输入、修复前后日志和运行说明
    license: CC0-1.0
    version: 1.0.0
---

先保存错误，再判断是哪一层失败，最后只改一个变量重跑。本页用五组固定输入演示这个过程。故障由作者故意制造，日志来自实际命令行运行，没有冒充真实客户事故。

[下载完整恢复练习包](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## 先复现一次

需要 Python 3.10+ 标准库，无账号或网络。在解压后的目录执行：

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

输出目录必须尚不存在，避免覆盖旧证据。脚本在临时副本运行，五组修复前应为非零退出码，修复后都为 0，原始输入不变。每组日志含命令、退出码、标准输出与错误；临时路径归一为 `<WORK>`。

## 1. 来源哈希不匹配

**症状：** `FAIL: Source changed: P`，退出 1。

**诊断：** 固定来源文件多了一段误写内容，来源索引没有变化。先对照原始资料，不能直接更新哈希让检查变绿。

**唯一修正：** 恢复这一份来源文件的已知原始字节，其他资料、文章与索引不动。重跑退出 0。

[失败日志](/downloads/failure-recovery/validation/01-source-changed-before.json) · [恢复日志](/downloads/failure-recovery/validation/01-source-changed-after.json)

真实资料若确实更新，应重新核对版本、内容与结论，保留新的来源记录；本例恢复旧文件只适用于明确的误改。

## 2. 正文引用不在事实表中

**症状：** `FAIL: Unmapped or unused claim ID`，退出 1。

**诊断：** 正文把 F1 写成 F99，事实表没有 F99。回查 P1 后确认该句仍对应 F1。

**唯一修正：** 仅把误写编号改回 F1，重跑退出 0。不要新造一条事实表记录来掩盖未知引用。

[失败日志](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [恢复日志](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

编号正确不能证明文字得到来源支持，仍需逐句核对；详见[写作 Skill](/skills/examples/writing-skill/)。

## 3. 分流建议与输入不匹配

**症状：** `FAIL: Stale input hash`，退出 1。

**诊断：** 建议中的输入哈希无法对应当前固定 Issue。这个演练改坏了建议哈希，用来触发输入绑定检查。

**唯一修正：** 替换为已经对照当前输入复核的完整参考建议，输入和 schema 不改，重跑退出 0。没有运行模型重新分流，也没有只重算哈希来套用旧结论。

[失败日志](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [恢复日志](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

真实 Issue 内容有变化时，必须重新分析变化对结论的影响；参考[Issue 分流案例](/cases/use-cases/team-automation/issue-triage-suggestions/)。

## 4. 同一状态文件被用于另一目录

**症状：** `State version/site mismatch`，退出 3。

**诊断：** 状态绑定的是 fixed 站点，却把命令的 `--site` 指向 broken。错误发生在范围检查，不是链接本身突然失效。

**唯一修正：** 只把 `--site` 改回原目录，保留状态文件和其他参数。重跑退出 0，错误调用没有覆盖既有状态。

[失败日志](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [恢复日志](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

确实要监控另一个站点时，为它建立单独状态；不要删除旧状态来绕过范围保护。

## 5. 状态 JSON 损坏

**症状：** JSON 解析失败，运行器报告 stopped，退出 3。

**诊断：** 状态文件被截断，不能安全读取历史和去重基线。程序拒绝后保留损坏内容，未偷偷重置为空。

**唯一修正：** 恢复本次演练前保存的已知完好备份，命令和站点不改。重跑退出 0。

[失败日志](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [恢复日志](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

没有备份时，先保留损坏文件、检查运行记录，再人工重建。直接删状态可能丢失待发送事件并产生重复候选。详见[自动化 Skill](/skills/examples/automation-skill/)。

## 用到自己的任务

保存输入版本、实际命令和完整报错；判断是输入、结构、范围还是状态问题；写下一个待验证原因；只改对应变量；用同一检查重跑并保留结果。恢复之后还要检查原目标是否满足，不能只看退出码。

这些练习不覆盖真实登录失败、客户端 Skill 未触发、网络限制或审批故障。遇到这些问题，请回到[按症状排障索引](/guide/reference/troubleshooting/)，保留真实环境信息，不将本页的脚本现象套用成客户端行为保证。
