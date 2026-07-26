---
title: 搭建网站
description: 从需求到可预览页面的原型搭建案例。
---

# 搭建网站

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 创作者 / 开发者 |
| 客户端 | App / IDE |
| 预估耗时 | 2–4 小时 |

## 1. 目标与背景

**目标：** 基于简单需求搭建可本地预览的静态页面或小型站点。

**成功标准：** 在浏览器中可打开、样式符合描述、无无关文件改动。

## 2. 推荐提示词

```text
目标：为【产品/活动】做一个单页落地页，含标题、三特性、CTA 按钮。
技术：HTML + CSS（或项目已有框架），移动端友好。
约束：只改 src/ 下页面相关文件；不要引入新依赖除非我批准。
验收：pnpm dev 可预览；截图说明主要区块。
先给线框计划，等我确认再写代码。
```

## 3. 验证

- 本地预览各断点
- 检查是否误改配置或锁文件

## 4. 相关

- [创建模板](/prompts/templates/create/)
- [产物优先工作](/cases/workflows/artifact-first-work/)
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** OpenAI Developers 当前 Codex use cases 仍包含“Get from idea to proof of concept”“Build responsive front-end designs”“Deploy an app or website”等前端构建场景；本页示例限定为小型站点或落地页原型，并要求先出线框、限制改动范围、用浏览器预览验收。  
**最近核验：** 2026-07-26
