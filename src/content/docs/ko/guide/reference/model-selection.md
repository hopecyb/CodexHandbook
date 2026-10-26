---
title: ChatGPT와 Codex 모델 선택
description: 대화, 글쓰기, 스프레드시트, 코딩, 조사에 맞는 모델과 추론 강도를 선택하고 요금제와 실제 사용량을 평가합니다.
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: 공식 모델, Chat 추론, 요금제 문서를 확인했습니다. 작업별 추천은 편집상의 조언이며 모델별 성공률, 속도, 비용을 실측한 결과가 아닙니다.
  evidence:
    - label: Work와 Codex 모델
      href: https://learn.chatgpt.com/docs/models
    - label: Chat 모델과 생각 수준
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: 요금제와 사용량
      href: https://learn.chatgpt.com/docs/pricing
locale: ko
source_locale: zh-CN
translation_status: reviewed
reviewed_at: '2026-10-26'
translated_at: 2026-10-25
source_revision: '20eb508'
---

**복잡한 작업에는 GPT‑6.1 Sol을, 명확하고 작은 작업에는 Luna를 먼저 사용해 보세요. 결과 요구가 엄격한 어려운 문제라면 Astra를 고려하세요. 일반 Chat에서는 Instant, Thinking, Pro 중에서 선택합니다.** 먼저 사용하는 제품을 확인한 뒤 해당 표를 참고하세요.

