# scoped-review：明确范围的审查 Skill

版本 1.0.0。适合审查已暂存、未暂存、全部未提交或相对明确基线的代码变更。依赖 Python 3.10+、Git，以及至少有一次提交的仓库；不依赖第三方 Python 包，不需要 GitHub token。

## 安装到一个项目

1. 解压下载包，确认 `scoped-review/SKILL.md` 和 `scripts/collect_diff.py` 存在。
2. 将整个 scoped-review 目录放到目标项目的 `.agents/skills/` 下。已有同名目录时先比较，不覆盖已有自定义 Skill。
3. 确认路径为 `.agents/skills/scoped-review/SKILL.md`，不要多嵌套一层。
4. 在支持本地 Skills 的 Codex 环境中查看是否可选；未出现时按当前客户端文档重新加载或重启。
5. 显式调用 `$scoped-review 审查当前未提交改动，不修改文件`。先在合成练习仓库中试用，再用于真实工作。

本地发现机制与使用范围以 https://learn.chatgpt.com/docs/build-skills 为准。本包只做本地项目安装说明，不自动写入你的个人 Skills 或上传插件商店。

## 不安装也能验证脚本

在本包目录运行：

```sh
python3 validation/test_scopes.py
```

测试在临时目录构造 Git 仓库，运行七项范围检查；不改当前项目的分支、暂存区或文件。需要本机 Git 可用。测试通过只证明收集器边界，不证明模型能发现所有代码问题。

实际收集示例：

```sh
python3 scripts/collect_diff.py --repo /path/to/repo --mode working-tree
```

需要保存 JSON 时，将标准输出重定向到你选择的文件。报告可能包含私有代码，不自动上传或发送。详见 references/scopes.md。

## 教学材料

- fixtures/scenario.json：合成仓库的输入状态。
- fixtures/expected-review.md：各范围下应如何理解同一个错误的作者参考。
- fixtures/trigger-cases.json：应触发、不应触发和需澄清的请求；它是预期用例，不是自动触发测量结果。
- references/report-template.md：可复制报告格式。
- validation/record.md：实际执行与未验证边界。

## 失败与停止

无 HEAD、基线不存在或 merge-base 不唯一时，脚本返回退出码 2；明确修正仓库或比较范围，不回退到 main。不支持的二进制、子模块和未跟踪内容必须单独处理或列为未审；不能用一个空 patch 宣称全面通过。审查不自动授权修改、提交或推送。
