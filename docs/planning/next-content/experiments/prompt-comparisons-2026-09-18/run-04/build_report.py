import csv
import hashlib
import json
from collections import defaultdict
from datetime import date, datetime, timezone
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

BASE = Path(__file__).parent
OUT = BASE / 'output'
OUT.mkdir(exist_ok=True)
source = BASE / 'input/sales.csv'
original_hash = hashlib.sha256(source.read_bytes()).hexdigest()
with source.open(newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    assert reader.fieldnames == ['order_id', 'date', 'region', 'product', 'net_sales']
    rows = list(reader)
regions = ['华东', '华南', '西南']
products = ['笔记本', '收纳盒', '台灯']
seen = {}
# Complete ID and field validation before any date processing.
duplicates = set()
for line, r in enumerate(rows, 2):
    assert r['order_id'] and r['region'] in regions and r['product'] in products
    value = Decimal(r['net_sales'])
    assert value.is_finite() and value == value.quantize(Decimal('.01'))
    if r['order_id'] in seen:
        assert seen[r['order_id']][1] == r, f'Conflicting ID at line {line}'
        duplicates.add(line)
    else:
        seen[r['order_id']] = (line, r)
ledger = []
sums = defaultdict(Decimal)
product_sums = defaultdict(Decimal)
for line, r in enumerate(rows, 2):
    week = ''
    if line in duplicates:
        decision = 'duplicate'
    elif not r['date']:
        decision = 'missing-date'
    else:
        day = date.fromisoformat(r['date'])
        assert day.isoformat() == r['date']
        assert date(2026, 8, 31) <= day <= date(2026, 9, 13)
        week = 1 if day <= date(2026, 9, 6) else 2
        decision = 'included'
        sums[r['region'], week] += Decimal(r['net_sales'])
        if week == 2:
            product_sums[r['product']] += Decimal(r['net_sales'])
    ledger.append([line, r['order_id'], decision, week, r['net_sales']])

def money(v):
    return f'{v:.2f}'

summary = []
for region in regions + ['总计']:
    prior, current = [sum((sums[r, w] for r in regions), Decimal(0)) if region == '总计' else sums[region, w] for w in (1, 2)]
    change = current - prior
    pct = 'N/A' if prior == 0 else money((change / prior * 100).quantize(Decimal('.01'), rounding=ROUND_HALF_UP))
    summary.append([region, money(prior), money(current), money(change), pct])
top = [[i, p, money(v)] for i, (p, v) in enumerate(sorted(product_sums.items(), key=lambda item: (-item[1], item[0]))[:3], 1)]
for name, header, data in [
    ('region-summary.csv', ['region', 'prior_cny', 'current_cny', 'change_cny', 'change_percent'], summary),
    ('top-products.csv', ['rank', 'product', 'current_cny'], top),
    ('row-ledger.csv', ['source_line', 'order_id', 'decision', 'week', 'net_sales'], ledger),
]:
    with (OUT / name).open('w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(data)

report = '''# 两周销售周报

金额单位：人民币元（CNY）。上期为 2026-08-31 至 2026-09-06，本期为 2026-09-07 至 2026-09-13，均含首尾日，按业务本地日期计算。

本期销售净额 **4,644.75 元**，上期 **2,483.25 元**，增加 **2,161.50 元**，环比 **87.04%**。退款已计入净额，不再重复扣除。

| 地区 | 上期 | 本期 | 增减额 | 环比 |
|---|---:|---:|---:|---:|
'''
report += '\n'.join('| ' + ' | '.join(row[:-1] + [row[-1] + ('%' if row[-1] != 'N/A' else '')]) + ' |' for row in summary)
report += '\n\n本期产品净额 Top 3（含退款；金额相同按产品名 Unicode 顺序）：\n\n| 排名 | 产品 | 本期净额 |\n|---|---|---:|\n'
report += '\n'.join('| ' + ' | '.join(map(str, row)) + ' |' for row in top)
report += '''

西南上期有七条有效零金额记录，本期净额 1,261.75 元；因上期基数为零，环比为 N/A，不能解释为增长 0%。华南、华东净额分别增加 530.25 元、369.50 元。数据为合成练习数据，不据此推断真实门店经营原因。

原始 46 行中纳入 44 行（每周 22 行），剔除 1 行完全重复记录，隔离 1 行缺日期记录。缺日期金额 199.99 元不计入任何一周。详见 row-ledger.csv、reconciliation.md 和 verification.md。
'''
(OUT / 'weekly-report.md').write_text(report, encoding='utf-8')

recon = '''# 逐行决定与关键数字核对说明

源行号含表头；第 2 行为第一条数据。先校验 ID 与字段，再处理日期，最后分组。全部 ID 无冲突；有效日期均在两期范围内。row-ledger.csv 记录全部 46 行，其 included 行按 week 与地区汇总形成 region-summary.csv；其中 week=2 的 included 行按产品汇总形成 top-products.csv。

## 特殊处理

- 第 46 行 O001 与第 2 行全部字段一致：保留第 2 行，上期华东计入 100.25；第 46 行 duplicate，剔除 100.25，不计周次。
- 第 47 行 O046 缺日期：missing-date，隔离 199.99 元，地区华东、产品收纳盒；待核对业务日期，不填补日期，不计周次。
- 第 44 行 R043：本期华东笔记本退款 -120.50，纳入地区与产品净额且只扣一次。
- 第 45 行 R044：上期华南台灯退款 -40.25，纳入上期地区净额，不进入本期产品榜。
- 第 4、7、10、13、16、19、22 行：西南上期七条 0.00，均 included、week=1；上期零基数对应 N/A。

## 全部原始行到报表的映射

| 源行 | ID | 决定 | 周次 | 地区贡献 | 本期产品贡献 |
|---|---|---|---|---|---|
'''
for r, l in zip(rows, ledger):
    included = l[2] == 'included'
    recon += f"| {l[0]} | {l[1]} | {l[2]} | {l[3]} | {r['region'] + ' ' + r['net_sales'] if included else '不计入'} | {r['product'] + ' ' + r['net_sales'] if included and l[3] == 2 else '不计入'} |\n"
recon += '''
## 勾稽关系

- 原始金额合计 7,428.24 − 重复 100.25 − 缺日期 199.99 = 纳入两周 7,128.00。
- 上期：华东 911.75 + 华南 1,571.50 + 西南 0.00 = 2,483.25。
- 本期：华东 1,281.25 + 华南 2,101.75 + 西南 1,261.75 = 4,644.75。
- 上期正销售 2,523.50 − 退款 40.25 = 2,483.25；本期正销售 4,765.25 − 退款 120.50 = 4,644.75。
- 增减额按本期减上期；环比按增减额除以上期乘 100，以十进制 ROUND_HALF_UP 四舍五入到两位。
'''
(OUT / 'reconciliation.md').write_text(recon, encoding='utf-8')
print(json.dumps({'summary': summary, 'top': top, 'raw_sum': money(sum(Decimal(r['net_sales']) for r in rows)), 'input_sha256': original_hash}, ensure_ascii=False, indent=2))
