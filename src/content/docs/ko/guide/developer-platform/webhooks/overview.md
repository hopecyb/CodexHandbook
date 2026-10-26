---
title: Webhook과 작업 이벤트의 경계
description: Codex의 로컬 실행 결과, App Server 이벤트, 직접 설계한 HTTP 콜백을 구분한다.
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: SDK와 App Server의 실행 및 이벤트 모델을 확인했다. HTTP 콜백은 자체 구축 구조에 대한 조언이며 통일된 Codex Cloud Webhook 계약이 있다고 주장하지 않는다.
  evidence:
    - label: SDK 공식 문서
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: App Server 프로토콜과 이벤트
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: ko
source_locale: zh-CN
source_revision: '8a84ab8'
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

작업이 끝나면 프로그램 반환값, 프로세스 종료 상태, 이벤트 스트림 또는 HTTP 콜백으로 내부 시스템에 알릴 수 있다. 먼저 발신자와 프로토콜을 정한 뒤 Webhook 필요 여부를 결정한다.

## 세 가지 메커니즘을 혼동하지 않기

| 메커니즘 | 받는 방법 | 경계 |
|---|---|---|
| 로컬 SDK / CLI 실행 | 프로그램 결과 또는 프로세스 상태 | 호스팅 HTTP 콜백 API가 아님 |
| App Server 이벤트 | 연결 중의 JSON-RPC 알림 | 프로토콜에 따라 연결·초기화·메시지 처리가 필요 |
| 자체 runner 콜백 | 자신의 서비스가 보내는 HTTP 요청 | 이벤트 이름, 서명, 재시도, 저장을 직접 정의 |

App Server의 `turn/completed`는 프로토콜 알림이다. 최종 상태는 완료, 중단 또는 실패일 수 있다. 이벤트 이름만 보고 배포하지 말고 상태와 업무 결과를 확인한다. [공식 이벤트 설명](https://learn.chatgpt.com/docs/app-server)을 참고한다.

이 문서는 통일된 Codex Cloud Webhook 등록 엔드포인트, 서명 헤더 또는 `task.completed` 이벤트 계약을 검증하지 않았다. 그러므로 URL, Header, 이벤트 표를 공식 인터페이스처럼 제시하지 않는다. 특정 제품에 Webhook이 있다면 그 제품의 버전별 문서에 따라 연결한다.

## 자체 콜백이 필요한 경우

한 번의 CI 작업은 보통 종료 상태와 저장된 출력으로 다음 단계에 진행할 수 있다. “비동기”라는 이유만으로 공개 수신점을 만들 필요는 없다.

프로세스 간 작업을 예약하고 완료 후 티켓을 업데이트해야 한다면 다음 내부 흐름을 설계할 수 있다.

```text
자체 대기열 → 통제된 runner가 SDK/CLI 실행 → 결과와 상태 저장
                                      → 자체 알림 서비스 → 내부 티켓
```

이는 사이트가 제안하는 구조이지 SDK의 기본 배포 기능이 아니다. 실행 위치와 통합 범위는 [SDK 개요](/ko/guide/developer-platform/sdk-overview/)에 있다.

## 자체 프로토콜에 명시할 사항

- **신원과 무결성:** 수신자가 발신자를 검증하는 방법을 정하고 검토한 인증 방식을 사용한다. 임의의 “공식 서명 헤더”를 만들어내지 않는다.
- **안정적인 ID와 중복 제거:** 작업 ID, 이벤트 ID, 시도 횟수를 기록하고 중복 전송으로 외부 효과를 반복하지 않는다.
- **상태와 버전:** 실행 완료, 실패, 중단, 업무 결과의 검증 상태를 구분하고 payload 버전을 기록한다.
- **영속적으로 저장한 뒤 수신 확인:** 이벤트를 안정적으로 저장하거나 대기열에 넣은 뒤에만 수신 확인을 보낸다. 실패는 재시도 가능해야 하며 성공을 먼저 반환한 뒤 이벤트를 잃으면 안 된다.
- **데이터 범위:** 다음 시스템에 필요한 결과 요약과 안전한 참조만 보내고 로그에 자격 증명을 남기지 않는다.
- **중단 조건:** 재시도 상한, 사람의 인계, 후속 행동 취소 방법을 정한다.

이는 구현하고 검증해야 할 설계 요건이지 바로 실행 가능한 예제가 아니다. 이 페이지가 티켓을 자동 연결하거나 메시지를 보내거나 배포 흐름을 만들지는 않는다.

## 최소 검증 시나리오

테스트 환경에서 성공, 실행 실패, 취소, 중복 이벤트, 잘못된 신원, 수신 측 일시 장애를 확인한다. 중복 전달은 업무 효과를 한 번만 내고, 취소를 성공으로 취급하지 않으며, 검증되지 않은 생성 결과를 곧바로 게시하지 않아야 한다.

연습은 [Issue 분류 사례](/ko/cases/use-cases/team-automation/issue-triage-suggestions/)와 [예약된 링크 검사](/ko/cases/use-cases/team-automation/scheduled-link-check/)로 시작할 수 있다. 자료 상태는 각 페이지를 따른다.
