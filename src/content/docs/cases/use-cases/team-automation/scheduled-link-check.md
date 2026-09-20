---
caseCategory: team
directoryOrder: 100
title: 案例：文档链接检查与失败恢复
description: 下载静态 HTML 链接检查练习，逐步修复缺失页面与失效锚点，再准备周期运行。
contentType: case
audiences: [developer, team]
level: intermediate
outputs: [json, html]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 七项脚本测试通过；临时副本逐项修复后，失败数从二到一再到零。外链未联网检查，未运行真实 CI 或调度器。
  environment: Python 3.12.11 / Darwin arm64；标准库，原创合成静态 HTML，无 token。
  evidence:
    - label: 实际运行与恢复记录
      href: /downloads/docs-link-audit/validation/record.md
assets:
  - path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
    purpose: 链接检查脚本、故障输入、修复参考、测试和逐步恢复记录
    license: CC0-1.0
    version: 1.0.0
---

周期检查之前，先确认脚本真的能发现问题，并能说明检查了什么。本练习从两处故意设计的断链开始，每次只改一个目标，观察检查结果变化。

[下载完整练习包](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [实际恢复记录](/downloads/docs-link-audit/validation/recovery.json)

## 先运行故障样本

需要 Python 3.10+，无第三方依赖、API 密钥或网络访问。在解压后的目录执行：

```sh
python3 scripts/check_links.py fixtures/site
```

预期退出码 1，报告包含文件、行号、URL 与原因：index.html 第 4 行 `/missing/` 没有对应页面，第 5 行 `#old-anchor` 在目标页面中不存在。另一个外部链接列入 `unchecked`，不会被静默算作通过。

## 一次修一个问题

复制 `fixtures/site` 到自己的 `work/`，保留原始输入。先把 `/missing/` 改成 `/guide/`，运行：

```sh
python3 scripts/check_links.py work
```

此时仍退出 1，但只剩锚点问题。再把 `#old-anchor` 改成 `#install`，重跑退出 0。对照 `solution/site` 和[人工复核参考](/downloads/docs-link-audit/solution/review.md)，确认没有顺手改其他内容。

实际作者自检依次得到 2、1、0 个失败，原始样本哈希未变。[修复前 JSON](/downloads/docs-link-audit/validation/stage-0.json) · [修复后 JSON](/downloads/docs-link-audit/validation/stage-2.json)

## 理解结果和边界

| 结果 | 意义 | 下一步 |
|---|---|---|
| 退出 0 | 本地引用通过 | 阅读 unchecked，不能据此断言外链可达 |
| 退出 1 | 检出缺页、锚点或越界路径 | 逐项确认链接意图后修复 |
| 退出 2 | 检查无法完成 | 查目录、构建结果、读取错误或不支持的 base 标签 |

脚本读取构建后的 HTML，支持目录 `index.html`、相对路径、根路径和 HTML 锚点。它不解析动态 JavaScript 路由、CSS URL、srcset 或框架自定义重写。遇到 `base href` 会停止，避免错误解释相对路径。外部 URL 与其他协议明确列为未检查。

运行包内七项检查：

```sh
python3 validation/test_links.py
```

检查实际项目时，先按项目说明构建，再将输出目录传给脚本。本站已有专用的内部引用检查器；这个教学包不能取代框架对应的全部校验。

## 再接入周期流程

将“项目构建 → 链接检查 → 保存退出码与 JSON”交给已有调度器，固定工作目录和依赖环境。构建失败时停止，不读取旧输出；避免并发写同一记录。

先手动跑一次，再在目标调度环境手动触发，最后才设周期。比较本次与上次结果：未变化时保持安静，新增失败、检查异常或恢复时准备变化摘要；实际发送仍遵循授权范围。

本包没有创建定时任务、发送通知、修改真实站点或运行 CI。这里的排程步骤是接入指南，不能作为调度器实跑证明。下一步可参考[定时任务指南](/skills/automations/scheduled-tasks/)。

## 外链如何处理

外链应另设获准检查的范围与频率。404、认证限制、超时和临时服务错误含义不同；一次访问失败不能直接作为删除链接的依据。本包没有进行真实外链检查，也没有把模拟响应写成真实网络故障。

与[Issue 分流练习](/cases/use-cases/team-automation/issue-triage-suggestions/)结合时，先产生本地报告和人工复核意见，再决定是否创建工单。
