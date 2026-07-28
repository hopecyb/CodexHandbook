---
title: 개인화와 프로젝트 설정
description: 개인 선호, AGENTS.md, 설정과 규칙 우선순위 — Codex가 장기적으로 당신의 방식대로 일하게 합니다.
sidebar:
  order: 40
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Codex는 “이번엔 어떻게 물을지”에만 의존하지 않습니다. **지속 설정**으로 당신과 팀의 약속을 기억합니다. 이 장에서는 어떤 요구를 대화에 남기고, 어떤 요구를 프로젝트에 내려둘지 구분합니다.

이미 “이 디렉터리는 건드리지 마”, “먼저 테스트 돌려”, “기본으로 이 모델 써”처럼 같은 말을 반복하고 있다면, 이 장이 다루는 문제입니다.

## 내용

- 개인 선호, 프로젝트 설명, 팀 규칙, 임시 프롬프트 **누가 누구를 덮어쓰는지**
- `AGENTS.md`에 무엇을 쓰고, 무엇을 쓰지 말아야 하는지
- 설정 파일과 승인/샌드박스 정책을 어느 계층에서 관리하는지

## 누구에게 맞나

| 독자 | 먼저 읽기 |
|---|---|
| 첫 작업을 막 통과한 경우 | [프로젝트 설명](/guide/customization/project-instructions/) |
| 저장소에 협업 규범을 고정하려는 경우 | [AGENTS.md란](/guide/customization/agents-md/what-is-agents-md/) |
| CLI/App 동작을 통일하려는 경우 | [설정 기초](/guide/customization/configuration/config-basics/) |

## 이 장이 다루는 것

Codex를 한동안 쓰면 같은 유형의 문제에 자주 부딪힙니다. 규칙은 많이 썼는데도 완전히 먹히지 않거나, 서로 다른 곳이 충돌합니다.

이 장에서는 협업 규칙을 계층으로 잘 두는 방법을 다룹니다.

- 무엇이 내 개인 습관인지
- 무엇이 저장소 공유 규칙인지
- 무엇이 조직 수준의 하드 경계인지
- 무엇이 이번 작업의 임시 요구인지

계층이 흐리면 “많이 썼는데, 정작 필요할 때 안 먹히는” 상황이 쉽게 납니다.

## 흔한 계층(개념)

계층을 이해하면 「규칙을 썼는데도 안 먹힘」 혼란을 줄일 수 있습니다. 클라이언트·조직 호스팅·버전 구현은 다를 수 있지만, 보통은 아래 몇 층으로 먼저 이해하면 됩니다.

```text
1. 조직/팀 호스팅 정책(이미 배포된 경우)
2. 프로젝트급 AGENTS.md / 프로젝트 지침(저장소 안)
3. 사용자급 설정과 선호(로컬 ~/.codex 등)
4. 현재 작업의 임시 요구와 @ 참조
```

**원칙:** 「조직 강제」에 가까울수록 단발 작업으로 함부로 느슨하게 두지 않습니다. 「현재 작업」에 가까울수록 유연하지만, 세션이 끝나면 사라지기 쉽습니다. 구체적 precedence는 현재 클라이언트와 공식 문서를 따릅니다.

## 흔한 오해

### 1. 프롬프트를 잘 쓰면 장기 설정은 필요 없다?

짧은 작업은 그럭저럭 되지만, 지속 협업이 시작되면 반복 요구를 아래로 내려두고 싶어집니다.

### 2. 모든 규칙을 `AGENTS.md`에 넣으면 된다?

그것도 아닙니다.  
다음이 더 맞는 경우도 있습니다.

- 개인 선호
- 설정 파일
- 조직 호스팅 정책
- 현재 작업 프롬프트

### 3. 설정은 많을수록 좋다?

설정이 흩어지고, 규칙이 길고, 계층이 어수선하면 사람과 도구 모두 “누구 말을 들을지” 헷갈리기 쉽습니다.

## 이 장 탐색

| 주제 | 페이지 |
|---|---|
| AGENTS.md | [개요](/guide/customization/agents-md/what-is-agents-md/) · [범위와 우선순위](/guide/customization/agents-md/scope-and-precedence/) · [프로젝트 지침 잘 쓰기](/guide/customization/agents-md/writing-effective-instructions/) |
| 프로젝트 지침 | [프로젝트 설명](/guide/customization/project-instructions/) |
| 기억 | [기억과 지속 컨텍스트](/guide/customization/memories-and-persistent-context/) |
| 메커니즘 선택 | [적합한 메커니즘 고르기](/guide/customization/choosing-the-right-mechanism/) |
| 설정 파일 | [설정 기초](/guide/customization/configuration/config-basics/) · [Profile](/guide/customization/configuration/profiles/) |
| 개인 선호 | [개인 선호](/guide/customization/personal-preferences/) |
| 규칙 | [허용과 거부](/guide/customization/rules/allow-and-deny-patterns/) · [명령 규칙](/guide/customization/rules/command-rules/) · [팀 정책](/guide/customization/rules/team-rules/) |
| 예시 | [Monorepo의 AGENTS.md](/guide/customization/examples/monorepo-agents-md/) |

Rules 세부는 이미 시작했고, 설정 세부 페이지는 커스터마이즈 모듈과 함께 계속 보강됩니다.

## 권장 순서

Codex 협업 규칙을 처음 체계적으로 정리할 때는 이 순서가 좋습니다.

1. 먼저 프로젝트 규칙 정리
2. 이어서 `AGENTS.md` 보강
3. 그다음 개인 선호 분리
4. 마지막으로 설정 파일과 더 세밀한 규칙 제어

처음부터 설정 키를 잔뜩 만지기보다 덜 어지럽습니다.

규칙은 많을 필요 없습니다. **올바른 위치**가 더 중요합니다.

## 흔한 실수

- 긴 아키텍처 문서를 `AGENTS.md`에 넣어 핵심 제약이 묻힘
- 대화에만 팀 규범을 반복하고 저장소에 커밋하지 않아 협업자 경험이 제각각
- 개인 로컬에서 샌드박스를 느슨하게 두고, 공유 저장소에서는 동료도 같은 권한이 있다고 가정

## 검증 체크리스트

- [ ] 네 계층 설정의 우선순위를 말할 수 있음
- [ ] 저장소에 짧은 `AGENTS.md`(또는 동등한 프로젝트 지침)가 있음
- [ ] 민감 작업은 여전히 승인으로 가며, 글자 규칙이 모델을 “겁주어” 막아주기를 기대하지 않음

## 참고 출처
- OpenAI Codex 문서: [https://developers.openai.com/codex](https://developers.openai.com/codex)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI 현재 헬프 센터와 Codex 관련 설정 자료에는 사용자급 `~/.codex` 설정, 조직급 호스팅, 프로젝트급 협업 설명의 계층이 분명합니다. 이 페이지는 “우선순위”를 더 보수적인 흔한 계층 설명으로 다시 썼으며, 특정 구현 세부를 절대 규칙처럼 쓰지 않습니다.  
**최근 검증:** 2026-07-26
