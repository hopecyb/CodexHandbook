---
title: Cloud 环境
description: Codex Cloud 远程运行环境的构成、生命周期与团队配置要点。
---

“Cloud 环境”是 Codex 在远程执行任务时使用的工作机。

它会直接影响结果，包括操作系统、语言版本、工具链、网络策略，以及它拿到的是哪一个仓库分支。这一层主要用来解释一个常见问题：

> **为什么我本地能跑，Cloud 却失败？**

## 内容

- Cloud 环境与本地开发机的差异
- 环境如何与 GitHub 仓库、分支绑定
- 团队如何维护可复现的 Cloud 配置

## 先看这几件事

先看这三件事：

- Cloud 不会“读取你当前电脑的一切”，它只会看到远程环境里有的内容
- Cloud 跑任务时，也要面对“有没有依赖、版本对不对、网络能不能通”这些现实问题
- 你在本地没提交、没推送的东西，Cloud 默认看不到

可以先把 Cloud 理解成换了一台机器干活。

## 核心概念

```text
GitHub 仓库（某分支）
        ↓ clone / checkout
Cloud 环境实例（容器或 VM，以产品为准）
        ↓
Agent 执行任务：安装依赖、改代码、测试、推送
```

与 [连接 GitHub](/guide/web-and-cloud/connect-github/) 配合使用；环境**不能**访问你笔记本上未推送的 commit。

## 本地和 Cloud 的差别

- **本地任务**：Codex 在你眼前、围着你当前这台电脑工作
- **Cloud 任务**：Codex 被你派到一台远程机器上工作

这也是初次使用 Cloud 时常见的困惑来源：

- “为什么它看不到我本地刚改的文件？”
- “为什么它没有我电脑里那个全局安装的工具？”
- “为什么它连不上我本机开的数据库？”

多数时候，是**那台远程机器本来就没有这些东西**；问题出在环境本身。

## 环境包含什么（概念层）

| 组成部分 | 说明 |
|---|---|
| 基础镜像 | OS、常见构建工具 |
| 运行时 | Node、Python、Go 等（视镜像与任务而定） |
| 工作目录 | 克隆后的仓库路径 |
| 网络策略 | 是否允许出网、访问哪些域名 |
| 凭据注入 | [Secrets 与变量](/guide/web-and-cloud/secrets-and-variables/) |

具体镜像列表与自定义方式以 [官方 Cloud 文档](https://developers.openai.com/codex) 为准。

## 常见误会

### 1. 以为 Cloud 会自动继承你本机环境

不会。

你本机装过的 Node、Python、Homebrew、Chrome、数据库客户端，不会因为“你本地有”就自动出现在 Cloud。

### 2. 以为推了仓库就等于一切都准备好了

仓库代码只是起点，任务能不能成功还取决于：

- 依赖怎么安装
- 启动或测试命令是什么
- 需要哪些 Secret
- 网络策略是否允许访问外部资源

### 3. 以为 Cloud 失败说明 Codex 不行

很多 Cloud 失败，是环境没配齐，而不是任务不会做。

排查顺序可以是：

1. 仓库和分支对不对
2. 依赖和运行时版本对不对
3. Secret 和网络是否可用
4. 任务提示是否清楚

## 推荐配置流程

1. 在**测试仓库**完成首次 Cloud 任务，记录依赖安装命令
2. 把重复步骤写入仓库文档（`README`、`AGENTS.md` 或官方支持的 environment 配置文件）
3. 配置 [Secrets](/guide/web-and-cloud/secrets-and-variables/)（私有 registry、API key）
4. 确认 [互联网访问](/guide/web-and-cloud/internet-access/) 策略符合安全要求
5. 用同一环境模板跑 issue → PR 闭环验证

## 什么时候适合上 Cloud

可以按这个方式判断：

- 只是改你电脑上的项目、马上就想看结果：先本地
- 想把任务挂着跑、想让团队用统一环境、想远程接 GitHub：再用 Cloud

如果本地工作流还没跑顺，不用急着把问题升级成“Cloud 配置问题”。

## 与本地环境对齐

避免「本地绿、Cloud 红」：

| 实践 | 原因 |
|---|---|
| 锁定依赖版本（lockfile） | 可复现安装 |
| 在 `AGENTS.md` 写明安装与测试命令 | Agent 不猜 |
| CI 与 Cloud 使用相近 Node/Python 版本 | 减少版本漂移 |
| 大文件用 Git LFS 或构建时下载 | 克隆体积可控 |

## 生命周期

典型一次 Cloud 任务：

1. **创建/复用**环境实例
2. **准备**：clone、checkout 分支、安装依赖
3. **执行**：Agent 改代码、跑命令
4. **产出**：分支推送、PR、日志 artifact
5. **销毁或回收**（策略因产品而异）

长任务可在 [桌面 App 通知](/guide/desktop-app/notifications/) 或移动端跟进。

## 常见错误

- 假设 Cloud 已预装项目私有 monorepo 的全部工具链
- 依赖 `localhost` 服务（数据库、mock API）却未在环境中提供
- 首次就在生产仓库跑无边界任务
- 把“环境问题”误判成“模型能力问题”

## 安全边界

- 环境应视为**半信任**：仍须 code review 与分支保护
- 生产数据库连接串只通过 Secrets 注入，不进 prompt
- 定期清理不再使用的环境模板与 Secrets

## 参考来源

- OpenAI Codex Cloud environments
- stormzhang `10-cloud.md`
- KimYx0207 CX-10、CX-11

---

**状态：** outdated  
**适用产品：** Cloud  
**复核说明：** 本页涉及 Cloud 环境实例形态、生命周期、环境模板、与 GitHub 分支绑定方式等具体实现，当前缺少足够强的官方现行文档来逐条确认这些细节；在补齐 Cloud 环境正式资料前，不宜标为 `verified`。  
**最近核验：** 2026-07-26
