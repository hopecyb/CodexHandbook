---
title: Hook 이벤트 유형
description: 세션, 작업 차례, 도구 호출, 컨텍스트 압축 및 하위 Agent 수명 주기에 맞춰 이벤트를 선택합니다.
legacyVerification:
  status: "verified"
  products: "로컬 Codex host를 사용하는 환경"
  checkedAt: "2026-08-25"
locale: ko
source_locale: zh-CN
source_revision: '07f4965'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Hook을 고를 때 첫 질문은 “스크립트를 어떻게 작성할까?”가 아니라 “부작용이 생기기 전과 후 중 언제 처리해야 할까?”입니다. 이벤트를 잘못된 위치에 두면 스크립트가 아무리 좋아도 일이 끝난 뒤 보고만 할 수 있습니다.

![Codex Hook 수명 주기와 주요 이벤트](/diagrams/hook-lifecycle-events-ko.svg)

## 현재 이벤트 목록

| 이벤트 | 발생 시점 | matcher가 걸러내는 것 | 일반적인 용도 |
|---|---|---|---|
| `SessionStart` | 세션이 시작되거나 재개될 때 | `startup`, `resume`, `clear`, `compact` | 환경 설명, 컨텍스트 복원 |
| `SubagentStart` | 하위 Agent가 시작될 때 | 하위 Agent 유형 | 하위 Agent에 제약 추가 |
| `UserPromptSubmit` | 사용자 프롬프트가 제출될 때 | 지원하지 않음; 설정해도 무시됨 | 비밀 정보 검사, 개발 컨텍스트 추가 |
| `PreToolUse` | 지원되는 로컬 도구 실행 전 | 도구 이름 | 호출 거부 또는 입력 변경 |
| `PermissionRequest` | Codex가 승인을 요청하려 할 때 | 도구 이름 | 허용, 거부 또는 일반 승인 절차로 넘기기 |
| `PostToolUse` | 지원되는 로컬 도구가 반환된 후 | 도구 이름 | 결과 기록, 후속 추론을 위한 피드백 제공 |
| `PreCompact` | 컨텍스트 압축 전 | `manual` / `auto` | 압축 전 상태 저장 |
| `PostCompact` | 컨텍스트 압축 후 | `manual` / `auto` | 필요한 컨텍스트 복원 |
| `SubagentStop` | 하위 Agent가 종료되려 할 때 | 하위 Agent 유형 | 확인 작업 한 차례 더 요구 |
| `Stop` | 주 작업 차례가 끝나려 할 때 | 지원하지 않음; 설정해도 무시됨 | 기본 스레드에 계속 검증하도록 요구 |
| `SessionEnd` | 기본 스레드가 종료될 때 | 현재는 `other` | 빠른 마무리 로그; 하위 Agent에서는 실행되지 않음 |

## 도구 matcher

자주 쓰는 값은 다음과 같습니다.

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Shell과 통합 실행 명령은 `Bash`로 매칭됩니다. `apply_patch`는 `Edit` 또는 `Write` 별칭으로도 매칭할 수 있습니다. MCP와 다른 로컬 함수 도구는 실제 도구 이름으로 매칭됩니다.

## 가장 혼동하기 쉬운 세 이벤트

### PreToolUse

입력에는 `tool_name`, `tool_use_id`, 도구별 `tool_input`이 들어 있습니다. 다음을 할 수 있습니다.

- `permissionDecision: "deny"`: 지원되는 도구 호출 차단
- `permissionDecision: "allow"` + `updatedInput`: 지원되는 도구 입력 변경
- `additionalContext`: 차단하지 않고 모델에 컨텍스트만 추가

일반 stdout 텍스트는 무시됩니다. 공식 형식의 JSON을 출력해야 합니다. 종료 코드 `2`와 stderr를 사용해 차단하고 이유를 전할 수도 있습니다.

### PermissionRequest

Codex가 원래 shell 권한 상승이나 관리되는 네트워크 접근 등의 승인을 요청하려 할 때만 발생합니다. 이 이벤트에서는 allow, deny를 결정하거나 아무 결정도 하지 않아 일반 승인 UI로 넘길 수 있습니다. 일반 도구 정책을 위한 `PreToolUse` 대신 사용하지 마세요.

### PostToolUse

도구가 이미 실행된 뒤입니다. Bash가 0이 아닌 종료 코드를 반환해도 발생합니다. 여기서 block을 반환하거나 종료 코드 `2`로 끝내면 피드백을 바꾸고 모델이 처리하도록 할 수 있을 뿐, 명령 실행, 파일 쓰기 또는 외부 작업을 되돌릴 수 없습니다.

## Stop은 “종료 거부” 버튼이 아닙니다

`Stop`의 `decision: "block"`은 reason을 바탕으로 계속 진행하라는 프롬프트를 자동 생성해 Codex가 한 차례 더 작업하게 합니다. 이미 완료된 도구의 부작용은 되돌리지 않습니다. 무한 반복을 막기 위해 스크립트에서 `stop_hook_active`를 확인해야 합니다.

## 이벤트 선택 연습

| 요구 사항 | 선택 | 이유 |
|---|---|---|
| 의심스러운 token이 파일에 기록되는 것을 막기 | `PreToolUse`로 `apply_patch\|Edit\|Write` 매칭 | 파일 쓰기 전에 처리해야 함 |
| shell 실패율 집계 | `PostToolUse`로 `Bash` 매칭 | 종료 결과가 필요함 |
| 자동 컨텍스트 압축 전 중요한 결정 저장 | `PreCompact` | 압축 전에 발생함 |
| 테스트가 끝나기 전에 작업이 종료되지 않게 하기 | `Stop` | 현재 작업 차례를 계속해야 함 |
| 기본 스레드 종료 시 30초짜리 네트워크 요청 보내기 | `SessionEnd`에는 부적합 | 최대 3초이고 긴 작업을 종료 이벤트에 넣어서는 안 됨 |

## 공식 출처

- [OpenAI: Hooks 이벤트와 matcher](https://learn.chatgpt.com/docs/hooks)
