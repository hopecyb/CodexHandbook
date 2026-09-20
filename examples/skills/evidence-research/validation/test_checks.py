import csv
import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class ResearchChecks(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.pack = Path(self.temp.name) / 'evidence-research'
        shutil.copytree(ROOT, self.pack, ignore=shutil.ignore_patterns('__pycache__'))

    def run_check(self, *args):
        return subprocess.run([sys.executable, '-O', str(self.pack / 'scripts/check_evidence.py'), *args],
                              capture_output=True, text=True, timeout=10)

    def rows(self, change):
        file = self.pack / 'solution/evidence.csv'
        with file.open(encoding='utf-8', newline='') as stream:
            reader = csv.DictReader(stream)
            fields, rows = reader.fieldnames, list(reader)
        change(rows)
        with file.open('w', encoding='utf-8', newline='') as stream:
            writer = csv.DictWriter(stream, fieldnames=fields)
            writer.writeheader()
            writer.writerows(rows)

    def rejected(self, text):
        result = self.run_check()
        self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
        self.assertIn(text, result.stderr)

    def test_reference_reports_missing(self):
        result = self.run_check()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('"status": "missing"', result.stdout)

    def test_missing_source_cannot_support_claim(self):
        self.rows(lambda rows: rows[3].update(status='supported', locators='M1'))
        self.rejected('Evidence cites unavailable')

    def test_changed_source_invalidates_support(self):
        file = self.pack / 'sources/01-product.md'
        file.write_bytes(file.read_bytes() + b'\nchanged')
        self.rejected('Evidence cites unavailable')

    def test_unreadable_text_reported(self):
        (self.pack / 'sources/01-product.md').write_bytes(b'\xff')
        result = self.run_check('--inspect-only')
        self.assertEqual(result.returncode, 0)
        self.assertIn('"status": "unreadable"', result.stdout)

    def test_source_cannot_escape(self):
        file = self.pack / 'sources/catalog.json'
        data = json.loads(file.read_text())
        data[0]['path'] = '../../outside.md'
        file.write_text(json.dumps(data))
        self.rejected('escapes source directory')

    def test_cannot_hide_unavailable_source(self):
        self.rows(lambda rows: rows.pop())
        report = self.pack / 'solution/report.md'
        report.write_text(report.read_text().replace('[R4]', ''), encoding='utf-8')
        self.rejected('Unreported unavailable')

    def test_conflict_needs_multiple_sources(self):
        self.rows(lambda rows: rows[1].update(source_ids='P', locators='P3'))
        self.rejected('Conflict requires multiple')

    def test_semantic_falsehood_is_not_detected(self):
        self.rows(lambda rows: rows[0].update(statement='支持所有格式且完全准确'))
        self.assertEqual(self.run_check().returncode, 0)


if __name__ == '__main__':
    unittest.main(verbosity=2)
