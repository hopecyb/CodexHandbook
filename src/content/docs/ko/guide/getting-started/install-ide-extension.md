---
title: IDE 확장 설치
description: 지원되는 편집기에 Codex 확장을 설치합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

1. 편집기가 공식 지원 목록에 있는지 확인합니다([https://developers.openai.com/codex](https://developers.openai.com/codex))
2. 확장 마켓에서 공식 Codex 확장을 검색해 설치합니다
3. 필요하면 편집기를 다시 시작하고 확장 패널을 엽니다

평소 대부분 시간을 VS Code나 JetBrains에서 보낸다면 IDE 확장이 보통 더 손에 맞습니다.  
처음 설치할 때 가장 헷갈리기 쉬운 점은, 확장이 「이미 설치됨」과 「현재 작업 공간에서 정상 동작함」이 아직 두 단계라는 것입니다.

## 설치 후 확인할 것

- 지금 쓰는 편집기가 공식 지원인지
- 확장이 현재 편집기에 설치됐는지(잘못된 환경이 아닌지)
- 재시작 후 확장 입구가 보이는지
- 열려 있는 것이 실제로 일할 프로젝트 디렉터리인지

## 흔한 오해

### 1. Marketplace에서 설치만 누르면 끝이다

이후에도 흔히:

- 편집기 재시작
- 로그인
- 올바른 작업 공간 열기

가 필요합니다.

### 2. IDE 확장은 어느 프로젝트인지 본디 안다

작업 공간 루트가 틀리면, 받는 컨텍스트도 빗나갑니다.

IDE 확장을 설치한 뒤에는, 현재 편집기와 작업 공간에서 정상적으로 나타나고 동작하는지 확인하세요.

이어서: [IDE 로컬 작업 워크플로](/guide/ide/local-task-workflow/). 문제 해결: [IDE 문제 해결](/guide/ide/troubleshooting/).


---

**상태:** outdated  
**적용 제품:** IDE  
**재검토 설명:** IDE 확장 지원 범위·확장 마켓 입구·로그인 연결·작업 공간 통합은 변동이 큰 제품 정보입니다. 현재 공식 지원 행렬과 설치 문서를 항목별로 대조하지 못한 상태에서는 `outdated`로 두는 편이 맞습니다.  
**최근 검증:** 2026-07-26
