---
title: AI 애플리케이션 로드맵
description: Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills 등 AI 애플리케이션 엔지니어링의 주요 지점을 이해합니다.
locale: ko
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-08
---

# AI 애플리케이션 로드맵

이 문서는 AI 애플리케이션 엔지니어링을 위한 지식 지도입니다. 모델 파라미터, 벤치마크 순위, 개별 제품 출시를 따라가는 대신, 핵심 방법론을 역순 시간대로 연결합니다. 재사용 가능하고 검증 가능한 Agent 엔지니어링 시스템에서 출발해, 그것을 가능하게 한 실천을 되짚습니다.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/ai-roadmap/timeline/2026-04-skills/">Skills(스킬)</a></h3>
    <p>Skills는 프롬프트, 단계, 예시, 스크립트, 리소스를 재사용 가능한 워크플로 단위로 묶습니다. 매번 “어떻게 할지” 다시 설명하지 않고 팀의 경험을 축적하게 해줍니다.</p>
    <p><strong>학습 포인트:</strong> SKILL.md, 점진적 공개, 의존 리소스, 재사용 경계, 팀 규칙.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering(실행 하네스 엔지니어링)</a></h3>
    <p>Harness Engineering은 모델이 안정적으로 작업을 끝내도록 환경을 설계합니다. 도구, 컨텍스트, 검증 피드백, 실패 복구, 품질 게이트, 회귀 점검을 포함합니다.</p>
    <p><strong>학습 포인트:</strong> 작업 하네스, 검증 피드백, 실패 복구, 품질 게이트.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/ai-roadmap/timeline/2026-01-openspec/">OpenSpec(명세 주도 개발)</a> / <a href="/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw(개인 AI 어시스턴트 게이트웨이)</a></h3>
    <p>두 노드는 서로 다른 방향을 가리킵니다. OpenSpec은 요구사항과 설계를 추적 가능한 명세 산출물로 만들고, OpenClaw는 개인 어시스턴트, 채널, 도구 게이트웨이를 통합합니다.</p>
    <p><strong>학습 포인트:</strong> spec-driven development, 게이트웨이, 세션, 채널, 추적 가능한 산출물.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering(컨텍스트 엔지니어링)</a></h3>
    <p>Context Engineering은 “프롬프트를 어떻게 쓸까”에서 “모델이 무엇을, 어떤 순서로 보고, 무엇을 압축하거나 제외해야 할까”로 초점을 옮깁니다.</p>
    <p><strong>학습 포인트:</strong> 컨텍스트 우선순위, 검색 전략, 압축, 메모리, 파일 선택.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent(다중 에이전트 협업)</a></h3>
    <p>Multi-agent는 복잡한 작업을 조사, 구현, 리뷰, 검증, 요약 같은 역할로 나눕니다. 핵심은 구조화, 병렬화, 상호 점검입니다.</p>
    <p><strong>학습 포인트:</strong> 역할 경계, 인계 형식, 충돌 해결, 리뷰와 검증.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/ai-roadmap/timeline/2025-03-tool-use/">Tool Use(도구 사용)</a></h3>
    <p>Tool Use는 모델이 작업 중 도구를 선택하고 호출하며 결과를 읽고 다음 추론을 이어가는 방식을 다룹니다. 단발 응답에서 다단계 실행으로 넘어가는 다리입니다.</p>
    <p><strong>학습 포인트:</strong> 도구 선택, 호출 체인, 상태 관리, 도구 실패 후 복구.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/ai-roadmap/timeline/2024-11-mcp/">MCP(모델 컨텍스트 프로토콜)</a></h3>
    <p>MCP는 도구, 리소스, 프롬프트의 접속 방식을 프로토콜로 만듭니다. 더 많은 도구를 붙이는 것보다, 통합을 재사용 가능하고 발견 가능하며 통제 가능하게 만드는 데 가치가 있습니다.</p>
    <p><strong>학습 포인트:</strong> server/client, tools, resources, prompts, 권한, 디버깅.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/ai-roadmap/timeline/2023-11-rag/">RAG(검색 증강 생성)</a></h3>
    <p>RAG는 검색한 자료에 답변을 근거 짓습니다. AI를 “말할 수 있는 시스템”에서 “추적 가능한 근거로 답하는 시스템”으로 밀어 올립니다.</p>
    <p><strong>학습 포인트:</strong> 청킹, 벡터 검색, 재정렬, 인용, 컨텍스트 압축.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/ai-roadmap/timeline/2023-06-function-calling/">Function Calling(함수 호출)</a></h3>
    <p>Function Calling은 모델이 텍스트로만 답하는 단계에서 구조화된 파라미터로 외부 기능을 호출하는 단계로 나아가게 했습니다. AI가 실제 시스템에 들어가는 핵심 단계입니다.</p>
    <p><strong>학습 포인트:</strong> schema 설계, 파라미터 검증, 도구 경계, 오류 반환.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering(프롬프트 엔지니어링)</a></h3>
    <p>AI 애플리케이션 엔지니어링의 출발점은 입력 제어입니다. 작업 목표, 컨텍스트, 제약, 예시, 출력 형식을 명확히 해 모델 행동을 더 안정적으로 만듭니다.</p>
    <p><strong>학습 포인트:</strong> 작업 분해, 역할 설정, few-shot 예시, 출력 형식, 실패 재시도.</p>
  </article>
</div>
