---
title: 内容更新与纠错
description: 查看手册内容改动、受影响的练习和验证边界，并提交与具体页面关联的问题。
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: 根据当前仓库内容与运行记录整理。这是手册内容变更记录，不是 OpenAI 产品发布日志，也不代表线上部署已完成。
---

这里记录手册改了什么、影响哪些操作，以及验证到哪一步。日期是内容整理日期；实际发布进度以你正在访问的站点版本为准。产品能力变化请看对应教程中的官方来源。

## 2026-09-18：可跟做的材料与验证边界

| 改动 | 对读者的影响 | 验证记录 |
|---|---|---|
| [销售周报](/cases/analyze-a-spreadsheet/)增加完整输入与成果 | 可下载 46 行合成数据，练习退款、去重与环比 | [独立算法自检](/downloads/sales-weekly-report/record.md) |
| [来源文章](/cases/write-an-article/)增加事实映射与冲突材料 | 练习保留未知，不把合成访谈当真实证言 | [来源与结构检查](/downloads/source-backed-article/validation/record.md) |
| [演示稿](/cases/create-a-slide-deck/)提供 PPTX、PDF 与八页预览 | 可检查可编辑文本及页面效果；不是所有软件兼容保证 | [软件与渲染记录](/downloads/article-to-slides/validation/record.md) |
| [创作者路径](/guide/learning-paths/creator/)与[开发者路径](/guide/learning-paths/developer/)改为产物步骤 | 每步有材料、验收和下一步，开发者可记录红绿测试 | [开发者重跑记录](/downloads/developer-path/run-record.json) |
| [四类 Skill](/skills/examples/)提供完整下载包 | 审查、写作、研究、自动化均有参考与检查；触发样本不冒充路由测量 | 各详情页“验证环境与证据” |
| [Issue 分流](/cases/use-cases/team-automation/issue-triage-suggestions/)修正 schema 与上线阈值 | 不再把“3 个样本、80% 一致率”当作上线依据；建议保留人工复核 | [干运行记录](/downloads/issue-triage/validation/record.md) |
| [链接检查](/cases/use-cases/team-automation/scheduled-link-check/)与[失败恢复](/guide/reference/troubleshooting/failure-recovery-lab/)增加实跑材料 | 可复现本地错误及恢复；外链、真实调度和登录故障未验证 | [恢复记录](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18：案例筛选与路径导航

[案例目录](/cases/)支持任务类型、关键词与可分享的筛选网址，卡片从案例元数据读取产物和验证状态。简繁中文的学习路径侧栏只显示当前路径、步骤和相关帮助；初学者概览置顶，五步按顺序编号。筛选空结果可重置，未启用脚本时仍能阅读全部案例。

## 2026-09-18：12 次提示词对照实跑

[三组提示词对照](/prompts/comparison-lab/)补入销售周报、来源文章和Bug修复各A/B两次的真实产物、耗时与逐项评分。[结果包](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip)保留工具错误、日志缺项和路径脱敏哈希；主Agent非盲复核，模型标签未知，不作普遍成功率或省时结论。

## 2026-09-18：网站完整练习

[搭建网站](/cases/build-a-website/)补齐固定需求、HTML起始页、参考成品、验收模板和按钮锚点故障。参考页经过桌面与375px窄屏检查，保存实际修正与链接日志；没有部署、报名或模型效果声明。

## 2026-09-18：中文入口收敛

首页按做任务、角色路径、查问题与复用材料组织，删除重复定位和能力介绍。简繁中文主导航突出任务、学习路径和参考目录；路线图移入资源菜单，移动端使用同一组入口。

## 2026-09-18：新手固定材料与恢复练习

[初学者五步路径](/guide/learning-paths/beginner/)提供同一套合成活动资料、参考通知、四项错误样本、复核与交接模板。练习从只读、单文件编辑走到实际副本恢复；作者脚本记录只证明文件操作流程，尚无独立模型或读者通关结论。

## 2026-09-18：路线图日期与实践入口

[AI 应用路线图](/ai-roadmap/)现在区分论文、产品发布、工程文章和未按首发日期排序的项目专题。每个主题提供具体来源与练习入口；不再用单篇文章日期代表行业主流化，也不把 Skill 包结构检查当作客户端触发实测。原 URL 保留，历史年月不作为当前事件日期。各主题会在正文中提供来源链接与适用边界。

## 2026-09-18：容易误读的说明已调整

- 价格入口改为“价格参考”，有来源的原币种快照与未知信息分开，不再以估算做全球高低价比较。购买前仍需核对渠道实际显示。
- 相关页面会在正文中直接说明来源、适用边界和实际运行范围；“实跑”只覆盖列出的脚本和环境，不代表模型输出可靠率。
- [指令层级](/guide/context/context-priority/)区分消息角色、项目说明发现规则与执行权限，避免笼统宣称“越新或越严格就总优先”。
- [SDK](/guide/developer-platform/sdk-overview/)与 [Webhook](/guide/developer-platform/webhooks/overview/)区分本地执行、自建服务与回调设计，不把设计接口写成官方契约。
- [任务分级](/prompts/ask-for-a-plan/)区分直接执行、先规划和动作审批，避免无差别逐步暂停。

这些机制的来源与适用边界已写在对应正文中。不要把本更新摘要当作完整接口文档。

## 发现页面问题时

每个正文页底部都有本地化的“反馈本页问题（GitHub 草稿）”入口。它只会带入页面标题和站内路径，打开一个尚未提交的公开 Issue 草稿。请先核对内容，再自行提交；需要 GitHub 账号。

建议说明具体段落、预期与实际差异、必要环境以及公开依据。只提供脱敏信息：不要粘贴 API 密钥、账号、私人目录、客户数据或完整原始日志。草稿不会自动收集任务记录，也不包含页面查询参数。

没有 GitHub 账号时，可以先复制页面路径和问题说明，保存为本地记录，再请有权限的协作者提交。这里不承诺处理时限，也不会自动发送消息。

## 维护者如何处理

复现问题或核对来源后，记录接受、修订或暂不能确认的原因。修改产品事实时同步更新正文与对应证据，不把无关页面标成已更新；修改练习时同步源材料、下载包和正文。原结论失效时，应说明旧做法的影响与迁移步骤，而不只写“优化内容”。

更新本页时链接具体受影响页面和公开来源，并明确仍未测试的范围。这里是社区手册的变更记录，不是 OpenAI 官方更新日志。
