---
title: 긴 작업 관리
description: 수 시간 또는 여러 세션에 걸친 큰 작업—검사 지점, 압축, 위임, 종료 조건입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

긴 작업에서 흔한 문제는 **컨텍스트가 가득 참**, **사람이 자리를 비움**, **방향이 표류함**, **언제 멈출지 모름**입니다. 이 페이지는 [탐색—계획—실행—검증](/cases/workflows/explore-plan-execute-verify/)을 수 시간 또는 여러 세션 시나리오에 놓아 봅니다.

## 이 페이지의 초점

- 언제 작업을 쪼개고, 언제 Cloud에 위임할지
- 검사 지점과 상태 기록에 무엇을 쓸지
- 자동화 긴 작업의 종료 조건

관련: [위임과 후속](/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/skills/automations/scheduled-tasks/)

## 긴 작업 신호

- 예상 머신 시간이 30분을 넘음
- 여러 하위 시스템 또는 >20개 파일 관련
- 사람 피드백 또는 외부 API를 기다려야 함
- 전체 E2E / 성능 테스트를 돌려야 함

조건 중 하나라도 만족하면, 먼저 계획을 써 두고 끝없이 대화하지 마세요.

## 3단계 관리

### 1. 계획 동결

서면 계획을 산출합니다: 범위, 비목표, 마일스톤, 인수 명령. 사람이 확인한 뒤에 대규모 실행합니다.

[계획](/guide/agent-work/planning/) · [Subagent](/guide/agent-work/subagents/)

### 2. 검사 지점

마일스톤을 완료할 때마다:

- 검토 가능한 증분을 커밋하거나 stash
- `PROGRESS.md` 또는 issue 댓글을 갱신: 무엇을 끝냈는지, 다음, 차단 항목
- 컨텍스트가 가득 차면 [압축](/guide/context/compaction/) 또는 새 세션 + 진행 파일 링크

### 3. 마무리 또는 위임

- 로컬에서 감당이 안 되면 → [Cloud 위임](/guide/web-and-cloud/delegate-and-follow-up/)
- 지속 모니터링이 필요하면 → Automation + 명확한 **max iterations / 마감 시간**

## 종료 조건(자동화 필수)

| 조건 | 설명 |
|---|---|
| 시간 상한 | 4시간 진전이 없으면 알림 |
| 반복 상한 | 같은 테스트가 3번 실패하면 중지 |
| 사람 게이트 | 프로덕션 설정 변경 전 반드시 @사람 |
| 성공 조건 | 테스트 녹색 + PR 오픈 |

## 흔한 실수

- PROGRESS 파일이 없어 세션을 바꾼 뒤 반복 노동
- 긴 작업에 비목표를 두지 않아 Agent가 겸사 「전체 저장소 정리」
- Cloud 작업이 밤새 승인 없이 매달림

## 인수 체크리스트

- [ ] 긴 작업 시작 전에 계획 문서가 있음
- [ ] 최소 두 검사 지점에 검토 가능한 diff가 있음
- [ ] 일시중지, 복구, 인계 방법을 알고 있음

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 장기 목표·긴 작업 협업 공개 use cases와, 이 핸드북에서 이미 검증된 인수인계 복구, 계획, 압축, 위임 장을 교차 확인했습니다. 이 페이지는 긴 작업의 검사 지점, 인계, 종료 조건 등 안정적인 방법만 설명합니다.  
**최근 검증:** 2026-07-26
