---
title: references/ 디렉터리
description: Skill에서 긴 참고 문서를 정리해 점진적 공개를 구현합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`references/`는 매번 바로 펼칠 필요 없는 긴 자료를 두기에 적합합니다. 주 절차가 길고 어수선해지는 것을 막습니다.

「문서를 몇 개 더 넣는」 것만이 아니라, **매번 당장 읽지는 않지만 어떤 단계에서 실제로 유용한** 자료를 따로 모아 두고 필요할 때 읽게 하는 데도 의미가 있습니다.

# references/ 디렉터리

`SKILL.md` 본문이 너무 길면 상세 규범, API 설명, 체크리스트를 `references/`로 옮기고, 단계에서 필요에 따라 인용하세요.

## 예시

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

`SKILL.md`에 이렇게 씁니다.

```md
코드 스타일을 검토할 때 references/style-guide.md를 읽고 그 규칙으로 검사합니다.
```

## 하는 일

- `SKILL.md`는 주선 절차를 담당
- `references/`는 「필요할 때 여는 자료」를 담당

이렇게도 이해할 수 있습니다.

- `SKILL.md`는 작업 설명
- `references/`는 자료함

Skill을 읽을 때 긴 배경 설명에 먼저 눌리지 않고, 세부 사항이 필요할 때 근거를 찾을 수 있습니다.

## 언제 `references/`를 분리할 가치가 있나
`SKILL.md`에 이런 상황이 보이면 분리를 고려하세요.

- 긴 규범 설명이 매번 자리를 차지함
- 서로 다른 주제의 참고 자료가 섞여 있음
- 주 절차가 배경 자료에 끊겨 처음 읽기 어려움

첫 Skill을 만들 때 `references/`가 반드시 필요하지는 않습니다.  
흔한 순서는 **먼저 통과시키고, 내용이 정말 길어질 때 분리**하는 것입니다.
## 흔한 오해

### 1. `references/`는 내용을 조금 밖으로 복사하는 것뿐이다

더 중요한 역할은 주 절차를 짧고 분명하게 유지해 먼저 통과할 수 있게 하는 것입니다.

### 2. 참고 자료는 많을수록 좋다

무엇이든 `references/`에 넣으면 결국 혼란을 한 파일에서 여러 파일로 옮긴 것뿐입니다.

### 3. `references/`가 있으면 `SKILL.md`는 아주 짧게 써도 된다

주 절차는 여전히 `SKILL.md`에 남겨야 합니다. 그렇지 않으면 처음 읽는 사람이 어떻게 실행해야 할지 모릅니다.

## 원칙

- 주 절차는 `SKILL.md`에, 참고 자료는 필요 시 로드
- 파일당 한 주제에 초점을 두어 유지보수하기 쉽게
- references에서 SKILL.md에 이미 있는 단계를 반복하지 말 것

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 현재 Codex 런타임은 스킬 본문과 관련 자료를 필요에 따라 읽는 방식을 명확히 씁니다. 이 페이지의 `references/` 설명은 안정적인 문서 구성 원칙입니다.  
**최근 검증:** 2026-07-26
