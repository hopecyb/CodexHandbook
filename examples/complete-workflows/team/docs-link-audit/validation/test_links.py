import importlib.util
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('links', ROOT / 'scripts/check_links.py')
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)


class LinkChecks(unittest.TestCase):
    def test_broken_fixture(self):
        report = m.audit(ROOT / 'fixtures/site')
        self.assertFalse(report['local_pass'])
        self.assertEqual([f['reason'] for f in report['findings']], ['missing-target', 'missing-fragment'])
        self.assertEqual([f['line'] for f in report['findings']], [4, 5])

    def test_solution_preserves_unchecked_external(self):
        report = m.audit(ROOT / 'solution/site')
        self.assertTrue(report['local_pass'])
        self.assertEqual(len(report['unchecked']), 1)

    def test_encoded_fragment_and_root_relative(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / 'index.html').write_text('<h1 id="中文"></h1><a href="/#%E4%B8%AD%E6%96%87">ok</a>')
            self.assertTrue(m.audit(root)['local_pass'])

    def test_escape_symlink_and_missing_asset(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / 'site'
            root.mkdir()
            (Path(tmp) / 'secret.txt').write_text('not read')
            (root / 'alias.txt').symlink_to(Path(tmp) / 'secret.txt')
            (root / 'index.html').write_text('<a href="../secret.txt">x</a><a href="alias.txt">x</a><img src="missing.png">')
            reasons = [f['reason'] for f in m.audit(root)['findings']]
            self.assertEqual(reasons, ['outside-site-root', 'outside-site-root', 'missing-target'])

    def test_base_tag_stops_instead_of_false_success(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / 'index.html').write_text('<base href="/elsewhere/"><a href="thing">x</a>')
            with self.assertRaisesRegex(ValueError, 'Unsupported base'):
                m.audit(root)

    def test_empty_site_stops(self):
        with tempfile.TemporaryDirectory() as tmp:
            with self.assertRaisesRegex(ValueError, 'No HTML'):
                m.audit(Path(tmp))

    def test_cli_exit_codes(self):
        for fixture, expected in [('fixtures/site', 1), ('solution/site', 0), ('not-present', 2)]:
            result = subprocess.run([sys.executable, str(ROOT / 'scripts/check_links.py'), str(ROOT / fixture)], capture_output=True, timeout=10)
            self.assertEqual(result.returncode, expected)


if __name__ == '__main__':
    unittest.main(verbosity=2)
