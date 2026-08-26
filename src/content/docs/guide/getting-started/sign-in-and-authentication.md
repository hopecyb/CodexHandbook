---
title: 登录与身份验证
description: 在本地客户端与 Cloud 中选择正确登录方式，并安全检查活动身份。
sidebar:
  order: 60
---

Codex 使用 OpenAI 模型时有两种个人登录方式：

- **使用 ChatGPT 登录**：使用订阅额度，并继承 ChatGPT 工作区权限和数据策略。
- **使用 API key 登录**：按 API 用量计费，并继承 API organization 的数据与管理策略。

ChatGPT 桌面 App、Codex CLI 和 IDE 集成的本地工作支持这两种方式；**Codex Cloud 要求使用 ChatGPT 登录**。

## 使用 ChatGPT 登录

本地客户端会打开浏览器完成授权，再把凭据返回客户端：

- 桌面 App：在退出登录页面选择继续登录。
- CLI：运行 `codex login`。
- IDE：在退出登录页面选择使用 ChatGPT 登录。

登录后检查活动账号与工作区，尤其是在个人空间和公司工作区并存时。

## 使用 API key 登录

在 OpenAI Platform 创建 key 后，不要把它直接写进命令历史。CLI 使用标准输入：

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

桌面 App 从“使用其他方式登录”进入，IDE 从“Use API Key”进入。API key 适合本地工作和受信任的 CI，但无法提供依赖 ChatGPT 工作区或 Cloud 的能力。

## 检查与退出 CLI 身份

```bash
codex login status
codex logout
```

CLI 与 IDE 会共享缓存的登录信息；从其中一个退出后，另一个下次启动时也可能需要重新登录。

## 凭据安全

- 不要提交 `~/.codex/auth.json`，也不要贴到工单、聊天或日志。
- 优先使用操作系统凭据存储；文件存储中的 token 应按密码处理。
- CI 使用专用、可撤销凭据，不复用个人长期 key。
- Codex Cloud 直接访问代码仓库，应为账号启用 MFA；组织 SSO 应由管理员强制 MFA。
- 不要为了绕过组织限制改用私人 key；先确认工作区和托管策略。

## 登录成功但仍不能使用

按这个顺序排查：

1. 当前账号或 API organization 是否正确。
2. 是否进入正确 ChatGPT 工作区。
3. 目标能力是否要求 ChatGPT 登录而不是 API key。
4. 计划、席位、角色或管理员策略是否限制访问。
5. 最后再检查客户端缓存、网络和版本。

CLI 登录有专用日志，可在官方支持或登录排障需要时使用；日志仍应先做敏感信息检查。

计划边界见 [账号、套餐与访问](/guide/getting-started/account-plans-and-access/)，完整细节以 [官方 Authentication 页面](https://learn.chatgpt.com/docs/auth) 为准。

---

**状态：** verified

**适用产品：** App / CLI / IDE / Cloud

**核验依据：** 已对照当前官方 Authentication 页面，核实 ChatGPT 与 API key 两种本地登录、Cloud 的 ChatGPT 登录要求、CLI 命令、缓存共享与凭据存储边界。

**最近核验：** 2026-08-26
