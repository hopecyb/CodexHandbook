---
legacyVerification:
  status: "verified"
  products: "IDE"
  basis: "현재 공식 IDE 빠른 시작 문서에는 VS Code, Cursor, Windsurf, VS Code Insiders와 Xcode 및 JetBrains의 통합 방식이 각각 명시되어 있다. 이 페이지는 두 설치 경로를 나누어 설명한다."
  checkedAt: "2026-08-26"
title: IDE 통합 설치
description: VS Code 호환 편집기, Xcode 또는 JetBrains IDE에서 Codex를 사용하도록 설정합니다.
sidebar:
  order: 50
locale: ko
source_locale: zh-CN
source_revision: 'e8f88ec'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

현재 IDE에서 Codex를 사용하는 방법은 한 가지가 아닙니다.

| IDE | 설치 또는 활성화 방법 |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Codex 확장을 설치하거나 활성화합니다. |
| Xcode | Xcode의 coding assistant에서 Codex Agent를 선택합니다. |
| JetBrains IDEs | AI Chat에서 Codex를 선택합니다. |

[Codex IDE 공식 페이지](https://learn.chatgpt.com/docs/codex/ide)에서 사용하는 IDE에 해당하는 공식 경로로 들어가세요. 다른 IDE의 스크린샷만 보고 버튼 위치를 추측하지 마세요.

## VS Code 호환 편집기

1. 공식 Marketplace 경로에서 Codex 확장을 설치합니다.
2. 실제 프로젝트의 작업 공간 루트 디렉터리를 엽니다.
3. Codex 아이콘을 선택합니다. 보이지 않으면 Command Palette를 열어 `Codex: Open Codex Sidebar`를 실행합니다.
4. ChatGPT 또는 API key로 로그인합니다.

## Xcode와 JetBrains

- Xcode: coding assistant를 열고 새 채팅을 만든 다음 Agent로 Codex를 선택합니다.
- JetBrains: AI Chat을 열고 Codex를 선택합니다.

이 진입점은 각 IDE에서 제공하므로 화면이 VS Code 확장과 완전히 같지는 않습니다.

## 설치 후 컨텍스트 확인

소스 파일 하나를 열고 짧은 코드 구간을 선택한 다음 질문합니다.

```text
현재 선택한 코드의 입력, 출력, 실패 경로만 설명하고 파일은 수정하지 마세요. 관련 함수 이름을 인용해 주세요.
```

응답이 선택한 코드와 뚜렷하게 무관하다면 먼저 다음을 확인하세요.

- 올바른 프로젝트 루트 디렉터리를 열었는가?
- 파일이나 선택한 코드가 composer에 첨부되었는가?
- 현재 로그인 계정과 작업 공간이 올바른가?
- 편집기에서 충돌할 수 있는 AI 확장이나 단축키를 동시에 활성화했는가?

다음으로 [IDE 로컬 작업 흐름](/ko/guide/ide/local-task-workflow/)을 살펴보세요. 지원 범위 전체는 [지원되는 편집기](/ko/guide/ide/supported-editors/)에서 확인할 수 있습니다.
