"""Mutate isolated copies to check evidence failures and semantic limitations."""
import csv
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class EvidenceChecks(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.pack = Path(self.temp.name) / 'source-backed-writer'
        shutil.copytree(ROOT, self.pack, ignore=shutil.ignore_patterns('__pycache__'))

    def run_check(self):
        # Checks must still run with Python optimization enabled.
        return subprocess.run([sys.executable, '-O', str(self.pack / 'scripts/check_article.py')],
                              capture_output=True, text=True, timeout=10)

    def edit_text(self, path, old, new):
        file = self.pack / path
        text = file.read_text(encoding='utf-8')
        self.assertIn(old, text)
        file.write_text(text.replace(old, new), encoding='utf-8')

    def edit_claims(self, change):
        file = self.pack / 'solution/claim-map.csv'
        with file.open(encoding='utf-8', newline='') as stream:
            reader = csv.DictReader(stream)
            fields, rows = reader.fieldnames, list(reader)
        change(rows)
        with file.open('w', encoding='utf-8', newline='') as stream:
            writer = csv.DictWriter(stream, fieldnames=fields)
            writer.writeheader()
            writer.writerows(rows)

    def rejected(self, message):
        result = self.run_check()
        self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
        self.assertIn(message, result.stderr)

    def test_reference_passes(self):
        result = self.run_check()
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_unknown_claim(self):
        self.edit_text('solution/article.md', '[F1]', '[F99]')
        self.rejected('Unmapped or unused')

    def test_duplicate_claim(self):
        self.edit_claims(lambda rows: rows.append(dict(rows[0])))
        self.rejected('Duplicate claim')

    def test_missing_locator(self):
        self.edit_claims(lambda rows: rows[0].update(locator='P99'))
        self.rejected('Missing locator')

    def test_unlocated_source(self):
        self.edit_claims(lambda rows: rows[0].update(source_id='P;C'))
        self.rejected('Source without locator')

    def test_changed_source(self):
        file = self.pack / 'sources/01-product.md'
        file.write_text(file.read_text(encoding='utf-8') + '\n变更', encoding='utf-8')
        self.rejected('Source changed')

    def test_missing_conflict_record(self):
        (self.pack / 'solution/unresolved.md').write_text('无需确认', encoding='utf-8')
        self.rejected('Missing conflict references')

    def test_semantic_falsehood_is_not_detected(self):
        # Intentionally document a blind spot: valid identifiers cannot prove meaning.
        self.edit_claims(lambda rows: rows[0].update(claim='支持任何格式且准确率百分之百'))
        result = self.run_check()
        self.assertEqual(result.returncode, 0, result.stderr)


if __name__ == '__main__':
    unittest.main(verbosity=2)
