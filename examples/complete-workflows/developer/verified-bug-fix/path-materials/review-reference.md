# 修复审查参考（作者填写）

范围：starter/cart.js 与 solution/cart.js；同时比较两份 cart.test.js。审查日期 2026-09-18。不是对整个站点工作区做审查。

## Findings

本次有限范围未发现阻断问题。根因行从 subtotal * discountPercent 改为 subtotal * (discountPercent / 100)。函数签名、返回方式和累计小计逻辑未变。

## 证据

- 在练习根目录运行 node --test starter/cart.test.js：退出码 1，三个测试中两个通过、一个失败；折扣案例实际 -360，期望 36。
- 运行 node --test solution/cart.test.js：退出码 0，三个全部通过。
- 两份 cart.test.js 字节相同，未通过修改断言伪造绿灯。
- 改动只涉及百分比换算；未新增第三方依赖。机器记录见 run-record.json。

## 限制与决定

在 brief.md 规定的三个业务行为范围内可接受。未覆盖负折扣、超过 100% 折扣、缺字段、货币精度或真实业务集成；这些不在练习范围。此处是作者自审，不代表独立审稿、合并批准或生产上线判断。
