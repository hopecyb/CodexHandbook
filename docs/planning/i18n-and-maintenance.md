# 多语言与内容维护规范

## 1. 语言策略

- 简体中文 `zh-CN` 为源语言。
- 当前发布语言为繁体中文 `zh-TW`、英语 `en`、法语 `fr`、日语 `ja`、韩语 `ko`、西班牙语 `es`、德语 `de`、葡萄牙语 `pt`、越南语 `vi`、泰语 `th` 和俄语 `ru`。
- 语言集合可扩展，不在目录设计中枚举上限。
- 翻译以含义、操作准确性和当地表达习惯为准，不做机械逐句替换。

## 2. 目录与标识

正文使用 Starlight 内容目录。简体中文为 root 语言（无 URL 前缀）；其他语言放在同构子目录下：

```text
src/content/docs/
├── guide/                  # zh-CN（root）
├── prompts/
├── skills/
├── cases/
├── ai-roadmap/
├── pets/
├── theme/
├── index.mdx
├── en/
│   └── guide/ ...
├── zh-tw/
├── fr/
├── ja/
├── ko/
├── es/
├── de/
├── pt/
├── vi/
├── th/
└── ru/
```

- 路径标识用小写（`zh-tw`）；BCP-47 语言标签在元数据与站点配置中用原形（`zh-TW`、`zh-CN`）。
- 所有语言使用相同目录层级、英文文件名和稳定页面 ID。
- 章节首页文件名为 `index.md`。
- 临时页面 ID = 相对 `src/content/docs/`（或 locale 根）的路径去掉扩展名。
- 页面标题、正文、图片说明和示例说明可以翻译。
- 命令、配置键、文件名、代码标识符和官方产品名原则上不翻译。
- 含文字的教学 SVG 必须使用目标语言版本，例如 `diagram-en.svg`、`diagram-ja.svg`；译文不得直接引用 `-zh-cn.svg`。
- 语言缺页时链接回源语言页面，并显示语言状态，不复制过期内容。

## 3. 页面翻译元数据

```yaml
id: core.prompting.prompt-basics
locale: ja
source_locale: zh-CN
source_revision: "<source-commit-or-content-revision>"
translation_status: reviewed
translated_at: YYYY-MM-DD
reviewed_at: YYYY-MM-DD
reviewers:
  - contributor-id
```

### 翻译状态

| 状态 | 含义 |
|---|---|
| `missing` | 尚无译文 |
| `draft` | 初稿，未复核 |
| `reviewed` | 已通过语言和技术复核 |
| `stale` | 源文更新后尚未同步 |
| `archived` | 对应内容已归档 |

## 4. 术语表

```text
glossary/
├── terms.yml
├── zh-cn.md
├── zh-tw.md
├── en.md
├── fr.md
├── ja.md
├── ko.md
├── es.md
├── de.md
├── pt.md
├── vi.md
├── th.md
└── ru.md
```

每个术语记录：

- 稳定术语 ID
- 官方英文名称
- 各语言推荐译法
- 不推荐译法
- 首次出现时的解释
- 是否保留英文
- 官方依据

同一语言中不得混用“任务/线程”“扩展/插件”等容易混淆的译法，除非产品界面本身有区别。

## 5. 产品界面与截图

- 正文优先描述稳定概念，避免依赖按钮颜色或临时布局。
- 操作必须使用当前界面上的准确名称。
- 截图按产品、平台和语言组织，不在多个页面复制同一文件。
- 截图元数据记录产品版本、平台、语言和拍摄日期。
- 界面变化但操作逻辑未变时，可只更新截图；行为变化时必须重新核验正文。

### 教学图示

- 当前仓库没有可执行的图示本地化生成器；`scripts/i18n/diagram-labels.<locale>.json` 只是现存标签资料，不能当作已完成生成的证明。
- 新增含文字图示时，应同时提交目标语言产物和生成/校验脚本；在恢复流水线前，不得在维护文档中引用不存在的 `i18n:diagrams` 命令。
- 目标语言可能比中文更长。提交前必须在桌面和移动视口检查节点溢出、连线遮挡和局部横向滚动。
- 纯装饰且不含文字的图片可以跨语言复用；包含界面文字的截图需要按目标语言重新拍摄或明确标注界面语言。

