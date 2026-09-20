---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "당시 공식 Pricing 및 Authentication 페이지와 대조했습니다. 이 페이지는 접근 방식과 문제 해결 순서를 설명하며 가격, 한도, 변동이 큰 기능 목록을 고정하지 않습니다."
  checkedAt: "2026-08-26"
title: 계정, 요금제, 접근 권한
description: ChatGPT 요금제, API key 사용량, 조직 작업 공간 권한을 구분합니다.
locale: ko
source_locale: zh-CN
source_revision: ecfa8f9
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 10
---

현재 Codex는 **ChatGPT 요금제** 또는 **사용량에 따라 요금을 내는 API key**로 이용할 수 있습니다. 다만 두 방식이 제공하는 접근 경로와 관리 범위가 완전히 같지는 않습니다.

## 먼저 접근 방식 선택하기

| 방식 | 적합한 사용 | 사용 가능 범위 |
|---|---|---|
| ChatGPT로 로그인 | 개인 대화형 사용, 데스크톱, Cloud, 조직 작업 공간 | ChatGPT 요금제 한도, 작업 공간 역할, 관리자 정책의 적용을 받음 |
| API key 사용 | 로컬 Codex, 스크립트, CI | API 사용량에 따라 과금됨. ChatGPT 작업 공간이나 Cloud에 의존하는 일부 기능은 사용할 수 없음 |

현재 공식 Pricing 페이지에는 ChatGPT Work와 Codex가 Free, Go, Plus, Pro, Business, Edu, Enterprise 등의 요금제에 포함되어 있습니다. 하지만 가격, 한도, 모델, 제공 기능은 바뀔 수 있습니다. 이 핸드북에 가격표를 복사하지 않으므로 [공식 실시간 Pricing 페이지](https://learn.chatgpt.com/docs/pricing)를 직접 확인하세요.

## 계정이 있어도 사용하지 못할 수 있는 이유

로그인은 첫 단계일 뿐입니다. 최종 접근 가능 여부는 다음 사항에도 달려 있습니다.

1. 현재 요금제가 사용하려는 진입점이나 기능을 지원하는지
2. 해당 지역에서 현재 제품을 사용할 수 있는지
3. 조직에서 좌석, 역할, 작업 공간 권한을 할당했는지
4. 관리자가 관리형 설정으로 로그인 방식, 모델 또는 로컬 기능을 제한했는지
5. 현재 시간 창이나 주간 사용 한도에 도달했는지

## 개인 사용자 체크리스트

- 공식 페이지에서 올바른 ChatGPT 계정으로 로그인할 수 있음
- 요금제 한도를 사용하는지, API 사용량에 따라 과금되는지 알고 있음
- 대상 클라이언트에 올바른 계정이 표시됨
- 한도 알림이 나오면 클라이언트를 반복해 재설치하는 대신 실시간 사용량을 확인함

## 팀 및 기업 사용자 체크리스트

- 같은 이메일의 개인 공간이 아니라 올바른 작업 공간을 선택했음
- 관리자가 구성원, 좌석, 역할 설정을 완료했음
- SSO, MFA, 데이터 보존, 지역 정책이 조직 요구 사항에 맞음
- 관리형 설정이 로컬 로그인 방식을 다른 모드로 강제하지 않음
- API key가 올바른 API organization에 속하며, 그 정책을 ChatGPT 작업 공간 정책과 혼동하지 않음

## 판단 예시

CLI에서는 API key로 로그인할 수 있지만 Cloud 버튼을 사용할 수 없다면, 반드시 설치 문제인 것은 아닙니다. Cloud에는 ChatGPT 로그인이 필요하고 ChatGPT 요금제와 작업 공간 권한이 적용됩니다. API key는 주로 로컬 및 프로그래밍 방식의 작업 흐름에 사용됩니다.

다음에는 [로그인과 인증](/ko/guide/getting-started/sign-in-and-authentication/)을 읽어 보세요.
