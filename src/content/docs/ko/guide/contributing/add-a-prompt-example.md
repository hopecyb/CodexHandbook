---
title: 프롬프트 예시 추가
description: examples/prompts에 재현 가능한 프롬프트를 제출 — 메타데이터와 검증 기준 포함.
locale: ko
source_locale: zh-CN
source_revision: cd78464
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

프롬프트 예시는 저장소 루트 [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts)에 두고, 핸드북 본문이 링크로 참조합니다. 설계 규범은 [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md)를 보세요.

## 이 페이지 내용

흔한 막힘:

- “어떤 프롬프트가 수록할 가치가 있는지” 모름
- 남이 바로 재사용할 수 있게 어떤 형식으로 쓸지 모름

이 페이지가 푸는 것은, **남이 정말 시험·학습·재현할 수 있는** 예시를 어떻게 제출할지입니다.

## 수록 기준

여기에 넣는 것은 “컨텍스트·경계·검증 기준이 있는 재현 가능 예시”이며, 영감 조각이 아닙니다.

합격 프롬프트 예시는 최소한 세 가지에 답해야 합니다.

- 언제 쓰는지
- 구체적으로 어떻게 말하는지
- 쓴 뒤 잘했는지 어떻게 판단하는지

똑똑해 보이는 말만 있고, 전제와 검증을 모르면 노트에 가깝고 예시가 아닙니다.

## 파일 이름

```text
examples/prompts/<category>/<slug>.md
```

`category` 예: `development`, `research`, `meta-workflows`, `team`.

## 필수 메타데이터(YAML frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Bug를 고치고 테스트 보강
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## 본문 필수 소절

1. **사용 장면**
2. **사용 전 준비**(권한, 브랜치, 컨텍스트 파일)
3. **권장판 프롬프트**(완전한 복사 가능)
4. **검증 기준**(체크리스트, 객관 점검 가능)
5. **흔한 실패 방식**
6. **관련 핸드북 페이지**(`src/content/docs/`로 링크)

선택: 극단 축약판, 교육용 분해, 교체 가능 변수.

## 흔한 오해

### 초점을 흩뜨리지 마세요

일부 기여자는 배경·이론·확장을 많이 쓰고, 정작 복사해 쓸 프롬프트가 중간에 묻힙니다.

더 안정적인 쓰기:

- 권장판 프롬프트를 먼저 완전하게
- 전제·변수·실패 방식을 보완
- 설명성 내용은 마지막

### 본인이 한 번 써 봤다고 완전한 예시가 아님

당신은 당시 머릿속 기본 전제를 알지만 독자는 모릅니다.

전제를 쓰세요. 예:

- 어느 제품 진입점에 맞는지
- 어떤 파일·스크린샷·컨텍스트가 필요한지
- 파일 수정·명령 실행·네트워킹을 기본 허용하는지

### 실제 민감 정보를 예시에 쓰지 마세요

실제 token·계정·내부 링크·고객 정보가 있으면 공개 저장소에 맞지 않습니다.

예시는 방법을 가르치고, 프로덕션 환경을 노출하지 않습니다.

## 검증 기준 예시

```markdown
## 검증 기준

- [ ] 원래 실패 테스트가 통과
- [ ] 약속한 범위의 테스트 스위트가 통과
- [ ] diff가 작업 관련 파일만 포함
- [ ] git push를 실행하지 않음
```

## 품질 문턱

- 목표와 완료 정의가 분명
- 권한·보안 경계 설명이 있음
- 실제 키와 PII가 없음
- `verified` 상태는 [독립 검증](/ko/guide/contributing/verify-technical-content/) 필요

## 제출 흐름

이 순서가 보통 더 안정적입니다.

1. 이 예시가 푸는 실제 작업 유형을 먼저 정함
2. 남이 바로 복사할 수 있는 프롬프트 한 판을 씀
3. 최소 필수 전제와 경계를 제시
4. “성공이란 무엇인가”를 분명히
5. 민감 정보 유출·잘못된 디렉터리를 마지막에 점검

## PR 점검

- [ ] 새 파일 경로가 `examples/README.md` 인덱스에 있음(인덱스를 유지하면)
- [ ] 사례 페이지 또는 워크플로 페이지가 최소 하나 해당 예시로 링크(선택이나 권장)

좋은 프롬프트 예시는 남이 그대로 재현해 비슷한 결과를 얻게 해야 합니다.

---

**상태:** verified  
**검증 근거:** 저장소의 현재 `examples/` 디렉터리, 예시 frontmatter, 인덱스 방식, 기여 흐름을 항목별로 확인했습니다. 페이지 요구는 기존 사례/워크플로 링크 구조와 맞추었으며, 특정 Codex 제품 단의 쉽게 바뀌는 동작에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
