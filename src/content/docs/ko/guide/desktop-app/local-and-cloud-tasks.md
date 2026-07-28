---
title: 로컬과 Cloud 작업
description: App에서 로컬과 Cloud 실행을 전환합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

여기서는 데스크톱 App에서 작업이 본기기에서 도는지, 원격 환경에서 도는지에 대해 말합니다.

App에서 작업 실행 위치를 고릅니다.

- **로컬**: 본기 파일과 환경, 반복이 빠름
- **Cloud**: 클라우드 환경, 원격 저장소 연결과 긴 작업에 적합

개념: [로컬과 클라우드](/guide/foundations/local-vs-cloud/) · 개요: [Web과 Cloud](/guide/web-and-cloud/)

전환 전에 확인하세요. 키가 그 환경에 나타나도 되는지, 네트워크 정책이 허용하는지.

## 흔한 오해

### 1. 데스크톱 App을 쓰는데 왜 로컬과 클라우드를 구분하나요?

App은 입구일 뿐, 작업이 반드시 본기에서 실행된다는 뜻은 아니기 때문입니다.

### 2. 기본으로 무엇을 고르나요?

대부분 경우 로컬을 먼저 고릅니다. 이유는 다음과 같습니다.

- 파일이 이미 컴퓨터에 있음
- 결과를 확인하기 쉬움
- 오류 시 되돌리기 쉬움

### 3. 언제 Cloud를 고려하나요?

흔한 경우는 다음과 같습니다.

- 작업이 김
- 원격 저장소 환경에 연결해야 함
- 통일된 환경이 필요함
- 본기를 점유하고 싶지 않음

데스크톱 App에서 로컬로 충분하면 보통 로컬을 씁니다. 작업이 더 길고 원격에 가깝거나 통일 환경이 필요할 때 Cloud를 고려합니다.

---

**상태:** verified  
**적용 제품:** App  
**검증 근거:** OpenAI Help Center 현행 《ChatGPT Work and Codex》와 《Using Codex with your ChatGPT plan》는 local workflows와 cloud tasks를 명확히 구분합니다. 이 페이지는 데스크톱 App 맥락에서 “로컬은 빠른 반복, Cloud는 원격 저장소와 긴 작업에 적합”이라는 선택 원칙만 요약합니다.  
**최근 검증:** 2026-07-26
