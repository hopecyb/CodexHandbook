---
title: 演示文稿
description: 幻灯片与演示稿的生成、改版与导出——结构、母版与演讲备注的约定。
---

演示文稿（PPT、Keynote、Google Slides、Marp/Reveal 等）强调**叙事结构**与**视觉一致性**。Agent 擅长出大纲和初稿，母版与品牌规范仍需人把关。

## 这篇解决什么问题

- 用 Codex 做幻灯片时的推荐工作流
- 不同格式（`.pptx`、Markdown 幻灯片）的取舍
- 如何避免「每页风格割裂」

## 先定交付格式

| 格式 | 适合 |
|---|---|
| Marp / Slidev / reveal.md | 开发者、版本管理友好 |
| `.pptx` | 商务汇报、与客户共享 |
| Google Slides | 实时协作（常经导出或 MCP） |
| PDF 导出 | 只读分发 |

在任务开头写死格式，避免 Agent 混用多种工具链。

## 推荐工作流

```text
1. 大纲：受众、时长、3～5 个核心信息
2. 每页标题 + 3 bullet，备注讲稿要点
3. 选定工具生成初稿
4. 人工调整母版、图表、数据出处
5. 导出 PDF 彩排计时
```

与 [探索—计划—执行—验证](/09-workflows/explore-plan-execute-verify/) 一致：大纲阶段先验收再填细节。

## Prompt 要点

- **受众**：技术同事 vs 管理层，决定术语深度
- **页数上限**：防止 80 页废话
- **品牌**：主色、 logo 路径、禁止 clipart（若公司有规范）
- **数据图**：注明数据来源文件，要求可更新而非截图瞎编

图像需求见 [图像与截图](/05-core-capabilities/files-and-artifacts/images-and-screenshots/)；纯生成图见 [图像生成](/05-core-capabilities/tools/image-generation/)。

## 验收

- 投影分辨率下字号可读
- 动画适度（过多动画难维护）
- 数字与 [验证来源](/05-core-capabilities/quality/validate-sources/) 一致
- 演讲备注是否足够（若需要）

## 常见错误

- 没有大纲直接「做一份季度汇报 PPT」
- `.pptx` 二进制反复手改却不保留 Markdown 源
- 图表数据与仓库 CSV 不一致

## 验收清单

- [ ] 大纲经人工确认后再生成全文
- [ ] 在目标播放环境打开无字体错乱
- [ ] 关键数据可追溯到源文件

## 参考来源

- codex.bozhouai.com 演示与汇报案例
- stormzhang 内容创作相关章节
- baoyu-slide-deck 类社区实践（结构参考）

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
