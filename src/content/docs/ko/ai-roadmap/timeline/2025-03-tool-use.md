---
title: "Tool Use(도구 사용)"
date: 2025-03-11
year: 2025
summary: "Tool Use는 완전히 새로운 개념이라기보다 Function Calling을 시스템 수준으로 일반화한 것이다. Function Calling이 “어떻게 호출할까”라면 Tool Use는 “무엇을 호출할 수 있을까”를 넓힌다. 검색, 코드 실행, 브라우저, 데이터베이스가 포함된다."
phase: emerging
trend: rising
signal: well-calibrated
tags: [tool-use, tools, agent, orchestration, function-calling]
authored_by: ai-assisted
locale: ko
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: 902c66c
---

# Tool Use(도구 사용)

- 주요 날짜:
  - Engineering inflection: 2025-03-11 (Responses API and built-in tools)
- 공식 참고 자료:
  - https://openai.com/index/new-tools-for-building-agents/
  - https://platform.openai.com/docs/guides/tools
- 참고: 이 항목은 내장 도구와 Agent 구축 도구 공개가 도구 사용을 일반적인 애플리케이션 설계 요소로 끌어올린 시점을 기록한다.

## 무엇인가

Tool Use는 모델이 외부 능력을 선택하고 호출하며 결과를 읽고 다음 행동에 반영하는 설계 패턴이다. 함수 호출보다 넓으며 검색, 파일 처리, 코드 실행, 브라우저 조작, 데이터베이스 작업을 포함한다.

## AI 애플리케이션 엔지니어링을 어디에서 어디로 옮겼나

AI 애플리케이션은 “단일 함수를 구조화해 호출하는” 단계에서 “목표에 따라 여러 도구를 조합해 실행하는” 단계로 이동했다. 모델은 대화 상대를 넘어 외부 환경을 조작하는 실행 주체에 가까워졌다.

## 현재 단계

현재 이 항목은 `emerging` 단계로 본다.

주류로 향하는 신흥 단계다. 주요 API와 Agent 프레임워크에서는 중심 기능이 되고 있지만 신뢰성과 권한 설계는 여전히 핵심 과제다.

## 대체할 수 있는 것

사람이 검색, 복사, 붙여넣기, 실행, 확인을 수동으로 이어 붙이던 워크플로의 일부를 대체한다.

## 그것을 대체할 수 있는 것

Harness Engineering이나 Agent 런타임에 흡수되어 도구 단위가 아니라 상태, 체크포인트, 실패 복구를 가진 실행 시스템으로 다뤄질 것이다.
