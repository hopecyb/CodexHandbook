---
title: Hooks
description: Codex 수명 주기의 특정 시점에 스크립트나 MCP 도구를 실행하여 검사, 기록, 정책 제어를 수행합니다.
locale: ko
source_locale: zh-CN
source_revision: a0312e9
translation_status: draft
translated_at: 2026-09-20
---

Hook은 Codex 수명 주기에서 자동으로 실행되는 처리기입니다. 세션 시작, 요청 제출, 도구 호출 전후, 컨텍스트 압축, 하위 Agent 중지, 메인 스레드 종료 등의 시점에 스크립트나 MCP 도구를 실행할 수 있습니다.

## 이 문서 모음에서 다루는 내용

- 존재하지 않는 `pre_tool` 같은 이름을 만들어 쓰지 않고 올바른 이벤트를 선택하는 방법
- 실행 전 차단과 실행 후 피드백을 구분하는 방법
- 테스트할 수 있고 위험이 낮은 Hook부터 시작하는 방법
- 프로젝트 Hook과 Plugin에 포함된 Hook의 신뢰 경계를 검토하는 방법

## 읽는 순서

1. [Hooks 개요](/ko/skills/hooks/hooks-overview/): 구성 계층, 신뢰, 실행 동작 이해
2. [Hook 이벤트 유형](/ko/skills/hooks/hook-event-types/): 수명 주기에 따라 이벤트와 matcher 선택
3. [Hook 구성 예제](/ko/skills/hooks/hooks-examples/): 단위 테스트가 가능한 `PreToolUse` 보호 예제 실행

## 간단한 선택 기준

| 목표 | 먼저 고려할 이벤트 |
|---|---|
| 도구 실행 전에 입력을 거부하거나 변경 | `PreToolUse` |
| Codex가 권한 상향을 요청하려 할 때 결정 | `PermissionRequest` |
| 도구 종료 후 기록하거나 피드백 추가 | `PostToolUse` |
| 요청 제출 시 검사하거나 컨텍스트 추가 | `UserPromptSubmit` |
| 메인 스레드나 하위 Agent가 한 번 더 계속하도록 요청 | `Stop` / `SubagentStop` |

Hook은 샌드박스, 승인, 명령 규칙, 서버 측 권한을 대체하지 못합니다. 추가 보호 계층이며 일부 관리형 도구 경로는 로컬 도구 Hook을 거치지 않습니다.

## 공식 출처

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
