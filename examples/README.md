# 实例库（examples）

本目录存放可复制的提示词、Skill/配置素材和可运行完整案例。解释性正文在 [`src/content/docs/`](../src/content/docs/)。

规范详见 [`docs/planning/examples-system.md`](../docs/planning/examples-system.md)。

## 目录

```text
examples/
├── README.md
├── prompts/
│   ├── development/
│   ├── research/
│   └── meta-workflows/
├── hooks/
│   └── secret-guard/
└── complete-workflows/
    └── developer/
        └── verified-bug-fix/
```

## 提示词索引（首批）

| ID | 文件 | 说明 |
|---|---|---|
| `prompt.fix-bug-with-tests` | [development/fix-bug-with-tests.md](prompts/development/fix-bug-with-tests.md) | 带测试验证的 Bug 修复 |
| `prompt.explore-codebase` | [development/explore-codebase.md](prompts/development/explore-codebase.md) | 只读代码库探索 |
| `prompt.source-backed-summary` | [research/source-backed-summary.md](prompts/research/source-backed-summary.md) | 带来源的研究摘要 |
| `prompt.epxv-starter` | [meta-workflows/epxv-starter.md](prompts/meta-workflows/epxv-starter.md) | EPXV 四阶段起步 |

## 完整案例

| ID | 目录 | 可验证结果 |
|---|---|---|
| `case.verified-bug-fix` | [developer/verified-bug-fix](complete-workflows/developer/verified-bug-fix/) | 起始代码 1 个测试失败，参考修复 3 个测试通过 |

| `case.issue-triage` | [team/issue-triage](complete-workflows/team/issue-triage/README.md) | 五份合成输入、schema 与人工队列；八项测试通过，无 GitHub 写入 |
| `case.docs-link-audit` | [team/docs-link-audit](complete-workflows/team/docs-link-audit/README.md) | 故障数 2→1→0，七项测试通过；外链未检查 |

| `case.failure-recovery` | [team/failure-recovery](complete-workflows/team/failure-recovery/README.md) | 五组实际失败/恢复 CLI，单变量修正，原始输入不变 |

## 扩展能力示例

| ID | 目录 | 可验证结果 |
|---|---|---|
| `hook.pre-tool-secret-guard` | [hooks/secret-guard](hooks/secret-guard/) | 标准库 Python 守护脚本的 3 个单元测试通过 |
| `skill.scoped-review` | [skills/scoped-review](skills/scoped-review/README.md) | 暂存、未暂存和分支范围收集；七项回归测试通过，触发用例为设计预期 |

| `skill.source-backed-writer` | [skills/source-backed-writer](skills/source-backed-writer/README.md) | 风格样本、来源与冲突映射；八项结构回归通过，模型写作质量未测 |

| `skill.evidence-research` | [skills/evidence-research](skills/evidence-research/README.md) | 来源状态、冲突与缺失；八项结构回归通过，研究语义仍需人工核对 |

| `skill.quiet-link-monitor` | [skills/quiet-link-monitor](skills/quiet-link-monitor/README.md) | 重复静默、故障恢复、三次异常暂停；八项本地测试通过，无消息投递 |

## 贡献

见手册 [添加提示词示例](/guide/contributing/add-a-prompt-example/)。

## 新增完整练习

- [销售 CSV 到可核对的周报](complete-workflows/creator/sales-weekly-report/README.md)：46 行合成数据、参考报告、独立核对脚本与完整下载材料。
- [三份资料到带来源的文章](complete-workflows/creator/source-backed-article/README.md)：合成资料、事实映射、冲突处理、初终稿差异与结构校验。
- [文章到八页可编辑演示稿](complete-workflows/creator/article-to-slides/README.md)：原生文本 PPTX、PDF、八页预览、来源备注、字体恢复与验证记录。
- [开发者路径配套材料](complete-workflows/developer/verified-bug-fix/path-materials/README.md)：代码阅读、差异审查与交接模板、作者参考和重新运行记录；配合已有购物车练习使用。

---

**最近更新：** 2026-09-18
