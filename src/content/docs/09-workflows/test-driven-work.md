---
title: 测试驱动工作
description: 先定义或补齐失败测试，再驱动实现——让 Codex 的修改可客观验收。
---

**测试驱动工作**（TDD 或「测试先行」变体）让验证自动化：Codex 先让测试红，再改实现变绿。适合有测试基建的代码库；与 [带验证的 Bug 修复](/10-use-cases/software-development/fix-a-bug-with-verification/) 案例直接相关。

## 这篇解决什么问题

- 何时要求「先写/先跑测试」
- 如何提示 Codex 不跳过测试步骤
- 测试失败时的回退策略

## 适合谁

- 已有单元/集成测试的仓库
- 回归 bug、API 行为变更、重构

不适合：无测试基建的原型、纯文案站的一次性改动（改用 [EPXV](/09-workflows/explore-plan-execute-verify/) 人工验证）。

## 最小可用做法

```text
1. 为期望行为写一个失败测试（或指出已有失败测试）
2. 只实现让该测试通过的最小代码
3. 跑相关测试套件，再跑全量
4. 不要为通过测试而删断言或 mock 掉真实逻辑
```

提示词：

```text
按 TDD：先为 @src/foo.ts 的「空输入返回 []」写失败测试；
运行测试确认失败后再改实现；每步只跑相关测试文件。
```

## 推荐工作流

| 阶段 | 产出 |
|---|---|
| 红 | 失败测试 + 失败原因说明 |
| 绿 | 最小实现 + 测试通过 |
| 重构 | 在测试保护下整理代码（可选单独步骤） |

与 [先诊断再修复](/09-workflows/diagnose-before-fixing/) 结合：先读失败断言与堆栈，再动实现。

## 常见错误

- 未运行测试就声称完成
- 修改测试迁就错误实现
- 只跑单个测试却宣称全绿
- 在 E2E 很慢的套件上反复全量跑——应用 `-t` 或文件级过滤

## 安全边界

- 测试命令应在 [命令规则](/06-customization/rules/command-rules/) 允许范围内
- 集成测试若触达生产 API，必须在规格中禁止或改用 mock

## 验收清单

- [ ] 有失败→通过的测试证据（日志或 CI）
- [ ] 全量或约定范围的测试通过
- [ ] diff 不含无关测试删除
- [ ] 与 [定义完成](/05-core-capabilities/prompting/define-done/) 一致

## 相关章节

- [运行测试](/05-core-capabilities/quality/run-tests/)
- [案例：带验证的 Bug 修复](/10-use-cases/software-development/fix-a-bug-with-verification/)

## 参考来源

- stormzhang 测试与质量章节
- CodexGuide 开发者工作流

---

**状态：** review  
**适用产品：** CLI / IDE  
**最近核验：** 2026-07-25
