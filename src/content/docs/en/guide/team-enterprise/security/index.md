---
title: Security
description: Team-level risks, attack surface, and defenses—understand where risk lives before controls.
locale: en
source_locale: zh-CN
source_revision: b0896a2
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

Jumping into security detail without framing can leave you with vocabulary but not “what we are defending against.”

This section reads clearer as: where risk comes from → what layer to block or review.

## Recommended order

1. [Threat model](/en/guide/team-enterprise/security/threat-model/)
2. [Plugin and MCP risk](/en/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [Prompt injection](/en/guide/team-enterprise/security/prompt-injection/)

## Who should start here

- Team expanding Codex usage
- You are adding third-party extensions, external tools, or shared rules
- You need risks that “be careful” alone cannot fix

Security pages help identify what must be controlled by system boundaries.

---

**Status:** verified  
**Products:** Team / enterprise scenarios  
**Verification basis:** OpenAI plugin, app, and integration docs continue to emphasize risks from external connections, action permissions, source access, and approval boundaries; this page is security section navigation ordered threat model → Plugin/MCP → prompt injection.  
**Last verified:** 2026-07-26
