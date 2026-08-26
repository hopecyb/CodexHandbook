---
title: 사람 승인 패턴
description: 언제 승인·거절하거나 Codex에 일시중지를 요청할지, 그리고 그 규칙을 어떻게 분명히 쓸지입니다.
locale: ko
source_locale: zh-CN
source_revision: 0e37633
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

승인의 역할은 되돌릴 수 없는 작업을 사람이 결정하게 두는 것입니다. 이 페이지는 흔한 몇 가지 방식을 정리합니다.

## 승인 계층

```text
자동 안전 구역(읽기, 분석, 계획)
    ↓
확인 요청 구역(파일 쓰기, 명령 실행, 네트워크)
    ↓
강제 사람 구역(push, 데이터 삭제, 외부 발송, 프로덕션 설정 변경)
```

구체 팝업 동작은 [제품 진입점](/ko/guide/)에 따라 다르지만, 원칙은 같습니다.

## 패턴 1: 먼저 계획한 뒤 실행

```text
규칙: 내가 「계획 승인」을 보기 전에는 저장소 파일을 수정하지 마세요.
```

적합: 코드베이스에 익숙하지 않음, 프로덕션 관련, 큰 diff.

## 패턴 2: 화이트리스트 명령

[AGENTS.md](/ko/guide/customization/agents-md/writing-effective-instructions/)에 명시합니다:

```md
다시 묻지 않고 허용: pnpm test, pnpm lint, git status, git diff
매번 반드시 확인: git push, npm publish, 데이터베이스 migrate
```

호스팅 정책과 충돌하면 **더 엄격한** 쪽을 따릅니다.

## 패턴 3: 2단계 병합

1. Codex가 draft PR 또는 로컬 브랜치를 엽니다
2. 사람이 CI + review를 통과시킨 뒤 병합합니다

Cloud 시나리오는 [Pull Request 만들기](/ko/guide/web-and-cloud/create-pull-requests/)를 참고하세요.

## 패턴 4: 읽기 전용 정찰

```text
이번 라운드는 읽기만: 파일 읽기, 테스트 실행, 로컬 API curl 가능.
디스크 쓰기와 git commit은 금지.
```

감사, 낯선 프로젝트 학습, 프로덕션 문제 진단에 사용합니다.

## 언제 거절하고 다시 할지

| 신호 | 제안 |
|---|---|
| 계획이 목표와 맞지 않음 | 실행을 거절하고 계획 수정을 요청 |
| 변경 범위가 확산됨 | 멈추고 작업을 쪼갬 |
| 테스트가 건너뛰어짐 | 병합을 거절하고 검증 보완을 요청 |
| 어떤 명령을 설명할 수 없음 | 거절하고 설명을 요청 |

## Automations와의 관계

무인 작업도 설계 시 사람 확인 지점을 남겨야 합니다. [예약과 백그라운드 작업](/ko/skills/automations/scheduled-tasks/)을 참고하세요.

## 흔한 실수

- 오래 「항상 허용」을 켠 뒤 위험을 잊음
- 승인이 형식만 되고 diff를 읽지 않음
- 구두 「함부로 하지 마」로 명확한 패턴을 대체

## 인수 체크리스트

- [ ] 작업 시작 전에 어떤 승인 패턴을 쓸지 선언
- [ ] 고위험 작업에 제2자 review 또는 CI 관문이 있음
- [ ] 팀이 `git push` 등 명령에 통일된 정책을 가짐

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 autonomy / approval boundaries 공식 모델 지침과, 이 핸드북에서 이미 검증된 승인, 명령 규칙, PR, 자동화 장을 교차 확인했습니다. 이 페이지는 “어떤 동작은 자동으로 이어가고, 어떤 동작은 멈춰 사람 승인을 받을지”라는 안정적인 협업 원칙만 확인합니다.  
**최근 검증:** 2026-07-26
