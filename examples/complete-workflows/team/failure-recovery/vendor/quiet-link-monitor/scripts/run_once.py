"""One local audit, durable change records, no scheduler or message transport."""
import argparse
import hashlib
import json
import os
import sys
import tempfile
from pathlib import Path
from check_links import audit


def fingerprint(report):
    # Ordering is not a meaningful change; position changes are retained.
    semantic = {key: sorted(report.get(key, []), key=lambda r: json.dumps(r, sort_keys=True))
                for key in ('findings', 'unchecked')}
    semantic['error'] = report.get('error')
    return hashlib.sha256(json.dumps(semantic, ensure_ascii=False, sort_keys=True).encode()).hexdigest()


def run(site, state_path, resume=False):
    site, state_path = site.resolve(), state_path.resolve()
    if state_path.is_relative_to(site):
        raise ValueError('Keep state outside the audited site')
    state_path.parent.mkdir(parents=True, exist_ok=True)
    lock = state_path.with_name(state_path.name + '.lock')
    # Exclusive local lock. Never automatically remove another process's lock.
    fd = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY, 0o600)
    os.close(fd)
    try:
        if state_path.exists():
            state = json.loads(state_path.read_text(encoding='utf-8'))
            if state.get('version') != 1 or state.get('site') != str(site):
                raise ValueError('State version/site mismatch')
            if not isinstance(state.get('history'), list) or not isinstance(state.get('events'), list):
                raise ValueError('Invalid state; preserve it for investigation')
        else:
            state = {'version': 1, 'site': str(site), 'paused': False, 'failures': 0,
                     'fingerprint': None, 'report': None, 'history': [], 'events': []}
        if state['paused'] and not resume:
            return {'status': 'paused', 'new_event': None, 'message': 'Inspect failure, then explicitly use --resume'}, 3
        if resume:
            state['paused'], state['failures'] = False, 0
        try:
            report = audit(site)
            code = 0 if report['local_pass'] else 1
        except (OSError, UnicodeError, ValueError) as error:
            report, code = {'error': str(error)}, 2
        prior, current = state['report'], fingerprint(report)
        state['failures'] = state['failures'] + 1 if code == 2 else 0
        paused_now = state['failures'] >= 3
        event = None
        first_actionable = prior is None and code != 0
        changed = prior is not None and state['fingerprint'] != current
        if first_actionable or changed or paused_now:
            if paused_now:
                kind = 'stopped'
            elif code == 2:
                kind = 'check-error'
            elif code == 1:
                kind = 'findings-changed'
            elif prior and (prior.get('error') or prior.get('findings')):
                kind = 'recovered'
            else:
                kind = 'coverage-changed'
            sequence = len(state['history']) + 1
            event = {'id': hashlib.sha256(f'{site}:{sequence}:{current}:{kind}'.encode()).hexdigest(),
                     'kind': kind, 'run': sequence, 'delivery': 'not-sent', 'report': report}
            state['events'].append(event)
        state.update(paused=paused_now, fingerprint=current, report=report)
        state['history'].append({'run': len(state['history']) + 1, 'exit_code': code,
                                 'fingerprint': current, 'event_id': event['id'] if event else None})
        temp_path = None
        try:
            with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', dir=state_path.parent,
                                             prefix=state_path.name + '.', delete=False) as stream:
                temp_path = Path(stream.name)
                json.dump(state, stream, ensure_ascii=False, indent=2)
                stream.write('\n')
                stream.flush()
                os.fsync(stream.fileno())
            os.replace(temp_path, state_path)
        finally:
            if temp_path and temp_path.exists():
                temp_path.unlink()
        return {'status': 'paused' if paused_now else 'checked', 'exit_code': code,
                'new_event': event, 'state_file': str(state_path), 'external_actions': []}, 3 if paused_now else code
    finally:
        lock.unlink()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site', required=True, type=Path)
    parser.add_argument('--state', required=True, type=Path)
    parser.add_argument('--resume', action='store_true')
    args = parser.parse_args()
    try:
        result, code = run(args.site, args.state, args.resume)
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return code
    except (OSError, ValueError, KeyError, TypeError) as error:
        print(json.dumps({'status': 'stopped', 'error': str(error), 'external_actions': []}, ensure_ascii=False))
        return 3


if __name__ == '__main__':
    sys.exit(main())
