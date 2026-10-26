---
title: "Function Calling(함수 호출)"
description: "모델은 호출하려는 함수 이름과 구조화된 인수를 출력할 수 있고, 애플리케이션은 이를 검증한 뒤 실행 여부를 결정합니다. 인수 생성, 권한 획득, 실제 실행은 서로 다른 단계입니다."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "아래 사건과 프로젝트 설명은 1차 출처와 대조했습니다. 학습 조언은 작성자의 판단이며 실제 제품 실행 검증으로 표시하지 않았습니다."
  evidence:
    - label: "함수 호출 출시 발표"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: ko
source_locale: zh-CN
source_revision: 'c362c48'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

## 확인 가능한 사건과 범위

**날짜: 2023년 6월 13일 · 유형: 제품 출시.** OpenAI는 당시 Chat Completions API에 함수 호출 기능을 도입한다고 발표했습니다. 이 날짜는 특정 업체의 API 출시일이지 모든 도구 호출의 시작점이 아닙니다.

출처: [함수 호출 출시 발표](https://openai.com/index/function-calling-and-other-api-updates/). 확인일은 2026년 9월 18일입니다. 출처의 게시일과 이 페이지의 확인일은 의미가 다릅니다.

## 어떤 문제를 해결하는가

모델은 호출하려는 함수 이름과 구조화된 인수를 출력할 수 있고, 애플리케이션은 이를 검증한 뒤 실행 여부를 결정합니다. 인수 생성, 권한 획득, 실제 실행은 서로 다른 단계입니다.

## 학습 권장 사항과 적용 범위

다음 내용은 이 사이트의 교육적 판단이며 업계 보급률이나 효과를 측정한 결과가 아닙니다.

검증할 수 있는 입력, 명확한 권한 범위, 실패 응답을 우선 설계하세요. JSON 형식이 올바르다고 해서 인수의 의미가 맞거나 외부 시스템에 쓰기가 허용된 것은 아닙니다. 과거 출시 발표의 모델 이름과 API 예시는 현재 구성 지침으로 사용하지 마세요.

## 실습

[Issue 분류 제안 드라이런](/ko/cases/use-cases/team-automation/issue-triage-suggestions/): 합성 Issue에 대한 구조화된 제안이 입력과 연결되는지 확인하고, 사람이 검토할 대기열을 유지합니다. 이 실습은 데이터 경계를 검증하며, 과거 API를 호출하거나 Issue에 라벨을 적용하지 않습니다.

[로드맵과 날짜 기준으로 돌아가기](/ko/ai-roadmap/)
