"""Validate this teaching pack's integrity/citations, never semantic truth."""
import argparse
import csv
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def require(condition, message):
    if not condition:
        raise ValueError(message)


def check(output):
    sources = {}
    with (ROOT / 'sources/index.csv').open(encoding='utf-8', newline='') as stream:
        for row in csv.DictReader(stream):
            content = (ROOT / 'sources' / row['file']).read_bytes()
            require(hashlib.sha256(content).hexdigest() == row['sha256'], f'Source changed: {row["source_id"]}')
            require(row['synthetic'] == 'true' and row['license'] == 'CC0-1.0', 'Invalid teaching source metadata')
            sources[row['source_id']] = content.decode('utf-8')
    with (output / 'claim-map.csv').open(encoding='utf-8', newline='') as stream:
        claims = list(csv.DictReader(stream))
    article = (output / 'article.md').read_text(encoding='utf-8')
    ids = [row['claim_id'] for row in claims]
    require(bool(ids) and all(re.fullmatch(r'F\d+', i) for i in ids), 'Missing or invalid claim IDs')
    require(len(ids) == len(set(ids)), 'Duplicate claim IDs')
    require(set(re.findall(r'\[(F\d+)\]', article)) == set(ids), 'Unmapped or unused claim ID')
    for claim in claims:
        require(claim['evidence_type'] in {'原文支持', '作者推断', '未确认'}, 'Invalid evidence type')
        require(claim['claim'].strip() and claim['confidence_note'].strip(), 'Missing claim or confidence note')
        source_ids = claim['source_id'].split(';')
        require(all(sid in sources for sid in source_ids), 'Unknown source')
        locator_sources = set()
        for locator in claim['locator'].split(';'):
            require(bool(re.fullmatch(r'[PIC]\d+', locator)), f'Invalid locator: {locator}')
            sid = locator[0]
            require(sid in source_ids, 'Locator/source mismatch')
            require(re.search(r'^## ' + re.escape(locator) + r' ', sources[sid], re.M), f'Missing locator: {locator}')
            locator_sources.add(sid)
        require(locator_sources == set(source_ids), 'Source without locator')
        for section in claim['article_section'].split(';'):
            heading = '## ' + section + '\n'
            require(heading in article, f'Missing section: {section}')
            body = article.split(heading, 1)[1].split('\n## ', 1)[0]
            require('[' + claim['claim_id'] + ']' in body, f'Claim is not in declared section: {claim["claim_id"]}')
    require('合成' in article and '虚构' in article, 'Synthetic identity must remain visible')
    unresolved = (output / 'unresolved.md').read_text(encoding='utf-8')
    require('P3' in unresolved and 'C2' in unresolved, 'Missing conflict references')
    print(f'PASS: {len(sources)} source hashes; {len(claims)} claim IDs and locators. Semantic review remains required.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, default=ROOT / 'solution')
    args = parser.parse_args()
    try:
        check(args.output)
    except (ValueError, OSError, KeyError, UnicodeError, csv.Error) as error:
        print(f'FAIL: {error}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
