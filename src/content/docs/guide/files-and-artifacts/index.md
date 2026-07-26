---
title: 文件与产物
description: Codex 如何读写各类文件、管理生成物与验收要点。
sidebar:
  order: 30
---

Codex 的核心产出往往是**仓库里的文件变更**或**新生成的产物**（文档、图片、配置）。本专题说明不同文件类型的最佳实践，避免“生成了但用不了”。

同样是“文件”，不同类型的文件要用不同的交代方式和验收方法。

“改代码”“处理表格”“生成截图”“导出 PPT”看起来都像文件任务，但最容易出错的点并不一样。

## 章节导航

| 主题 | 页面 |
|---|---|
| 代码与文本 | [文本与代码文件](/guide/files-and-artifacts/text-and-code-files/) |
| 截图与设计输入 | [图像与截图](/guide/files-and-artifacts/images-and-screenshots/) |
| PDF 与长文档 | [PDF 与文档](/guide/files-and-artifacts/pdf-and-documents/) |
| 表格数据 | [表格与电子表格](/guide/files-and-artifacts/tables-and-spreadsheets/) |
| 幻灯片 | [演示文稿](/guide/files-and-artifacts/presentations/) |
| Agent 输出物 | [生成物验收](/guide/files-and-artifacts/generated-artifacts/) |

通用方法见 [验证产物](/guide/quality/verify-artifacts/)。

## 这一章在讲什么

这章主要讲三件事：

- 你该怎么把任务交代清楚
- 它最容易在哪些地方悄悄做错
- 你最后该怎么验收

所以它更像一套按文件类型拆开的操作说明，不是单纯的功能列表。

## 统一原则

1. **路径明确**：在 prompt 中写清输出路径与命名
2. **格式约定**：扩展名、编码（UTF-8）、换行符与项目一致
3. **体积意识**：大二进制不进 Git，或用 LFS/CDN
4. **人工验收**：生成 ≠ 完成；对照 [完成定义](/guide/quality/definition-of-done/)
5. **敏感数据**：见 [敏感上下文](/guide/context/sensitive-context/)

## 常见误会

### 1. 文件生成出来，不等于任务已经完成

很多文件类任务的问题不在“有没有生成”，而在：

- 格式对不对
- 内容准不准
- 路径对不对
- 能不能被下游继续用

### 2. 不同文件类型的交代方式差不多？

也不一样。  
比如：

- 代码文件更在意范围、逻辑和测试
- 表格更在意列、类型和汇总规则
- 图片更在意视觉内容和尺寸
- 文档更在意结构、语气和事实

### 3. 只要最后能打开，就算没问题？

也不能这么想。  
“能打开”只是最基础的一步，不代表它已经适合提交、发布或交付。

## 建议阅读顺序

第一次用 Codex 处理文件时，可以按这个顺序看：

1. 找到与你当前任务最像的文件类型
2. 看这一类文件最容易出错的点
3. 再看对应的验收方式

这样不容易一上来就被整章信息压住。

## 与工具的关系

- 读写文件：文件工具 + 终端
- 看图： [图像提示](/prompts/prompting-with-images/)
- 看页面： [浏览器工具](/guide/tools/browser/)
- 生成图： [图像生成](/guide/tools/image-generation/)

文件类任务里很常见的情况是结果已经生成出来了，但格式、规则或内容已经悄悄跑偏。

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
