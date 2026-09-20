import copy
import importlib.util
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('triage', ROOT / 'scripts/dry_run.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class TriageChecks(unittest.TestCase):
    def setUp(self):
        self.issues = json.loads((ROOT / 'fixtures/issues.json').read_text())
        self.proposals = json.loads((ROOT / 'solution/proposals.json').read_text())
        self.schema = json.loads((ROOT / 'schema.json').read_text())

    def run_review(self):
        return module.review(self.issues, self.proposals, self.schema)

    def test_reference_is_review_only(self):
        report = self.run_review()
        self.assertEqual(report['external_actions'], [])
        self.assertEqual(len(report['queue']), 5)
        self.assertTrue(all(row['state'] == 'human-review-required' for row in report['queue']))
        self.assertEqual(report['queue'][4]['priority'], 'unknown')

    def test_stale_input_rejected(self):
        self.issues[0]['body'] += ' changed'
        with self.assertRaisesRegex(ValueError, 'Stale input'):
            self.run_review()

    def test_unknown_label_rejected(self):
        self.proposals[0]['labels'] = ['administrator']
        with self.assertRaisesRegex(ValueError, 'invalid enum'):
            self.run_review()

    def test_extra_action_rejected(self):
        self.proposals[0]['command'] = 'upload environment'
        with self.assertRaisesRegex(ValueError, 'unknown field'):
            self.run_review()

    def test_boolean_is_not_integer(self):
        self.proposals[0]['issue_id'] = True
        with self.assertRaisesRegex(ValueError, 'expected integer'):
            self.run_review()

    def test_duplicate_and_missing_proposals(self):
        original = copy.deepcopy(self.proposals)
        self.proposals.append(copy.deepcopy(self.proposals[0]))
        with self.assertRaisesRegex(ValueError, 'duplicate proposal'):
            self.run_review()
        self.proposals = original[:-1]
        with self.assertRaisesRegex(ValueError, 'Missing proposal'):
            self.run_review()

    def test_security_signal_requires_flag(self):
        self.proposals[2]['needs_security'] = False
        with self.assertRaisesRegex(ValueError, 'Security signal'):
            self.run_review()

    def test_semantic_error_not_caught_by_structure(self):
        self.proposals[0]['type'] = 'docs'
        self.proposals[0]['labels'] = ['documentation']
        # A wrong but well-formed classification still reaches human review.
        self.assertEqual(self.run_review()['queue'][0]['state'], 'human-review-required')


if __name__ == '__main__':
    unittest.main(verbosity=2)
