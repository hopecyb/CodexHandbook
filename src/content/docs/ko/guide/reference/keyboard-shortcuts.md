---
title: 키보드 단축키
description: 현재 공식 문서에서 확인할 수 있는 데스크톱 앱과 IDE의 단축 동작만 다룹니다.
locale: ko
source_locale: zh-CN
source_revision: 4f812d9
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 90
---

단축키는 플랫폼, 클라이언트, 사용자 설정에 따라 달라집니다. 이 페이지에는 현재 공식 문서에 명시된 조합만 실었습니다. 전체 목록은 앱의 **Keyboard Shortcuts**에서 확인하세요.

## 데스크톱 앱

| 동작 | macOS | Windows |
|---|---|---|
| Settings 열기 | `Cmd + ,` | `Ctrl + ,` |
| Activity 열기/닫기 | `Cmd + Option + U` | `Ctrl + Alt + U` |
| 통합 터미널 열기 | `Ctrl` + 백틱 키 | `Ctrl` + 백틱 키 |
| 앱 명령 팔레트 열기 | `Cmd + K` | Keyboard Shortcuts에서 확인 |
| 터미널 화면 지우기 | `Ctrl + L` | `Ctrl + L` |

`Cmd + K`는 앱 명령 팔레트를 엽니다. 터미널 화면을 지우는 명령이 아닙니다.

Settings의 Keyboard Shortcuts에서는 명령 이름으로 검색하거나 키 조합으로 역검색하고, 바인딩을 바꾸거나 기본값을 복원할 수 있습니다. 사용자 정의 설정을 적용했다면 온라인 단축키 목록보다 로컬 설정을 우선 확인하세요.

## IDE

VS Code 계열 편집기의 `chatgpt.composerEnterBehavior` 설정은 Enter와 `Cmd/Ctrl + Enter`로 여러 줄 요청을 보내는 방식을 결정합니다. 모든 컴퓨터에서 같은 키로 전송된다고 가정하지 마세요.

Codex가 실행 중일 때 `chatgpt.followUpQueueMode`는 새 메시지를 대기열에 넣을지 현재 실행을 즉시 이끌지 결정합니다. 단일 메시지를 보낼 때 `Cmd/Ctrl + Shift + Enter`를 누르면 현재 기본 동작을 반대로 적용할 수 있습니다.

Codex 사이드바가 보이지 않으면 편집기 명령 팔레트에서 다음 명령을 실행하세요.

```text
Codex: Open Codex Sidebar
```

## CLI

CLI TUI의 조작법은 현재 버전의 `/help`와 화면 안내에서 확인하세요. 이 페이지에서는 터미널, 모드, 버전에 따라 달라질 수 있는 `y`, `n` 등의 승인 키를 추측해 나열하지 않습니다.

일반적인 터미널 신호인 `Ctrl + C`는 실행 중인 명령이나 세션을 중단할 수 있습니다. 현재 상태를 먼저 확인하고, 부작용 없는 '뒤로 가기' 키로 여기지 마세요.

## 학습 순서

먼저 설정 열기, Activity 보기, 터미널 열기, 여러 줄 요청 보내기를 익히세요. 다른 단축키는 실제로 자주 쓰는 동작을 앱 안에서 검색하면 됩니다. 팀 문서에는 동작 이름을 적고 모든 사람에게 같은 사용자 정의 키를 강제하지 않는 편이 좋습니다.

## 공식 출처

- [데스크톱 앱 설정](https://learn.chatgpt.com/docs/app/settings)
- [알림과 Activity](https://learn.chatgpt.com/docs/notifications)
- [통합 터미널](https://learn.chatgpt.com/docs/integrated-terminal)
- [IDE 설정](https://learn.chatgpt.com/docs/ide/settings)
