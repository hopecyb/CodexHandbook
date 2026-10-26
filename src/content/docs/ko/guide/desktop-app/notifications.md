---
title: 알림과 활동 보기
description: 작업 완료, 권한 요청, 답변 대기 알림을 설정합니다.
locale: ko
source_locale: zh-CN
source_revision: '4a1c672'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 80
legacyVerification:
  status: verified
  products: App
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

알림은 작업을 검토하러 돌아와야 할 시점을 알려 줍니다. 결과 검토를 대신하지는 않습니다. 데스크톱 앱에서는 턴 완료 알림을 설정하고, 권한 요청과 질문 알림을 각각 제어할 수 있습니다.

## 권장 설정

**Settings → Notifications**를 엽니다.

| 이벤트 | 권장 설정 | 이유 |
|---|---|---|
| Turn completion | 백그라운드 작업 시 알림 | 긴 작업을 계속 지켜볼 필요가 없습니다. |
| Permission | 켜기 | 승인 요청을 처리하지 않으면 작업이 멈춥니다. |
| Question | 켜기 | 핵심 맥락이 부족하면 Codex에 답변해야 합니다. |

운영체제에서도 ChatGPT 데스크톱 앱의 알림을 허용해야 합니다. 앱에서 알림을 켜더라도 시스템에서 차단하면 알림을 받지 못합니다.

## Activity 보기로 여러 대화 처리하기

Activity를 사용할 수 있다면 사이드바의 종 아이콘을 선택해 읽지 않은 대화, 진행 중인 대화, 답변을 기다리는 대화를 확인합니다. 단축키는 다음과 같습니다.

- macOS: `Cmd + Option + U`
- Windows: `Ctrl + Alt + U`

필터는 현재 화면에 따라 달라지며 Work, Chat, Pinned, Scheduled 등이 표시될 수 있습니다. 권장 처리 순서는 권한 또는 입력 대기 → 실패 → 완료 후 검토 대기 → 진행 중입니다.

## 알림을 받은 뒤 할 일

- **완료:** diff와 검증 출력을 열어 확인합니다. 알림 자체를 검수 결과로 간주하지 않습니다.
- **권한 요청:** 명령, 대상 리소스, 영향 범위, 되돌릴 수 있는지 확인합니다.
- **답변 대기:** 필요한 맥락만 보충하고 작업 범위를 임의로 넓히지 않습니다.
- **실패:** 첫 번째 유효한 오류를 찾아낸 뒤 재시도할지 제약을 조정할지 결정합니다.

CLI와 IDE의 알림 방식은 다릅니다. IDE에는 별도 알림 설정이 없으며, CLI는 고급 설정을 통해 TUI 또는 외부 프로그램의 완료 알림을 제어할 수 있습니다. 데스크톱 앱 설정을 모든 환경에 적용되는 스위치로 취급하지 마세요.

## 공식 출처

- [알림](https://learn.chatgpt.com/docs/notifications)
- [데스크톱 앱 설정](https://learn.chatgpt.com/docs/app/settings)
