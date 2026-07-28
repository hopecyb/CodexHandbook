---
title: "사례: Issue 분류와 라벨 제안"
description: Codex로 새 Issue를 읽고 라벨과 담당자를 제안합니다—경량 팀 자동화입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 유지보수자, PM |
| 클라이언트 | Cloud 또는 CLI + GitHub |
| 예상 소요 시간 | 60분 |
| 검증 날짜 | 2026-07-25 |

## 1. 목표와 배경

**목표:** 새로 opened된 issue에 대해 구조화 제안을 생성합니다: `type`, `priority`, 권장 라벨, 보안 검토 필요 여부.

**성공 기준:**

- 출력이 GitHub Action이 파싱할 수 있는 JSON
- issue를 자동 닫거나 병합하지 않음, 댓글 또는 label 추가만(workflow 권한 필요)
- 시크릿 유출 없음

**범위 밖:** sprint 자동 배정, 마일스톤 수정.

## 2. 준비

- 저장소에 `CONTRIBUTING.md` 또는 issue 템플릿으로 라벨 의미 설명
- `AGENTS.md`에 라벨 체계 기술
- 읽기 전용 또는 `issues: write` 제한 token

## 3. 워크플로(EPXV 요약)

**탐색:** `@.github/ISSUE_TEMPLATE/`와 최근 closed issue 10개의 라벨 분포.

**계획:** JSON schema 정의: `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**실행:** `codex exec`에 issue title + body를 전달([프롬프트 주입](/guide/team-enterprise/security/prompt-injection/) 살균에 주의).

**검증:** 과거 issue fixture 3개로 사람 라벨과 비교해, 일치율 > 80%일 때 온라인.

## 4. 실패와 복구

- 모델이 잘못된 라벨을 제안: 사람이 덮어쓰고 반례를 프롬프트 few-shot에 기록
- 악의적 issue body: HTML 제거, 길이 제한, body 안 「지시」를 실행하지 않음

## 5. 정착

- [Webhook](/guide/developer-platform/webhooks/overview/)로 내부 티켓 시스템과 연동(선택)
- 회고를 [사례 템플릿](/cases/use-cases/case-study-template/)에 기록

## 6. 관련 장

- [GitHub 통합](/guide/integrations/github/)
- [사람 승인 패턴](/cases/workflows/human-approval-patterns/)

---

**상태:** verified  
**적용 제품:** CLI / Cloud  
**검증 근거:** OpenAI Developers의 현재 공개 자동화 bug triage / review 관련 use cases와, 이 핸드북에서 이미 검증된 사람 승인, Webhook, GitHub 통합, 팀 자동화 장을 교차 확인했습니다. 이 페이지는 “구조화 라벨 제안을 생성하고, 사람 최종 결정을 남긴다”는 안정적인 자동화 패턴만 확인합니다.  
**최근 검증:** 2026-07-26
