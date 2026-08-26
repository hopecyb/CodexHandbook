# 多语言翻译与图片修复记录

检查日期：2026-08-26  
修复日期：2026-08-26

## 结论

已按中文源文档 `src/content/docs/` 修复审计中列出的多语言结构差异、图片断链和西语/葡语图表中文兜底问题。

当前状态：

- `en/fr/de/es/pt/vi/ja/ko` 均有 281 个页面。
- 所有语言相对中文源均无缺页、无多余页。
- 所有语言 `source_revision` 均为 current。
- changed-page parity 已全语言通过。
- 内部链接和图片引用检查已通过。
- 西语、葡语图表已由正式字典生成，不再使用中文源图兜底。
- Astro 站点构建已通过。

## 修复内容

### 图片断链

原先 `check-doc-links` 报 10 个缺失图片引用，集中在西语和葡语文档：

- `/diagrams/verified-bug-fix-workflow-es.svg`
- `/diagrams/subagent-orchestration-es.svg`
- `/diagrams/codex-client-selection-es.svg`
- `/diagrams/task-execution-loop-es.svg`
- `/diagrams/scheduled-task-safety-loop-es.svg`
- `/diagrams/codex-work-system-architecture-es.svg`
- `/diagrams/extension-selection-map-es.svg`
- `/diagrams/hook-lifecycle-events-es.svg`
- `/diagrams/codex-client-selection-pt.svg`

处理结果：

- 补齐 `scripts/i18n/diagram-labels.es.json`。
- 补齐 `scripts/i18n/diagram-labels.pt.json`。
- 通过 `node scripts/generate-localized-diagrams.mjs --locale es,pt` 生成 18 个正式本地化 SVG。
- 将临时指向英文图的 es/pt 文档引用切回本地化图。

### 翻译结构差异

原先 `node scripts/check-i18n-parity.mjs --summary` 的失败项已全部修复。

修复前：

| 语言 | 问题数 | 通过页数 |
| --- | ---: | ---: |
| en | 0 | 66/66 |
| fr | 66 | 44/66 |
| de | 0 | 66/66 |
| es | 107 | 31/66 |
| pt | 167 | 13/66 |
| vi | 166 | 13/66 |
| ja | 20 | 59/66 |
| ko | 166 | 13/66 |

修复后：

| 语言 | 问题数 | 通过页数 |
| --- | ---: | ---: |
| en | 0 | 66/66 |
| fr | 0 | 66/66 |
| de | 0 | 66/66 |
| es | 0 | 66/66 |
| pt | 0 | 66/66 |
| vi | 0 | 66/66 |
| ja | 0 | 66/66 |
| ko | 0 | 66/66 |

已修复的问题类型：

- 标题层级与中文源不一致。
- 代码块数量与中文源不一致。
- 表格数量与中文源不一致。
- 图片数量与中文源不一致。
- 有序列表数量与中文源不一致。
- 西语/葡语图表引用使用英文或中文兜底资源。

### 中文残留

已确认西语/葡语图表资源和字典中没有中文兜底文本：

```bash
rg -n "[\\u4e00-\\u9fff]" public/diagrams/*-es.svg public/diagrams/*-pt.svg scripts/i18n/diagram-labels.es.json scripts/i18n/diagram-labels.pt.json
```

该命令无输出。

仍可解释的中文残留：

- README 顶部语言导航中的“简体中文 / 繁體中文 / 日本語”。
- `glossary/en.md` 的中文术语列。
- `guide/contributing/write-a-guide.md` 中指向中文规划文档锚点 `#6-推荐页面模板` 的外部 GitHub 链接。

这些不是未完成翻译或缺图。

### Frontmatter 构建问题

在最终构建验证中发现并修复了 17 个 YAML frontmatter 问题：

- 含冒号的 `title` / `description` / `summary` 未加引号。
- 英文 roadmap 时间线页面中重复的 metadata key。

处理结果：

- 只机械修改 frontmatter，不改正文。
- 重新扫描 `src/content/docs` 下所有 Markdown / MDX frontmatter，解析错误数为 0。

## 验证结果

### Changed-Page Parity

```text
i18n changed-page parity
  source pages: 66
  locale checks: 528
  issues: 0
  by locale: en 0, fr 0, de 0, es 0, pt 0, vi 0, ja 0, ko 0
  passing pages: en 66/66, fr 66/66, de 66/66, es 66/66, pt 66/66, vi 66/66, ja 66/66, ko 66/66
```

命令：

```bash
node scripts/check-i18n-parity.mjs --summary
```

### 链接与图片

```text
Checked 10407 internal links and image references across 2844 source files.
```

命令：

```bash
node scripts/check-doc-links.mjs
```

### 西语/葡语图表生成一致性

```text
localized diagram generation (check)
  source diagrams: 9
  locales:         es, pt
  locale variants: 18
  written:         0
  unchanged:       18
```

命令：

```bash
node scripts/generate-localized-diagrams.mjs --locale es,pt --check
```

### Frontmatter 解析

```text
bad 0
```

命令：

```bash
node -e "const fs=require('fs'),path=require('path'),yaml=require('js-yaml'); function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name); if(e.isDirectory()) walk(f,a); else if(/\\.mdx?$/.test(e.name)) a.push(f)} return a} let bad=0; for(const f of walk('src/content/docs')){const s=fs.readFileSync(f,'utf8'); const m=s.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---/); if(!m) continue; try{yaml.load(m[1])}catch(e){console.log(f+': '+e.message); bad++}} console.log('bad',bad)"
```

### 构建

```text
[build] 2843 page(s) built in 30.69s
[build] Complete!
```

命令：

```bash
zsh -lc "source ~/.nvm/nvm.sh >/dev/null 2>&1 && nvm use 22 >/dev/null && pnpm build"
```

### 全语言覆盖与修订状态

每个语言均为：

```text
Missing:              0
Extra (no zh source): 0
Coverage:             100.0%
  current          281
  stale            0
  missing          0
```

命令：

```bash
for l in en fr de es pt vi ja ko; do
  echo "$l"
  node scripts/i18n-status.mjs --locale "$l" | rg "Missing:|Extra|Coverage:|current|stale|missing"
done
```

## 后续建议

脚本已经证明结构、链接、图片资源、覆盖率和 revision 均对齐。由于部分页面为批量结构同步，建议后续安排对应语言的技术母语审校，重点看 `es/pt/vi/ko/fr/ja` 中本轮 touched 的长页面表达是否足够自然。
