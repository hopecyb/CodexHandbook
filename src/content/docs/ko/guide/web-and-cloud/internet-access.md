---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: 인터넷 접근
description: 설치 단계와 Agent 단계의 인터넷 접근을 구분하고 도메인과 HTTP 메서드로 위험을 제한합니다.
locale: ko
source_locale: zh-CN
source_revision: "5bbb905"
translation_status: reviewed
translated_at: "2026-09-20"
sidebar:
  order: 70
reviewed_at: "2026-10-26"
---

Cloud에는 인터넷을 사용하는 서로 다른 두 단계가 있습니다.

| 단계 | 기본 동작 | 주된 용도 |
|---|---|---|
| setup script | 인터넷 접근 가능 | 의존성과 도구 설치 |
| Agent phase | 기본적으로 꺼짐 | Agent가 작업 중 외부 리소스에 접근 |

따라서 setup에서 `pnpm install`이 성공했다고 해서 Agent가 나중에 아무 웹사이트에나 `curl`을 사용할 수 있는 것은 아닙니다.

## 기본적으로 꺼져 있는 이유

Agent의 인터넷 접근은 프롬프트 인젝션, 코드나 데이터의 외부 유출, 악성 의존성, 라이선스가 맞지 않는 콘텐츠가 저장소에 들어올 위험을 높입니다. 신뢰할 수 없는 issue, 웹페이지, 의존성의 README에는 Agent가 데이터를 외부로 보내는 명령을 실행하도록 유도하는 지시가 들어 있을 수 있습니다.

원칙은 작업에 필요한 대상과 동작만 허용하고 작업 로그를 검토하는 것입니다.

## 설정 옵션

Agent 인터넷 접근은 환경별로 설정합니다.

- **Off**: Agent의 인터넷 접근을 완전히 차단합니다.
- **On**: 인터넷 접근을 허용하며 도메인과 HTTP 메서드를 제한할 수 있습니다.

도메인 목록은 빈 목록에서 시작하거나 **Common dependencies** 프리셋을 사용하거나 **All (unrestricted)**을 선택할 수 있습니다. 운영 저장소에서 unrestricted를 문제 해결의 지름길로 사용하지 마세요.

작업에 문서 읽기나 콘텐츠 다운로드만 필요하다면 HTTP 메서드를 `GET`, `HEAD`, `OPTIONS`로 제한하세요. 그러면 데이터를 외부로 보내거나 수정할 수 있는 `POST`, `PUT`, `PATCH`, `DELETE` 등의 메서드가 차단됩니다.

## 최소한의 접근만 허용하는 예

어떤 공개 API 문서를 조회해야 하는 작업이라면 다음 순서로 진행합니다.

1. 먼저 Off를 유지한 채 실패 원인이 실제로 네트워크인지 확인합니다.
2. Agent access를 켭니다.
3. allowlist에는 해당 공식 도메인만 추가합니다.
4. `GET`, `HEAD`, `OPTIONS`만 허용합니다.
5. 다시 실행하고 로그의 모든 외부 요청을 확인합니다.
6. 작업이 끝나면 Off로 되돌릴지 평가합니다.

## Secret과의 중요한 관계

Cloud Secret은 Agent 단계가 시작되기 전에 제거됩니다. 따라서 Agent가 setup Secret을 직접 외부로 보낼 위험은 줄어듭니다. 하지만 일반 환경 변수, 저장소 내용, 작업 중 생성된 데이터는 여전히 외부로 보낼 수 있습니다. Secret의 수명 주기를 우회하려고 민감한 값을 일반 환경 변수인 것처럼 설정하지 마세요.

## 완료 확인 체크리스트

- [ ] Agent 단계에서 인터넷 접근이 필요한 이유를 설명했음
- [ ] allowlist에 필요한 도메인만 포함했음
- [ ] HTTP 메서드를 최소 집합으로 제한했음
- [ ] 입력 출처를 신뢰할 수 있거나 프롬프트 인젝션 위험을 고려했음
- [ ] 로그에 저장소, 환경 정보 또는 자격 증명을 업로드하는 명령이 없음
- [ ] 새 의존성의 출처, 버전, 라이선스를 확인했음

## 공식 근거

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
