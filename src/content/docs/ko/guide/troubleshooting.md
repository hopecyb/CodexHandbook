---
title: 문제 해결
description: 증상별로 해당 튜토리얼·제품 페이지로 안내합니다.
sidebar:
  order: 18
locale: ko
source_locale: zh-CN
source_revision: d1ad457
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

이미 문제가 생겼지만 어느 종류인지 모르겠다면, 이 페이지에서 시작하세요.

처음부터 CLI·IDE·Cloud·권한·프롬프트 중 무엇인지 판단할 필요는 없습니다. 증상으로 분류한 뒤 해당 장으로 가면 됩니다.

## 여기서 할 수 있는 일

- 문제 시 어디로 먼저 분기할지
- 오류 종류를 모를 때 최소로 어떻게 시작할지
- 어떤 문제가 설치·권한·컨텍스트·작업 설명 문제인지

# 문제 해결

| 증상 | 이동 |
|---|---|
| 설치 실패 | [데스크톱 문제 해결](/ko/guide/desktop-app/troubleshooting/) · [CLI 문제 해결](/ko/guide/cli/troubleshooting/) · [IDE 문제 해결](/ko/guide/ide/troubleshooting/) |
| 로그인/인증 실패 | [로그인](/ko/guide/getting-started/sign-in-and-authentication/) |
| 어떤 클라이언트를 고를지 모름 | [클라이언트 선택](/ko/guide/choose-your-client/) · [기능 비교](/ko/guide/reference/feature-comparison/) |
| 결과가 범위를 넘거나 매우 나쁨 | [첫 작업 사례](/ko/cases/first-task/) · [프롬프트 디버깅](/ko/prompts/prompt-debugging/) · [실행 취소](/ko/guide/getting-started/undo-and-recover/) |
| 컨텍스트가 혼란스러움 | [초점 유지](/ko/guide/context/keep-context-focused/) |
| 권한/샌드박스 의문 | [권한과 샌드박스](/ko/guide/permissions-and-sandbox/) |

## 어디서부터 볼지 모를 때의 분류

처음 문제 해결할 때는 자신이 어디에 속하는지 먼저 판단하세요.

- 아예 시작할 수 없음
- 시작할 수 있지만 중간에 오류
- 오류는 없지만 결과가 틀림
- 오류가 아니라 입구·작업 지시 방법을 모름

네 종류로 먼저 나누면, 이후 위치 찾기가 훨씬 빨라집니다.

## 흔한 오해

### 1. 문제 해결은 전문 용어를 먼저 알아야 한다

그렇지 않습니다.

처음에는 문제를 큰 범으로 나누는 일이 더 중요하고, 용어를 외우는 일이 아닙니다.

### 2. 오류가 없으면 문제 해결이 아니다

「결과가 틀림」「계속 빗나감」「어떻게 시작할지 모름」도 분기해야 할 문제에 속합니다.

### 3. 오류가 나면 당장 더 많은 페이지를 눌러 봐야 한다

보통은 잠깐 멈추고, 어느 종류인지 판단한 뒤 해당 페이지로 가는 편이 낫습니다.

문제 해결은 먼저 분류하는 일이지, 당장 고치기부터가 아닙니다.

더 보기: [FAQ](/ko/guide/reference/faq/) · [오류 참고](/ko/guide/reference/error-reference/) · [공식 Codex 문서](https://developers.openai.com/codex)

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 증상별로 설치·로그인·권한·컨텍스트·결과 품질 장으로 분기하는 내비게이션만 담당합니다. 링크된 장 경로를 항목별로 확인했으며, 구체 오류 코드·버전 번호·인터페이스 문구에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
