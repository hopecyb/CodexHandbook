---
title: 일일 보고서 자동화
description: 반복되는 요약 작업을 재사용 가능한 스크립트 또는 Skill로 고정합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# 일일 보고서 자동화

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 팀 |
| 클라이언트 | CLI |
| 예상 소요 시간 | 1–2시간(첫 버전) |

## 1. 목표와 배경

**목표:** 매일 변경 요약, 테스트 결과, 할 일 목록을 자동 생성합니다.

**성공 기준:** 한 명령 또는 Skill로 고정 형식 Markdown을 산출하고, 실패 시 명확한 종료 코드가 있어야 합니다.

## 3. 권장 프롬프트

```text
목표：어제부터 지금까지의 일일 보고서 Markdown을 생성하세요.
내용：git log 요약, CI 상태(읽을 수 있으면), 열린 PR 목록.
출력：reports/daily-YYYY-MM-DD.md
제약：git만 읽기. push하지 마세요. 반복 실행을 위해 scripts/generate-daily.sh 를 제공하세요.
```

## 4. 정착

- [자동화 Skill 예시](/skills/examples/automation-skill/)
- [예약 작업](/skills/automations/scheduled-tasks/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Developers의 현재 Codex use cases에는 여전히 “Automate bug triage”, “Turn feedback into actions” 등 반복 가능한 자동화 시나리오가 포함됩니다. 이 페이지는 일일 보고서를 “고정 형식 Markdown + 명확한 종료 코드 + 재사용 가능한 스크립트 또는 Skill”로 정의하며, 특정 통합에 의존하지 않는 안정적인 자동화 워크플로 패턴입니다.  
**최근 검증:** 2026-07-26
