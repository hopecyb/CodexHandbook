---
caseCategory: creation
directoryOrder: 30
title: 从文章制作 8 页可编辑演示稿
description: 下载文章、八页大纲、原生文本 PPTX 与预览，练习叙事压缩、来源保留和中文排版检查。
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 参考 PPTX 已完成软件导入、八页渲染与原生文本修改检查；仅限记录环境，属于作者自检。
  environment: Artifact Tool JS / Node.js 24.19.0；LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64；Arial Unicode MS，显式配置系统字体目录。
  evidence:
    - label: 验证过程、字体修复与检查范围
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: 独立练习所需输入、提示词、PPTX、PDF、八页预览与验证记录
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /cases/write-an-article/
  label: 先完成带来源文章
next:
  link: /guide/learning-paths/creator/#4-保存下次能复用的任务说明
  label: 保存可复用任务说明
---

把一篇文章压缩成八页汇报，交付可以修改文字的 PPTX、预览和讲解备注。你会保留资料的限制与冲突，而不为凑页面添加数字或图表。

难度：入门。预计 60—90 分钟，为编辑预估，尚未经过读者计时。前置条件：能够读取本地文件；制作阶段需要可生成 PPTX 的工具或演示软件。完整包已附输入文章，可以独立练习，也可以接着[文章案例](/cases/write-an-article/)完成。

[下载完整练习包 v1.0.0（ZIP）](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [查看可编辑 PPTX](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [查看 PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## 最后会得到什么

![参考演示稿第一页：先核对一份摘要，再决定是否扩大使用；明确标注虚构产品与合成资料](/downloads/article-to-slides/previews/slide-01.png)

参考稿采用原生文本框，关键文字可以修改。全部资料、产品“拾页”与人物“小林”均为虚构教学素材，按 CC0 1.0 提供；字体文件不随包分发。

| 页 | 本页只讲一件事 | 实际预览 |
|---|---|---|
| 1 | 先核对，再决定是否扩大使用 | [主题页](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | 文件格式与证据都有边界 | [受众问题](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | 三份资料承担不同证据角色 | [资料证据](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | 用四步完成小范围试用 | [方法](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | 删除没有依据的能力宣传 | [修订示例](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | 诊断设置仍有未解决冲突 | [限制](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | 留下核对记录，补齐未知信息 | [下一步](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | 来源与合成用途可回查 | [来源页](/downloads/article-to-slides/previews/slide-08.png) |

## 1. 读输入，确定汇报主线

解压后打开 `article-to-slides/`，先读 `brief.md`、`input/article.md`、`input/claim-map.csv` 和 `input/unresolved.md`。不要先照抄参考稿。

```text
读取 brief.md 和 input/ 下的文章、事实表与未决事项。
为首次试用笔记整理工具的个人作者设计八页汇报，目标约五分钟。
每页写一句结论、要点和来源编号，输出到 my-output/outline.md。
保留虚构身份、支持格式的限制、诊断设置冲突。
不要编造准确率、价格或节省时间的数据；作者建议须与产品事实分开。
```

完成条件：八页角色齐全，一页一个重点，每项事实能定位到资料小节。五分钟只是目标，不写成已完成试讲。完整提示见包内 `prompts/01-outline.md`。

## 2. 用两页样张检查版式

先做主题页和第六页限制页：前者检查大标题，后者检查信息最密集的正文。参考风格是深蓝、暖白与原生文字，不要求增加装饰。

```text
按已明确的八页大纲，先制作第 1 页和第 6 页样张。
采用 16:9，正文用原生文本框，选择当前环境可用的中文字体。
第 6 页同时保留 P3“默认关闭”和 C2“新安装默认开启”，明确尚未确认。
渲染检查中文、换行、边距和来源可读性。版式通过后连续完成其余六页。
把 PPTX、八页预览、逐页说明及验证记录写入 my-output/。
```

参考稿使用 Arial Unicode MS；你的系统没有该字体时，应选择合法可用的中文字体并重新验版。工具无法创建 PPTX 时，可以先交付大纲，明确缺少的能力；只有大纲不能算完成此练习。

## 3. 检查可编辑性、八页版式和来源

在演示软件中打开你制作的 PPTX，保存一个测试副本，选中关键文字并修改后保存、重新打开。再逐页导出预览，检查每页中文字、断行、遮挡、页数和备注。不得用八张整页图片代替可编辑稿。

本参考稿已经过 LibreOffice headless 导入和导出。另在临时 PPTX 副本中修改原生标题“一份”为“两份”，重新导出后能读取修改文本；这项检查不等于 GUI 点击编辑测试，也不证明所有软件表现一致。

![参考演示稿第六页：并列两份资料相反的默认设置，明确结论尚未确认](/downloads/article-to-slides/previews/slide-06.png)

第六页是事实检查的关键：不能为了让结论更简洁，删除冲突的一方或改成“默认关闭”。第五页左栏是作者设计反例，必须与右栏正确表述区分。详细来源在 PPTX 备注与 `solution/slide-notes.md`。

## 4. 核对参考文件，记录你的验证

在完整包目录执行以下命令，检查下载的参考文件是否完整（Python 3.10+，仅标准库）：

```sh
python3 validation/check.py
```

该命令核对随包参考文件的哈希、八页、原生文字、备注和预览。它不验证你在 `my-output/` 制作的新稿；新稿应按上一节在演示软件中检查，并记录软件版本、字体、检查结果和仍有的限制。

不能运行脚本时，仍可打开 PPTX/PDF 逐页检查，但不要声称已完成哈希或结构验证。参考稿的[验证记录](/downloads/article-to-slides/validation/record.md)说明实际执行范围。

## 失败时怎样恢复

| 现象 | 下一步 | 恢复完成的证据 |
|---|---|---|
| 中文变成方框 | 检查渲染进程能否读取中文字体；必要时在副本中替换字体 | 全部八页重新渲染，中文可读 |
| 换字体后文字溢出 | 减少单页文字、调整文本框与留白，保留关键限制 | 全页预览无裁切与重叠 |
| 文字无法单独选择 | 回到原生文本对象制作，不把 PNG 铺成整页 | 软件中能选中、修改、保存并重开 |
| 来源冲突被“润色”掉 | 回查 P3、C2、C3，恢复并列说法和未确认标记 | 第六页与事实表一致 |
| 文件打不开或页数不对 | 重新导出并在演示软件中导入，保留失败文件供诊断 | 八页齐全，软件可正常打开 |

本次真实发生过第一种问题：LibreOffice 起初未读取系统中文字体。为渲染进程指定字体目录后，中文恢复，八页重新检查通过。没有把缺字页面作为最终预览。

## 完成条件与下一步

- 八页 PPTX 可在你记录的软件环境中打开，关键文字可编辑。
- 八页预览齐全，中文、换行与边界逐页检查。
- 来源、合成身份、作者建议与未决冲突仍清楚可见。
- 验证记录写明实际做过和没有做过的检查，产物停在本地。

接着完成[创作者路径：保存可复用任务说明](/guide/learning-paths/creator/#4-保存下次能复用的任务说明)。可将稳定步骤整理为自己的模板，之后再学习[把工作流沉淀为 Skill](/cases/workflows/turn-a-workflow-into-a-skill/)。
