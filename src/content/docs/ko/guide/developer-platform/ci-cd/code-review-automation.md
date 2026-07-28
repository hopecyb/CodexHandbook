---
title: 코드 리뷰 자동화
description: CI 또는 PR 흐름에 Codex 리뷰를 연결합니다——프롬프트, 권한, 사람 게이트입니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Codex를 **Pull Request 파이프라인**에 넣으면, 사람 리뷰 전에 뚜렷한 문제를 잡을 수 있습니다. 다만 **책임 있는 리뷰와 테스트를 대체하지는 않습니다**. 이 페이지는 실행 가능한 자동화 패턴을 다룹니다.

## 이 페이지에서 다루는 내용

- CI에서 Codex를 안전하게 호출하는 방법
- 리뷰 프롬프트에 넣어야 할 것
- 결과를 PR에 붙이되 자동 머지하지 않는 방법

## 먼저 위치를 이해하세요

“코드 리뷰 자동화”는 Codex가 팀에 1차 스크리닝을 돕고, 최종 결정은 사람이 내리는 구조로 이해하면 됩니다.

가장 잘 맞는 일은 다음과 같습니다.

- 뚜렷한 위험을 미리 지적하기
- diff에서 핵심을 정리해 주기
- 반복적인 검사를 먼저 처리하기

“이 PR은 반드시 머지해도 된다”를 대신 결정하는 용도로는 맞지 않습니다.

관련：[비대화형 모드](/guide/cli/non-interactive-mode/) · [SDK 개요](/guide/developer-platform/sdk-overview/)

## 권장 아키텍처

```text
PR opened / updated
    → CI job(읽기 전용 token)
    → codex exec 또는 API로 diff 리뷰
    → 보고서 업로드 / PR comment
    → 사람이 머지 여부 결정
```

## 흔한 오해

### 자동 리뷰와 자동 승인은 다릅니다

많은 팀이 처음 연결할 때 가장 과대평가하기 쉬운 지점은, 자동으로 볼 수 있으니 자동으로 결정할 수도 있다고 생각하는 것입니다.

현실적으로 더 맞는 위치는 “제안 계층”과 “사전 스크리닝 계층”입니다. 최종 책임 계층을 맡기기에는 적합하지 않습니다.

### 모든 PR에 처음부터 무거운 리뷰를 돌릴 필요는 없습니다

PR이 작거나, 가치가 크지 않거나, 규칙이 아직 정리되지 않았다면, 처음부터 무거운 자동 리뷰를 돌리면 노이즈만 늘기 쉽습니다.

더 흔한 좋은 시작점은 가벼운 diff 리뷰로, 팀이 시간을 안정적으로 아낄 수 있는지 먼저 보는 것입니다.

## 프롬프트 템플릿 요점

```text
당신은 코드 리뷰 도우미입니다. base 브랜치 대비 diff만 리뷰하세요.
출력：심각한 문제 / 제안 / nit；각 항목에 파일과 줄 번호를 적으세요.
저장소를 수정하지 마세요；네트워크 요청을 실행하지 마세요.
diff가 너무 크면 <경로 목록>만 리뷰하세요.
```

버전 관리하며 `prompts/ci-review.md`에 둡니다.

## 권한과 보안

| 원칙 | 방법 |
|---|---|
| 읽기 전용 | CI token에 push 없음(또는 bot comment만) |
| 모델 고정 | 과거 리뷰 품질을 비교하기 쉽습니다 |
| 주입 방지 | 소독하지 않은 PR 설명을 system prompt에 붙이지 마세요 |
| 비밀 | GitHub Secrets에 token 저장 |

[사람 승인 패턴](/cases/workflows/human-approval-patterns/) · [환경 변수](/guide/reference/environment-variables/)

## 품질 게이트

- 리뷰 job 실패 ≠ 반드시 머지를 block(먼저 advisory로 둘 수 있음)
- 필수 status check와 구분：테스트 실패는 막고, AI nit는 경고만
- AI 리뷰의 누락/오탐을 주기적으로 사람이 표본 비교

## Cloud와의 관계

복잡한 저장소는 [Cloud](/guide/web-and-cloud/)에서 전체 테스트를 돌린 뒤 리뷰할 수 있습니다. CI 안에서의 exec는 **가벼운 diff 리뷰**에 맞습니다.

## 흔한 실수

- CI에 쓰기 권한을 주고, 프롬프트에 「push로 fix하라」가 주입되는 경우
- 리뷰 결과가 너무 길어 사람 review가 묻히는 경우
- diff 크기를 제한하지 않아 타임아웃·쿼터 소진이 나는 경우

코드 리뷰 자동화의 가장 가치 있는 지점은, 사람 review 전에 뚜렷한 문제를 먼저 걸러 주는 것이지, 머지 책임을 대신하는 것이 아닙니다.

## 검수 체크리스트

- [ ] fork PR에서 CI 동작이 안전함(secrets 유출 없음)
- [ ] 리뷰 출력이 구조화되어 기계 파싱 가능(선택)
- [ ] 팀 문서에 AI 리뷰의 위치가 명시됨

## 참고 출처

- OpenAI Codex CI 예시
- KimYx0207 Review/PR 장
- stormzhang CI 튜토리얼
- codex.bozhouai.com Git/GitHub 편

---

**상태：** verified  
**적용 제품：** CLI / API / Cloud  
**검증 근거：** OpenAI Developers 홈은 여전히 Codex를 테스트·리뷰·변경 준비에 쓸 수 있다고 설명하며, 공식 use case에도 “Review GitHub pull requests”가 포함됩니다. 이 페이지는 CI에 안전하게 연결하는 원칙과 게이트 패턴만 요약하며, 고정 명령이나 유일한 구현을 주장하지 않습니다.  
**최근 검증：** 2026-07-26
