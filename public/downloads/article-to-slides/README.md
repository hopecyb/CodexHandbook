# 把一篇文章做成 8 页可编辑演示稿

版本 1.0.0。输入来自“带来源文章”练习，资料、人物和产品均为虚构。完整包包含输入文章与来源、受众简报、八页大纲、提示词、PPTX、PDF、八页预览、逐页讲解和验证记录，可以独立下载练习。

## 从这里开始

1. 阅读 brief.md、input/article.md 与 input/claim-map.csv，确认哪些内容是事实、建议和未决问题。
2. 使用 prompts/01-outline.md，将文章压缩成八页，每页一个重点。
3. 先做主题与冲突两页样张，再按 prompts/02-build.md 完成其余六页。
4. 按 prompts/03-verify.md 检查文本可编辑性、中文字体和全部页面。
5. 对照 solution/source-backed-writing.pptx、PDF 与 previews。不要把预览图片替代为整页背景后声称可编辑。

预计 60—90 分钟是编辑预估，尚未经读者计时。制作 PPTX 需要具备相应文件生成能力的工具或演示软件；本包不承诺所有 Codex 客户端默认提供相同能力。工具不可用时可以先交付大纲，但大纲不能算作完成了 PPTX。

## 可编辑与兼容性

参考 PPTX 中的关键文字为原生文本框。使用 Arial Unicode MS，字体文件没有随包分发。实际验证过的环境为 LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64，显式配置系统字体目录后导入并导出 PDF。没有声称在 PowerPoint 或 Keynote 中完成验证。

如果打开后中文变成方框，先确认本机存在中文字体，再在副本中替换为可用字体，重新检查全部页面。字体替换可能改变换行。PDF 和 PNG 适合查看固定版式，不替代可编辑源稿。

可选结构检查（Python 3.10+，仅标准库）：

```sh
python3 validation/check.py
```

脚本核对参考文件哈希、八页、原生文本、备注和预览齐全；不能代替演示软件渲染和逐页目视检查。

## 来源与许可

所有教学资料与原创幻灯片按 CC0 1.0 公开。输入文章仅调整了相对链接以适应独立包，事实文字保持原样。参考稿的逐页来源写在备注及 solution/slide-notes.md。无外来图片和装饰素材，不分发字体。详细许可与环境见 LICENSE.md、validation/record.md。
