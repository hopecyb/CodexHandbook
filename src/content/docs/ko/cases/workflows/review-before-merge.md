---
title: 병합 전 검토
description: merge 전에 Codex로 구조화된 diff와 위험 검토를 합니다—사람·기계 분업이 명확합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**병합 전 검토**는 [품질과 검증](/guide/quality/)을 Git 흐름에 두는 것입니다. PR 병합 전에 Codex로 diff, 테스트, 보안, 스펙 일치를 검사합니다. 자동 댓글 자체가 자동 병합을 대신하지는 않습니다.

## 이 페이지의 초점

- 로컬 검토 vs Cloud/CI 검토의 분업
- 검토 프롬프트가 어떤 차원을 덮어야 하는지
- 언제 사람이 최종 서명해야 하는지

## 최소 실행 방법

**로컬(작성자 자체 검사)**

```text
현재 브랜치와 main의 diff를 비교하세요(먼저 코드를 수정하지 마세요):
1. issue 범위를 벗어났는지
2. 명백한 보안 위험이 있는지(시크릿, 주입, 권한)
3. 테스트 또는 문서가 빠졌는지
checklist를 출력하고 P0/P1을 표시하세요.
```

**CI(팀 관문)**

- 고정 prompt 버전 + 읽기 전용 token
- 결과를 PR comment 또는 check run에 기록
- [코드 검토 자동화](/guide/developer-platform/ci-cd/code-review-automation/) 참고

## 권장 검토 차원

| 차원 | 관심 포인트 |
|---|---|
| 정확성 | 로직, 경계, 오류 처리 |
| 테스트 | 새 동작에 커버리지가 있는지 |
| 보안 | 시크릿, 주입, 의존성 취약점 단서 |
| 유지보수성 | 이름, 중복, 공개 API |
| 스펙 | issue/스펙 문서와 일치 |

[diff 검토하기](/guide/quality/review-diffs/)와 함께 쓸 수 있습니다. 고위험 항목은 [사람 승인 패턴](/cases/workflows/human-approval-patterns/)을 따릅니다.

## 흔한 실수

- 모델에게 「LGTM」만 말하게 하고 구체 근거가 없음
- 전체 PR 설명을 살균하지 않고 CI prompt에 붙여 넣음(주입 위험)
- 검토는 통과했지만 CI 테스트를 돌리지 않음
- 자동 병합 Bot이 켜져 있고 브랜치 보호가 없음

## 보안 경계

- 검토는 읽기 전용 권한으로; 수정은 **새 commit**에서 사람이 트리거해야 합니다
- 검토 로그에 사용자 PII나 시크릿을 기록하지 마세요

## 인수 체크리스트

- [ ] 검토 출력이 구체 파일/행까지 추적 가능
- [ ] P0 문제가 병합을 차단했거나 이미 수정됨
- [ ] 팀 review checklist와 정렬
- [ ] 논쟁 항목에 대해 사람 maintainer가 최종 결정

## 관련 장

- [Cloud 코드 검토](/guide/web-and-cloud/code-review/)
- [Pull Request 만들기](/guide/web-and-cloud/create-pull-requests/)

---

**상태:** verified  
**적용 제품:** CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 공개 code review / pull request 관련 use cases와, 이 핸드북에서 이미 검증된 품질, diff 검토, Cloud 관련 장을 교차 확인했습니다. 이 페이지는 “병합 전 구조화 검토, 읽기 전용 검토, 사람 최종 서명”이라는 안정적인 원칙만 확인합니다.  
**최근 검증:** 2026-07-26
