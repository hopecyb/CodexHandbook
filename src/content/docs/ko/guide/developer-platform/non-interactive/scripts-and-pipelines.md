---
title: 스크립트와 파이프라인
description: shell, Makefile, GitHub Actions에서 codex exec를 오케스트레이션합니다——반복 가능하고 감사 가능합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

여기서는 Codex를 일회성 임시 조작에서, **팀이 반복 실행하고, 문제 나면 추적하고, 다른 사람도 인수할 수 있는** 자동화 단계로 바꾸는 법을 다룹니다.

간단히 말해, 스크립트는 흐름을 고정하고, 파이프라인은 규칙에 따라 반복 실행합니다.

이 장은 [codex exec](/guide/developer-platform/non-interactive/codex-exec/)를 shell, Makefile, CI 파이프라인에 넣는 방법을 설명합니다.

## 이 페이지 내용

- 로컬 스크립트 vs CI job의 역할 분담
- 프롬프트와 키 관리 방식
- [코드 리뷰 자동화](/guide/developer-platform/ci-cd/code-review-automation/)와의 조합

## 여기서 풀 문제

“스크립트와 파이프라인”이 다루는 핵심은, “오늘 내가 손으로 한 번 한 일”을 “팀이 이후에도 같은 방식으로 안정적으로 다시 할 수 있는 일”로 바꾸는 것입니다.

그래서 다음 세 가지를 더 중시합니다.

- 반복 가능
- 감사 가능
- 인수인계 가능

## 많은 팀이 CI 페이지에 프롬프트를 바로 붙이지 않는 이유

그렇게 하면 유지보수가 어렵습니다.

- 사람이 바뀌면 처음 설계를 모름
- 로직 한 곳을 바꿔도 정상적인 code review를 타기 어려움
- 작업이 실패했을 때 프롬프트·환경·스크립트 중 무엇이 바뀌었는지 알기 어려움

프롬프트, 스크립트, 규칙을 Git에 넣는 것은 자동화 흐름에 “버전 관리”를 주는 일입니다.

## 흔한 오해

### 자동화는 빠를수록 좋은 게 아니라, 안정이 먼저입니다

처음 자동화를 만들 때 전체 흐름을 한꺼번에 연결하고 싶어지기 쉽습니다.

하지만 프롬프트가 자주 바뀌고, 성공 기준이 아직 없고, 권한 경계가 느슨하면, 일찍 자동화할수록 나중에 더 찾기 어려워집니다.

### 스크립트는 방법을 고정하는 데 맞습니다

좋은 스크립트는 사람 기억에 의존하던 단계를, 누구나 읽고 review할 수 있는 파일로 바꿉니다.

## 최소 Shell 조각

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

`prompts/ci/security-review.md`를 Git에 넣고, 변경은 review를 탑니다.

## 먼저 들이면 좋은 습관

처음 자동화할 때는 “크고 완전한” 것을 쫓하지 말고, 다음 세 가지를 먼저 고정하세요.

1. 프롬프트 파일을 어디에 둘지
2. 입구 스크립트 이름
3. 성공과 실패를 어떻게 판정할지

이후 로그, schema, 알림을 추가하기가 훨씬 수월합니다.

## GitHub Actions 예시

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # 버전을 고정하세요. 공식 설치 문서 기준
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
예시의 설치 방식과 권한 scope는 조직 보안 요구에 맞게 조정하세요. workflow에서 키를 echo하지 **마세요**.
:::

## 권장 워크플로

| 계층 | 내용 |
|---|---|
| 저장소 | `prompts/`, `tools/run-codex.sh` |
| CI | 읽기 전용 checkout, CLI 고정, log artifact 업로드 |
| 콜백 | 선택적으로 [Webhook](/guide/developer-platform/webhooks/overview/)으로 내부 시스템 갱신 |

## 어떻게 판단할까

다음 두 조건을 만족하면 스크립트나 파이프라인에 넣기 좋습니다.

- 반복해서 한다
- 매번 방법이 되도록 같았으면 한다

예: PR 리뷰, 변경 요약, 보안 스캔, 문서 검사.

흐름이 안정되기 전에 “완전 자동”을 서두르지 마세요. 먼저 방법을 스크립트로 고정한 뒤, 그 스크립트를 파이프라인에 붙이는 편이 보통 더 안전합니다.

## 흔한 실수

- 프롬프트에 `${{ github.event.pull_request.body }}`를 동적 접합하고 이스케이프하지 않음(주입)
- 같은 PR에 동시성 제어 없이 중복 실행해 쿼터를 낭비
- 로컬은 통과하는데 CI에 의존성이 없음(`npm ci` 미실행)
- 성공 기준이 「실행 완료」뿐이고 구조화 결론 파싱이 없음
- 자동화 초기에 쓰기 권한을 과도하게 줌

## 보안 경계

- CI token은 최소 권한；독립 승인 job이 아니면 `git push` 금지
- Fork PR workflow에서 키 사용은 신중히(`pull_request_target`은 보안 검토 필요)

## 검수 체크리스트

- [ ] 프롬프트와 스크립트가 Git에 버전으로 있음
- [ ] 정책이 요구하면 CI 실패가 머지를 차단
- [ ] Artifact 보존 정책이 컴플라이언스에 맞음
- [ ] 로컬 `make review` 동작과 일치

## 참고 출처
- OpenAI Codex + GitHub 통합 문서
---

**상태：** outdated  
**적용 제품：** CLI  
**재검토 설명：** “프롬프트·스크립트·파이프라인을 Git 리뷰에 넣는다”는 원칙은 여전히 유효하지만, 예시가 `codex exec`, CLI 설치 방식, GitHub Actions 구체 연결에 의존하며 이는 변동이 큰 구현 세부입니다. 현행 공식 파이프라인 문서를 보강한 뒤 `verified`로 되돌리세요.  
**최근 검증：** 2026-07-26
