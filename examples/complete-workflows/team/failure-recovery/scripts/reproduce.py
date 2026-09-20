"""Reproduce five designed failures using real CLI subprocesses in isolated copies."""
import argparse
import hashlib
import json
import platform
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def hashes(root):
    return {p.relative_to(root).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in root.rglob('*') if p.is_file() and '__pycache__' not in p.parts}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', required=True, type=Path, help='New directory for logs; existing paths rejected')
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=False)
    baseline = hashes(ROOT / 'vendor')
    records = []
    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)

        def invoke(name, phase, command, expected):
            result = subprocess.run([sys.executable, *map(str, command)], capture_output=True, text=True, timeout=15)
            # Normalize only machine-specific paths; preserve tool messages and exit codes.
            normalize = lambda value: value.replace(str(work), '<WORK>').replace(sys.executable, '<PYTHON>')
            entry = {'phase': phase, 'command': ['<PYTHON>', *[normalize(str(x)) for x in command]],
                     'exit_code': result.returncode, 'stdout': normalize(result.stdout), 'stderr': normalize(result.stderr)}
            (args.output / f'{name}-{phase}.json').write_text(json.dumps(entry, ensure_ascii=False, indent=2)+'\n')
            if result.returncode != expected:
                raise RuntimeError(f'{name}/{phase}: expected {expected}, received {result.returncode}')
            return entry

        def clone(name, case):
            target = work / case / name
            shutil.copytree(ROOT / 'vendor' / name, target)
            return target

        case = '01-source-changed'
        pack = clone('source-backed-writer', case)
        file = pack / 'sources/01-product.md'; original = file.read_bytes()
        file.write_bytes(original + '\n误加的段落\n'.encode())
        cmd = [pack / 'scripts/check_article.py']
        fail = invoke(case, 'before', cmd, 1)
        file.write_bytes(original)
        ok = invoke(case, 'after', cmd, 0)
        records.append({'case': case, 'diagnosis': '固定来源与已知哈希不一致', 'single_change': '恢复误改来源文件的已知原始字节，未改哈希索引', 'before': fail['exit_code'], 'after': ok['exit_code']})

        case = '02-unmapped-citation'
        pack = clone('source-backed-writer', case)
        file = pack / 'solution/article.md'
        file.write_text(file.read_text().replace('[F1]', '[F99]'), encoding='utf-8')
        cmd = [pack / 'scripts/check_article.py']
        fail = invoke(case, 'before', cmd, 1)
        file.write_text(file.read_text().replace('[F99]', '[F1]'), encoding='utf-8')
        ok = invoke(case, 'after', cmd, 0)
        records.append({'case': case, 'diagnosis': '文章编号不在事实表中', 'single_change': '回查 P1 与事实表后，只修复误写的引用编号', 'before': fail['exit_code'], 'after': ok['exit_code']})

        case = '03-stale-proposal'
        pack = clone('issue-triage', case)
        file = pack / 'solution/proposals.json'; original = file.read_bytes()
        rows = json.loads(original); rows[0]['input_sha256'] = '0' * 64
        file.write_text(json.dumps(rows,ensure_ascii=False),encoding='utf-8')
        cmd = [pack / 'scripts/dry_run.py']
        fail = invoke(case, 'before', cmd, 1)
        file.write_bytes(original)
        ok = invoke(case, 'after', cmd, 0)
        records.append({'case': case, 'diagnosis': '当前输入与建议记录中的哈希不匹配', 'single_change': '替换为已对照当前固定输入复核的整份参考建议，不直接重算哈希掩盖旧结论', 'before': fail['exit_code'], 'after': ok['exit_code']})

        case = '04-wrong-site-scope'
        pack = clone('quiet-link-monitor', case)
        script, site, state = pack / 'scripts/run_once.py', pack / 'fixtures/fixed', work / case / 'state.json'
        invoke(case, 'setup', [script,'--site',site,'--state',state], 0)
        state_before = state.read_bytes()
        fail = invoke(case, 'before', [script,'--site',pack / 'fixtures/broken','--state',state], 3)
        if state.read_bytes() != state_before:raise RuntimeError('Scope rejection changed state')
        ok = invoke(case, 'after', [script,'--site',site,'--state',state], 0)
        records.append({'case': case, 'diagnosis': '误把同一个状态文件用于另一个站点目录', 'single_change': '仅将 --site 改回状态绑定的原目录；不删状态', 'before': fail['exit_code'], 'after': ok['exit_code']})

        case = '05-corrupt-state'
        pack = clone('quiet-link-monitor', case)
        script, site, state = pack / 'scripts/run_once.py', pack / 'fixtures/fixed', work / case / 'state.json'
        cmd = [script,'--site',site,'--state',state]
        invoke(case, 'setup', cmd, 0)
        backup = state.read_bytes(); state.write_text('{truncated',encoding='utf-8')
        fail = invoke(case, 'before', cmd, 3)
        if state.read_text() != '{truncated':raise RuntimeError('Corrupt state was overwritten')
        state.write_bytes(backup)
        ok = invoke(case, 'after', cmd, 0)
        records.append({'case': case, 'diagnosis': '状态 JSON 被截断，不能安全读取基线', 'single_change': '仅恢复本次运行前保存的已知完好备份，保留原站点和命令', 'before': fail['exit_code'], 'after': ok['exit_code']})
    if hashes(ROOT / 'vendor') != baseline:raise RuntimeError('Original inputs changed')
    summary = {'environment': {'python':platform.python_version(),'os':platform.system(),'arch':platform.machine()},
               'designed_failures_actually_executed': True, 'original_inputs_unchanged': True,
               'cases':records, 'limits':'No model, network, authentication or real production incident was exercised.'}
    (args.output / 'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
    print('PASS: five real failure/recovery CLI pairs; source inputs unchanged; logs saved.')


if __name__ == '__main__':
    main()
