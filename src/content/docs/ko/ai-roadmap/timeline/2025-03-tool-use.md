---
title: "Tool Use(도구 사용)"
description: "도구 사용에는 도구 선택, 인수 구성, 실행, 결과 읽기, 다음 단계 결정이 포함됩니다. 한 번의 호출이 성공했다고 전체 작업이 끝난 것은 아닙니다. 실행 오류와 업무 검증에서 발견된 문제도 구분해야 합니다."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "아래 사건과 프로젝트 설명은 1차 출처와 대조했습니다. 학습 조언은 작성자의 판단이며 실제 제품 실행 검증으로 표시하지 않았습니다."
  evidence:
    - label: "에이전트용 새 도구 출시 발표"
      href: "https://openai.com/index/new-tools-for-building-agents/"
locale: ko
source_locale: zh-CN
source_revision: 'efd508a'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

## 확인 가능한 사건과 범위

**날짜: 2025년 3월 11일 · 유형: 제품 출시.** OpenAI는 Responses API, 내장 도구, Agents SDK를 포함한 에이전트용 새 도구를 발표했습니다. 이 발표는 특정 업체의 제품 이정표이지 모델의 도구 사용이 발명된 날짜가 아닙니다.

출처: [에이전트용 새 도구 출시 발표](https://openai.com/index/new-tools-for-building-agents/). 확인일은 2026년 9월 18일입니다. 출처의 게시일과 이 페이지의 확인일은 의미가 다릅니다.

## 어떤 문제를 해결하는가

도구 사용에는 도구 선택, 인수 구성, 실행, 결과 읽기, 다음 단계 결정이 포함됩니다. 한 번의 호출이 성공했다고 전체 작업이 끝난 것은 아닙니다. 실행 오류와 업무 검증에서 발견된 문제도 구분해야 합니다.

## 학습 권장 사항과 적용 범위

다음 내용은 이 사이트의 교육적 판단이며 업계 보급률이나 효과를 측정한 결과가 아닙니다.

반복 가능한 검사는 용도가 명확한 도구에 맡기고 종료 코드, 출력, 복구 방법을 남기세요. 먼저 수동 절차가 작동함을 확인한 뒤 예약 실행과 알림을 고려하세요.

## 실습

[다섯 가지 실패 복구 실습](/ko/guide/reference/troubleshooting/failure-recovery-lab/): 여러 오류를 재현하고 변경 전 로그를 읽은 뒤 변수 하나만 수정하여 변경 후 결과를 확인합니다. 이 실습은 로컬 스크립트를 사용하며 발표에 나온 API를 호출할 필요가 없습니다.

[로드맵과 날짜 기준으로 돌아가기](/ko/ai-roadmap/)
