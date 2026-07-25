---
title: 添加提示词示例
description: 向 examples/prompts 提交可复现提示词——元数据与验收标准。
---

提示词实例存放在仓库根目录 [`examples/prompts/`](https://github.com/cyberhope/codex-handbook/tree/main/examples/prompts)，由手册正文链接引用。设计规范见 [`docs/planning/examples-system.md`](/docs/planning/examples-system.md)。

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
- `verified` 状态需 [独立核验](/13-contributing/verify-technical-content/)

## PR 检查

- [ ] 新增文件路径已在 `examples/README.md` 索引（若维护索引）
- [ ] 至少一篇 `10-use-cases` 或工作流页链接到该示例（可选但推荐）

---

**状态：** review  
**最近核验：** 2026-07-25
