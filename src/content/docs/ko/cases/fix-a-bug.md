---
title: Bug 수정하기
description: 실패한 테스트부터 최소 수정과 회귀까지—개발자가 가장 자주 쓰는 폐쇄 루프 예시입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 개발자 |
| 클라이언트 | CLI 또는 IDE(로컬 저장소) |
| 예상 소요 시간 | 30–60분 |
| 검증 날짜 | 2026-07-25 |

## 1. 목표와 배경

**목표:** 단위 테스트로 이미 잡힌 회귀 bug를 수정하고, 재발을 막는 테스트를 보완합니다.

**성공 기준:**

- 원래 실패하던 테스트가 통과
- 전체 테스트가 여전히 녹색
- diff가 필요한 파일만 포함

**범위 밖:** 대규모 리팩터, 의존성 major 버전 업그레이드.

## 2. 준비

- 저장소를 클론하고 `pnpm install`(또는 `AGENTS.md`에 따름)
- 로컬에서 실패를 재현할 수 있는지 확인: `pnpm test -- path/to/failing.test.ts`
- 브랜치: `fix/issue-123-short-desc`

## 3. 워크플로

### 탐색

```text
먼저 코드를 수정하지 마세요. 실패한 테스트 @tests/auth/login.test.ts 와 구현 @src/auth/login.ts 를 읽고,
실패 원인을 5개 이내로 설명하세요. assertion과 스택 행 번호를 인용하세요.
```

### 계획

```text
수정 계획을 주세요: 어떤 파일을 고칠지, 새 테스트가 필요한지, 어떻게 검증할지.
내가 「실행」이라고 답한 뒤에만 코드를 수정하세요.
```

### 실행

```text
계획 1–2단계를 실행하세요. 각 단계 뒤에는 관련 테스트만 실행하세요.
```

### 검증

```text
전체 테스트 스위트를 실행하세요. 내가 review할 수 있도록 diff를 요약하세요. git push는 하지 마세요.
```

사람: diff를 읽고 관련 없는 변경이 없는지 확인한 뒤, [diff 검토하기](/guide/quality/review-diffs/)에 따라 검사합니다.

## 4. 실패와 복구

| 문제 | 처리 |
|---|---|
| 수정 후 새 실패 발생 | `git stash` 또는 commit 되돌리기, 변경을 축소 |
| 근본 원인 판단이 틀림 | 탐색으로 돌아가 새 가설을 요청 |
| 테스트가 flaky | 먼저 테스트를 안정화한 뒤 비즈니스 로직을 수정 |

## 5. 정착

- 이런 bug가 반복되면 `AGENTS.md`에 규칙을 한 줄 추가
- `$regression-guard` Skill을 추출해, 병합 전에 핵심 테스트 목록을 실행

## 6. 관련 장

- [코드베이스 이해하기](/cases/understand-a-codebase/)
- [diff 검토하기](/guide/quality/review-diffs/)
- [테스트 실행하기](/guide/quality/run-tests/)

---

**상태:** verified  
**적용 제품:** CLI / IDE  
**검증 근거:** OpenAI Developers 홈페이지는 현재도 Codex를 결함 수정, 테스트 실행, 변경 검토에 쓸 수 있다고 설명합니다. 이 페이지 예시는 “먼저 실패를 재현하고, 최소 수정을 하며, 테스트를 보완하고 회귀 검증한다”는 안정적인 엔지니어링 폐쇄 루프에 초점을 맞추며, 특정 프레임워크나 제품 UI에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