[Work / Codex](#work-codex) · [일반 Chat](#chat) · [요금제와 가격](/ko/chatgpt-pricing/) · [실제 사용량 기록](/ko/guide/quality/usage-time-and-model-choice/)

:::note[적용 범위 · 2026-10-24]
모델, 설정, 한도는 계정, 클라이언트, 작업 공간, 배포 단계에 따라 다릅니다. 이 문서는 특정 날짜 기준의 참고 자료입니다. 추천은 시작점이며 계정의 접근 권한을 보장하지 않습니다. Chat, Work, Codex의 메뉴와 사용량 규칙을 각각 확인하세요.
:::

<span id="work-codex"></span>

## Work / Codex: 작업부터 판단하기

아래 시나리오는 편집상의 추천입니다. 클라이언트가 지원하는 기본 추론 강도로 시작하세요. 더 강한 모델을 고르기 전에 입력과 작업 범위를 확인하세요.

| 작업 | 추천 시작점 | 추론 강도를 높이거나 모델을 바꿀 때 | 실습과 검증 |
|---|---|---|---|
| 필드 추출, 형식 변환, 간단한 문장 수정 | GPT‑6 Luna | 입력이 명확한데도 필드 누락이나 경계 조건 오류가 남으면 Sol 사용 | [사용량과 재작업 기록](/ko/guide/quality/usage-time-and-model-choice/) |
| 여러 자료를 바탕으로 글쓰기 | GPT‑6.1 Sol | 자료 간 충돌을 처리하지 못하거나 요구 사항을 반복해서 누락하면 Astra 검토 | [글 작성하기](/ko/cases/write-an-article/) |
| 매출 데이터 분석과 주간 보고서 작성 | GPT‑6.1 Sol | 환불 처리, 중복 제거, 직전 기간 대비 증감률 계산에 오류가 남으면 추론 강도를 높이고 별도로 계산해 결과를 검증 | [매출 보고서](/ko/cases/analyze-a-spreadsheet/) |
| 버그 수정 또는 여러 파일 변경 | GPT‑6.1 Sol | 파일 간 의존 관계를 파악하기 어렵거나 수정이 반복해서 실패하면 Astra 검토 | [버그 수정과 검증](/ko/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| 엄격한 요구 사항에 맞춰 여러 출처 조사 | GPT‑6.1 Sol, 어려운 문제는 Astra도 검토 | 상충하는 증거를 종합하지 못하거나 제약 조건을 반복해서 놓치면 추론 강도를 높임 | [결과 확인](/ko/guide/quality/) |

## 모델별 특징과 절충점

| 모델 | 주요 역할 | 절충점과 한계 |
|---|---|---|
| GPT‑6 Luna | 명확하고 반복 가능하며 빈번한 작업을 효율적으로 처리 | 작은 작업에 유용하며 복잡한 판단은 더 꼼꼼한 확인이 필요 |
| GPT‑6.1 Sol | 복잡한 작업에서 능력과 비용의 균형 | 공식 설명상 더 낮은 비용으로 Astra에 가까운 성능을 제공하지만, 모든 작업에서 성능이 동일하지는 않음 |
| GPT‑6 Astra | 여러 단계에 걸친 까다로운 작업을 위한 가장 강력한 선택지 | 결과 품질이 가장 중요할 때 검토. 간단한 작업에서는 사용량 증가의 이점이 작을 수 있음 |
| GPT‑6 Sol 및 GPT‑5.6 계열 | 클라이언트에 남아 있을 수 있는 이전 모델 | 검증된 흐름이 잘 작동하면 유지하고 새 작업에서는 현재 추천과 비교 |

[공식 모델 가이드](https://learn.chatgpt.com/docs/models)는 6.1 Sol을 Work와 Codex에 명시합니다. 일반 Chat에도 같은 이름의 선택지가 있다고 추정하지 마세요. Work/Codex 모델 설명과 Chat의 GPT‑6 표시는 각각의 제품에서 해석해야 합니다.

<span id="chat"></span>

## 일반 Chat: 생각 수준 선택하기

| 선택지 | 추천 용도 | 절충점 |
|---|---|---|
| Instant | 일상 질문, 번역, 짧은 문장 수정 | 응답 속도 우선 |
| Thinking · Medium | 학습, 선택지 비교, 일반 분석 | 신중한 분석의 시작점 |
| Thinking · High | 수학, 조건이 많은 의사 결정, 복잡한 코드 질문 | 어려운 문제에 더 많은 생각 시간 사용 |
| Extra High | 세심한 확인이 필요한 특히 어려운 문제 | 요금제에서 지원하는 범위에서 필요할 때 사용 |
| Pro / GPT‑6 Pro | 어려운 작업과 긴 작업 흐름 | Astra 기반이며 요금제와 한도에 따라 이용 가능 |

확인 시점의 Chat 문서는 Plus에 Medium과 High를, 상위 요금제에 Extra High와 Pro를 명시합니다. Free / Go의 Think가 유료 요금제의 같은 이름을 가진 기능과 동등한 능력을 제공한다고 보지 마세요. Plus / Pro의 Instant에 “깊이 생각해”라고 요청해도 생각 수준이 자동으로 올라가지 않습니다. 메뉴에서 선택하세요. [공식 Chat 문서](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## 추론 강도를 높이거나 낮출 때

- 결과가 검수 기준을 충족하면 설정을 유지하거나 같은 작업에 더 가벼운 설정을 시험합니다.
- 자료나 목표가 부족하면 먼저 입력을 보완합니다. 추론을 늘려도 없는 증거를 채울 수는 없습니다.
- 누락이나 논리 오류가 반복되면 입력을 고정하고 강도 또는 모델을 한 단계씩 바꿉니다.
- 높은 설정에서도 실패하면 범위를 줄이고 도구, 권한, 검증 방법을 확인합니다.

모델과 추론 강도는 별개의 선택입니다. 강도가 높을수록 일반적으로 시간과 Token이 더 듭니다. 모델과 클라이언트별 지원 설정을 확인하고 Chat 설정을 Codex에 그대로 적용하지 마세요. [모델과 추론 기초](/ko/guide/foundations/models-and-reasoning/)

## 다른 요금제가 필요한가요?

가끔 사용한다면 무료 접근부터 시험하세요. 글쓰기, 분석, 코딩을 자주 한다면 Plus를 검토하세요. 한도에 자주 도달하고 실제로 더 높은 성능이나 용량이 필요할 때 Pro를 비교하세요. Go는 필요한 기능과 현지 가격 차이에 따라 판단합니다.

이는 판단 순서이며 보편적인 가성비 순위가 아닙니다. **Pro 요금제에서도 모델 사용량에는 한도가 있습니다.** 구독료, 추가 크레딧, API 요금을 별도로 확인하세요. 단가 비율이 전체 작업의 절감 비율은 아닙니다.

[요금제 선택과 가격 출처](/ko/chatgpt-pricing/) · [계정, 요금제, 접근 권한](/ko/guide/getting-started/account-plans-and-access/)

## 가성비를 평가하는 방법

동일한 입력, 도구 사용 범위, 검수 기준으로 비교하세요. 대기, 실패, 재시도, 사람의 검토, 재작업을 각각 기록하세요. 응답 속도만 최적화하기보다 기준을 안정적으로 만족하는 가장 가벼운 설정을 선택하세요.

[사용량 기록을 내려받아 작성](/ko/guide/quality/usage-time-and-model-choice/)하거나 [프롬프트 비교 실습 세 가지](/ko/prompts/comparison-lab/)를 활용하세요. 기존 프롬프트 실험은 실제 모델 이름을 기록하지 않았으므로 **모델 순위의 근거로 쓸 수 없습니다**.

## 모델을 사용할 수 없다면

Chat, Work, Codex 중 어디에 있는지 먼저 확인한 뒤 클라이언트 버전, 요금제, 작업 공간 권한, 사용 한도가 초기화되는 시점을 확인하세요. 사용 가능한 모델로 작업 범위를 줄이거나 진행 상황을 저장하고 기다리세요. 모델 이름을 선택한다고 접근 권한이 생기지는 않습니다.

[접근 문제 해결](/ko/guide/getting-started/account-plans-and-access/) · [문제 해결](/ko/guide/reference/troubleshooting/)

## 출처와 업데이트

제품에 관한 사실은 위 공식 자료를 바탕으로 하며 작업별 추천은 편집상의 판단입니다. 이 페이지에는 모델 성능 실험이 없습니다. 가격 기록은 가격 페이지에서 별도로 관리하므로 실제 결제 정보를 확인하세요.

- 2026-10-24: Chat과 Work/Codex를 구분한 첫 가이드. 실습, 사용량 기록, 가격 출처 링크를 추가했습니다.
