---
title: Cloud 코드 리뷰
description: Cloud 작업이 낸 diff, PR, 자동화 리뷰 제안을 검토합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

Cloud는 변경을 만들어 주지만, 머지 책임까지 대신하지는 않습니다.

Cloud 작업이 끝난 뒤에도, **사람의 검토**는 머지 전 마지막 문입니다. 이 페이지는 원격 Agent 산출을 어떻게 검토하고, GitHub PR·CI·Skill 리뷰와 어떻게 이어지는지 설명합니다.

## 내용

- Cloud PR과 로컬 PR 검토가 어떻게 다른지
- 검토 체크리스트와 흔한 위험점
- Codex로 검토를 돕되 책임을 포기하지 않는 방법

## Cloud 검토를 더 조심해야 하는 이유

원격 Agent는 이런 일이 더 잘 생깁니다.

- 관련 없는 파일을 손댐
- 환경 차이로 lockfile이나 생성 파일이 크게 바뀜
- 테스트는 돈 것처럼 보이지만 핵심 로직을 실제로 커버하지 않음
- PR 설명은 완전해 보이지만, 내용이 사실인지 아직 확인하지 않음

그래서 Cloud 검토가 더 가벼운 게 아니라, 오히려 핵심을 더 잡아야 합니다.

## 흐름에서의 위치

```text
Cloud 작업 완료 → 브랜치 푸시 → PR 열기
        ↓
CI 실행(테스트、lint、보안 스캔)
        ↓
사람이 diff 검토 + 선택적 Agent 보조 검토
        ↓
머지 승인(브랜치 보호 제약)
```

PR 열기：[Pull Request 만들기](/guide/web-and-cloud/create-pull-requests/)

## 최저 확인 기준

완전한 검토 전에, 최소한 네 가지를 먼저 확인하세요.

1. 변경 범위가 빗나가지 않았는지
2. 핵심 로직이 목표대로 바뀌었는지
3. 테스트나 검증을 실제로 했는지
4. 민감 정보나 위험한 변경이 들어갔는지

이 네 가지를 확인하기 전에는, “작업 완료”를 “머지 가능”으로 보면 안 됩니다.

## 사람 검토 체크리스트

[diff 검토](/guide/quality/review-diffs/)와 같으며, Cloud 시나리오에서는 추가로:

| 확인 항목 | 이유 |
|---|---|
| 관련 없는 파일을 바꿨는지 | 원격 Agent가 「손댐」으로 리팩터할 수 있음 |
| lockfile / 생성 파일 | 환경 차이로 대규모 변경 |
| 새 의존성 출처 | 공급망 위험 |
| 테스트가 새 로직을 정말 커버하는지 | Agent가 빈 테스트를 쓸 수 있음 |
| 권한·인증 변경 | 권한 상승, 하드코딩 token |
| issue 범위와 일치 | scope creep 방지 |

## 흔한 오해

### 1. CI가 초록이면 머지해도 되나

CI는 “이 자동 검사가 깨지지 않았다”만 말합니다. 요구를 맞게 이해했는지, 범위가 빗나갔는지, 위험을 받아들일 수 있는지는 여전히 사람 판단입니다.

### 2. PR 설명이 완전하니 덜 봐도 되나

그래도 안 됩니다.

PR 설명은 컨텍스트에 빨리 들어가게 도울 뿐, 사실을 대신 검증하지 않습니다.

### 3. Codex가 한 번 더 보면 검토가 끝난 건가

보조 검토는 유용하지만, 최종 책임은 여전히 사람입니다.

## Codex로 검토 보조(사람을 대체하지 않음)

허용되는 방법:

- 로컬 또는 Cloud에서 새 PR에 `$pr-review` Skill 실행([첫 Skill 만들기](/skills/create-your-first-skill/))
- 「차단 / 제안 / nit」세 종류 의견을 나열하게 함
- **당신**이 차단 항목을 하나씩 확인

허용되지 않음:

- diff를 읽지 않고 Agent가 「문제 없다」고 해서 머지
- Agent가 보호 브랜치를 스스로 approve

[검증과 사람 재검토](/guide/foundations/verification-and-human-review/)를 보세요.

## 권장 순서

이 순서로 보세요.

1. PR 제목과 설명으로 목표 확인
2. 주요 로직 diff
3. 테스트, 생성 파일, 설정 파일
4. 자동화 댓글과 보완 제안

처음부터 세부사항에 파묻히지 않게 합니다.

## 리뷰 댓글로 수정 유도

PR에 review 댓글이 오면:

1. Cloud 또는 로컬 작업을 새로 염：「아래 review 댓글만 처리하고, 범위를 넓히지 마세요」
2. 댓글 링크나 번호를 붙임
3. 같은 PR에 새 commit을 푸시
4. CI를 다시 돌리고, 사람이 증분을 한눈 봄

GitHub 측：[GitHub 통합](/guide/integrations/github/)

## Automations와 결합

- PR이 열릴 때 리뷰 Skill을 자동 실행(댓글만, merge하지 않음)
- 상세：[스케줄·트리거 작업](/skills/automations/scheduled-tasks/)

## 흔한 실수

- Cloud 환경 「격리」를 믿어 보안 검토를 건너뜀
- 「CI가 초록」이라며 거대한 diff를 머지
- review 댓글에 마스킹하지 않은 프로덕션 로그를 붙임
- “문제를 못 찾았다”를 “문제가 없다”로 오해

## 검수 체크리스트

- [ ] CI가 전부 초록이고, 실패·재시도 이력을 이해함
- [ ] 최소 한 사람이 주요 로직 diff를 읽음
- [ ] issue/작업 설명 범위와 일치
- [ ] Secrets가 저장소에 들어가지 않음

## 참고 출처
- [사람 승인 패턴](/cases/workflows/human-approval-patterns/)
---

**상태：** outdated  
**적용 제품：** Cloud / GitHub  
**재검토 설명：** Cloud 산출에 사람 검토가 필요하다는 원칙에는 문제가 없지만, 이 페이지는 Cloud PR, 자동 PR 열기, 원격 검토 리듬과 알림 방식을 비교적 구체적 현행 워크플로로 썼습니다. Cloud/GitHub 통합 형태가 빠르게 바뀌므로, 최신 공식 흐름에 맞춰 다시 써야 합니다.  
**최근 검증：** 2026-07-26
