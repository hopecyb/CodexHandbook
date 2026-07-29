---
title: 오류와 안내 참고
description: 흔한 오류 메시지, 종료 코드, 실패 원인의 학습용 색인——장애 분석 페이지로 안내하며 공식 지원을 대체하지 않습니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 100
---

많은 사람이 오류를 보면 그 한 줄의 영어만 반복해서 보고, 직감으로 답을 추측하려 합니다. 먼저 문제를 분류하는 편이 보통 더 효과적입니다.

오류를 보면, **인증, 권한, 환경, 네트워크, 작업 로직** 중 어디에 가까운지 먼저 판단하세요. 이 페이지는 고빈도 안내의 대략적인 뜻과 다음 단계를 정리한 것이며, 완전한 오류 사전이 아닙니다. 최신 동작은 공식 문서와 클라이언트 출력을 기준으로 합니다.

## 오류를 보면 먼저 어떻게 읽나

오류를 처음 보면, 이 세 단계를 하세요.

1. 키워드가 어느 종류인지 봄：인증, 권한, 환경, 네트워크, 컨텍스트
2. 어느 단계에서 났는지 봄：기동, 설치, 실행, 푸시, 출력
3. 대응 특집 페이지로 가 장애 분석

원인을 바로 추측하는 것보다 보통 더 빠릅니다.

전역 색인：[장애 분석](/guide/reference/troubleshooting/)

## 인증과 계정

