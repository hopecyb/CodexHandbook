"""Check evaluation records without inferring model performance."""
import argparse
import json
import math
import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
AXES = ('trigger','boundary','format','quality')


def check(samples, records, evidence_root):
    ids = {sample['id'] for sample in samples}
    if len(ids) != len(samples):raise ValueError('Duplicate sample ID')
    seen, counts = set(), {'not-run':0,'completed':0,'interrupted':0}
    for row in records:
        identity, status = row['sample_id'], row['status']
        if identity not in ids or identity in seen:raise ValueError('Unknown or duplicate record')
        seen.add(identity)
        if status not in counts:raise ValueError('Invalid status')
        counts[status] += 1
        for axis in AXES:
            if row[axis] not in (None,'pass','partial','fail','not-applicable','unobserved'):raise ValueError('Invalid axis rating')
        for key in ('elapsed_seconds','human_rework_minutes'):
            value = row[key]
            if value is not None and (type(value) not in (int,float) or not math.isfinite(value) or value < 0):
                raise ValueError('Invalid time measurement')
        if status == 'not-run':
            if any(row[axis] is not None for axis in AXES) or row['elapsed_seconds'] is not None or row['human_rework_minutes'] is not None or row['evidence_files']:
                raise ValueError('Unrun record contains observed results')
        else:
            if not row['evidence_files'] or not row['notes'].strip():raise ValueError('Observed record needs evidence and notes')
            if status == 'completed' and any(row[axis] is None for axis in AXES):raise ValueError('Completed record has unassessed axis')
            if not row['started_at']:raise ValueError('Observed record needs start timestamp')
        for relative in row['evidence_files']:
            file = (evidence_root / relative).resolve()
            if Path(relative).is_absolute() or not file.is_relative_to(evidence_root.resolve()) or not file.is_file():
                raise ValueError('Evidence missing or outside root')
    if seen != ids:raise ValueError('Missing records; interrupted cases must not disappear')
    return {'record_counts': counts, 'performance_claim': None,
            'note':'Record structure is valid. Evidence existence does not prove truthful observations or semantic quality.'}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--records',type=Path,default=ROOT/'records-template.json')
    parser.add_argument('--evidence-root',type=Path,default=ROOT)
    args=parser.parse_args()
    try:
        result=check(json.loads((ROOT/'samples.json').read_text()),json.loads(args.records.read_text()),args.evidence_root)
        print(json.dumps(result,ensure_ascii=False,indent=2))
    except (ValueError,OSError,TypeError,KeyError) as error:
        print(f'FAIL: {error}',file=sys.stderr);return 1
    return 0


if __name__=='__main__':sys.exit(main())
