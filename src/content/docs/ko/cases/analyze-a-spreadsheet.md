---
title: 스프레드시트 분석하기
description: 표 데이터를 업로드하거나 참조하여 요약과 인사이트를 얻습니다.
locale: ko
source_locale: zh-CN
source_revision: fa6b8e1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 스프레드시트 분석하기

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 창작자 / 비즈니스 |
| 클라이언트 | App |
| 예상 소요 시간 | 30–60분 |

## 1. 목표와 배경

**목표:** CSV/Excel을 정제·요약하고 시각화 제안을 합니다.

**성공 기준:** 결론을 재현할 수 있고, 핵심 숫자를 원본 행/열까지 추적할 수 있어야 합니다.

## 2. 권장 프롬프트

```text
입력：@data/sales-q1.csv
목표：지역별 매출 합계, 전월 대비, Top 3 제품을 집계하고, 이상치를 표시하세요.
제약：원본 파일을 수정하지 마세요. summary.md 와 선택적 chart 설명을 출력하세요.
인수：summary의 각 숫자에 계산 방식 또는 참조 열 이름을 명시하세요.
```

## 3. 검증

- 요약 숫자 2–3개를 표본 재확인
- PII가 로그에 기록되거나 외부로 나가지 않았는지 확인

## 4. 관련

- [표와 스프레드시트](/ko/guide/files-and-artifacts/tables-and-spreadsheets/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 Codex use cases에는 여전히 “Query tabular data”, “Clean and prepare messy data”가 포함됩니다. 이 페이지 예시는 CSV/Excel에 대한 읽기 전용 정제·요약·이상 분석에 초점을 맞추며, 핵심 숫자를 원본 필드까지 추적할 수 있도록 요구해 현재 공식 시나리오와 일치합니다.  
**최근 검증:** 2026-07-26
