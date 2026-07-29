---
title: Cloud 장애 분석
description: GitHub 연결, 환경, Secrets, 출망, PR 단계의 흔한 장애 색인입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 80
---

Cloud에 문제가 났을 때, 같은 실행을 반복한다고 근본 원인이 해결되지는 않습니다.

Cloud 문제는 흔히 **권한, 환경 차이, 자격 증명, 네트워크** 네 층에 있습니다. 이 페이지는 증상별로 대응 특집으로 보내, 채팅에서 맹목적으로 재시도하지 않게 합니다.

## 내용

- 작업 실패 시 먼저 어느 종류의 원인을 볼지
- 로컬 장애 분석과의 역할 분담
- 언제 로컬 작은 단계 검증으로 돌아갈지

## 먼저 볼 것

“Cloud는 빨강, 로컬은 초록”이면, 실행 조건을 우선 확인하세요.

흔한 원인은 다음과 같습니다.

- 원격 환경이 로컬과 다름
- Cloud가 로컬에서 푸시하지 않은 것을 보지 못함
- Secret이 제대로 구성되지 않음
- 네트워크나 권한이 제한됨

장애 분석 때는 조건이 충족되는지 먼저 보고, 그다음 작업 자체에 문제가 있는지 보세요.

## 빠른 분류

| 증상 | 우선 확인 |
|---|---|
| 저장소 연결 불가 / 403 | [GitHub 연결](/guide/web-and-cloud/connect-github/) |
| 의존성 설치 실패 | [인터넷 접근](/guide/web-and-cloud/internet-access/) · [Cloud 환경](/guide/web-and-cloud/cloud-environments/) |
| 사설 패키지 / API 401 | [Secrets와 변수](/guide/web-and-cloud/secrets-and-variables/) |
| 작업이 계속 대기 | [위임과 후속](/guide/web-and-cloud/delegate-and-follow-up/) · 승인 대기인지 |
| 로컬에 commit이 있는데 Cloud가 못 봄 | push했는지；Cloud는 본기 미푸시 내용을 읽지 않음 |
| PR을 못 열거나 못 푸시 | 브랜치 보호 · [PR 만들기](/guide/web-and-cloud/create-pull-requests/) |
| Cloud에서 테스트 빨강, 로컬 초록 | 버전/환경 정렬 표는 [Cloud 환경](/guide/web-and-cloud/cloud-environments/) |

## 장애 분석 순서

이 순서로 보세요.

1. 저장소와 브랜치가 맞는지
2. 권한과 승인이 충분한지
3. 환경과 의존성이 갖춰졌는지
4. Secret과 네트워크가 통하는지
5. 작업 설명에 핵심 제약이 빠졌는지

이 항목을 먼저 정리하는 편이, 바로 다시 돌리는 것보다 효과적입니다.

## 연결과 권한

**현상：** OAuth는 성공했는데 작업이 clone하지 못함.

**확인：**

1. 승인 범위에 대상 조직/저장소가 포함되는지
2. 저장소가 archived인지, GitHub App 제한이 있는지
3. 개인 계정으로 org SSO가 필요한 저장소에 연결했는지

**현상：** push가 거부됨.

**확인：** 브랜치 보호, required review, `main`에 직접 푸시하려 했는지

## 흔한 오해

### 1. 설치 단계 오류면 반드시 의존성 문제인가

네트워크, 인증, Secret, 사설 registry 권한 문제일 수도 있습니다.

### 2. 로컬에서 되면 코드는 문제없고, Cloud가 가끔 흔들린 건가

많은 경우 의미는 이것입니다.  
**로컬 환경에 Cloud에는 없는 전제 조건이 있다.**

### 3. 작업이 멈춘 것은 모델이 생각 중인 건가

다음일 수도 있습니다.

- 승인을 기다림
- 네트워크를 기다림
- 환경 기동을 기다림
- 범위가 너무 큰 작업을 함

## 환경과 의존성

**현상：** `command not found`(node, python 등).

**확인：** 베이스 이미지에 필요한 런타임이 있는지；`AGENTS.md`에 버전과 설치 명령을 적었는지.

**현상：** lockfile 충돌 또는 설치 타임아웃.

**확인：** 출망 정책；registry 미러；의존성에 VPN이 필요한지(Cloud는 보통 사내에 없음)

## Secrets와 변수

**현상：** 빌드 시 환경 변수가 비어 있음.

**확인：**

- Secret 이름이 문서와 일치하는지(대소문자 민감이 흔함)
- 올바른 저장소/환경 스코프에 구성했는지
- Secret 값을 프롬프트에 써서 마스킹됐는지

더 보기：[Secrets와 변수](/guide/web-and-cloud/secrets-and-variables/)

## 작업 보류와 타임아웃

| 원인 | 처리 |
|---|---|
| 사람 승인 대기 | App/폰에서 승인 또는 거부 |
| 작업이 너무 큼 | 여러 작은 위임으로 분할 |
| 환경 기동이 느림 | 첫 콜드 스타트는 정상；계속 느리면 공식 상태 페이지 확인 |

후속 방법：[위임과 후속](/guide/web-and-cloud/delegate-and-follow-up/)

## 산출 품질

Cloud는 끝났는데 결과를 쓸 수 없을 때:

1. 작업 설명에 검수 조건이 빠졌는지 대조
2. 로컬에서 같은 브랜치를 checkout해 테스트
3. [진단 후 수정](/cases/workflows/diagnose-before-fixing/)으로 후속을 이어 붙이고, 작업 전체를 처음부터 다시 하지 않음

## 언제 로컬로 먼저 돌아갈까

Cloud 조건을 정리하는 데만 두 라운드가 연속되고, 작업 자체는 진전되지 않으면, 먼저 로컬로 돌아가세요.

- 로컬에서 최소 재현
- 의존성, 명령, 검증 방식을 분명히 씀
- 그다음 Cloud에 다시 위임

원격 환경에서만 추측하는 것보다 시간이 덜 듭니다.

## 전역 장애 분석 색인과의 관계

CLI/IDE/App 로컬 문제는 [참고 자료 · 장애 분석](/guide/reference/troubleshooting/)을 보세요. 이 페이지는 **Cloud 고유** 링크만 다룹니다.

## 참고 출처
- OpenAI Codex Cloud 지원 문서
---

**상태：** outdated  
**적용 제품：** Cloud  
**재검토 설명：** 이 페이지의 장애 분석 프레임은 도움이 되지만, 현재 Cloud 저장소 연결·Secrets·승인·네트워크·PR 동작 가정 위에 세워져 있습니다. Cloud 제품과 크로스엔드 능력이 바뀌면, 증상에서 특집 페이지로의 매핑을 최신 공식 지원 문서에 맞춰 다시 써야 합니다.  
**최근 검증：** 2026-07-26
