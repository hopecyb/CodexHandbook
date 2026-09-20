---
title: 확장 기능 지도
description: 작업, 규칙, 절차, 도구, 보호, 배포, 실행 시점, 병렬 분업의 여덟 역할로 Codex 확장 체계를 이해합니다.
locale: ko
source_locale: zh-CN
source_revision: 183812c
translation_status: draft
translated_at: 2026-09-20
---

확장 기능은 같은 작업 흐름에 함께 등장하기 때문에 혼동하기 쉽습니다. 하지만 각각 해결하는 문제는 다릅니다.

이 페이지는 전체 구조를 먼저 보여 줍니다. 요청과 `AGENTS.md`는 작업과 규칙을 제공하고, Skill은 재사용할 수 있는 절차를 제공합니다. MCP는 외부 도구를 연결하고, Hook은 수명 주기의 특정 시점에 작업을 보호합니다. Plugin은 기능을 묶어 배포하고, Scheduled task는 정해진 시간에 실행을 시작합니다. 이 기능들은 조합할 수 있으며 반드시 거쳐야 하는 업그레이드 순서는 없습니다.

## 시스템 구조

![재사용 가능한 Codex 작업 체계 구조](/diagrams/codex-work-system-architecture-ko.svg)

그림에서 세 가지를 확인하세요.

- **작업 입력**은 이번에 할 일을 정하고, 프로젝트 규칙은 매번 지켜야 할 내용을 정합니다.
- **실행 능력**이 넓어져도 결과가 자동으로 올바른 것은 아닙니다. MCP, 하위 Agent, 스크립트에도 권한과 검수 기준이 적용됩니다.
- **배포와 실행 시점**은 작업 절차 자체가 아닙니다. Plugin은 기능을 조합하고 Scheduled task는 지정된 시간에 한 번의 실행을 시작합니다.

## 여덟 가지 역할

| 역할 | 방식 | 가장 적합한 문제 | 담당하지 않는 일 |
|---|---|---|---|
| 현재 작업 | 요청 | 이번에 할 일, 범위, 검수 기준 | 장기 프로젝트 규칙 |
| 지속 규칙 | `AGENTS.md` | 저장소 명령, 관례, 디렉터리 경계 | 특정 작업 유형의 전체 절차 |
| 재사용 절차 | Skill | 안정적인 단계, 참고 자료, 템플릿, 보조 스크립트 | 외부 시스템 권한을 저절로 얻기 |
| 외부 도구 | MCP / Connector | 저장소 밖의 데이터와 작업을 Codex가 사용하도록 하기 | 업무 목표의 타당성을 결정하기 |
| 수명 주기 보호 | Hook | 세션 또는 도구 호출 전후에 기록, 검사, 맥락 추가, 차단 | 테스트와 사람의 검토를 대체하기 |
| 조합 배포 | Plugin | Skills, 연결 기능, MCP, Hooks, 작업 템플릿 묶기 | 모든 구성 요소를 자동으로 신뢰 가능하게 만들기 |
| 시간 기반 실행 | Scheduled task | 검증된 작업을 정기적으로 실행하기 | 명확한 요청과 중단 조건을 대체하기 |
| 병렬 분업 | 하위 Agent | 독립적인 조사, 테스트, 검토를 나누기 | 파일 쓰기 충돌과 조율 비용을 자동으로 없애기 |

## 하나의 작업에서 기능을 조합하는 방법

팀에서 매주 의존성 위험을 검사한다고 가정해 보겠습니다.

1. `AGENTS.md`가 허용된 패키지 관리자, 테스트 명령, 수정 금지 디렉터리를 정합니다.
2. `dependency-audit` Skill이 의존성 수집, 공지 확인, 위험 분류, 검증 절차를 고정합니다.
3. GitHub 또는 패키지 저장소 MCP가 외부 정보를 제공합니다. 읽기 전용 권한을 우선합니다.
4. Hook은 실제 비밀 키가 포함된 출력을 막거나 외부 도구 호출을 기록할 수 있습니다.
5. Plugin이 Skill, MCP 구성, Hook을 묶어 팀에 배포합니다.
6. Scheduled task가 매주 한 번 실행되어 보고서나 초안 issue만 만들고, 게시 전에는 사람이 검토합니다.

