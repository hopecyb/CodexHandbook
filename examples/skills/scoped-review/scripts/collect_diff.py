"""Collect explicit Git review scopes without modifying the target repository."""
import argparse
import json
import subprocess
import sys
from pathlib import Path


def git(repo, *args):
    result = subprocess.run(
        ['git', '--no-optional-locks', '-c', 'core.fsmonitor=false', '-C', str(repo), *args],
        capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=30,
    )
    if result.returncode:
        raise ValueError(result.stderr.strip() or f'git command failed: {args[0]}')
    return result.stdout


def collect(repo, mode, base=None):
    root = Path(git(repo, 'rev-parse', '--show-toplevel').strip())
    head = git(root, 'rev-parse', '--verify', 'HEAD^{commit}').strip()
    if mode == 'branch' and not base:
        raise ValueError('branch mode requires --base; no implicit main/default branch')
    if mode != 'branch' and base:
        raise ValueError('--base is only valid with branch mode')
    if mode not in {'staged', 'unstaged', 'working-tree', 'branch'}:
        raise ValueError(f'unknown mode: {mode}')
    scopes = []
    resolved_base = merge_base = None
    if mode == 'branch':
        resolved_base = git(root, 'rev-parse', '--verify', '--end-of-options', f'{base}^{{commit}}').strip()
        bases = git(root, 'merge-base', '--all', resolved_base, head).splitlines()
        if len(bases) != 1:
            raise ValueError('Expected one merge base; choose an unambiguous comparison')
        merge_base = bases[0]
        scopes.append(('branch', [merge_base, head]))
    else:
        if mode in {'staged', 'working-tree'}:
            scopes.append(('staged', ['--cached', head]))
        if mode in {'unstaged', 'working-tree'}:
            scopes.append(('unstaged', []))
    sections = []
    for label, revisions in scopes:
        common = ['diff', '--no-ext-diff', '--no-textconv', '--no-renames', '--ignore-submodules=none']
        patch = git(root, *common, '--no-color', '--unified=3', *revisions, '--')
        names = git(root, *common, '--name-status', '-z', *revisions, '--').split('\0')
        if names[-1] == '':
            names.pop()
        if len(names) % 2:
            raise ValueError('Unexpected name-status output')
        files = [{'status': names[i], 'path': names[i+1]} for i in range(0, len(names), 2)]
        sections.append({'scope': label, 'files': files, 'patch': patch})
    untracked = git(root, 'ls-files', '--others', '--exclude-standard', '-z').split('\0')
    untracked = [path for path in untracked if path]
    return {
        'mode': mode, 'head': head, 'requested_base': base,
        'resolved_base': resolved_base, 'merge_base': merge_base,
        'sections': sections,
        'untracked_paths': untracked,
        'untracked_content_collected': False,
        'scope_note': ('Branch mode reviews committed merge-base..HEAD only; local changes are excluded.'
                       if mode == 'branch' else
                       'Staged and unstaged patches are separate snapshots; do not replace them with HEAD..worktree.'),
        'limitations': ['Untracked content, ignored files and binary content require separate scope-aware inspection.',
                       'Submodule diffs do not recursively review the nested repository.',
                       'The collector does not run tests or decide whether changes are correct.'],
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', default='.')
    parser.add_argument('--mode', required=True, choices=['staged', 'unstaged', 'working-tree', 'branch'])
    parser.add_argument('--base')
    args = parser.parse_args()
    try:
        report = collect(args.repo, args.mode, args.base)
    except (ValueError, OSError, subprocess.TimeoutExpired) as error:
        print(f'Cannot collect review scope: {error}', file=sys.stderr)
        return 2
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
