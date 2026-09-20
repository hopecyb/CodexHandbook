# 从销售 CSV 到可核对的周报

版本 1.0.0。所有交易均为本站自制合成数据，不含真实客户。目标是学会定义口径、生成周报并独立验收，预计练习 30—45 分钟；这个时间是编辑预估，尚未经读者测试。

## 开始

1. 解压完整练习包，打开本目录作为工作文件夹。
2. 阅读 `brief.md` 和 `starter/data-dictionary.md`。
3. 将 `prompts/01-inspect.md` 的任务交给 Codex，确认它找到本目录中的输入文件。
4. 继续使用 `02-report.md`，把产物写入新建的 `my-output/`，不要覆盖 starter 或参考答案。
5. 使用 `03-verify.md` 检查自己的结果，再对照 `solution/summary.md`。

只读材料和人工复核不要求安装 Python。要运行参考实现或独立校验，需要 Python 3.10+，仅使用标准库，无第三方依赖、网络和账号。验证过的环境详见 `validation/record.md`。本案例未声称所有 Codex 客户端都能直接运行本地脚本。

## 命令

在本目录执行，先查看参考结果，后检查自己的产物：

```sh
python3 validation/check.py
python3 validation/check.py --output my-output
```

第一条针对随包参考答案，预期输出 `result: PASS`。第二条只有自己的目录已含四个约定文件且结果一致时通过；失败时读取异常与对应文件，不要为了通过而修改 checker 或原表。

如需复现参考计算，在本目录执行：

```sh
python3 solution/build_report.py --output reproduced
python3 validation/check.py --output reproduced
```

输出包括 `summary.md`、`region-summary.csv`、`top-products.csv` 和 `row-ledger.csv`。参考周报可以编辑，汇总 CSV 为静态计算结果；更改输入后必须重新计算，不会像工作簿公式那样自动更新。

## 自行核对的三个数字

- 本期净额：4,644.75 元。
- 华东本期：1,281.25 元，已扣除 120.50 元退款。
- 缺日期的 199.99 元：隔离待核对，不计入任一周。

完整口径与每行的纳入决定见字典和 `row-ledger.csv`。独立脚本只是固定练习的校验器，不是通用销售分析系统。

## 遇到问题

找不到文件时列出当前目录，确认存在 `starter/sales.csv`，不要凭空重建文件。中文乱码时按 UTF-8 重新导入，分隔符选逗号。字段误读时回到数据字典：`net_sales` 已是净额，不能再扣一次退款。基数为零时保留 N/A，不补造历史金额。

## 许可与证据

本目录合成数据、文稿及代码由本站为教学创建，按 CC0 1.0 公开，可修改与再分发。许可说明见 `LICENSE.md`。原文件 SHA-256 在 `validation/input-manifest.json`；运行、独立计算复核和错误演示见 `validation/record.md`。没有真实客户或模型运行成功率声明。
