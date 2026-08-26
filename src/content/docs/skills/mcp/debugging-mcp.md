---
title: 调试 MCP 连接
description: 按配置、传输、鉴权和工具四层定位 MCP 故障。
---

MCP 故障常被混成一句“工具不能用”。更快的做法是先判断失败发生在哪一层，再只改一个变量。

## 先保存四项证据

```bash
codex mcp list
codex mcp --help
node --version   # 仅当 STDIO 服务器使用 Node.js
python3 --version # 仅当 STDIO 服务器使用 Python
```

另外记录：服务器名、使用 STDIO 还是 Streamable HTTP、错误原文、发生在桌面 App/CLI/IDE 哪个表面。不要记录完整 token。

## 四层分诊

| 层 | 典型现象 | 第一检查 |
|---|---|---|
| 配置 | 服务器不在列表 | 文件路径、TOML 语法、服务器名、`enabled` |
| 启动/连接 | 初始化超时 | STDIO 命令与 PATH，或 HTTP URL、TLS、代理 |
| 鉴权 | 401/403、要求登录 | OAuth 状态、token 环境变量、scope |
| 工具 | 服务器在线但调用失败 | 工具名、参数、allowlist、工具超时 |

## 1. 确认配置确实被读取

- 用户级文件是 `~/.codex/config.toml`。
- 项目级文件是 `.codex/config.toml`，只在受信任项目中加载。
- 桌面 App、CLI、IDE 在同一 Codex host 上共享配置；不要为三者创建互相漂移的副本。
- 用 `codex mcp list` 或会话中的 `/mcp` 看实际状态，不以“文件存在”作为成功证据。

## 2. STDIO 服务器启动失败

检查 `command` 是否在 PATH，运行时版本是否满足服务器要求，`cwd` 是否存在，依赖包来源是否可信。

直接运行启动命令只能证明“可执行文件能启动”。MCP 服务器等待协议输入时看起来一直不退出可能是正常现象；不要把它当成完整工具调用测试。

初始化慢时才考虑提高 `startup_timeout_sec`。默认值是 10 秒，盲目改成很大只会掩盖错误命令。

## 3. Streamable HTTP 连接失败

按顺序检查：

1. URL 与 TLS 证书
2. 公司代理或 VPN
3. `bearer_token_env_var` 指向的环境变量是否存在
4. OAuth 是否需要重新执行 `codex mcp login <server-name>`
5. 服务端日志是否收到初始化请求

不要把 token 改成静态 `http_headers` 值来“临时排障”。这很容易进入配置文件和截图。

## 4. 服务器在线但工具不可用

| 现象 | 检查 |
|---|---|
| 工具完全不出现 | `enabled_tools` / `disabled_tools`、服务器返回的工具清单 |
| Tool not found | 服务端版本、工具重命名、会话是否仍持有旧清单 |
| 参数校验失败 | 对照工具 schema，不从旧提示词猜字段 |
| 调用超时 | 缩小查询，再核对 `tool_timeout_sec`；默认 60 秒 |
| 结果为空 | 用同一账号在源系统验证数据范围和过滤条件 |

## 最小复现提示词

```text
只检查 MCP 服务器 <server-name>：
1. 报告它当前可见的工具名称；
2. 调用 <readonly-tool>，参数只使用 <minimal-arguments>；
3. 原样保留错误类型与服务端消息，但隐藏凭据；
4. 不调用其他服务器，不执行写操作。
```

## 排障完成的验收

- [ ] `codex mcp list` 中状态符合预期
- [ ] 一个只读工具以最小参数成功
- [ ] 根因落在具体层级，而不是“重启后好了”
- [ ] 临时 token、debug 日志和宽权限已经撤回
- [ ] 团队配置与修复说明已更新

## 官方来源

- [OpenAI：Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)

---

**状态：** verified

**适用产品：** ChatGPT 桌面 App / Codex CLI / IDE

**最近核验：** 2026-08-25
