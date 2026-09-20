"""Reproduce one broken anchor and a one-attribute repair in a temporary site."""
from pathlib import Path
import hashlib
import json
import platform
import subprocess
import sys
import tempfile
ROOT = Path(__file__).resolve().parents[1]
def run(site):
    p = subprocess.run([sys.executable, str(ROOT / 'scripts/check_links.py'), str(site)], capture_output=True, text=True)
    return {'exit_code': p.returncode, 'stdout': json.loads(p.stdout), 'stderr': p.stderr}
def require(ok, message):
    if not ok: raise RuntimeError(message)
broken = (ROOT / 'fixtures/broken.html').read_bytes()
good = (ROOT / 'solution/index.html').read_bytes()
require(broken.count(b'href="#signup"') == 1, 'Expected exactly one wrong target')
require(broken.replace(b'href="#signup"', b'href="#participation"') == good, 'More than one attribute differs')
with tempfile.TemporaryDirectory(prefix='reading-site-') as tmp:
    site = Path(tmp)
    file = site / 'index.html'
    file.write_bytes(broken)
    before = run(site)
    require(before['exit_code'] == 1 and len(before['stdout']['findings']) == 1, 'Expected one failure')
    require(before['stdout']['findings'][0]['reason'] == 'missing-fragment', 'Wrong failure')
    file.write_bytes(file.read_bytes().replace(b'href="#signup"', b'href="#participation"'))
    after = run(site)
    require(after['exit_code'] == 0 and after['stdout']['local_pass'], 'Repair failed')
    require(file.read_bytes() == good, 'Repair differs from reference')
require((ROOT / 'fixtures/broken.html').read_bytes() == broken, 'Fixture changed')
print(json.dumps({'python':platform.python_version(),'system':platform.system(),'machine':platform.machine(),
 'before':before,'after':after,'repair':'Only href: #signup -> #participation',
 'reference_sha256':hashlib.sha256(good).hexdigest(),'model_run':False},ensure_ascii=False,indent=2))
