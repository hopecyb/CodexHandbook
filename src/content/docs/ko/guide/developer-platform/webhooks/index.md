---
title: Webhooks
description: 이벤트 트리거 통합 설명 페이지입니다. Webhook은 알림을 받으며, 워크플로 설계를 대체하지 않습니다.
locale: ko
source_locale: zh-CN
source_revision: b718fb3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`Webhook`라는 말은 조금 추상적으로 보일 수 있습니다.  
더 직접적으로 말하면, 어떤 일이 일어났을 때 시스템이 당신에게 알림을 보내는 것입니다.

Codex 통합 시나리오에서는 “외부 이벤트가 왔을 때 이후 흐름을 어떻게 트리거할까”를 해결합니다.

## 이 그룹 입구

- [Webhooks 개요](/ko/guide/developer-platform/webhooks/overview/)

## 이 그룹 내용

- 외부 시스템이 이벤트를 어떻게 밀어 주는지
- 이벤트가 온 뒤 이후 흐름을 어떻게 연결하는지
- Webhook이 트리거일 뿐, 완전한 자동화 방안이 아닌 이유

Webhook은 초인종에 가깝습니다. “일이 일어났다”고 알려 줄 뿐이고, 이후 처리는 스스로 흐름을 연결해야 합니다.

---

**상태：** verified  
**적용 제품：** API / Cloud  
**검증 근거：** 본 저장소의 현재 webhooks 하위 장 구조와 입구 링크를 교차 확인했습니다. 이 페이지는 통합에서 Webhook이 “이벤트 트리거” 역할을 한다는 점만 설명하며, 구체 이벤트 필드나 구현 세부사항을 고정 계약으로 쓰지 않습니다.  
**최근 검증：** 2026-07-26
