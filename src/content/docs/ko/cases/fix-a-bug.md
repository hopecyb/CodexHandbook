---
title: "Bug 수정: 어디서 시작할까"
description: 현재 문제에 맞는 Bug 수정 경로를 선택하고 실행 가능한 자료가 포함된 전체 사례로 이동합니다.
locale: ko
source_locale: zh-CN
source_revision: 405a687
translation_status: draft
translated_at: 2026-09-20
---

이 페이지는 간단한 시작점입니다. 전체 절차, 실행 가능한 코드, 실패와 성공 테스트의 증거, 단계별 요청 예시는 [검증하며 Bug 수정하기](/ko/cases/use-cases/software-development/fix-a-bug-with-verification/)에서 관리합니다. 두 페이지가 같은 내용을 반복하다 서로 어긋나지 않도록 하기 위해서입니다.

## 지금 부족한 단계부터 찾기

| 현재 상황 | 시작할 곳 |
|---|---|
| 결과가 잘못되지만 안정적으로 재현하지 못함 | [진단을 먼저 하고 수정하기](/ko/cases/workflows/diagnose-before-fixing/) |
| 안정적으로 실패하는 테스트가 있음 | [검증하며 Bug 수정하기](/ko/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| 관련 모듈이 익숙하지 않음 | [코드베이스 이해하기](/ko/cases/understand-a-codebase/) |
| 수정이 끝나 병합을 준비 중 | [PR 검토하기](/ko/cases/review-a-pr/) |
| 테스트 자체가 불안정함 | 먼저 [테스트 실행하기](/ko/guide/quality/run-tests/)를 읽고 불안정한 테스트를 수정 증거로 삼지 않기 |

## 최소 검증 흐름

언어나 프레임워크와 관계없이 다음 증거 흐름을 유지하세요.

1. 명확한 명령으로 원래 문제를 안정적으로 재현합니다.
2. 실패한 단언, 오류 출력, 입력 조건을 보존합니다.
3. 근본 원인을 설명한 뒤 최소한의 수정만 합니다.
4. 원래 실패하던 테스트와 새 경계 조건 테스트를 통과시킵니다.
5. 더 넓은 범위의 회귀 검사를 실행합니다.
6. 사람이 diff를 읽고 관련 없는 변경이 없는지 확인합니다.

1단계 없이 4단계만 수행하면 테스트가 원래 문제를 다루는지 증명할 수 없습니다. '전체 테스트 통과'만 보고 diff를 검토하지 않아도 변경 범위가 적절했는지 알 수 없습니다.

## 바로 해 볼 수 있는 연습

저장소에는 외부 패키지에 의존하지 않는 JavaScript 장바구니 할인 예제가 있습니다.

```bash
# 시작 코드: 테스트 하나가 실패할 것으로 예상됨
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# 참고 수정: 테스트 세 개가 모두 통과할 것으로 예상됨
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

전체 자료는 [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix)에 있습니다.
