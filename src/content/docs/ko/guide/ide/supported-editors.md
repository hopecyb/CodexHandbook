---
title: 지원되는 편집기
description: VS Code 호환 확장, Xcode 통합, JetBrains 통합을 구분합니다.
locale: ko
source_locale: zh-CN
source_revision: 7b82896
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

현재 Codex는 여러 방식으로 주요 편집기에 연결됩니다. VS Code 계열은 Codex 확장을 사용하고, Xcode와 JetBrains IDE는 각각의 통합 진입점을 사용합니다.

## 현재 지원 방식

| 편집기 | Codex 진입점 | 여는 방법 |
|---|---|---|
| Visual Studio Code | Codex 확장 | Codex 아이콘 또는 `Codex: Open Codex Sidebar` |
| Cursor | 호환되는 Codex 확장 | Codex 아이콘 또는 Command Palette |
| Windsurf | 호환되는 Codex 확장 | Codex 아이콘 또는 Command Palette |
| Visual Studio Code Insiders | Codex 확장 | 확장 패널과 Codex 사이드바 |
| Xcode | Xcode coding assistant 통합 | 새 채팅을 만들고 Codex Agent 선택 |
| JetBrains IDEs | JetBrains AI Chat 통합 | AI Chat을 열고 Codex 선택 |

설치 진입점과 최소 지원 버전은 바뀔 수 있습니다. 항상 [Codex IDE 공식 페이지](https://learn.chatgpt.com/docs/codex/ide)를 통해 이동하세요. 이름이 비슷한 타사 확장이라는 이유만으로 공식 지원으로 판단하지 마세요.

## IDE 진입점이 적합한 작업

- 현재 열린 파일이나 선택 영역을 질문에 바로 포함하기
- 코드 일부를 설명하고 수정한 뒤 후속 질문하기
- 소스 코드 옆에서 요약과 변경 사항 검토하기
- 작은 작업은 로컬에서 처리하고, 작업이 커지면 더 긴 워크플로에 위임하기

예시:

```text
현재 선택한 부분의 재시도 반복문을 확인해 주세요.
먼저 종료 조건을 설명한 다음 최소한으로 수정하세요. 현재 파일과 해당 테스트만 변경하세요.
완료 후 diff와 테스트 명령을 보고하고, 의존성은 업그레이드하지 마세요.
```

## 여러 편집기를 쓰는 팀에서 일관성 유지하기

1. 빌드, 테스트, 포맷 명령을 저장소의 `AGENTS.md`나 기여 문서에 기록합니다.
2. 프롬프트에서 수정 가능한 파일 범위를 제한하고, 특정 IDE의 전용 버튼에 의존하지 않습니다.
3. 최종 검수에는 Git diff와 동일한 테스트 묶음을 사용합니다. “내 IDE에서는 실행된다”는 것으로 대신하지 않습니다.
4. 정확한 UI 안내가 필요할 때만 IDE별 지침을 따로 작성합니다.

## 목록에 없는 편집기

[Codex CLI](/ko/guide/cli/) 또는 [데스크톱 App](/ko/guide/desktop-app/)을 우선 사용하세요. VS Code 확장을 호환되지 않는 편집기에 억지로 설치하거나 타사 통합을 기본적으로 OpenAI 공식 기능으로 취급하지 마세요.

설치 단계는 [IDE 통합 설치](/ko/guide/getting-started/install-ide-extension/), 컨텍스트 사용법은 [편집기 컨텍스트](/ko/guide/ide/editor-context/)에서 확인하세요.
