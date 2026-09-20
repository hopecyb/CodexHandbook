---
title: IDE 통합 설치 및 활성화
description: VS Code 계열 편집기, Xcode, JetBrains IDE에서 Codex를 올바르게 여는 방법.
locale: ko
source_locale: zh-CN
source_revision: 85e1691
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

IDE 진입점은 두 종류로 나뉘며 설치 방법을 서로 혼용할 수 없습니다.

| 편집기 | 현재 진입점 | 여는 방법 |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Codex 확장 | Codex 아이콘을 선택하거나 `Codex: Open Codex Sidebar` 실행 |
| Xcode | Xcode에 내장된 coding assistant 통합 | 새 채팅을 만들고 Codex agent 선택 |
| JetBrains IDEs | JetBrains AI Chat 통합 | AI Chat을 열고 Codex 선택 |

전체 지원 범위와 공식 진입점은 [지원되는 편집기](/ko/guide/ide/supported-editors/)에서 확인하세요.

## VS Code 계열 설치 및 확인

1. 공식 Marketplace 링크에서 Codex 확장을 설치합니다.
2. 빈 창이 아닌 연습용 프로젝트를 엽니다.
3. Codex 아이콘을 선택합니다. 아이콘이 보이지 않으면 명령 팔레트에서 `Codex: Open Codex Sidebar`를 실행합니다.
4. ChatGPT 계정 또는 API key로 인증합니다.
5. 새 채팅을 열고 현재 파일을 참조하여 읽기 전용 질문을 합니다.

최소 확인용 프롬프트:

```text
현재 열려 있는 파일만 읽고 코드는 수정하지 마세요.
파일의 역할, 입력, 출력을 세 가지 항목으로 설명하고 각 항목에서 구체적인 심벌 이름을 인용하세요.
```

답변이 현재 파일과 심벌에 맞으면 편집기 컨텍스트가 제대로 전달된 것입니다. 파일을 쓰는 작업으로 넘어가기 전에 Git 체크포인트를 만드세요.

## 흔한 문제

- **사이드바를 찾을 수 없음**: 명령 팔레트에서 `Codex: Open Codex Sidebar`를 실행합니다.
- **컨텍스트가 다름**: 프로젝트 창, 현재 파일, 선택 영역이 의도한 저장소에 속하는지 확인합니다.
- **로그인 화면이 반복됨**: CLI와 IDE는 인증 캐시를 공유합니다. 현재 계정을 확인하고 다시 로그인합니다.
- **Windows 도구 체인이 WSL에 있음**: 필요에 따라 `chatgpt.runCodexInWindowsSubsystemForLinux`를 활성화합니다. 이 설정을 바꾸면 VS Code가 다시 로드됩니다.
- **타사 편집기의 동작이 다름**: 해당 버전이 VS Code 확장과 호환되는지 먼저 확인하고 Xcode나 JetBrains의 진입 방식을 그대로 적용하지 않습니다.

초보자를 위한 자세한 단계는 [IDE 확장 설치](/ko/guide/getting-started/install-ide-extension/)를 참고하세요.

## 공식 근거

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [IDE 설정](https://learn.chatgpt.com/docs/ide/settings)
