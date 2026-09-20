# 每次运行的共同任务包装

以下文本中的 `<RUN_DIRECTORY>` 替换为该次独立目录的绝对路径；除此之外保持一致。A/B 正文保存在各目录的 task.md。各次均新建 Agent，fork_turns=none，不覆盖模型或推理设置。

```text
Execute a bounded task in <RUN_DIRECTORY>. Read task.md there and carry out exactly that task with the supplied input. Work only inside this directory; do not inspect siblings, repository guidance/answers, or other experiments. Do not use network, other agents, external apps, messaging, commits or pushes. Available tool permissions are inherited. Maximum 900 seconds; stop and record incomplete if you cannot finish. Before starting save UTC start time to telemetry/start.json; record end time, actual model/reasoning identifiers only if known (otherwise null), encountered tool errors and task status in telemetry/end.json. Save every executed shell command and its resulting stdout/stderr in telemetry/tool-log.md without private internal reasoning; these telemetry files are separate from task outputs. Save final user-facing response in telemetry/final.md and reply with status and output paths. Do not invent timing, model identifiers or success. Do not read any scoring rubric or answers.
```

这是给 Agent 的操作约束，并非系统级文件访问隔离。没有向它们提供评分参考答案；复核者能看到变体标签，因此不属于盲审。
