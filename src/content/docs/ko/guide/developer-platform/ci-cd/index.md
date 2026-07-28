---
title: CI/CD
description: 지속적 통합과 릴리스 흐름에 Codex를 연결합니다. 먼저 저위험 자동화부터 하세요.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

CI/CD에 Codex를 붙일 때 가장 흔한 문제는 보통 여기입니다.

처음부터 자동 수정, 자동 푸시, 자동 머지까지 하려 하는 것.

더 흔한 방법은, 먼저 읽기 전용으로만 두고, 제안만 하고, 보고서만 내게 하는 것입니다.

## 이 그룹 입구

- [코드 리뷰 자동화](/guide/developer-platform/ci-cd/code-review-automation/)

## 이 그룹 내용

- PR 단계에서 구조화 리뷰하기
- 자동화가 먼저 “문제 발견”과 “제안”을 하게 하기
- 고위험 동작은 계속 사람 승인에 맡기기

CI/CD에 Codex를 붙일 때는 보통 저위험 보조부터 하고, 어떤 동작에 권한을 줄지 나중에 정합니다.

---

**상태：** verified  
**적용 제품：** CLI / API / Cloud  
**검증 근거：** 본 저장소의 현재 CI/CD 하위 장 구조와 코드 리뷰 자동화 입구를 교차 확인했습니다. 페이지 내용은 “CI/CD에서 먼저 저위험 보조를 하고, 권한 확대를 나중에 결정한다”는 안정된 연결 원칙으로 한정합니다.  
**최근 검증：** 2026-07-26
