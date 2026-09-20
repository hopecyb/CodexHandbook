---
title: 설정
description: 데스크톱 앱의 일상적인 동작, 단축키, 알림, 화면 모양을 설정합니다.
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
locale: ko
source_locale: zh-CN
source_revision: "7a6d2fe"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 90
---

설정 페이지에서는 앱의 동작을 개인화할 수 있지만, Codex의 모든 권한을 설정하는 곳은 아닙니다. 우선 기본값을 유지하고, 변경의 영향 범위를 이해한 뒤 수정하세요.

macOS에서는 `Cmd + ,`, Windows에서는 `Ctrl + ,`를 누르거나 앱 메뉴에서 Settings를 열 수 있습니다.

## 처음에는 네 가지 항목을 살펴보세요

### General

- 여러 줄로 된 프롬프트를 제출할 때 `Cmd + Enter`를 요구할지 설정합니다.
- **Prevent sleep while running**은 컴퓨터 앞을 떠나 있어도 로컬의 긴 작업이 계속 실행되도록 할지 결정합니다.
- Follow-up behavior는 작업 중 새 메시지를 받았을 때 현재 실행을 즉시 조정할지, 다음 차례로 보낼지 결정합니다.

마지막 항목에 따라 작업 도중 한마디를 추가했을 때의 효과가 달라집니다. 긴급하게 방향을 바로잡아야 한다면 현재 실행을 조정하세요. 관련 없는 새로운 요청이라면 별도 채팅을 시작하세요.

### Keyboard shortcuts

명령을 검색하고 단축키를 바꾸거나 기본값으로 복원할 수 있습니다. 온라인에 나온 단축키가 내 컴퓨터와 다르면 여기 표시된 키 설정을 기준으로 삼으세요.

### Notifications

차례가 완료되었을 때 알림을 언제 표시할지 설정하고, 권한 요청 및 질문 알림을 제어합니다. 자세한 권고는 [알림과 활동 보기](/ko/guide/desktop-app/notifications/)를 참고하세요.

### Appearance

밝은 화면, 어두운 화면 또는 시스템 설정 따르기를 선택할 수 있습니다. 강조색, 배경색, 전경색, 인터페이스 글꼴, 코드 글꼴, 글자 크기도 조정할 수 있습니다. 긴 코드 검토에서는 테마 효과보다 충분한 대비와 읽기 좋은 글자 크기를 우선하세요.

## 여기에서 해결할 수 없는 것

- 저장소 수준의 규칙은 `AGENTS.md`에 작성합니다.
- CLI와 Agent의 지속적인 설정은 주로 `config.toml`에 작성합니다.
- 파일, 네트워크, 명령의 사용 가능 여부는 샌드박스, 승인, 조직 정책이 함께 결정합니다.
- 조직의 관리 정책이 개인에게 허용되는 기능을 제한할 수 있습니다.

따라서 “설정에 보인다”는 사실만으로 현재 작업에서 사용할 권한이 있다는 뜻은 아닙니다. 거부가 발생하면 먼저 [권한과 샌드박스](/ko/guide/permissions-and-sandbox/)를 읽고, 곧바로 권한을 넓히지는 마세요.

## 변경 후 확인

한 번에 한 종류의 설정만 바꾸고 위험이 낮은 채팅으로 효과를 확인하세요. 이전 값을 기록하고 예상한 대로 동작하는지 확인한 뒤 다음으로 넘어갑니다. 예상과 다르면 먼저 기본값으로 되돌리고 앱 버전, 운영체제 권한, 조직 정책을 살펴보세요.

## 공식 근거

- [ChatGPT 데스크톱 앱 설정](https://learn.chatgpt.com/docs/app/settings)
- [Codex 설정 기본 사항](https://learn.chatgpt.com/docs/config)
- [권한](https://learn.chatgpt.com/docs/permissions)
