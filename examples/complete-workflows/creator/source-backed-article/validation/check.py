"""Check file integrity and citation structure, not the truth of natural language."""
import argparse
import csv
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path, default=ROOT / 'solution')
    args = parser.parse_args()
    sources = {}
    with (ROOT / 'sources/index.csv').open(encoding='utf-8', newline='') as stream:
        for row in csv.DictReader(stream):
            content = (ROOT / 'sources' / row['file']).read_bytes()
            assert hashlib.sha256(content).hexdigest() == row['sha256'], f'Source changed: {row["source_id"]}'
            assert row['synthetic'] == 'true' and row['license'] == 'CC0-1.0'
            sources[row['source_id']] = content.decode('utf-8')
    with (args.output / 'claim-map.csv').open(encoding='utf-8', newline='') as stream:
        claims = list(csv.DictReader(stream))
    article = (args.output / 'article.md').read_text(encoding='utf-8')
    ids = [row['claim_id'] for row in claims]
    assert len(ids) == len(set(ids)), 'Duplicate claim IDs'
    assert set(re.findall(r'\[(F\d+)\]', article)) == set(ids), 'Unmapped or unused claim ID'
    for claim in claims:
        assert claim['evidence_type'] in {'原文支持', '作者推断', '未确认'}
        assert claim['claim'].strip() and claim['confidence_note'].strip()
        source_ids = claim['source_id'].split(';')
        assert all(sid in sources for sid in source_ids), claim
        for locator in claim['locator'].split(';'):
            sid = locator[0]
            assert sid in source_ids
            assert re.search(r'^## ' + re.escape(locator) + r' ', sources[sid], re.M), f'Missing locator: {locator}'
        for section in claim['article_section'].split(';'):
            heading = '## ' + section + '\n'
            assert heading in article, f'Missing section: {section}'
            body = article.split(heading, 1)[1].split('\n## ', 1)[0]
            assert '[' + claim['claim_id'] + ']' in body, f'Claim is not in declared section: {claim["claim_id"]}'
    assert '合成' in article and '虚构' in article, 'Synthetic identity must remain visible'
    unresolved = (args.output / 'unresolved.md').read_text(encoding='utf-8')
    assert 'P3' in unresolved and 'C2' in unresolved
    print(f'PASS: {len(sources)} source hashes; {len(claims)} claim IDs and locators. Semantic review remains required.')


if __name__ == '__main__':
    main()
