# 带验证的 Bug 修复

这个案例用 Node.js 内置测试演示完整证据链：先证明起始代码失败，再做最小修复，最后证明同一组测试通过。

## 目录

```text
verified-bug-fix/
├── brief.md
├── starter/      # 故意保留 Bug，练习从这里开始
├── prompts/      # 探索、修复、Review 三段提示词
├── solution/     # 独立可运行的参考答案
└── validation.md
```

## 快速验证

从仓库根目录运行：

```bash
# 预期失败：3 个测试中 1 个失败
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# 预期通过：3 个测试全部通过
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

第一条命令返回非零状态是案例设计的一部分，不代表仓库测试损坏。

## 练习方式

1. 阅读 [`brief.md`](brief.md)，不要先看 `solution/`。
2. 用 [`prompts/01-explore.md`](prompts/01-explore.md) 让 Codex 只读定位根因。
3. 复制 `starter/` 到你自己的临时练习目录，再执行修复提示词。
4. 保存修复前失败和修复后通过的测试摘要。
5. 用 Review 提示词检查是否通过修改测试“伪造绿灯”。
6. 最后与 `solution/` 对照。

对应教程：[案例：带验证的 Bug 修复](../../../../src/content/docs/cases/use-cases/software-development/fix-a-bug-with-verification.md)。
