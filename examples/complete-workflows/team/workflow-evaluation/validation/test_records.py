import importlib.util
import json
import tempfile
import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('records',ROOT/'scripts/check_records.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)


class RecordChecks(unittest.TestCase):
    def setUp(self):
        self.samples=json.loads((ROOT/'samples.json').read_text())
        self.rows=json.loads((ROOT/'records-template.json').read_text())
        self.tmp=tempfile.TemporaryDirectory();self.addCleanup(self.tmp.cleanup)
        self.root=Path(self.tmp.name)

    def check(self):return m.check(self.samples,self.rows,self.root)

    def test_blank_is_not_success(self):
        result=self.check()
        self.assertEqual(result['record_counts']['not-run'],20)
        self.assertIsNone(result['performance_claim'])

    def test_unrun_cannot_claim_pass(self):
        self.rows[0]['quality']='pass'
        with self.assertRaisesRegex(ValueError,'Unrun'):self.check()

    def test_missing_case_rejected(self):
        self.rows.pop()
        with self.assertRaisesRegex(ValueError,'Missing records'):self.check()

    def test_completed_requires_evidence(self):
        self.rows[0]['status']='completed'
        with self.assertRaisesRegex(ValueError,'needs evidence'):self.check()

    def test_invalid_time_rejected(self):
        self.rows[0]['elapsed_seconds']=float('nan')
        with self.assertRaisesRegex(ValueError,'time measurement'):self.check()

    def test_interrupted_preserved(self):
        (self.root/'fixture.txt').write_text('Synthetic validator fixture, not model evidence')
        self.rows[0].update(status='interrupted',started_at='2026-09-18T00:00:00Z',notes='validator fixture',evidence_files=['fixture.txt'],elapsed_seconds=1)
        self.assertEqual(self.check()['record_counts']['interrupted'],1)

    def test_path_escape_rejected(self):
        self.rows[0].update(status='interrupted',started_at='2026-09-18T00:00:00Z',notes='fixture',evidence_files=['../outside.txt'])
        with self.assertRaisesRegex(ValueError,'outside root'):self.check()


if __name__=='__main__':unittest.main(verbosity=2)
