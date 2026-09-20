# quiet-link-monitor

v1.0.0，Python 3.10+ 标准库，CC0 原创合成样本。复用 docs-link-audit 的检查器，在每次手动运行后保存状态与变化事件。它不会创建定时任务或发送通知。

完整目录放到练习项目 `.agents/skills/quiet-link-monitor/`，不要覆盖同名 Skill。确认客户端可选后调用：

```text
$quiet-link-monitor 使用包内样本演练失败、重复检查和恢复。
在临时副本操作，保存独立状态，最后报告事件变化，不发送通知。
```

在本包目录先执行自动演练：

```sh
python3 validation/test_monitor.py
```

手动试用时，把 fixtures/broken 复制为自己的 work-site，状态放在其外：

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

首次退出 1，生成候选事件；第二次仍退出 1，但 new_event 为 null。参照 fixtures/fixed 修正同一 work-site 后再运行，退出 0 并生成 recovered。不要切换成另一个 site 路径来模拟恢复，状态会拒绝范围变化。

三次执行异常会暂停。检查并修复原因后显式恢复：

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

状态写入范围、停止条件及投递局限见 references/operations.md。模型路由、真实调度器与消息投递没有实测；结构和状态测试不能证明这些环节完成。
