---
title: AI 애플리케이션 로드맵
description: 논문, 제품 발표, 엔지니어링 글과 작성자의 학습 제안을 구분하고 각 주제에서 실습으로 이어집니다.
locale: ko
source_locale: zh-CN
source_revision: '1db64dd'
translation_status: stale
translated_at: 2026-10-24
prev: false
next:
  link: /ko/ai-roadmap/timeline/
  label: 사건과 주제 색인
reviewed_at: '2026-10-26'
---

이 지도는 확인할 수 있는 공개 사건과 학습 제안을 구분합니다. **날짜는 표에 적힌 논문, 발표 또는 글에만 해당합니다. 개념의 탄생, 업계 확산, 기능의 성숙을 자동으로 뜻하지 않습니다.** 여러 기술을 함께 사용할 수 있으며, 시간 순서가 반드시 따라야 할 학습 순서도 아닙니다.

각 주제 페이지에는 1차 출처, 적용 범위의 한계, 사이트 내 실습이 있습니다. 출처 확인은 소프트웨어를 실제 실행한 것과 다릅니다. 기존 URL은 유지하므로 URL의 연월이 수정된 사건 날짜와 다를 수 있습니다. 본문 날짜를 기준으로 삼으세요.

![AI 애플리케이션 엔지니어링 로드맵: Harness Engineering, Skills, 컨텍스트 엔지니어링, 다중 에이전트 협업, 도구 사용, MCP, 함수 호출, 프롬프트 엔지니어링, RAG를 최신순으로 나열하며 날짜는 아래 표와 같음](/illustrations/roadmap-ai-application.webp)

## 확인 가능한 사건

| 날짜 | 유형 | 주제와 구체적 사건 |
|---|---|---|
| 2026-02-11 | 엔지니어링 글 | [Harness Engineering(실행 하네스 엔지니어링)](/ko/ai-roadmap/timeline/2026-02-harness-engineering/): Harness engineering 엔지니어링 글 |
| 2025-10-16 | 엔지니어링 글 | [Skills(스킬)](/ko/ai-roadmap/timeline/2026-04-skills/): Agent Skills 공개 소개 |
| 2025-09-29 | 엔지니어링 글 | [Context Engineering(컨텍스트 엔지니어링)](/ko/ai-roadmap/timeline/2025-09-context-engineering/): 컨텍스트 엔지니어링 글 |
| 2025-06-13 | 엔지니어링 글 | [Multi-agent(다중 에이전트 협업)](/ko/ai-roadmap/timeline/2025-06-multi-agent/): 다중 Agent 연구 시스템 엔지니어링 글 |
| 2025-03-11 | 제품 발표 | [Tool Use(도구 사용)](/ko/ai-roadmap/timeline/2025-03-tool-use/): Agent 도구 발표 |
| 2024-11-25 | 프로토콜 공개 | [MCP(모델 컨텍스트 프로토콜)](/ko/ai-roadmap/timeline/2024-11-mcp/): MCP 공개 발표 |
| 2023-06-13 | 제품 발표 | [Function Calling(함수 호출)](/ko/ai-roadmap/timeline/2023-06-function-calling/): Function Calling 발표 |
| 2022-11-30 | 제품 발표 | [Prompt Engineering(프롬프트 엔지니어링)](/ko/ai-roadmap/timeline/2022-11-prompt-engineering/): ChatGPT 발표 |
| 2020-05-22 | 논문 발표 | [RAG(검색 증강 생성)](/ko/ai-roadmap/timeline/2023-11-rag/): RAG 원논문과 제출 이력 |

## 개별 프로젝트

다음 프로젝트는 확인되지 않은 최초 공개일로 순서를 정하지 않고 각각 읽습니다.

- [OpenSpec(명세 주도 개발)](/ko/ai-roadmap/timeline/2026-01-openspec/): 프로젝트 공식 릴리스 페이지에는 v1.0.0(The OPSX Release)의 버전 설명이 있습니다. 이번 검토는 해당 버전으로 프로젝트의 최초 공개일을 추정하지 않으며, 확인한 증거로 뒷받침되지 않는 npm 최초 공개일도 유지하지 않습니다.
- [OpenClaw(개인 AI 비서 프로젝트)](/ko/ai-roadmap/timeline/2026-01-openclaw/): 이 페이지는 OpenClaw 공식 저장소를 프로젝트의 정체성과 설명을 확인하는 출처로 사용합니다. 최초 공개를 확인할 충분한 증거를 확보하지 못했으므로 그 날짜를 표시하지 않습니다.

## 현재 작업에 맞는 실습 선택

- 처음 사용한다면 [초보자 경로](/ko/guide/learning-paths/)에서 시작하세요. 연표 전체를 먼저 공부할 필요는 없습니다.
- 작업 설명을 개선하려면 [프롬프트 비교 자료](/ko/prompts/comparison-lab/)로 출력과 점수를 기록하세요. 이 사이트에는 모델 효과에 대한 실측 결론이 아직 없습니다.
- 자료의 뒷받침이 필요하면 [출처가 있는 글](/ko/cases/write-an-article/)로 주장과 증거를 대응시키는 연습을 하세요.
- 안정적인 재사용이 필요하면 [Skill 예시](/ko/skills/examples/)를 선택해 입력, 경계, 검증 기록을 확인하세요.
- 실행이 계속 실패한다면 [실패 복구 실습](/ko/guide/reference/troubleshooting/failure-recovery-lab/)에서 로그를 읽고 한 번에 변수 하나만 바꾸는 연습을 하세요.

주제의 학습 가치는 현재 작업에 따라 달라집니다. 이 섹션은 공통 측정 근거가 없는 “rising”, “emerging” 같은 꼬리표로 업계 전체를 단계별로 나누지 않습니다.
