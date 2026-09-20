已修复百分比折扣：先将折扣百分比除以 100，再计算折扣金额。现有接口保持不变，测试未修改。

修复文件：[output/cart.js](<EXPERIMENT_ROOT>/run-12/output/cart.js)。运行 `node --test output/cart.test.js`，3 项测试全部通过。未提交或推送。
