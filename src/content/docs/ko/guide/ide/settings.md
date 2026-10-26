---
title: IDE 확장 설정
description: 공유 Agent 구성과 VS Code 계열 편집기의 동작 설정을 구분합니다.
locale: ko
source_locale: zh-CN
source_revision: '6f28910'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 80
legacyVerification:
  status: verified
  products: IDE
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

IDE에는 두 종류의 설정이 있습니다.

| 설정 계층 | 위치 | 담당하는 기능 |
|---|---|---|
| Codex Agent 설정 | `config.toml` | 모델, 추론 강도, 권한, 샌드박스, MCP, 개인화. CLI와 공유됩니다. |
| 편집기 설정 | VS Code 설정 시스템의 `chatgpt.*` | 사이드바, 메시지 대기열, 전송 키, 리뷰 표시, 언어, 글꼴 |

저장소 규칙은 여전히 `AGENTS.md`에 작성해야 합니다. 개인의 편집기 설정에 넣지 마세요.

## 설정 열기

Codex 사이드바에서 톱니바퀴를 선택한 뒤 **Codex Settings**를 선택합니다. 자주 쓰는 Agent 옵션은 패널에서 바꿀 수 있고, **Open config.toml**을 선택해 현재 적용 중인 구성 계층을 편집할 수도 있습니다.

편집기 동작 설정은 편집기 Settings에서 `@ext:openai.chatgpt`, `Codex` 또는 특정 키 이름을 검색합니다.

## 먼저 이해할 만한 설정

| 키 | 기본값 | 변경할 때 |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | 확장 시작 후 사이드바에 자동으로 포커스를 두고 싶을 때 |
| `chatgpt.followUpQueueMode` | `queue` | `steer`로 바꾸어 새 메시지가 현재 실행을 이끌게 할 때 |
| `chatgpt.composerEnterBehavior` | `enter` | 여러 줄 요청을 작성하다가 자주 잘못 전송할 때 |
| `chatgpt.reviewDelivery` | `inline` | `/review` 결과를 별도 대화에 표시하려고 `detached`를 사용할 때 |
| `chatgpt.localeOverride` | 자동 | 인터페이스 언어를 고정할 때 |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | 저장소와 도구 체인이 WSL2에 있을 때 |

`chatgpt.cliExecutable`은 Codex CLI 개발용입니다. 일반 사용자가 확장에 포함된 실행 파일을 직접 덮어쓰면 일부 기능이 작동하지 않을 수 있습니다.

## 구성 우선순위 이해하기

- 조직 정책은 넘을 수 없는 상한을 정합니다.
- `config.toml`은 Agent의 기본 동작을 정합니다.
- `AGENTS.md`는 저장소와 디렉터리 규칙을 제공합니다.
- 편집기 설정은 IDE 사용 경험만 바꿉니다.
- 개별 요청은 이번 작업의 목표와 경계를 추가합니다.

설정이 적용되지 않는다면 먼저 어느 계층을 변경했는지 확인하고, 상위 정책의 제한이 있는지 살펴보세요. 자세한 원리는 [범위와 우선순위](/ko/guide/customization/agents-md/scope-and-precedence/)를 참고하세요.

## 변경 후 확인

한 번에 설정 하나만 바꿉니다. 예를 들어 `chatgpt.reviewDelivery`를 `detached`로 변경했다면 Git 저장소에서 `/review`를 실행해 별도의 리뷰 대화가 열리는지 확인하세요. 원래 값을 기록하고, 예상한 결과가 나오지 않으면 되돌린 뒤 편집기를 다시 로드합니다.

## 공식 출처

- [Codex IDE 설정 참조](https://learn.chatgpt.com/docs/ide/settings)
- [구성 기본 사항](https://learn.chatgpt.com/docs/config)
