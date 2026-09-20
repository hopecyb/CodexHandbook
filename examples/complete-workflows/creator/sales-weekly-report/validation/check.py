"""Independent checker: integer cents + SQL, no imports from the solution."""
import argparse
import csv
import hashlib
import json
import sqlite3
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path, default=ROOT / 'solution')
    args = parser.parse_args()
    source = ROOT / 'starter/sales.csv'
    manifest = json.loads((ROOT / 'validation/input-manifest.json').read_text())
    assert hashlib.sha256(source.read_bytes()).hexdigest() == manifest['sha256'], 'Input changed'
    with source.open(encoding='utf-8', newline='') as stream:
        rows = list(csv.DictReader(stream))
    assert len(rows) == 46
    db = sqlite3.connect(':memory:')
    db.execute('CREATE TABLE sales (line INTEGER, id TEXT, day TEXT, region TEXT, product TEXT, cents INTEGER)')
    for line, row in enumerate(rows, 2):
        value = Decimal(row['net_sales']) * 100
        assert value == int(value)
        db.execute('INSERT INTO sales VALUES (?,?,?,?,?,?)', (line, row['order_id'], row['date'], row['region'], row['product'], int(value)))
    db.execute('CREATE VIEW unique_sales AS SELECT * FROM sales WHERE line IN (SELECT MIN(line) FROM sales GROUP BY id)')
    db.execute("CREATE VIEW eligible AS SELECT *, CASE WHEN day < '2026-09-07' THEN 1 ELSE 2 END AS week FROM unique_sales WHERE day BETWEEN '2026-08-31' AND '2026-09-13'")
    assert db.execute('SELECT COUNT(*) FROM eligible').fetchone()[0] == 44
    assert db.execute("SELECT id, cents FROM unique_sales WHERE day='' ").fetchall() == [('O046', 19999)]
    assert db.execute('SELECT COUNT(*) FROM eligible WHERE cents=0').fetchone()[0] == 7
    assert db.execute('SELECT SUM(cents) FROM eligible WHERE cents<0').fetchone()[0] == -16075
    expected = db.execute('SELECT region, SUM(CASE WHEN week=1 THEN cents ELSE 0 END), SUM(CASE WHEN week=2 THEN cents ELSE 0 END) FROM eligible GROUP BY region ORDER BY MIN(line)').fetchall()
    expected.append(('总计', sum(row[1] for row in expected), sum(row[2] for row in expected)))
    def read(name):
        with (args.output / name).open(encoding='utf-8', newline='') as stream:
            return list(csv.DictReader(stream))
    actual = read('region-summary.csv')
    assert len(actual) == len(expected)
    for row, (region, prior, current) in zip(actual, expected):
        percent = 'N/A' if prior == 0 else str((Decimal(current-prior)/prior*100).quantize(Decimal('.01'), rounding=ROUND_HALF_UP))
        assert row == dict(region=region, prior_cny=f'{Decimal(prior)/100:.2f}', current_cny=f'{Decimal(current)/100:.2f}', change_cny=f'{Decimal(current-prior)/100:.2f}', change_percent=percent), (row, region)
    top = db.execute('SELECT product, SUM(cents) AS total FROM eligible WHERE week=2 GROUP BY product ORDER BY total DESC, product LIMIT 3').fetchall()
    assert read('top-products.csv') == [dict(rank=str(i), product=name, current_cny=f'{Decimal(cents)/100:.2f}') for i, (name, cents) in enumerate(top, 1)]
    ledger = read('row-ledger.csv')
    assert len(ledger) == 46
    for row, (line, key, day, cents, first) in zip(ledger, db.execute('SELECT line, id, day, cents, (SELECT MIN(b.line) FROM sales b WHERE b.id=a.id) FROM sales a ORDER BY line')):
        decision = 'duplicate' if line != first else 'missing-date' if not day else 'included'
        week = '' if decision != 'included' else '1' if day < '2026-09-07' else '2'
        assert row == dict(source_line=str(line), order_id=key, decision=decision, week=week, net_sales=f'{Decimal(cents)/100:.2f}')
    summary = (args.output / 'summary.md').read_text(encoding='utf-8')
    for row in actual:
        assert '| ' + ' | '.join(row.values()) + ' |' in summary, 'Report table differs from CSV'
    assert '合成' in summary and 'N/A' in summary and '199.99' in summary
    print(json.dumps({'result':'PASS', 'input_rows':46, 'included_rows':44, 'regions':actual, 'top_products':read('top-products.csv'), 'input_sha256':manifest['sha256']}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
