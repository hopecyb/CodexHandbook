---
title: 컨텍스트
description: 프로젝트·파일·대화 컨텍스트를 관리합니다.
sidebar:
  order: 16
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

컨텍스트는 모델이 「지금 효과적으로 쓸 수 있는 정보」입니다. 컨텍스트를 못 다루면, 아무리 좋은 프롬프트도 노이즈에 묻힙니다.

실제 사용에서는 Codex가 지금 실제로 무엇을 보고, 무엇을 참고하며, 무엇을 근거로 판단하는지입니다. 당신이 알지만 이번에 넘겨주지 않은 내용은, 이번 작업의 컨텍스트가 아닙니다.

## 이 장이 특히 중요한 이유

많은 “왜 또 잘못 이해했지” 문제는, 결국 프롬프트가 짧아서가 아니라 컨텍스트를 못 다룬 결과입니다.

흔한 경우:

- 관련 없는 내용을 너무 많이 줌
- 핵심 파일을 넘기지 않음
- 옛 대화가 새 작업을 빗나가게 함
- 충돌하는 정보가 있을 때 무엇이 우선인지 밝히지 않음

## 이 장을 읽는 법

처음 체계적으로 본다면 이 순서를 권합니다.

1. 컨텍스트에 무엇이 포함되는지 먼저 안다
2. 프로젝트·파일·대화 층이 어떻게 나뉘는지 본다
3. 마지막에 우선순위·압축·초점·민감 정보를 본다

## 이 장 탐색

- [프로젝트 컨텍스트](/guide/context/project-context/)
- [파일과 폴더 컨텍스트](/guide/context/file-and-folder-context/)
- [대화 컨텍스트](/guide/context/conversation-context/)
- [컨텍스트 우선순위](/guide/context/context-priority/)
- [압축](/guide/context/compaction/)
- [초점 유지](/guide/context/keep-context-focused/)
- [민감 컨텍스트](/guide/context/sensitive-context/)

이 장이 반복해서 강조하는 것은: 컨텍스트는 “이번에 실제로 본 것”에 달려 있다는 점입니다. 알아야 한다고 생각해도 이번에 제공하지 않았다면 컨텍스트가 아닙니다.


---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 컨텍스트 층위와 읽기 경로만 설명합니다. 사이트 내 링크와 개념 서술을 재검토했으며, 본문은 제품 버전·가격·UI 등 변동하기 쉬운 사실에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
