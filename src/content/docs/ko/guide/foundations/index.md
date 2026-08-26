---
title: 기초 개념
description: 모델·Agent·도구·권한·검증의 공통 언어를 만듭니다.
sidebar:
  order: 3
locale: ko
source_locale: zh-CN
source_revision: cf898a2
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

이 파트는 핸드북 전체에서 반복되는 기초 개념을 한곳에 둡니다. 제품 UI 차이는 [제품 매뉴얼](/ko/guide/)에, 프롬프트 기법은 [핵심 역량](/ko/guide/)에 둡니다.

여기에서는 Codex가 어떻게 작동하는지, 그리고 어떻게 협업하는지를 주로 설명합니다.

## 이 장의 지도

1. [AI와 언어 모델](/ko/guide/foundations/ai-and-language-models/)
2. [Agent 기초](/ko/guide/foundations/agent-basics/)
3. [목표·컨텍스트·행동](/ko/guide/foundations/goals-context-and-actions/)
4. [파일·도구·명령](/ko/guide/foundations/files-tools-and-commands/)
5. [로컬과 클라우드](/ko/guide/foundations/local-vs-cloud/)
6. [스레드·작업·프로젝트](/ko/guide/foundations/threads-tasks-and-projects/)
7. [권한과 승인](/ko/guide/foundations/permissions-and-approvals/)
8. [샌드박스와 네트워크](/ko/guide/foundations/sandbox-and-network/)
9. [모델과 추론](/ko/guide/foundations/models-and-reasoning/)
10. [Token·컨텍스트·압축](/ko/guide/foundations/tokens-context-and-compaction/)
11. [검증과 사람 검토](/ko/guide/foundations/verification-and-human-review/)
12. [흔한 오해](/ko/guide/foundations/common-misconceptions/)

읽은 뒤 [빠른 시작](/ko/guide/getting-started/)으로 들어가세요.

## 흔한 오해

### 1. 기초 개념은 순수 이론이라 건너뛰어도 된다

단기에는 가능해 보이지만, 뒤에 생기는 많은 오해가 여기서 정리되지 않은 것과 관련됩니다.

예를 들어:

- 왜 승인이 필요한지
- 왜 컨텍스트의 영향을 받는지
- 왜 예상 밖을 고치는지
- 왜 「완료했다」고 말해도 진짜 완료가 아닌지

### 2. 질문만 잘하면 개념은 많이 몰라도 된다

질문 능력은 중요하지만, 컨텍스트를 어떻게 읽고·도구를 어떻게 호출하고·권한에 어떻게 묶이는지 모르면, 결과가 빗나간 이유를 판단하기 더 어렵습니다.

### 3. 이 장은 정의를 외우듯이 읽어야 한다

더 실용적인 읽기는:

- 각 개념이 어떤 문제를 푸는지 먼저 알고
- 실제 사용 장면을 들고 이해합니다

## 한 번에 다 읽기 싫다면

한 번에 장을 다 읽고 싶지 않다면, 이 페이지만 먼저 보세요.

1. [Agent 기초](/ko/guide/foundations/agent-basics/)
2. [목표·컨텍스트·행동](/ko/guide/foundations/goals-context-and-actions/)
3. [파일·도구·명령](/ko/guide/foundations/files-tools-and-commands/)
4. [권한과 승인](/ko/guide/foundations/permissions-and-approvals/)
5. [검증과 사람 검토](/ko/guide/foundations/verification-and-human-review/)

이 몇 페이지만 이해해도 일상 사용을 지탱하기에 충분합니다.

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 기초 개념 장의 구조와 읽기 순서만 설명합니다. 사이트 내 링크와 개념 표현을 재확인했으며, 본문은 제품 버전·가격·UI 등 쉽게 변하는 사실에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
