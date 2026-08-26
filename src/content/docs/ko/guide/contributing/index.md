---
title: 기여하기
description: 본 핸드북에 본문·사례·프롬프트 예시·번역을 기여하는 방법 — 흐름과 품질 기준.
sidebar:
  order: 80
locale: ko
source_locale: zh-CN
source_revision: b13e05c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

**Codex 가이드 핸드북**은 커뮤니티가 유지하는 문서 사이트입니다. 오류 수정, 페이지 보강, 재현 가능 사례, [`examples/`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)의 프롬프트 예시 추가를 환영합니다.

## 이 페이지 내용

- 기여 유형과 진입점
- 작성·검증 기준
- PR과 배포 기대

## 어떤 기여가 가장 가치 있나

사이트에서 다음을 보면 이미 가치 있는 기여 단서입니다.

- 본인이 읽어도 모르겠는 곳
- 목차에 진입점은 있는데 내용이 길을 안 안내함
- 명령·스크린샷·설명이 이미 낡음

“이 분야를 가장 잘 아는 사람”이 되어야만 도울 수 있는 것은 아닙니다. 진짜 유용한 개선은 종종, 처음 손댄 사람이 “여기는 기본으로 안다고 가정하는데 나는 모르겠다”고 지적하는 데서 옵니다.

## 기여 유형

| 유형 | 설명 | 가이드 |
|---|---|---|
| 수정/소규모 | 오탈자, 링크, 낡은 한 문장 | 바로 PR |
| 새 가이드 페이지 | `src/content/docs/` 아래 장 본문 | [가이드 작성](/ko/guide/contributing/write-a-guide/) |
| 사례 | `src/content/docs/cases/` | [사례 템플릿](/ko/cases/use-cases/case-study-template/) |
| 프롬프트 예시 | `examples/prompts/` | [프롬프트 예시 추가](/ko/guide/contributing/add-a-prompt-example/) |
| 기술 검증 | `verified` 표시, 날짜 갱신 | [기술 내용 검증](/ko/guide/contributing/verify-technical-content/) |
| 번역 | `en/`, `zh-tw/` 등 | 로드맵 M6; 먼저 원문을 안정화 |

## 흔한 오해

### 기여 = 반드시 큰 장을 새로 쓰는 것?

처음 참여하는 사람은 “기여”를 무거운 내용을 통째로 보강하는 일로만 생각하기 쉽습니다.

사실 다음도 가치가 큽니다.

- 초보자가 읽을 수 있는 설명을 한 단락 보강
- 오도하는 표현을 고침
- 빠진 목차 진입점을 보강
- 낡은 명령을 강등하거나 날짜를 표시

### “전문가가 아님” ≠ “피드백이 쓸모없음”

목표 독자에 초보자가 포함되면, 읽을 때 막힌 곳 자체가 고가치 신호입니다.

전제는 문제를 구체적으로 말하고, “여기 모르겠다”만 남기지 말고 더 분명한 표현으로 보완하는 것입니다.

## 기본 원칙

1. **중국어 간체 `root`가 원문**(별도 설명이 없으면)
2. 외부 튜토리얼 원문을 **복사하지 않음**; [외부 자료 통합 계획](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md) 참고
3. **쉽게 바뀌는 사실**에는 `최근 검증` 날짜를 표시
4. **각 sidebar slug**에 대응하는 markdown이 있어야 하며, 없으면 `npm run build` 실패
5. 새 페이지는 `astro.config.mjs` sidebar도 동기 갱신

## 첫 기여는 이렇게 시작

처음이면 가장 안정적인 순서는:

1. 방금 실제로 막힌 점을 고름
2. 문안 수정·페이지 보강·예시 보강·낡은 정보 검증 중 어디에 속하는지 판단
3. 그 작은 덩어리만 고치되, 전제와 독자 시선을 분명히
4. 빌드를 돌려 사이트 구조를 깨지 않았는지 확인

처음부터 장 전체를 크게 고치는 것보다 성공하기 쉽고 review도 쉽습니다.

## 로컬 개발

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

머지 전:

```bash
npm run build
```

## 행동 강령

- 타인의 노동을 존중; 사람에게가 아니라 일에 대해 논의
- 실제 키·고객 데이터를 커밋하지 않음
- 대범위 리팩터 전에는 issue 또는 RFC로 논의

첫 기여는 양을 추구할 필요가 없습니다. 초보자가 진짜 막히는 곳을 분명히 보강하고, 빌드 검증을 통과하면 이미 가치가 큽니다.

## 관련 링크

- 저장소: <https://github.com/hopecyb/CodexHandbook>
- [장 개요](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md)(기획용)

---

**상태:** verified  
**검증 근거:** 본 저장소의 현재 디렉터리 구조, 사이드바 유지 방식, 페이지 상태 체계, 기여 흐름을 항목별로 확인했습니다. 이 페이지는 핸드북 유지 규칙이며, 특정 Codex 제품 단의 쉽게 바뀌는 UI 동작에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