| 안내 또는 현상 | 가능한 원인 | 다음 단계 |
|---|---|---|
| Authentication failed / 401 | token 만료, 미로그인 | [로그인과 인증](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | 조직이 기능이나 모델을 비활성화 | 관리자에게 연락；플랜은 [계정과 접근](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | 요청이 너무 잦거나 쿼터 | 잠시 후 재시도；플랜 사용량 확인 |

## 흔한 오해

### 1. 오류가 길다고 문제가 더 복잡한 것은 아니다

긴 오류는 컨텍스트만 쌓인 경우가 많고, 실제로 유용한 것은 그중 짧은 키워드인 경우가 많습니다.

### 2. 비영 종료 코드가 모델이 못한다는 뜻은 아니다

다음일 수도 있습니다.

- 권한이 없음
- 네트워크가 안 통함
- 출력 형식이 요구를 충족하지 않음
- 작업 자체가 실패 조건을 트리거함

### 3. 401 / 403 / 429는 같은 것이 아니다

세 가지의 차이는 큽니다.

- `401`은 보통 “인증이 안 됨”
- `403`은 보통 “누군지는 알지만 하게 두지 않음”
- `429`는 보통 “너무 빠르니 잠시 후”

### 4. 마지막 줄이 가장 중요한 것은 아니다

마지막 줄은 “최종 실패 요약”일 뿐이고, 유용한 정보는 위쪽 몇 줄에 있는 경우가 있습니다. 예:

- 어느 단계에서 트리거됐는지
- 어느 파일, 명령, 도구가 실패했는지
- 더 원초적인 원인 안내가 있는지

## CLI와 명령

| 안내 또는 현상 | 가능한 원인 | 다음 단계 |
|---|---|---|
| command not found: codex | 미설치 또는 PATH | [CLI 설치](/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML 문법 | [CLI 설정](/guide/cli/configuration/) |
| Permission denied (write) | 샌드박스 또는 승인 거부 | [승인과 샌드박스](/guide/cli/approvals-and-sandbox/) |
| 비영 종료 코드(exec) | 작업 실패 또는 완료 조건 미충족 | stderr 로그 확인；프롬프트를 조임 |

## 먼저 분류하기

어디서부터 할지 모르겠다면, 오류를 5종류로 나누세요.

| 종류 | 먼저 볼 것 |
|---|---|
| 인증 | 계정, token, 로그인 상태 |
| 권한 | 승인, 샌드박스, 저장소 권한 |
| 환경 | 설치, PATH, 설정, 의존성 |
| 네트워크 | 출망, 프록시, 원격 서비스 도달성 |
| 작업 로직 | 프롬프트, 입력 파일, 출력 요구 |

여기까지 분류하면, 장애 분석 방향이 빗나가기 어렵습니다.

## 사용 방식

완전한 사전처럼 쓰지 말고, 오류 분기 표처럼 쓰세요.

- 키워드를 봄
- 대응 종류를 찾음
- 더 구체적 장애 분석 페이지로 감

그래도 모르겠다면, 오류 내용을 더 직접적인 질문으로 바꿔 보세요.

- 로그인이 안 됐나?
- 권한이 없나?
- 이 명령이 아예 설치되지 않았나?
- 네트워크가 닿지 않나?
- Codex에 준 요구 자체가 불분명한가?

다음에 어디를 볼지 잠깐 판단이 안 되면, 이 페이지로 먼저 큰 종류로 나누세요.

## 권한과 샌드박스

| 안내 또는 현상 | 가능한 원인 | 다음 단계 |
|---|---|---|
| User rejected tool call | 당신이나 정책이 동작을 거부 | 승인해야 하는지 확인；또는 작업 변경 |
| Sandbox violation | 쓰기 경로나 명령이 경계를 넘음 | [샌드박스와 네트워크](/guide/foundations/sandbox-and-network/) |
| Network access denied | 출망이 금지됨 | Cloud：[인터넷 접근](/guide/web-and-cloud/internet-access/) |

## Cloud와 GitHub

| 안내 또는 현상 | 가능한 원인 | 다음 단계 |
|---|---|---|
| Repository access denied | OAuth 범위 부족 | [GitHub 연결](/guide/web-and-cloud/connect-github/) |
| Clone failed | 저장소 이름, 권한, 네트워크 | [Cloud 장애 분석](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | 이름 오류 또는 스코프 | [Secrets와 변수](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | 브랜치 보호 | [PR 만들기](/guide/web-and-cloud/create-pull-requests/) |

## MCP와 확장

| 안내 또는 현상 | 가능한 원인 | 다음 단계 |
|---|---|---|
| MCP server failed to start | 명령 경로, 의존성 누락 | [MCP 연결](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | 외부 API가 느리거나 다운 | 재시도；MCP 로그 확인 |
| Unknown tool | 설정과 서버 버전 불일치 | 세션 재시작；설정 갱신 |

## 컨텍스트와 모델

| 안내 또는 현상 | 가능한 원인 | 다음 단계 |
|---|---|---|
| Context length exceeded | 대화나 @ 파일이 너무 큼 | [압축](/guide/context/compaction/) · 범위 축소 |
| Model not available | 지역 또는 플랜이 지원하지 않음 | [모델과 추론](/guide/foundations/models-and-reasoning/) |

## 이 페이지 사용법

1. **핵심 문장**을 클라이언트 검색이나 본 핸드북 검색에 복사
2. 표를 따라 특집 페이지로 가 체크리스트를 실행
3. 그래도 해결되지 않으면：전체 로그를 남기고 [공식 리소스](/guide/reference/official-resources/)를 확인

## 보고할 때 붙이면 좋은 것

- 클라이언트 유형과 버전(App / CLI / IDE / Cloud)
- 운영체제
- 마스킹한 오류 전문
- 비대화형인지, CI인지

## 디버깅 순서

1. 전체 오류를 스크린샷하거나 복사하고, 마지막 한 줄만 자르지 않음
2. 어느 종류인지 먼저 판단하고, 기술 세부 추측을 서두르지 않음
3. 방금 무엇을 바꿨는지 떠올림
4. 변수 하나만 바꾼 뒤 한 번 재시도
5. 안 되면 전체 정보를 들고 사람에게 묻거나 공식 문서를 확인

여러 변화를 한꺼번에 섞지 않게 하고, 다른 사람도 위치를 찾기 쉬워집니다.

## 참고 출처
- OpenAI Codex 지원 문서
---

**상태：** verified  
**적용 제품：** App / CLI / IDE / Cloud  
**검증 근거：** 이 페이지는 “오류 분기 색인”이지 완전한 오류 사전이 아니며, 분류는 주로 인증·권한·환경·네트워크·작업 로직 다섯 가지입니다. 이 분기 차원은 현행 CLI, Cloud, 권한, 설정 장과 교차 확인했으며, 고정 오류 코드 표에 의존하지 않습니다.  
**최근 검증：** 2026-07-26
