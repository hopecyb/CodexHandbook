---
title: CLI 명령 참고
description: Codex CLI의 자주 쓰는 하위 명령과 파라미터 빠른 조회——학습용 색인이며 공식 매뉴얼을 대체하지 않습니다.
locale: ko
source_locale: zh-CN
source_revision: '6091bcc'
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 50
legacyVerification:
  status: verified
  products: CLI
  basis: 현재 공식 Developer commands 성숙도 표와 대조해 Stable 명령만 수록하고 --cd / -C, 샌드박스, 승인 매개변수를 확인했습니다. 실험적이거나 사용 중단이 권고된 명령은 기본 빠른 참조에서 제외했습니다.
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

명령 참고 페이지는 실행 방식을 선택하는 데 쓰며, 처음부터 파라미터를 외울 필요는 없습니다.

> **지금은 대화형으로 실행할까, 단발 명령으로 실행할까?**

이 페이지는 현재 **Stable**인 Codex CLI 진입점을 검색하고 비교할 수 있도록 정리합니다. 실행 전 `codex --help`와 하위 명령의 `--help`를 확인하고, 전체 성숙도와 매개변수는 [Developer commands](https://learn.chatgpt.com/docs/developer-commands)를 기준으로 삼으세요.

## 언제 쓰나

명령 참고 페이지의 흔한 용도는 다음과 같습니다.

- 지금 대화형으로 들어갈지, 단발 명령을 돌릴지
- 이 작업이 채팅형인지 스크립트형인지
- CLI를 써야 하는 건 알지만 어떤 실행 방식을 선택할지 모름

## 실행 방식 선택

- 보며 대화하며 고침：`codex`
- 작업을 한 번에 맡기고 끝나면 결과를 받음：`codex exec`

CLI를 처음 쓰는 사람에게, 이 단계만으로도 실행 방식 선택의 대부분이 풀립니다.

## Stable 명령 개요

| 진입점 | 용도 | 상세 안내 |
|---|---|---|
| `codex` | 대화형 TUI 세션 | [대화형 모드](/ko/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | 비대화형 단일 작업 또는 파이프라인 | [비대화형 모드](/ko/guide/cli/non-interactive-mode/) |
| `codex doctor` | 설치, 설정, 인증, 실행 환경, Git, 터미널 진단 보고서 생성 | [CLI 문제 해결](/ko/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | 인증 관리 | [로그인과 인증](/ko/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | 저장된 세션 이어가기 또는 분기 | [인계와 재개](/ko/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | MCP 서버 관리 | [MCP 연결](/ko/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Plugin 설치, 목록 확인, 제거 | [Plugins](/ko/skills/plugins/) |

:::caution[서로 다른 성숙도]
공식 참조에는 Experimental, Beta, Deprecated 명령도 있습니다. 이 기본 빠른 참조에는 Stable 명령과 섞어 넣지 않았습니다. 사용 전 성숙도와 위험을 확인하세요.
:::

## 흔한 오해

### 1. 참고 페이지의 명령을 다 외울 필요 없다

더 현실적인 것은 “지금 작업에 맞는 실행 방식”을 먼저 알고, 나머지는 현장에서 `--help`로 찾는 것입니다.

### 2. `codex exec`는 `codex`의 고급 버전이 아니다

무인 운영, 스크립트, CI에 더 가깝습니다. 단순히 “더 강한” 대화형 실행 방식이 아닙니다.

### 3. 파라미터를 봤다고 바로 건드릴 필요는 없다

많은 파라미터는 현재 버전, 환경, 보안 정책과 관련됩니다. 의도를 먼저 이해한 뒤 건드릴지 정하세요.

### 4. 명령 참고 페이지는 조작 튜토리얼이 아니다

이것은:

- 실행 방식 안내
- 파라미터 색인
- “어느 페이지가 더 자세한지”를 가리키는 중계

## 대화형 모드(개념)

```bash
# 저장소 루트에서 대화형 세션 시작(예시)
codex

# 흔한 세션 내 조작(TUI 기준)
# - 작업 설명 입력
# - / 슬래시 명령 → slash-commands 페이지 참고
# - shell / 파일 쓰기 요청 승인
```

슬래시 명령：[슬래시 명령 빠른 조회](/ko/guide/reference/slash-commands/)

## 실행 방식 판단

CLI를 처음 쓸 때 이 순서로 보세요.

1. 먼저 `codex --help`를 돌림
2. 대화형으로 들어갈지 `exec`를 볼지 결정
3. 어떤 하위 명령을 쓸 때는 그 명령의 `--help`를 봄

처음부터 전체 파라미터 표에 빠지지 않게 합니다.

## 빠른 시작

지금 바로 쓰려면:

1. 먼저 `codex --help`
2. 대화하며 하려면 `codex`로 바로 진입
3. CI나 스크립트용이면 `codex exec`를 연구

파라미터 세부부터 파고드는 것보다 수월합니다.

## 비대화형 exec(개념)

```bash
# 작업 디렉터리와 단일 프롬프트(예시)
codex exec --cd /path/to/repo "전체 작업 설명"

# 현재 자주 쓰는 매개변수
# --cd, -C       작업 디렉터리
# --model        모델 고정
# --sandbox      샌드박스 정책
# --ask-for-approval, -a  승인 정책
# stdin 파이프   파일 또는 이전 명령에서 프롬프트 읽기
```

보안：[사람 승인 패턴](/ko/cases/workflows/human-approval-patterns/)

## 설정과 인증(개념)

| 조작 | 설명 |
|---|---|
| 로그인 | [로그인과 인증](/ko/guide/getting-started/sign-in-and-authentication/)과 일치 |
| 설정 파일 | 사용자 수준 / 프로젝트 수준, [설정 참고](/ko/guide/reference/configuration-reference/) |
| MCP | [MCP 연결](/ko/skills/mcp/connect-an-mcp-server/) |

## 종료 코드와 자동화

비대화형 모드는 보통 **종료 코드**로 성공/실패를 나타내 CI에 씁니다.

- `0`：약속대로 작업 완료
- 비 `0`：실패 또는 사람 개입 필요——로그 artifact 확인

CLI 명령 페이지는 실행 방식을 선택하고 의도를 찾는 데 쓰며, 파라미터를 외워 시작할 필요는 없습니다.

CI에서 stderr를 무시하지 마세요. 로그를 남겨 [진단 우선](/ko/cases/workflows/diagnose-before-fixing/)에 쓰세요.

## 채팅 슬래시 명령과의 차이

| | `codex` 터미널 | 세션 안 `/` |
|---|---|---|
| 문서 | 이 페이지 + 제품 매뉴얼 | [slash-commands](/ko/guide/reference/slash-commands/) |
| 적합 | 스크립트, CI | 대화형 탐색 |

## 장애 분석

| 현상 | 가리키는 곳 |
|---|---|
| 명령이 없음 | [CLI 설치](/ko/guide/getting-started/install-cli/) |
| 설정이 적용되지 않음 | [CLI 설정](/ko/guide/cli/configuration/) |
| 승인 때문에 CI가 멈춤 | 프롬프트의 범위를 좁히기 + 읽기 전용 샌드박스 |

[CLI 장애 분석](/ko/guide/cli/troubleshooting/)
