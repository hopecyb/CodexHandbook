# evidence-research

v1.0.0，原创 CC0 研究 Skill 教学包。固定问题、三份合成来源、一个故意缺失的来源、证据格式、参考报告与检查脚本均随包提供。无需外部 API 或账号。

将整个目录放到练习项目 `.agents/skills/evidence-research/`，确认入口为 SKILL.md，避免覆盖已有同名 Skill。在客户端确认可选后调用：

```text
$evidence-research 依据此包 sources/catalog.json 中的资料，
判断拾页 1.2 的输入范围、诊断默认设置和上传字段能否确认。
输出 my-output/report.md 与 evidence.csv，明确冲突和打不开的来源。
保持合成身份，不搜索虚构产品的真实网页。
```

阅读与研究不要求 Python。可选本地检查使用 Python 3.10+ 标准库，在本包目录执行：

```sh
python3 scripts/check_evidence.py --inspect-only
python3 scripts/check_evidence.py
python3 scripts/check_evidence.py --output my-output
python3 validation/test_checks.py
```

`--inspect-only` 的退出码 0 只表示检查过程完成，必须读取每项 status；不表示来源全部可用。完整检查退出码 0 表示证据表符合结构且明确记录不可用来源，不保证报告正确。参考输出正常呈现 P/I/C available、M missing。

缺来源时保留局限；哈希 changed 时先核对差异，不能直接使用旧引用或为通过测试更新哈希。脚本不访问网络，不能测试网站状态。参考报告和触发用例是作者设计，未测自动路由、研究质量或效率。记录见 validation/record.md。
