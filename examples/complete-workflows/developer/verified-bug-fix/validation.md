# 验证说明

## 修复前

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

预期：退出状态非零；3 个测试中 2 个通过、1 个失败；折扣测试显示实际值 `-360`，期望值 `36`。

## 修复后

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

预期：退出状态为 0；3 个测试全部通过。

## 参考 diff

```diff
- const discount = subtotal * discountPercent;
+ const discount = subtotal * (discountPercent / 100);
```

## 为什么需要两次运行

修复后绿灯只能证明当前实现通过测试。修复前同一测试确实为红灯，才能证明它覆盖了原始缺陷。两份证据和最小 diff 合在一起，才构成完整回归证据。

