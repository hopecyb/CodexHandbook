---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Cloud 문제 해결
description: 저장소, setup, 네트워크, Agent 실행, 결과 전달의 다섯 단계에서 Cloud 실패 원인을 찾습니다.
locale: ko
source_locale: zh-CN
source_revision: 019fac1
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 80
---

Cloud 작업을 다시 시도하면 시간이 다시 들지만, 빠진 권한이나 의존성, 네트워크 설정이 자동으로 채워지지는 않습니다. 먼저 어느 단계에서 실패했는지 판단하세요.

## 다섯 단계로 원인 분류하기

| 단계 | 흔한 증상 | 먼저 확인할 것 |
|---|---|---|
| 저장소 연결 | 저장소가 목록에 없음, 403, 브랜치가 없음 | GitHub 권한 범위, 조직 정책, 시작 브랜치 |
| 컨테이너/setup | `command not found`, 의존성 설치 실패 | 고정된 런타임, setup script, Secret |
| Agent 네트워크 | setup에서는 다운로드되지만 Agent의 `curl`이 실패 | Agent access 기본값 Off, allowlist, HTTP 메서드 |
| Agent 실행 | 수정 방향이 빗나감, 테스트 명령이 없음 | prompt 범위, `AGENTS.md`, 작업 로그 |
| 결과 전달 | diff가 불완전함, PR을 열 수 없음 | 브랜치 상태, 쓰기 권한, 보호 규칙 |

## 먼저 증거 남기기

저장소, 시작 commit, 환경 이름, 실패 단계, 첫 번째 의미 있는 오류, 전체 명령을 기록하세요. 마지막의 “exit 1” 한 줄만 남기지 마세요.

```text
환경: api-node22
시작점: main@abc123
단계: setup
명령: pnpm install --frozen-lockfile
첫 번째 오류: ERR_PNPM_FETCH_401 ...
로컬과의 차이: 로컬에서는 ~/.npmrc를 사용하지만 Cloud에는 NPM_TOKEN이 설정되지 않음
```

이런 기록은 다음 실행에서 다시 추측하게 하는 대신 수정해야 할 곳을 바로 가리킵니다.

## 자주 발생하는 문제

### setup에서는 Secret을 읽지만 Agent에서는 값이 비어 있음

설계된 동작입니다. Secret은 Agent 단계가 시작되기 전에 제거됩니다. 자격 증명이 필요한 설치 작업은 setup에서 하세요. 보호 장치를 우회하려고 일반 환경 변수로 바꾸지 마세요.

### setup에서는 인터넷에 연결되지만 Agent에서는 연결되지 않음

이 또한 기본 동작입니다. 작업에 Agent의 인터넷 연결이 꼭 필요하다면 환경에서 연결을 켜고 도메인과 HTTP 메서드를 제한한 다음 로그를 검토하세요.

### 캐시 때문에 오래된 의존성을 사용함

setup, maintenance, 변수 또는 secrets를 바꾸면 캐시가 자동으로 무효화됩니다. 저장소 자체의 변경으로 캐시가 호환되지 않는 경우 환경 페이지에서 **Reset cache**를 사용하세요. 팀이 공유하는 환경이라면 먼저 다른 사용자에게 미칠 영향을 평가하세요.

### 로컬에서는 통과하지만 Cloud에서는 실패함

Node/Python 버전, lockfile, 시스템 의존성, 로컬의 숨은 설정, VPN/localhost 서비스, 대소문자를 구분하는 경로를 비교하세요. 차이를 명시적인 setup 단계와 저장소 규칙으로 옮기세요.

### PR review가 시작되지 않음

해당 저장소에 Cloud가 설정되어 있고 **Code review**가 켜져 있는지, 댓글이 `@codex review`인지, GitHub 통합 권한이 충분한지 확인하세요. 자동 reviews는 별도로 활성화해야 합니다.

## 언제 로컬로 돌아갈까

문제가 로컬 서비스에 의존하거나, 연속 두 번의 실행에서 업무 코드가 아닌 환경만 수정하고 있다면 먼저 로컬에서 최소 재현을 하세요. 성공한 명령, 버전, 테스트를 `AGENTS.md`나 setup에 기록한 뒤 다시 Cloud에 맡기세요.

## 해결 후 확인할 사항

- [ ] 같은 환경에서 깨끗한 시작점으로 반복 실행할 수 있음
- [ ] 더 넓은 저장소 권한이나 unrestricted 네트워크로 문제를 가리지 않았음
- [ ] 로그에 Secret이 노출되지 않았음
- [ ] 결과 diff와 테스트를 사람이 다시 검토했음

## 공식 근거

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
