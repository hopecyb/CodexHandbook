import json
import shutil
import sys
import tempfile
import unittest
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
from run_once import run, fingerprint


class MonitorChecks(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.site, self.state = self.root / 'site', self.root / 'state.json'
        shutil.copytree(ROOT / 'fixtures/broken', self.site)

    def test_failure_repeat_recovery(self):
        first, code = run(self.site, self.state)
        self.assertEqual(code, 1)
        self.assertEqual(first['new_event']['kind'], 'findings-changed')
        repeated, code = run(self.site, self.state)
        self.assertIsNone(repeated['new_event'])
        shutil.copytree(ROOT / 'fixtures/fixed', self.site, dirs_exist_ok=True)
        restored, code = run(self.site, self.state)
        self.assertEqual(code, 0)
        self.assertEqual(restored['new_event']['kind'], 'recovered')
        self.assertEqual(len(json.loads(self.state.read_text())['events']), 2)

    def test_errors_pause_and_explicit_resume(self):
        shutil.rmtree(self.site)
        for expected in [2, 2, 3]:
            result, code = run(self.site, self.state)
            self.assertEqual(code, expected)
        before = self.state.read_bytes()
        shutil.copytree(ROOT / 'fixtures/fixed', self.site)
        self.assertEqual(run(self.site, self.state)[1], 3)
        self.assertEqual(before, self.state.read_bytes())
        result, code = run(self.site, self.state, resume=True)
        self.assertEqual(code, 0)
        self.assertEqual(result['new_event']['kind'], 'recovered')

    def test_lock_stops_without_overwriting(self):
        self.state.with_name('state.json.lock').write_text('other process')
        with self.assertRaises(FileExistsError):
            run(self.site, self.state)
        self.assertFalse(self.state.exists())

    def test_corrupt_state_preserved(self):
        self.state.write_text('{bad')
        with self.assertRaises(ValueError):
            run(self.site, self.state)
        self.assertEqual(self.state.read_text(), '{bad')

    def test_site_mismatch_rejected(self):
        run(self.site, self.state)
        with self.assertRaisesRegex(ValueError, 'mismatch'):
            run(self.root / 'different-site', self.state)

    def test_healthy_first_run_is_quiet(self):
        shutil.copytree(ROOT / 'fixtures/fixed', self.site, dirs_exist_ok=True)
        result, code = run(self.site, self.state)
        self.assertEqual(code, 0)
        self.assertIsNone(result['new_event'])
        self.assertEqual(result['external_actions'], [])

    def test_state_cannot_be_inside_site(self):
        with self.assertRaisesRegex(ValueError, 'outside'):
            run(self.site, self.site / 'state.json')

    def test_order_not_a_change(self):
        one = {'findings': [{'url':'a'}, {'url':'b'}], 'unchecked': []}
        two = {'findings': list(reversed(one['findings'])), 'unchecked': []}
        self.assertEqual(fingerprint(one), fingerprint(two))


if __name__ == '__main__':
    unittest.main(verbosity=2)
