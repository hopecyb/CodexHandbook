---
title: 개발자 플랫폼
description: SDK, 비대화형 CLI, CI/CD로 Codex를 엔지니어링 체계에 임베드합니다——통합 개발자를 위한 안내입니다.
sidebar:
  order: 50
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**개발자 플랫폼**은 Codex를 파이프라인에 **제품화**하려는 사람을 위한 장입니다. 커스텀 앱, 일괄 리뷰, 릴리스 게이트, 내부 개발자 포털이 여기에 해당합니다. 일상적으로 “프롬프트를 써서 버그를 고친다”는 흐름은 여전히 [시작하기](/guide/getting-started/)부터 보시면 됩니다.

이 장은 Codex를 일상적으로 쓰는 법이 아니라, Codex를 자신의 시스템에 연결하는 법을 다룹니다.

다음 같은 시나리오에 가깝습니다.

- CI에서 작업을 자동으로 돌리고 싶다
- 사내 백엔드나 도구에 Codex를 붙이고 싶다
- Codex를 팀 워크플로의 일부로 만들고 싶다

## 이 페이지에서 다루는 내용

- 개발자 플랫폼과 최종 사용자 매뉴얼의 경계
- 전형적인 통합 아키텍처
- 이 장의 내비와 로드맵

## 제품 매뉴얼과의 역할 분담

| 독자의 질문 | 어디로 |
|---|---|
| 터미널에서 `codex`를 어떻게 돌리나 | [CLI 제품 매뉴얼](/guide/cli/) |
| CI에서 exec로 리뷰하려면 | [비대화형 모드](/guide/cli/non-interactive-mode/) + 이 장의 CI |
| 자사 App에 Agent를 넣으려면 | [SDK 개요](/guide/developer-platform/sdk-overview/) |
| 권한과 보안 모델 | [사람 승인 패턴](/cases/workflows/human-approval-patterns/) |

## 전형적인 아키텍처(개념)

```text
개발자 시스템(CI / 내부 플랫폼 / SaaS)
        ↓ API 또는 CLI
Codex(모델 + 도구 + 정책)
        ↓
Git 제공자 / 이슈 / 아티팩트 저장소
```

## 설계 원칙

1. **멱등과 재시도 가능**：같은 PR을 여러 번 리뷰해도 결과를 비교할 수 있어야 합니다
2. **최소 권한**：CI token은 읽기 전용이거나 저장소를 한정합니다
3. **관측 가능**：프롬프트 버전, 모델, diff artifact를 남깁니다
4. **사람과 기계의 역할**：자동 댓글 ≠ 자동 머지

## 이 장 내비

| 주제 | 페이지 |
|---|---|
| SDK | [SDK 개요](/guide/developer-platform/sdk-overview/) |
| 비대화형 | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) · [스크립트와 파이프라인](/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [구조화 출력](/guide/developer-platform/non-interactive/structured-output/) · [종료 코드와 재시도](/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [개요](/guide/developer-platform/webhooks/overview/) |
| CI/CD | [코드 리뷰 자동화](/guide/developer-platform/ci-cd/code-review-automation/) |

`codex-sdk/`, `app-server/`, `architecture-patterns/` 등은 [장 개요](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md)를 참고하세요.

## 흔한 오해

### 1. 이 장을 배워야만 Codex를 제대로 쓰는 건가요?

지금 Codex를 먼저 써 보고 싶다면, 이 장은 나중에 봐도 됩니다.

### 2. CLI / App / IDE와 어떤 관계인가요?

이렇게 이해하면 됩니다.

- **App / CLI / IDE**：개인이나 팀이 Codex를 직접 쓰는 입구
- **개발자 플랫폼**：Codex를 다른 시스템과 프로세스에 다시 임베드하는 층

### 3. 이 장을 처음 읽을 때 어느 페이지가 가장 유용한가요?

개념만 잡으려면 [SDK 개요](/guide/developer-platform/sdk-overview/)와 [비대화형 모드](/guide/cli/non-interactive-mode/)의 관계를 먼저 보시면 됩니다.

개발자 플랫폼 장은 “Codex를 시스템에 어떻게 연결할까”를 다룹니다. Codex를 처음 쓸 때는 앞쪽 입문 내용을 먼저 보세요.

## 참고 출처

- OpenAI Codex API / SDK 공식 문서
- KimYx0207 개발자 장
- stormzhang CI와 자동화 튜토리얼
- codex.bozhouai.com 엔지니어링 사례

---

**상태：** verified  
**적용 제품：** API / CLI / Cloud  
**검증 근거：** 본 저장소의 현재 developer-platform 장 구조, 내비 입구, 관련 CLI/CI/SDK 설명 페이지를 교차 확인했습니다. 이 페이지는 “개발자 플랫폼이 엔지니어링 통합을 담당한다”는 안정된 역할 분담만 설명하며, 구체 파라미터나 런타임 동작을 단정하지 않습니다.  
**최근 검증：** 2026-07-26
