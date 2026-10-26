---
title: 확장 방식 선택하기
description: 오래 남겨 둘 대상에 따라 프롬프트, AGENTS.md, Skill, MCP, Hook, Plugin 또는 Scheduled task를 선택합니다.
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / 데스크톱 App / Codex CLI / IDE(지원 범위는 방식마다 다름)"
  basis: "2026-08-25 기준 OpenAI 공식 Skills, Plugins, MCP, Hooks, Scheduled tasks 문서를 대조하여 각 방식의 역할, 제품 진입점, 보안 경계를 확인했습니다."
  checkedAt: "2026-08-25"
locale: ko
source_locale: zh-CN
source_revision: '28ae6f5'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

확장 방식이 많아질수록 흔한 실수는 먼저 기술 이름을 고른 뒤 거기에 맞는 문제를 찾는 것입니다. 더 안정적인 순서는 먼저 **무엇을 남겨 두고 싶은가, 또는 무엇이 자동으로 일어나야 하는가?**라고 묻는 것입니다.

가장 혼동하기 쉬운 이름은 다음과 같습니다.

- 프롬프트
- AGENTS.md
- Skill
- MCP
- Plugin
- Scheduled task

모두 “Codex 확장”이라고 부를 수 있지만, 어떤 경우에는 프롬프트 한 문장이면 충분하고 어떤 경우에만 더 무거운 방식이 필요합니다.

## 선택 도표

![Codex 확장 방식 선택 도표](/diagrams/extension-selection-map-ko.svg)

이 그림은 하나만 고르는 배타적 결정 트리가 아닙니다. 성숙한 작업 흐름은 `AGENTS.md`, Skill, MCP를 함께 사용할 수도 있습니다. 그림의 목적은 한 방식에 맞지 않는 역할까지 맡기지 않도록 돕는 것입니다.

## 판단을 위한 일곱 가지 질문

### 1. 현재 작업에만 영향을 주나요?

먼저 프롬프트를 사용하세요. 목표, 입력, 범위, 완료 기준, 권한을 명확히 하는 방법이 비용이 가장 낮고 실제 문제를 관찰하기도 쉽습니다.

### 2. 이 저장소에 들어올 때마다 반드시 따라야 하나요?

`AGENTS.md`에 작성하세요. 예를 들면 테스트 명령, 코드 스타일, 수정 금지 디렉터리, 의존성 설치 규칙입니다. 일회성 요구를 프로젝트 규칙에 장기간 남기지 마세요.

### 3. 비슷한 작업에 안정적인 단계와 결과물이 있나요?

Skill로 만드세요. Skill은 재사용할 수 있는 지침을 저장하고 필요하면 템플릿, 참고 자료, 자산, 보조 스크립트까지 담기에 적합합니다. 성공 기준이 아직 일정하지 않은 절차라면 프롬프트로 더 시험해 보세요.

### 4. 저장소 밖의 데이터나 작업이 필요한가요?

MCP 또는 Connector를 검토하세요. 실제로 필요한 도구와 데이터를 먼저 나열하고, 읽기 전용, 최소 범위, 감사 가능한 설정을 우선하세요. 로컬 파일이나 기존 명령으로 해결할 수 있다면 외부 연결을 추가할 필요가 없습니다.

### 5. 정해진 수명 주기 시점에 검사해야 하나요?

Hook을 사용하세요. 예를 들면 도구 호출 전에 위험한 명령을 검사하고, 파일 쓰기 후 패치를 스캔하고, 세션이 끝날 때 요약을 기록하는 경우입니다. Hook은 자동으로 실행되므로 시간 초과, 실패, 오탐 동작을 반드시 시험해야 합니다.

### 6. 여러 기능을 한 묶음으로 다른 사람에게 배포해야 하나요?

Plugin을 고려하세요. Plugin은 조합 및 배포 계층으로 Skills, 커넥터, MCP, Hooks, Scheduled task 템플릿을 포함할 수 있습니다. Plugin을 설치했다고 해서 안에 든 연결, 스크립트, Hook을 자동으로 신뢰하게 되는 것은 아닙니다.

### 7. 수동 실행이 이미 안정적이고 시간에 맞춰 반복해야 하나요?

그때 Scheduled task를 만드세요. 먼저 일반 작업에서 프롬프트, Skill, 권한, 결과 형식을 검증하세요. 예약 실행을 시작한 후에는 처음 몇 번의 결과를 확인하고, 게시나 병합에는 사람의 승인 단계를 유지하세요.

## 상황별 비교

