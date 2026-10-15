---
prev: false
next:
  link: /ko/guide/learning-paths/beginner/01-talk-to-codex/
  label: 초보자 경로 시작하기
title: 학습 경로
description: 역할별로 읽기 순서를 정리하고 권위 있는 본문으로 연결합니다.
sidebar:
  order: 5
locale: ko
source_locale: zh-CN
source_revision: 2f7ff71
translation_status: draft
translated_at: 2026-09-20
---

학습 경로는 **읽는 순서만 정리**하며 제품 매뉴얼이나 기능 가이드의 긴 글을 복제하지 않습니다.

처음 보면 목차가 한 단계 더 생긴 것처럼 느껴질 수 있습니다. 지금 어떤 유형의 사용자에 가까운지, 다음에 무엇을 어떤 순서로 읽을지 알려 주는 장입니다.

새로운 제품 지식을 추가하기보다 돌아가는 길을 줄이는 역할을 합니다.

![일러스트: 같은 책에서 출발한 네 갈래 길 — 입문자, 크리에이터, 개발자, 팀 — 이 정상에서 만난다](/illustrations/learning-paths.webp)

## 이 장이 하는 일

- 초보자, 크리에이터, 개발자, 팀 추진자 중 어떤 경로를 고를지
- 역할별 읽기 순서가 어떻게 다른지
- 지금 읽을 내용과 나중에 보완할 내용이 무엇인지

## 공통 자료를 쓰는 초보자 경로

[같은 행사 안내 연습 자료를 내려받아](/downloads/first-project/first-project-1.0.0.zip) 다섯 단계로 안내문, 검토, 복구 기록을 완성하세요. 프로그래밍은 필요하지 않습니다. 독립적인 독자가 전체 경로를 끝까지 수행한 검증은 아직 없습니다.

- **초보자(다섯 단계)**
  1. [Codex와 대화하기](/ko/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [파일 다루기](/ko/guide/learning-paths/beginner/02-work-with-files/)
  3. [명확한 작업 주기](/ko/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [결과 검토하기](/ko/guide/learning-paths/beginner/04-review-results/)
  5. [첫 작은 프로젝트 끝내기](/ko/guide/learning-paths/beginner/05-complete-first-project/)

## 크리에이터 실습 경로

[크리에이터 경로](/ko/guide/learning-paths/creator/)에는 자료와 사실표 → 출처가 있는 글 → 편집 가능한 여덟 장의 발표 자료 → 재사용 가능한 작업 설명이라는 네 가지 연속 이정표가 있습니다. 글과 발표 자료에는 각각 별도의 다운로드 자료가 있고 각 단계에는 완료 기준이 있습니다. 독립적인 독자가 전체 경로를 끝까지 수행한 검증은 아직 없습니다.

## 개발자 실습 경로

[개발자 경로](/ko/guide/learning-paths/developer/)는 장바구니 버그 연습을 재사용해 코드 읽기 → 수정과 테스트 → 차이 검토 → 인수인계 준비 순서로 진행합니다. 작성 가능한 템플릿 세 개와 작성자 참고 예시를 제공합니다. 참고 테스트는 다시 실행했으며, 독립적인 독자의 완주 여부는 아직 검증되지 않았습니다.

## 팀 경로: 2주 시범 운영과 도입 결정

- [팀](/ko/guide/learning-paths/team/): 운영 원칙 → 수동 검증 → 표본 점검 → 롤백 연습 → 도입·계속·중단 결정. 템플릿 여섯 개가 포함됩니다.

## 고급 운영자 경로

작은 작업을 이미 끝낼 수 있다면, 다음 단계는 명령을 더 외우는 것이 아니라 여러 능력을 안정적인 워크플로로 묶는 것입니다.

| 단계 | 주제 | 먼저 읽을 것 |
|---|---|---|
| 1 | 빠른 진입점 | [슬래시 명령과 빠른 진입](/ko/guide/reference/slash-commands/) |
| 2 | 지속되는 컨텍스트 | [AGENTS.md](/ko/guide/customization/agents-md/)와 [기억과 지속 컨텍스트](/ko/guide/customization/memories-and-persistent-context/) |
| 3 | 재사용 가능한 워크플로 | [Skills 개요](/ko/skills/overview/)와 [Skill 구조](/ko/skills/skill-anatomy/) |
| 4 | 독립 하위 작업 | [서브 에이전트](/ko/guide/agent-work/subagents/)와 [다중 Agent 조율](/ko/cases/workflows/multi-agent-coordination/) |
| 5 | 외부 시스템 | [MCP 개요](/ko/skills/mcp/mcp-overview/) |
| 6 | 자동 가드레일 | [Hooks 개요](/ko/skills/hooks/hooks-overview/) |
| 7 | 팀 배포 | [Plugins 개요](/ko/skills/plugins/plugins-overview/) |
| 8 | 복구와 리뷰 | [실행 취소와 복구](/ko/guide/getting-started/undo-and-recover/)와 [Diff 리뷰](/ko/guide/quality/review-diffs/) |

이 경로는 “가끔 Codex에게 도움을 받는” 상태를 “팀이 반복 실행할 수 있는 작은 시스템”으로 바꾸는 데 적합합니다. 프로젝트 지침은 장기 규칙을, Skill은 방법을, MCP는 외부 도구를, 서브 에이전트는 경계가 명확한 작업 분담을, Hook은 핵심 지점을, Plugin은 팀 배포를 담당합니다.

## 흔한 오해

### 1. 학습 경로와 매뉴얼 본문은 중복된 두 세트다

본문은 내용을 설명하고, 학습 경로는 지금 어느 몇 편을 볼지 알려 줍니다.

### 2. 고정된 정체성 하나를 먼저 정해야 한다

한 가지만 판단하면 됩니다.  
**지금 가장 풀고 싶은 주요 문제가 무엇인가.**

### 3. 한 경로를 처음부터 끝까지 배워야 하고 건너뛸 수 없다

경로는 권장 순서이지 강제 프로세스가 아닙니다. 실제로 쓸 때는 구체 질문을 들고 다른 장으로 돌아가도 됩니다.

## 헷갈릴 때 고르는 법

어느 경로를 탈지 모르겠다면, 이렇게 고르세요.

- 아직 첫 완전한 작업을 통과하지 못함：[초보자 경로](/ko/guide/learning-paths/beginner/)
- 주로 콘텐츠, 이미지·텍스트, 데모를 만들고 싶음：[크리에이터 경로](/ko/guide/learning-paths/creator/)
- 주로 코드 수정, 버그 수정, 프로젝트 연결：[개발자 경로](/ko/guide/learning-paths/developer/)
- 주로 팀 도입과 위험 통제：[팀 경로](/ko/guide/learning-paths/team/)

학습 경로는 “지금 가장 중요한 문제”로 다음에 무엇을 읽을지 정합니다.
