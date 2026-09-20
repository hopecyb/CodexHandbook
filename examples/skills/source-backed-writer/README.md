# source-backed-writer

版本 1.0.0，完整来源写作教学包。包含三份合成资料、风格样本、事实表格式、参考文章与修订差异、触发反例及结构检查。原创材料按 CC0 1.0 提供。

将整个目录放到练习项目 `.agents/skills/source-backed-writer/`，先确认没有同名自定义 Skill，避免覆盖。确认 SKILL.md 位于该目录第一层，在支持本地 Skills 的 Codex 环境中确认可选。安装机制见 https://learn.chatgpt.com/docs/build-skills 。

首次调用示例：

```text
$source-backed-writer 读取这套教学包 sources/ 中的三份资料，
按 references/style.md 写给个人作者的介绍，输出到 my-output/。
保留合成身份、事实表和未决清单，不发布。
```

依赖：阅读与写作本身不要求 Python。可选结构校验需要 Python 3.10+，仅标准库：

```sh
python3 scripts/check_article.py
python3 validation/test_checks.py
```

第一条检查随包参考稿。检查自己按教学格式写的稿件时，加 `--output my-output`。输出格式不同的真实任务不要强行套此校验器。

触发用例是设计预期，参考稿为作者自检结果，不是模型成功率。结构通过后仍需逐句事实检查与人工风格审阅。缺文件时先恢复资料；引用编号错误时修正映射；资料冲突时保留未确认，不用联网编造虚构产品信息。
