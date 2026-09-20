已修复百分比折扣：将折扣百分数除以 100，保持 calculateTotal 接口不变。

原测试：`node --test cart.test.js`，退出码 1，2 项通过、1 项失败。
修复副本使用相同命令和未修改的测试，退出码 0，3 项全部通过。

修复：`output/cart.js`。原始与修复后的 stdout、stderr、退出码及 `implementation.diff` 均保存在 `output/`。
未运行：lint、类型检查、构建及其他测试。未提交或推送。
