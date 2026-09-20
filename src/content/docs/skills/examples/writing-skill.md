---
title: 示例：带来源与风格样本的写作 Skill
description: 下载完整来源写作包，练习事实映射、风格修订、冲突保留与人工核对。
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 来源与引用结构检查、八项回归检查通过；文章与风格为作者自检，触发用例为设计预期，未测模型写作质量或自动路由。
  environment: Python 3.12.11 / Darwin arm64；三份原创合成资料，临时副本，无第三方依赖。
  evidence:
    - label: 验证范围与人工自检记录
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: Skill、风格样本、合成资料、参考稿、事实表、修订差异与结构检查
    license: CC0-1.0
    version: 1.0.0
---

这个 Skill 把给定资料写成一篇可回查的文章，并保留风格要求、事实依据和未确认事项。它适合来源写作与事实审稿；改一个错字时不需要启动完整流程。

[下载完整 source-backed-writer v1.0.0](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [查看 SKILL.md](/downloads/skills/source-backed-writer/SKILL.md) · [安装说明](/downloads/skills/source-backed-writer/README.md)

## 包里有什么

| 材料 | 用途 |
|---|---|
| 三份合成资料与哈希索引 | 用固定输入练习，避免把虚构产品当作真实选型信息 |
| 风格样本与设计反例 | 观察如何用具体动作替换无依据的效果承诺 |
| 提纲、初稿、终稿和修订 diff | 看清事实、结构与措辞分别改了什么 |
| 七条事实映射与未决清单 | 分开原文支持、作者推断和未确认 |
| 触发正反例、脚本与验证记录 | 明确适用范围和检查局限 |

资料沿用[带来源文章练习](/cases/write-an-article/)中的虚构工具“拾页”。你可以先完成文章练习，再用 Skill 保存这套写作方法。

## 安装与第一次调用

将完整目录放入练习项目的 `.agents/skills/source-backed-writer/`，确认 `SKILL.md` 位于第一层。有同名 Skill 时先比较，不覆盖。安装发现机制参见[使用 Skill](/skills/use-a-skill/)，在客户端确认它可选后显式调用：

```text
$source-backed-writer 读取这套教学包 sources/ 中的三份资料，
按 references/style.md 写给个人作者的介绍，输出到 my-output/。
交付 article.md、claim-map.csv 和 unresolved.md。
保留合成身份，不发布。
```

只阅读和写作不要求 Python。可选结构检查使用 Python 3.10+ 标准库。在解压后的 Skill 目录执行：

```sh
# 检查随包参考稿
python3 scripts/check_article.py
# 检查你按本包格式生成的稿件
python3 scripts/check_article.py --output my-output
# 在临时副本复现八项检查
python3 validation/test_checks.py
```

本页实跑的是脚本，未验证某个客户端的自动发现与模型调用。真实任务使用自己的输出格式时，应按自己的约定检查，不必改成教学包格式。

## 风格如何影响文章

[风格样本](/downloads/skills/source-backed-writer/references/style.md)给出一组设计对照：

> 反例：拾页是全能神器，轻松处理任何格式，让你的工作效率翻倍。

修改为：“说明只列出 Markdown 与纯文本。先复制少量笔记试用，再回查摘要指向的原文。”前一句来自资料，后一句属于作者建议，两者需在事实表中区分。用户另有语气或结构要求时，以实际任务为准。

[查看参考终稿](/downloads/skills/source-backed-writer/solution/article.md) · [事实映射](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [修订差异](/downloads/skills/source-backed-writer/solution/revision.diff)

## 冲突与缺失怎么处理

产品说明 P3 写诊断上传默认关闭，版本摘要 C2 却写新安装默认开启。终稿并列说明这项冲突，不因其中一份日期较晚就判定它正确。上传字段没有提供，保留在[未决清单](/downloads/skills/source-backed-writer/solution/unresolved.md)。

合成访谈没有计时与固定评估样本，因此不能写“效率翻倍”或计算准确率。恢复方法是删除无依据数字、补回限定条件并更新事实表，不是为虚构产品搜索一个看似可信的答案。

## 验收与检查局限

完成后逐项检查：

- 关键事实有可回查位置；事实、建议和未知内容分开。
- 合成身份、输入限制和未解决冲突仍在正文中。
- 风格修改没有删掉必要限定，也没有改变用户要求的结构。
- 引用格式通过后，再逐句对照资料，不仅检查编号存在。

脚本能发现来源哈希变化和引用结构错误，不能判断语义是否得到来源支持。包内特意测试了一条虚假的能力保证：保留合法编号后仍可通过结构检查。它证明人工事实审阅仍然必要。

## 什么时候不该触发

只改错字、审查 Git 补丁、新增软件功能不应自动转为完整文章任务。写完文章也不自动获得发布权限。[触发用例](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json)为设计预期，不是路由成功率报告。

完成后回到[创作者路径](/guide/learning-paths/creator/)，把本次采用的风格与验收条件写进自己的复用说明。
