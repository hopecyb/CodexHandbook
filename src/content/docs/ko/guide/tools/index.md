---
title: 도구
description: Codex Agent가 쓸 수 있는 도구 선택과 특집 — 터미널, 검색, 브라우저, Computer Use 등.
sidebar:
  order: 20
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Agent는 **도구**로 파일을 읽고, 명령을 돌리고, 웹을 검색하고, 브라우저를 엽니다. 도구를 고르고 경계를 분명히 쓰면, 무단 외부망 접속이나 과도한 수정을 줄일 수 있습니다.

여기의 “도구”는 Codex가 작업을 실제로 실행할 때 호출하는 능력입니다. 모든 작업이 대화만으로 끝나지는 않습니다.  
어떤 작업은 파일을 읽고, 어떤 작업은 명령을 돌리고, 어떤 작업은 웹을 찾고, 어떤 작업은 실제 페이지를 봅니다.

## 왜 도구를 먼저 알아야 하나

처음에는 Codex를 순수 대화 조수로만 보기 쉽습니다.  
하지만 허용하면 다음을 할 수 있습니다.

- 프로젝트 파일 읽기
- 문서나 코드 수정
- 터미널 명령 실행
- 공개 웹 검색
- 로컬 페이지를 열어 결과 점검

도구는 부가 지식이 아니라, 보안과 효율의 기초입니다.

## 장 탐색

| 도구 | 페이지 |
|---|---|
| 선택 개요 | [도구 선택](/guide/tools/tool-selection/) |
| 터미널 | [Shell과 터미널](/guide/tools/shell-and-terminal/) |
| 검색 | [Web 검색](/guide/tools/web-search/) |
| 웹페이지 | [브라우저 도구](/guide/tools/browser/) |
| GUI | [Computer Use](/guide/tools/computer-use/) |
| 이미지 | [이미지 생성](/guide/tools/image-generation/) |
| 음성 | [음성 입력과 출력](/guide/tools/voice/) |

파일 읽기/쓰기와 산출물 검증은 [파일과 산출물](/guide/files-and-artifacts/)을 보세요. 확장 도구는 [MCP](/skills/mcp/mcp-overview/)로 연결합니다.

## 권장 읽는 순서

이 장을 처음 볼 때:

1. [도구 선택](/guide/tools/tool-selection/)으로 작업별 우선 도구를 봄
2. [Shell과 터미널](/guide/tools/shell-and-terminal/)로 명령 실행 위험을 봄
3. 검색·브라우저 등, 손에 있는 작업에 맞춰 계속

도구가 Codex가 어떻게 손을 쓸지 정하고, 당신은 어떤 도구를 쓰고 무엇을 쓰면 안 되는지 말할 책임이 있습니다.

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 도구 특집 탐색이며, 터미널·검색·브라우저·Computer Use·이미지·음성 등 장 진입점을 사이트 내 목차와 교차 확인했습니다. 본문은 “도구가 실행 범위와 위험에 영향을 준다”만 설명하며, 고정 지원 매트릭스를 선언하지 않습니다.  
**최근 검증:** 2026-07-26
