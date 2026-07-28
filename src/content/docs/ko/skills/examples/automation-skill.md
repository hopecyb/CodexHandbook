---
title: '예시: 자동화 Skill'
description: 반복 검사나 보고서 생성을 Skill로 패키징합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# 예시: 자동화 Skill

## SKILL.md 골격

```md
---
name: daily-report
description: 어제 변경, 테스트 결과, 할 일을 모아 일보 Markdown을 생성합니다. 사용자가 일보, 스탠드업 자료, 진도 요약을 원할 때 사용합니다.
---

## 절차
1. git log(지정 시간 범위)와 CI 상태 요약 읽기
2. 완료 항목, 차단 항목, 내일 계획 나열
3. reports/daily-YYYY-MM-DD.md에 출력
4. 내가 명시적으로 요청하지 않으면 메일이나 메시지를 보내지 말 것

## scripts/
- scripts/collect-metrics.sh(선택)
```

## 관련

- [자동화 일보 사례](/cases/automate-a-daily-report/)
- [예약 작업](/skills/automations/scheduled-tasks/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 반복 요약류 Skill의 예시 골격이며, 현재 Codex/Skills가 담을 수 있는 안정적인 workflow 패턴에 속합니다. 구체 자동화 입구에 묶이지 않습니다.  
**최근 검증:** 2026-07-26
