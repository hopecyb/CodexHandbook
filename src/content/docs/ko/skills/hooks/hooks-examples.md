---
legacyVerification:
  status: "verified"
  products: "로컬 Codex host를 사용하는 환경; 신뢰 관리는 Codex CLI `/hooks` 사용"
  checkedAt: "2026-08-25"
title: Hook 설정 예시
description: 실제 hooks.json과 Python 표준 라이브러리 스크립트로 테스트 가능한 PreToolUse 보호 장치를 구현합니다.
locale: ko
source_locale: zh-CN
source_revision: 'a8abc38'
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: '2026-10-26'
---

이 장에서는 이전 버전의 예시 이벤트 이름과 설정 필드를 제거했습니다. 예시는 현재 공식 `hooks.json` 구조를 따르며 실행 가능한 테스트가 포함되어 있습니다.

전체 파일은 [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard)에 있습니다.

![일러스트: 도구 호출 경로에 놓인 빛나는 게이트. 스캐너가 안전한 명령은 초록 차선으로 통과시키고 위험한 명령은 빨간 장벽으로 막으며, 옆의 테스트 패널에는 초록 불이 켜져 있다](/illustrations/hooks-guardrail.webp)

## 목표와 한계

목표는 `Bash` 또는 `apply_patch`의 명령 입력에 AWS Access Key ID처럼 보이는 테스트 문자열이 있으면 도구 실행 전에 거부하는 것입니다.

이 예시는 Hook의 입력·출력·테스트 구조를 보여 주기 위한 것입니다.

- 전문 secret scanner를 대체할 수 없습니다.
- 정규식 때문에 오탐과 누락이 생길 수 있습니다.
- Hosted tools는 검사하지 않습니다.
- 도구 입력 전체를 기록해서는 안 됩니다.

## 1. hooks.json 설정하기

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

실제 저장소에서 사용할 때는 보통 설정을 `.codex/hooks.json`에, 스크립트를 `.codex/hooks/`에 둡니다. 여기서는 핸드북 저장소의 전체 예제를 바로 검증할 수 있도록 examples 경로를 유지했습니다.

## 2. 거부 응답

스크립트는 stdin에서 이벤트 JSON을 읽고 `tool_input.command`만 검사합니다. 조건에 맞으면 다음을 출력합니다.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

조건에 맞지 않으면 아무것도 출력하지 않고 종료 코드 `0`으로 끝납니다. 일반적인 stdout 텍스트는 유효한 `PreToolUse` 결정이 되지 않습니다.

## 3. 테스트 실행하기

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

예상 결과는 정상 명령, 의심스러운 키, 딕셔너리가 아닌 `tool_input`을 다루는 테스트 세 개가 모두 통과하는 것입니다.

fixture를 직접 입력할 수도 있습니다.

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

정상 입력은 stdout을 생성하지 않습니다.

## 4. 프로젝트에서 활성화하기

1. 설정과 스크립트를 대상 저장소에 넣고 그 저장소 안에서 안정적으로 참조할 수 있는 경로로 바꿉니다.
2. 격리된 저장소에서 단위 테스트와 실제 정상 명령을 한 번 실행합니다.
3. Codex를 시작하고 `/hooks`를 열어 출처와 정확한 정의를 검토합니다.
4. 신뢰하도록 설정한 뒤 “정상 입력은 통과”하고 “테스트 문자열은 거부”되는지 각각 확인합니다.
5. 스크립트를 수정한 뒤 다시 검토합니다. hash가 바뀌면 관리되지 않는 Hook은 다시 신뢰 대기 상태가 됩니다.

## 알림에서 차단으로 강화하기

운영 팀은 보통 차단하지 않는 감사나 추가 맥락 제공부터 시작한 뒤 `deny`로 강화합니다. 강화하기 전에 최소한 다음 질문에 답해야 합니다.

- fixture가 알려진 오탐을 다룰 수 있는가?
- 스크립트가 시간이 초과되거나 비정상 종료될 때 사용자가 이유를 이해할 수 있는가?
- CI 또는 서버 측 정책도 같은 규칙을 보완하는가?
- 우회와 긴급 복구를 감사할 수 있는가?

## 공식 출처

- [OpenAI: Hooks 설정 및 PreToolUse 출력](https://learn.chatgpt.com/docs/hooks)
