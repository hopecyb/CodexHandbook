---
title: 컨텍스트와 파일
description: 프로젝트·파일·대화 컨텍스트와 흔한 입력 유형을 관리합니다.
sidebar:
  order: 15
locale: ko
source_locale: zh-CN
source_revision: 2007fae
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# 컨텍스트와 파일

컨텍스트란, Codex가 이 순간에 보고·참고·그에 따라 행동할 수 있는 정보입니다.

머릿속으로는 이미 분명한데, 상대가 핵심 자료를 못 봐서 빗나가는 것과 같습니다.  
Codex도 같습니다. 컨텍스트를 못 다루면, 좋은 프롬프트도 노이즈에 묻힙니다.

## 컨텍스트에 포함되는 것

방금 채팅방에 들어온 신입 동료가 의존하는 정보로 보면 됩니다.

- 보낸 작업 요구는 현재 문제
- 열어 보여 준 파일은 배경 자료
- 저장소의 규칙 문서는 팀 약속
- 이전 대화는 이번 작업에 대한 기억

이들이 합쳐진 것이 지금 의존하는 컨텍스트입니다.

## 흔한 문제의 원인

「또 잘못 이해했네」의 뿌리는 모델이 둔해서가 아니라, 컨텍스트 문제인 경우가 많습니다. 예를 들어:

- 정보가 너무 적어 추측만 함
- 정보가 너무 많아 핵심이 묻힘
- 그 파일을 안다고 생각했지만 명시하지 않음
- 옛 대화를 너무 오래 이어, 초반 정보가 더 이상 초점이 아님

이 페이지의 초점은 간단한 기준입니다.

> **정말로 관련 있는 정보를 보이게 하고, 무관한 정보가 자리를 뺏지 않게 하세요.**

## 컨텍스트 관리

- [프로젝트 컨텍스트](/ko/guide/context/project-context/) — `AGENTS.md`, 저장소 약속
- [파일과 폴더 컨텍스트](/ko/guide/context/file-and-folder-context/) — @ 참조와 범위
- [대화 컨텍스트](/ko/guide/context/conversation-context/) — 스레드와 압축
- [초점 유지](/ko/guide/context/keep-context-focused/) — 무관 노이즈 피하기
- [민감 컨텍스트](/ko/guide/context/sensitive-context/) — 비밀키와 프라이버시

프롬프트에서 배경을 어떻게 조직하는지는 [목표와 컨텍스트](/ko/prompts/goals-and-context/)를 보세요.

## 파일과 산출물

「무엇을 할지」뿐 아니라 「무엇을 보여 줄지」도 자주 필요합니다.

여기의 「무엇」은 예를 들어:

- 코드나 문서
- 스크린샷
- PDF
- 표
- 프레젠테이션

파일 유형마다 Codex의 읽기 방식·질문 방식·수락 방식이 조금 다릅니다.

## 파일과 산출물

- [텍스트와 코드 파일](/ko/guide/files-and-artifacts/text-and-code-files/)
- [이미지와 스크린샷](/ko/guide/files-and-artifacts/images-and-screenshots/)
- [PDF와 문서](/ko/guide/files-and-artifacts/pdf-and-documents/)
- [표와 스프레드시트](/ko/guide/files-and-artifacts/tables-and-spreadsheets/)
- [프레젠테이션](/ko/guide/files-and-artifacts/presentations/)

## 권장 읽기 순서

한 번에 다 읽을 필요는 없습니다. 이 순서로 가세요.

1. 먼저 [파일과 폴더 컨텍스트](/ko/guide/context/file-and-folder-context/)로 「어떤 파일을 보게 할지」를 이해합니다
2. 다음으로 [초점 유지](/ko/guide/context/keep-context-focused/)로 작업이 산만해지지 않게 합니다
3. 손에 든 자료 유형에 맞춰 해당 파일 장을 읽습니다

컨텍스트는 Codex가 판단할 때 손옆의 정보 더미입니다. 맞게 주면 결과도 맞게 나오기 쉽습니다.

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 이 페이지는 사이트 내 내비게이션·방법 총괄입니다. 「작업 요구·파일 자료·프로젝트 규칙·이전 대화가 함께 컨텍스트를 이룬다」는 틀을 현재 컨텍스트·파일 처리 장과 항목별로 교차 확인했으며, 쉽게 변하는 인터페이스 세부에는 의존하지 않습니다.  
**최근 검증:** 2026-07-26
