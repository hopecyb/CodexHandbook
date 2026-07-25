---
title: 文件与产物
description: Codex 如何读写各类文件、管理生成物与验收要点。
sidebar:
  order: 30
---

Codex 的核心产出往往是**仓库里的文件变更**或**新生成的产物**（文档、图片、配置）。本专题说明不同文件类型的最佳实践，避免「生成了但用不了」。

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

## 统一原则

1. **路径明确**：在 prompt 中写清输出路径与命名
2. **格式约定**：扩展名、编码（UTF-8）、换行符与项目一致
3. **体积意识**：大二进制不进 Git，或用 LFS/CDN
4. **人工验收**：生成 ≠ 完成；对照 [完成定义](/guide/quality/definition-of-done/)
5. **敏感数据**：见 [敏感上下文](/guide/context/sensitive-context/)

## 与工具的关系

- 读写文件：文件工具 + 终端
- 看图： [图像提示](/prompts/prompting-with-images/)
- 看页面： [浏览器工具](/guide/tools/browser/)
- 生成图： [图像生成](/guide/tools/image-generation/)

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
