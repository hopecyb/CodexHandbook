---
title: IDE의 Cloud 작업
description: IDE에서 Cloud 작업을 위임하고, 상태를 따라가며, 원격 산출을 검토합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

일부 IDE 통합은 작업을 **Cloud에 위임**할 수 있습니다. 작업은 원격 표준 환경에서 실행되고, 로컬에서 계속 편집하거나 자리를 비울 수 있습니다. 흐름은 순수 Cloud/Web과 비슷하지만, 입구가 에디터 측에 있습니다.

## 내용

- IDE에서 Cloud 작업을 보낼 때와 순수 로컬을 고를 때
- 위임 전후에 준비할 것
- 원격 diff를 로컬 검토로 이어 받는 방법

## 적합한 장면

| Cloud에 적합 | 로컬 유지 |
|---|---|
| 의존성 설치가 무겁고 환경 재현이 어려움 | 두 줄만 빠르게 수정 |
| 브랜치 push / PR 열기 필요 | GitHub 미연결 |
| 장시간 실행, 모바일 승인 알림을 원함 | 본기 미커밋 민감 초안 포함 |

개념: [로컬과 클라우드](/guide/foundations/local-vs-cloud/)

## 이 워크플로가 맞는 경우

이런 상황에 흔합니다.

- IDE에서 일하는 습관이 있음
- 다만 작업 자체는 원격 환경에서 돌리는 편이 나음

즉, 작업은 여전히 IDE에서 하지만 실행 환경은 원격으로 바뀐 것입니다.

## 전제 조건

- [ ] [GitHub이 연결됨](/guide/web-and-cloud/connect-github/)
- [ ] Cloud [환경](/guide/web-and-cloud/cloud-environments/)과 [Secrets](/guide/web-and-cloud/secrets-and-variables/)가 구성됨(작업에 필요한 경우)
- [ ] 로컬 변경을 commit했거나 「원격 브랜치를 기준」으로 명시

**IDE는 Cloud가 본기의 미푸시 commit에 접근하도록 대신해 주지 않습니다.**

## 흔한 오해

### 1. IDE에서 “클라우드 실행”을 누르면 본기의 모든 것이 따라가나요

아닙니다.  
원격 작업이 보는 것은 여전히 원격 저장소·원격 환경, 그리고 명시적으로 넘긴 내용입니다.

### 2. 입구가 IDE이니 로컬 작업과 거의 같나요

다릅니다.  
시작 위치는 IDE여도, 실행 경계·환경·보이는 내용은 Cloud 쪽입니다.

### 3. 클라우드에서 끝나면 검토도 끝난 건가요

원격 완료는 거기서 실행이 끝났다는 뜻일 뿐, 로컬 review·테스트·최종 확인이 끝났다는 뜻은 아닙니다.

## 권장 흐름

```text
1. IDE에서 작업 설명 작성(목표, 브랜치, 제약, 검수)
2. 「클라우드에서 실행」또는 동등 입구 선택(제품 UI 기준)
3. 계획 확인(plan 모드가 켜진 경우)
4. 자리를 비우거나 로컬 작업을 계속 → 알림/패널로 진행 확인
5. 원격 완료 후: Web/App에서 diff 확인 → PR 열기 또는 브랜치를 로컬로 pull
6. 로컬에서 테스트 + 사람 review → 병합
```

PR 세부: [Pull Request 만들기](/guide/web-and-cloud/create-pull-requests/)

## 자주 쓰는 순서

IDE에서 Cloud 작업을 처음 보낼 때는 다음 순서를 권합니다.

1. 로컬 변경을 커밋했는지, 의도적으로 제외했는지 확인
2. GitHub·Secrets·브랜치가 준비됐는지 확인
3. 명확한 목표·범위·검수 조건으로 작업을 시작
4. 원격 완료 후 돌아와 diff를 확인
5. 로컬에서 테스트와 사람 검토를 보완

IDE Cloud 작업과 로컬 작업의 핵심 차이는 실행 환경이 원격인지입니다.

## 데스크톱 App 위임과의 관계

데스크톱 App의 [로컬과 Cloud 작업](/guide/desktop-app/local-and-cloud-tasks/)과 IDE 위임은 같은 Cloud 백엔드를 공유합니다. 차이는 주로 **입구 UI와 컨텍스트 첨부**(IDE는 현재 선택 영역 요약을 붙일 수 있음)에 있습니다.

## 보안 경계

- Cloud 작업 권한은 GitHub 연결 범위와 조직 정책의 제약을 받습니다
- 작업 설명에 프로덕션 키를 붙여넣지 마세요; [Secrets](/guide/web-and-cloud/secrets-and-variables/)를 쓰세요
- 병합 전에도 [사람 검토](/guide/web-and-cloud/code-review/)가 필요합니다

## 흔한 실수

- 위임 후 본기에서 같은 파일을 계속 고쳐 원격 브랜치와 충돌
- 브랜치 이름을 쓰지 않아 원격이 공유 브랜치에 바로 push
- Cloud 산출을 「이미 검수됨」으로 보고 CI를 건너뜀

---

**상태:** outdated  
**적용 제품:** IDE / Cloud  
**재검토 설명:** 이 페이지는 “IDE에서 Cloud 작업을 직접 위임하고, diff를 이어 받고, 로컬에서 후속”을 비교적 구체적인 현행 확장 능력·흐름으로 서술합니다. 공식 현행 자료만으로는 해당 IDE 클라우드 위임 경험의 구체적 형태를 항목별로 입증하기 어렵고, 정식 IDE/Cloud 문서가 보강되기 전에는 `outdated`가 더 적합합니다.  
**최근 검증:** 2026-07-26
