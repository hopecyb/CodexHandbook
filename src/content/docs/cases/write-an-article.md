---
caseCategory: creation
directoryOrder: 20
title: 从三份资料写出带来源的文章
description: 用产品说明、合成访谈和版本记录练习事实映射、冲突处理与修改，下载可跟做的完整文章包。
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: 已逐项对照三份自制合成资料与七条关键事实；结构校验通过。属于作者自检，未进行真实模型对照实验或第二位人工复核。
  evidence:
    - label: 产品说明（合成资料）
      href: /downloads/source-backed-article/sources/01-product.md
    - label: 合成访谈
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: 版本摘要（含未解决冲突）
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: 作者检查记录与验证边界
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: 三份资料、提示词、初终稿、事实表、修订差异和校验器
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /cases/
  label: 选择实战任务
next:
  link: /cases/create-a-slide-deck/
  label: 将文章制作成演示稿
---

这次练习的目标是一篇每个关键事实都能回到资料的中文短文。你会处理相互矛盾的说明，区分资料支持、作者推断和待确认问题，再修订一份有明显错误的设计初稿。

难度：入门。预计 45—60 分钟，为编辑预估，尚未经过读者计时。前置条件：能够向 Codex 提供本地文件并阅读 Markdown 文稿。可选的结构校验需要 Python 3.10+。

[下载完整练习包 v1.0.0（ZIP）](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

全部资料由本站原创，产品“拾页”和访谈角色“小林”均为虚构，不描述真实产品或真实用户证言。

## 看看最后会得到什么

参考终稿以“先核对一份摘要，再决定是否扩大使用”为主线，包括输入边界、小范围试用、摘要核对和未决事项。

| 产物 | 用途 |
|---|---|
| `outline.md` | 说明读者问题与文章顺序 |
| `article.md` | 带事实编号的中文稿件 |
| `claim-map.csv` | 七条关键事实/建议、来源 ID、小节定位与证据类型 |
| `unresolved.md` | 保留无法从资料回答的问题 |
| `revision.diff` | 设计初稿到终稿的实际文本差异 |

[查看参考文章](/downloads/source-backed-article/solution/article.md) · [查看事实映射表](/downloads/source-backed-article/solution/claim-map.csv)

## 下载与准备

解压并打开 `source-backed-article` 文件夹。阅读 `brief.md` 和 `sources/index.csv`；许可为 CC0 1.0，允许修改与再分发。可先不看 solution，自己完成一版。

三份资料分别为：P 产品说明、I 合成访谈、C 版本摘要。它们有稳定的小节编号，如 P1、I2、C3；引用应落到具体小节，不仅写“来自资料”。

## 1. 先整理事实和冲突

```text
读取 brief.md、sources/index.csv 和其中列出的三份资料。
先列可直接支持的事实、缺失信息和相互冲突的说法，每条附来源 ID 与小节。
不联网补充虚构产品信息，不把合成访谈改为真实用户证言。
不要按文档日期自动解决矛盾，先交付事实表，再写文章。
```

本练习故意保留一项冲突：P3 说诊断上传默认关闭，C2 说新安装默认开启，C3 明确没有维护者修正说明。正确做法是写明未确认，而非选择较新的资料后声称问题已经解决。

## 2. 在已明确范围内连续写稿

包内 `prompts/02-outline-and-write.md` 已给出受众和四段结构：能做什么、怎样试用、必须核对什么、哪些仍未解决。确认这条结构后可连续完成，不必逐段暂停。

所有产物写入 `my-output/`，保留输入资料。给关键事实标 `[F1]` 等编号，在映射表记录：

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

证据类型只有“原文支持”“作者推断”“未确认”。建议复制少量文件试用属于作者判断；不能写成产品承诺或必需操作。

## 3. 先修事实，再改语气

`solution/draft.md` 是作者设计的反例，不是模型真实输出。它故意写了资料不支持的 PDF/图片能力、完全离线、效果保证和真实用户证言。

| 初稿问题 | 修订动作 | 为什么 |
|---|---|---|
| “支持 PDF 和各种图片” | 改为 Markdown 与纯文本 | P1 明确了输入范围 |
| “完全离线，默认关闭诊断” | 并列冲突，列待确认问题 | P3/C2 描述相反，上传字段也缺失 |
| “小林证明了准确率与省时效果” | 保留合成身份，不给效果数字 | I3 没有计时或固定评估样本 |
| “全能神器，轻松提升效率” | 写成具体输入、操作与检查 | 减少夸张，不引入新事实 |

[查看修订差异](/downloads/source-backed-article/solution/revision.diff)与[修订说明](/downloads/source-backed-article/solution/revision-notes.md)。只润色语气而保留错误能力，不能算完成审稿。

## 4. 核对结构，再逐句阅读来源

如果环境有 Python 3.10+，在练习目录执行：

```sh
python3 validation/check.py --output my-output
```

该脚本核对三份来源哈希、正文编号、来源小节和未决文件。随包参考稿通过；在临时副本加入不存在的 F99 后，脚本能拒绝它。

**结构通过不等于事实正确。** 对每条 claim 打开原文，判断是否支持当前句子，是否丢掉“仅限”“尚未确认”等条件。把合成片段写成真实证言，即使引用编号存在也仍是错误。

不能运行脚本时，按事实表逐项打开三个原文件，检查编号和措辞。不要声称未执行的检查已经通过。

## 失败时怎样恢复

- 文件不存在：先核对解压目录与来源索引，不编造资料内容。
- 引用编号不存在：补回准确的映射或删掉无来源事实，不删除合理的不确定性。
- 来源互相冲突：并列说法，写需要谁补充什么证据，不凭日期、多数票或语气决定。
- 文章太像宣传：先删无依据的效果承诺，再改成具体动作和限制。

## 完成条件

关键事实可定位，作者建议单独标明，冲突与缺失仍可见，合成身份未被删掉。交付留在本地，不自动发布。

接着用这份终稿[制作八页可编辑演示稿](/cases/create-a-slide-deck/)。演示练习已提供独立输入、PPTX、PDF、八页预览和验证记录；连续学习时优先使用你自己完成并核对的文章。
