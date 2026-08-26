---
title: PR 검토하기
description: 병합 전에 Codex로 구조화된 diff 검토를 합니다.
locale: ko
source_locale: zh-CN
source_revision: 29b081c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# PR 검토하기

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 개발자 / 팀 |
| 클라이언트 | CLI / IDE / Cloud |
| 예상 소요 시간 | 20–40분 |

## 1. 목표와 배경

**목표:** 병합 전에 범위 확산, 보안 위험, 테스트 공백을 발견합니다.

**성공 기준:** 검토 출력이 구체 파일/행까지 추적 가능하고, P0는 처리되었거나 병합이 차단되어야 합니다.

## 2. 권장 프롬프트

```text
현재 브랜치와 main의 diff를 비교하세요(먼저 코드를 수정하지 마세요):
1. issue 범위를 벗어났는지
2. 명백한 보안 위험이 있는지(시크릿, 주입, 권한)
3. 테스트 또는 문서가 빠졌는지
checklist를 출력하고 P0/P1을 표시하며, 파일 경로를 붙이세요.
```

## 3. 팀 정착

- [`$pr-review`](/ko/skills/examples/review-skill/) Skill 사용
- CI 통합은 [코드 검토 자동화](/ko/guide/developer-platform/ci-cd/code-review-automation/) 참고

## 4. 관련

- [검토 템플릿](/ko/prompts/templates/review/)
- [병합 전 검토](/ko/cases/workflows/review-before-merge/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 Codex use cases에는 여전히 “Review GitHub pull requests”가 포함되며, 사람 검토 전에 회귀와 잠재 문제를 잡아내는 점을 강조합니다. 이 페이지 예시는 diff에 대한 구조화 검토, P0/P1과 파일 경로 출력만 요구하며, 특정 UI나 고정 명령에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
