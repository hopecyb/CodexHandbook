---
title: 팀과 엔터프라이즈
description: 도입, 표준, 관리, 보안 거버넌스로 Codex를 규모 있게 정착시키면서도 통제를 잃지 않습니다.
sidebar:
  order: 70
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**팀과 엔터프라이즈** 장은 엔지니어링 책임자, 플랫폼·보안 팀을 향합니다. Codex를 개인이 쓸 수 있는 수준에서 팀이 관리·감사·복기할 수 있는 수준으로 올리는 데 초점을 둡니다. [학습 경로 · 팀](/guide/learning-paths/team/)과 함께 읽을 때, 이 장은 거버넌스와 정착에 더 가깝습니다.

아직 개인 사용이거나 기초 사용법에 익숙해지는 단계라면, 이 장은 나중에 봐도 됩니다. 여기서는 여러 사람이 함께 쓸 때 경계, 프로세스, 책임을 어떻게 정리할지를 주로 다룹니다.

주로 이런 질문이 나옵니다.

- 누가 쓸 수 있는가
- 어디까지 할 수 있는가
- 문제가 나면 어떻게 추적하는가
- 고위험 확장은 어떻게 승인하는가

## 이 장 내용

- 소규모 팀 파일럿에서 조직 확산까지의 경로
- 보안, 컴플라이언스, 확장(Plugin/MCP)위험
- 본 핸드북 다른 장과의 교차 참조

## 읽기 맞는 사람

| 역할 | 먼저 읽을 것 |
|---|---|
| EM / 책임자 | [위협 모델](/guide/team-enterprise/security/threat-model/) · [허용 가능한 사용](/guide/team-enterprise/governance/acceptable-use/) |
| 플랫폼 엔지니어링 | [팀 규칙](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| 보안 | [Plugin과 MCP 위험](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [프롬프트 주입](/guide/team-enterprise/security/prompt-injection/) |

## 거버넌스 모델(개념)

```text
정책(조직 호스팅、AUP)
    ↓
표준(AGENTS.md、승인 확장 목록)
    ↓
실행(규칙、샌드박스、Hooks、CI)
    ↓
관측(감사、지표、복기)
```

## 이 장 내비(시작)

| 주제 | 페이지 |
|---|---|
| 보안 | [위협 모델](/guide/team-enterprise/security/threat-model/) · [Plugin/MCP 위험](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [프롬프트 주입](/guide/team-enterprise/security/prompt-injection/) |
| 거버넌스 | [허용 가능한 사용 정책](/guide/team-enterprise/governance/acceptable-use/) |

로드맵은 adoption, administration, deployment-patterns 등 세부 항목을 보완합니다. [chapter-outline](/docs/planning/chapter-outline.md)(저장소 기획 문서)를 보세요.

## 개인화 설정과의 관계

- [AGENTS.md 우선순위](/guide/customization/agents-md/scope-and-precedence/)의 조직 호스팅 계층
- [팀 규칙 정책](/guide/customization/rules/team-rules/)

## 흔한 실수

- 좌석만 사고 교육·표준은 없음
- 개인 샌드박스 완화를 조직 기본값으로 삼음
- 커뮤니티 Plugin을 목록 없이 전부 승인

## 검수 체크리스트

- [ ] 서면 AUP 또는 동등 정책이 있음
- [ ] 고위험 확장에 승인 프로세스가 있음
- [ ] 사건 연락처가 명확함(보안/플랫폼)

## 흔한 오해

### 1. 지금 혼자 쓰는데 이 장을 봐야 하나요?

지금 깊게 읽을 필요는 없을 수 있습니다.  
다만 Codex가 개인 도구에서 팀 시스템으로 바뀌면, 다룰 문제는 프롬프트 쓰는 법만이 아니라는 점은 알아 두세요.

### 2. 왜 여기선 감사, 거버넌스, 정책을 계속 말하나요?

팀 환경에서 더 큰 위험은, 많은 사람이 오래 함께 쓰면서 경계가 점점 흐려지는 것입니다.

### 3. 처음 개념만 잡으려면 무엇을 먼저 보나요?

먼저 이것부터 보세요.

- [Plugin과 MCP 위험](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [허용 가능한 사용 정책](/guide/team-enterprise/governance/acceptable-use/)

개인 입문이 주 관심이면 이 장은 나중에 두고, 팀 확산·권한 관리·위험 통제를 시작할 때 돌아오세요.

## 참고 출처

- KimYx0207 보안과 엔터프라이즈 장
- freestylefly/CodexGuide 팀 playbook
- stormzhang 보안 튜토리얼

---

**상태：** verified  
**적용 제품：** 조직판 / 팀 기능(플랜에 따라 다름)  
**검증 근거：** OpenAI의 현행 헬프 센터와 플러그인/앱 문서는 팀이 Codex/ChatGPT를 정착시킬 때 역할 접근, 플러그인 활성화, 동작 승인, 데이터 경계, 감사 책임 같은 거버넌스 층 능력이 필요하다고 계속 강조합니다. 이 페이지는 팀·엔터프라이즈 장 내비로, 거버넌스 모델과 읽기 순서에 초점을 두며 구체 관리 화면 경로에 묶지 않습니다.  
**최근 검증：** 2026-07-26
