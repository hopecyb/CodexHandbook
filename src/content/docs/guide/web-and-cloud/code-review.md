---
title: Cloud 代码审查
description: 审查 Cloud 任务产出的 diff、PR 与自动化审查建议。
---

Cloud 会帮你产出改动，但不会替你承担合并责任。

Cloud 任务结束后，**人的审查**仍是合并前的最后一道门。本页说明如何审查远程 Agent 产出，并与 GitHub PR、CI、Skill 审查衔接。

## 内容

- Cloud PR 与本地 PR 审查有何不同
- 审查清单与常见风险点
- 如何用 Codex 辅助审查而不放弃责任

## 为什么 Cloud 审查要更留心一点

因为远程 Agent 更容易出现这类情况：

- 顺手改到无关文件
- 因环境差异产生大量 lockfile 或生成文件变化
- 测试看起来跑了，但没真正覆盖关键逻辑
- PR 描述写得很完整，但你还没确认内容是否属实

所以 Cloud 审查不会更轻，反而更需要抓重点。

## 审查在流程中的位置

```text
Cloud 任务完成 → 推送分支 → 开 PR
        ↓
CI 运行（测试、lint、安全扫描）
        ↓
人工审查 diff + 可选 Agent 辅助审查
        ↓
批准合并（受分支保护约束）
```

开 PR：[创建 Pull Request](/guide/web-and-cloud/create-pull-requests/)

## 最低检查标准

完整审查之前，至少先确认四件事：

1. 改动范围有没有跑偏
2. 关键逻辑是不是真的按目标改了
3. 测试或验证有没有真正做
4. 有没有把敏感信息或危险改动带进去

这四项没有确认之前，还不能把“任务完成”当成“可以合并”。

## 人工审查清单

与 [审查 diff](/guide/quality/review-diffs/) 一致，Cloud 场景额外关注：

| 检查项 | 原因 |
|---|---|
| 是否改了无关文件 | 远程 Agent 可能「顺手」重构 |
| lockfile / 生成文件 | 环境差异导致大规模变更 |
| 新依赖来源 | 供应链风险 |
| 测试是否真覆盖新逻辑 | Agent 可能写空测试 |
| 权限与认证改动 | 提权、硬编码 token |
| 与 issue 范围一致 | 防止 scope creep |

## 常见误会

### 1. CI 绿了，就等于可以合并吗

CI 只能说明“这组自动检查没挂”。需求是否理解对、范围是否跑偏、风险是否可接受，还是要靠人工判断。

### 2. 它自己写的 PR 描述很完整，所以我可以少看一点吗

也不行。

PR 描述只能帮你更快进入上下文，不能替你核实事实。

### 3. 让 Codex 再审一次，就等于完成审查吗

辅助审查很有用，但最终责任仍在人。

## 用 Codex 辅助审查（不替代人）

可接受的做法：

- 本地或 Cloud 对新 PR 跑 `$pr-review` Skill（见 [创建 Skill](/skills/create-your-first-skill/)）
- 要求列出「阻断 / 建议 / nit」三类意见
- **你**对阻断项逐条确认

不可接受：

- 未读 diff 仅凭 Agent「说没问题」就合并
- 让 Agent 自行 approve 受保护分支

见 [验证与人工复核](/guide/foundations/verification-and-human-review/)

## 建议顺序

可以按这个顺序看：

1. PR 标题和描述，确认目标
2. 主要逻辑 diff
3. 测试、生成文件、配置文件
4. 自动化评论和补充建议

这样可以避免一上来被大量细节淹没。

## 审查评论驱动修订

PR 收到 review 评论后：

1. 新开 Cloud 或本地任务：「仅处理以下 review 评论，不要扩大范围」
2. 附上评论链接或编号
3. 推送新 commit 到同一 PR
4. 再次跑 CI + 人工看一眼增量

GitHub 侧：[GitHub 集成](/guide/integrations/github/)

## 与 Automations 结合

- PR 打开时自动跑审查 Skill（只评论，不 merge）
- 详见 [定时与触发任务](/skills/automations/scheduled-tasks/)

## 常见错误

- 信任 Cloud 环境「隔离」而跳过安全审查
- 合并巨大 diff 因为「CI 绿了」
- review 评论粘贴未脱敏的生产日志
- 把“我没发现问题”误当成“确实没有问题”

## 验收清单

- [ ] CI 全绿且你理解失败重试历史
- [ ] 至少一人读过主要逻辑 diff
- [ ] 与 issue/任务描述范围一致
- [ ] 无 Secrets 进入仓库

## 参考来源

- stormzhang `26-git-github.md`
- KimYx0207 Review/PR 章节
- [人工审批模式](/cases/workflows/human-approval-patterns/)

---

**状态：** review  
**适用产品：** Cloud / GitHub  
**最近核验：** 2026-07-25
