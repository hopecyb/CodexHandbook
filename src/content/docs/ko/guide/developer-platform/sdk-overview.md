---
title: 'SDK 개요: 로컬 작업과 클라이언트 통합'
description: Codex SDK, 비대화형 CLI, App Server, 직접 구축하는 원격 작업 서비스를 구분한다.
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 실행 위치, 스레드 인터페이스, 통합 범위를 공식 SDK와 App Server 문서와 대조했다. 최소 예제는 구문만 검사했으며 인증된 모델 호출은 하지 않았다.
  evidence:
    - label: Codex SDK 공식 문서
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Codex App Server 공식 문서
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: ko
source_locale: zh-CN
source_revision: 'e888ae6'
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

Codex SDK를 사용하면 프로그램이 로컬 Codex Agent를 제어할 수 있다. 여기서 “로컬”은 SDK와 Agent가 실행되는 컴퓨터를 뜻하며, 개인 PC일 수도 관리하는 CI runner일 수도 있다. 이를 Cloud 작업 생성·상태 조회·산출물 다운로드를 제공하는 호스팅 HTTP 서비스로 해석하면 안 된다. [공식 SDK 문서](https://learn.chatgpt.com/docs/codex-sdk)를 참고한다.

## 통합 목표에 맞춰 진입점 선택하기

| 목표 | 출발점 | 직접 맡아야 할 일 |
|---|---|---|
| 스크립트에서 작업 한 번 실행 | [`codex exec`](/ko/guide/developer-platform/non-interactive/codex-exec/) | 작업 폴더, 입력, 종료 상태, 결과 저장 |
| 프로그램에서 작업 실행 및 계속 진행 | Codex SDK | 프로그램 수명 주기, 환경, 실패 처리, 검증 |
| 세션·승인·스트리밍 이벤트가 있는 클라이언트 제작 | App Server | 클라이언트 상호작용, 연결, 신원 처리, 배포 |
| 다중 사용자 원격 작업 플랫폼 제공 | 자체 서비스 구조 | 대기열, 테넌트 격리, 자격 증명, 저장, 취소, 콜백 |

마지막 줄은 설계 선택이지 SDK에 포함된 호스팅 플랫폼 기능이 아니다. 공식 안내는 SDK를 자동화와 CI에, App Server를 깊은 클라이언트 통합에 사용한다. App Server는 양방향 JSON-RPC로 요청과 이벤트를 주고받는다. [App Server 문서](https://learn.chatgpt.com/docs/app-server)를 참고한다.

## 최소 TypeScript SDK 호출

공식 TypeScript 패키지는 `@openai/codex-sdk`이며 Node.js 18 이상이 필요하다. 다음 예제는 JavaScript 모듈 구문으로 같은 패키지의 기본 인터페이스를 보여 준다. 완전한 운영 서비스는 아니다.

전용 연습 폴더에 의존성을 설치하고 실제로 확인된 버전과 잠금 파일을 보관한다.

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

민감 정보가 없는 `README.md`를 준비하고 아래 내용을 `example.mjs`로 저장한다.

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  '현재 폴더의 README.md만 읽고 용도를 중국어로 세 항목으로 요약해 주세요. 파일을 수정하거나 외부 작업을 실행하지 마세요.'
);
console.log(answer.finalResponse);
```

이후 `node example.mjs`를 실행한다. 실행 전 선택한 환경의 인증을 완료하고 실제 sandbox와 승인 설정을 확인해야 한다. 프롬프트의 “읽기 전용”은 작업 제약이지 실행 환경의 제한을 대체하지 않는다. 모델 호출은 계정 사용량을 소비할 수 있으며 이 문서는 설치나 호출을 대신 실행하지 않았다.

메서드 이름과 반환 필드는 [공식 예제](https://learn.chatgpt.com/docs/codex-sdk)와 대조했다. 이 사이트는 JavaScript 구문만 검사했으며 특정 SDK 배포판을 고정해 실제 테스트하지 않았고 가짜 성공 출력도 제시하지 않는다. 재현할 때 패키지 버전, CLI/runtime, 운영체제, 자격 증명을 제외한 인증 방법과 결과를 기록한다.

## 작업 계속하기와 복구하기

같은 thread 객체에 `run()`을 다시 호출할 수 있다. 기존 thread ID는 `resumeThread()`에 전달해 재개한다. 재개 가능한 thread는 상태 저장 환경에 달려 있으므로 ID를 아무 컴퓨터에서나 조회할 수 있는 Cloud URL로 간주하지 않는다. 공식 Python 인터페이스도 있다. 두 언어의 코드와 의존성을 섞지 말고 각 장에서 이름과 요구사항을 확인한다. [thread 호출과 언어별 인터페이스](https://learn.chatgpt.com/docs/codex-sdk)를 참고한다.

재개 후에는 현재 파일이 과거 설명과 일치하는지 먼저 확인한다. [인계와 재개](/ko/guide/agent-work/handoff-and-resume/)를 참고한다.

## 호출이 성공한 뒤 확인할 사항

1. **실행 위치:** 프롬프트만 남기지 말고 작업 폴더와 실제로 읽거나 바꾼 파일을 기록한다.
2. **작업 결과:** 답변, 파일 차이, 테스트를 확인한다. `finalResponse`가 있다고 업무 결과의 검증이 끝난 것은 아니다.
3. **실패 유형:** 로컬 의존성·프로세스, 인증, 모델 서비스, 작업 검증 실패를 구분한다. 모든 예외를 400/429로 단순화하지 않는다.
4. **재시도 영향:** 이미 파일이나 외부 효과가 생겼는지 확인한 후 재시도를 결정한다. 같은 요청을 무작정 반복하지 않는다.
5. **권한:** 실행 환경과 사용 가능한 도구는 직접 책임진다. SDK라는 이름만으로 Cloud, 조직 관리, 다중 테넌트 격리가 생긴다고 추정하지 않는다.

이는 사이트가 제안하는 통합 확인 항목이지 SDK 반환 필드 목록이 아니다. 실제 필드는 설치한 버전의 타입과 공식 문서를 따른다.

## 콜백, 대기열, 원격 실행과의 관계

자신의 runner에서 SDK를 실행한 뒤 자체 서비스로 완료 알림을 보낼 수 있다. 이 경우 대기열 상태, HTTP 콜백, 서명 형식, 재시도 정책은 자신의 시스템 프로토콜에 속한다. App Server의 스트리밍 이벤트도 Webhook 주소로 곧바로 사용할 수 없다.

[Webhook과 작업 이벤트의 경계](/ko/guide/developer-platform/webhooks/overview/) 및 [스크립트와 파이프라인](/ko/guide/developer-platform/non-interactive/scripts-and-pipelines/)을 이어 읽는다. 이 페이지는 SDK 호출만으로 Codex Cloud 작업, artifact URL 또는 OAuth 위임이 자동 생성된다고 약속하지 않는다.
