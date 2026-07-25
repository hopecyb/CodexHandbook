---
title: 生成物验收
description: 对 Codex 新建或导出的文件、报告与构建产物做系统化验收。
---

Agent 完成任务时可能新建报告、脚本、静态站点、测试数据等**生成物**。它们不一定经过你熟悉的代码审查路径——需要单独的验收习惯。

## 这篇解决什么问题

- 生成物与「改现有代码」的验收差异
- 检查清单
- 何时拒绝、要求重做

## 生成物类型

| 类型 | 验收重点 |
|---|---|
| 脚本 `.sh` `.py` | 可执行、无害、幂等 |
| 报告 `.md` `.html` | 事实准确、链接有效 |
| 构建输出 `dist/` | 是否应 gitignore |
| 测试夹具 | 无真实 PII |
| 配置模板 | 无默认弱密码 |

## 验收流程

```text
1. 打开产物（不要只看 Agent 文字总结）
2. 对照任务中的「完成定义」
3. 运行相关测试或预览命令
4. 检查路径、权限、体积
5. 决定：接受 / 局部修改 / 废弃重做
```

方法：[验证产物](/guide/quality/verify-artifacts/)、[完成定义](/guide/quality/definition-of-done/)

## 与 Git 的关系

- 明确哪些生成物**应提交**、哪些应 `.gitignore`
- 避免一次 PR 混入 megabytes 构建缓存
- 大产物用 CI artifact 或外部存储

## 不可信生成物

对不可信仓库或外部数据驱动的任务：

- 先读脚本再执行
- 警惕 `curl | bash`、混淆 payload
- 在沙盒或容器中预览

## 常见错误

- 只看 Agent 的 bullet summary 不打开文件
- 把一次性调试输出提交进 main
- HTML 报告含追踪像素或外联未审核脚本

## 验收清单

- [ ] 每个新文件路径在允许范围内
- [ ] 打开并扫读主要内容
- [ ] 自动化检查（lint/test/link check）已跑
- [ ] 无 secrets、无多余生成目录

## 参考来源

- [处理不确定性](/guide/quality/handle-uncertainty/)
- external-source-integration 案例验收要求

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
