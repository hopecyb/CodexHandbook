---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "현재 공식 Authentication 페이지와 대조하여 ChatGPT 및 API key를 이용한 두 가지 로컬 로그인 방식, Cloud의 ChatGPT 로그인 요구 사항, CLI 명령, 캐시 공유, 자격 증명 저장 범위를 확인했다."
  checkedAt: "2026-08-26"
title: 로그인 및 인증
description: 로컬 클라이언트와 Cloud에 맞는 로그인 방식을 선택하고 현재 사용 중인 계정을 안전하게 확인합니다.
sidebar:
  order: 60
locale: ko
source_locale: zh-CN
source_revision: 'ea83fa6'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Codex에서 OpenAI 모델을 사용할 때 개인에게는 두 가지 로그인 방식이 있습니다.

- **ChatGPT로 로그인:** 구독에 포함된 사용량을 사용하며 ChatGPT 작업 공간의 권한과 데이터 정책을 따릅니다.
- **API key로 로그인:** API 사용량에 따라 요금이 청구되며 API organization의 데이터 및 관리 정책을 따릅니다.

ChatGPT 데스크톱 App, Codex CLI, IDE 통합의 로컬 작업에서는 두 방식을 모두 사용할 수 있습니다. **Codex Cloud에서는 ChatGPT 로그인이 필요합니다.**

## ChatGPT로 로그인

로컬 클라이언트가 브라우저를 열어 인증을 마친 뒤 자격 증명을 클라이언트로 전달합니다.

- 데스크톱 App: 로그아웃 상태의 로그인 화면에서 계속 진행을 선택합니다.
- CLI: `codex login`을 실행합니다.
- IDE: 로그아웃 상태의 로그인 화면에서 ChatGPT로 로그인을 선택합니다.

로그인한 뒤에는 현재 계정과 작업 공간을 확인하세요. 특히 개인 공간과 회사 작업 공간을 모두 사용하는 경우 중요합니다.

## API key로 로그인

OpenAI Platform에서 key를 만든 뒤 명령 기록에 직접 입력하지 마세요. CLI에서는 표준 입력을 사용합니다.

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

데스크톱 App에서는 ‘다른 방식으로 로그인’으로 들어가고, IDE에서는 ‘Use API Key’를 선택합니다. API key는 로컬 작업과 신뢰할 수 있는 CI에 적합하지만, ChatGPT 작업 공간이나 Cloud에 의존하는 기능은 제공하지 않습니다.

## CLI 로그인 상태 확인 및 로그아웃

```bash
codex login status
codex logout
```

CLI와 IDE는 캐시에 저장된 로그인 정보를 공유합니다. 한쪽에서 로그아웃하면 다른 쪽도 다음에 시작할 때 다시 로그인해야 할 수 있습니다.

## 자격 증명 보안

- `~/.codex/auth.json`을 커밋하거나 지원 티켓, 채팅, 로그에 붙여 넣지 마세요.
- 운영체제의 자격 증명 저장소를 우선 사용하세요. 파일에 저장된 token은 비밀번호처럼 취급해야 합니다.
- CI에는 철회할 수 있는 전용 자격 증명을 사용하고, 개인의 장기 사용 key를 재사용하지 마세요.
- Codex Cloud는 코드 저장소에 직접 접근하므로 계정에 MFA를 활성화하세요. 조직 SSO에서는 관리자가 MFA를 의무화해야 합니다.
- 조직의 제한을 우회하려고 개인 key로 바꾸지 마세요. 먼저 작업 공간과 관리형 정책을 확인하세요.

## 로그인했지만 여전히 사용할 수 없을 때

다음 순서로 확인하세요.

1. 현재 계정 또는 API organization이 올바른지 확인합니다.
2. 올바른 ChatGPT 작업 공간에 들어왔는지 확인합니다.
3. 사용하려는 기능에 API key가 아닌 ChatGPT 로그인이 필요한지 확인합니다.
4. 요금제, 좌석, 역할 또는 관리자 정책이 접근을 제한하는지 확인합니다.
5. 마지막으로 클라이언트 캐시, 네트워크, 버전을 확인합니다.

CLI 로그인에는 전용 로그가 있습니다. 공식 지원을 받거나 로그인 문제를 조사할 때 사용할 수 있지만, 먼저 민감한 정보가 포함되어 있는지 확인해야 합니다.

요금제에 따른 사용 범위는 [계정, 요금제 및 접근 권한](/ko/guide/getting-started/account-plans-and-access/)에서 확인하세요. 자세한 내용은 [공식 Authentication 페이지](https://learn.chatgpt.com/docs/auth)를 기준으로 삼으세요.
