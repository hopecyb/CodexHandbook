---
title: 보안
description: 팀 수준 위험, 공격면, 방어 관점 설명 페이지입니다. 위험이 어디에 있는지 먼저 이해한 뒤 통제 수단을 이야기하세요.
locale: ko
source_locale: zh-CN
source_revision: b0896a2
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

보안 그룹을 세부 페이지부터 들어가면, 흩어진 용어만 기억하고 무엇을 막는 것인지 놓치기 쉽습니다.

이 그룹은 “위험이 어디서 오는지 본 뒤, 어느 층을 막고 어느 층을 검토할지” 순서로 보면 더 분명합니다.

## 권장 순서

1. [위협 모델](/ko/guide/team-enterprise/security/threat-model/)
2. [Plugin과 MCP 위험](/ko/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [프롬프트 주입](/ko/guide/team-enterprise/security/prompt-injection/)

## 먼저 보면 좋은 사람

- 팀이 사용 범위를 넓히려 함
- 서드파티 확장, 외부 도구, 공유 규칙을 붙이기 시작함
- “다들 조심하라”는 말로만 해결할 수 없는 위험이 무엇인지 알고 싶음

보안 페이지의 초점은, 시스템 경계로 반드시 통제해야 하는 위험을 찾는 데 있습니다.

---

**상태：** verified  
**적용 제품：** 팀 / 엔터프라이즈 시나리오  
**검증 근거：** OpenAI의 현행 플러그인·앱·통합 문서는 외부 연결, 동작 권한, 원천 시스템 접근, 승인 경계가 가져오는 보안 위험을 계속 강조합니다. 이 페이지는 보안 소절 내비로, 위협 모델 → Plugin/MCP 위험 → 프롬프트 주입 순서로 읽기를 조직합니다.  
**최근 검증：** 2026-07-26