계층이 하나 적다고 해서 방식이 뒤처진 것은 아닙니다. 로컬에서 의존성을 한 번 확인하는 일이라면 명확한 요청과 기존 터미널 명령으로 충분할 수 있습니다.

## 자주 쓰는 대응 관계

| 필요 | 권장 방식 |
|---|---|
| 코드 스타일과 테스트 명령 통일 | AGENTS.md |
| PR 검토 절차 표준화 | Skill |
| Jira/Linear 티켓 읽기 | MCP |
| 팀 전체에 통합 기능 설치 | Plugin |
| 매번 제출하기 전 비밀 키 검사 | Hooks |
| 매주 월요일 주간 보고서 초안 자동 생성 | Automations와 사람의 게시 검토 |

## 한 번의 성공을 팀 자산으로 만들기

다음 단계를 기준으로 절차를 더 정리할지 판단할 수 있습니다.

| 단계 | 형태 | 적합한 상황 |
|---|---|---|
| 일회성 요청 | 현재 대화의 작업 설명 | 한 번만 하거나 문제를 탐색 중일 때 |
| 템플릿 | 목표, 맥락, 제약, 검수 기준의 고정 골격 | 비슷한 작업이 반복되지만 단계는 조정 중일 때 |
| Skill | `SKILL.md`와 템플릿, 참고 자료 또는 스크립트 | 절차가 안정적이고 성공 기준이 분명할 때 |
| Plugin | Skills, 연결 기능, MCP, Hooks, 템플릿 묶음 | 설치, 업데이트, 관리를 통일해야 할 때 |
| Scheduled task | 저장된 작업, 시간 규칙, 실행 기록 | 수동으로 검증했고 주기적으로 실행할 가치가 있을 때 |

MCP, Hook, 하위 Agent는 이 단계에서 반드시 거쳐야 하는 요소가 아닙니다. 외부 도구, 수명 주기 보호, 병렬 분업이 실제로 필요한 작업에만 추가하세요.

자세한 선택 기준은 [확장 방식 선택하기](/ko/skills/choosing-an-extension-method/)를 참고하세요.

## 현재 제품별 경계

- Codex Skills는 `SKILL.md`가 포함된 디렉터리로 정의되며 스크립트, 참고 자료, 자산을 함께 둘 수 있습니다. Codex는 필요할 때 전체 설명을 불러옵니다.
- 데스크톱 앱, Codex CLI, IDE 확장은 같은 Codex host에서 MCP 구성을 공유합니다.
- Plugins는 현재 ChatGPT의 지원되는 진입점, Codex 데스크톱 환경, Codex CLI에서 사용할 수 있습니다. IDE 확장은 Plugin 탐색과 사용을 지원하지 않습니다.
- Scheduled task는 ChatGPT Web 또는 데스크톱 앱에서 만들고 관리합니다. CLI와 IDE에서는 요청, Skill, 스크립트를 미리 테스트할 수 있지만 Scheduled 관리 화면은 없습니다.
- 하위 Agent는 독립적인 읽기 전용 조사, 테스트, 검토에 적합합니다. 같은 파일 집합을 병렬로 수정하면 충돌 비용이 늘어납니다.

제품 진입점은 계속 바뀔 수 있습니다. 구체적인 설정을 하기 전 [기능 비교](/ko/guide/reference/feature-comparison/)와 아래의 공식 출처를 확인하세요.

## 공식 출처

- [Skills와 Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Codex Skills 만들기](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Codex 하위 Agent](https://learn.chatgpt.com/docs/agent-configuration/subagents)
