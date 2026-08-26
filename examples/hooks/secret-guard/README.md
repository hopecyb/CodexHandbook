# PreToolUse secret guard

This example demonstrates the current Codex `hooks.json` shape and the
`PreToolUse` deny response. It uses only the Python standard library.

Run the tests from the repository root:

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

The regular command and malformed-input fixtures produce no output. The fake
AWS Access Key ID fixture produces a structured `permissionDecision: deny`
response. This is an educational guardrail, not a replacement for a dedicated
secret scanner.
