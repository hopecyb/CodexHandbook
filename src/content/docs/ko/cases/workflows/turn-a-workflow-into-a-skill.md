---
title: 워크플로를 Skill로 정착하기
description: 세 번째 반복되는 흐름은 Skill로 쓸 가치가 있습니다—트리거, 설명, 인수를 하나로 묶습니다.
locale: ko
source_locale: zh-CN
source_revision: bc54539
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

같은 종류의 작업(릴리스 검사, 문서 동기화, 보안 스캔)을 **세 번째**로 프롬프트를 복사·붙여넣기 해 끝낼 때면, [Skill](/ko/skills/overview/)을 고려할 시점입니다. 이 장은 [워크플로 방법](/ko/cases/workflows/)과 확장 체계를 잇습니다.

## 이 글이 해결하는 문제

- 언제 프롬프트 템플릿에서 Skill로 올릴지
- Skill에 어떤 부분(설명, 리소스, 스크립트)이 들어가야 하는지
- 팀과 어떻게 공유하고 버전 관리할지

## 정착에 적합한 신호

- 고정 단계 + 고정 인수 체크리스트
- 저장소 내 템플릿이나 스크립트를 참조해야 함
- 여러 사람이 일관된 동작이 필요함
- 관련 작업에서 모델이 그 흐름을 **자동으로 떠올리기**를 원함

정착할 필요 없음: 일회성 탐색, 그날 컨텍스트에 강하게 의존하는 작은 수정.

## 최소 실행 방법

1. **SKILL.md를 분명히 씀**: 언제 트리거할지, 입출력, 금지 사항
2. **`references/` 첨부**: checklist, 샘플 diff
3. **선택 `scripts/`**: 반복 실행 가능한 검증 명령([명령 규칙](/ko/guide/customization/rules/command-rules/)과 일치)
4. **저장소 README 또는 AGENTS.md에** Skill 이름을 언급
5. **2–3회 시험 실행** 후 `verified`로 표시

입문: [첫 Skill 만들기](/ko/skills/create-your-first-skill/)

## 권장 워크플로

```text
성공 사례에서 프롬프트와 인수 항목 추출
    → Skill 본문으로 정리(구어체 삭제, 제약 유지)
    → 트리거 설명 추가(「병합 전」「릴리스 전」)
    → 팀 PR review
    → 저장소 약속 examples/ 디렉터리, 팀 플러그인 또는 내부 스킬 라이브러리에 기록
```

[흐름을 자동화로 만들기](/ko/skills/automations/scheduled-tasks/)와 비교하면: Skill은 **대화형 안내**에 가깝고, Automation은 **예약/무인**에 가깝습니다.

## 흔한 실수

- Skill이 너무 길어 `AGENTS.md`를 읽는 것보다 힘듦
- 인수 체크리스트가 없어 실행 품질이 표류
- 스크립트가 로컬 시크릿을 필요로 하는데 SECURITY 설명이 없음
- Hooks 규칙과 중복되며 모순

## 보안 경계

- [Skill 보안과 버전](/ko/skills/security/) 참고
- 팀 Skill은 확장 승인 목록에 넣어야 합니다([Plugin과 MCP 위험](/ko/guide/team-enterprise/security/plugin-and-mcp-risk/) 참고)

## 인수 체크리스트

- [ ] 새 동료가 Skill만으로 작업을 한 번 완료할 수 있음
- [ ] 트리거 조건이 명확하고 오탐이 많지 않음
- [ ] 버전 또는 CHANGELOG가 있음(팀 수준)
- [ ] 원본 워크플로 문서와 교차 링크

## 참고 출처
- 저장소 내 [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md)와 [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE  
**검증 근거:** OpenAI Developers의 현재 공개 “Save workflows as skills” 관련 use cases와, 이 핸드북에서 이미 검증된 Skills, 자동화, 명령 규칙, 확장 위험 장을 교차 확인했습니다. 페이지 내용은 “반복 흐름을 언제 Skill로 정착할지, 설명과 인수를 어떻게 조직할지”라는 안정적인 방법으로 한정됩니다.  
**최근 검증:** 2026-07-26
