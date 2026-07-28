---
title: 지원 에디터
description: Codex IDE 확장이 지원하는 에디터, 선정 방법, 흔한 제한.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

IDE 확장은 Codex를 **이미 쓰는 에디터**에 넣어, 코드를 쓰는 같은 화면에서 작업을 시작하고, diff를 보고, 변경을 수락하게 합니다. 이 페이지는 지원 범위와 선정을 설명합니다. 설치 단계는 [IDE 확장 설치](/guide/ide/installation/)를 보세요.

## 이 페이지의 내용

- 공식 확장이 있는 에디터
- IDE 확장 vs 데스크톱 App vs CLI 선택
- 다중 에디터 팀의 워크플로 통일

## 선정 시 볼 것

여기서는 두 가지를 다룹니다. 공식 지원 범위에 어떤 에디터가 있는지, 그리고 이미 쓰는 에디터가 있을 때 Codex를 IDE에 남겨 둘지입니다.

## 공식 지원 범위

**구체 목록과 버전 요구는 [OpenAI Codex 문서](https://developers.openai.com/codex)를 기준으로 합니다.** 흔히 포함되는 것:

| 에디터 | 전형 사용자 | 설명 |
|---|---|---|
| Visual Studio Code | 다수 개발자 | 확장 마켓플레이스 설치, 생태계가 가장 성숙 |
| Cursor 등 VS Code 계 fork | AI 에디터 사용자 | 보통 VS Code 확장 메커니즘과 호환; 실측 기준 |
| JetBrains 시리즈(공식 제공 시) | Java/Kotlin/IDEA 사용자 | 기능·UI가 VS Code 판과 다소 다를 수 있음 |

공식 목록에 없는 에디터: [CLI](/guide/cli/) 또는 [데스크톱 App](/guide/desktop-app/)으로 대체하세요. 비공식 이식 확장에 의존하지 마세요.

## 흔한 오해

### 어떤 에디터를 지원한다고 해서 기능이 다른 입구와 완전히 같지는 않습니다

“확장이 있다”를 “IDE에서 모든 일을 할 수 있다”로 오해하기 쉽습니다.

입구마다 초점이 다릅니다.

- IDE는 코드에 붙어 수정하는 쪽에 가깝습니다
- App은 프로젝트급 작업과 다중 작업 조율에 가깝습니다
- CLI는 터미널·스크립트·원격 환경에 가깝습니다

### 에디터 선택은 습관만이 아닙니다

주로 하는 일이 다음과 같다면:

- 코드 국소 수정
- 선택 영역 보기
- 고치면서 테스트

IDE가 더 맞습니다.

평소 더 자주 하는 일이 다음과 같다면:

- 긴 작업
- 문서 총괄
- 여러 작업 병렬

App 또는 CLI가 더 잘 맞는 경우가 많습니다.

## 언제 IDE 확장을 고르나요

| 적합 | 덜 적합 |
|---|---|
| 코드를 고칠 때 「현재 파일/선택 영역」이 자동으로 컨텍스트에 들어오길 원함 | 병렬 다중 Agent·작업 트리 등 App 전용 기능이 필요 |
| 에디터에서 inline diff를 보는 습관 | 비코드 긴 작업(문서, 조사)이 주 |
| 이미 IDE에서 테스트·디버그를 돌림 | 표준 Cloud 환경에서 저장소를 처음부터 세팅해야 함 |

결정 입구: [Codex 클라이언트 선택](/guide/getting-started/choose-your-codex-client/)

## 데스크톱 App과의 역할 분담

```text
IDE 확장: 편집 중 → 작은 수정 → 인라인 검토 → 로컬 테스트
데스크톱 App: 프로젝트급 작업 → 병렬 Agent → 작업 트리 → 알림과 Cloud 위임
```

둘은 같은 계정과 프로젝트 설정을 공유할 수 있습니다. [에디터 컨텍스트](/guide/ide/editor-context/)와 [AGENTS.md 범위](/guide/customization/agents-md/scope-and-precedence/)를 보세요.

## 팀 정렬

1. README에 **권장 에디터 + 최소 확장 버전**을 명시합니다
2. 핵심 규약은 `AGENTS.md`에 쓰고, 특정 IDE 전용 기능에 묶지 않습니다
3. Code review는 여전히 Git diff를 기준으로 하며, 「특정 IDE만 볼 수 있는」 뷰에 의존하지 않습니다

## 어느 입구를 쓸지 판단

확신이 없으면 다음 질문으로 판단하세요.

1. 대부분의 시간을 에디터에서 코드를 고치며 보내나요
2. 현재 파일·선택 영역·인라인 diff에 크게 의존하나요
3. 당분간 다중 Agent·작업 트리·더 강한 작업 관리가 필요 없나요

대부분 “예”라면 IDE 확장부터 시작하세요.

## 흔한 실수

- IDE 확장과 App 기능이 1:1이라고 가정
- 워크스페이스 루트를 열지 않고 작업을 시작해 경로와 `AGENTS.md` 해석이 틀어짐
- 여러 AI 확장을 섞어 컨텍스트와 단축키가 충돌

많은 경우 IDE 확장을 고르는 이유는, 주요 작업이 원래 에디터에 있기 때문입니다.

## 참고 출처
- OpenAI Codex IDE 문서
---

**상태:** outdated  
**적용 제품:** IDE  
**재검토 설명:** 현행 공식 도움말은 “Codex VS Code extension is compatible with most VS Code forks” 정도를 강하게 확인할 수 있지만, 이 페이지는 Cursor·Windsurf·JetBrains 등 구체 지원 형태와 비교까지 확장합니다. 현행 지원 매트릭스가 보강되기 전에는 `outdated`가 더 적합합니다.  
**최근 검증:** 2026-07-26
