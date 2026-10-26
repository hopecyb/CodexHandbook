---
title: Secrets와 환경 변수
description: Cloud setup용 Secret과 채팅 전반에 적용되는 일반 환경 변수를 올바르게 구분합니다.
locale: ko
source_locale: zh-CN
source_revision: "78937be"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: Cloud
  checkedAt: '2026-08-26'
reviewed_at: "2026-10-26"
---

Cloud 환경 변수와 Secrets는 사용 가능한 시점이 다릅니다. 이 차이가 각각 안전하게 지원할 수 있는 일을 결정합니다. 단순히 “화면에서 값이 가려지는가”만의 문제가 아닙니다.

| 종류 | 사용 가능한 단계 | 적합한 내용 |
|---|---|---|
| 환경 변수 | setup과 Agent 단계 전체 | 실행 모드, 공개 API 기본 주소처럼 민감하지 않은 설정 |
| Secret | setup script에서만 | 비공개 패키지 token, 의존성 설치에 필요한 자격 증명 |

Secret은 추가로 암호화해 저장하고 작업 실행 중에만 복호화하며, Agent 단계가 시작되기 전에 제거됩니다. Agent가 실행 중 프로덕션 API를 호출할 때 쓰는 범용 자격 증명 통로가 아닙니다.

## 올바른 예: 비공개 패키지 설치

환경 설정에서 `NPM_TOKEN` Secret을 만듭니다. setup script가 이를 이용해 임시 인증 설정을 만든 다음 의존성을 설치합니다.

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

Agent 단계에는 token이 더 이상 필요하지 않으며 이미 설치된 의존성만 사용합니다. setup 로그에 Secret을 `echo`해서는 안 됩니다.

## 잘못된 예

```text
프로덕션 API_KEY를 일반 환경 변수로 설정한 뒤,
Agent에게 외부 API를 curl로 호출해 실제 주문을 검증하라고 한다.
```

이렇게 하면 민감한 값이 Agent 단계 내내 유지되고, 네트워크가 열려 있을 때 외부 유출이나 잘못된 작업의 위험이 생깁니다. 테스트 fixture, mock, 권한을 최소화한 임시 테스트 자격 증명을 사용하거나, 인증이 꼭 필요한 준비 작업을 setup 단계로 제한하세요.

## 설정 점검

1. setup과 Agent 단계에 각각 실제로 필요한 값을 나열합니다.
2. 민감하고 설치에만 쓰이는 값은 Secret을 사용합니다.
3. Agent에 필요한 민감하지 않은 설정은 환경 변수로 지정합니다.
4. 값 자체를 prompt, issue, PR, 저장소 또는 `AGENTS.md`에 적지 않습니다.
5. secret scanner를 실행하고 setup 로그를 확인합니다.
6. 사용하지 않는 자격 증명은 삭제하고, 사용 중인 자격 증명은 주기적으로 교체합니다.

setup은 별도의 Bash 세션에서 실행됩니다. 일반적인 `export` 값은 Agent 단계로 자동 전달되지 않습니다. 채팅 전반에 필요한 민감하지 않은 값은 임시 shell 상태에 의존하지 말고 환경 변수로 직접 설정하세요.

## CI와의 관계

GitHub Actions Secrets와 Codex Cloud Secrets는 서로 다른 저장소에 보관되며 자동으로 동기화되지 않습니다. 문서화를 위해 변수 **이름**은 통일할 수 있지만, 작업에 필요한 범위를 넘는 권한이 있는 동일한 프로덕션 token을 복사해서는 안 됩니다.

## 유출 후 조치

자격 증명을 즉시 폐기하거나 교체한 뒤 로그, 채팅, issue, Git 기록에 노출된 내용을 정리하세요. 현재 파일에서만 지우는 것으로는 이미 퍼진 Secret을 회수할 수 없습니다.

## 공식 근거

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)
