---
title: PDF 与文档
description: 让 Codex 读取、摘要或生成 PDF 类文档时的范围、工具与验收要点。
---

PDF 常用于规范、论文、扫描件与导出报告。与纯文本不同，PDF **结构复杂、体积大、不易 diff**，需要单独约定任务方式。

## 这篇解决什么问题

- 如何让 Agent 正确「读」PDF 内容
- 生成或修改 PDF 时的格式与路径约定
- 验收时如何避免「看起来有文件其实打不开」

## 读取 PDF

### 推荐做法

1. **指明文件路径**：`docs/spec.pdf` 或 @ 引用（视客户端支持）
2. **说明要什么**：摘要、对照某章节、提取表格数据
3. **页码或章节**：长文档限定范围，节省上下文
4. **敏感内容**：合同、身份证扫描等走 [敏感上下文](/guide/context/sensitive-context/) 流程

### 限制

- 扫描版 PDF 可能需 OCR，结果有误需人工抽查
- 复杂版式、多栏、脚注易丢结构
- 超大 PDF 不要整份塞进一次任务——分段或先转 Markdown 提纲

## 生成或更新 PDF

| 方式 | 适用 |
|---|---|
| 从 Markdown/LaTeX 编译 | 技术文档、报告（可复现） |
| 从 HTML 打印 | 简单版式 |
| 库生成（如 reportlab） | 程序化票据、标签 |

在 prompt 中写清：

- 输出路径与文件名
- 页面尺寸、语言、字体要求（中文 PDF 特别注意字体嵌入）
- 是否提交 Git（大二进制常用 artifact 或 release）

## 与仓库策略

- 大二进制 PDF 考虑 **Git LFS** 或不进仓库
- diff 不可读时，验收靠**打开文件** + 对照 [验证产物](/guide/quality/verify-artifacts/)
- 生成物列表见 [生成物验收](/guide/files-and-artifacts/generated-artifacts/)

## 常见错误

- 要求「改 PDF 里一个字」却不提供可编辑源文件（`.md` / `.tex`）
- 把机密 PDF 放进公共仓库再让 Cloud 处理
- 未打开验收，仅看「文件存在」

## 验收清单

- [ ] PDF 在目标阅读器/打印环境可打开
- [ ] 页数、目录、关键表格与预期一致
- [ ] 仓库体积与 LFS 策略符合团队规范

## 参考来源

- stormzhang 文件与产物相关章节
- codex.bozhouai.com 文档处理案例
- [定义完成](/prompts/define-done/)

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
