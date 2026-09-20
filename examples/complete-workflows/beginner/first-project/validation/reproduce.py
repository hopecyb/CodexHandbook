"""Reproduce file-scope and recovery mechanics; never run a model or edit the pack."""
from pathlib import Path
import hashlib
import json
import platform
import shutil
import tempfile

ROOT = Path(__file__).resolve().parents[1]

def snapshot(folder):
    return {str(p.relative_to(folder)): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in sorted(folder.rglob('*')) if p.is_file()}

def require(value, message):
    if not value:
        raise RuntimeError(message)

before = snapshot(ROOT / 'starter')
with tempfile.TemporaryDirectory(prefix='first-project-') as tmp:
    base = Path(tmp)
    work = base / 'work'
    shutil.copytree(ROOT / 'starter', work)
    require(snapshot(work) == before, 'Initial copy differs')
    notice = work / 'notice.md'
    notice.write_bytes(b'<!-- ' + '状态：练习草稿，未发布'.encode() + b' -->\n' + notice.read_bytes())
    require(notice.read_bytes() == (ROOT / 'references/step-2-notice.md').read_bytes(), 'Step 2 differs')
    changes = [name for name, digest in snapshot(work).items() if before.get(name) != digest]
    require(changes == ['notice.md'], 'Unexpected edit scope')
    # Use the authored reference, not a generated or purported model output.
    shutil.copyfile(ROOT / 'references/notice.md', notice)
    for name in ('facts.md', 'private-note.md'):
        require(snapshot(work)[name] == before[name], f'Protected file changed: {name}')
    backup = base / 'backup-final'
    drill = base / 'recovery-drill'
    shutil.copytree(work, backup)
    shutil.copytree(work, drill)
    (drill / 'notice.md').write_text('恢复演练中的错误版本\n')
    require(snapshot(drill) != snapshot(backup), 'Failure was not reproduced')
    shutil.copyfile(backup / 'notice.md', drill / 'notice.md')
    require(snapshot(drill) == snapshot(backup), 'Recovery did not restore all bytes')
    require(snapshot(work) == snapshot(backup), 'Real work copy was altered')
require(snapshot(ROOT / 'starter') == before, 'Pack inputs were altered')
print(json.dumps({
    'status': 'passed', 'python': platform.python_version(),
    'system': platform.system(), 'machine': platform.machine(),
    'checks': ['initial-copy-identical', 'step-2-only-notice-changed',
               'reference-protected-inputs-unchanged', 'drill-difference-observed',
               'drill-restored-all-file-bytes', 'work-and-starter-unchanged'],
    'starter_sha256': before,
    'model_run': False, 'reader_trial': False,
    'scope': 'Temporary local file operations with authored reference; no semantic model evaluation'
}, ensure_ascii=False, indent=2))
