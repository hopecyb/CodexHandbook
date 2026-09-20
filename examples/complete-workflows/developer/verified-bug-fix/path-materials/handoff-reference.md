# 交接参考（作者填写）

目标：修复购物车百分比换算，保持原测试与 API。参考 solution 已通过三个测试，starter 保留故意设计的 Bug。

当前文件：参考修改只在 solution/cart.js 的折扣计算行，solution/cart.test.js 与 starter 测试相同。读者自己的 work/ 副本不在本记录验证范围内。未提交或推送。

证据：run-record.json、review-reference.md。2026-09-18 / Node.js v22.16.0 / Darwin arm64：starter 退出码 1，solution 退出码 0。

约束：不修改测试期望，不增加依赖，不改变函数签名；金额精度、税费和非法输入不纳入本练习。

下一步唯一动作：接手者在 verified-bug-fix 目录运行 node --test solution/cart.test.js，预期三个通过、退出码 0。先确认文件与本记录一致；若不一致，重新检查差异，不沿用历史结论。

停止条件：测试失败或文件被额外修改时，保存输出并定位差异，不能直接宣称任务已验收。接手者尚未执行这一轮检查，本记录不声称已完成独立交接验收。
