---
title: Pull Request 만들기
description: Cloud 작업 결과를 검토와 검증이 가능하고 자동 병합되지 않는 PR로 전달합니다.
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
locale: ko
source_locale: zh-CN
source_revision: "39371d4"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 40
reviewed_at: "2026-10-26"
---

Cloud 작업이 끝나면 먼저 요약과 diff를 확인하세요. 결과가 범위와 검증 기준을 충족하면 Pull Request를 만듭니다. 그렇지 않으면 같은 채팅에서 계속 수정합니다.

## 작업에서 PR까지

```text
환경과 시작 브랜치 선택
  → Cloud 작업 실행
  → 요약, 로그, diff 검토
  → 필요하면 후속 요청
  → Create Pull Request
  → CI + Codex 보조 review + 사람의 review
  → 사람이 병합 여부 결정
```

프롬프트에 “PR을 만들되 병합하지 마세요”라고 명시하세요. 다만 자연어 지시만 믿어서는 안 됩니다. 저장소에서도 브랜치 보호와 required checks를 활성화해야 합니다.

## 재사용할 수 있는 작업 템플릿

```text
목표: #42의 로그인 시간 초과 회귀를 수정합니다.
시작점: main.
범위: packages/auth/**와 관련 테스트만 수정합니다.
금지: 의존성 업그레이드, 공개 API 변경, main에 직접 쓰기.
검증: pnpm test --filter auth; pnpm typecheck.
결과물: main을 대상으로 하는 PR을 만들되 병합하지 않습니다.
PR 설명에 근본 원인, 변경 요약, 테스트 명령과 결과, 위험,
되돌리는 방법을 포함합니다.
```

## 만들기 전 확인

- [ ] 시작 commit이 맞고 아직 push하지 않은 로컬 입력을 빠뜨리지 않았습니다.
- [ ] diff에는 작업 범위의 변경만 들어 있습니다.
- [ ] 새 브랜치 이름을 알아볼 수 있고 다른 사람의 작업을 덮어쓰지 않습니다.
- [ ] 테스트를 실제로 실행했고 실패가 요약에 숨겨지지 않았습니다.
- [ ] 자격 증명, 임시 로그, 캐시, 관련 없는 포맷 변경이 없습니다.
- [ ] 규모가 큰 변경은 각각 검토할 수 있는 PR로 나눴습니다.

## PR 설명에 최소한 담아야 할 내용

1. 왜 변경이 필요한가?
2. 실제로 무엇을 바꿨는가?
3. 어떤 명령으로 검증했고 결과는 무엇인가?
4. 위험, 제약 사항, 되돌리는 방법은 무엇인가?
5. 수행하지 않았다고 명시할 일은 무엇인가?

UI를 바꿨다면 실제 스크린샷을, 동작을 바꿨다면 재현 단계를, 마이그레이션이라면 호환성과 되돌리기 설명을 추가하세요.

## 만든 후

required checks를 기다리고, `@codex review`로 보조 검토를 요청하세요. 그런 다음 맥락을 아는 사람이 주요 diff를 검토합니다. 수정이 필요하면 구체적인 댓글을 같은 PR 브랜치에 반영하세요. 관련 없는 새 브랜치를 열어 중복 결과를 만들지 마세요.

PR 생성과 병합은 별도의 권한 경계입니다. Cloud에서 PR을 만들 수 있다고 해서 팀의 병합 정책을 우회해도 된다는 뜻은 아닙니다.

## 공식 근거

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
