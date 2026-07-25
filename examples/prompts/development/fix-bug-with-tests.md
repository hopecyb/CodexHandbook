---
id: prompt.fix-bug-with-tests
title: 修复 Bug 并补充测试
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: 2026-07-25
---

# 使用场景

仓库中已有**失败单元测试**或你能指出失败用例，需要最小修复并防止回归。对应手册案例：[带验证的 Bug 修复](/10-use-cases/software-development/fix-a-bug-with-verification/)。

# 使用前准备

- 本地可运行项目测试命令（见 `AGENTS.md` 或 `package.json`）
- 在修复分支上工作；不要对 `main` 直接改
- 确认 [命令规则](/06-customization/rules/command-rules/) 允许测试命令

# 推荐版提示词

```text
先不要改代码。阅读失败测试 @<path-to-test> 与相关实现 @<path-to-src>，
用 5 条以内说明失败原因，引用断言与堆栈行号。

然后给出修复计划：涉及文件、是否需新测试、如何验证。
等我回复「执行」后再改代码。

执行时：只实现让测试通过的最小改动；每步后只跑相关测试文件；
最后跑完整测试套件。不要 git push。
```

# 验收标准

- [ ] 原失败测试通过
- [ ] 项目约定的全量或 CI 同级测试通过
- [ ] diff 无无关文件、无删除断言「凑绿」
- [ ] 未执行 `git push` 或未经批准的远程写操作
- [ ] 能用一句话向 reviewer 说明根因

# 常见失败方式

- 未先读测试就改实现，修错模块
- 只跑单个测试却声称全绿
- 修改测试迁就错误行为

# 相关内容

- [测试驱动工作](/09-workflows/test-driven-work/)
- [先诊断再修复](/09-workflows/diagnose-before-fixing/)
- [运行测试](/05-core-capabilities/quality/run-tests/)
