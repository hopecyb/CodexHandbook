---
title: GitHub 통합
description: "저장소 연결, PR, Review, CI — Codex가 GitHub 워크플로에서 차지하는 위치."
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

GitHub는 Codex가 가장 흔히 쓰는 코드 협업 면입니다. Cloud 작업, PR 심사, Actions, 로컬 push가 같은 브랜치·권한 세트를 중심으로 돕니다.

여기서 주로 말하는 것은, Codex가 “코드 저장소, 브랜치, PR, Review” 협업 흐름에 어떻게 붙는지입니다.

시니어 개발자가 아니어도, 먼저 어떤 종류의 일을 처리하는지 보면 됩니다.

- 코드가 어디에 있는지
- 변경을 어떻게 남에게 보이게 내는지
- 심사와 머지가 어떻게 일어나는지

## 능력 지도

| 능력 | 전형 진입점 | 핸드북 위치 |
|---|---|---|
| 원격 저장소 연결 | Cloud 설정 | [GitHub 연결](/guide/web-and-cloud/connect-github/) |
| 클라우드에서 코드 수정·PR | Cloud 작업 | [Pull Request 만들기](/guide/web-and-cloud/create-pull-requests/) |
| 로컬에서 diff 심사 | 데스크톱 App / IDE | [diff와 코멘트](/guide/desktop-app/diffs-comments-and-review/) |
| CI에서 Codex 실행 | GitHub Actions | 로드맵 `08-developer-platform/ci-cd/` |
| PR 자동 코멘트 심사 | Actions + exec | [비대화형 모드](/guide/cli/non-interactive-mode/) |

## 권장 팀 규범

```md
## GitHub × Codex(AGENTS.md에 넣을 수 있음)

- 기본 브랜치 보호는 main; Codex는 feature 브랜치만 push
- PR은 issue를 반드시 링크; 설명에 테스트 안내 포함
- Codex가 PR을 머지하지 않음 — release bot이 명시 승인한 경우 제외
- 키는 GitHub Secrets / 환경 secrets를 쓰고 prompt에 넣지 않음
```

## Cloud vs 로컬 Git

| | 로컬 clone | Cloud |
|---|---|---|
| 코드 출처 | 당신 기기의 워크스페이스 | 원격 clone |
| 미푸시 commit | 보임 | 보이지 않음 — 먼저 push 필요 |
| 환경 | 당신 Node/시스템 버전 | 구성된 환경 이미지 |
| 적합 | 일상 개발 | 비동기 긴 작업, 표준화 빌드 |

## Review 워크플로

1. Codex 또는 사람이 PR을 염
2. 사람이 diff를 읽음(또는 `$pr-review` Skill)
3. CI가 테스트를 돌림
4. 코멘트로 개정을 유도 — 새 Codex 작업 「review 코멘트만 처리」 가능
5. 사람이 머지

## 흔한 오해

### 1. GitHub 통합 = “Codex가 자동으로 대신 개발”?

더 흔한 용도:

- 저장소 컨텍스트 읽기
- diff나 review 정리 지원
- PR 열기·코멘트 수정 보조

### 2. PR, Review 용어를 아직 잘 모르면?

대략:

- **PR**: 변경을 공식적으로 내어 남이 보게 함
- **Review**: 남이 그 변경을 점검

이 층만 알아도 이 페이지의 대부분을 읽을 수 있습니다.

### 3. GitHub 통합을 처음 접할 때 가장 먼저 나눌 것

먼저 나눌 것은 token도, Actions도 아닙니다.

> **로컬 변경, 클라우드 저장소, PR 심사는 서로 다른 일입니다.**

GitHub 통합의 핵심은 Codex를 기존 코드 협업 흐름에 붙이는 것입니다.

## 보안

- GitHub Token scope를 최소화
- `pull_request_target` 등 민감 Actions 패턴에 경계(주입 면)
- Fork PR에서 자동화를 돌릴 때는 추가 격리 정책 필요

## 흔한 실수

- Cloud 작업이 로컬 미커밋 변경이 있다고 가정
- Codex가 PR 설명에서 소독되지 않은 지시를 실행(프롬프트 주입)
- 같은 PR에 포맷과 기능 변경을 섞음

## 참고 출처
- OpenAI Codex GitHub 통합 문서
---

**상태:** verified  
**적용 제품:** Cloud / App / CLI  
**검증 근거:** OpenAI Developers의 현재 Codex use cases에는 “Review GitHub pull requests”가 포함됩니다. OpenAI Help Center의 플러그인·통합 설명도 외부 저장소 접근이 하위 앱 권한·역할 접근·동작 경계에 따른다고 계속 강조합니다. 이 페이지는 GitHub 저장소·브랜치·PR·Review·CI의 협업 위치와, 로컬·Cloud의 코드 가시성 차이만 요약합니다.  
**최근 검증:** 2026-07-26
