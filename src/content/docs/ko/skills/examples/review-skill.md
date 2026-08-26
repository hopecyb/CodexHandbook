---
title: '예시: 검토 Skill'
description: pr-review 기반 Skill 예시. 팀 재사용이나 조정에 적합합니다.
locale: ko
source_locale: zh-CN
source_revision: 5fb154c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 예시: 검토 Skill

이 예시는 [첫 Skill 만들기](/ko/skills/create-your-first-skill/)의 `pr-review`와 대응하며, 팀 필요에 맞게 조정할 수 있습니다.

## SKILL.md

```md
---
name: pr-review
description: git diff를 검토하고 차단 이슈, 테스트 공백, 스타일 제안을 나열합니다. 사용자가 review, 검토, 병합 전 검사를 말할 때 사용합니다. 새 기능 작성에는 쓰지 않습니다.
---

# PR 검토

## 입력
- 기본 비교 브랜치: main(없으면 기본 브랜치)

## 절차
1. 변경 파일과 변경 유형 나열(기능/수정/리팩터/문서)
2. 각 논리 변경에 대해: 테스트 부족 여부, API 파괴 여부
3. 비밀, 디버그 로그, 과도한 무관 diff 포함 여부 확인
4. 출력: 🔴 차단 / 🟡 제안 / 🟢 통과

## 금지
- git push 하지 말 것
- 논의하지 않은 공개 API를 수정하지 말 것
```

## 시험

```text
$pr-review 현재 커밋되지 않은 변경을 검토해 주세요
```
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** diff를 검토하고 구조화된 결론을 출력하는 것은 현재 Codex의 전형적 사용 장면입니다. 이 페이지는 예시성 `SKILL.md` 골격이며, 자주 바뀌는 UI에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
