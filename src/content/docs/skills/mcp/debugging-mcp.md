---
title: 调试 MCP 连接
description: MCP 服务器启不来、工具超时或结果异常时的系统化排查步骤。
---

MCP 把外部系统接进 Codex。失败时常见三类：**进程起不来**、**鉴权错**、**工具逻辑或超时**。本页给出检查顺序，避免反复改配置碰运气。

## 本页内容

- 最小复现 MCP 问题的方法
- 日志与配置核对清单
- 何时怀疑服务器实现而非 Codex

相关页面：[MCP 概述](/skills/mcp/mcp-overview/) · [连接 MCP 服务器](/skills/mcp/connect-an-mcp-server/)

## 分诊流程

```text
1. 服务器能否在终端单独启动？
2. 配置 JSON/TOML 语法与路径是否正确？
3. 环境变量是否在 MCP 进程中可见？
4. Codex 会话是否已重启加载新配置？
5. 单个工具调用是否超时/参数错误？
```

## 启动失败

| 检查项 | 说明 |
|---|---|
| 命令路径 | `npx`、`uvx`、绝对路径是否在 PATH |
| 依赖版本 | Node/Python 版本是否满足 MCP 服务器要求 |
| 手动运行 | 复制配置中的 command + args 在 shell 执行 |
| 传输方式 | stdio vs HTTP/SSE 是否与文档一致 |

## 鉴权失败

- API key 是否通过环境变量注入（非写进仓库）
- OAuth 类 MCP 是否过期需重新授权
- 公司代理是否阻断 MCP 出站

环境变量索引：[环境变量](/guide/reference/environment-variables/)

## 工具调用异常

| 现象 | 可能原因 |
|---|---|
| Tool not found | 服务器版本与客户端 schema 不匹配 |
| Timeout | 外部 API 慢；调大超时或优化查询 |
| 空结果 | 参数名错误；查 MCP 服务器日志 |
| 乱码 | 编码非 UTF-8 |

在 prompt 中要求 Agent **打印工具返回的结构**（脱敏）便于调试。

## 安全调试习惯

- 用**测试租户** API key，不用生产
- 调试日志不要粘贴完整 token 到聊天
- 怀疑恶意 MCP 时立即断开并轮换密钥

错误索引：[错误与提示参考](/guide/reference/error-reference/)

## 常见错误

- 改配置不重启 Codex 会话
- 在 IDE 与 CLI 各配一份不一致的 MCP
- 把 MCP 服务器日志级别永远开到 debug 提交截图含密钥

## 验收清单

- [ ] 能在终端独立启动 MCP 服务器
- [ ] 至少成功调用一个只读工具
- [ ] 记录团队标准 MCP 配置模板

## 参考来源

- Model Context Protocol 规范与调试指南
- KimYx0207 CX-07
- stormzhang `21-mcp.md`

---

**状态：** review  
**适用产品：** CLI / IDE / App  
**最近核验：** 2026-07-25
