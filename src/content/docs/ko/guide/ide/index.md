---
title: IDE 확장
description: 에디터에서 Codex 사용하기—설치, 컨텍스트, 로컬·Cloud 작업, 검토와 설정.
sidebar:
  order: 12
locale: ko
source_locale: zh-CN
source_revision: 66307a0
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

IDE 확장은 **쓰면서 diff를 보는** 방식에 맞습니다. 파일을 열고, 코드를 선택한 뒤, 사이드바에서 작업을 설명합니다. 이 장은 선정부터 검토까지 전체 경로를 다룹니다.

평소 에디터에서 코드를 쓰거나 문서를 고친다면, IDE가 가장 자연스러운 입구인 경우가 많습니다.

현재 열린 파일과 선택 영역을 바로 가져가므로, 많은 “작은 범위 수정” 작업을 범위 안에 가두기 쉽습니다.

## 장 탐색

| 주제 | 페이지 |
|---|---|
| 선정 | [지원 에디터](/ko/guide/ide/supported-editors/) |
| 설치 | [설치](/ko/guide/ide/installation/) |
| 컨텍스트 | [에디터 컨텍스트](/ko/guide/ide/editor-context/) · [선택 영역과 열린 파일](/ko/guide/ide/selected-code-and-open-files/) |
| 워크플로 | [로컬 작업](/ko/guide/ide/local-task-workflow/) · [Cloud 작업](/ko/guide/ide/cloud-task-workflow/) |
| 품질 | [변경 검토](/ko/guide/ide/reviewing-changes/) |
| 구성 | [설정](/ko/guide/ide/settings/) |
| 문제 해결 | [문제 해결](/ko/guide/ide/troubleshooting/) |

입문 지름길: [IDE 확장 설치](/ko/guide/getting-started/install-ide-extension/) · [클라이언트 선택](/ko/guide/getting-started/choose-your-codex-client/)

## 먼저 이 몇 가지에 주의하세요

처음 쓸 때는 다음 세 가지를 살피세요.

1. 현재 열린 파일을 참고합니다
2. 선택 영역으로 범위를 더 정확히 잡을 수 있습니다
3. 수정 후에도 diff는 직접 검토해야 합니다

IDE 확장은 “작은 범위, 보면서 고치기”에 맞지만, 범위 제어와 검토는 여전히 필수입니다.

---

**상태:** verified  
**적용 제품:** IDE  
**검증 근거:** OpenAI Help Center 현행 《Using Codex with your ChatGPT plan》는 Codex IDE extension을 명시적으로 지원하며, CLI·데스크톱 App과 나란한 로컬 클라이언트라고 설명합니다. 이 페이지는 IDE 장 탐색용이며, “현재 파일·선택 영역·diff 검토”라는 안정적인 작업 방식을 강조합니다.  
**최근 검증:** 2026-07-26
