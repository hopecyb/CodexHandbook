---
title: 로컬 작업 워크플로
description: IDE에서 열린 파일과 선택 영역을 바탕으로 로컬 Codex 작업을 시작하고, 따라가며, 마칩니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

IDE 로컬 작업은 「**열기 → 선택 → 설명 → 검토 → 테스트**」의 순환이며, 빈번한 작은 수정에 맞습니다. 가장 흔한 실무 경로를 제시합니다. 컨텍스트 세부 사항은 [선택 영역과 열린 파일](/guide/ide/selected-code-and-open-files/)을 보세요.

## 권장 흐름

1. **워크스페이스 루트를 연다**(전체 저장소, 단일 파일 아님)
2. 관련 파일을 연다; 필요하면 [코드 조각을 선택](/guide/ide/selected-code-and-open-files/)한다
3. Codex 패널에 목표·제약·[완료 정의](/prompts/define-done/)를 분명히 쓴다
4. 작업이 복잡하면 먼저 [계획을 요청](/prompts/ask-for-a-plan/)한 뒤 실행한다
5. diff / inline 뷰에서 [변경을 검토](/guide/ide/reviewing-changes/)한다
6. IDE 터미널에서 프로젝트 테스트 명령을 실행한다
7. 본인이 `git commit`한다(팀이 Agent commit을 명확히 허용한 경우 제외)

## 예시 prompt(예시)

```text
src/auth/login.ts와 대응 테스트만 수정.
목표: 빈 이메일 제출 시 500을 400 + 오류 메시지로 고친다.
금지: package-lock 수정, git push.
완료: npm test -- auth를 실행하고 변경 요약을 나열한다.
```

## 언제 다른 입구로 바꾸나요

| 상황 | 제안 |
|---|---|
| 병렬 다중 작업, 작업 트리 | [데스크톱 App](/guide/desktop-app/) |
| 스크립트 / CI | [CLI 비대화형](/guide/cli/non-interactive-mode/) |
| 원격 표준 환경, PR 열기 | [IDE Cloud 작업](/guide/ide/cloud-task-workflow/) |

## 흔한 실수

- 워크스페이스를 열지 않아 `AGENTS.md`를 읽지 못함
- inline 제안을 한꺼번에 수락
- 테스트 없이 commit

컨텍스트: [에디터 컨텍스트](/guide/ide/editor-context/) · [파일과 폴더 컨텍스트](/guide/context/file-and-folder-context/)

## 흔한 질문

### 1. 왜 “워크스페이스 루트를 열라”고 반복하나요?

IDE 확장의 많은 컨텍스트가, 완전한 프로젝트를 열었는지에 의존하기 때문입니다. 파일 하나만 연 상태와는 다릅니다.

### 2. IDE에서 고치기 편하니 검토를 줄여도 되나요?

안 됩니다.

편할수록 습관적으로 수락하기 쉬우므로, 점검 습관을 더 지켜야 합니다.

### 3. 처음에는 어떤 작업이 맞나요?

이런 작업이 적합합니다.

- 파일 1~2개만 수정
- 결과를 한눈에 이해
- 수정 후 테스트나 미리보기가 쉬움

IDE 로컬 작업은 작은 걸음으로 빠르게 가기 좋지만, “편하다”가 검토와 검증을 건너뛰어도 된다는 뜻은 아닙니다.

---

**상태:** verified  
**적용 제품:** IDE  
**검증 근거:** OpenAI 현행 도움말은 IDE extension을 로컬 코드 저장소와 함께 쓰는 클라이언트로 설명합니다. 이 페이지 워크플로는 “워크스페이스 열기·파일 범위 제한·작업 설명·diff 검토·테스트 실행·사람이 커밋”이라는 안정적 로컬 협업 순환에 초점을 두며, 특정 확장 UI에 의존하지 않습니다.  
**최근 검증:** 2026-07-26
