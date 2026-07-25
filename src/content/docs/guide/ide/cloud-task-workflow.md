---
title: IDE 中的云端任务
description: 从 IDE 委托 Cloud 任务、跟进状态与审查远程产出。
---

部分 IDE 集成支持把任务**委托到 Cloud**——在远程标准化环境跑长任务，你继续在本地编辑或离开电脑。流程与纯 Cloud/Web 类似，但入口在编辑器侧。

## 这篇解决什么问题

- 何时从 IDE 发 Cloud 任务而非纯本地
- 委托前后要准备什么
- 如何把远程 diff 接回本地审查

## 适合场景

| 适合 Cloud | 坚持本地 |
|---|---|
| 依赖安装重、环境难复现 | 快速改两行 |
| 需要推送分支 / 开 PR | 未连接 GitHub |
| 长时运行、希望手机审批通知 | 含本机未提交敏感草稿 |

概念：[本地与云端](/guide/foundations/local-vs-cloud/)

## 前置条件

- [ ] [GitHub 已连接](/guide/web-and-cloud/connect-github/)
- [ ] Cloud [环境](/guide/web-and-cloud/cloud-environments/) 与 [Secrets](/guide/web-and-cloud/secrets-and-variables/) 已配置（若任务需要）
- [ ] 本地改动已 commit 或明确「以远程分支为准」

**IDE 不能代替 Cloud 访问你本机未推送的 commit。**

## 推荐流程

```text
1. IDE 中写好任务说明（目标、分支、约束、验收）
2. 选择「在云端运行」或等价入口（以产品 UI 为准）
3. 确认计划（若启用 plan 模式）
4. 离开或继续本地工作 → 通知/面板查看进度
5. 远程完成后：在 Web/App 看 diff → 开 PR 或 pull 分支到本地
6. 本地跑测试 + 人工 review → 合并
```

开 PR 细节：[创建 Pull Request](/guide/web-and-cloud/create-pull-requests/)

## 与桌面 App 委托的关系

桌面 App 的 [本地与云端任务](/guide/desktop-app/local-and-cloud-tasks/) 与 IDE 委托共享同一 Cloud 后端；差异主要在**入口 UI 与上下文附件**（IDE 可能附带当前选区摘要）。

## 安全边界

- Cloud 任务权限受 GitHub 连接范围与组织策略约束
- 不要在任务描述里粘贴生产密钥；用 [Secrets](/guide/web-and-cloud/secrets-and-variables/)
- 合并前仍须 [人工审查](/guide/web-and-cloud/code-review/)

## 常见错误

- 委托后在本机继续改同一文件，导致与远程分支冲突
- 未写分支名，远程直接推共享分支
- 把 Cloud 产出当「已验收」跳过 CI

## 参考来源

- stormzhang `10-cloud.md`、`09-ide.md`
- KimYx0207 CX-10 Cloud

---

**状态：** review  
**适用产品：** IDE / Cloud  
**最近核验：** 2026-07-25
