---
title: Hooks 개요
description: Hook 설정의 탐색, 신뢰 검토, 처리기 및 보안 경계를 이해합니다.
legacyVerification:
  status: "verified"
  products: "로컬 Codex host를 사용하는 환경; CLI는 `/hooks` 신뢰 관리를 제공"
  checkedAt: "2026-08-25"
locale: ko
source_locale: zh-CN
source_revision: 'ac7889b'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Hooks를 사용하면 Codex의 Agent 실행 루프 안에서 명령 스크립트나 연결된 MCP 서버의 도구를 실행할 수 있습니다. 대표적인 용도로는 프롬프트의 비밀 정보 검사, 도구 호출 정책, 감사 기록, 세션 요약, 종료 전 검증이 있습니다.

![세션, 작업 차례, 도구 호출, 컨텍스트 압축 및 하위 Agent 이벤트를 보여 주는 Codex Hook 수명 주기](/diagrams/hook-lifecycle-events-ko.svg)

그림에서 가장 중요한 차이는 다음과 같습니다. `PreToolUse`는 지원되는 로컬 도구가 실행되기 전에 입력을 거부하거나 바꿀 수 있습니다. `PostToolUse`는 도구가 완료된 후에 발생하므로 이미 생긴 부작용을 되돌릴 수 없습니다.

## 설정은 어디에서 오는가

Codex는 활성 설정 계층의 다음 위치를 확인합니다.

- `~/.codex/hooks.json`
- `~/.codex/config.toml`의 `[hooks]`
- `<repo>/.codex/hooks.json`
- `<repo>/.codex/config.toml`의 `[hooks]`
- 활성화된 Plugin에 포함된 Hook
- 관리자가 시스템, MDM, Cloud 또는 `requirements.toml`을 통해 배포한 managed Hook

프로젝트 수준의 `.codex/`는 프로젝트를 신뢰할 때만 로드됩니다. 여러 출처에서 조건에 맞는 Hook은 모두 함께 실행됩니다. 우선순위가 높은 설정이 낮은 우선순위의 Hook 전체를 덮어쓰지는 않습니다.

같은 설정 계층에 `hooks.json`과 인라인 `[hooks]`가 모두 있으면 둘을 병합하고 시작 시 경고를 표시합니다. 한 계층에서는 표현 방식 하나만 사용하는 편이 좋습니다.

## 관리되지 않는 Hook은 반드시 검토하기

Codex는 Hook 정의의 hash로 신뢰 상태를 기록합니다. 새로 추가하거나 수정한 non-managed Hook은 검토 대기 상태로 표시되고, 사용자가 새 정의를 신뢰할 때까지 건너뜁니다.

CLI의 `/hooks`에서 출처를 확인하고 변경을 검토하며 개별 non-managed Hook을 신뢰하거나 비활성화할 수 있습니다. Plugin에 포함된 Hook에도 같은 신뢰 절차가 적용됩니다. Managed Hook은 조직 정책에 따라 신뢰되며 개인 Hook 브라우저에서 사용자가 비활성화할 수 없습니다.

## 실행 가능한 두 가지 처리기

| 처리기 | 용도 | 핵심 경계 |
|---|---|---|
| `command` | 로컬 스크립트를 실행하고 stdin으로 이벤트 JSON을 받음 | 스크립트 자체가 로컬 프로세스 권한을 가지므로 의존성과 출력을 검토해야 함 |
| `mcp_tool` | 연결된 MCP 서버의 도구를 호출 | 서버를 직접 시작하거나 다시 연결하지 않으며 `SessionEnd`를 지원하지 않음 |

현재 공식 설명에 따르면 `prompt`와 `agent` 처리기는 구문을 해석할 수는 있지만 실행 시 건너뜁니다. 실제로 실행할 설정에는 넣지 마세요.

## 실행 중 동작

- 조건에 맞는 여러 command Hook은 동시에 시작합니다. 한 Hook이 이미 조건에 맞은 다른 Hook의 시작을 막을 수는 없습니다.
- 대부분 Hook의 기본 `timeout`은 600초입니다. `SessionEnd`는 기본 1초, 최대 3초입니다. 운영용 스크립트에는 여전히 더 짧은 시간 제한을 명시하는 편이 좋습니다.
- command Hook의 작업 디렉터리는 세션의 `cwd`입니다. 저장소 스크립트에서는 Git 루트를 기준으로 경로를 해석하여 하위 디렉터리에서 시작해도 상대 경로를 찾을 수 있게 하세요.
- 비동기 Hook은 로깅과 분석에 적합하지만, 해당 Hook을 일으킨 작업을 차단, 승인, 입력 변경 또는 제어할 수 없습니다.

## 다른 보안 계층과의 관계

| 계층 | 담당 역할 |
|---|---|
| 샌드박스 | 파일, 네트워크, 시스템 기능의 경계 |
| 승인 | 위험이 큰 작업 실행 전 사람의 결정 |
| 명령 규칙 | 알려진 명령 패턴에 대한 선언형 allow/deny |
| Hook | 수명 주기 이벤트에서 사용자 정의하고 테스트할 수 있는 로직 실행 |
| 서버 측 권한 | 외부 시스템에서 최종적으로 허용하는 읽기와 쓰기 |

Hook이 포괄하는 도구 범위만으로 완전한 보안 경계가 되지는 않습니다. 공식 문서는 일부 전용 도구 경로가 기본 Hook 경로를 우회할 수 있다고 명시합니다. Hosted tool(예: WebSearch)도 로컬 `PreToolUse` / `PostToolUse`를 거치지 않습니다.

## 도입 순서

1. `PostToolUse` 또는 `SessionEnd`로 민감 정보를 가린 로그를 만들고 실제 동작을 먼저 관찰합니다.
2. 확신도가 높은 문제는 `systemMessage`나 추가 컨텍스트로 알립니다.
3. 규칙이 확실하고 스크립트에 fixture가 있으며 오탐을 감수할 수 있을 때만 `PreToolUse`에서 차단합니다.
4. Hook을 CI, 커밋 전 검사, 서버 측 권한과 맞춰 서로 모순되는 세 정책이 생기지 않도록 합니다.

## 완료 확인 목록

- [ ] 이벤트 이름이 현재 공식 목록에 있습니다.
- [ ] matcher가 필요한 도구 또는 출처만 대상으로 합니다.
- [ ] 스크립트에 고정 입력 테스트와 이해할 수 있는 오류 메시지가 있습니다.
- [ ] 로그에 token, 전체 프롬프트, 민감한 도구 인수가 저장되지 않습니다.
- [ ] Hook 실패, 시간 초과, 비활성화 경로를 연습했습니다.
- [ ] 팀이 `/hooks`의 신뢰 상태 변경이 뜻하는 바를 압니다.

## 공식 출처

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
