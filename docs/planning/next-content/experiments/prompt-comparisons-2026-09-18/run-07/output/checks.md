# 实际检查记录

执行时间 UTC：2026-09-18T02:24:17.427034+00:00。独立校验从原始 CSV 重读，以原始行集合和整数分重算，不复用生成时的分组对象或台账决策。

| 检查 | 结果 | 实际值 |
|---|---|---|
| 原始行独立周合计 | PASS | 上期 2483.25；本期 4644.75；采用整数分计算 |
| 华东逐行金额对 CSV | PASS | 911.75 / 1281.25 |
| 华南逐行金额对 CSV | PASS | 1571.50 / 2101.75 |
| 西南逐行金额对 CSV | PASS | 0.00 / 1261.75 |
| 地区之和对总计 | PASS | 911.75 + 1571.50 + 0.00 = 2483.25；1281.25 + 2101.75 + 1261.75 = 4644.75 |
| 华东增减与环比 | PASS | 369.50 / 40.53 |
| 华南增减与环比 | PASS | 530.25 / 33.74 |
| 西南增减与环比 | PASS | 1261.75 / N/A |
| 总计增减与环比 | PASS | 2161.50 / 87.04 |
| 台账覆盖原始行 | PASS | 46 行，无遗漏或重复行号 |
| 行 2 台账 | PASS | O001 / included / week=1 / 100.25 |
| 行 3 台账 | PASS | O002 / included / week=1 / 200.25 |
| 行 4 台账 | PASS | O003 / included / week=1 / 0.00 |
| 行 5 台账 | PASS | O004 / included / week=1 / 110.25 |
| 行 6 台账 | PASS | O005 / included / week=1 / 210.25 |
| 行 7 台账 | PASS | O006 / included / week=1 / 0.00 |
| 行 8 台账 | PASS | O007 / included / week=1 / 120.25 |
| 行 9 台账 | PASS | O008 / included / week=1 / 220.25 |
| 行 10 台账 | PASS | O009 / included / week=1 / 0.00 |
| 行 11 台账 | PASS | O010 / included / week=1 / 130.25 |
| 行 12 台账 | PASS | O011 / included / week=1 / 230.25 |
| 行 13 台账 | PASS | O012 / included / week=1 / 0.00 |
| 行 14 台账 | PASS | O013 / included / week=1 / 140.25 |
| 行 15 台账 | PASS | O014 / included / week=1 / 240.25 |
| 行 16 台账 | PASS | O015 / included / week=1 / 0.00 |
| 行 17 台账 | PASS | O016 / included / week=1 / 150.25 |
| 行 18 台账 | PASS | O017 / included / week=1 / 250.25 |
| 行 19 台账 | PASS | O018 / included / week=1 / 0.00 |
| 行 20 台账 | PASS | O019 / included / week=1 / 160.25 |
| 行 21 台账 | PASS | O020 / included / week=1 / 260.25 |
| 行 22 台账 | PASS | O021 / included / week=1 / 0.00 |
| 行 23 台账 | PASS | O022 / included / week=2 / 170.25 |
| 行 24 台账 | PASS | O023 / included / week=2 / 270.25 |
| 行 25 台账 | PASS | O024 / included / week=2 / 150.25 |
| 行 26 台账 | PASS | O025 / included / week=2 / 180.25 |
| 行 27 台账 | PASS | O026 / included / week=2 / 280.25 |
| 行 28 台账 | PASS | O027 / included / week=2 / 160.25 |
| 行 29 台账 | PASS | O028 / included / week=2 / 190.25 |
| 行 30 台账 | PASS | O029 / included / week=2 / 290.25 |
| 行 31 台账 | PASS | O030 / included / week=2 / 170.25 |
| 行 32 台账 | PASS | O031 / included / week=2 / 200.25 |
| 行 33 台账 | PASS | O032 / included / week=2 / 300.25 |
| 行 34 台账 | PASS | O033 / included / week=2 / 180.25 |
| 行 35 台账 | PASS | O034 / included / week=2 / 210.25 |
| 行 36 台账 | PASS | O035 / included / week=2 / 310.25 |
| 行 37 台账 | PASS | O036 / included / week=2 / 190.25 |
| 行 38 台账 | PASS | O037 / included / week=2 / 220.25 |
| 行 39 台账 | PASS | O038 / included / week=2 / 320.25 |
| 行 40 台账 | PASS | O039 / included / week=2 / 200.25 |
| 行 41 台账 | PASS | O040 / included / week=2 / 230.25 |
| 行 42 台账 | PASS | O041 / included / week=2 / 330.25 |
| 行 43 台账 | PASS | O042 / included / week=2 / 210.25 |
| 行 44 台账 | PASS | R043 / included / week=2 / -120.50 |
| 行 45 台账 | PASS | R044 / included / week=1 / -40.25 |
| 行 46 台账 | PASS | O001 / duplicate / week=空 / 100.25 |
| 行 47 台账 | PASS | O046 / missing-date / week=空 / 199.99 |
| 重复字段核对 | PASS | 第 46 行与第 2 行全部字段一致 |
| 缺日期待核对 | PASS | 第 47 行 O046：199.99 元 |
| 零金额七行 | PASS | 西南上期七条零金额均纳入 |
| 退款归期 | PASS | R043 −120.50 本期；R044 −40.25 上期 |
| 产品顺序、名次和金额 | PASS | {'台灯': 166175, '收纳盒': 156175, '笔记本': 142125} |
| 产品合计对本期 | PASS | 1661.75 + 1561.75 + 1421.25 = 4644.75 |
| 所有原始金额勾稽 | PASS | 7428.24 − 100.25 − 199.99 = 7128.00 |
| 输入文件未变 | PASS | SHA-256 与生成前一致 |
