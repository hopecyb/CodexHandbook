---
title: 여러 Agent 협업
description: 병렬 탐색, 분업 실행, 결과 병합—언제 쪼개고, 어떻게 인수할지입니다.
locale: ko
source_locale: zh-CN
source_revision: e4d0f69
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

여러 Agent는 병렬 가능하고 결합도가 낮은 하위 문제에 적합하며, 조율 없이 같은 파일을 동시에 고치는 데는 적합하지 않습니다.

## 언제 나누는가

| 적합 | 부적합 |
|---|---|
| 프론트 스타일 + 백엔드 API 계약 병렬 조사 | 같은 함수를 두 사람이 수정 |
| 하나는 테스트, 하나는 문서 작성 | 공유 가변 상태에 잠금 없음 |
| 여러 구현 방안 탐색 | 강한 순서 의존이 아직 정리되지 않음 |

제품 기능은 [병렬 Agent](/ko/guide/desktop-app/parallel-agents/), [Subagent](/ko/guide/agent-work/subagents/)를 참고하세요.

## 협업 패턴

### 패턴 A: 병렬 탐색, 사람 선택

```text
Agent 1: 방안 A의 장단점과 작업량
Agent 2: 방안 B의 장단점과 작업량
당신: 하나를 고른 뒤, 단일 Agent로 실행
```

### 패턴 B: 파이프라인

```text
탐색 Agent → 계획 출력 → 실행 Agent(새 스레드, 계획 요약 첨부)
```

[인수인계와 복구](/ko/guide/agent-work/handoff-and-resume/)로 구조화 요약을 전달하고, 전체 채팅을 붙여 넣지 마세요.

### 패턴 C: 작업 트리 격리

서로 다른 Agent가 다른 [git worktree](/ko/guide/desktop-app/worktrees/)에서 다른 브랜치를 수정하고, 마지막에 사람이 병합합니다.

## 조율 규칙(AGENTS.md에 쓰기를 권장)

- 각 Agent의 디렉터리 경계를 명확히 합니다
- 병렬 `git push`를 금지합니다
- 병합 전에 CI를 통일해 실행합니다
- 충돌은 사람이 해결하고, Agent가 추측하지 않게 합니다

## 인수

- [ ] 각 하위 Agent에 독립 「완료 정의」가 있음
- [ ] 병합 후 전체 테스트 통과
- [ ] diff를 해당 하위 작업 설명까지 추적할 수 있음

## 흔한 실수

- 병렬 Agent 세 개가 `package.json`을 수정
- 요약 단계가 없어 누구 결론을 따를지 모름

---

**상태:** verified  
**적용 제품:** App / Cloud  
**검증 근거:** OpenAI Developers의 현재 multi-agent / subagents 공개 설명과, 이 핸드북에서 이미 검증된 Subagent, 인수인계 복구, 병렬 작업 관련 장을 교차 확인했습니다. 페이지 내용은 “언제 나누고, 어떻게 경계를 격리하고, 어떻게 사람이 요약·인수할지”라는 안정적인 방법으로 한정되며, 현재 beta나 UI 진입점을 고정 계약으로 쓰지 않습니다.  
**최근 검증:** 2026-07-26
