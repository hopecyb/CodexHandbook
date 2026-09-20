import csv
import hashlib
from datetime import datetime, timezone
from pathlib import Path

base = Path(__file__).parent
out = base / 'output'
checks = []

def check(name, actual, expected):
    assert actual == expected, f'{name}: {actual!r} != {expected!r}'
    checks.append(f'- PASS：{name}：{actual}')

def cents(s):
    sign = -1 if s.startswith('-') else 1
    a, b = s.lstrip('-').split('.')
    return sign * (int(a) * 100 + int(b))

def read(path):
    with path.open(newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))

raw = read(base / 'input/sales.csv')
check('原始输入 SHA256 未变', hashlib.sha256((base / 'input/sales.csv').read_bytes()).hexdigest(), 'e2ad0770e43d1bab02f2c61d5d24f5a96a0c9f80dcf878d7aac00fe41c2e0c80')
check('原始记录数', len(raw), 46)
# Independent row scan in integer cents; no imports from report generator.
unique = {}
accepted = {1: [], 2: []}
expected_ledger = []
excluded = {'duplicate': 0, 'missing-date': 0}
for line, r in enumerate(raw, 2):
    week = ''
    ident = r['order_id']
    if ident in unique:
        assert unique[ident] == r
        decision = 'duplicate'
    else:
        unique[ident] = r
        if not r['date']:
            decision = 'missing-date'
        else:
            parsed = datetime.strptime(r['date'], '%Y-%m-%d').date()
            assert '2026-08-31' <= parsed.isoformat() <= '2026-09-13'
            week = '1' if parsed.isoformat() < '2026-09-07' else '2'
            decision = 'included'
            accepted[int(week)].append(r)
    if decision != 'included':
        excluded[decision] += cents(r['net_sales'])
    expected_ledger.append(dict(source_line=str(line), order_id=ident, decision=decision, week=week, net_sales=r['net_sales']))
check('逐行台账全部字段与独立判断一致', read(out / 'row-ledger.csv') == expected_ledger, True)
check('每周有效记录数', [len(accepted[w]) for w in (1, 2)], [22, 22])
direct = {w: sum(cents(r['net_sales']) for r in accepted[w]) for w in (1, 2)}
check('两周直接按原始有效行求和（分）', direct, {1: 248325, 2: 464475})
check('原始总额减隔离及重复等于两周净额（分）', sum(cents(r['net_sales']) for r in raw) - sum(excluded.values()), sum(direct.values()))
check('重复及缺日期金额（分）', excluded, {'duplicate': 10025, 'missing-date': 19999})
summary = read(out / 'region-summary.csv')
check('地区行顺序', [r['region'] for r in summary], ['华东', '华南', '西南', '总计'])
for s in summary:
    expected = [sum(cents(r['net_sales']) for r in accepted[w] if s['region'] == '总计' or r['region'] == s['region']) for w in (1, 2)]
    check(s['region'] + '两周地区金额（分）', [cents(s['prior_cny']), cents(s['current_cny'])], expected)
    delta = expected[1] - expected[0]
    check(s['region'] + '增减额（分）', cents(s['change_cny']), delta)
    if expected[0] == 0:
        pct = 'N/A'
    else:
        # Exact integer rational rounding, independent from Decimal quantize.
        q, rem = divmod(abs(delta) * 10000, abs(expected[0]))
        q += int(rem * 2 >= abs(expected[0]))
        pct = ('-' if delta * expected[0] < 0 else '') + f'{q // 100}.{q % 100:02d}'
    check(s['region'] + '环比文本', s['change_percent'], pct)
for w, field in [(1, 'prior_cny'), (2, 'current_cny')]:
    check(f'第 {w} 周地区之和与原始行直接和一致（分）', sum(cents(r[field]) for r in summary[:3]), direct[w])
    positive = sum(cents(r['net_sales']) for r in accepted[w] if cents(r['net_sales']) > 0)
    refunds = sum(cents(r['net_sales']) for r in accepted[w] if cents(r['net_sales']) < 0)
    check(f'第 {w} 周正销售及退款（分）', [positive, refunds], [252350, -4025] if w == 1 else [476525, -12050])
zero_rows = [r for r in accepted[1] if r['region'] == '西南']
check('西南上期有效零金额行数', len(zero_rows), 7)
check('西南上期各行金额均为零', all(cents(r['net_sales']) == 0 for r in zero_rows), True)
product_totals = {p: sum(cents(r['net_sales']) for r in accepted[2] if r['product'] == p) for p in {r['product'] for r in raw}}
expected_top = sorted(product_totals.items(), key=lambda x: (-x[1], x[0]))
top = read(out / 'top-products.csv')
check('产品榜排名及金额（分）', [(int(r['rank']), r['product'], cents(r['current_cny'])) for r in top], [(i, p, v) for i, (p, v) in enumerate(expected_top, 1)])
check('产品榜合计与本期原始行求和一致（分）', sum(cents(r['current_cny']) for r in top), direct[2])
report = (out / 'weekly-report.md').read_text()
for value in ['4,644.75', '2,483.25', '2,161.50', '87.04%', '1,261.75', '530.25', '369.50', '199.99']:
    check('周报关键值 ' + value, value in report, True)
for s in summary:
    check('周报地区表 ' + s['region'], '| ' + ' | '.join([s['region'], s['prior_cny'], s['current_cny'], s['change_cny'], s['change_percent'] + ('%' if s['change_percent'] != 'N/A' else '')]) + ' |' in report, True)
for r in top:
    check('周报产品表 ' + r['product'], '| ' + ' | '.join(r.values()) + ' |' in report, True)
text = '# 实际独立检查记录\n\n执行时间（UTC）：' + datetime.now(timezone.utc).isoformat() + '\n\n使用独立脚本从原始 CSV 重新读取并按整数分计算；没有复用生成器的聚合结果或 Decimal 舍入逻辑。以下均为实际通过的断言。\n\n' + '\n'.join(checks) + f'\n\n检查结论：{len(checks)} 项全部通过。初稿人工填写的摘要及原始总额曾与计算结果不符，已在本次复核前更正；最终交付数字以上述独立计算为准。\n'
(out / 'verification.md').write_text(text, encoding='utf-8')
print(text)
