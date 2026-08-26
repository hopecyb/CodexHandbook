---
title: 개발자 경로(개요)
description: 소프트웨어 개발 관련 루트 개요입니다. 심화 단계는 이후 보완합니다.
locale: ko
source_locale: zh-CN
source_revision: b5b5ac7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

> MVP 상태：이 페이지는 개요입니다. 완전한 다섯 단계는 이후 마일스톤에서 보완합니다.

Codex로 주로 코드를 고치고, 프로젝트를 이해하고, 문제를 고치려 한다면, 이 경로부터 시작하세요.

## 맞는 경우

- 코드를 읽고, 고치고, 테스트를 돌리는 사람
- Codex를 실제 개발 워크플로에 붙이고 싶은 사람
- “작업 쓰기, diff 보기, 검증 돌리기” 흐름을 익히고 싶은 사람

## 지금 읽을 수 있는 것

- [시작하기](/ko/guide/getting-started/)와 [CLI](/ko/guide/cli/) / [IDE](/ko/guide/ide/)
- [테스트 실행](/ko/guide/quality/run-tests/) · [diff 검토](/ko/guide/quality/review-diffs/)
- [Agent 계획](/ko/guide/agent-work/planning/)

## 흔한 오해

### 1. 개발자 경로는 먼저 코드를 쓰게 하는 것이다

결과에 더 영향을 주는 것은 보통 다음입니다.

- 범위를 이해했는지
- 완료 기준을 정의했는지
- 마지막에 diff와 검증 결과를 진지하게 봤는지

### 2. 코드를 쓸 줄 아니까 기초 개념은 건너뛰어도 된다

완전히 건너뛰지 마세요.

Codex의 일하는 방식은 일반 에디터 자동 완성과 다릅니다. 권한, 컨텍스트, 도구 호출 같은 개념이 결과에 직접 영향을 줍니다.

## 권장 읽기 순서

Codex를 개발에 쓰려면 이 순서로 읽으세요.

1. [시작하기](/ko/guide/getting-started/)
2. [CLI](/ko/guide/cli/) 또는 [IDE](/ko/guide/ide/)
3. [Agent 작업](/ko/guide/agent-work/)
4. [테스트 실행](/ko/guide/quality/run-tests/)
5. [diff 검토](/ko/guide/quality/review-diffs/)

이 경로는 변경을 통제하고 결과를 검증할 수 있게 하는 데 무게를 둡니다. “일단 쓰게 한다”만 추구하지 않습니다.

## 계획 중인 단계(개요)

코드베이스 이해 → 수정과 구현 → 테스트와 리뷰 → 자동화 워크플로 → 멀티 Agent 개발

---

**상태：** verified  
**적용 제품：** App / CLI / IDE  
**검증 근거：** 본 저장소의 현재 개발 관련 입구, Agent 작업, 테스트 실행, diff 검토 장을 교차 확인했습니다. 이 페이지는 “개발자 읽기 순서 개요”일 뿐이며, 구체 구현이나 도구 기본 동작을 약속하지 않습니다.  
**최근 검증：** 2026-07-26
