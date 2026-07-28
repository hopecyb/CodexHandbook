---
title: "사례: 예약 문서 링크 검사"
description: 비대화형 Codex 또는 CI로 사이트 내 죽은 링크를 스캔합니다—팀 자동화 입문 사례입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 팀 유지보수자, Technical Writer |
| 클라이언트 | CLI + GitHub Actions |
| 예상 소요 시간 | 45–90분(첫 CI 설정 포함) |
| 검증 날짜 | 2026-07-25 |

## 1. 목표와 배경

**목표:** 매주 문서 사이트 내 링크와 핵심 외부 링크를 자동 검사하고, PR 또는 issue로 죽은 링크를 보고합니다.

**성공 기준:**

- CI 또는 예약 workflow를 반복 실행할 수 있음
- 구조화된 죽은 링크 목록을 출력(파일, 행 번호, URL)
- 관련 없는 파일을 수정하지 않고 push하지 않음

**범위 밖:** 전체 사이트 크롤러, 로그인 후 페이지, 성능 테스트.

## 2. 준비

- 문서 사이트 소스가 Git 저장소에 있음(예: 이 핸드북 `src/content/docs/`)
- 이미 `npm run build` 또는 link checker 스크립트가 있음(선택)
- 읽기 전용 `GITHUB_TOKEN`과 `OPENAI_API_KEY`를 org secrets에 둠

## 3. 워크플로

### 탐색

```text
@src/content/docs/ 와 기존 package.json scripts를 읽으세요.
현재 link check가 있는지 나열하세요. 없으면 최소 방안을 제안하세요: markdown 내부 링크 + 공식 docs 외부 링크 표본.
파일을 수정하지 마세요.
```

### 계획

```text
계획을 주세요: prompt 파일 경로, CI workflow 이름, 구조화 JSON 출력 필드.
내가 확인한 뒤에 파일을 만드세요.
```

### 실행

- `prompts/ci/link-check.md` 추가
- `.github/workflows/docs-link-check.yml` 추가(예시, [스크립트와 파이프라인](/guide/developer-platform/non-interactive/scripts-and-pipelines/) 참고)
- [codex exec](/guide/developer-platform/non-interactive/codex-exec/) 또는 순수 스크립트 + Codex 2차 분류 사용

### 검증

- 로컬에서 `codex exec` 한 번
- CI에서 수동 `workflow_dispatch`
- 의도적으로 죽은 링크를 넣어 `pass: false` 확인

## 4. 실패와 복구

| 문제 | 처리 |
|---|---|
| 외부 사이트 일시 503 | 하드 죽은 링크와 소프트 실패를 구분, prompt에 정의 |
| JSON 파싱 실패 | [구조화 출력](/guide/developer-platform/non-interactive/structured-output/) 제약을 강화 |
| 할당량 소진 | 주간 예약 + 증분 검사로 변경 |

## 5. 정착

- 세 번째 통과 후 Skill로 정착: `docs-link-audit`
- 팀 [명령 규칙](/guide/customization/rules/team-rules/)에서 `npm run build`와 읽기 전용 git 허용

## 6. 관련 장

- [긴 작업 관리](/cases/workflows/long-running-task-management/)
- [Automations 예약 작업](/skills/automations/scheduled-tasks/)
- [팀 학습 경로](/guide/learning-paths/team/)

---

**상태:** verified  
**적용 제품:** CLI  
**검증 근거:** 이 핸드북에서 이미 검증된 비대화형 모드, 스크립트와 파이프라인, 구조화 출력, 팀 규칙, 자동화 장과 교차 확인했습니다. 이 페이지 내용은 “예약 링크 검사, 구조화 보고, 실패 시 중지”의 안정적인 팀 자동화 사례로 한정됩니다.  
**최근 검증:** 2026-07-26
