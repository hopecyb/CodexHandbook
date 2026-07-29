---
title: GitHub 연결
description: Codex Cloud를 GitHub 저장소에 연결합니다——권한, 브랜치, 환경입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

GitHub를 연결하면 Codex가 **원격 환경**에서 저장소를 클론하고, 브랜치를 열고, 푸시하고, PR을 열 수 있습니다. Cloud 워크플로의 전제입니다.

## 내용

- 왜 연결이 필요한지, 어떤 권한을 주는지
- 연결 전후 체크리스트
- 로컬 데스크톱 작업과의 역할 분담

## 관계도

```text
당신의 GitHub 저장소
    ↕(OAuth / GitHub App, 제품 기준)
Codex Cloud 환경
    ↕
Web/App에서 시작하는 클라우드 작업
```

로컬 [데스크톱 App](/guide/desktop-app/)은 여전히 본기 clone을 직접 수정할 수 있습니다. Cloud는 **표준화 환경, 컴퓨터를 떠나 계속 실행, 폰에서 승인** 같은 시나리오에 맞습니다. [로컬과 클라우드](/guide/foundations/local-vs-cloud/)를 보세요.

## 흔한 오해

### 1. 로컬에 이미 저장소가 있는데 왜 다시 GitHub를 연결하나요?

Cloud 작업이 보는 것은 원격 저장소이지, 본기의 그 저장소가 아닙니다.

### 2. GitHub를 연결하면 로컬의 모든 변경을 보나요?

로컬에서 push하지 않은 변경은 Cloud가 보통 보지 못합니다.  
흔한 혼동 지점입니다.

### 3. 연결할 때 무엇을 가장 주의해야 하나요?

먼저 확인할 것은 다음입니다.

- 저장소 범위가 너무 넓지 않은지
- 브랜치 보호를 어떻게 설정했는지
- 키가 Cloud의 안전한 위치에 제대로 있는지

GitHub를 연결한 뒤 Cloud가 보는 것은 원격 저장소이지, 컴퓨터에 아직 푸시하지 않은 로컬 상태가 아닙니다.

## 연결 전 확인

- [ ] 대상 저장소에 push 권한이 있음(또는 PR만 필요하면 fork 전략)
- [ ] 브랜치 보호 규칙을 알고 있음：main 직접 푸시 금지 여부
- [ ] 키가 저장소 안에 없음；Cloud는 [Secrets 설정](/guide/web-and-cloud/secrets-and-variables/) 사용
- [ ] 조직이 서드파티 GitHub 통합을 허용하는지

## 권장 단계(개념)

1. Codex Web/Cloud 설정에서 **GitHub 연결** 열기
2. 조직과 저장소 범위 선택(**저장소 목록을 최대한 작게**)
3. OAuth 권한 설명 확인：보통 코드 읽기, PR 열기；쓰기 권한은 작업에 따라
4. 테스트 저장소에서 소규모 Cloud 작업으로 검증
5. 성공 후 기본 브랜치, 환경 변수 구성(있는 경우)

구체 버튼과 UI는 현재 제품을 기준으로 합니다.

## 권한과 보안

| 실천 | 이유 |
|---|---|
| 전용 머신 사용자 또는 bot 계정(팀) | 감사와 퇴사 시 회수 |
| 모든 비공개 저장소를 승인하지 않음 | 오동작면 축소 |
| 브랜치 보호 + 필수 review 활성화 | Cloud 산출도 사람 검토를 거침 |
| 연결된 저장소 목록을 주기적으로 재검토 | 종료 프로젝트는 제때 끊음 |

## 연결 후 흔한 작업

- 원격으로 issue 구현 → [Pull Request 만들기](/guide/web-and-cloud/create-pull-requests/)
- PR 리뷰와 후속 → [GitHub](/guide/integrations/github/) 통합
- [Automations](/skills/automations/scheduled-tasks/)와 결합

## 흔한 실수

- 개인 GitHub를 프로덕션 조직 저장소에 연결하면서 개인 정책을 씀
- Cloud가 본기에 푸시하지 않은 commit에 접근한다고 가정
- 처음부터 대형 monorepo에서 제한 없는 작업을 돌림

## 참고 출처
- OpenAI Codex Cloud / GitHub 통합 문서
---

**상태：** outdated  
**적용 제품：** Cloud / Web  
**재검토 설명：** 이 페이지는 현재 GitHub 연결 방식, 권한 모델, 저장소 범위 설정, Cloud 측 버튼 입구 등 구체 제품 동작에 의존합니다. 변동이 큰 통합 정보이므로, 현행 공식 연결 문서를 보강한 뒤 `verified`로 되돌리세요.  
**최근 검증：** 2026-07-26
