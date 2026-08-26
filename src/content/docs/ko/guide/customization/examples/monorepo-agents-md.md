---
title: Monorepo의 AGENTS.md
description: 단일 저장소 다중 패키지에서 프로젝트 지침·범위·테스트 명령을 두는 예시 패턴.
locale: ko
source_locale: zh-CN
source_revision: b6c73e9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Monorepo에는 여러 app, 공유 패키지, 서로 다른 기술 스택이 공존합니다. 거대한 `AGENTS.md` 하나로는 Agent가 **잘못된 패키지를 고치거나** 잘못된 테스트를 돌리기 쉽습니다. 이 페이지는 재사용 가능한 **계층 설명** 패턴(예시이며 저장소에 맞게 잘라 쓰세요)을 줍니다.

## 이 글에서 다루는 것

- 루트와 서브패키지가 지침을 어떻게 나눠 쓰는지
- @ 파일과 경로 제약을 패키지 경계에 맞추는 법
- CI / Cloud 환경 명령과 일치시키기

## 이런 저장소가 계층 설명을 더 필요로 하는 이유

일반 저장소가 집 한 채라면, monorepo는 건물 한 동에 가깝습니다.

방마다 거주자와 규칙이 다릅니다.  
대문에 초장 총설명만 붙이면 Codex에게 두 문제가 쉽게 납니다.

- 전부 보이지만 지금 어느 층을 지켜야 할지 모름
- 한 패키지만 고치려다 다른 곳을 함께 건드림

규칙은 디렉터리 경계와 함께 분명해져야 하며, `AGENTS.md`를 기계적으로 여러 장 더 쓰는 것만으로는 부족합니다.

## 권장 구조(예시)

```text
repo-root/
  AGENTS.md              # 전역: 브랜치 전략, commit 규범, 금지 사항
  apps/web/AGENTS.md     # 프론트: 프레임워크, 테스트 명령, 라우팅 규약
  apps/api/AGENTS.md     # 백엔드: API 스타일, 마이그레이션 규율
  packages/shared/       # 루트 문서 링크만, 또는 짧은 하위 설명
```

루트 `AGENTS.md`에 넣을 것:

- Agent가 **수정하면 안 되는** 디렉터리(예: `infra/prod/`)
- 각 서브패키지 **담당자 또는 문서 링크**
- 전역 설치 명령: `pnpm install`은 루트에서

## 흔한 오해

### 1. 디렉터리가 늘면 설명을 전부 루트에 쌓지 마세요

monorepo 지침을 처음 쓸 때 모든 제약을 루트 `AGENTS.md`에 쑤셔 넣기 쉽습니다.

결과는 다음과 같습니다.

- 파일이 매우 김
- 현재 작업과 진짜 관련 있는 규칙이 눈에 안 띔
- 서브패키지 고유 규약이 묻힘

더 안정적인 방식은 보통: 루트에 전역 합의, 서브패키지에 로컬 특수 규칙.

### 서브패키지 설명은 오수정 범위를 줄이는 것이지, 루트 규칙을 반복하는 것이 아님

`apps/web`과 `apps/api`의 개발·테스트·제약 방식이 다르면, 그 차이를 각 디렉터리에 쓰는 편이 Codex의 우회를 줄입니다.

## 서브패키지 AGENTS.md 템플릿 조각

```markdown
## 범위
명시적 크로스 패키지 요구가 없으면 `apps/web/**`만 수정합니다.

## 개발
- 설치: 저장소 루트에서 `pnpm install`
- 개발: `pnpm --filter web dev`
- 테스트: `pnpm --filter web test`
- 타입 검사: `pnpm --filter web typecheck`

## 의존성
공유 타입은 `@acme/shared`에서 import하고, 복사·붙여넣지 않습니다.
```

## 작업 prompt 협력

크로스 패키지 리팩터에서는 **경로를 명시**하세요.

```text
목표: apps/web에서 새 API 클라이언트 사용
허용 수정: apps/web/**, packages/api-client/**
금지: apps/api 서버를 직접 수정
검증: pnpm --filter web test && pnpm --filter api-client test
```

[파일과 폴더 컨텍스트](/ko/guide/context/file-and-folder-context/)를 참고하세요.

## Cloud와 CI

Monorepo는 Cloud에서 **루트 설치를 빼먹거나** filter 오류로 자주 실패합니다. 루트 `AGENTS.md`에 명시하세요.

- 기본 작업 디렉터리는 저장소 루트
- 단일 패키지 작업의 filter 명령
- 캐시 전략(turborepo/nx를 쓰면 작업 그래프 명시)

[Cloud 환경](/ko/guide/web-and-cloud/cloud-environments/)

## 흔한 실수

- `apps/web`에만 설명을 두고 Agent가 루트에서 lockfile을 마음대로 고침
- 서브패키지 테스트 명령이 제각각이고 문서화되지 않음
- 서브패키지 AGENTS.md와 루트 문서가 충돌

## 루트에 둘지 서브패키지에 둘지

어디에 둘지 모르겠으면 먼저 물어보세요.

1. 모든 패키지가 지켜야 하는 합의인가
2. 특정 디렉터리에만 성립하는가
3. 잘못된 위치에 두면 Agent가 범위를 잘못 고칠 수 있는가

1번에 가깝면 루트, 2·3번에 가깝면 서브패키지 쪽이 맞습니다.

## 검증 체크리스트

- [ ] 루트와 서브패키지에 각각 읽을 수 있는 scope 설명이 최소 하나씩
- [ ] 임의 패키지를 단독으로 테스트 명령 통과 가능
- [ ] 크로스 패키지 작업은 prompt에 허용 경로를 명시

Monorepo의 AGENTS.md는 무조건 한곳에 모을 필요가 없습니다. “전역 합의”와 “디렉터리 국소 규칙”을 각각 맞는 위치에 두는 편이 낫습니다.

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 본 핸드북의 현재 `AGENTS.md`·파일 디렉터리 컨텍스트·Cloud 환경 장과 교차 확인했습니다. 내용은 monorepo 계층 설명의 예시 패턴과 명령 조직 방법으로 한정하며, 구체 제품 진입점이나 호스팅 구현을 고정 계약처럼 두지 않습니다.  
**최근 검증:** 2026-07-26
