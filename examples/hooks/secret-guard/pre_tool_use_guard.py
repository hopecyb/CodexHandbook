#!/usr/bin/env python3
import json
import re
import sys


SECRET_PATTERN = re.compile(r"\bAKIA[0-9A-Z]{16}\b")


def main() -> int:
    event = json.load(sys.stdin)
    tool_input = event.get("tool_input")
    command = tool_input.get("command", "") if isinstance(tool_input, dict) else ""

    if SECRET_PATTERN.search(command):
        result = {
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": "Secret-shaped string blocked by example hook.",
            }
        }
        print(json.dumps(result))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