## 6. 翻译流程

1. 源语言页面达到 `review` 或 `verified`。
2. 确认页面 ID、结构和技术内容稳定。
3. 创建译文并记录源修订号。
4. 进行术语和链接检查。
5. 由目标语言读者完成语言复核。
6. 由熟悉 Codex 的复核者检查技术准确性。
7. 标记为 `reviewed` 并记录日期。
8. 源文变化时自动或人工标记译文为 `stale`。

机器翻译可以生成初稿，但不能直接标记为 `reviewed`。

仓库命令：

```bash
# 查看覆盖率、审校状态和 source_revision 新鲜度
pnpm i18n:status -- --locale en --stale

# 全站检查必须显式使用 --all；无改动页的增量检查会返回 SKIPPED
pnpm check:i18n -- --all --summary

# 将 source_revision 不一致的译文标记为 stale（不会推进 revision）
pnpm i18n:revisions

# 校验所有语言的 freshness 标记；应在 CI 使用
pnpm i18n:revisions -- --check

# 译者完成正文与技术复核后，只显式确认一个页面
pnpm i18n:revisions -- --confirm-reviewed \
  --locale ja \
  --page guide/start-here/index.md \
  --reviewed-at 2026-11-19

# 给所有译文中的站内内容链接补齐语言前缀
pnpm i18n:links

# 从简体中文生成繁体中文并保留本地化图片路径
pnpm i18n:zh-tw
```

## 7. 内容核验

易变化内容包括：

- 安装方式与平台支持
- 账号、套餐、额度和模型
- 命令、配置键和默认值
- 权限、沙箱和网络行为
- 产品界面与集成
- SDK、协议和自动化接口

这类页面必须使用当前 content schema 的字段：

```yaml
reviewed_at: YYYY-MM-DD
editorialStatus: verified
verification:
  kind: source-checked
  checkedAt: YYYY-MM-DD
  summary: 核验了哪些易变事实
  evidence:
    - label: 官方文档
      href: https://example.com/official-source
```

实际运行过的教程使用 `kind: run-tested`，并同时填写 `environment` 和至少一条可追溯证据。旧字段只作为历史兼容输入，不得用于新页面。

基础方法论和概念页也要复核，但可以采用更长周期。

## 8. 更新触发条件

- OpenAI 官方文档或变更日志发布新能力
- Codex App、CLI、IDE 或 Cloud 行为改变
- 示例无法按原步骤复现
- 链接失效或截图与界面明显不符
- 安全、权限或隐私规则变化
- 读者报告内容歧义或翻译错误

## 9. 贡献与审查

### 内容贡献

- 一个提交只解决一个清晰主题。
- 新页面必须说明所属内容层和目标读者。
- 不复制已有权威解释。
- 技术事实优先引用 OpenAI 官方资料。
- 教程必须包含验证或检查步骤。

### 翻译贡献

- 不修改稳定页面 ID 和英文路径。
- 遵循术语表。
- 保留命令、配置、代码和产品专有名称。
- 明确源修订号。
- 语言复核和技术复核职责可以由不同人员承担。

### 审查维度

1. 内容归属是否正确。
2. 初学者是否能理解必要前提。
3. 技术步骤是否可复现。
4. 权限和风险是否清楚。
5. 链接、元数据和术语是否一致。
6. 是否存在重复、过时或无法验证的结论。

## 10. 版本和发布

- 手册采用持续更新，不与单一 Codex 版本永久绑定。
- 内容发布记录新增、更新、过期和归档页面。
- 重大目录调整必须提供迁移映射，避免外部链接失效。
- 过时页面先标记 `outdated`；仍有历史价值时移入归档，不直接删除。
- 每次内容发布显示各语言的完成度、待复核数量和过期页面数量。
