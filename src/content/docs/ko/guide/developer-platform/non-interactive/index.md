---
title: 비대화형 모드
description: 배치, 스크립트, 파이프라인용 설명 페이지입니다. 어떤 작업에 맞는지 먼저 이해한 뒤, 구체 명령과 출력 설계를 보세요.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

많은 사람이 “비대화형 모드”를 처음 보면 “채팅 UI가 없는 일반판 Codex”로 이해합니다.

비대화형 모드는 Codex를 스크립트, CI, 배치에 넣고, 한 번의 명령으로 일을 안정적으로 끝내게 할 때 더 맞습니다.

## 권장 순서

1. [codex exec](/guide/developer-platform/non-interactive/codex-exec/)
2. [스크립트와 파이프라인](/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [구조화 출력](/guide/developer-platform/non-interactive/structured-output/)
4. [종료 코드와 재시도](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## 이 그룹이 가장 잘 푸는 문제

- 한 번의 작업을 커맨드라인 단계로 만드는 방법
- CI가 성공, 실패, 재시도 필요를 판단하는 방법
- 출력을 이후 스크립트가 이어 받기 쉽게 만드는 방법

스크립트와 파이프라인이 결과를 안정적으로 받게 하는 데 맞습니다. 천천히 주고 대화하는 용도에는 맞지 않습니다.

---

**상태：** verified  
**적용 제품：** CLI / API / Cloud  
**검증 근거：** 본 저장소의 현재 non-interactive 하위 장 구조와 입구 링크를 교차 확인했습니다. 이 페이지는 “비대화형 모드가 스크립트·배치·파이프라인에 적합하다”는 그룹 설명만 담당하며, 구체 명령 파라미터를 단독으로 약속하지 않습니다.  
**최근 검증：** 2026-07-26
