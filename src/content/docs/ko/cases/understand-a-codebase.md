---
title: 코드베이스 이해하기
description: 낯선 저장소를 읽기 전용으로 탐색해, 실행 가능한 인지 지도를 만듭니다.
locale: ko
source_locale: zh-CN
source_revision: cb227a1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 코드베이스 이해하기

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 개발자 |
| 클라이언트 | CLI / IDE |
| 예상 소요 시간 | 30–60분 |

## 1. 목표와 배경

**목표:** 수정하기 전에 모듈 경계, 진입점, 위험 영역을 파악합니다.

**성공 기준:** 「요청에서 응답까지」또는 「명령에서 출력까지」의 주 경로를 다른 사람에게 설명할 수 있어야 합니다.

## 2. 권장 프롬프트

```text
먼저 코드를 수정하지 마세요. @src/ 와 @README 를 읽고, 8개 이내로 설명하세요:
1. 프로젝트 용도와 기술 스택
2. 주요 디렉터리 역할
3. 시작/테스트 진입점
4. 【내 목표】와 가장 관련 있는 파일 3개
5. 내가 확인할 질문 3개
```

## 3. 검증

- 실제 `package.json` / 진입 파일을 대조해 표본 확인
- 결론을 issue 또는 `AGENTS.md` 요약에 기록

## 4. 관련

- [이해 템플릿](/ko/prompts/templates/understand/)
- [탐색—계획—실행—검증](/ko/cases/workflows/explore-plan-execute-verify/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 Codex use cases에는 여전히 “Understand large codebases”가 포함되며, 주 경로 추적, 핵심 모듈 식별, 관련 파일 빠른 위치 찾기가 강조됩니다. 이 페이지 예시는 읽기 전용 탐색 시나리오이며, 공식 현재 포지셔닝과 일치합니다.  
**최근 검증:** 2026-07-26
