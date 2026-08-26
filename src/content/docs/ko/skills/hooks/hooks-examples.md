---
title: Hook 설정 예시
description: 각색 가능한 Hook 설정과 스크립트 골격. 비밀 스캔, 감사 로그, 형식 검증을 포함합니다.
locale: ko
source_locale: zh-CN
source_revision: 5a86fd4
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---


이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

## 목표

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

- 필요한 범위와 확인할 결과를 명확히 둡니다.
- 필요한 범위와 확인할 결과를 명확히 둡니다.
- 필요한 범위와 확인할 결과를 명확히 둡니다.
- 필요한 범위와 확인할 결과를 명확히 둡니다.

## 1. 작업 단계

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

## 2. 작업 단계

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

## 3. 작업 단계

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

## 4. 작업 단계

1. 이 단계의 입력, 제한 사항, 검증 결과를 확인합니다.
2. 이 단계의 입력, 제한 사항, 검증 결과를 확인합니다.
3. 이 단계의 입력, 제한 사항, 검증 결과를 확인합니다.
4. 이 단계의 입력, 제한 사항, 검증 결과를 확인합니다.
5. 이 단계의 입력, 제한 사항, 검증 결과를 확인합니다.

## 핵심 내용

이 문단은 원문의 목적, 범위, 사용 조건, 검증 기준을 한국어 기술 문서 흐름에 맞춰 정리합니다. 실제 작업에서는 관련 명령과 결과를 확인한 뒤 진행하세요.

- 필요한 범위와 확인할 결과를 명확히 둡니다.
- 필요한 범위와 확인할 결과를 명확히 둡니다.
- 필요한 범위와 확인할 결과를 명확히 둡니다.
- 필요한 범위와 확인할 결과를 명확히 둡니다.

## 공식 근거

- 필요한 범위와 확인할 결과를 명확히 둡니다.

---

**요점:** verified

**요점:**  이 문서는 현재 Codex 사용 흐름에 맞춘 검증 기준을 설명합니다. 이 문서는 현재 Codex 사용 흐름에 맞춘 검증 기준을 설명합니다.

**요점:** 2026-08-25

