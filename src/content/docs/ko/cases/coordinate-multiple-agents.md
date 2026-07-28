---
title: 여러 Agent 조율하기
description: 병렬 탐색, 분업 실행, 결과 병합의 협업 사례입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# 여러 Agent 조율하기

## 메타 정보

| 필드 | 내용 |
|---|---|
| 대상 독자 | 개발자 / 팀 |
| 클라이언트 | 데스크톱 App |
| 예상 소요 시간 | 작업에 따라 다름 |

## 1. 목표와 배경

**목표:** 병렬 가능한 하위 문제를 여러 Agent에 나누고, 사람이 결론을 병합합니다.

**성공 기준:** 각 하위 Agent에 독립된 완료 정의가 있고, 같은 파일을 서로 덮어쓰지 않아야 합니다.

## 2. 권장 패턴

### 병렬 탐색, 사람 선택

```text
Agent 1：방안 A의 장단점과 작업량
Agent 2：방안 B의 장단점과 작업량
(선택 후, 단일 Agent로 실행)
```

### 작업 트리 격리

서로 다른 Agent가 다른 [git worktree](/guide/desktop-app/worktrees/)에서 다른 브랜치를 수정하고, 마지막에 사람이 병합합니다.

## 3. 조율 규칙(AGENTS.md에 쓰기를 권장)

- 각 Agent의 디렉터리 경계를 명확히 합니다
- 병렬 `git push`를 금지합니다
- 병합 전에 CI를 통일해 실행합니다

## 4. 관련

- [여러 Agent 협업](/cases/workflows/multi-agent-coordination/)
- [Subagent](/guide/agent-work/subagents/)
---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** OpenAI Help Center의 현재 Codex 플랜 자료는 데스크톱 App이 병렬 Codex agents, 내장 worktree 지원, 클라우드 위임을 지원한다고 설명합니다. 이 페이지는 “병렬 탐색, 디렉터리 경계 격리, 병렬 push 회피, 사람이 결론 병합”이라는 협업 패턴만 요약하며, 특정 UI 흐름에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
