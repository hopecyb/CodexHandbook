import csv
import datetime as dt
import hashlib
import json
from collections import defaultdict
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

root = Path(__file__).resolve().parent.parent
src = root / 'input/sales.csv'
before = hashlib.sha256(src.read_bytes()).hexdigest()
rows = list(csv.DictReader(src.open(encoding='utf-8', newline='')))
seen = {}
decisions = []
regions = ['华东', '华南', '西南']
products = ['笔记本', '收纳盒', '台灯']
# Complete ID and field validation precedes date handling.
for line, row in enumerate(rows, 2):
    assert set(row) == {'order_id', 'date', 'region', 'product', 'net_sales'}
    assert row['order_id'] and row['region'] in regions and row['product'] in products
    amount = Decimal(row['net_sales'])
    assert amount.is_finite()
    key = row['order_id']
    if key in seen:
        assert row == seen[key], f'Conflicting ID at line {line}: {key}'
        decision = 'duplicate'
    else:
        seen[key] = row
        decision = 'included'
    decisions.append([line, row, decision, amount])

ledger = []
totals = {r: [Decimal(0), Decimal(0)] for r in regions}
product_totals = defaultdict(Decimal)
pending = []
for line, row, decision, amount in decisions:
    week = ''
    if decision == 'included':
        if not row['date']:
            decision = 'missing-date'
            pending.append((line, row['order_id'], amount))
        else:
            date = dt.date.fromisoformat(row['date'])
            assert date.isoformat() == row['date']
            assert dt.date(2026, 8, 31) <= date <= dt.date(2026, 9, 13)
            week = 1 if date <= dt.date(2026, 9, 6) else 2
    ledger.append([line, row['order_id'], decision, week, row['net_sales']])

for entry, source in zip(ledger, decisions):
    if entry[2] == 'included':
        _, row, _, amount = source
        totals[row['region']][entry[3] - 1] += amount
        if entry[3] == 2:
            product_totals[row['product']] += amount

def money(value):
    return str(value.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP))

totals['总计'] = [sum((totals[r][i] for r in regions), Decimal(0)) for i in range(2)]
summary = []
for region in regions + ['总计']:
    prior, current = totals[region]
    change = current - prior
    pct = 'N/A' if prior == 0 else money(change / prior * 100)
    summary.append([region, money(prior), money(current), money(change), pct])
top = [[rank, name, money(value)] for rank, (name, value) in enumerate(sorted(product_totals.items(), key=lambda p: (-p[1], p[0]))[:3], 1)]
assert sum(product_totals.values()) == totals['总计'][1]
assert len(ledger) == 46
assert sum(e[2] == 'included' for e in ledger) == 44
assert sum(e[2] == 'duplicate' for e in ledger) == 1
assert sum(e[2] == 'missing-date' for e in ledger) == 1
assert hashlib.sha256(src.read_bytes()).hexdigest() == before
out = root / 'output'
out.mkdir(exist_ok=True)
def write_csv(name, header, data):
    with (out / name).open('w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header.split(','))
        writer.writerows(data)
write_csv('region-summary.csv', 'region,prior_cny,current_cny,change_cny,change_percent', summary)
write_csv('top-products.csv', 'rank,product,current_cny', top)
write_csv('row-ledger.csv', 'source_line,order_id,decision,week,net_sales', ledger)
report = '''# 两周销售周报

金额单位：人民币元（CNY）。上期为 2026-08-31 至 2026-09-06，本期为 2026-09-07 至 2026-09-13，均含首尾日期，按业务本地自然日统计。

本期净销售额为 {current} 元，上期为 {prior} 元，增加 {change} 元，环比增长 {pct}%。

## 地区净销售额

| 地区 | 上期（元） | 本期（元） | 增减额（元） | 环比 |
|---|---:|---:|---:|---:|
'''.format(current=summary[-1][2], prior=summary[-1][1], change=summary[-1][3], pct=summary[-1][4])
for r in summary:
    report += '| ' + ' | '.join(r[:4] + [r[4] + ('%' if r[4] != 'N/A' else '')]) + ' |\n'
report += '\n西南上期七条零金额记录均有效；上期合计为零，因此环比为 N/A，不能解释为 0%。数据不支持推断增长的实际业务原因。\n\n## 本期产品 Top 3\n\n| 排名 | 产品 | 本期净额（元） |\n|---|---|---:|\n'
for r in top:
    report += '| ' + ' | '.join(map(str, r)) + ' |\n'
report += '''
产品排名仅统计本期，包含退款，按净额降序、同额按产品名称 Unicode 顺序排列。

## 数据处理与待核对清单

- 原始数据共 46 条，纳入 44 条：上期 22 条、本期 22 条。零金额记录保留。
- O001 第二次出现位于原表第 46 行，与第 2 行完全一致，剔除重复行并保留第一条。
- 待核对：O046，原表第 47 行，日期缺失，金额 199.99 元；已隔离，不计入任何一期，日期未补齐。
- 上期包含 R044 退款 -40.25 元（第 45 行），本期包含 R043 退款 -120.50 元（第 44 行）。net_sales 已为净额，不重复扣退款。
- 未发现 ID 内容冲突、非法日期或范围外日期。逐行处理结果见 row-ledger.csv，行号包含表头。
- 增减额 = 本期 − 上期；环比 = 增减额 ÷ 上期 × 100，按四舍五入保留两位小数。
- 已核对地区之和等于对应周总计、本期产品之和等于本期总计；输入文件未修改。
'''
(out / 'weekly-report.md').write_text(report, encoding='utf-8')
print(report)
print('Validation passed; 4 output files written. Input SHA256:', before)
