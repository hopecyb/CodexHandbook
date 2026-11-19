---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "당시 공식 Non-interactive mode 및 Developer commands 문서와 대조해 `codex exec`가 Stable인지, `--cd` / `-C` 옵션, 기본 읽기 전용 샌드박스, `workspace-write`, JSONL 및 schema 출력 방식을 확인했습니다."
  checkedAt: "2026-08-26"
title: codex exec
description: 비대화형 실행 명령으로 스크립트와 CI에서 완전한 작업을 한 번에 전달합니다.
locale: ko
source_locale: zh-CN
source_revision: '6d7c481'
translation_status: stale
translated_at: "2026-09-20"
sidebar:
  order: 10
reviewed_at: '2026-10-26'
---

대화형 `codex`가 대화하면서 작업하는 방식이라면, **`codex exec`**는 한 번에 작업을 맡기고 끝난 뒤 결과를 돌려받는 방식에 가깝습니다.

이 명령은 [비대화형 모드](/ko/guide/cli/non-interactive-mode/)의 핵심입니다. 여러 차례 대화하거나 작업 중간에 질문을 주고받지 않습니다. 프로세스가 끝나면 결과 또는 실패 상태를 받습니다. 이 장은 [개발자 플랫폼](/ko/guide/developer-platform/) 통합 담당자와 Codex를 처음 스크립트나 CI에 연결하려는 독자를 위한 것입니다.

## 이 페이지에서 다루는 내용

- `exec`와 대화형 `codex`의 차이
- 최소 명령 형태와 작업 디렉터리
- 무인 실행에서 승인과 샌드박스에 필요한 조건

## `exec`가 하는 일

`codex exec`는 다음처럼 생각하면 됩니다.

- 일회성 작업 지시서를 전달합니다.
- 작업이 끝나면 결과를 돌려받습니다.

지시서를 명확히 작성하면 그 내용에 따라 실행하고 결과를 반환한 뒤 종료합니다. 따라서 다음과 같은 작업에 적합합니다.

- 작업 범위가 이미 고정되어 있음
- 중간에 여러 번 설명하거나 확인할 필요가 없음
- 나중에 안정적으로 반복 실행하려 함

## 이 명령이 필요한 이유

CI에서 Codex와 대화할 수는 없고, 중간에 열 번씩 멈춰 질문하기를 기대해서도 안 됩니다.

따라서 `codex exec`는 보통 다음에 사용합니다.

- 코드 검토 자동화
- 예약 작업
- 배치 스크립트
- 파이프라인의 일회성 분석 또는 생성 단계

**작업 범위가 이미 명확한** 경우에 적합합니다. 요구 사항을 탐색하는 중이라면 대화형 모드가 대체로 더 적합합니다.

:::note
**명령 이름과 옵션은 공식 CLI를 기준으로 하세요.** 업그레이드 후 `codex --help`와 `codex exec --help`를 실행해 다시 확인하세요.
:::

## 최소한으로 시작하기

```bash
cd /path/to/repo
codex exec --cd . "읽기 전용: 현재 브랜치와 main의 diff를 비교하고 가장 중요한 보안 위험 3개를 나열하세요. 파일은 수정하지 마세요."
```

기본 실행은 읽기 전용 샌드박스에서 이루어집니다. 작업 공간에 쓰기를 허용해야 한다면 명시적으로 다음을 사용하세요.

```bash
codex exec --cd . --sandbox workspace-write "실패한 테스트를 수정하되 src/auth와 tests/auth만 변경하세요."
```

진행 상황은 `stderr`에, 최종 응답은 `stdout`에 기록됩니다. 기계가 전체 이벤트 스트림을 처리해야 한다면 `--json`을 사용하세요. 최종 메시지만 파일로 필요하다면 `-o` / `--output-last-message`를 사용하고, 안정적인 필드가 필요하면 `--output-schema`를 추가하세요.

원칙은 다음과 같습니다.

- Shell 스크립트에서는 먼저 깨끗한 worktree로 `cd`합니다.
- Prompt는 버전 관리되는 `prompts/` 파일이나 heredoc에 두어 shell 이스케이프 오류를 피합니다.
- CI에서는 **종료 코드**로 성공과 실패를 판단합니다.

## 가장 놓치기 쉬운 현실

