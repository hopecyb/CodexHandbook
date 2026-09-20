按已读取的数据字典生成销售周报，所有产物写到 my-output/。
交付 summary.md、region-summary.csv、top-products.csv、row-ledger.csv；CSV 字段和行序遵守字典。
保留负数退款，隔离缺日期行，完全重复只计一次；零基数环比写 N/A。
周报说明本期、上期、增减额、环比、分地区、本期 Top 3 和数据问题，每个数字标明计算依据。
summary.md 的地区表按地区、上期、本期、增减额、环比百分比排列，数字与 CSV 保持相同两位小数，不加千位逗号，便于自动对照。
不要编造原因、利润、客户、外部市场数据或实测对话。不修改 starter、solution、validation，不发布。
