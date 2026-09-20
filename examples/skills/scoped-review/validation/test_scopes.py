"""Regression checks for collection boundaries; does not evaluate model judgement."""
import json
import subprocess
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / 'scripts/collect_diff.py'
SCENARIO = json.loads((ROOT / 'fixtures/scenario.json').read_text())


class ScopeTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='scoped-review-')
        self.addCleanup(self.temp.cleanup)
        self.repo = Path(self.temp.name)
        self.git('init', '-q', '-b', 'fixture')
        for name, content in SCENARIO['base_files'].items():
            (self.repo / name).write_text(content)
        self.git('add', '.')
        self.git('commit', '-qm', 'base fixture')
        self.git('tag', 'fixture-base')
        (self.repo / SCENARIO['branch_file']).write_text(SCENARIO['branch_content'])
        self.git('add', '.')
        self.git('commit', '-qm', 'branch fixture')
        (self.repo / SCENARIO['staged_file']).write_text(SCENARIO['staged_content'])
        self.git('add', SCENARIO['staged_file'])
        (self.repo / SCENARIO['staged_file']).write_text(SCENARIO['unstaged_content'])
        (self.repo / SCENARIO['untracked_file']).write_text(SCENARIO['untracked_content'])

    def git(self, *args):
        return subprocess.check_output(
            ['git', '-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid',
             '-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=/dev/null',
             '-C', str(self.repo), *args], text=True,
        )

    def run_collector(self, mode, *options, expected=0):
        p = subprocess.run(['python3', str(SCRIPT), '--repo', str(self.repo), '--mode', mode, *options], capture_output=True, text=True)
        self.assertEqual(p.returncode, expected, p.stderr)
        return json.loads(p.stdout) if expected == 0 else p.stderr

    def test_staged_snapshot_exposes_bug(self):
        data = self.run_collector('staged')
        self.assertEqual([s['scope'] for s in data['sections']], ['staged'])
        self.assertIn('+    return amount * (1 - percent)\n', data['sections'][0]['patch'])
        self.assertNotIn('branch-only-note', data['sections'][0]['patch'])

    def test_unstaged_snapshot_repairs_index(self):
        data = self.run_collector('unstaged')
        self.assertEqual([s['scope'] for s in data['sections']], ['unstaged'])
        self.assertIn('+    return amount * (1 - percent / 100)\n', data['sections'][0]['patch'])

    def test_all_uncommitted_does_not_cancel_two_patches(self):
        self.assertEqual(self.git('diff', 'HEAD', '--', 'cart.py'), '')
        data = self.run_collector('working-tree')
        self.assertEqual([s['scope'] for s in data['sections']], ['staged', 'unstaged'])
        self.assertTrue(all(s['patch'] for s in data['sections']))
        self.assertEqual(data['untracked_paths'], ['new file.md'])
        self.assertFalse(data['untracked_content_collected'])

    def test_branch_uses_merge_base_and_excludes_local_changes(self):
        data = self.run_collector('branch', '--base', 'fixture-base')
        self.assertEqual(data['merge_base'], self.git('rev-parse', 'fixture-base').strip())
        self.assertEqual(data['sections'][0]['files'], [{'status': 'M', 'path': 'notes.md'}])
        self.assertIn('+branch-only-note', data['sections'][0]['patch'])
        self.assertNotIn('cart.py', data['sections'][0]['patch'])

    def test_missing_and_invalid_baselines_fail_without_fallback(self):
        self.run_collector('branch', expected=2)
        self.run_collector('branch', '--base', 'does-not-exist', expected=2)
        self.run_collector('staged', '--base', 'fixture-base', expected=2)

    def test_collection_preserves_repository_state(self):
        before = (self.git('status', '--porcelain=v1', '-z'), self.git('rev-parse', 'HEAD'), (self.repo / '.git/index').read_bytes())
        self.run_collector('working-tree')
        after = (self.git('status', '--porcelain=v1', '-z'), self.git('rev-parse', 'HEAD'), (self.repo / '.git/index').read_bytes())
        self.assertEqual(before, after)
        self.assertEqual((self.repo / 'cart.py').read_text(), SCENARIO['unstaged_content'])

    def test_deleted_binary_and_newline_paths_are_visible(self):
        (self.repo / 'notes.md').unlink()
        (self.repo / 'binary.dat').write_bytes(b'\x00\x01\x02')
        self.git('add', 'binary.dat')
        (self.repo / 'two\nlines.md').write_text('synthetic')
        data = self.run_collector('working-tree')
        self.assertIn({'status':'A','path':'binary.dat'}, data['sections'][0]['files'])
        self.assertIn({'status':'D','path':'notes.md'}, data['sections'][1]['files'])
        self.assertIn('two\nlines.md', data['untracked_paths'])


if __name__ == '__main__':
    unittest.main(verbosity=2)
