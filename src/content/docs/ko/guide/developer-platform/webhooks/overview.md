---
title: Webhook 개요
description: HTTP 콜백으로 Codex 작업 상태를 내부 시스템에 연결합니다——이벤트, 서명, 멱등입니다.
locale: ko
source_locale: zh-CN
source_revision: 78f037e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

**Webhook**은 Codex 또는 Cloud 작업 상태가 바뀔 때 자체 서비스로 HTTP 콜백을 보내, 이슈 갱신, Slack 알림, 내부 승인대 등을 구동하게 합니다. 이 장은 [개발자 플랫폼](/ko/guide/developer-platform/)의 이벤트 통합 입구입니다.

## 이 페이지에서 다루는 내용

- Webhook과 SDK 폴링의 선택
- 흔한 이벤트와 페이로드 필드(개념)
- 서명 검증, 재전송, 멱등

## 먼저 무엇을 하는지 이해하세요

Webhook을 처음 본다면, 작업 상태가 바뀔 때 Codex가 당신의 시스템에 먼저 알리고, 당신이 “끝났나”를 반복 조회하지 않아도 되는 구조로 이해하면 됩니다.

“작업이 끝나면 다른 시스템 동작이 이어져야 하는” 시나리오에 잘 맞습니다.

:::note
Webhook 경로, 이벤트 이름, 서명 알고리즘은 [공식 API 문서](https://developers.openai.com/codex)를 기준으로 합니다.
:::

## 흔한 오해

### Webhook이 모든 자동화의 기본 답은 아닙니다

한 번 `codex exec`를 돌리고 종료 코드만 보면 되는 경우, 보통 Webhook은 필요 없습니다.

Webhook이 더 맞는 경우는 다음과 같습니다.

- 긴 작업
- 다단계 오케스트레이션
- 작업 종료 후 다른 시스템을 알리거나 구동해야 할 때

### 콜백을 받았다고 바로 믿으면 안 됩니다

많은 초보자가 Webhook을 “공식에서 온 메시지이니 바로 써도 된다”고 생각합니다.

서명 검증, 멱등, 타임아웃 처리를 하지 않으면, 위조 요청, 중복 전달, 시스템 흔들림에 문제가 생길 수 있습니다.

## 언제 Webhook을 쓰나요

| 적합 | 부적합 |
|---|---|
| 작업 완료를 내부 시스템에 알림 | 강한 실시간 토큰 단위 스트리밍이 필요할 때 |
| 기존 이벤트 버스와 통합 | 단순 cron으로 `exec` 종료 코드만 필요할 때 |
| 다단계 오케스트레이션(완료 → 배포 트리거) | 공개 endpoint가 없고 큐도 쓰기 싫을 때 |

단순 파이프라인은 [스크립트와 파이프라인](/ko/guide/developer-platform/non-interactive/scripts-and-pipelines/)만으로도 됩니다. 제품화된 멀티테넌트 서비스는 종종 **SDK + Webhook**을 함께 씁니다.

## 전형적인 이벤트(개념)

| 이벤트 | 용도 |
|---|---|
| `task.completed` | 결과 가져오기, PR 상태 갱신 |
| `task.failed` | 알림, 재시도 큐 |
| `task.needs_approval` | 사람 승인 UI로 전달 |
| `review.posted` | 코드 리뷰 결론 동기화 |

페이로드에는 `task_id`, 상태, 타임스탬프, 저장소/프로젝트 식별자가 포함되어야 합니다. PII가 있으면 webhook body에 전체 프롬프트를 넣지 **마세요**.

## 수신단 최소 요구

1. **HTTPS** 엔드포인트, 공식 서명 헤더 검증(예: `X-Signature` + HMAC)
2. **멱등**：같은 `event_id`는 한 번만 처리
3. **빠른 2xx**：무거운 로직은 큐에 넣어 비동기 처리
4. **로그 마스킹**：키와 전체 사용자 입력을 기록하지 않음

예시(의사코드):

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## CI와의 관계

- CI 안의 `codex exec`는 보통 webhook이 **필요 없고**, 종료 코드면 충분합니다
- Cloud 장시간 작업, 모바일 승인 시나리오는 webhook으로 내부 시스템에 푸시하는 편이 맞습니다

## 흔한 실수

- 서명 검증 없이 위조 콜백을 받는 것
- 플랫폼 타임아웃보다 오래 처리해 재전달이 나는 것
- webhook handler 안에서 동기적으로 Codex를 한 번 더 돌리는 것
- webhook URL을 클라이언트 프론트에 노출하는 것

## 쓸지 말지 판단하는 법

지금 시나리오에 Webhook이 필요한지 모르겠다면, 먼저 물어보세요.

1. 작업 상태가 바뀔 때 능동적으로 알림을 받아야 하는가
2. 작업 종료 후 시스템 수준의 다음 단계가 자동으로 이어져야 하는가
3. HTTP 콜백을 안전하게 받을 백엔드가 이미 있는가

“예”가 많을수록 Webhook의 의미가 커집니다.

## 보안 경계

- [위협 모델](/ko/guide/team-enterprise/security/threat-model/)과 [허용 가능한 사용](/ko/guide/team-enterprise/governance/acceptable-use/)을 보세요
- webhook secret 로테이션을 운영 캘린더에 넣으세요

## 검수 체크리스트

- [ ] 서명 검증 실패 시 4xx 반환
- [ ] 멱등 테이블 또는 dedupe key 구현
- [ ] 비동기 worker와 DLQ(dead letter)구성
- [ ] [구조화 출력](/ko/guide/developer-platform/non-interactive/structured-output/) 필드 약속과 일치

Webhook은 작업 상태 변화를 다른 시스템에 연결하는 데 맞습니다. 다만 서명 검증, 멱등, 비동기 처리 같은 기초를 먼저 갖추세요.

## 참고 출처
- OpenAI Codex / Cloud API 이벤트 문서
---

**상태：** verified  
**적용 제품：** API / Cloud  
**검증 근거：** OpenAI Developers의 개발자 플랫폼·이벤트 드리븐 통합 공개 설명과, 본 핸드북에서 검증된 Webhooks 그룹 페이지, CI/CD, 구조화 출력, 팀 보안 경계 장을 교차 확인했습니다. 이 페이지는 “Webhook은 상태 알림에 적합하며, 수신단은 서명 검증·멱등·비동기 처리를 해야 한다”는 안정된 통합 원칙만 확인합니다.  
**최근 검증：** 2026-07-26
