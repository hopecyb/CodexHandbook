---
title: 脚本与流水线
description: 在 shell、Makefile 与 GitHub Actions 中编排 codex exec——可重复、可审计。
---

这里讲的是，怎么把 Codex 从一次临时操作，变成**团队能反复跑、出了问题能追、换个人也能接手**的自动化步骤。

简单说，脚本负责把流程固定下来，流水线负责按规则重复执行。

本章说明如何把 [codex exec](/guide/developer-platform/non-interactive/codex-exec/) 嵌入 shell、Makefile 或 CI 流水线。

## 本页内容

- 本地脚本 vs CI job 的分工
- Prompt 与密钥的管理方式
- 与 [代码审查自动化](/guide/developer-platform/ci-cd/code-review-automation/) 的组合

## 这里要解决什么

“脚本与流水线”主要处理的是，把“我今天手工这样做了一次”，变成“团队以后都能按同样方式稳定重做”。

所以这里更看重三件事：

- 能重复
- 能审计
- 能交接

## 为什么很多团队不直接“把 prompt 贴进 CI 页面”

因为那样很难维护：

- 换了人接手，不知道当初怎么设计的
- 改一处逻辑，没法正常走 code review
- 任务失败后，很难知道是 prompt 变了、环境变了，还是脚本变了

把 prompt、脚本和规则放进 Git，其实就是在给自动化流程做“版本管理”。

## 常见误会

### 自动化更看重稳定，不是越早越好

很多人第一次做自动化，会急着把一整套流程全串起来。

但如果 prompt 还在频繁改、成功标准还没想清楚、权限边界还没收稳，越早自动化，后面越难排查。

### 脚本更适合拿来固定做法

一个好的脚本，会把原本靠人记忆的步骤变成人人看得懂、也能 review 的文件。

## 最小可用 Shell 片段

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

`prompts/ci/security-review.md` 纳入 Git，变更走 review。

## 最值得先养成的习惯

第一次做自动化时，别追求“大而全”，先把下面三样固定下来：

1. Prompt 文件放哪里
2. 入口脚本叫什么
3. 成功和失败怎么判断

这样以后你加日志、加 schema、加通知，都会顺得多。

## GitHub Actions 示意

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # 固定版本号，以官方安装文档为准
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
示例中的安装方式与权限 scope 须按组织安全要求调整；**勿**在 workflow 中 echo 密钥。
:::

## 推荐工作流

| 层级 | 内容 |
|---|---|
| 仓库 | `prompts/`、`tools/run-codex.sh` |
| CI | 只读 checkout、固定 CLI、上传 log artifact |
| 回调 | 可选 [Webhook](/guide/developer-platform/webhooks/overview/) 更新内部系统 |

## 怎么判断

如果某件事满足下面两个条件，它就很适合进入脚本或流水线：

- 你会反复做
- 你希望每次做法都尽量一致

例如：PR 审查、变更摘要、安全扫描、文档检查。

别在流程还没稳定时急着“全自动”；先把做法固定成脚本，再把脚本接进流水线，通常更稳。

## 常见错误

- Prompt 动态拼接 `${{ github.event.pull_request.body }}` 未转义（注入）
- 同一 PR 无并发控制，重复跑费配额
- 本地能过、CI 缺依赖（未 `npm ci`）
- 成功标准只有「跑完」，无结构化结论解析
- 自动化一上来就给过高写权限

## 安全边界

- CI token 最小权限；禁止 `git push` 除非独立审批 job
- Fork PR 的 workflow 慎用密钥（使用 pull_request_target 需安全评审）

## 验收清单

- [ ] Prompt 与脚本在 Git 中有版本
- [ ] CI 失败会阻断合并（若政策要求）
- [ ] Artifact 保留策略符合合规
- [ ] 与本地 `make review` 行为一致

## 参考来源

- OpenAI Codex + GitHub 集成文档
- codex.bozhouai.com 自动化章节

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25
