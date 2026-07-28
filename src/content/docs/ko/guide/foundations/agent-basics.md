---
title: Agent 기초
description: Agent가 목표를 중심으로 도구를 호출하며 반복 추진하는 방식을 설명합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


**Agent**는 목표를 중심으로 계속 앞으로 갑니다. 목표 이해 → 도구 선택 → 결과 관찰 → 다음 조정, 완료되거나 당신 개입이 필요할 때까지.

일반 AI는 질문에 답하는 사람에 가깝고, Agent는 일을 받은 뒤 한 걸음씩 밀어가는 사람에 가깝습니다.

## Agent와 일반 채팅의 차이

| | 일반 채팅 | Agent |
|---|---|---|
| 출력 | 주로 문자 조언 | 파일 읽기·쓰기, 명령 실행, 저장소 수정 가능 |
| 과정 | 한 번 답변 | 다단계 도구 호출 |
| 위험 | 오도하는 조언 | 파일을 망가뜨리거나 위험한 명령을 실행할 수도 있음 |
| 당신의 역할 | 읽기 | 경계 설정, 승인, 수락 |

## 직관적인 비유

둘을 이렇게 비교할 수 있습니다.

- **일반 채팅**: 친구에게 「이 문제 어떻게 풀어?」라고 묻는 것
- **Agent**: 동료에게 한 판을 먼저 해 달라고 한 뒤, 함께 확인하는 것

그래서 Agent 모드에서는 더 신경 써야 합니다.

- 무엇에 접근할 수 있는지
- 먼저 계획을 받을지
- 끝난 뒤 어떻게 수락할지

## 이 차이를 왜 구분해야 하나

많은 오용은 같은 오해에서 옵니다.

> 「말하기만 하는 줄 알았다」

파일 읽기·수정·명령 실행을 시작하면, 채팅창의 조언만이 아니라 실제 일에 참여하는 것입니다.

처음에는 함께 읽으세요.

1. [권한과 승인](/guide/foundations/permissions-and-approvals/)
2. [첫 작업 실행](/guide/getting-started/run-your-first-task/)
3. [결과 확인](/guide/getting-started/review-the-result/)

## 관련 개념

- Skill / Plugin / MCP: 「무엇을 할 수 있는지」와 「어디에 연결되는지」를 확장 — [확장과 자동화](/skills/)와 [능력 지도](/guide/start-here/codex-capability-map/)
- 사람 승인: [권한과 승인](/guide/foundations/permissions-and-approvals/)

Agent의 특징은 목표를 중심으로 몇 단계를 연속으로 한다는 것이며, 한 단락만 답하는 것이 아닙니다.


---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 Agent와 일반 채팅의 협업 차이만 설명합니다. 사이트 내 링크·개념·비유 표현을 재확인했으며, 본문은 쉽게 변하는 제품 사실에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
