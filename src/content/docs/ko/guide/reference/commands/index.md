---
title: CLI 명령 참고
description: Codex CLI의 자주 쓰는 하위 명령과 파라미터 빠른 조회——학습용 색인이며 공식 매뉴얼을 대체하지 않습니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

명령 참고 페이지는 입구를 가리는 데 쓰며, 처음부터 파라미터를 외울 필요는 없습니다.

> **지금은 대화형 입구를 쓸까, 단발 명령 입구를 쓸까?**

이 페이지는 **Codex CLI**의 자주 쓰는 입구를 모아 검색·대조하기 쉽게 합니다. **명령 이름, 파라미터, 기본값은 버전에 따라 바뀌므로**, 실행 전에 반드시 `codex --help`와 하위 명령 `--help`를 돌리고, [OpenAI Codex 문서](https://developers.openai.com/codex)를 기준으로 하세요.

## 언제 쓰나

명령 참고 페이지의 흔한 용도는 다음과 같습니다.

- 지금 대화형으로 들어갈지, 단발 명령을 돌릴지
- 이 작업이 채팅형인지 스크립트형인지
- CLI를 써야 하는 건 알지만 어느 입구를 볼지 모름

## 입구 선택

- 보며 대화하며 고침：`codex`
- 작업을 한 번에 맡기고 끝나면 결과를 받음：`codex exec`

CLI를 처음 쓰는 사람에게, 이 단계만으로도 입구 선택의 대부분이 풀립니다.

## 명령 총괄(예시)

| 입구 | 용도 | 상세 |
|---|---|---|
| `codex` | 대화형 TUI 세션 | [대화형 모드](/guide/cli/interactive-mode/) |
| `codex exec`(또는 동등) | 비대화형 단발/파이프 작업 | [비대화형 모드](/guide/cli/non-interactive-mode/) |
| 설정 관련 | 사용자/프로젝트 설정 읽기·쓰기 | [CLI 설정](/guide/cli/configuration/) |

:::caution[버전 민감]
아래 표의 파라미터 이름은 커뮤니티 문서의 흔한 서술이며, **설치한 CLI와 일치한다고 보장하지 않습니다**. 업그레이드 후 `--help`를 다시 확인하세요.
:::

## 흔한 오해

### 1. 참고 페이지의 명령을 다 외울 필요 없다

더 현실적인 것은 “지금 작업에 맞는 입구 종류”를 먼저 알고, 나머지는 현장에서 `--help`로 찾는 것입니다.

### 2. `codex exec`는 `codex`의 고급 버전만이 아니다

무인 운영, 스크립트, CI에 더 가깝습니다. 단순히 “더 강한” 대화형 입구가 아닙니다.

### 3. 파라미터를 봤다고 바로 건드릴 필요는 없다

많은 파라미터는 현재 버전, 환경, 보안 정책과 관련됩니다. 의도를 먼저 이해한 뒤 건드릴지 정하세요.

### 4. 명령 참고 페이지는 조작 튜토리얼이 아니다

이것은:

- 입구 지도
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

슬래시 명령：[슬래시 명령 빠른 조회](/guide/reference/slash-commands/)

## 입구 판단

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
# 작업 디렉터리와 단발 프롬프트 지정(예시)
codex exec --cwd /path/to/repo "완전한 작업 설명"

# 흔한 의도(파라미터 이름은 공식 기준)
# --cwd          작업 디렉터리
# --model        모델 고정
# --sandbox      샌드박스 정책
# --approval     승인 정책(무인 운영 시 특히 중요)
# stdin 파이프   파일이나 상위 명령에서 프롬프트 읽기
```

보안：[사람 승인 패턴](/cases/workflows/human-approval-patterns/)

## 설정과 인증(개념)

| 조작 | 설명 |
|---|---|
| 로그인 | [로그인과 인증](/guide/getting-started/sign-in-and-authentication/)과 일치 |
| 설정 파일 | 사용자급 / 프로젝트급, [설정 참고](/guide/reference/configuration-reference/) |
| MCP | [MCP 연결](/skills/mcp/connect-an-mcp-server/) |

## 종료 코드와 자동화

비대화형 모드는 보통 **종료 코드**로 성공/실패를 나타내 CI에 씁니다.

- `0`：약속대로 작업 완료
- 비 `0`：실패 또는 사람 개입 필요——로그 artifact 확인

CLI 명령 페이지는 입구를 가리고 의도를 찾는 데 쓰며, 파라미터를 외워 시작할 필요는 없습니다.

CI에서 stderr를 무시하지 마세요. 로그를 남겨 [진단 우선](/cases/workflows/diagnose-before-fixing/)에 쓰세요.

## 채팅 슬래시 명령과의 차이

| | `codex` 터미널 | 세션 안 `/` |
|---|---|---|
| 문서 | 이 페이지 + 제품 매뉴얼 | [slash-commands](/guide/reference/slash-commands/) |
| 적합 | 스크립트, CI | 대화형 탐색 |

## 장애 분석

| 현상 | 가리키는 곳 |
|---|---|
| 명령이 없음 | [CLI 설치](/guide/getting-started/install-cli/) |
| 설정이 적용되지 않음 | [CLI 설정](/guide/cli/configuration/) |
| 승인 때문에 CI가 멈춤 | 프롬프트를 조이고 + 읽기 전용 샌드박스 |

[CLI 장애 분석](/guide/cli/troubleshooting/)

---

**상태：** outdated  
**적용 제품：** CLI  
**재검토 설명：** 이 페이지는 “입구 지도”로 쓰려 했지만, 핵심은 여전히 `codex`, `codex exec`, 세션 안 `/` 명령과 관련 파라미터 의도입니다. 모두 현행 CLI의 변동이 큰 제품 세부이므로, 최신판 공식 명령 문서를 보강한 뒤 `verified`로 되돌리세요.  
**최근 검증：** 2026-07-26
