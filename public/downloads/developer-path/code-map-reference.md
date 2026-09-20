# 代码阅读参考（作者填写）

范围：verified-bug-fix/starter，两份 JavaScript 文件；不是对任意仓库的概括。

- 入口：cart.js:1 的 calculateTotal(lines, discountPercent = 0)，返回总额数值。
- 数据路径：cart.js:2 遍历 lines，将 price * quantity 累加为 subtotal；第 3 行计算 discount；第 5 行返回 subtotal - discount。
- 测试：cart.test.js 包含空购物车、无折扣、10% 折扣三个行为；使用 Node.js 内置测试。
- 复现：[{price:20, quantity:2}] 与 10。小计 40，期望 36；现实现折扣 400，实际 -360。
- 根因：百分比 10 被当成比例 10，缺少除以 100。最小修改落在 cart.js:3。
- 约束：函数名、参数、返回类型、测试期望不变；不扩展到货币精度、税费和非法输入。
- 下一步：在练习副本修正百分比换算，运行同一组测试，再审查文件差异。
