# Issue 分流干运行练习

v1.0.0，CC0 原创合成资料。Python 3.10+ 标准库，无 token、API、第三方库或网络要求。

从本目录运行：

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

第一条读取五份合成 Issue 和作者参考建议，输出待人工复核队列；它没有调用模型。自己练习时把 prompts/triage.md 交给 Codex，生成 my-proposals.json 后执行：

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

schema.json 是合法 JSON Schema 2020-12 文档；脚本只实现此包使用的关键字子集，不是通用 JSON Schema 引擎。输入哈希绑定完整 Issue JSON（UTF-8、键排序、无额外分隔空格），防止建议套用到已改变的输入。重复、遗漏、越界标签和额外字段会停止整批输出，退出码 1。

正常退出码 0 只代表结构与绑定检查通过；所有项仍为 human-review-required，external_actions 恒为空。参考建议为作者设计，没有自动标签准确率、提示注入抵抗率或真实 CI 成功声明。人工复核见 solution/human-review.md。

本包只负责分流建议，排程、通知去重和连接生产系统需在单独明确授权的流程中设计。缺信息保留 unknown；校验失败先修正具体字段或重新分析新输入，不能直接绕过校验。
