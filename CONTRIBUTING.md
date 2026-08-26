# 参与贡献

Codex Handbook 接受教程改写、事实核验、提示词、Skill、完整案例、图示和多语言贡献。简体中文正文是源版本。

开始前请阅读 [`STYLE_GUIDE.md`](STYLE_GUIDE.md) 和 [`docs/planning/README.md`](docs/planning/README.md)。

## 选择一种贡献

| 类型 | 主要目录 | 最低交付 |
|---|---|---|
| 教程或参考页 | `src/content/docs/guide/` | 目标读者、示例、验证、相关链接 |
| 提示词 | `src/content/docs/prompts/`、`examples/prompts/` | 适用场景、可复制模板、失败方式 |
| Skill | `src/content/docs/skills/`、`examples/skills/` | 触发边界、结构、权限、测试 |
| 完整案例 | `src/content/docs/cases/`、`examples/complete-workflows/` | 输入、过程、产物、验证、复盘 |
| 图示 | `public/diagrams/`、`docs/visual-sources/` | SVG/图片、alt 文本、源稿、清单记录 |
| 翻译 | `src/content/docs/<locale>/` | 源修订信息、术语检查、语言复核 |

## 工作流程

1. 检查是否已有权威页面，避免复制同一概念。
2. 确认页面属于指南、提示词、Skills 或案例中的哪一层。
3. 从最小可验证内容开始，补齐示例和失败路径。
4. 涉及产品事实时查阅 OpenAI 官方文档，并记录核验日期。
5. 新增图示时同步更新视觉资产清单。
6. 在 Node.js `>=22.12.0` 环境运行 `pnpm build`。
7. 阅读最终 diff，移除生成文件、真实凭据和无关改动。

## 内容状态

- `draft`：结构或事实仍不完整。
- `review`：内容写完，等待复核。
- `verified`：命令、链接、官方依据和适用范围都有当前证据。
- `outdated`：已知产品变化，暂不能按当前页面执行。

不要用自信语气代替证据。详情见[核验技术内容](src/content/docs/guide/contributing/verify-technical-content.md)。

## 可运行案例

完整案例使用独立目录，推荐包含：

```text
case-name/
├── README.md
├── brief.md
├── starter/
├── prompts/
├── solution/
└── validation.md
```

只创建实际需要的文件。`starter/` 可以故意包含问题，但必须在 README 和验证说明中明确哪些命令预期失败。`solution/` 必须能够独立验证。

## 图示贡献

- 优先使用 SVG 表达流程、架构、决策和对比。
- 图片不能代替正文；至少写一段文字说明图中关键关系。
- 中文图示需检查字体、换行、连接线和移动端缩放。
- 生成式图片不得包含水印、错误文字或版权不明元素。
- 记录资产路径、对应页面、用途、生成方式与源稿。

## 本地验证

```bash
pnpm install
pnpm build
```

若修改了简体中文正文，可额外检查繁体中文生成是否稳定：

```bash
pnpm i18n:zh-tw
node scripts/generate-zh-tw.mjs --check
```

构建失败时先修复当前改动造成的问题，不要提交 `dist/` 或 `.astro/`。

## 安全边界

- 不提交 API Key、Cookie、数据库地址、私人对话或客户数据。
- 示例只使用虚构组织、仓库和账号。
- 不把社区文章当作当前产品行为的唯一依据。
- 不提供绕过权限、审批或组织安全策略的操作步骤。

