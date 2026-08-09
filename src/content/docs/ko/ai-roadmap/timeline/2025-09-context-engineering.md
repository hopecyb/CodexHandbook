---
title: "Context Engineering(컨텍스트 엔지니어링)"
date: 2025-09-29
year: 2025
summary: "Prompt Engineering이 “어떻게 물을까”에 초점을 둔다면 Context Engineering은 “모델에게 무엇을 보여줄까”를 설계한다. 이력, 검색 지식, 도구 출력을 체계적으로 구성해 모델이 올바른 정보 위에서 추론하게 한다."
phase: emerging
trend: rising
signal: well-calibrated
tags: [context-engineering, agent, memory, context-window, llmops]
authored_by: ai-assisted
locale: ko
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-09
---

# Context Engineering(컨텍스트 엔지니어링)

- 주요 날짜:
  - Application-engineering inflection: 2025-09-01
- 공식 참고 자료:
  - https://platform.openai.com/docs/guides/conversation-state
  - https://platform.openai.com/docs/guides/retrieval
- 참고: 이 항목은 컨텍스트 설계가 Prompt Engineering과 구분되는 핵심 역량으로 인식되기 시작한 단계를 기록한다.

## 무엇인가

Context Engineering은 모델에 전달할 대화 이력, 시스템 지시, 검색 결과, 파일, 도구 출력, 메모리를 선택하고 압축하며 순서를 정하고 갱신하는 설계다.

## AI 애플리케이션 엔지니어링을 어디에서 어디로 옮겼나

AI 애플리케이션은 “주로 프롬프트 문구를 다듬는” 단계에서 “작업 실행 환경으로서 전체 컨텍스트를 설계하는” 단계로 이동했다.

## 현재 단계

현재 이 항목은 `emerging` 단계로 본다.

신흥이지만 빠르게 중요해지고 있다. RAG, Agent 메모리, 장문 처리, 멀티턴 작업에서는 모델 성능보다 컨텍스트 품질이 결과를 좌우하는 경우가 많다.

## 대체할 수 있는 것

긴 기록이나 문서를 그대로 밀어 넣는 거친 방식을 대체한다. 정보 선택, 압축, 배치가 명시적인 설계 대상이 된다.

## 그것을 대체할 수 있는 것

자동 컨텍스트 관리, 장기 기억 시스템, 상태를 가진 Agent 런타임에 흡수될 수 있다. 다만 “무엇을 보여줄지”를 결정하는 사상은 남는다.