| 상황 | 권장 조합 |
|---|---|
| 테스트 및 커밋 규칙 통일 | AGENTS.md |
| 병합 전마다 쓰는 검토 목록 | Skill `pr-review` |
| Linear에서 ticket 맥락 가져오기 | MCP + 작업 프롬프트 |
| 주간 의존성 보고서 | Scheduled task → 초안 issue 만들기 |
| 파일을 쓴 후 패치에서 비밀 정보 검사 | Hook 또는 CI; 위험이 큰 경우 둘 다 사용 |
| 팀에 검토 절차와 GitHub 도구를 통일해 설치 | Plugin(설치 전 권한과 Hooks 검토) |
| 매주 의존성 위험 보고서 생성 | 검증된 Skill + Scheduled task + 사람의 검토 |
| 보안, 테스트, 유지보수성을 병렬 검토 | 여러 읽기 전용 하위 Agent를 사용하고 기본 Agent가 결과 종합 |

## 비용 관점

| 방식 | 작성 비용 | 유지보수 비용 | 보안 위험 |
|---|---|---|---|
| 프롬프트 | 낮음 | 낮음 | 낮음 |
| AGENTS.md | 보통 | 보통 | 낮음 |
| Skill | 보통 | 보통 | 낮음–보통 |
| MCP | 높음 | 높음 | 보통–높음 |
| Hook | 보통 | 보통–높음 | 보통–높음 |
| Plugin | 낮음(설치)/높음(직접 제작) | 보통–높음 | 보통–높음 |
| Scheduled task | 보통 | 높음 | 높음 |

## 피해야 할 패턴

- **Skill 과잉**: Skill을 수십 개 설치해 description들이 같은 작업에 서로 매칭되려고 경쟁합니다.
- **MCP 만능 도구화**: `git`으로 해결할 일을 억지로 API에 연결합니다.
- **검증 없는 예약 실행**: 종료 조건, 실행 근거, 사람의 검토 없이 예약 작업으로 코드를 수정합니다.
- **이미 있는 기능을 다시 만들기**: 공식 Connector가 있는데도 MCP를 직접 만듭니다.
- **규칙을 잘못된 곳에 배치**: 일회성 요구를 `AGENTS.md`에 넣어 이후 모든 작업에 낡은 제약이 따라붙습니다.
- **Hook 과부하**: 시간이 오래 걸리는 업무 절차를 모든 도구 호출마다 실행해 일상 작업이 느려지거나 잘못 차단됩니다.

## 자주 묻는 질문

### 1. 처음부터 Plugin을 설치하고 MCP를 연결해야 하나요?

많은 문제는 먼저 프롬프트, 범위 관리, `AGENTS.md`를 제대로 사용하면 해결할 수 있습니다.

### 2. 작업을 몇 번 반복하면 Skill을 만들 가치가 있나요?

정해진 횟수는 없습니다. 반복 횟수는 신호일 뿐이며, 단계가 안정적인지, 성공 기준이 명확한지, 실패 비용을 자동 검사할 가치가 있는지가 더 중요합니다.

### 3. 처음 사용할 때 보통 무엇부터 시작하나요?

대부분은 먼저 다음 세 가지 중 하나에서 시작합니다.

- 프롬프트
- `AGENTS.md`
- Skill

처음부터 MCP나 무인 자동화를 도입할 필요는 대개 없습니다.

핵심은 방식이 얼마나 고급인지가 아니라 역할이 맞는지, 권한이 최소인지, 결과를 검증할 수 있는지입니다.

## 최소 도입 연습

“병합 전에 현재 diff 검토하기”를 예로 들어 보겠습니다.

1. 먼저 프롬프트 하나로 두 번 실행하고 매번 반복해서 설명해야 했던 검토 항목을 기록합니다.
2. `pnpm test`와 생성 디렉터리 수정 금지처럼 저장소에 고정된 명령과 규칙을 `AGENTS.md`에 작성합니다.
3. 검토 단계, 심각도, 출력 형식을 `pr-review` Skill로 만듭니다.
4. GitHub PR 댓글이나 CI 상태가 정말 필요할 때만 MCP/Connector를 추가합니다.
5. 정해진 이벤트에서 자동 검사가 필요할 때만 Hook 또는 Scheduled task를 추가합니다.
6. 여러 팀이 설치해야 할 때 이러한 기능을 Plugin으로 묶습니다.

계층을 하나 추가할 때마다 세 가지를 다시 확인하세요. 어떤 권한이 새로 생기는지, 어떻게 검증할지, 어떻게 끄거나 되돌릴지입니다.

## 더 읽기

- [확장 기능 지도](/ko/skills/capability-map/)
- [사람의 승인 패턴](/ko/cases/workflows/human-approval-patterns/)
- [작업 흐름을 Skill로 만들기](/ko/cases/workflows/turn-a-workflow-into-a-skill/)(로드맵 페이지)

## 공식 근거

- [Skills와 Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Codex Skills 만들기](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
