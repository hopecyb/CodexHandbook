检查 my-output/ 的四个产物，运行 python3 validation/check.py --output my-output。
若失败，解释是缺文件、字段格式、口径还是金额不同，只修复 my-output，不能修改校验器或原表。
另外不依赖自己的汇总函数，复核全体总额、华东本期和 O046 缺日期金额；记录计算式和原表行号。
对比 validation/input-manifest.json 中的 SHA-256，确认输入未变。
说明校验脚本覆盖了哪些内容、哪些叙述仍需人工阅读；未运行的检查明确写未运行。