대화형 모드에서는 “그 뜻이 아니에요”라고 다시 설명할 수 있습니다.

`exec` 모드에서는 **첫 지시가 잘못되면 실행 전체가 잘못된 방향으로 갈 수 있습니다.**

따라서 `exec` prompt에는 평소보다 더 명확하게 다음을 적어야 합니다.

- 무엇을 할지
- 무엇을 하지 말지
- 출력 형식은 무엇인지
- 무엇을 완료로 볼지
- 실패할 때 어떻게 종료할지

## 흔한 오해

### `exec`는 고정된 작업에 더 적합함

처음에는 “CLI의 고급 모드”라고 이해하기 쉽습니다. 더 정확하게는 **안정적으로 반복 실행할 작업**에 적합한 모드입니다.

### 작업 지시가 짧다고 명확한 것은 아님

대화형 모드에서는 말이 조금 모호해도 나중에 보충할 수 있습니다. 하지만 `exec`에서 짧은 prompt가 범위, 제한, 성공 기준을 빠뜨리면 간결한 것이 아니라 제어하기 어려워지기 쉽습니다.

## 권장 작업 흐름

```text
저장소 준비(checkout, install, 읽기 전용 token)
    → prompt 버전 고정(git sha)
    → codex exec
    → stdout / artifact 수집
    → 종료 코드가 0이 아니면 CI 실패 처리, 무한 자동 재시도 금지
```

[스크립트와 파이프라인](/ko/guide/developer-platform/non-interactive/scripts-and-pipelines/)으로 이어집니다.

## 어떤 도구로 생각하면 될까

- 스크립트에서 호출할 수 있는 일회성 작업 명령
- 스크립트, CI 또는 예약 작업에 넣기 좋은 명령

그래서 많은 팀이 `make review`, GitHub Actions, cron 또는 내부 플랫폼의 버튼 뒤에 이 명령을 연결합니다.

## 대화형 모드와 비교

| | 대화형 `codex` | `codex exec` |
|---|---|---|
| 질문과 확인 | 여러 차례 가능 | 처음에 한 번에 명확히 해야 함 |
| 승인 | 사람이 함께 있음 | 사전에 정책을 더 엄격하게 정해야 함 |
| 적합한 용도 | 학습, 탐색 | CI, cron |

## 확신이 없을 때의 선택

- 요구 사항을 아직 찾는 중이고 자주 수정할 수 있다면 대화형 모드를 먼저 사용하세요.
- 작업을 템플릿으로 고정했고 안정적으로 반복하기만 하면 `codex exec`를 사용하세요.

`codex exec`는 이미 설명이 끝났고 앞으로도 반복 실행할 작업에 가장 적합합니다. 생각하며 요구 사항을 바꾸는 중이라면 비대화형 흐름에 서둘러 넣지 마세요.

## 흔한 실수

- 긴 채팅 기록을 한 번의 exec에 모두 넣음
- CI에서 쓰기 권한이 있는 token을 사용하면서 정제하지 않은 PR 본문을 prompt에 포함함
- CLI 버전을 고정하지 않아 파이프라인이 갑자기 실패함
- 0이 아닌 종료 코드를 무시하고도 성공으로 표시함
- 사람의 판단이 필요한 복잡한 작업을 무인 흐름에 억지로 넣음

## 보안 경계

- 무인 실행에서는 [사람의 승인](/ko/cases/workflows/human-approval-patterns/)이 약해지므로 기본값은 읽기 전용으로 둡니다.
- [안전한 자격 증명](/ko/guide/developer-platform/ci-cd/code-review-automation/#권한과-보안)을 참고하세요. 같은 장의 관련 설명입니다.

## 검수 체크리스트

- [ ] 로컬과 CI가 같은 prompt 파일을 사용함
- [ ] CI가 종료 코드를 올바르게 처리함
- [ ] 로그에 key와 PII가 없음
- [ ] 샌드박스와 규칙이 대화형 개발 때와 같거나 더 엄격함

## 관련 장

- [CLI 비대화형 모드](/ko/guide/cli/non-interactive-mode/)
- [구조화된 출력](/ko/guide/developer-platform/non-interactive/structured-output/)
- [종료 코드와 재시도](/ko/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## 참고 출처

- OpenAI Codex CLI 문서
