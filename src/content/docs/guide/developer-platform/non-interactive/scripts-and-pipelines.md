---
title: 脚本与流水线
description: 在 shell、Makefile 与 GitHub Actions 中编排 codex exec——可重复、可审计。
---

本章说明如何把 [codex exec](/guide/developer-platform/non-interactive/codex-exec/) 嵌入**脚本与 CI 流水线**，形成可版本化的自动化步骤。

## 这篇解决什么问题

- 本地脚本 vs CI job 的分工
- Prompt 与密钥的管理方式
- 与 [代码审查自动化](/guide/developer-platform/ci-cd/code-review-automation/) 的组合

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

## 常见错误

- Prompt 动态拼接 `${{ github.event.pull_request.body }}` 未转义（注入）
- 同一 PR 无并发控制，重复跑费配额
- 本地能过、CI 缺依赖（未 `npm ci`）
- 成功标准只有「跑完」，无结构化结论解析

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
