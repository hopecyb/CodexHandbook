---
title: 添加提示词示例
description: 向 examples/prompts 提交可复现提示词，包含元数据与验收标准。
sidebar:
  order: 20
---

提示词实例存放在仓库根目录 [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts)，由手册正文链接引用。设计规范见 [`docs/planning/examples-system.md`](/docs/planning/examples-system.md)。

## 本页内容

常见卡点包括：

- 不知道“什么样的提示词才算值得收录”
- 不知道该按什么格式写，才方便别人直接复用

这页要解决的是，怎么提交一个**别人真的能拿来试、拿来学、拿来复现**的示例。

## 收录标准

这里收的是“带上下文、带边界、带验收标准的可复现示例”，不是灵感片段。

一个合格的提示词示例，至少要回答三件事：

- 什么时候用
- 具体怎么说
- 用完之后怎么判断它有没有做好

如果只是一段看起来很聪明的话，但别人不知道前提、也不知道怎么验收，它更像笔记，不像示例。

## 文件命名

```text
examples/prompts/<category>/<slug>.md
```

`category` 示例：`development`、`research`、`meta-workflows`、`team`。

## 必填元数据（YAML frontmatter）

```yaml
---
id: prompt.fix-bug-with-tests
title: 修复 Bug 并补充测试
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## 正文必备小节

1. **使用场景**
2. **使用前准备**（权限、分支、上下文文件）
3. **推荐版提示词**（完整可复制）
4. **验收标准**（清单，可客观检查）
5. **常见失败方式**
6. **相关手册页**（链接到 `src/content/docs/`）

可选：极简版、教学版拆解、可替换变量。

## 常见误会

### 别把重点写散了

有些贡献者会把背景、理论、延伸解释写得很多，真正能复制使用的提示词反而藏在中间。

更稳的写法是：

- 先把推荐版提示词写完整
- 再补前提、变量和失败方式
- 最后才补说明性内容

### 自己用过一次，还不算完整示例

你自己知道当时脑子里默认了哪些前提，但读者不知道。

所以要把这些前提写出来，例如：

- 适用于哪个产品入口
- 需要哪些文件、截图或上下文
- 是否默认允许改文件、跑命令、联网

### 不要把真实敏感信息写进示例

如果示例里包含真实 token、账号、内部链接或客户信息，这个示例就不适合公开仓库。

示例要教的是方法，不是暴露你的生产环境。

## 验收标准示例

```markdown
## 验收标准

- [ ] 原失败测试通过
- [ ] 约定范围测试套件通过
- [ ] diff 仅涉及任务相关文件
- [ ] 未执行 git push
```

## 质量门槛

- 目标与完成定义明确
- 含权限与安全边界说明
- 不含真实密钥与 PII
- `verified` 状态需 [独立核验](/guide/contributing/verify-technical-content/)

## 提交流程

按下面的顺序通常更稳：

1. 先确定这个示例解决的是哪一类真实任务
2. 再写一版别人可直接复制的提示词
3. 给出最少必需的前置条件和边界
4. 写清楚“怎样算成功”
5. 最后检查有没有泄露敏感信息、有没有放错目录

## PR 检查

- [ ] 新增文件路径已在 `examples/README.md` 索引（若维护索引）
- [ ] 至少一篇案例页或工作流页链接到该示例（可选但推荐）

一个好的提示词示例，应该让别人能直接照着复现，并得到接近的结果。

---

**状态：** verified  
**核验依据：** 已按仓库当前 `examples/` 目录、示例 frontmatter、索引方式与贡献流程逐项复核；页面要求已与现有案例/工作流链接结构对齐，不依赖某一 Codex 产品端的易变行为。  
**最近核验：** 2026-07-26
