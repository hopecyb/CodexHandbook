---
title: 文本与代码文件
description: 让 Codex 正确读写源码、配置与文档类文本文件。
---

绝大多数开发任务都落在**文本与代码文件**上：源码、测试、配置、Markdown。本页说明如何限定范围、保持风格一致并安全合并。

## 这篇解决什么问题

- 如何让改动落在正确路径与编码
- 多文件编辑的组织方式
- 与 formatter、linter 的协调

## 文件类型与注意点

| 类型 | 注意 |
|---|---|
| 源码 `.ts` `.py` 等 | 遵循 `AGENTS.md` 与现有模式 |
| 配置 `.json` `.yaml` `.toml` | 易破坏结构；要求有效语法 |
| 文档 `.md` | 链接相对路径、中英混排规范 |
| 生成代码 | 标明是否应提交或 gitignore |

上下文：[文件与目录上下文](/05-core-capabilities/context/file-and-folder-context/)

## 推荐 prompt 结构

```text
目标：<一句话>
允许修改：<路径 glob>
禁止：改 lockfile、改无关目录
风格：与 <示例文件> 一致
完成：列出变更文件 + 运行 <测试命令>
```

见 [好任务的结构](/05-core-capabilities/prompting/anatomy-of-a-good-task/)

## 编码与换行

- 默认 **UTF-8**；特殊编码项目应在 `AGENTS.md` 声明
- 与 `.editorconfig` / `prettier` 一致，避免整文件换行符 diff
- 大文件分段改：@ 具体函数而非整文件重写

## 审查要点

- [审查 diff](/05-core-capabilities/quality/review-diffs/)：逻辑、范围、删除
- [运行测试](/05-core-capabilities/quality/run-tests/)
- 无意引入 `TODO` 占位未实现

## 常见错误

- 「重构整个项目」导致数百文件变动
- 在二进制或 minified 文件上强行文本编辑
- 文档链接写成绝对路径导致站内 404

## 参考来源

- [定义约束](/05-core-capabilities/prompting/define-constraints/)
- stormzhang 文件与 Git 章节

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
