import json
from pathlib import Path
import subprocess
import sys
import unittest


SCRIPT = Path(__file__).with_name("pre_tool_use_guard.py")


def run_hook(tool_input):
    payload = {
        "hook_event_name": "PreToolUse",
        "tool_name": "Bash",
        "tool_input": tool_input,
    }
    return subprocess.run(
        [sys.executable, str(SCRIPT)],
        input=json.dumps(payload),
        text=True,
        capture_output=True,
        check=False,
    )


class PreToolUseGuardTest(unittest.TestCase):
    def test_allows_normal_command(self):
        result = run_hook({"command": "git status"})

        self.assertEqual(result.returncode, 0)
        self.assertEqual(result.stdout, "")

    def test_denies_secret_shaped_string(self):
        result = run_hook({"command": "echo AKIAIOSFODNN7EXAMPLE"})

        self.assertEqual(result.returncode, 0)
        output = json.loads(result.stdout)
        decision = output["hookSpecificOutput"]
        self.assertEqual(decision["hookEventName"], "PreToolUse")
        self.assertEqual(decision["permissionDecision"], "deny")

    def test_ignores_non_object_tool_input(self):
        result = run_hook("unexpected")

        self.assertEqual(result.returncode, 0)
        self.assertEqual(result.stdout, "")


if __name__ == "__main__":
    unittest.main()
