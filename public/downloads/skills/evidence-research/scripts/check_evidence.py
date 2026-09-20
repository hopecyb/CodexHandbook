"""Inspect local teaching sources and validate evidence structure, not meaning."""
import argparse
import csv
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def require(ok, message):
    if not ok:
        raise ValueError(message)


def inspect(folder):
    folder = folder.resolve()
    catalog = json.loads((folder / 'catalog.json').read_text(encoding='utf-8'))
    states, texts = {}, {}
    for item in catalog:
        sid = item['id']
        require(sid not in states, 'Duplicate source ID')
        path = (folder / item['path']).resolve()
        require(path.is_relative_to(folder), 'Source path escapes source directory')
        try:
            data = path.read_bytes()
            text = data.decode('utf-8')
            actual = hashlib.sha256(data).hexdigest()
            status = 'unverified' if not item['sha256'] else ('available' if actual == item['sha256'] else 'changed')
            if status == 'available':
                texts[sid] = text
        except FileNotFoundError:
            status, actual = 'missing', None
        except (OSError, UnicodeError):
            status, actual = 'unreadable', None
        states[sid] = {'status': status, 'path': item['path'], 'sha256': actual}
    require(bool(states), 'Empty catalog')
    return states, texts


def check(output, states, texts):
    with (output / 'evidence.csv').open(encoding='utf-8', newline='') as file:
        rows = list(csv.DictReader(file))
    report = (output / 'report.md').read_text(encoding='utf-8')
    ids = [row['claim_id'] for row in rows]
    require(ids and all(re.fullmatch(r'R\d+', i) for i in ids), 'Invalid claim IDs')
    require(len(ids) == len(set(ids)), 'Duplicate claim IDs')
    require(set(ids) == set(re.findall(r'\[(R\d+)\]', report)), 'Unmapped report claim')
    unavailable = set()
    for row in rows:
        status = row['status']
        require(status in {'supported', 'conflict', 'unknown', 'unavailable'}, 'Invalid evidence status')
        require(row['statement'].strip() and row['note'].strip(), 'Missing statement or note')
        sids = set(row['source_ids'].split(';'))
        require(sids <= states.keys(), 'Unknown source ID')
        if status == 'unavailable':
            require(not row['locators'], 'Unavailable source cannot have read locators')
            require(all(states[s]['status'] != 'available' for s in sids), 'Available source marked unavailable')
            unavailable.update(sids)
            continue
        require(all(s in texts for s in sids), 'Evidence cites unavailable source')
        if status == 'conflict':
            require(len(sids) >= 2, 'Conflict requires multiple sources')
        located = set()
        for locator in row['locators'].split(';'):
            match = re.fullmatch(r'([A-Z]+)\d+', locator)
            require(match is not None, 'Invalid locator')
            sid = match.group(1)
            require(sid in sids, 'Locator/source mismatch')
            require(re.search(r'^## ' + re.escape(locator) + r' ', texts[sid], re.M), 'Missing locator')
            located.add(sid)
        require(located == sids, 'Source without locator')
    require(unavailable == {s for s, info in states.items() if info['status'] != 'available'}, 'Unreported unavailable source')
    require('合成' in report and '虚构' in report, 'Missing synthetic identity')
    print(f'PASS: {len(rows)} evidence rows; structure only, semantic review required.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--sources', type=Path, default=ROOT / 'sources')
    parser.add_argument('--output', type=Path, default=ROOT / 'solution')
    parser.add_argument('--inspect-only', action='store_true')
    args = parser.parse_args()
    try:
        states, texts = inspect(args.sources)
        print(json.dumps(states, ensure_ascii=False, indent=2))
        if not args.inspect_only:
            check(args.output, states, texts)
    except (ValueError, OSError, KeyError, TypeError, UnicodeError, csv.Error) as error:
        print(f'FAIL: {error}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
