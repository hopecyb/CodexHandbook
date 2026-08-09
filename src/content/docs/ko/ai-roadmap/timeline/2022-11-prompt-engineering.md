---
title: "Prompt Engineering(프롬프트 엔지니어링)"
date: 2022-11-30
year: 2022
summary: "대규모 언어 모델은 본질적으로 확률적이어서 같은 프롬프트도 다른 답을 낼 수 있다. Prompt Engineering은 역할, 형식, 제약을 설계해 변동성을 줄이고 출력을 더 안정적이고 제어 가능하게 만든다. Agent, Function Calling, Skills 같은 이후 패러다임의 기반이기도 하다."
phase: mainstream
trend: absorbed
signal: well-calibrated
tags: [prompt-engineering, llm, prompting, workflow, reliability]
authored_by: ai-assisted
locale: ko
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-09
---

# Prompt Engineering(프롬프트 엔지니어링)

- 주요 날짜:
  - Mainstream milestone: 2022-11-30 (ChatGPT public launch)
- 공식 참고 자료:
  - https://platform.openai.com/docs/guides/prompt-engineering
  - https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- 참고: 이 항목은 Prompt Engineering이 AI 애플리케이션 엔지니어링의 기초 방법론이 된 시점과 의미를 기록한다. 구체적 템플릿과 기법은 Guide에서 다룬다.

## 무엇인가

Prompt Engineering은 입력 지시를 체계적으로 설계해 모델의 제어 가능성, 일관성, 작업 완료율을 높이는 엔지니어링 접근법이다. 멋진 문장을 쓰는 일이 아니라 역할 정의, 컨텍스트 구성, 출력 제약, 단계 분해, 피드백 반복을 재사용 가능한 프로세스로 만드는 일이다.

## AI 애플리케이션 엔지니어링을 어디에서 어디로 옮겼나

AI 애플리케이션은 “자연어로 물어보고 좋은 결과를 기대하는” 단계에서 “구조화된 입력을 설계해 목표 출력을 안정적으로 얻는” 단계로 이동했다. 팀은 템플릿, 패턴, 평가 기준을 축적하며 모델 상호작용을 재현 가능하게 만들었다.

## 현재 단계

현재 이 항목은 `mainstream` 단계로 본다.

거의 모든 LLM 애플리케이션의 기본 역량이 되었다. 동시에 모델이 강해질수록 과도하게 세세한 지시는 역효과가 날 수 있다. 지금은 구조화 출력, Tool Calling, 워크플로 오케스트레이션, Skills 같은 상위 메커니즘에 흡수되고 있다.

## 대체할 수 있는 것

모델을 무작위 검색창이나 채팅 상자로 다루던 초기 방식을 대체했다. 팀에서는 “누가 더 잘 묻는가”라는 암묵지를 “팀이 작업과 출력 기준을 어떻게 정의하는가”로 바꾸었다.

## 그것을 대체할 수 있는 것

완전히 사라지기보다는 더 높은 추상화로 감싸질 가능성이 크다. 자동 프롬프트 최적화나 제약된 모델 인터페이스가 성숙해도 핵심 아이디어는 그 안에 남는다.
