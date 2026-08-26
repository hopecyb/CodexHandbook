---
title: "Multi-agent(다중 에이전트 협업)"
date: 2025-06-13
year: 2025
summary: "단일 Agent는 컨텍스트 길이와 순차 실행에 제한된다. Multi-agent 시스템은 복잡한 작업을 조사, 분석, 작성, 검토 같은 역할로 나누고 병렬로 수행한다. 긴 워크플로와 복잡한 문제 처리의 한계를 크게 높인다."
phase: emerging
trend: rising
signal: well-calibrated
tags: [multi-agent, agent, orchestration, collaboration, llmops]
authored_by: ai-assisted
locale: ko
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: df11adc
---

# Multi-agent(다중 에이전트 협업)

- 주요 날짜:
  - Application-engineering inflection: 2025-06-01
- 공식 참고 자료:
  - https://openai.github.io/openai-agents-python/multi_agent/
  - https://www.anthropic.com/engineering/built-multi-agent-research-system
- 참고: 이 항목은 다중 Agent 협업이 연구 실험에서 실무 워크플로 설계로 확장된 단계를 기록한다.

## 무엇인가

Multi-agent는 여러 Agent에 서로 다른 역할, 컨텍스트, 도구, 판단 책임을 부여해 하나의 작업을 협업으로 해결하는 설계다. 병렬 조사, 전문가 검토, 분담 작성, 비판자 역할 등에 쓰인다.

## AI 애플리케이션 엔지니어링을 어디에서 어디로 옮겼나

AI 애플리케이션은 “단일 Agent가 순차적으로 처리하는” 단계에서 “여러 역할이 병렬로 협력하는” 단계로 이동했다. 탐색 범위, 전문성, 검증 밀도를 높이기 쉬워졌다.

## 현재 단계

현재 이 항목은 `emerging` 단계로 본다.

신흥이며 상승 중이다. 효과는 크지만 작업 분해, 통신 비용, 중복 작업, 결론 통합, 실패 책임 범위에는 아직 설계 과제가 있다.

## 대체할 수 있는 것

모든 일을 하나의 프롬프트나 단일 Agent에 밀어 넣는 긴 워크플로의 일부를 대체한다.

## 그것을 대체할 수 있는 것

더 엄격한 오케스트레이션, 워크플로 엔진, 평가가 붙은 Harness에 흡수될 수 있다. 앞으로는 “여러 Agent”보다 역할이 있는 실행 그래프로 표현될 가능성이 있다.
