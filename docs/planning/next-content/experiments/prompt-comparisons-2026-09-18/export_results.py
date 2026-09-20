"""Create a public copy; preserve all original experiment files unchanged."""
from pathlib import Path
from datetime import datetime
import hashlib,json,re,sys
BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[4]
DEST = ROOT/'examples/complete-workflows/team/prompt-comparison-results'
plan = json.loads((BASE/'plan.json').read_text())
assert len(plan['runs']) == 12
for spec in plan['runs']:
    assert (BASE/spec['run_id']/'telemetry/end.json').is_file(), f"incomplete {spec['run_id']}"

def sanitize(s):
    return s.replace(str(BASE),'<EXPERIMENT_ROOT>').replace(str(ROOT),'<REPOSITORY_ROOT>').replace(str(Path.home()),'<USER_HOME>')

def timestamp(obj, prefix):
    for k,v in obj.items():
        if k.startswith(prefix) and isinstance(v,str):
            return datetime.fromisoformat(v.replace(' UTC','+00:00').replace('Z','+00:00'))
    raise ValueError(f'missing {prefix} time')

manifest, runs = [], []
for spec in plan['runs']:
    run = BASE/spec['run_id']
    start = json.loads((run/'telemetry/start.json').read_text())
    end = json.loads((run/'telemetry/end.json').read_text())
    for file in sorted(run.rglob('*')):
        if not file.is_file() or '__pycache__' in file.parts:
            continue
        relative = file.relative_to(BASE)
        assert file.suffix in {'.md','.csv','.json','.py','.js','.diff','.log','.txt','.sh'}, file
        raw = file.read_bytes()
        public = sanitize(raw.decode()).encode()
        target = DEST/relative
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_bytes(public)
        manifest.append({'path':relative.as_posix(),'original_sha256':hashlib.sha256(raw).hexdigest(),'public_sha256':hashlib.sha256(public).hexdigest(),'path_redacted':raw != public})
    elapsed=(timestamp(end,'end')-timestamp(start,'start')).total_seconds()
    assert 0 < elapsed < 1000, elapsed
    record={**spec,'status':end.get('status',end.get('task_status')),'start':timestamp(start,'start').isoformat(),'end':timestamp(end,'end').isoformat(),'elapsed_seconds':round(elapsed,2),'actual_model_label':None,'reasoning_setting':None,'human_rework_minutes':None,'tool_failures':end.get('tool_errors',[]),'telemetry_limitations':end.get('telemetry_limitations',[]),'output_paths':[p.relative_to(run).as_posix() for p in sorted((run/'output').rglob('*')) if p.is_file()]}
    runs.append(record)
DEST.mkdir(parents=True,exist_ok=True)
(DEST/'plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
(DEST/'runs.json').write_text(sanitize(json.dumps({'runs':runs},ensure_ascii=False,indent=2))+'\n')
(DEST/'file-manifest.json').write_text(json.dumps({'redaction':'Only assigned experiment/repository/home absolute paths replaced with <EXPERIMENT_ROOT>/<REPOSITORY_ROOT>/<USER_HOME>; original files retained privately. No task outputs repaired.','files':manifest},ensure_ascii=False,indent=2)+'\n')
print(f'Exported {len(runs)} runs, {len(manifest)} files.')
