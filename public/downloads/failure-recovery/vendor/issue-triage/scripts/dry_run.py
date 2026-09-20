"""Validate authored/model proposals and print a review queue; never call GitHub."""
import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def require(ok, message):
    if not ok:
        raise ValueError(message)


def digest(issue):
    return hashlib.sha256(json.dumps(issue, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode()).hexdigest()


def validate(value, schema, path='$'):
    # Deliberately limited to the keywords in this bundled schema; not a general validator.
    allowed = {'$schema', 'title', 'type', 'additionalProperties', 'required', 'properties',
               'minimum', 'pattern', 'enum', 'uniqueItems', 'maxItems', 'items', 'minLength', 'maxLength'}
    require(set(schema) <= allowed, 'Unsupported schema keyword')
    kind = schema['type']
    types = {'object': dict, 'array': list, 'string': str, 'integer': int, 'boolean': bool}
    require(kind in types and type(value) is types[kind], f'{path}: expected {kind}')
    if 'enum' in schema:
        require(value in schema['enum'], f'{path}: invalid enum')
    if kind == 'object':
        props = schema['properties']
        require(set(schema.get('required', [])) <= value.keys(), f'{path}: missing field')
        require(schema.get('additionalProperties') is False, 'Unsupported object schema')
        require(value.keys() <= props.keys(), f'{path}: unknown field')
        for key, item in value.items():
            validate(item, props[key], path + '.' + key)
    elif kind == 'array':
        require(len(value) <= schema.get('maxItems', len(value)), f'{path}: too many items')
        if schema.get('uniqueItems'):
            canonical = [json.dumps(v, sort_keys=True) for v in value]
            require(len(canonical) == len(set(canonical)), f'{path}: duplicate item')
        for item in value:
            validate(item, schema['items'], path + '[]')
    elif kind == 'string':
        require(len(value) >= schema.get('minLength', 0), f'{path}: too short')
        require(len(value) <= schema.get('maxLength', len(value)), f'{path}: too long')
        if 'pattern' in schema:
            require(re.search(schema['pattern'], value) is not None, f'{path}: invalid pattern')
    elif kind == 'integer':
        require(value >= schema.get('minimum', value), f'{path}: below minimum')


def review(issues, proposals, schema):
    require(type(issues) is list and type(proposals) is list, 'Expected input arrays')
    indexed = {}
    for issue in issues:
        require(type(issue) is dict and set(issue) == {'id', 'title', 'body', 'synthetic'}, 'Invalid issue fields')
        require(type(issue['id']) is int and issue['id'] > 0 and issue['id'] not in indexed, 'Invalid or duplicate issue ID')
        require(type(issue['title']) is str and type(issue['body']) is str and issue['synthetic'] is True, 'Use synthetic fixture inputs')
        indexed[issue['id']] = issue
    seen, queue = set(), []
    for proposal in proposals:
        validate(proposal, schema)
        identity = proposal['issue_id']
        require(identity in indexed and identity not in seen, 'Unknown or duplicate proposal ID')
        seen.add(identity)
        require(proposal['input_sha256'] == digest(indexed[identity]), 'Stale input hash')
        require(proposal['rationale'].strip(), 'Blank rationale')
        require(all(s.strip() for s in proposal['missing_information']), 'Blank missing information')
        if proposal['type'] == 'security' or 'security-review' in proposal['labels']:
            require(proposal['needs_security'], 'Security signal requires review flag')
        queue.append({'issue_id': identity, 'state': 'human-review-required',
                      'proposed_labels': proposal['labels'], 'priority': proposal['priority'],
                      'needs_security': proposal['needs_security'], 'rationale': proposal['rationale'],
                      'missing_information': proposal['missing_information']})
    require(seen == set(indexed), 'Missing proposal')
    return {'mode': 'dry-run', 'external_actions': [], 'queue': queue}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--issues', type=Path, default=ROOT / 'fixtures/issues.json')
    parser.add_argument('--proposals', type=Path, default=ROOT / 'solution/proposals.json')
    args = parser.parse_args()
    try:
        load = lambda p: json.loads(p.read_text(encoding='utf-8'))
        result = review(load(args.issues), load(args.proposals), load(ROOT / 'schema.json'))
        print(json.dumps(result, ensure_ascii=False, indent=2))
    except (ValueError, OSError, TypeError, KeyError) as error:
        print(f'FAIL: {error}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
