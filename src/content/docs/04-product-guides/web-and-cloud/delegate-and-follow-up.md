---
title: 委托与跟进
description: 从 App、IDE 或手机把任务交给 Cloud，并在离开电脑后继续查看、审批与迭代。
---

**委托**是把任务交给 Cloud 在远程环境执行；**跟进**是在任务运行中或结束后查看进度、补上下文、审批危险操作、要求修改。这是「离开工位仍能推进」的核心工作流。

## 这篇解决什么问题

- 何时委托 Cloud 而非本地跑
- 从各入口发起委托的差异
- 如何有效跟进，避免「扔出去就忘了」

## 适合谁

| 场景 | 建议 |
|---|---|
| 长时间构建/测试 | 委托 Cloud，本地继续其他事 |
| 通勤/会议间隙 | 手机查看状态、批关键步骤 |
| 需要标准化环境 | Cloud + [环境配置](/04-product-guides/web-and-cloud/cloud-environments/) |
| 快速本地试错 | 优先 [桌面 App](/04-product-guides/desktop-app/) 或 [IDE](/04-product-guides/ide/local-task-workflow/) |

## 委托前检查

- [ ] [GitHub 已连接](/04-product-guides/web-and-cloud/connect-github/)，目标分支策略清楚
- [ ] 任务描述含：目标、范围、禁止项、验收方式（见 [好任务的结构](/05-core-capabilities/prompting/anatomy-of-a-good-task/)）
- [ ] 未推送的本地 commit 若必需，先 push 或改在本地做
- [ ] Secrets / [出网需求](/04-product-guides/web-and-cloud/internet-access/) 已就绪

## 各入口委托（概念）

| 入口 | 特点 |
|---|---|
| [桌面 App · 本地与云端任务](/04-product-guides/desktop-app/local-and-cloud-tasks/) | 同一项目视图切换本地/Cloud |
| [IDE · 云端任务](/04-product-guides/ide/cloud-task-workflow/) | 带着编辑器选中代码与打开文件上下文 |
| Web / 移动端 | 轻量查看、审批、补一句跟进 |

具体按钮与命名以当前产品为准。

## 推荐跟进节奏

```text
发起委托 → 确认环境已启动 →（可选）中途看日志
    → 危险操作点审批 → 任务完成看 diff/PR
    → 不满意：追加指令或新开跟进任务
```

### 中途介入

- **补上下文**：发现漏了文件或约束时，用跟进消息说明，避免重开任务丢失历史
- **收窄范围**：任务跑偏时明确「停止改 X，只做 Y」
- **审批**：见 [人工审批模式](/09-workflows/human-approval-patterns/)——宁可慢一步，不要批量通过未知 shell

### 结束后

- 在 [创建 PR](/04-product-guides/web-and-cloud/create-pull-requests/) 流程中审查 diff
- 用 [Cloud 代码审查](/04-product-guides/web-and-cloud/code-review/) 或本地 checkout 分支验证
- 需要继续改：在同一 PR 上追加委托，或本地接手

## 与通知配合

开启 [桌面通知](/04-product-guides/desktop-app/notifications/) 或移动端推送，避免长时间无人审批导致任务挂起。团队应约定：哪些时段必须有人能批生产相关仓库。

## 常见错误

- 委托语过于模糊，Cloud 自行「理解」导致大范围重构
- 本地已改一半未提交，却委托 Cloud 从远程 main 开工
- 从不中途查看，结束时才发现方向错误，浪费整轮环境时间
- 在 PR 上只写「LGTM」而不跑测试

## 验收清单

- [ ] 能从至少一个入口成功发起并完成一次 Cloud 任务
- [ ] 能在任务进行中追加一条有效约束
- [ ] 产出 PR 或分支，且经过人工 diff 审查

## 参考来源

- OpenAI Codex Cloud 任务文档
- stormzhang `10-cloud.md`、`27-mobile.md`
- KimYx0207 CX-10
- codex.bozhouai.com App/云端协作章节

---

**状态：** review  
**适用产品：** Cloud / App / IDE / Mobile  
**最近核验：** 2026-07-25
