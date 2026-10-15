---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "현재 저장소의 문제 해결 시작 페이지와 로그인, 클라이언트 선택, 결과 확인, 컨텍스트, 권한 관련 장을 대조했습니다. 이 페이지는 증상에 따라 다음 페이지를 찾도록 안내하는 색인일 뿐이며, 특정 오류나 제품 동작을 영구적인 계약으로 제시하지 않습니다."
  checkedAt: "2026-07-26"
title: 장애 분석 색인
description: 증상별로 대응 튜토리얼과 제품 페이지로 안내합니다.
locale: ko
source_locale: zh-CN
source_revision: da350d0
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 110
---

문제가 생겼는데 App, CLI, IDE, Cloud 중 어느 페이지로 가야 할지 모르겠다면, 여기서 방향을 먼저 찾아 보세요.

증상으로 방향을 찾는 편이, 사이트 전체를 왔다 갔다 하는 것보다 빠릅니다.

| 증상 | 이동 |
|---|---|
| 설치 실패 | [데스크톱 장애 분석](/ko/guide/desktop-app/troubleshooting/) · [CLI 장애 분석](/ko/guide/cli/troubleshooting/) · [IDE 장애 분석](/ko/guide/ide/troubleshooting/) |
| 로그인/인증 실패 | [로그인](/ko/guide/getting-started/sign-in-and-authentication/) |
| 어느 클라이언트를 고를지 모름 | [클라이언트 선택](/ko/guide/choose-your-client/) · [기능 대조](/ko/guide/reference/feature-comparison/) |
| 결과가 경계를 넘거나 매우 나쁨 | [결과 확인](/ko/guide/getting-started/review-the-result/) · [프롬프트 디버깅](/ko/prompts/prompt-debugging/) · [실행 취소](/ko/guide/getting-started/undo-and-recover/) |
| 컨텍스트가 혼란스러움 | [초점 유지](/ko/guide/context/keep-context-focused/) |
| 권한/샌드박스 의문 | [권한](/ko/guide/foundations/permissions-and-approvals/) · [샌드박스](/ko/guide/foundations/sandbox-and-network/) |

## 로그를 따라 실습하기

[다섯 가지 실패 복구 실습](/ko/guide/reference/troubleshooting/failure-recovery-lab/)은 내려받을 수 있는 입력과 실제 명령 로그를 제공합니다. 출처의 의도치 않은 수정, 인용 번호, 제안과 입력의 연결, 디렉터리 범위, 손상된 상태를 다룹니다. 각 사례에는 한 가지 변수만 바꾼 수정과 복구 기록이 있습니다. 이는 설계된 로컬 실습이며 클라이언트 로그인이나 네트워크 사고는 아닙니다.

## 문제 종류를 모를 때

문제 종류를 잠깐 말하기 어렵다면, 아래처럼 나눠 보세요.

1. “들어가지 못하나?”
2. “돌아가지 않나?”
3. “돌았는데 결과가 틀리나?”
4. “도구나 입구를 어떻게 고를지 모르나?”

보통 대응 페이지로 더 빨리 떨어집니다.

공식 지원과 문서：[https://developers.openai.com/codex](https://developers.openai.com/codex)
