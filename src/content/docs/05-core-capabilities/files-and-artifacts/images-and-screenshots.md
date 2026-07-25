---
title: 图像与截图
description: 向 Codex 提供截图、设计稿，并管理任务中的图像文件。
---

图像让 Agent **看见**界面问题、设计意图或白板草图。本页涵盖输入（你提供的图）与仓库内图像文件管理；生成新图见 [图像生成](/05-core-capabilities/tools/image-generation/)。

## 这篇解决什么问题

- 如何附加截图最有效
- 设计稿 / Figma 导出如何使用
- 图像在仓库与上下文中的体积问题

## 输入图像的场景

| 场景 | 做法 |
|---|---|
| UI bug | 截图 + 标出异常区域文字说明 |
| 设计还原 | 导出 PNG + 写明断点与组件库 |
| 架构白板 | 清晰照片或导出图 + 图例说明 |
| 报错弹窗 | 含完整错误文本，避免只截一角 |

深度：[图像提示](/05-core-capabilities/prompting/prompting-with-images/)

## 质量要求

- **分辨率**：文字可读，避免模糊缩略图
- **裁剪**：去掉无关桌面、通知栏敏感信息
- **标注**：箭头/圈选可用，但应用文字复述关键点
- **多图**：按「当前 / 期望」配对上传

## 仓库中的图像

| 实践 | 原因 |
|---|---|
| `assets/` 或 `docs/images/` 统一目录 | 便于维护 |
| WebP/压缩 | 控制 clone 体积 |
| 有意义的文件名 | `login-form-mobile.png` 而非 `image1.png` |
| alt 文本（文档内） | 可访问性 |

## 隐私与安全

- 截图可能含客户数据、内部 URL、token——先打码
- 不要把含密钥的配置界面发给不可信任务
- [敏感上下文](/05-core-capabilities/context/sensitive-context/)

## 验收

对「按图实现」类任务：

1. 并排对比实现与参考图（或 [浏览器工具](/05-core-capabilities/tools/browser/) 打开页面）
2. 检查响应式与深色模式（若要求）
3. [验证产物](/05-core-capabilities/quality/verify-artifacts/)

## 常见错误

- 只给设计稿不给交互说明
- 4K 原图直接 commit
- 假设模型能读取 Figma 链接而不导出

## 参考来源

- codex.bozhouai.com 前端案例（结构参考）
- stormzhang 多模态章节

---

**状态：** review  
**适用产品：** App / IDE / Cloud  
**最近核验：** 2026-07-25
