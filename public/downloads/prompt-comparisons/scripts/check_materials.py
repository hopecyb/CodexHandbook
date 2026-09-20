import hashlib
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'validation/input-hashes.json').read_text())
for file, expected in manifest.items():
    if hashlib.sha256((ROOT / file).read_bytes()).hexdigest() != expected:
        raise ValueError(f'Changed input: {file}')
for case in ('sales','article','bug'):
    folder = ROOT / 'cases' / case
    a, b = (folder/'A.md').read_text().strip(), (folder/'B.md').read_text().strip()
    if not b.startswith(a+'\n\n') or len(b)==len(a):
        raise ValueError(f'Variant changes baseline: {case}')
record = json.loads((ROOT/'blank-run.json').read_text())
if record['status']!='not-run' or any(value is not None for value in record['scores'].values()):
    raise ValueError('Blank template falsely contains results')
print(f'PASS: {len(manifest)} fixed input files; three additive A/B pairs; no fabricated run scores.')
