---
title: 워크플로 방법
description: 반복 가능한 협업 방법—단일 제품 UI에 묶이지 않으며, 검사 지점과 인수를 강조합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

[프롬프트](/prompts/)는 **어떻게 말할지**를 가르칩니다. 워크플로는 **한 일을 어떻게 조직할지**를 가르칩니다. 이 장의 방법은 App, CLI, IDE, Cloud에 적용됩니다.

## 왜 워크플로가 필요한가

외부 튜토리얼에는 「한 번의 대화로 끝낸다」는 서사가 흔하지만, 실제 프로젝트에서는 더 자주 이렇게 됩니다:

```text
탐색 → 계획 → 실행 → 검증 →(가능하면)인수인계 또는 자동화
```

검사 지점이 없으면 잘못된 디렉터리를 고치거나, 테스트를 건너뛰거나, 잘못 병합하거나, 컨텍스트가 소진된 뒤 결론을 잃기 쉽습니다.

## 핵심 워크플로

| 워크플로 | 무엇을 해결하는가 |
|---|---|
| [탐색—계획—실행—검증](/cases/workflows/explore-plan-execute-verify/) | 일반 주 경로, 대부분의 작업에 적합 |
| [먼저 브레인스토밍한 뒤 손대기](/cases/workflows/brainstorm-before-building/) | 방안이 정해지기 전 발산과 수렴 |
| [스펙 주도 작업](/cases/workflows/specification-driven-work/) | 인수 가능한 스펙을 먼저 쓴 뒤 구현 |
| [테스트 주도 작업](/cases/workflows/test-driven-work/) | 테스트를 먼저 두어 구현을 유도 |
| [사람 승인 패턴](/cases/workflows/human-approval-patterns/) | 언제 멈추고, 언제 승인하고, 언제 거절할지 |
| [먼저 진단한 뒤 수정](/cases/workflows/diagnose-before-fixing/) | 「추측 수정」을 피함 |
| [병합 전 검토](/cases/workflows/review-before-merge/) | PR 병합 전 구조화 검토 |
| [출처가 있는 리서치](/cases/workflows/research-with-sources/) | 검색, 비교, 출처 검증 |
| [산출물 우선](/cases/workflows/artifact-first-work/) | 먼저 산출물을 정한 뒤 단계를 역산 |
| [여러 Agent 협업](/cases/workflows/multi-agent-coordination/) | 병렬과 분업 |
| [긴 작업 관리](/cases/workflows/long-running-task-management/) | 세션을 넘는 검사 지점과 종료 조건 |
| [실패 복구](/cases/workflows/failure-recovery/) | 빗나감, 테스트가 빨간색일 때 되돌리기 |
| [Skill로 정착하기](/cases/workflows/turn-a-workflow-into-a-skill/) | 반복 흐름을 Skill로 작성 |

## 워크플로와 관련된 다른 장

- 품질: [핵심 역량 · 품질과 검증](/guide/quality/)
- Agent: [계획](/guide/agent-work/planning/), [Subagent](/guide/agent-work/subagents/)
- 정착: [Skill](/skills/overview/), [AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- 사례: [시나리오와 사례 라이브러리](/cases/use-cases/)

## 설계 원칙

1. **각 단계에 산출물이 있음**: 계획, diff, 테스트 보고, 결정 기록
2. **기본은 작은 걸음**: 검토 가능한 증분이 한 번의 거대한 변경보다 낫습니다
3. **실패는 복구 가능해야 함**: 어떻게 취소할지, 어떻게 스레드를 fork해 이어갈지 알아야 합니다
4. **정착할 수 있으면 정착**: 세 번째 반복되는 흐름은 Skill 또는 템플릿으로 씁니다

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 핸드북에서 이미 검증된 프롬프트, 품질, Agent 작업, Skills 장과 교차 확인했습니다. 이 페이지는 방법 안내와 단계별 검사 지점 설명만 담당하며, 구체 클라이언트 흐름을 장기 계약으로 쓰지 않습니다.  
**최근 검증:** 2026-07-26
