---
title: CLI
description: 명령줄 입구의 최소 사용 설명.
sidebar:
  order: 11
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

CLI는 터미널 사용자와 스크립트·CI 통합에 맞습니다.

처음 “CLI”를 보면, GUI 없이 터미널에서 Codex와 협업하는 입구로 이해하면 됩니다.

다음 장면에 더 가깝습니다.

- 명령줄에 익숙한 사람
- 스크립트와 결합하고 싶은 사람
- CI/자동화에 연결해야 하는 사람

터미널에 전혀 익숙하지 않은 초보자에게 CLI는 필수 첫 정류장이 아닙니다. 다만 기본 `cd`·`ls`와 프로젝트 디렉터리에서 명령을 실행할 줄 알면 매우 효율적입니다.

- [설치와 업데이트](/guide/cli/installation-and-updates/)
- [대화형 모드](/guide/cli/interactive-mode/)
- [비대화형 모드](/guide/cli/non-interactive-mode/)
- [CLI 구성](/guide/cli/configuration/)
- [명령과 단축](/guide/cli/commands-and-shortcuts/)
- [승인과 샌드박스](/guide/cli/approvals-and-sandbox/)
- [문제 해결](/guide/cli/troubleshooting/)

완전한 명령 참고는 [CLI 명령 참고](/guide/reference/commands/)를 보세요.

## 처음 사용할 때 먼저 구분할 것

첫 단계에서는 두 모드를 구분하세요.

1. **대화형 모드**: 터미널에서 Codex와 직접 대화하듯 사용
2. **비대화형 모드**: Codex를 명령처럼 스크립트나 CI에 연결

첫 시험이라면 보통 대화형 모드가 더 수월합니다. 자동화가 필요할 때 비대화형 모드를 보세요.


---

**상태:** verified  
**적용 제품:** CLI  
**검증 근거:** OpenAI Help Center 현행 CLI 입문 자료는 Codex CLI를 터미널 입구로 설명하며, 대화형 사용과 더 자동화된 명령줄 워크플로를 구분합니다. 이 페이지는 CLI 장 탐색용이며, 대화형·비대화형 두 사용 방식만 개괄하고 구체 매개변수나 설치 명령에 묶이지 않습니다.  
**최근 검증:** 2026-07-26
