---
title: 학습 경로
description: 역할별로 읽기 순서를 정리하고 권위 있는 본문으로 연결합니다.
sidebar:
  order: 5
locale: ko
source_locale: zh-CN
source_revision: 05e85de
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

학습 경로는 **순서만 정리**하며, 제품 매뉴얼이나 능력 특집의 긴 글을 복제하지 않습니다.

“학습 경로” 장을 처음 보면 또 하나의 목차처럼 느껴질 수 있습니다. 핵심은 이것입니다. 지금 당신이 어떤 유형의 사용자에 가까운지, 다음에 어떤 순서로 읽어야 하는지.

이 장은 새 지식을 채우기보다, 돌아가는 길을 줄이는 데 가깝습니다.

## 이 장이 하는 일

- 초보자, 크리에이터, 개발자, 팀 추진자 중 어디에 가까운지, 어느 선을 탈지
- 역할별로 읽기 순서가 어떻게 다른지
- 지금 읽을 가치가 있는 것과 나중에 보완해도 되는 것

## MVP에서 쓸 수 있는 경로

- **초보자(완전한 다섯 단계)**
  1. [Codex와 대화하기](/ko/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [파일 다루기](/ko/guide/learning-paths/beginner/02-work-with-files/)
  3. [명확한 작업 주기](/ko/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [결과 검토하기](/ko/guide/learning-paths/beginner/04-review-results/)
  5. [첫 작은 프로젝트 끝내기](/ko/guide/learning-paths/beginner/05-complete-first-project/)

## 개요(심화 단계는 이후 보완)

- [크리에이터](/ko/guide/learning-paths/creator/)
- [개발자](/ko/guide/learning-paths/developer/)
- [팀](/ko/guide/learning-paths/team/)

## 고급 운영자 경로

작은 작업을 이미 끝낼 수 있다면, 다음 단계는 명령을 더 외우는 것이 아니라 여러 능력을 안정적인 워크플로로 묶는 것입니다.

| 단계 | 주제 | 먼저 읽을 것 |
|---|---|---|
| 1 | 빠른 진입점 | [슬래시 명령과 빠른 진입](/ko/guide/reference/slash-commands/) |
| 2 | 지속되는 컨텍스트 | [AGENTS.md](/ko/guide/customization/agents-md/)와 [기억과 지속 컨텍스트](/ko/guide/customization/memories-and-persistent-context/) |
| 3 | 재사용 가능한 워크플로 | [Skills 개요](/ko/skills/overview/)와 [Skill 구조](/ko/skills/skill-anatomy/) |
| 4 | 독립 하위 작업 | [서브 에이전트](/ko/guide/agent-work/subagents/)와 [다중 Agent 조율](/ko/cases/workflows/multi-agent-coordination/) |
| 5 | 외부 시스템 | [MCP 개요](/ko/skills/mcp/mcp-overview/) |
| 6 | 자동 가드레일 | [Hooks 개요](/ko/skills/hooks/hooks-overview/) |
| 7 | 팀 배포 | [Plugins 개요](/ko/skills/plugins/plugins-overview/) |
| 8 | 복구와 리뷰 | [실행 취소와 복구](/ko/guide/getting-started/undo-and-recover/)와 [Diff 리뷰](/ko/guide/quality/review-diffs/) |

이 경로는 “가끔 Codex에게 도움을 받는” 상태를 “팀이 반복 실행할 수 있는 작은 시스템”으로 바꾸는 데 적합합니다. 프로젝트 지침은 장기 규칙을, Skill은 방법을, MCP는 외부 도구를, 서브 에이전트는 경계가 명확한 작업 분담을, Hook은 핵심 지점을, Plugin은 팀 배포를 담당합니다.

## 흔한 오해

### 1. 학습 경로와 매뉴얼 본문은 중복된 두 세트다

본문은 내용을 설명하고, 학습 경로는 지금 어느 몇 편을 볼지 알려 줍니다.

### 2. 고정된 정체성 하나를 먼저 정해야 한다

한 가지만 판단하면 됩니다.  
**지금 가장 풀고 싶은 주요 문제가 무엇인가.**

### 3. 한 경로를 처음부터 끝까지 배워야 하고 건너뛸 수 없다

경로는 권장 순서이지 강제 프로세스가 아닙니다. 실제로 쓸 때는 구체 질문을 들고 다른 장으로 돌아가도 됩니다.

## 헷갈릴 때 고르는 법

어느 경로를 탈지 모르겠다면, 이렇게 고르세요.

- 아직 첫 완전한 작업을 통과하지 못함：[초보자 경로](/ko/guide/learning-paths/beginner/)
- 주로 콘텐츠, 이미지·텍스트, 데모를 만들고 싶음：[크리에이터 경로](/ko/guide/learning-paths/creator/)
- 주로 코드 수정, 버그 수정, 프로젝트 연결：[개발자 경로](/ko/guide/learning-paths/developer/)
- 주로 팀 도입과 위험 통제：[팀 경로](/ko/guide/learning-paths/team/)

학습 경로는 “지금 가장 중요한 문제”로 다음에 무엇을 읽을지 정합니다.

---

**상태：** verified  
**적용 제품：** App / CLI / IDE  
**검증 근거：** 본 저장소의 현재 learning paths 디렉터리 구조, 역할별 입구 페이지, 초보자 단계 경로를 교차 확인했습니다. 이 페이지는 “역할별로 읽기 순서를 조직한다”는 내비 역할만 담당하며, 변동하기 쉬운 제품 동작 세부사항은 포함하지 않습니다.  
**최근 검증：** 2026-07-26
