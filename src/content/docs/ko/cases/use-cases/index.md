---
title: 시나리오와 사례 라이브러리
description: 엔드투엔드 실제 작업—준비, 실행, 검증, 실패 복구와 회고입니다.
locale: ko
source_locale: zh-CN
source_revision: 6349392
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

사례 라이브러리가 답하는 질문은 이것입니다: 「**이런 실제 목표에서 Codex를 처음부터 끝까지 한 번 돌리면 어떤 경험인가?**」 단일 제품 설명과 상호 보완합니다.

## 사례 vs 튜토리얼

| | 입문 튜토리얼 | 사례 라이브러리 |
|---|---|---|
| 목표 | 어떤 버튼/개념을 배움 | 어떤 종류의 실제 성과를 인도 |
| 구조 | 제품 기능 기준 | 작업 유형 기준 |
| 실패 처리 | 자주 생략 | 반드시 포함 |

## 사용 방법

1. 목표에 가장 가까운 사례를 고릅니다(또는 「준비 체크리스트」만 사용)
2. [탐색—계획—실행—검증](/ko/cases/workflows/explore-plan-execute-verify/)과 대조합니다
3. 완료 후 [사례 템플릿](/ko/cases/use-cases/case-study-template/)으로 회고하고, Skill로 정착할지 결정합니다

## 기존 starter 사례

| 영역 | 사례 | 설명 |
|---|---|---|
| 소프트웨어 개발 | [검증이 있는 bug 수정](/ko/cases/use-cases/software-development/fix-a-bug-with-verification/) | 개발자가 가장 자주 쓰는 폐쇄 루프 |
| 콘텐츠 창작 | [검토와 함께 문서 사이트 리팩터](/ko/cases/use-cases/content-creation/refactor-docs-with-review/) | 여러 파일 문서와 빌드 인수 |
| 리서치와 학습 | [경쟁 제품 기능 비교표](/ko/cases/use-cases/research-and-learning/competitive-feature-matrix/) | 출처가 있는 리서치 산출물 |
| 팀 자동화 | [예약 문서 링크 검사](/ko/cases/use-cases/team-automation/scheduled-link-check/) · [Issue 분류 제안](/ko/cases/use-cases/team-automation/issue-triage-suggestions/) | CI와 티켓 경량 자동화 |

복사 가능한 프롬프트는 저장소 [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts)를 참고하세요. 더 많은 영역 사례가 이 라이브러리에 계속 추가됩니다.

## 기여 방향

- 재현 가능한 단계(저장소, 브랜치, 명령)
- 적용 클라이언트와 검증 날짜를 표시
- 검증할 수 없는 「한 번에 성공」서사를 쓰지 않음

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 저장소의 현재 사례 라이브러리 구조, 각 영역 진입 페이지, 사례 템플릿, examples 프롬프트 진입점과 교차 확인했습니다. 이 페이지는 “실제 작업 유형별로 사례를 조직한다”는 안내 역할만 담당합니다.  
**최근 검증:** 2026-07-26
