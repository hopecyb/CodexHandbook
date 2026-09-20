# 收集命令与范围

依赖：Python 3.10+、Git、至少有一个提交的本地仓库。工具不联网、不 fetch、不切分支、不暂存、不提交。目标目录可以是仓库子目录，收集时从仓库根处理。

从 Skill 目录执行（将 /path/to/repo 替换为用户明确的仓库）：

```sh
python3 scripts/collect_diff.py --repo /path/to/repo --mode staged
python3 scripts/collect_diff.py --repo /path/to/repo --mode unstaged
python3 scripts/collect_diff.py --repo /path/to/repo --mode working-tree
python3 scripts/collect_diff.py --repo /path/to/repo --mode branch --base release-branch
```

`release-branch` 是示意名称，必须替换为用户实际要求、当地可解析的基线。不存在的基线、多 merge-base、无提交仓库直接报错，不偷偷改用 main。

输出 JSON 包含 HEAD、解析后的基线与 merge-base、各部分路径和完整补丁，以及未跟踪路径清单。branch 只审提交差异，本地未提交改动不混入；清单中的未跟踪文件只是状态提示，不自动扩大 branch 范围。

working-tree 分别收集两份补丁。若先暂存错误再在磁盘修回，`git diff HEAD` 可能为空，但提交 index 仍会提交错误；不能因此跳过 staged 审查。

收集器只列未跟踪文件名，不读内容。审查“所有未提交改动”时，需对授权范围内的新文件继续检查；过大或二进制文件无法阅读时，报告具体缺口。被忽略文件不会枚举；子模块不会递归。文件名按 JSON 转义，不能把输出拼接成 shell 命令。

查看某一快照的文件时可用 Git 的 index/commit 查询方式；记录所用版本，不把当前工作树的行号误写为已暂存版本行号。
