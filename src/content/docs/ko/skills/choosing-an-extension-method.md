---
title: 확장 방식 고르기
description: 프롬프트에서 Automations까지의 결정 트리. 「쓰기 위해 쓰는」 확장을 피합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


확장 메커니즘이 많아질수록 잘못된 방법의 비용도 커집니다. 이 페이지는 Plugin을 설치하거나 MCP를 쓰기 전에, 그게 필요한지 먼저 판단하도록 돕습니다.

가장 혼동하기 쉬운 이름들입니다.

- 프롬프트
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

같은 「Codex 확장」이라도, 때로는 프롬프트 한 줄이면 충분하고, 때로는 더 무거운 메커니즘이 필요합니다.

## 결정 트리

```text
작업이 ≥3회 반복되나?
├─ 아니오 → 좋은 프롬프트 + @ 인용으로 충분
└─ 예 → 지속 규칙이 필요한가?
    ├─ 예 → AGENTS.md에 작성
    └─ 아니오 → 절차가 고정되고 서술 가능한가?
        ├─ 예 → Skill 만들기
        └─ 아니오 → 외부 시스템을 읽어야 하나?
            ├─ 예 → MCP 평가(읽기 전용 우선)
            └─ 아니오 → 무인 운용이 필요한가?
                ├─ 예 → Automations + 사람 게이트
                └─ 아니오 → Skill + 수동 트리거 유지
```

팀이 여러 Skill + MCP를 통일 배포해야 하나요? 위 경로 끝에서 **Plugin**을 고려하세요.

## 장면 대조

| 장면 | 권장 조합 |
|---|---|
| 테스트·커밋 규범 통일 | AGENTS.md |
| 매번 병합 전 검토 체크리스트 | Skill `pr-review` |
| Linear에서 ticket 컨텍스트 가져오기 | MCP + 작업 프롬프트 |
| 주간 의존성 보고서 | Automation → issue 열기 |
| 커밋 전 비밀 스캔 | Hooks(기업) 또는 CI |
| 신규 인력이 한 번에 전체 도구 설치 | Plugin(보안 검토 후) |

## 비용 차원

| 메커니즘 | 작성 비용 | 유지 비용 | 보안 위험 |
|---|---|---|---|
| 프롬프트 | 낮음 | 낮음 | 낮음 |
| AGENTS.md | 중간 | 중간 | 낮음 |
| Skill | 중간 | 중간 | 낮음–중간 |
| MCP | 높음 | 높음 | 중간–높음 |
| Plugin | 낮음(기성품) / 높음(자체 제작) | 중간 | 중간–높음 |
| Automations | 높음 | 높음 | 높음 |

## 안티패턴

- **스킬 팽창**: Skill 수십 개 설치, description이 서로 매칭을 뺏음
- **MCP 만능 망치**: `git`으로 될 일을 API에 억지로 연결
- **수락 없는 자동화**: 정해진 시간에 코드를 바꾸지만 아무도 diff를 보지 않음
- **바퀴 재발명**: 공식 Connector가 있는데도 MCP를 자체 제작

## 자주 묻는 질문

### 1. 처음부터 Plugin을 설치하고 MCP를 연결해야 하나?

많은 문제는 프롬프트, 범위 제어, `AGENTS.md`만 잘 써도 해결됩니다.

### 2. 이 결정 트리는 어떻게 보나?

원칙 하나만 보면 됩니다. 가벼운 것부터 쓰고, 부족하면 무겁게 올립니다.

### 3. 처음 쓸 때는 보통 어디서 시작하나?

대개 다음 세 가지에 먼저 모입니다.

- 프롬프트
- `AGENTS.md`
- Skill

처음부터 MCP나 무인 자동화가 필요한 경우는 드뭅니다.

핵심은 메커니즘이 얼마나 고급인가가 아니라, 현재 문제에 맞는지입니다.

## 더 읽기

- [확장 능력 지도](/skills/capability-map/)
- [사람 승인 패턴](/cases/workflows/human-approval-patterns/)
- [절차를 Skill로 정리하기](/cases/workflows/turn-a-workflow-into-a-skill/)(로드맵 페이지)

---

**상태:** outdated  
**적용 제품:** App / CLI / IDE / Cloud  
**재검토 설명:** 이 페이지의 결정 트리는 현재 Automations, Plugins, MCP와 공식 Connector의 경계·적용 범위와 관련됩니다. 제품 형태가 빠르게 바뀌고 있어, 공개 자료만으로는 페이지 전체 판단을 안정적으로 뒷받침하기 어렵습니다.  
**최근 검증:** 2026-07-26
