---
title: 웹사이트 만들기
description: 요구사항부터 미리보기 가능한 페이지까지의 프로토타입 구축 사례입니다.
locale: ko
source_locale: zh-CN
source_revision: b3ec6d8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 웹사이트 만들기

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 창작자 / 개발자 |
| 클라이언트 | App / IDE |
| 예상 소요 시간 | 2–4시간 |

## 1. 목표와 배경

**목표:** 간단한 요구사항을 바탕으로 로컬에서 미리볼 수 있는 정적 페이지 또는 소형 사이트를 만듭니다.

**성공 기준:** 브라우저에서 열 수 있고, 스타일이 설명과 맞으며, 관련 없는 파일 변경이 없어야 합니다.

## 2. 권장 프롬프트

```text
목표：【제품/행사】용 단일 페이지 랜딩을 만들고, 제목·세 가지 특징·CTA 버튼을 포함하세요.
기술：HTML + CSS(또는 프로젝트에 이미 있는 프레임워크), 모바일 친화적.
제약：src/ 아래 페이지 관련 파일만 수정하세요. 내가 승인하기 전에는 새 의존성을 넣지 마세요.
인수：pnpm dev 로 미리볼 수 있어야 하며, 주요 블록을 스크린샷으로 설명하세요.
먼저 와이어프레임 계획을 주고, 내가 확인한 뒤에 코드를 작성하세요.
```

## 3. 검증

- 각 중단점에서 로컬 미리보기
- 설정 또는 lock 파일을 잘못 바꿨는지 확인

## 4. 관련

- [만들기 템플릿](/ko/prompts/templates/create/)
- [산출물 우선 작업](/ko/cases/workflows/artifact-first-work/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 Codex use cases에는 여전히 “Get from idea to proof of concept”, “Build responsive front-end designs”, “Deploy an app or website” 등 프론트엔드 구축 시나리오가 포함됩니다. 이 페이지 예시는 소형 사이트 또는 랜딩 프로토타입으로 한정하며, 먼저 와이어프레임을 내고, 변경 범위를 제한하며, 브라우저 미리보기로 인수하도록 요구합니다.  
**최근 검증:** 2026-07-26
