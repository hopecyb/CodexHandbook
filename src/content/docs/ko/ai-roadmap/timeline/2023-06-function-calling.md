---
title: "Function Calling(함수 호출)"
date: 2023-06-13
year: 2023
summary: "모델은 기본적으로 텍스트 생성기라서 행동을 설명할 수는 있지만 실행하지는 못한다. Function Calling은 모델이 필요한 도구를 고르고 구조화된 인자를 채우는 “능력 메뉴”를 제공했다. 평범한 답변이 실행 가능한 행동으로 바뀌기 시작한 지점이다."
phase: mainstream
trend: stable
signal: well-calibrated
tags: [function-calling, tools, api, orchestration, reliability]
authored_by: ai-assisted
locale: ko
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-09
---

# Function Calling(함수 호출)

- 주요 날짜:
  - OpenAI function calling release: 2023-06-13
- 공식 참고 자료:
  - https://openai.com/index/function-calling-and-other-api-updates/
- 참고: 이 항목은 Function Calling이 API와 제품 설계에서 구조화된 도구 연결의 출발점이 된 시점을 기록한다.

## 무엇인가

Function Calling은 모델이 사용할 수 있는 함수나 API 스키마를 보고 어떤 함수를 호출할지, 어떤 인자를 전달할지 구조화된 데이터로 출력하게 하는 방식이다. 모델이 직접 외부 처리를 수행하는 것이 아니라 실행 의도를 애플리케이션에 넘긴다.

## AI 애플리케이션 엔지니어링을 어디에서 어디로 옮겼나

AI 애플리케이션은 “모델이 자연어로 조언하는” 단계에서 “모델이 시스템 흐름으로 들어갈 수 있는 구조화 명령을 만드는” 단계로 이동했다. 예약, 검색, 데이터 갱신, 내부 API 연결이 대화 바깥의 실제 처리와 이어졌다.

## 현재 단계

현재 이 항목은 `mainstream` 단계로 본다.

이미 주류 메커니즘이다. 독립 기능으로도 중요하지만 지금은 Tool Use와 Agent 실행 기반의 핵심 부품으로 흡수되고 있다.

## 대체할 수 있는 것

자연어 출력을 정규식이나 취약한 파서로 읽어 외부 처리를 연결하던 방식을 상당 부분 대체했다.

## 그것을 대체할 수 있는 것

더 넓은 Tool Use, 계획 가능한 Agent, 실행 하네스에 흡수될 가능성이 크다. 앞으로는 함수 호출보다 권한, 상태, 관측, 실패 복구를 포함한 실행 단위가 중심이 될 수 있다.
