"""Review saved artifacts; never call a model or replace original run outputs."""
from pathlib import Path
from decimal import Decimal, ROUND_HALF_UP
from datetime import datetime, timezone
from collections import defaultdict
import csv, hashlib, json, re, shutil, subprocess, tempfile

ROOT = Path(__file__).resolve().parents[1]

def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def read_csv(p):
    with p.open(newline='', encoding='utf-8') as stream:
        reader = csv.DictReader(stream)
        return reader.fieldnames, list(reader)

def check_sales(run):
    _, rows = read_csv(run / 'input/sales.csv')
    groups = defaultdict(lambda: [Decimal(0), Decimal(0)])
    products = defaultdict(Decimal)
    seen, ledger = {}, []
    for line, row in enumerate(rows, 2):
        oid, date = row['order_id'], row['date']
        week, decision = '', 'included'
        if oid in seen:
            assert row == seen[oid], 'conflicting ID'
            decision = 'duplicate'
        else:
            seen[oid] = row
            if not date:
                decision = 'missing-date'
            else:
                datetime.strptime(date, '%Y-%m-%d')
                assert '2026-08-31' <= date <= '2026-09-13'
                week = '1' if date <= '2026-09-06' else '2'
                amount = Decimal(row['net_sales'])
                groups[row['region']][int(week)-1] += amount
                if week == '2':
                    products[row['product']] += amount
        ledger.append([str(line), oid, decision, week, row['net_sales']])
    fields, actual = read_csv(run / 'output/row-ledger.csv')
    assert fields == ['source_line', 'order_id', 'decision', 'week', 'net_sales']
    assert [list(r.values()) for r in actual] == ledger, 'row ledger mismatch'
    assert len(rows) == 46 and sum(r[2] == 'included' for r in ledger) == 44
    fields, actual = read_csv(run / 'output/region-summary.csv')
    assert fields == ['region','prior_cny','current_cny','change_cny','change_percent']
    groups['总计'] = [sum(v[i] for v in groups.values()) for i in range(2)]
    expected = []
    for region in ['华东','华南','西南','总计']:
        prior, current = groups[region]
        delta = current - prior
        pct = str((delta/prior*100).quantize(Decimal('.01'), rounding=ROUND_HALF_UP)) if prior else 'N/A'
        expected.append([region,f'{prior:.2f}',f'{current:.2f}',f'{delta:.2f}',pct])
    assert [list(r.values()) for r in actual] == expected, 'region mismatch'
    fields, actual = read_csv(run / 'output/top-products.csv')
    assert fields == ['rank','product','current_cny']
    expected_products = [[str(i), p, f'{amount:.2f}'] for i, (p, amount) in enumerate(sorted(products.items(),key=lambda x:(-x[1],x[0]))[:3],1)]
    assert [list(r.values()) for r in actual] == expected_products, 'product mismatch'
    return {'csv_fields_and_all_rows_match': True, 'included_rows': 44, 'prior_cny': str(groups['总计'][0]), 'current_cny': str(groups['总计'][1])}

def check_bug(run):
    original, corrected = run/'input', run/'output'
    assert (original/'cart.test.js').read_bytes() == (corrected/'cart.test.js').read_bytes(), 'test modified'
    executions = []
    with tempfile.TemporaryDirectory(prefix='handbook-review-') as temp:
        work = Path(temp)
        for name in ('cart.test.js', 'package.json'):
            shutil.copyfile(original/name, work/name)
        for label, source in [('original',original),('corrected',corrected)]:
            shutil.copyfile(source/'cart.js', work/'cart.js')
            result = subprocess.run(['node','--test','cart.test.js'],cwd=work,capture_output=True,text=True)
            executions.append({'label':label,'command':'node --test cart.test.js','cwd':'temporary copy with original tests','exit_code':result.returncode,'stdout':result.stdout.replace(str(work),'<REVIEW_TMP>'),'stderr':result.stderr.replace(str(work),'<REVIEW_TMP>')})
    assert [e['exit_code'] for e in executions] == [1,0], 'unexpected test outcome'
    return {'original_tests_unchanged':True,'node_version':subprocess.check_output(['node','--version'],text=True).strip(),'reviewer_executions':executions,'note':'These are later reviewer runs, not evidence the experiment agent ran the original failing test.'}

def check_article(run):
    links = []
    for file in sorted((run/'output').glob('*.md')):
        for target in re.findall(r'\]\(([^)]+)\)', file.read_text()):
            if '://' in target or target.startswith('#'):
                continue
            path = target.split('#')[0]
            assert (file.parent/path).is_file(), f'missing source link: {target}'
            links.append({'file':file.relative_to(run).as_posix(),'target':target})
    assert links, 'no local source links'
    return {'resolving_local_links':links,'note':'Existence only; claim support and uncertainty are reviewed separately.'}

def main():
    plan = json.loads((ROOT/'plan.json').read_text())
    results = []
    for spec in plan['runs']:
        run = ROOT/spec['run_id']
        assert (run/'telemetry/end.json').is_file(), f'{run.name} incomplete'
        for path, expected in spec['input_hashes'].items():
            assert digest(run/path) == expected, f'input changed: {run.name}/{path}'
        assert digest(run/'task.md') == spec['task_sha256']
        try:
            evidence = {'sales':check_sales,'article':check_article,'bug':check_bug}[spec['case']](run)
            result = {'run_id':run.name,'artifact_check':'pass','inputs_and_task_unchanged':True,'evidence':evidence}
        except (AssertionError, FileNotFoundError) as exc:
            result = {'run_id':run.name,'artifact_check':'fail','inputs_and_task_unchanged':True,'error':str(exc)}
        results.append(result)
    record = {'checked_at_utc':datetime.now(timezone.utc).isoformat(),'reviewer':'primary agent; not blind; no human reviewer','runs':results}
    (ROOT/'reviewer-checks.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({r['run_id']:r['artifact_check'] for r in results}))
    return 0 if all(r['artifact_check']=='pass' for r in results) else 1

if __name__ == '__main__':
    raise SystemExit(main())
