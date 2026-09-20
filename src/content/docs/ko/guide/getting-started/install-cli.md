---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "현재 Codex CLI 빠른 시작 및 인증 문서와 대조하여 공식 macOS/Linux 설치 프로그램, `codex` 시작 절차, ChatGPT 로그인, 로그인 상태 확인 명령을 검증했다. 다른 설치 방식은 공식 문서의 최신 탭을 확인하도록 안내한다."
  checkedAt: "2026-08-26"
title: CLI 설치
description: Codex CLI를 설치하고 버전, 로그인 상태, 저장소에서의 첫 작업을 확인합니다.
sidebar:
  order: 40
locale: ko
source_locale: zh-CN
source_revision: 564bd75
translation_status: draft
translated_at: 2026-09-20
---

Codex CLI를 사용하면 탐색, 수정, 테스트, 검토를 터미널에서 이어서 진행할 수 있습니다. 공식 설치 페이지에서는 macOS/Linux, Windows, npm, Homebrew 설치 방법을 제공합니다. 운영체제와 패키지 관리 방식에 맞는 방법 하나를 선택하세요.

## macOS / Linux 공식 독립 실행형 설치 프로그램

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

CLI를 업데이트할 때도 같은 공식 설치 명령을 다시 실행합니다. Windows, npm, Homebrew 사용자는 [Codex CLI 공식 페이지](https://learn.chatgpt.com/docs/codex/cli)에서 해당 설치 탭을 확인하세요. macOS/Linux 명령을 모든 운영체제에 그대로 적용하지 마세요.

## 설치 후 확인

새 터미널 창을 열고 연습용 저장소에서 다음 명령을 실행합니다.

```bash
codex --version
codex login status
```

아직 로그인하지 않았다면 다음을 실행합니다.

```bash
codex login
```

브라우저 인증을 마친 뒤 저장소 디렉터리에서 대화형 세션을 시작합니다.

```bash
codex
```

첫 작업은 읽기 전용으로 시작해도 됩니다.

```text
아직 파일을 수정하지 마세요. 이 프로젝트의 설치, 테스트, 빌드 방법을 설명하고 확인한 파일의 경로를 알려 주세요.
```

## 오류가 나면 순서대로 확인

1. `codex --version`에서 명령을 찾지 못한다면 터미널을 다시 열고 현재 셸의 `PATH`를 확인합니다.
2. 명령은 실행되지만 사용할 수 없다면 `codex login status`를 실행해 설치 문제와 인증 문제를 구분합니다.
3. 로그인된 계정이 잘못되었다면 `codex logout`을 실행한 뒤 다시 로그인합니다.
4. 회사 환경에서 접근이 거부된다면 작업 공간, 로그인 방식, 관리형 설정을 확인합니다. 정책을 우회하려고 개인 자격 증명으로 곧바로 바꾸지 마세요.

API key를 셸 기록, 지원 티켓, 채팅에 붙여 넣지 마세요. API key로 로그인해야 한다면 [로그인 및 인증](/ko/guide/getting-started/sign-in-and-authentication/)에 따라 표준 입력 방식을 사용합니다.

다음으로 [CLI 대화형 모드](/ko/guide/cli/interactive-mode/)를 살펴보세요. 그 밖의 문제는 [CLI 문제 해결](/ko/guide/cli/troubleshooting/)을 참고하세요.
