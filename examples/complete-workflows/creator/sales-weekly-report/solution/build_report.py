"""Reference implementation. Python 3.10+, standard library only."""
import argparse
import csv
from collections import defaultdict
from datetime import date
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path, default=ROOT / 'solution')
    args = parser.parse_args()
    totals = defaultdict(lambda: [Decimal('0'), Decimal('0')])
    products = defaultdict(Decimal)
    seen = {}
    ledger = []
    refunds = [Decimal('0'), Decimal('0')]
    with (ROOT / 'starter/sales.csv').open(encoding='utf-8', newline='') as stream:
        for line, row in enumerate(csv.DictReader(stream), 2):
            key = row['order_id']
            if key in seen:
                if row != seen[key]:
                    raise ValueError(f'Conflicting order_id {key} at line {line}; stop for review')
                ledger.append([line, key, 'duplicate', '', row['net_sales']])
                continue
            seen[key] = row
            if not row['date']:
                ledger.append([line, key, 'missing-date', '', row['net_sales']])
                continue
            day = date.fromisoformat(row['date'])
            if not date(2026, 8, 31) <= day <= date(2026, 9, 13):
                raise ValueError(f'Out-of-range date at line {line}')
            week = int(day >= date(2026, 9, 7))
            amount = Decimal(row['net_sales'])
            if not amount.is_finite() or amount != amount.quantize(Decimal('.01')):
                raise ValueError(f'Invalid amount at line {line}')
            totals[row['region']][week] += amount
            if week == 1:
                products[row['product']] += amount
            if amount < 0:
                refunds[week] += amount
            ledger.append([line, key, 'included', week + 1, row['net_sales']])
    totals['总计'] = [sum(value[i] for value in totals.values()) for i in range(2)]
    output = args.output.resolve()
    if output == ROOT / 'starter':
        raise ValueError('Do not write outputs to starter')
    output.mkdir(parents=True, exist_ok=True)
    def write(name, header, rows):
        with (output / name).open('w', encoding='utf-8', newline='') as stream:
            writer = csv.writer(stream, lineterminator='\n')
            writer.writerow(header)
            writer.writerows(rows)
    rows = []
    for region, (prior, current) in totals.items():
        change = current - prior
        percent = 'N/A' if prior == 0 else str((change / prior * 100).quantize(Decimal('.01'), rounding=ROUND_HALF_UP))
        rows.append([region, f'{prior:.2f}', f'{current:.2f}', f'{change:.2f}', percent])
    write('region-summary.csv', ['region', 'prior_cny', 'current_cny', 'change_cny', 'change_percent'], rows)
    top = sorted(products.items(), key=lambda pair: (-pair[1], pair[0]))[:3]
    write('top-products.csv', ['rank', 'product', 'current_cny'], [[i, name, f'{value:.2f}'] for i, (name, value) in enumerate(top, 1)])
    write('row-ledger.csv', ['source_line', 'order_id', 'decision', 'week', 'net_sales'], ledger)
    prior, current = totals['总计']
    table = '\n'.join('| ' + ' | '.join(row) + ' |' for row in rows)
    top_text = '\n'.join(f'{i}. {name}：{value:.2f} 元。' for i, (name, value) in enumerate(top, 1))
    summary = f'''# 销售周报（合成教学数据）

本期：2026-09-07—2026-09-13；上期：2026-08-31—2026-09-06。币种 CNY，金额单位元。

本期净销售额 **{current:.2f} 元**，上期 **{prior:.2f} 元**，增加 **{current-prior:.2f} 元**，环比 **{rows[-1][-1]}%**。

## 分地区

| 地区 | 上期净额 | 本期净额 | 增减额 | 环比百分比 |
|---|---:|---:|---:|---:|
{table}

地区指标来自原表 `region`、`date` 与 `net_sales`，先按订单 ID 去除完全相同的重复记录，再按两个完整自然周求和。增减额 = 本期 − 上期；环比 = 增减额 ÷ 上期 × 100，保留两位小数。西南上期为真实零，环比记 N/A，不记 0% 或无限增长。

## 本期 Top 3 产品

{top_text}

按本期 `product` 汇总净销售额降序排序；退款也计入对应产品。金额相同按产品名称 Unicode 顺序排。只有三个产品，榜单不代表市场排名。

## 数据质量与复核

- 原表 46 行；O001 完全相同的第二次出现（CSV 第 46 行）剔除一次。
- O046（第 47 行）缺日期，199.99 元暂不归属任何周，等待补充原始凭证。
- 两条退款 R043、R044 分别为 -120.50、-40.25 元，保留原符号。
- 去重并隔离缺日期后纳入 44 行，其中 7 行零金额是有效记录。
- 逐行归属见 `row-ledger.csv`，地区金额见 `region-summary.csv`，产品榜单见 `top-products.csv`。

## 设计反例：忽略退款

若只统计正数，本期会被写成 {current-refunds[1]:.2f} 元，比正确结果多 {-refunds[1]:.2f} 元。上期则会多 {-refunds[0]:.2f} 元。修正时保留全部有效负数并重算两期。这是作者设计的错误演示，不是实际 Agent 对话记录。

## 使用限制

这些记录为本站自制合成材料，不含真实客户。不能从两周样本推断季节性、利润或增长原因；缺日期款项暂不纳入汇总不等于真实业务应删除该款项。
'''
    (output / 'summary.md').write_text(summary, encoding='utf-8')
    print(f'Wrote report: {output}; current={current:.2f}; prior={prior:.2f}')


if __name__ == '__main__':
    main()
