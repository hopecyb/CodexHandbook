---
title: 修复 Bug：从哪里开始
description: 选择适合当前问题的 Bug 修复路径，并进入带可运行材料的完整案例。
---

这是一页短入口。完整步骤、可运行代码、红绿测试证据和逐阶段提示词统一维护在[带验证的 Bug 修复](/cases/use-cases/software-development/fix-a-bug-with-verification/)中，避免两个页面重复后逐渐产生冲突。

## 先判断你现在缺哪一步

| 当前情况 | 从这里开始 |
|---|---|
| 只有“结果不对”，还没有稳定复现 | [先诊断再修复](/cases/workflows/diagnose-before-fixing/) |
| 已有稳定失败测试 | [带验证的 Bug 修复](/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| 不熟悉相关模块 | [理解代码库](/cases/understand-a-codebase/) |
| 修复已经完成，准备合并 | [审查 PR](/cases/review-a-pr/) |
| 测试本身不稳定 | 先阅读[运行测试](/guide/quality/run-tests/)，不要把 flaky test 当作修复证据 |

## 最小闭环

无论使用哪种语言或框架，都要保住这条证据链：

1. 用明确命令稳定复现原问题。
2. 保存失败断言、错误输出和输入条件。
3. 先解释根因，再做最小修复。
4. 让原失败测试和新增边界测试通过。
5. 运行更大范围的回归检查。
6. 人工阅读 diff，确认没有无关改动。

只有第 4 步，没有第 1 步，不足以证明测试覆盖了原问题；只有“全量测试绿”，没有 diff 审查，也不足以证明修改范围正确。

## 可直接练习

仓库提供一个不依赖第三方包的 JavaScript 购物车折扣示例：

```bash
# 起始代码：1 个测试预期失败
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# 参考修复：3 个测试预期全部通过
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

完整材料位于 [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix)。

---

**状态：** verified  
**适用产品：** CLI / IDE  
**核验依据：** 本页作为入口只维护路径选择和稳定工程闭环；示例的预期失败与通过命令已在当前仓库实际运行验证。
**最近核验：** 2026-08-25
